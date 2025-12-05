import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { type Client } from '../components/ClientModal';
import { TaskModal, type Task } from '../components/TaskModal';
import { ArrowLeft, Building, Folder, Plus, CheckCircle2, Clock, Circle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate, getDueDateStatus } from '../lib/dateUtils';

export const ClientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [client, setClient] = useState<Client | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  useEffect(() => {
    if (id) {
      fetchClientAndTasks();
    }
  }, [id]);

  const fetchClientAndTasks = async () => {
    try {
      // Fetch Client
      const { data: clientData, error: clientError } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
        .single();

      if (clientError) throw clientError;
      setClient(clientData);

      // Fetch Tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('tasks')
        .select('*')
        .eq('client_id', id)
        .order('created_at', { ascending: false });

      if (tasksError) throw tasksError;
      setTasks(tasksData || []);

    } catch (error) {
      console.error('Error fetching data:', error);
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

  const updateStatus = async (e: React.MouseEvent, taskId: string, currentStatus: string) => {
    e.stopPropagation(); // Prevent opening modal
    
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const newStatus = currentStatus === 'done' ? 'todo' : 'done';
    
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
        const date = new Date(currentDueDate.getTime() + currentDueDate.getTimezoneOffset() * 60000);
        
        let nextDate = new Date(date);
        if (task.recurrence === 'daily') nextDate.setDate(date.getDate() + 1);
        if (task.recurrence === 'weekly') nextDate.setDate(date.getDate() + 7);
        if (task.recurrence === 'monthly') nextDate.setMonth(date.getMonth() + 1);

        const nextDateStr = nextDate.toISOString().split('T')[0];

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
      // Revert on error
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: currentStatus as any } : t));
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'in_progress': return <Clock className="w-4 h-4 text-blue-400" />;
      default: return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl text-white mb-4">Cliente não encontrado</h2>
        <Link to="/business/clients" className="text-primary hover:underline">Voltar para Clientes</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <Link to="/business/clients" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Clientes
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{client.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {client.company && (
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {client.company}
                </div>
              )}
              {client.project_slug && (
                <div className="flex items-center gap-2 text-primary">
                  <Folder className="w-4 h-4" />
                  <span className="capitalize">{client.project_slug.replace('-', ' ')}</span>
                </div>
              )}
            </div>
          </div>
          
          <button
            onClick={() => {
              setSelectedTask(undefined);
              setIsTaskModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Plus className="w-4 h-4" />
            Nova Tarefa
          </button>
        </div>
      </div>

      {/* Tasks Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Tarefas do Cliente</h2>
        
        <div className="grid gap-4">
          {tasks.map((task) => (
            <motion.div
              layoutId={task.id}
              key={task.id}
              onClick={() => {
                setSelectedTask(task);
                setIsTaskModalOpen(true);
              }}
              className="group bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                <button 
                  onClick={(e) => updateStatus(e, task.id, task.status)}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors z-10 shrink-0"
                  title={task.status === 'done' ? 'Marcar como não concluído' : 'Marcar como concluído'}
                >
                  {getStatusIcon(task.status)}
                </button>
                <div className="min-w-0">
                  <h3 className={`text-base font-medium transition-colors truncate ${task.status === 'done' ? 'text-gray-500 line-through' : 'text-gray-200 group-hover:text-white'}`}>
                    {task.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {task.due_date && (
                      <span className={`flex items-center gap-1 text-xs ${getDueDateStatus(task.due_date, task.status)?.color || 'text-gray-500'}`}>
                        {(() => {
                          const status = getDueDateStatus(task.due_date, task.status);
                          const Icon = status?.icon || Calendar;
                          return <Icon className="w-3 h-3" />;
                        })()}
                        {formatDate(task.due_date)}
                        {getDueDateStatus(task.due_date, task.status) && (
                          <span className="font-medium">
                            ({getDueDateStatus(task.due_date, task.status)?.label})
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end pl-14 sm:pl-0">
                {task.priority && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {tasks.length === 0 && (
            <div className="text-center py-12 bg-[#0a0a0a] rounded-xl border border-white/5 border-dashed">
              <p className="text-gray-500 mb-2">Nenhuma tarefa encontrada para este cliente.</p>
              <button
                onClick={() => {
                  setSelectedTask(undefined);
                  setIsTaskModalOpen(true);
                }}
                className="text-primary hover:underline text-sm"
              >
                Criar primeira tarefa
              </button>
            </div>
          )}
        </div>
      </div>

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        task={selectedTask}
        projectSlug={client.project_slug || 'futuree-growth'} // Default fallback
        clientId={client.id}
        onTaskSaved={handleTaskSaved}
        onTaskDeleted={handleTaskDeleted}
      />
    </div>
  );
};
