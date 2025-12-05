import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

export const Comparison = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 bg-gradient-dark-subtle border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
      
      {/* Background VS Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-bold text-white/[0.01] pointer-events-none select-none font-serif">VS</div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            A Evolução do Jogo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            Por que o modelo tradicional não funciona mais para quem busca escala.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent z-20" />

          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-2xl border border-white/5 bg-white/[0.02] grayscale opacity-70 hover:opacity-100 transition-all duration-500 hover:bg-white/[0.04]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 border border-white/10 shadow-lg">
              O Modelo Antigo
            </div>
            <h3 className="text-2xl font-serif font-medium text-gray-400 mb-8 text-center">Agência de Tráfego</h3>
            <ul className="space-y-6">
              {[
                'Foco em Clicks e CPL (Custo por Lead)',
                'Relatórios de vaidade (Likes/Seguidores)',
                'Equipe júnior aprendendo com seu caixa',
                'Dependência total de anúncios pagos',
                'Comunicação lenta e burocrática'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-500 font-light group">
                  <X className="h-5 w-5 shrink-0 text-red-900/50 mt-0.5 group-hover:text-red-500 transition-colors" />
                  <span className="group-hover:text-gray-400 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-2xl border border-primary/20 bg-primary/[0.03] shadow-[0_0_50px_rgba(212,175,55,0.05)] hover:shadow-[0_0_80px_rgba(212,175,55,0.1)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent rounded-2xl pointer-events-none" />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse-slow">
              O Padrão Futuree
            </div>
            <h3 className="text-2xl font-serif font-medium text-white mb-8 text-center relative z-10">Assessoria de Growth</h3>
            <ul className="space-y-6 relative z-10">
              {[
                'Foco em Receita, CAC e LTV',
                'Dashboards financeiros em tempo real',
                'Estrategistas Sênior & Cientistas de Dados',
                'Ecossistema (Ads + CRM + Outbound + IA)',
                'Execução ágil e feedback curto'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-200 font-light group">
                  <div className="p-0.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-primary hover:text-white transition-colors text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 mx-auto group"
              >
                Quero migrar para o modelo Futuree
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
