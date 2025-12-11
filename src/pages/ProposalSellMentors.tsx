import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users, BarChart3, Globe, FileText, Linkedin, ArrowRight, ShieldCheck, Clock, DollarSign, PlayCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const ProposalSellMentors = () => {
  const scrollToContent = () => {
    const element = document.getElementById('proposal-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                PROPOSTA ESTRATÉGICA
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                SellMentors <span className="text-gray-600">+</span> Futuree
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transformando <span className="text-blue-400 font-bold">35 anos de expertise</span> em uma máquina de vendas digital escalável.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button onClick={scrollToContent} size="lg" className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all w-full sm:w-auto">
                  VER PLANO DE AÇÃO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="proposal-content">
        {/* 2. Context & Diagnosis */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">O Cenário Atual</h2>
              <p className="text-lg text-gray-400">
                Vocês possuem o ativo mais difícil de conquistar: <strong>Autoridade Real</strong>. O desafio é a distribuição.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-green-400" />
                  Pontos Fortes (Ouro)
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> 35 anos de vivência prática em vendas.</li>
                  <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> Metodologia validada no mundo offline.</li>
                  <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 shrink-0" /> Networking de alto nível.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="text-red-400" />
                  O Desafio (Gap)
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> Presença digital não reflete a senioridade.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> Dependência de prospecção manual/física.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> Oportunidade de otimização de ferramentas digitais.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1 Cost of Inaction - REMOVED */}

        {/* 3. The Strategy: Hybrid Model */}
        <section className="py-24 bg-[#020202]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-4 border border-purple-500/20">
                  ESTRATÉGIA EXCLUSIVA
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">O Modelo Híbrido: "Sardinha & Peixe-Espada"</h2>
                <p className="text-lg text-gray-400">
                  Unificando a visão B2C (Alexandre) e B2B (Fernando) em um único ecossistema.
                </p>
              </div>

              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">1. A Isca (B2C)</h3>
                    <p className="text-gray-400 mb-6">
                      Atacamos a dor do vendedor individual. É um público volumoso, fácil de segmentar e que gera caixa rápido.
                    </p>
                    <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                      <div className="text-sm text-blue-300 font-bold mb-1">Objetivo:</div>
                      <div className="text-white">Volume de Leads & Validação de Oferta</div>
                    </div>
                  </div>

                  <div className="md:border-l md:border-white/10 md:pl-12">
                    <h3 className="text-2xl font-bold text-white mb-4">2. O Anzol (B2B)</h3>
                    <p className="text-gray-400 mb-6">
                      Ao pescar a "sardinha" (vendedor), inevitavelmente atraímos o "peixe-espada" (gestor/diretor) que busca solução para o time.
                    </p>
                    <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/20">
                      <div className="text-sm text-purple-300 font-bold mb-1">Objetivo:</div>
                      <div className="text-white">Contratos Corporativos & High Ticket</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Deliverables */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">O Escopo de Trabalho (5 Pilares)</h2>
              <p className="text-gray-400">Tudo o que está incluso na nossa parceria.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Linkedin className="w-8 h-8 text-blue-500" />,
                  title: "LinkedIn Ads",
                  desc: "Gestão completa de tráfego pago. Segmentação por cargo (Vendedores, Gerentes) e setor.",
                  highlight: "Alcance Previsível"
                },
                {
                  icon: <Users className="w-8 h-8 text-green-500" />,
                  title: "Social Selling",
                  desc: "Playbook de abordagem manual. Como transformar conexões em reuniões sem parecer chato.",
                  highlight: "Relacionamento"
                },
                {
                  icon: <FileText className="w-8 h-8 text-yellow-500" />,
                  title: "Conteúdo Estratégico",
                  desc: "Orientação e desenvolvimento sobre o que postar para gerar autoridade imediata. Linha editorial e criação de artes.",
                  highlight: "Posicionamento"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-500" />,
                  title: "Site / Landing Page",
                  desc: "Criação de uma página de alta conversão para capturar leads e apresentar a mentoria entre outros serviços.",
                  highlight: "Infraestrutura"
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-red-500" />,
                  title: "Materiais Ricos",
                  desc: "Estruturação de iscas digitais (PDFs, Checklists) para capturar o contato dos interessados.",
                  highlight: "Captação"
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
                  title: "Relatório de Resultados",
                  desc: "Acompanhamento mensal de métricas, ROI e otimização contínua das campanhas.",
                  highlight: "Performance"
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
                  <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">{item.highlight}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Investment & Timeline */}
        <section className="py-24 bg-[#020202]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0A0A0A] to-black border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12 border-b md:border-b-0 md:border-r border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Clock className="text-blue-500" />
                    Cronograma
                  </h3>
                  <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                    {[
                      { title: "Mês 1: Fundação", desc: "Setup de contas, Criação da LP, Definição de Públicos e Primeiros Anúncios." },
                      { title: "Mês 2: Tração", desc: "Otimização de campanhas, Teste de criativos e Início da rotina de Social Selling." },
                      { title: "Mês 3: Validação", desc: "Análise de ROI, Refinamento do Funil e Planejamento de Escala." }
                    ].map((step, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-xs font-bold text-white z-10">
                          {i + 1}
                        </div>
                        <h4 className="text-white font-bold mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center bg-blue-900/5">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <DollarSign className="text-green-500" />
                    Investimento
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
                      <div className="text-sm text-gray-400 mb-1">Fee Mensal (Gestão + Operacional)</div>
                      <div className="text-3xl font-bold text-white">R$ 2.000<span className="text-sm font-normal text-gray-500">/mês</span></div>
                    </div>

                    <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10 opacity-80">
                      <div className="text-sm text-gray-400 mb-1">Verba de Mídia (Sugestão)</div>
                      <div className="text-2xl font-bold text-white">R$ 1.000<span className="text-sm font-normal text-gray-500">/mês</span></div>
                      <div className="text-xs text-gray-500 mt-2">*Pago direto às plataformas</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <Button onClick={() => window.open('http://wa.me/5551993569285', '_blank')} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all">
                      APROVAR PROPOSTA
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      Ciclo inicial de validação de 3 meses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Onboarding */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Seus Primeiros 15 Dias</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { day: "Dia 1-3", title: "Kick-off & Acessos", desc: "Reunião de alinhamento, acesso ao Gerenciador de Anúncios e LinkedIn." },
                  { day: "Dia 4-10", title: "Construção", desc: "Criação da Landing Page, configuração de automações e produção de mensagens." },
                  { day: "Dia 11-15", title: "Go Live", desc: "Lançamento das campanhas e início da coleta de dados." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#0A0A0A] p-6 rounded-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <PlayCircle size={60} />
                    </div>
                    <div className="text-blue-500 font-bold text-sm mb-2">{item.day}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ - REMOVED */}
      </div>

      <Footer />
    </div>
  );
};
