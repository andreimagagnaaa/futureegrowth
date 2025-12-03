import { motion } from 'framer-motion';
import { MessageSquare, BarChart2, Zap, User } from 'lucide-react';

export const Implementation = () => {
  return (
    <section className="py-32 bg-gradient-dark-subtle border-y border-white/5 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
              A Experiência
            </span>
            <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
              Extensão da sua <br/> Operação.
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              Nossa operação é desenhada para velocidade e transparência total. Somos o seu braço de Growth.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Comunicação Assíncrona",
                  desc: "Canal direto no WhatsApp com os estrategistas. Sem intermediários."
                },
                {
                  icon: BarChart2,
                  title: "Dashboard em Tempo Real",
                  desc: "Você não espera o fim do mês para saber seus números. Acesso 24/7 aos KPIs de receita."
                },
                {
                  icon: Zap,
                  title: "Implementação Ágil",
                  desc: "Kick-off em até 48h após o contrato. Não perdemos tempo com 'setup' infinito."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-primary border border-white/10">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Representation (Abstract Interface) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-2xl">
              {/* Fake Slack Interface */}
              <div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50 animate-pulse" />
                </div>
                <div className="ml-auto text-xs text-gray-600 font-mono">#growth-team</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-xs text-primary font-bold ring-1 ring-primary/30">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">Strategist</span>
                      <span className="text-[10px] text-gray-600">10:42 AM</span>
                    </div>
                    <div className="rounded-lg rounded-tl-none bg-white/5 p-3 text-sm text-gray-300 border border-white/5">
                      Atualização diária: O ROAS da campanha “Scale_V2” chegou a <strong className="text-green-400">4,2×</strong> hoje. <br/>
                      O CPL reduziu em 15%.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="h-8 w-8 rounded bg-gray-700 flex items-center justify-center text-xs text-white font-bold ring-1 ring-white/20">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-[10px] text-gray-600">10:45 AM</span>
                      <span className="text-sm font-bold text-white">Você</span>
                    </div>
                    <div className="rounded-lg rounded-tr-none bg-primary/10 p-3 text-sm text-gray-200 border border-primary/20 text-left">
                      Excelente. Vamos dobrar o orçamento para o fim de semana?
                    </div>
                  </div>
                </div>
                 
                 <div className="flex gap-3">
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-xs text-primary font-bold ring-1 ring-primary/30">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">Strategist</span>
                      <span className="text-[10px] text-gray-600">10:46 AM</span>
                    </div>
                    <div className="rounded-lg rounded-tl-none bg-white/5 p-3 text-sm text-gray-300 border border-white/5">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
