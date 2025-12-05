import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ClientModal, type Client } from '../components/ClientModal';
import { Plus, Search, Building, Folder, ArrowRight, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | undefined>(undefined);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Clientes</h1>
          <p className="text-gray-400">Gerencie seus clientes e contatos.</p>
        </div>
        <button
          onClick={() => {
            setSelectedClient(undefined);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Novo Cliente
        </button>
      </div>

      {/* Search */}
      <div className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome ou empresa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:border-primary outline-none"
          />
        </div>
      </div>

      {/* Clients Grid */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <motion.div
              layoutId={client.id}
              key={client.id}
              className="group bg-[#0a0a0a] border border-white/5 hover:border-white/20 rounded-xl p-6 transition-all hover:shadow-lg flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 font-bold text-xl border border-white/5">
                  {client.name.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={() => {
                    setSelectedClient(client);
                    setIsModalOpen(true);
                  }}
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  Editar
                </button>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{client.name}</h3>
              {client.company && (
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Building className="w-3 h-3" />
                  {client.company}
                </div>
              )}

              <div className="space-y-2 mb-6 flex-1">
                {client.project_slug && (
                  <div className="flex items-center gap-2 text-sm text-primary/80 mt-2">
                    <Folder className="w-3 h-3" />
                    <span className="capitalize">{client.project_slug.replace('-', ' ')}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedClient(client);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium border border-white/5"
                >
                  <Edit2 className="w-4 h-4" />
                  Editar
                </button>
                <Link
                  to={`/business/clients/${client.id}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}

          {filteredClients.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              Nenhum cliente encontrado.
            </div>
          )}
        </div>
      )}

      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={selectedClient}
        onClientSaved={handleClientSaved}
      />
    </div>
  );
};
