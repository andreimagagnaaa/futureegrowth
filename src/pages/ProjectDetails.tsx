import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { KanbanBoard } from '../components/KanbanBoard';
import { Users, Layout, Plus, Search, MoreVertical, Edit2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { ClientModal, type Client } from '../components/ClientModal';

const ClientsList = ({ projectSlug }: { projectSlug: string }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchClients();
  }, [projectSlug]);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('project_slug', projectSlug)
        .order('name');

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClientSaved = (savedClient: Client) => {
    setClients(prev => {
      const exists = prev.find(c => c.id === savedClient.id);
      if (exists) {
        return prev.map(c => c.id === savedClient.id ? savedClient : c);
      }
      return [savedClient, ...prev];
    });
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Buscar clientes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none w-64"
          />
        </div>
        <button 
          onClick={() => {
            setSelectedClient(undefined);
            setIsModalOpen(true);
          }}
          className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Novo Cliente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClients.map((client) => (
          <motion.div
            layoutId={client.id}
            key={client.id}
            className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 hover:border-white/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 font-bold border border-white/5">
                {client.name.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={() => {
                  setSelectedClient(client);
                  setIsModalOpen(true);
                }}
                className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-medium text-white mb-1">{client.name}</h3>
            {client.company && (
              <p className="text-sm text-gray-500 mb-4">{client.company}</p>
            )}

            <Link
              to={`/business/clients/${client.id}`}
              className="flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium border border-white/5"
            >
              Ver Detalhes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}

        {filteredClients.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            Nenhum cliente encontrado neste projeto.
          </div>
        )}
      </div>

      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={selectedClient}
        onClientSaved={handleClientSaved}
      />
    </div>
  );
};

export const ProjectDetails = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState<'board' | 'clients'>('board');
  const [projectTitle, setProjectTitle] = useState(slug);
  const [projectDesc, setProjectDesc] = useState('');

  useEffect(() => {
    const fetchProjectInfo = async () => {
      if (!slug) return;
      
      const { data } = await supabase
        .from('projects')
        .select('title, description')
        .eq('slug', slug)
        .single();
        
      if (data) {
        setProjectTitle(data.title);
        setProjectDesc(data.description);
      } else {
        // Fallback for hardcoded names if DB fetch fails or empty
        const names: Record<string, string> = {
          'futuree-growth': 'Futuree Growth',
          'futuree-solutions': 'Futuree Solutions',
          'futuree-pages': 'Futuree Pages',
          'futuree-agents': 'Futuree Agents',
          'futuree-ai': 'Futuree AI',
          'futuree-platform': 'Futuree Platform',
        };
        setProjectTitle(names[slug] || slug);
      }
    };

    fetchProjectInfo();
  }, [slug]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-white mb-2">{projectTitle}</h1>
            <p className="text-gray-400">{projectDesc || 'Gerencie tarefas, clientes e o progresso do projeto.'}</p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
              Em Andamento
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab('board')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'board' ? 'text-primary' : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4" />
              Kanban Board
            </div>
            {activeTab === 'board' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('clients')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'clients' ? 'text-primary' : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Clientes
            </div>
            {activeTab === 'clients' && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-250px)]">
        {activeTab === 'board' ? (
          <KanbanBoard projectSlug={slug || ''} />
        ) : (
          <ClientsList projectSlug={slug || ''} />
        )}
      </div>
    </div>
  );
};
