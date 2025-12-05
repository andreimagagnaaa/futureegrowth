import { useState, useEffect } from 'react';
import { X, Calendar, Flag, AlignLeft, Trash2, User, Repeat } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in_progress' | 'done';
  project_slug: string;
  created_at: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  due_date?: string;
  client_id?: string;
  clients?: { name: string };
  recurrence?: 'none' | 'daily' | 'weekly' | 'monthly';
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task?: Task; // If provided, we are editing. If null, we are creating.
  projectSlug?: string; // Required if creating
  clientId?: string; // Optional, for linking to a client
  onTaskSaved: (task: Task) => void;
  onTaskDeleted?: (taskId: string) => void;
}

export const TaskModal = ({ isOpen, onClose, task, projectSlug, clientId, onTaskSaved, onTaskDeleted }: TaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');
  const [recurrence, setRecurrence] = useState<'none' | 'daily' | 'weekly' | 'monthly'>('none');
  const [selectedClientId, setSelectedClientId] = useState<string>('');
  const [clients, setClients] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setPriority(task.priority || 'medium');
      // Use string manipulation to avoid timezone shifts
      setDueDate(task.due_date ? task.due_date.split('T')[0] : '');
      setRecurrence(task.recurrence || 'none');
      setSelectedClientId(task.client_id || '');
    } else {
      // Reset for new task
      setTitle('');
      setDescription('');
      setPriority('medium');
      setDueDate('');
      setRecurrence('none');
      setSelectedClientId(clientId || '');
    }
    fetchClients();
  }, [task, isOpen, clientId]);

  const fetchClients = async () => {
    const currentProjectSlug = task?.project_slug || projectSlug;
    let query = supabase.from('clients').select('id, name').order('name');
    
    if (currentProjectSlug) {
      query = query.eq('project_slug', currentProjectSlug);
    }
    
    const { data } = await query;
    if (data) setClients(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);

    try {
      const taskData = {
        title,
        description,
        priority,
        due_date: dueDate || null,
        recurrence,
        project_slug: task?.project_slug || projectSlug,
        client_id: selectedClientId || null,
      };

      let result;

      if (task) {
        // Update
        const { data, error } = await supabase
          .from('tasks')
          .update(taskData)
          .eq('id', task.id)
          .select()
          .single();
        
        if (error) throw error;
        result = data;
      } else {
        // Create
        const { data, error } = await supabase
          .from('tasks')
          .insert([{ ...taskData, status: 'todo' }])
          .select()
          .single();

        if (error) throw error;
        result = data;
      }

      onTaskSaved(result);
      onClose();
    } catch (error) {
      console.error('Error saving task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!task || !onTaskDeleted) return;
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;
    
    setLoading(true);
    try {
      const { error } = await supabase.from('tasks').delete().eq('id', task.id);
      if (error) throw error;
      onTaskDeleted(task.id);
      onClose();
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                {task ? 'Editar Tarefa' : 'Nova Tarefa'}
              </span>
              {task && <span className="text-xs">ID: {task.id.slice(0, 8)}</span>}
            </div>
            <div className="flex items-center gap-2">
              {task && (
                <button 
                  onClick={handleDelete}
                  className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                  title="Excluir"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Title */}
            <div>
              <input
                autoFocus
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título da tarefa"
                className="w-full bg-transparent text-2xl font-medium text-white placeholder-gray-600 border-none focus:ring-0 p-0"
              />
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Priority */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <Flag className="w-4 h-4" /> Prioridade
                </label>
                <div className="flex gap-2">
                  {(['low', 'medium', 'high'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPriority(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        priority === p 
                          ? p === 'high' ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                          : p === 'medium' ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                          : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                          : 'bg-white/5 border-white/10 text-gray-500 hover:bg-white/10'
                      }`}
                    >
                      {p === 'high' ? 'Alta' : p === 'medium' ? 'Média' : 'Baixa'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <Calendar className="w-4 h-4" /> Data de Entrega
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-primary outline-none"
                />
              </div>

              {/* Recurrence */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <Repeat className="w-4 h-4" /> Recorrência
                </label>
                <select
                  value={recurrence}
                  onChange={(e) => setRecurrence(e.target.value as any)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-primary outline-none"
                >
                  <option value="none">Não repetir</option>
                  <option value="daily">Diariamente</option>
                  <option value="weekly">Semanalmente</option>
                  <option value="monthly">Mensalmente</option>
                </select>
              </div>

              {/* Client Selector */}
              {!clientId && (
                <div className="space-y-2 sm:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <User className="w-4 h-4" /> Cliente
                  </label>
                  <select
                    value={selectedClientId}
                    onChange={(e) => setSelectedClientId(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-primary outline-none"
                  >
                    <option value="">Sem cliente associado</option>
                    {clients.map(client => (
                      <option key={client.id} value={client.id}>{client.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <AlignLeft className="w-4 h-4" /> Descrição
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Adicione mais detalhes sobre esta tarefa..."
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-primary outline-none resize-none"
              />
            </div>

          </form>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 flex justify-end gap-3 bg-[#0a0a0a]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || !title.trim()}
              className="px-4 py-2 text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Salvando...' : 'Salvar Tarefa'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
