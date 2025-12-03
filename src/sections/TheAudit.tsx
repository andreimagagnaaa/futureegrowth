import { motion } from 'framer-motion';
import { Search, Target, FileCheck } from 'lucide-react';

export const TheAudit = () => {
  return (
    <section className="py-32 bg-gradient-radial-center relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="container mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
              O Primeiro Passo
            </span>
            <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
              O que acontece na <br/> Sessão Estratégica?
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              Muitos acham que é um "call de vendas". Não é. É uma consultoria expressa de 30 minutos onde entregamos valor real antes de pedir qualquer coisa.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Search,
                  title: "Diagnóstico de Gargalos",
                  desc: "Identificamos onde você está perdendo dinheiro hoje. Seja na aquisição, na conversão ou na retenção."
                },
                {
                  icon: Target,
                  title: "Benchmarking de Mercado",
                  desc: "Comparamos seus números com o que há de melhor no seu nicho. Você saberá exatamente o quão longe pode chegar."
                },
                {
                  icon: FileCheck,
                  title: "Plano de Ação Macro",
                  desc: "Saia da reunião com clareza sobre os próximos 3 passos lógicos para destravar seu crescimento."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-primary border border-white/10">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-lg">{item.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-auto md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
               
               {/* Calendar UI Mockup */}
               <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                 <div className="flex items-center justify-between mb-8">
                   <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Agenda Confirmada</div>
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 py-8 md:py-0">
                   <div className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                     <span className="text-2xl">📅</span>
                   </div>
                   <div>
                     <h3 className="text-2xl font-serif text-white mb-2">Sessão Estratégica</h3>
                     <p className="text-primary">Futuree Growth & Você</p>
                   </div>
                   <div className="w-full h-px bg-white/10" />
                   <div className="grid grid-cols-2 gap-4 w-full text-sm">
                     <div className="bg-white/5 rounded p-3">
                       <div className="text-gray-500 mb-1">Duração</div>
                       <div className="text-white">30 Min</div>
                     </div>
                     <div className="bg-white/5 rounded p-3">
                       <div className="text-gray-500 mb-1">Formato</div>
                       <div className="text-white">Google Meet</div>
                     </div>
                   </div>

                   <a 
                     href="https://calendar.app.google/VLdRkuBcvDts3jds7" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full bg-primary text-black font-medium py-4 md:py-3 rounded hover:bg-primary/90 transition-colors mt-4 text-lg md:text-base shadow-lg shadow-primary/20"
                   >
                     Agendar Agora
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
