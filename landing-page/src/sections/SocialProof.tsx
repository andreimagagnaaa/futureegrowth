import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { TrendingUp, Users, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { ContactModal } from '../components/ContactModal';

const metrics = [
  {
    icon: DollarSign,
    value: '+R$ 1.2M',
    label: 'Gerados em Receita',
  },
  {
    icon: TrendingUp,
    value: '8.5x',
    label: 'ROAS Médio',
  },
  {
    icon: Users,
    value: '+120',
    label: 'Estratégias Validadas',
  },
];

export const SocialProof = () => {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="results" className="py-32 relative border-y border-white/5 overflow-hidden">
      {/* Lighter Background for Contrast */}
      <div className="absolute inset-0 bg-[#080c14]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            Resultados falam mais alto que promessas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            Números reais de operações que saíram da estagnação para a escala.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center p-10 text-center border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <metric.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <div className="mb-2 text-5xl font-serif text-white">{metric.value}</div>
                <div className="text-sm tracking-widest uppercase text-gray-500 mt-2">{metric.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="w-full">
          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-[#0A0F18] overflow-hidden group"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 md:p-12 items-center">
              {/* Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Case Study · Tecnologia
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                  Escalando de <span className="text-primary">6k para 40k/mês</span> em Ads em 12 meses
                </h3>
                
                <p className="text-gray-400 font-light mb-8 leading-relaxed text-base md:text-lg max-w-xl">
                  Reestruturação completa de oferta e implementação de funil High-Ticket para geração de demanda previsível.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <button 
                    onClick={() => setIsCaseStudyModalOpen(true)}
                    className="bg-white text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-gray-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Ler Estudo Completo <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Tempo de leitura: 4 min
                  </div>
                </div>
              </div>
              
              {/* Metrics Column */}
              <div className="lg:col-span-5">
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid gap-8">
                    <div className="border-b border-white/10 pb-6">
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-5xl font-serif text-white">+40%</span>
                        <span className="text-primary mb-2"><TrendingUp className="h-5 w-5" /></span>
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Crescimento de Faturamento</div>
                    </div>
                    
                    <div>
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-5xl font-serif text-white">–32%</span>
                        <span className="text-primary mb-2"><TrendingUp className="h-5 w-5 rotate-180" /></span>
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Custo de Aquisição (CAC)</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 italic">
                      "A Futuree transformou nossa previsibilidade de vendas."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Modal isOpen={isCaseStudyModalOpen} onClose={() => setIsCaseStudyModalOpen(false)} title="Case Study: Escala SaaS B2B">
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">O Desafio</h4>
              <p className="text-gray-400 leading-relaxed">
                A empresa (Cloud B2B) estava estagnada em R$ 6k/mês de investimento em mídia paga. O CAC (Custo de Aquisição) estava alto e a qualidade dos leads era baixa. Eles dependiam de indicações e não conseguiam escalar via tráfego frio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h5 className="text-primary font-bold mb-2">Antes</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Dependência de Indicações</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> CAC Instável</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Leads Desqualificados</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h5 className="text-primary font-bold mb-2">Depois</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Funil de Demanda Previsível</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> CAC Reduzido em 32%</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Escala para 40k/mês em Ads</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">A Solução Implementada</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                Implementamos o Protocolo F.G.S. focado em 3 pilares:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-400 ml-2">
                <li><strong className="text-white">Reestruturação da Oferta:</strong> Mudamos o posicionamento de "Ferramenta" para "Solução de Negócio".</li>
                <li><strong className="text-white">Funil High-Ticket:</strong> Criamos um processo de qualificação automática antes da reunião de vendas.</li>
                <li><strong className="text-white">Ecossistema de Ads:</strong> Diversificação de canais (Meta + Google + LinkedIn) com rastreamento avançado.</li>
              </ol>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white mb-6 font-medium">Quer resultados similares para sua operação?</p>
              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={() => {
                  setIsCaseStudyModalOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                Agendar Diagnóstico de Viabilidade
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Modal>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </section>
  );
};
