import { motion } from 'framer-motion';
import { Search, PenTool, Server, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

const steps = [
  {
    icon: Search,
    phase: 'Fase 01',
    title: 'Diagnóstico Forense',
    subtitle: '(Deep Dive)',
    description: 'Plugamos a Futuree AI. Identificamos gaps de conversão e descoberta de canais.',
    deliverable: 'O Mapa da Situação',
  },
  {
    icon: PenTool,
    phase: 'Fase 02',
    title: 'Arquitetura de Solução',
    subtitle: '(The Blueprint)',
    description: 'Desenhamos o plano estratégico. Oferta, público e mensagem. Não é marketing, é engenharia de vendas.',
    deliverable: 'Plano Tático e Estratégico',
  },
  {
    icon: Server,
    phase: 'Fase 03',
    title: 'Implementação Tecnológica',
    subtitle: '(The Build)',
    description: 'Construímos tráfego, funil, copy, landing pages, agentes de IA, automações e CRM. Infraestrutura pronta para escala.',
    deliverable: 'Infraestrutura Pronta para Escala',
  },
  {
    icon: BarChart3,
    phase: 'Fase 04',
    title: 'Aceleração e Otimização',
    subtitle: '(Growth Loops)',
    description: 'Amplificamos sua mensagem para o público certo. Objetivo: criar demanda e escalar.',
    deliverable: 'Relatórios de Performance',
  },
];

export const Protocol = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="methodology" className="py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/[0.02] to-black" />
      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            O Mecanismo Único
          </span>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            O Protocolo F.G.S. <br/> <span className="text-gray-500 text-3xl md:text-4xl">(Futuree Growth System)</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light">
            Como transformamos complexidade em faturamento previsível.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 lg:block">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center group ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Center Point */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block z-10">
                  <div className="h-4 w-4 rounded-full bg-black border-2 border-white/10 group-hover:border-primary transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                  <div className="absolute inset-0 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 animate-ping transition-opacity" />
                </div>

                {/* Content Side */}
                <div className="flex-1 lg:w-1/2">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                    <div className="mb-4 inline-flex items-center gap-3">
                      <span className="text-sm font-bold tracking-widest text-primary uppercase">
                        {step.phase}
                      </span>
                      <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <h3 className="mb-2 text-2xl font-serif font-medium text-white">
                      {step.title} <span className="text-gray-500 text-lg block sm:inline">{step.subtitle}</span>
                    </h3>
                    <p className="mb-6 text-gray-400 font-light leading-relaxed max-w-md">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                      <span className="mr-2 text-primary">Entregável:</span> {step.deliverable}
                    </div>
                  </div>
                </div>

                {/* Icon Side */}
                <div className={`flex-1 lg:w-1/2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                    <step.icon className="h-10 w-10 text-primary stroke-[1.5]" />
                    <div className="absolute -inset-px rounded-2xl border border-primary/20 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button variant="outline" className="group" onClick={() => setIsModalOpen(true)}>
              Agendar Sessão Estratégica
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
