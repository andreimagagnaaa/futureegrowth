import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export const HiddenProblem = () => {
  return (
    <section className="py-32 bg-grid-pattern border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="container mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: The Hook */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-red-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-red-400 border border-red-500/20 uppercase animate-pulse-slow shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <AlertTriangle className="mr-2 h-3 w-3" />
              O Problema Oculto
            </div>
            
            <h2 className="text-4xl font-medium md:text-5xl leading-tight mb-6">
              O <span className="text-white italic font-serif relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-red-500/50 after:shadow-[0_0_10px_rgba(239,68,68,0.5)]">"Ciclo da Esperança"</span> <br/>
              está drenando sua margem.
            </h2>
            
            <div className="h-1 w-20 bg-red-500/50 mb-6" />
          </motion.div>

          {/* Right Column: The Explanation (Simplified) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Sabe aquele famoso "achismo"... Depender exclusivamente de algoritmos de terceiros sem ter seus próprios dados é construir casa em terreno alugado.
            </p>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              A elite do mercado roda <span className="text-primary">sistemas proprietários</span>. Sem inteligência de dados e automação, seu CAC inflaciona e o lucro desaparece.
            </p>

            <div className="flex items-center gap-2 text-primary font-medium pt-2">
              <ArrowRight className="h-4 w-4" />
              <span>A Futuree Growth instala previsibilidade no seu negócio.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
