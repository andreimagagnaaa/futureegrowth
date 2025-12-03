import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 bg-gradient-radial-top">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <span className="mb-6 inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Assessoria de Marketing & Growth
            </span>
            <h1 className="mb-8 text-5xl font-medium leading-tight md:text-6xl lg:text-7xl">
              O Mercado não respeita esforço. <br />
              <span className="italic text-primary">
                Respeita Sistemas.
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-lg font-light text-gray-400 leading-relaxed">
              Não dependa de um canal de aquisição. Implementamos ecossistemas de Geração de Demanda que tornam sua receita previsível e escalável.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" className="group" onClick={() => setIsModalOpen(true)}>
                Agendar Sessão Estratégica
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Visual/Abstract Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] flex items-center justify-center">
              {/* Radar/Sonar Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Concentric Circles */}
                <div className="absolute h-[40%] w-[40%] rounded-full border border-white/5" />
                <div className="absolute h-[60%] w-[60%] rounded-full border border-white/5" />
                <div className="absolute h-[80%] w-[80%] rounded-full border border-white/5" />
                <div className="absolute h-[100%] w-[100%] rounded-full border border-white/5 opacity-50" />
                
                {/* Radar Sweep Animation */}
                <div className="absolute h-[60%] w-[60%] rounded-full bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-[spin_4s_linear_infinite] opacity-50" />
                
                {/* Central Dot */}
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.8)] z-10" />
                <div className="absolute h-6 w-6 md:h-8 md:w-8 rounded-full bg-primary/20 animate-ping" />
              </div>

              {/* Floating Card 1: ROI (Top Right) */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-[10%] right-0 md:top-[20%] md:right-[10%] p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl w-40 md:w-56 z-20"
              >
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">ROI Médio</span>
                </div>
                <div className="text-2xl md:text-4xl font-bold text-white mb-2 font-mono tracking-tighter">8.5x</div>
                <div className="h-1 md:h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                </div>
              </motion.div>

              {/* Floating Card 2: Growth (Bottom Left) */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-[15%] left-0 md:bottom-[25%] md:left-[5%] p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl w-48 md:w-64 z-20"
              >
                 <div className="flex justify-between items-center mb-2 md:mb-4">
                   <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">Crescimento</span>
                   <span className="text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded font-mono">+120%</span>
                 </div>
                 <div className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 font-mono tracking-tighter">R$ 1.2M</div>
                 <div className="flex gap-1 md:gap-1.5 items-end h-6 md:h-10">
                    {[40, 65, 45, 80, 60, 90, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-sm hover:bg-primary transition-colors duration-300" style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </motion.div>
              
              {/* Orbiting Dot */}
              <div className="absolute h-[60%] w-[60%] animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary/50 blur-[1px]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Elements - Minimalist Glow */}
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/5 blur-[120px]" />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
