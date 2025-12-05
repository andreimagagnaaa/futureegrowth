import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, Home, ChevronRight, CheckSquare, Menu, X, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  slug: string;
}

export const InternalLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id, title, slug')
        .order('title');
      
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback if table doesn't exist yet
      setProjects([
        { id: '1', title: 'Futuree Growth', slug: 'futuree-growth' },
        { id: '2', title: 'Futuree Platform', slug: 'futuree-platform' },
        { id: '3', title: 'Futuree Solutions', slug: 'futuree-solutions' },
        { id: '4', title: 'Futuree AI', slug: 'futuree-ai' },
        { id: '5', title: 'Futuree Business School', slug: 'futuree-business-school' },
        { id: '6', title: 'Futuree Pages', slug: 'futuree-pages' },
        { id: '7', title: 'Futuree Vision AI', slug: 'futuree-vision-ai' },
        { id: '8', title: 'Futuree Agents', slug: 'futuree-agents' },
      ]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('futuree_auth');
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-primary">
      {/* Sidebar */}
      <motion.aside 
        initial={{ width: 256 }}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className="border-r border-white/10 bg-[#050505] flex flex-col fixed h-full z-50 overflow-hidden"
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link to="/business" className={`flex items-center gap-2 ${!isSidebarOpen && 'justify-center w-full'}`}>
            {isSidebarOpen && (
              <span className="font-serif text-xl font-medium whitespace-nowrap">Futuree Business</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <Link
            to="/business"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/business') 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            } ${!isSidebarOpen && 'justify-center px-2'}`}
            title="Dashboard"
          >
            <Home className="w-5 h-5 min-w-[20px]" />
            {isSidebarOpen && <span className="font-medium whitespace-nowrap">Dashboard</span>}
          </Link>

          <Link
            to="/business/tasks"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/business/tasks') 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            } ${!isSidebarOpen && 'justify-center px-2'}`}
            title="Todas as Tarefas"
          >
            <CheckSquare className="w-5 h-5 min-w-[20px]" />
            {isSidebarOpen && <span className="font-medium whitespace-nowrap">Todas as Tarefas</span>}
          </Link>

          <Link
            to="/business/clients"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/business/clients') 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            } ${!isSidebarOpen && 'justify-center px-2'}`}
            title="Clientes"
          >
            <Users className="w-5 h-5 min-w-[20px]" />
            {isSidebarOpen && <span className="font-medium whitespace-nowrap">Clientes</span>}
          </Link>
          
          {isSidebarOpen && (
            <div className="pt-4 pb-2 px-4 text-xs font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
              Projetos
            </div>
          )}
          {!isSidebarOpen && <div className="h-4" />}
          
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/business/${project.slug}`}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                location.pathname.includes(project.slug)
                  ? 'bg-white/5 text-white' 
                  : 'text-gray-500 hover:text-gray-300'
              } ${!isSidebarOpen && 'justify-center px-2'}`}
              title={project.title}
            >
              {isSidebarOpen ? (
                <>
                  <ChevronRight className={`w-3 h-3 min-w-[12px] transition-transform ${location.pathname.includes(project.slug) ? 'rotate-90 text-primary' : ''}`} />
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</span>
                </>
              ) : (
                <div className={`w-2 h-2 rounded-full ${location.pathname.includes(project.slug) ? 'bg-primary' : 'bg-gray-700'}`} />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-500 hover:bg-white/5 hover:text-white transition-colors ${!isSidebarOpen && 'justify-center px-2'}`}
            title={isSidebarOpen ? "Recolher Menu" : "Expandir Menu"}
          >
            {isSidebarOpen ? <X className="w-5 h-5 min-w-[20px]" /> : <Menu className="w-5 h-5 min-w-[20px]" />}
            {isSidebarOpen && <span className="font-medium whitespace-nowrap">Recolher</span>}
          </button>

          <button 
            onClick={handleLogout}
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-colors ${!isSidebarOpen && 'justify-center px-2'}`}
            title="Sair"
          >
            <LogOut className="w-5 h-5 min-w-[20px]" />
            {isSidebarOpen && <span className="font-medium whitespace-nowrap">Sair</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main 
        animate={{ marginLeft: isSidebarOpen ? 256 : 80 }}
        className="flex-1 bg-grid-pattern relative min-h-screen transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black -z-10" />
        <div className="p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
};
