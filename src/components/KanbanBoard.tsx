import { useState, useEffect } from 'react';
import { Plus, MoreHorizontal, Clock, CheckCircle2, Circle, Calendar, User, ArrowUpDown } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { TaskModal, type Task } from './TaskModal';
import { formatDate, getDueDateStatus } from '../lib/dateUtils';

interface KanbanBoardProps {
  projectSlug: string;
}

const COLUMNS = [
  { id: 'todo', label: 'A Fazer', icon: Circle, color: 'text-gray-400' },
  { id: 'in_progress', label: 'Em Progresso', icon: Clock, color: 'text-blue-400' },
  { id: 'done', label: 'Concluído', icon: CheckCircle2, color: 'text-green-400' },
];

export const KanbanBoard = ({ projectSlug }: KanbanBoardProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<'newest' | 'closest' | 'furthest'>('closest');

  useEffect(() => {
    fetchTasks();
  }, [projectSlug]);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*, clients(name)')
        .eq('project_slug', projectSlug)
        .order('created_at', { ascending: false });

      if (error) throw error;
      // @ts-ignore - Supabase types might not infer the join correctly without full generation
      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskSaved = (savedTask: Task) => {
    setTasks(prev => {
      const exists = prev.find(t => t.id === savedTask.id);
      if (exists) {
        return prev.map(t => t.id === savedTask.id ? savedTask : t);
      }
      return [savedTask, ...prev];
    });
  };

  const handleTaskDeleted = (taskId: string) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const updateStatus = async (e: React.MouseEvent, taskId: string, newStatus: 'todo' | 'in_progress' | 'done') => {
    e.stopPropagation(); // Prevent opening modal
    
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    // Optimistic update
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));

    try {
      const { error } = await supabase
        .from('tasks')
        .update({ status: newStatus })
        .eq('id', taskId);

      if (error) throw error;

      // Handle Recurrence
      if (newStatus === 'done' && task.recurrence && task.recurrence !== 'none' && task.due_date) {
        const currentDueDate = new Date(task.due_date);
        // Fix timezone offset for calculation
        const date = new Date(currentDueDate.getTime() + currentDueDate.getTimezoneOffset() * 60000);
        
        let nextDate = new Date(date);
        if (task.recurrence === 'daily') nextDate.setDate(date.getDate() + 1);
        if (task.recurrence === 'weekly') nextDate.setDate(date.getDate() + 7);
        if (task.recurrence === 'monthly') nextDate.setMonth(date.getMonth() + 1);

        const nextDateStr = nextDate.toISOString().split('T')[0];

        // Prepare new task data
        const { id, created_at, clients, ...taskData } = task;
        
        const { data: createdTask, error: createError } = await supabase
          .from('tasks')
          .insert([{ ...taskData, status: 'todo', due_date: nextDateStr }])
          .select('*, clients(name)')
          .single();

        if (createError) throw createError;

        if (createdTask) {
          // @ts-ignore
          setTasks(prev => [createdTask, ...prev]);
        }
      }
    } catch (error) {
      console.error('Error updating task:', error);
      fetchTasks(); // Revert on error
    }
  };

  const openNewTaskModal = () => {
    setSelectedTask(undefined);
    setIsModalOpen(true);
  };

  const openEditTaskModal = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    if (sortOrder === 'closest' || sortOrder === 'furthest') {
      if (!a.due_date && !b.due_date) return 0;
      if (!a.due_date) return 1;
      if (!b.due_date) return -1;
      
      const dateA = new Date(a.due_date).getTime();
      const dateB = new Date(b.due_date).getTime();
      
      return sortOrder === 'closest' ? dateA - dateB : dateB - dateA;
    }
    return 0;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
          <h2 className="text-xl font-semibold text-white">Quadro de Tarefas</h2>
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 flex-1 sm:flex-none">
              <ArrowUpDown className="w-4 h-4 text-gray-400" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="bg-transparent text-sm text-gray-300 focus:outline-none border-none p-0 cursor-pointer w-full sm:w-auto"
              >
                <option value="closest" className="bg-[#0a0a0a]">Entrega: Mais Próxima</option>
                <option value="furthest" className="bg-[#0a0a0a]">Entrega: Mais Distante</option>
                <option value="newest" className="bg-[#0a0a0a]">Criação: Mais Recente</option>
              </select>
            </div>
            <button
              onClick={openNewTaskModal}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex-1 sm:flex-none"
            >
              <Plus className="w-4 h-4" />
              Nova Tarefa
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-6 min-w-[1000px] h-full pb-4">
            {COLUMNS.map(column => (
              <div key={column.id} className="flex-1 min-w-[300px] flex flex-col bg-[#0a0a0a] rounded-xl border border-white/5">
                {/* Column Header */}
                <div className="p-4 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0a0a0a] rounded-t-xl z-10">
                  <div className="flex items-center gap-3">
                    <column.icon className={`w-5 h-5 ${column.color}`} />
                    <span className="font-medium text-gray-200">{column.label}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-500 border border-white/5">
                      {tasks.filter(t => t.status === column.id).length}
                    </span>
                  </div>
                </div>

                {/* Tasks List */}
                <div className="flex-1 p-3 overflow-y-auto space-y-3 custom-scrollbar">
                  {sortedTasks
                    .filter(task => task.status === column.id)
                    .map(task => (
                      <motion.div
                        layoutId={task.id}
                        key={task.id}
                        onClick={() => openEditTaskModal(task)}
                        className="group p-4 bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-white/10 rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col gap-3"
                      >
                        {/* Header: Priority & Options */}
                        <div className="flex justify-between items-start">
                          {task.priority ? (
                            <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${getPriorityColor(task.priority)}`}>
                              {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                            </span>
                          ) : <div />}
                          
                          <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-all">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Body: Title & Desc */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-200 group-hover:text-white line-clamp-2 mb-1">
                            {task.title}
                          </h3>
                          {task.description && (
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {task.description}
                            </p>
                          )}
                        </div>

                        {/* Footer: Date & Client */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                          {/* Date */}
                          {task.due_date ? (
                            <div className={`flex items-center gap-2 text-xs ${getDueDateStatus(task.due_date, task.status)?.color || 'text-gray-500'}`}>
                              {(() => {
                                const status = getDueDateStatus(task.due_date, task.status);
                                const Icon = status?.icon || Calendar;
                                return <Icon className="w-4 h-4" />;
                              })()}
                              <div className="flex flex-col leading-none gap-0.5">
                                <span className="font-medium">{formatDate(task.due_date)}</span>
                                {getDueDateStatus(task.due_date, task.status) && (
                                  <span className="text-[10px] opacity-80 font-medium">
                                    {getDueDateStatus(task.due_date, task.status)?.label}
                                  </span>
                                )}
                              </div>
                            </div>
                          ) : <div />}

                          {/* Client */}
                          {task.clients && (
                            <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5" title={task.clients.name}>
                              <User className="w-3 h-3" />
                              <span className="max-w-[80px] truncate">{task.clients.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Quick Actions (Hover) */}
                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                          {column.id !== 'todo' && (
                            <button 
                              onClick={(e) => updateStatus(e, task.id, 'todo')}
                              className="p-1.5 hover:bg-white/10 rounded text-gray-600 hover:text-white"
                              title="Mover para A Fazer"
                            >
                              <Circle className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {column.id !== 'in_progress' && (
                            <button 
                              onClick={(e) => updateStatus(e, task.id, 'in_progress')}
                              className="p-1.5 hover:bg-white/10 rounded text-gray-600 hover:text-blue-400"
                              title="Mover para Em Progresso"
                            >
                              <Clock className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {column.id !== 'done' && (
                            <button 
                              onClick={(e) => updateStatus(e, task.id, 'done')}
                              className="p-1.5 hover:bg-white/10 rounded text-gray-600 hover:text-green-400"
                              title="Mover para Concluído"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
        projectSlug={projectSlug}
        onTaskSaved={handleTaskSaved}
        onTaskDeleted={handleTaskDeleted}
      />
    </>
  );
};
