import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowLeft, CheckCircle2, FileText, Target, BarChart2, Map, ArrowRight, XCircle, AlertTriangle, BrainCircuit, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../sections/Footer';
import { Accordion, AccordionItem } from '../components/Accordion';

export const MarketingPlan = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary text-gray-400">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-white/5 bg-gradient-radial-top relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-widest text-primary uppercase">
              The Blueprint
            </span>
            <h1 className="mb-8 text-5xl font-serif font-medium md:text-7xl leading-tight">
              Plano de Marketing <br />
              <span className="text-gray-600 italic">Estratégico & Tático</span>
            </h1>
            <p className="mb-12 text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
              O manual definitivo. Saia do "achismo" e tenha um plano de guerra para os próximos 12 meses.
            </p>
            
            <Button size="lg" className="h-14 px-8 text-lg">
              Quero meu Plano de Guerra
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Agitation: The Symptoms of Chaos */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-red-500">
              Diagnóstico Inicial
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Sinais de que você está operando <br/> <span className="text-gray-500 italic">no escuro</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Ações Aleatórias",
                desc: "Equipe testa 'hacks', mas sem linha mestra conectada ao faturamento."
              },
              {
                title: "Ansiedade de Performance",
                desc: "Ninguém sabe se a meta será batida. Resultados dependem da sorte."
              },
              {
                title: "Desperdício de Caixa",
                desc: "Investe em mídia e ferramentas, mas não sabe o ROI. O dinheiro some."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-colors"
              >
                <AlertTriangle className="h-8 w-8 text-red-500/50 mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem: Generic PDFs */}
      <section className="py-24 bg-grid-pattern border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Por que a maioria dos planejamentos <br/> <span className="text-red-400">vai para a gaveta?</span>
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                Consultorias entregam PDFs de 50 páginas sem aplicabilidade. Chamamos isso de "Marketing de Palco".
              </p>
              <ul className="space-y-4">
                {[
                  'Análises SWOT genéricas',
                  'Personas imaginárias',
                  'Sem cronograma de execução',
                  'Metas inatingíveis'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <XCircle className="h-5 w-5 shrink-0 text-red-900/50 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl bg-gray-900/50 border border-white/5 p-8 flex items-center justify-center">
               {/* Visual Metaphor for "Useless Paper" */}
               <div className="text-center opacity-30">
                 <FileText className="h-32 w-32 mx-auto mb-4 text-gray-600" />
                 <span className="text-2xl font-serif text-gray-500">PDF Genérico #42</span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology: Reverse Engineering */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
              Nossa Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Engenharia Reversa de Metas
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Começamos pelo "quanto faturar". E construímos o caminho de volta.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            
            {[
              {
                step: "01",
                title: "Deep Dive & Auditoria",
                desc: "Mergulhamos nos dados. O que funcionou? Onde está o vazamento?"
              },
              {
                step: "02",
                title: "Definição de Norte (North Star)",
                desc: "Meta financeira clara. Tudo deve servir a este único número."
              },
              {
                step: "03",
                title: "Arquitetura de Canais",
                desc: "Quais canais entregarão esse número? Mix de mídia e verba."
              },
              {
                step: "04",
                title: "Cronograma Tático",
                desc: "Quem faz o quê e quando. Calendário de 52 semanas."
              }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border border-primary flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2">
                  <span className="text-xs font-bold text-primary">{item.step}</span>
                </div>
                
                <div className="pl-12 md:pl-0 md:w-1/2 md:text-right md:pr-12">
                  {i % 2 !== 0 && (
                    <>
                      <h3 className="text-xl font-serif font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 font-light text-sm">{item.desc}</p>
                    </>
                  )}
                </div>
                
                <div className="pl-12 md:pl-0 md:w-1/2 md:pl-12">
                   {i % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-serif font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 font-light text-sm">{item.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution: What is delivered */}
      <section className="py-24 bg-gradient-radial-center relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              O Entregável Final
            </h2>
            <p className="text-gray-400 font-light">
              Clareza absoluta em 4 dimensões.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Diagnóstico",
                desc: "Raio-X do momento atual e benchmarks."
              },
              {
                icon: Map,
                title: "Mapa Estratégico",
                desc: "Posicionamento e Arquitetura de Funis."
              },
              {
                icon: FileText,
                title: "Playbook Tático",
                desc: "Calendário, scripts e automação."
              },
              {
                icon: BarChart2,
                title: "Modelagem Financeira",
                desc: "Projeção de CAC, LTV e Fluxo de Caixa."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-black hover:border-primary/30 transition-colors"
              >
                <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-serif font-medium text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation: The "After" State */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
            
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 relative z-10">
              O que muda na sua empresa?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 text-left relative z-10">
              <div className="space-y-4">
                <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold">Antes (Caos)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-400"><XCircle className="w-4 h-4 text-red-500" /> "Vamos testar isso aqui..."</li>
                  <li className="flex items-center gap-2 text-gray-400"><XCircle className="w-4 h-4 text-red-500" /> Metas baseadas em desejo</li>
                  <li className="flex items-center gap-2 text-gray-400"><XCircle className="w-4 h-4 text-red-500" /> Equipe reativa e perdida</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary uppercase tracking-widest text-sm font-bold">Depois (Ordem)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-4 h-4 text-primary" /> "Seguimos o plano da semana 42"</li>
                  <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-4 h-4 text-primary" /> Metas baseadas em dados</li>
                  <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-4 h-4 text-primary" /> Equipe com clareza de execução</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Specific */}
      <section className="py-24 bg-dot-pattern relative">
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl font-serif font-medium mb-12 text-center">Dúvidas Frequentes</h2>
          <Accordion>
            <AccordionItem title="Quanto tempo demora para ficar pronto?">
              O processo completo leva entre 3 a 4 semanas. A primeira semana é de imersão e diagnóstico, seguida por duas semanas de desenvolvimento estratégico e uma semana final de refinamento e entrega.
            </AccordionItem>
            <AccordionItem title="Preciso ter uma equipe interna?">
              Não necessariamente. O plano pode ser desenhado para ser executado por você, por freelancers, por uma agência parceira ou até mesmo para orientar a contratação da sua futura equipe.
            </AccordionItem>
            <AccordionItem title="Vocês executam o plano depois?">
              O produto "Plano de Marketing" é focado na estratégia. No entanto, clientes que aprovam o plano frequentemente migram para nossa assessoria de "Growth Partner" para garantir a execução impecável.
            </AccordionItem>
            <AccordionItem title="Serve para B2B ou B2C?">
              A metodologia de Engenharia Reversa funciona para ambos. Já desenhamos planos para SaaS, E-commerce, Infoprodutos e Serviços High-Ticket. O fundamento (CAC &lt; LTV) é universal.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 bg-black relative bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">
            Pronto para ter um plano de verdade?
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Pare de desperdiçar orçamento. Construa sua máquina de vendas com engenharia.
          </p>
          <Button size="lg" className="h-16 px-10 text-lg">
            Contratar Plano de Marketing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
