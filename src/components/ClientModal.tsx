import { useState, useEffect } from 'react';
import { X, User, Building, Folder } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  project_slug?: string;
  created_at: string;
}

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client?: Client;
  onClientSaved: (client: Client) => void;
}

export const ClientModal = ({ isOpen, onClose, client, onClientSaved }: ClientModalProps) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [projectSlug, setProjectSlug] = useState('');
  const [projects, setProjects] = useState<{slug: string, title: string}[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (client) {
      setName(client.name);
      setCompany(client.company || '');
      setProjectSlug(client.project_slug || '');
    } else {
      setName('');
      setCompany('');
      setProjectSlug('');
    }
  }, [client, isOpen]);

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('slug, title').order('title');
    if (data) setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);

    try {
      const clientData = {
        name,
        company: company || null,
        project_slug: projectSlug || null,
      };

      let result;

      if (client) {
        const { data, error } = await supabase
          .from('clients')
          .update(clientData)
          .eq('id', client.id)
          .select()
          .single();
        
        if (error) throw error;
        result = data;
      } else {
        const { data, error } = await supabase
          .from('clients')
          .insert([clientData])
          .select()
          .single();

        if (error) throw error;
        result = data;
      }

      onClientSaved(result);
      onClose();
    } catch (error: any) {
      console.error('Error saving client:', error);
      alert(`Erro ao salvar cliente: ${error.message || 'Erro desconhecido'}`);
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
          className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h2 className="text-lg font-semibold text-white">
              {client ? 'Editar Cliente' : 'Novo Cliente'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <User className="w-4 h-4" /> Nome
              </label>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary outline-none"
                placeholder="Nome do cliente"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Building className="w-4 h-4" /> Empresa
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary outline-none"
                placeholder="Nome da empresa"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Folder className="w-4 h-4" /> Projeto Associado
              </label>
              <select
                value={projectSlug}
                onChange={(e) => setProjectSlug(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary outline-none"
              >
                <option value="">Selecione um projeto...</option>
                {projects.map(p => (
                  <option key={p.slug} value={p.slug}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="px-4 py-2 text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? 'Salvando...' : 'Salvar Cliente'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
