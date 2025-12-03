import { motion } from 'framer-motion';
import { TrendingUp, Users, ShieldAlert } from 'lucide-react';

export const TheShift = () => {
  return (
    <section className="py-32 bg-background border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-background to-background animate-pulse-slow" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-red-500">
            Contexto de Mercado
          </span>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            A Era do "Só Tráfego" <span className="text-red-500 line-through decoration-red-500/50">Acabou</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            O mercado digital amadureceu. O playbook de 2023 já não sustenta margem em 2025.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Hiperinflação do CAC",
              desc: "O custo por cliente dobrou. Quem depende só de compra de mídia vê sua margem corroída."
            },
            {
              icon: ShieldAlert,
              title: "Ceticismo do Consumidor",
              desc: "Seu cliente vê +500 anúncios/dia. Promessas agressivas não convertem, apenas afastam."
            },
            {
              icon: Users,
              title: "Saturação de Canais",
              desc: "A atenção está fragmentada. Você precisa de onipresença, não apenas uma campanha."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 overflow-hidden"
            >
              {/* Glitch Effect on Hover */}
              <div className="absolute inset-0 bg-red-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-white/5 p-3 text-gray-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-serif font-medium text-white group-hover:text-red-100 transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm group-hover:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
