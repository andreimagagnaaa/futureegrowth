import { motion } from 'framer-motion';
import { Cpu, Bot, Layout, Layers } from 'lucide-react';

export const Ecosystem = () => {
  return (
    <section className="py-32 bg-dot-pattern border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="container mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
              Powered by Futuree Solutions
            </span>
            <h2 className="mb-8 text-4xl font-medium md:text-5xl leading-tight">
              Infraestrutura <br/> de Growth
            </h2>
            <p className="mb-12 text-lg text-gray-400 font-light leading-relaxed">
              Mobilizamos um arsenal tecnológico proprietário para garantir que sua operação escale com previsibilidade.
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: 'Futuree AI',
                  description: 'Diagnóstico com IA de onde estão os gaps do seu negócio.',
                },
                {
                  icon: Bot,
                  title: 'Futuree Agents',
                  description: 'SDRs e Atendentes de IA trabalhando 24/7 na conversão.',
                },
                {
                  icon: Layout,
                  title: 'Futuree Pages',
                  description: 'Landing pages de alta velocidade e persuasão.',
                },
                {
                  icon: Layers,
                  title: 'Futuree Platform',
                  description: 'Centralização de dados para decisões em tempo real.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black text-primary transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-light group-hover:text-gray-400 transition-colors">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center justify-center py-12">
            <div className="relative aspect-square w-full max-w-md">
              {/* Abstract representation of the ecosystem - Minimalist Lines */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-24 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]" />
              
              {/* Glowing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
                <div className="z-10 text-3xl font-serif tracking-widest text-white text-glow animate-float">GROWTH</div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-50" />
                </div>
              </div>
              
              {/* Satellite 1 */}
              <div className="absolute bottom-[15%] left-[15%] h-2 w-2 rounded-full bg-white/50 animate-pulse" />
              
              {/* Satellite 2 */}
              <div className="absolute top-[20%] right-[10%] h-1.5 w-1.5 rounded-full bg-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
