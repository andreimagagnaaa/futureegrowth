import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { TaskModal, type Task } from '../components/TaskModal';
import { Filter, Calendar, Flag, CheckCircle2, Circle, Clock, Search, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate, getDueDateStatus } from '../lib/dateUtils';

export const AllTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'closest' | 'furthest'>('closest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
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

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesStatus && matchesPriority && matchesSearch;
  }).sort((a, b) => {
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

  return (
    <div className="p-8 w-full">
      <div className="flex flex-col gap-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Todas as Tarefas</h1>
          <p className="text-gray-400">Gerencie suas tarefas de todos os projetos em um só lugar.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center bg-[#0a0a0a] p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar tarefas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-gray-500 w-full p-0"
            />
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-primary outline-none"
            >
              <option value="closest" className="bg-[#0a0a0a]">Entrega: Mais Próxima</option>
              <option value="furthest" className="bg-[#0a0a0a]">Entrega: Mais Distante</option>
              <option value="newest" className="bg-[#0a0a0a]">Criação: Mais Recente</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-primary outline-none"
            >
              <option value="all">Todos os Status</option>
              <option value="todo">A Fazer</option>
              <option value="in_progress">Em Progresso</option>
              <option value="done">Concluído</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-gray-400" />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-primary outline-none"
            >
              <option value="all">Todas as Prioridades</option>
              <option value="high">Alta</option>
              <option value="medium">Média</option>
              <option value="low">Baixa</option>
            </select>
          </div>
        </div>

        {/* Tasks List */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredTasks.map((task) => (
              <motion.div
                layoutId={task.id}
                key={task.id}
                onClick={() => {
                  setSelectedTask(task);
                  setIsModalOpen(true);
                }}
                className="group bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 shrink-0">
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors truncate">
                      {task.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {task.project_slug}
                      </span>
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

            {filteredTasks.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Nenhuma tarefa encontrada com os filtros selecionados.
              </div>
            )}
          </div>
        )}
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
        projectSlug={selectedTask?.project_slug || ''} // Fallback, though we usually edit here
        onTaskSaved={handleTaskSaved}
        onTaskDeleted={handleTaskDeleted}
      />
    </div>
  );
};
