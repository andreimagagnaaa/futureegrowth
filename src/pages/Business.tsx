import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Layers, Zap, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getDueDateStatus } from '../lib/dateUtils';
import { getIcon } from '../lib/icons';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon_name: string;
}

const Business = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState({
    totalClients: 0,
    totalTasks: 0,
    overdueTasks: 0,
    projectStats: {} as Record<string, { tasks: number, clients: number }>
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch Projects
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .order('title');

      if (projectsData) {
        setProjects(projectsData);
      }

      // Fetch Clients & Tasks
      const { data: clients } = await supabase.from('clients').select('project_slug');
      const { data: tasks } = await supabase.from('tasks').select('project_slug, status, due_date');

      const projectStats: Record<string, { tasks: number, clients: number }> = {};
      
      // Initialize stats
      (projectsData || []).forEach(p => {
        projectStats[p.slug] = { tasks: 0, clients: 0 };
      });

      // Count Clients
      clients?.forEach(client => {
        if (!projectStats[client.project_slug]) projectStats[client.project_slug] = { tasks: 0, clients: 0 };
        projectStats[client.project_slug].clients++;
      });

      // Count Tasks
      let overdueCount = 0;

      tasks?.forEach(task => {
        if (!projectStats[task.project_slug]) projectStats[task.project_slug] = { tasks: 0, clients: 0 };
        if (task.status !== 'done') {
          projectStats[task.project_slug].tasks++;
          
          if (task.due_date) {
            const status = getDueDateStatus(task.due_date, task.status);
            if (status?.label === 'Atrasado') {
              overdueCount++;
            }
          }
        }
      });

      setStats({
        totalClients: clients?.length || 0,
        totalTasks: tasks?.filter(t => t.status !== 'done').length || 0,
        overdueTasks: overdueCount,
        projectStats
      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Visão geral do ecossistema Futuree.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Hoje</p>
          <p className="text-xl font-medium text-white">
            {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tarefas Atrasadas</p>
              <h3 className="text-2xl font-bold text-white">{stats.overdueTasks}</h3>
            </div>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-full" />
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Projetos Ativos</p>
              <h3 className="text-2xl font-bold text-white">{projects.length}</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total de Clientes</p>
              <h3 className="text-2xl font-bold text-white">{stats.totalClients}</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tarefas Pendentes</p>
              <h3 className="text-2xl font-bold text-white">{stats.totalTasks}</h3>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-medium text-white pt-4">Meus Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const projectStat = stats.projectStats[project.slug] || { tasks: 0, clients: 0 };
          const Icon = getIcon(project.icon_name);
          
          return (
            <Link 
              key={project.slug} 
              to={`/business/${project.slug}`}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group-hover:translate-y-[-2px]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-400 bg-black/20">
                    Ativo
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Layers className="w-4 h-4" /> {projectStat.tasks} tarefas
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {projectStat.clients} clientes
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Business;
