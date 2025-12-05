import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Calendar, CheckCircle2, Circle, Clock, Trash2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './Input';
import { Button } from './Button';

interface Task {
  id: string;
  title: string;
  project: string;
  status: 'todo' | 'in_progress' | 'done';
  due_date: string | null;
  priority: 'low' | 'medium' | 'high';
}

const projects = [
  'Futuree Solutions',
  'Futuree Growth',
  'Futuree Pages',
  'Futuree Agents',
  'Futuree AI',
  'Futuree Platform',
  'Futuree Vision AI',
  'Futuree Business School'
];

export const Roadmap = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState({ title: '', project: projects[0], due_date: '' });
  const [isAdding, setIsAdding] = useState(false);

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
      setIsLoading(false);
    }
  };

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title) return;

    setIsAdding(true);
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert([{
          title: newTask.title,
          project: newTask.project,
          status: 'todo',
          due_date: newTask.due_date || null,
          priority: 'medium'
        }])
        .select();

      if (error) throw error;

      if (data) {
        setTasks([data[0], ...tasks]);
        setNewTask({ ...newTask, title: '' });
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Erro ao adicionar tarefa');
    } finally {
      setIsAdding(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Task['status']) => {
    // Optimistic update
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));

    try {
      const { error } = await supabase
        .from('tasks')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating task:', error);
      fetchTasks(); // Revert on error
    }
  };

  const deleteTask = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

    setTasks(tasks.filter(t => t.id !== id));

    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting task:', error);
      fetchTasks();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in_progress': return <Clock className="h-5 w-5 text-yellow-500" />;
      default: return <Circle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif text-white mb-1">Roadmap & Tasks</h2>
          <p className="text-gray-400 text-sm">Gestão centralizada do ecossistema</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Sync
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="mb-10 bg-white/5 p-4 rounded-xl border border-white/5">
        <div className="grid md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5">
            <Input
              placeholder="Nova tarefa..."
              value={newTask.title}
              onChange={e => setNewTask({ ...newTask, title: e.target.value })}
              className="bg-black/50 border-white/10"
            />
          </div>
          <div className="md:col-span-3">
            <select
              value={newTask.project}
              onChange={e => setNewTask({ ...newTask, project: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
            >
              {projects.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <Input
              type="date"
              value={newTask.due_date}
              onChange={e => setNewTask({ ...newTask, due_date: e.target.value })}
              className="bg-black/50 border-white/10 text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full h-[46px]" disabled={isAdding}>
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </form>

      {/* Task List */}
      <div className="space-y-3">
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">Carregando roadmap...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-10 text-gray-500 border border-dashed border-white/10 rounded-xl">
            Nenhuma tarefa encontrada. Adicione a primeira acima.
          </div>
        ) : (
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <button
                  onClick={() => updateStatus(task.id, task.status === 'done' ? 'todo' : 'done')}
                  className="shrink-0 hover:scale-110 transition-transform"
                >
                  {getStatusIcon(task.status)}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className={`font-medium truncate ${task.status === 'done' ? 'text-gray-500 line-through' : 'text-white'}`}>
                    {task.title}
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/10">
                      {task.project}
                    </span>
                    {task.due_date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(task.due_date).toLocaleDateString('pt-BR')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <select
                    value={task.status}
                    onChange={(e) => updateStatus(task.id, e.target.value as Task['status'])}
                    className="bg-black/50 border border-white/10 rounded text-xs text-gray-400 py-1 px-2 focus:outline-none"
                  >
                    <option value="todo">A Fazer</option>
                    <option value="in_progress">Em Progresso</option>
                    <option value="done">Concluído</option>
                  </select>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
