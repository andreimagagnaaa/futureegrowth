import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, DollarSign, Briefcase, ShieldCheck, Target, ArrowRight, CheckCircle2, Users, AlertTriangle, Lightbulb } from 'lucide-react';
import { Button } from '../components/Button';

export const ProposalUnita = () => {
  const scrollToContent = () => {
    const element = document.getElementById('proposal-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0B0F19]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                PLANO ESTRATÉGICO & MARKETING
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                Unita <span className="text-slate-500 font-sans">|</span> Futuree AI
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Estratégia de Aquisição para M&A e Finanças Corporativas. <br/>
                <span className="text-amber-500/90 font-medium">Senioridade, Discrição e Pipeline Qualificado.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button onClick={scrollToContent} size="lg" className="bg-amber-600 text-white hover:bg-amber-500 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all w-full sm:w-auto">
                  VER ESTRATÉGIA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="proposal-content">
        {/* 2. Diagnosis (SWOT) */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Diagnóstico Estratégico</h2>
              <p className="text-lg text-gray-400">
                Análise do cenário atual para construção de um motor de crescimento sólido.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Forças */}
              <div className="p-8 rounded-sm bg-[#0B0F19] border border-green-500/20 relative overflow-hidden group hover:border-green-500/40 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck size={80} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-green-500">●</span> Forças (Strengths)
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Expertise clara em serviços de altíssimo valor (M&A, Dívida, FIDC).</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Clareza total sobre o ICP (Dono/Fundador sênior).</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Rede de experts parceiros com autoridade massiva (Ativo Oculto).</li>
                </ul>
              </div>

              {/* Fraquezas */}
              <div className="p-8 rounded-sm bg-[#0B0F19] border border-red-500/20 relative overflow-hidden group hover:border-red-500/40 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AlertTriangle size={80} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-red-500">●</span> Fraquezas (Weaknesses)
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" /> Dependência total de networking para aquisição.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" /> Ausência completa de um funil digital estruturado.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" /> Ceticismo com marketing devido a experiências anteriores.</li>
                </ul>
              </div>

              {/* Oportunidades */}
              <div className="p-8 rounded-sm bg-[#0B0F19] border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb size={80} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">●</span> Oportunidades (Opportunities)
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> ICP presente no LinkedIn e receptivo a conteúdo sério.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> Demanda ativa no Google ("vender empresa", "consultoria FIDC").</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> Posicionamento como "Assessoria-Parceira" focada em pipeline.</li>
                </ul>
              </div>

              {/* Ameaças */}
              <div className="p-8 rounded-sm bg-[#0B0F19] border border-amber-500/20 relative overflow-hidden group hover:border-amber-500/40 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target size={80} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-amber-500">●</span> Ameaças (Threats)
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" /> Sazonalidade de fim de ano (Nov/Dez) para fechamento.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" /> Impacto no fluxo de caixa devido ao investimento anterior.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Objectives */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#131825] border border-slate-500/20 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target size={120} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-serif">Objetivos (90 Dias)</h2>
              <p className="text-gray-400 mb-8">Foco em construir autoridade e gerar as primeiras oportunidades qualificadas.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-500 mb-2">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">1. Posicionamento de Autoridade</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Transformar a Unita em "A consultoria" de referência em M&A e Captação, usando a autoridade dos experts para projetar seriedade e experiência inigualáveis.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500 mb-2">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">2. Geração de Demanda</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Construir um motor de aquisição previsível. <br/>
                    <span className="text-white font-bold">Meta:</span> Gerar 4 a 6 reuniões de diagnóstico qualificadas por mês (ICP validado) após a fase de estruturação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ICP */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Público-Alvo (ICP)</h2>
              <p className="text-gray-400">Quem buscamos: Maturidade, Decisão e Necessidade Real.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* ICP Primário */}
              <div className="bg-[#0B0F19] p-8 border border-amber-500/20 rounded-sm relative">
                <div className="absolute -top-3 left-8 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">PRIMÁRIO</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">O Dono / Fundador</h3>
                <p className="text-amber-500 text-sm font-medium mb-6">Foco em M&A e Estratégia</p>
                
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Briefcase size={16} className="text-slate-500 shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-300 block font-bold">Perfil</span>
                      <span className="text-gray-500">Empresário "tradicional" (indústria, varejo, B2B). Idade 45-65+.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertTriangle size={16} className="text-slate-500 shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-300 block font-bold">Dores</span>
                      <span className="text-gray-500">Sucessão, Venda da empresa ou Potencial de Crescimento travado.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck size={16} className="text-slate-500 shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-300 block font-bold">Valores</span>
                      <span className="text-gray-500">Seriedade, <i>track record</i>, confiança, discrição.</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-900/10 border border-red-500/10 rounded text-red-200 text-xs">
                    <strong>Odeia:</strong> Marketing apelativo, "gurus", promessas vazias.
                  </div>
                </div>
              </div>

              {/* ICP Secundário */}
              <div className="bg-[#0B0F19] p-8 border border-white/5 rounded-sm relative">
                <div className="absolute -top-3 left-8 bg-slate-700 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">SECUNDÁRIO</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">O Financeiro (CFO)</h3>
                <p className="text-blue-400 text-sm font-medium mb-6">Foco em FIDC e Dívida</p>
                
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Briefcase size={16} className="text-slate-500 shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-300 block font-bold">Perfil</span>
                      <span className="text-gray-500">CFO, Diretor Financeiro. Busca sofisticação técnica.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <DollarSign size={16} className="text-slate-500 shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-300 block font-bold">Dores</span>
                      <span className="text-gray-500">Necessidade de liquidez, redução de custo financeiro, otimização de balanço.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Strategy */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Estratégia em 4 Etapas</h2>
              <p className="text-gray-400">Uma abordagem digital que reflete a senioridade e a expertise da Unita.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Autoridade", sub: "LinkedIn Orgânico", desc: "Conteúdo 'creator' destacando a expertise para gerar confiança.", icon: ShieldCheck },
                { step: "2", title: "Alcance", sub: "LinkedIn Ads", desc: "Anúncios hipersegmentados para impulsionar ofertas ao ICP.", icon: Users },
                { step: "3", title: "Captura", sub: "Google Ads", desc: "Interceptar buscas ativas por M&A, FIDC, capturando a demanda.", icon: Target },
                { step: "4", title: "Conversão", sub: "Motor de Vendas", desc: "Iscas digitais de valor via Landing Pages e qualificação via CRM.", icon: PieChart }
              ].map((item, i) => (
                <div key={i} className="bg-[#131825] p-6 border border-white/5 hover:border-amber-500/30 transition-all group rounded-sm">
                  <div className="text-4xl font-bold text-white/5 mb-4 group-hover:text-amber-500/10 transition-colors">{item.step}</div>
                  <div className="mb-4 text-amber-500"><item.icon size={28} /></div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">{item.sub}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Deliverables */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-white font-serif text-center">Plano de Ação e Entregáveis</h2>
              
              <div className="grid gap-6">
                {[
                  { title: "Gestão de Tráfego Pago (Performance)", desc: "Criação, gestão e otimização contínua de campanhas no Google Ads e LinkedIn Ads (foco em Custo por Reunião)." },
                  { title: "Criação de Ativos de Conversão", desc: "Design, copy e desenvolvimento de Landing Pages com design sóbrio e profissional para captura de leads." },
                  { title: "CRM e Automação de Marketing (O Motor)", desc: "Estruturação do funil de qualificação (MQL/SQL) e fluxos básicos de automação em ferramenta de CRM." },
                  { title: "Consultoria de Conteúdo (Autoridade)", desc: "Reuniões quinzenais para transformar seu conhecimento em pautas e roteiros para conteúdo e campanhas." },
                  { title: "Relatórios de Performance (Foco em ROI)", desc: "Relatórios mensais claros e objetivos, focados em métricas de pipeline (Leads, CPL, MQLs, Custo por Reunião)." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-[#0B0F19] border border-white/5 rounded-sm hover:border-amber-500/20 transition-colors">
                    <div className="mt-1 text-amber-500"><CheckCircle2 size={20} /></div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Timeline */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center text-white font-serif">Cronograma (Primeiros 90 Dias)</h2>
              <p className="text-center text-gray-400 mb-16">Aproveitando Nov/Dez para construir a fundação e ativar o motor em Jan/Fev.</p>
              
              <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-500/20">
                {[
                  { 
                    phase: "FASE 1: ESTRUTURAÇÃO", 
                    period: "Novembro", 
                    goal: "Construir a 'pista de pouso'.",
                    steps: ["Semanas 1-2: Onboarding, Definição da Linha Editorial, Briefing.", "Semanas 3-4: Desenvolvimento da 1ª LP + Lead Magnet, CRM."]
                  },
                  { 
                    phase: "FASE 1.5: TESTES", 
                    period: "Dezembro", 
                    goal: "Coletar dados e gerar 'sinais de fumaça'.",
                    steps: ["Semanas 5-6: Lançamento Google Ads (Fundo de Funil) e 1ª campanha LinkedIn.", "Semanas 7-8: Análise dos primeiros leads, otimização de criativos."]
                  },
                  { 
                    phase: "FASE 2: ATIVAÇÃO", 
                    period: "Jan/Fev 2026", 
                    goal: "Escalar o que funciona e entregar pipeline.",
                    steps: ["Semanas 9-10: Análise de performance, otimizar ou pausar ruins.", "Semanas 11-12: Acelerar investimento nos vencedores, entrega do pipeline."]
                  }
                ].map((item, i) => (
                  <div key={i} className="relative pl-24">
                    <div className="absolute left-0 top-0 w-16 text-right text-xs font-bold text-amber-500 pt-1 uppercase">{item.period}</div>
                    <div className="absolute left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#0B0F19] border-2 border-amber-500 z-10" />
                    
                    <h3 className="text-xl font-bold text-white mb-1">{item.phase}</h3>
                    <p className="text-sm text-gray-500 mb-4 italic">Objetivo: {item.goal}</p>
                    
                    <div className="space-y-2">
                      {item.steps.map((step, j) => (
                        <div key={j} className="p-3 bg-[#131825] border border-white/5 rounded text-sm text-gray-300">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Investment */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-white font-serif">Investimento</h2>
              
              <div className="bg-[#0B0F19] border border-amber-500/30 p-10 rounded-sm relative shadow-2xl shadow-amber-900/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] font-bold px-4 py-1 rounded-b-lg tracking-widest uppercase">Assessoria Estratégica</div>
                
                <div className="text-5xl font-bold text-white mb-2 mt-4">R$ 2.500<span className="text-lg font-normal text-gray-500">/mês</span></div>
                <p className="text-gray-400 mb-8">+ Verba de Mídia (mínimo R$ 500/mês iniciais)</p>
                
                <div className="border-t border-white/10 pt-8 mb-8">
                  <div className="flex justify-between items-center text-lg font-bold text-white">
                    <span>Valor Total Inicial:</span>
                    <span>R$ 3.000 / mês</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Contrato mínimo de 6 meses.</p>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white h-12 text-lg">
                  Aprovar Proposta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Next Steps */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-white font-serif">Próximos Passos</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { step: "1", title: "Aprovação", desc: "Aceite formal deste Plano Estratégico." },
                { step: "2", title: "Formalização", desc: "Assinatura do contrato de Assessoria." },
                { step: "3", title: "Onboarding", desc: "Reunião de Kick-off para alinhamentos." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 border border-slate-500/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#131825] p-12 rounded-sm border border-slate-500/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Pronto para Construir seu Motor de Aquisição?</h3>
              <p className="text-gray-400 mb-8">Estamos à disposição para iniciar esta parceria de sucesso.</p>
              <Button onClick={() => window.open('http://wa.me/5551993569285', '_blank')} size="lg" className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg">
                FALAR COM CONSULTOR
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
