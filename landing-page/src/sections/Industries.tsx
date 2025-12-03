import { motion } from 'framer-motion';
import { Building2, ShoppingBag, GraduationCap, Laptop } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Serviços B2B & Consultoria',
    desc: 'Escritórios de advocacia, consultorias e agências. Ciclos de vendas longos que exigem nutrição e autoridade.',
    tags: ['Lead Qualificado', 'ABM', 'Sales Enablement']
  },
  {
    icon: GraduationCap,
    title: 'Educação & Infoprodutos',
    desc: 'Mentores e escolas High-Ticket. Escala com LTV alto, fugindo do lançamento "tudo ou nada".',
    tags: ['Funil Perpétuo', 'Comunidade', 'High-Ticket']
  },
  {
    icon: Laptop,
    title: 'SaaS & Tech',
    desc: 'Startups que precisam reduzir CAC e aumentar retenção (Churn Rate) através de onboarding e aquisição otimizada.',
    tags: ['PLG', 'Retenção', 'Onboarding']
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce & DNVB',
    desc: 'Marcas nativas digitais que precisam construir brand equity para fugir da guerra de preços dos marketplaces.',
    tags: ['LTV', 'Brand Equity', 'Recorrência']
  }
];

export const Industries = () => {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Expertise Vertical
          </span>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            Onde geramos <br/> <span className="text-white">resultado comprovado</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            Não somos generalistas. Nossa metodologia foi forjada e validada nestas 4 verticais específicas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center justify-center rounded-xl bg-white/5 p-4 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                
                <h3 className="mb-4 text-xl font-serif font-medium text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-white/5 bg-black/50 text-gray-500 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
