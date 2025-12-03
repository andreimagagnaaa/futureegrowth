import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Map, Settings, Users, Code, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

const solutions = [
  {
    icon: Map,
    title: 'Plano de Marketing',
    description: 'O Mapa da Mina. Não é um PDF genérico. É um plano de guerra detalhado para os próximos 12 meses.',
    features: ['Diagnóstico de Canais', 'Cronograma Tático', 'Projeção de ROI', 'Definição de KPIs'],
  },
  {
    icon: Settings,
    title: 'Operacionalização',
    description: 'Sua Estratégia, Executada. Nossa equipe assume a trincheira: geração de demanda, funis e nutrição.',
    features: ['Gestão de Tráfego', 'Copywriting & Design', 'Automação de CRM', 'Relatórios Semanais'],
  },
  {
    icon: Users,
    title: 'Assessoria de Growth',
    description: 'Inteligência Estratégica. Um CMO experiente na mesa. Acompanhamento quinzenal para ajustar rotas.',
    features: ['Reuniões Quinzenais', 'Análise de Métricas', 'Otimização de CAC', 'Treinamento de Time'],
  },
  {
    icon: Code,
    title: 'Soluções Custom',
    description: 'Arquitetura Sob Medida. Quando o padrão não basta. Ecossistemas únicos com CRM e IA.',
    features: ['Integração de APIs', 'Dashboards BI', 'Agentes de IA', 'Auditoria Técnica'],
  },
];

export const Solutions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="solutions" className="py-32 bg-gradient-radial-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      
      {/* Ambient Light - Dynamic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Nossos Serviços
          </span>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            Como podemos <span className="text-primary italic">acelerar</span> seu negócio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            Os 4 Pilares para transformar complexidade em faturamento previsível.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div onClick={() => setIsModalOpen(true)} className="block h-full cursor-pointer">
                <Card className="group flex h-full flex-col p-6 md:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:-translate-y-2 bg-gradient-to-b from-white/[0.03] to-transparent relative overflow-hidden">
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header */}
                  <div className="mb-8 flex items-start justify-between relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-400 group-hover:bg-primary group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-8 relative z-10">
                    <h3 className="mb-3 text-2xl font-serif font-medium text-white group-hover:text-primary/90 transition-colors">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm min-h-[60px] group-hover:text-gray-300 transition-colors">
                      {solution.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 group-hover:via-primary/20 transition-colors" />

                  {/* Features List */}
                  <ul className="space-y-3 mt-auto relative z-10">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                        <Check className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Action Hint */}
                  <div className="mt-8 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      Agendar Diagnóstico <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>

                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};
