import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, DollarSign, PieChart, Layers, Zap, PlayCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolOneMillion = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                SEMANA 1: VÍDEO ÂNCORA #1
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Anatomia do Negócio de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-200 to-green-500">
                  R$ 1 Milhão (Solo)
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Descubra como estruturar uma operação 90% automatizada onde você é o único humano no comando.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-white text-black hover:bg-gray-200 h-12 px-8 text-sm font-bold rounded-full transition-all w-full sm:w-auto">
                  VER O BREAKDOWN
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">
                  <PlayCircle size={16} />
                  <span>Assistir Vídeo Aula</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Representation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-green-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex flex-col items-center justify-center gap-6">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Solo Empire Structure */}
                  <div className="relative z-10 w-full max-w-xs space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20 relative">
                        <span className="font-bold text-black text-xs">VOCÊ</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 relative">
                      {/* Connecting Lines */}
                      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white to-white/20" />
                      <div className="absolute top-[-4px] left-[16%] right-[16%] h-px bg-white/20" />
                      <div className="absolute top-[-4px] left-[16%] w-px h-4 bg-white/20" />
                      <div className="absolute top-[-4px] right-[16%] w-px h-4 bg-white/20" />

                      <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                        <Bot size={16} className="mx-auto mb-1 text-green-400" />
                        <span className="text-[8px] text-gray-400 uppercase">Mkt Agent</span>
                      </div>
                      <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                        <Bot size={16} className="mx-auto mb-1 text-blue-400" />
                        <span className="text-[8px] text-gray-400 uppercase">Sales Agent</span>
                      </div>
                      <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                        <Bot size={16} className="mx-auto mb-1 text-purple-400" />
                        <span className="text-[8px] text-gray-400 uppercase">Ops Agent</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Receita Anual</span>
                        <span className="text-green-400 font-bold font-mono">R$ 1.000.000</span>
                      </div>
                      <div className="flex justify-between items-center text-xs mt-1">
                        <span className="text-gray-500">Headcount</span>
                        <span className="text-white font-bold font-mono">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The 90% Automation Framework */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Operação 90% Automatizada</h2>
            <p className="text-gray-400 text-lg">
              O segredo não é contratar pessoas, é contratar robôs. Veja como o fluxo de trabalho é distribuído.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {[
                {
                  title: "1. Atração (Automático)",
                  desc: "Conteúdo gerado por IA e distribuído organicamente + Ads otimizados por algoritmo.",
                  human: "10%",
                  ai: "90%",
                  icon: <Zap size={20} />
                },
                {
                  title: "2. Nutrição (Automático)",
                  desc: "Sequências de e-mail, VSLs e retargeting que educam o lead sem sua intervenção.",
                  human: "5%",
                  ai: "95%",
                  icon: <Layers size={20} />
                },
                {
                  title: "3. Conversão (Híbrido)",
                  desc: "Agendamento automático. Você só entra na call de fechamento (ou usa um closer).",
                  human: "40%",
                  ai: "60%",
                  icon: <DollarSign size={20} />
                },
                {
                  title: "4. Entrega (Automático)",
                  desc: "Produto digital, comunidade ou serviço produtizado. Onboarding zero-touch.",
                  human: "10%",
                  ai: "90%",
                  icon: <Cpu size={20} />
                }
              ].map((step, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 shadow-xl">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  
                  <div className="ml-20 md:ml-0 md:w-1/2 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{step.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">AI: {step.ai}</span>
                      <span className="px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">Human: {step.human}</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Agent Team */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                SUA EQUIPE DIGITAL
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Quais Agentes Usar?</h2>
              <p className="text-gray-400">
                Substitua departamentos inteiros por agentes especializados que trabalham 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  role: "Content Agent",
                  function: "Pesquisa tendências, escreve roteiros, gera imagens para thumbnails e posts de blog."
                },
                {
                  role: "Outreach Agent",
                  function: "Encontra leads no LinkedIn, enriquece dados e envia e-mails personalizados em escala."
                },
                {
                  role: "Support Agent",
                  function: "Responde dúvidas frequentes, resolve problemas de acesso e faz triagem de leads."
                },
                {
                  role: "Data Agent",
                  function: "Analisa métricas de funil, fluxo de caixa e atribuição de marketing automaticamente."
                }
              ].map((agent, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Bot size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{agent.role}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {agent.function}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Financial Breakdown */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Breakdown Financeiro</h2>
                <p className="text-gray-400 mb-8">
                  A beleza do modelo "One-Person Business" é a margem. Sem salários, sem escritório, sem burocracia.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-gray-300">Faturamento Mensal</span>
                    <span className="text-white font-bold text-lg">R$ 83.333</span>
                  </div>
                  <div className="p-4 rounded bg-red-500/5 border border-red-500/10 flex justify-between items-center">
                    <span className="text-gray-400">Custos (Software + Ads)</span>
                    <span className="text-red-400 font-medium">- R$ 15.000</span>
                  </div>
                  <div className="p-4 rounded bg-red-500/5 border border-red-500/10 flex justify-between items-center">
                    <span className="text-gray-400">Impostos (Simples/Lucro Presumido)</span>
                    <span className="text-red-400 font-medium">- R$ 10.000</span>
                  </div>
                  <div className="p-6 rounded bg-green-500/10 border border-green-500/20 flex justify-between items-center shadow-[0_0_30px_rgba(74,222,128,0.1)]">
                    <span className="text-green-400 font-bold uppercase tracking-wider">Lucro Líquido</span>
                    <span className="text-green-400 font-bold text-2xl">R$ 58.333</span>
                  </div>
                  <p className="text-xs text-gray-500 text-right mt-2">Margem Líquida: ~70%</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full opacity-30" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <PieChart className="text-green-500" size={20} />
                    <h3 className="text-white font-bold">Distribuição de Receita</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Chart Bars */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Lucro (Você)</span>
                        <span>70%</span>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[70%] rounded-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Tráfego Pago</span>
                        <span>15%</span>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[15%] rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Impostos</span>
                        <span>12%</span>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-[12%] rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Software & IA</span>
                        <span>3%</span>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[3%] rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-400">
                      "A margem é a sua liberdade. Negócios tradicionais operam com 10-20%. Você opera com 70%."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW SECTION: The Daily Routine */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                LIFESTYLE DESIGN
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">A Rotina do Fundador Solo</h2>
              <p className="text-gray-400">
                Como gerenciar um negócio de 7 dígitos trabalhando 4 horas por dia.
              </p>
            </div>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
              {[
                {
                  time: "09:00 - 10:00",
                  title: "Deep Work (Criação)",
                  desc: "Escrever copy, gravar vídeos ou desenvolver produto. A única tarefa que exige criatividade humana.",
                  icon: <Zap size={18} />
                },
                {
                  time: "10:00 - 11:00",
                  title: "Gerenciamento de Agentes",
                  desc: "Revisar outputs da IA, ajustar prompts e aprovar campanhas. Você é o maestro, não o músico.",
                  icon: <Bot size={18} />
                },
                {
                  time: "11:00 - 12:00",
                  title: "Calls de Fechamento (Opcional)",
                  desc: "Atender apenas os leads ultra-qualificados que passaram pelo filtro da IA. Taxa de conversão de 50%+",
                  icon: <DollarSign size={18} />
                },
                {
                  time: "12:00 - ...",
                  title: "Liberdade",
                  desc: "Academia, família, hobbies ou estudar. O negócio roda no piloto automático o resto do dia.",
                  icon: <Clock size={18} />
                }
              ].map((slot, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-green-500" />
                  <div className="flex flex-col md:flex-row gap-4 md:items-start">
                    <div className="min-w-[120px] pt-1">
                      <span className="text-green-400 font-mono text-sm font-bold">{slot.time}</span>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 w-full hover:bg-white/[0.07] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-white">{slot.icon}</div>
                        <h3 className="text-lg font-bold text-white">{slot.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{slot.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW SECTION: Common Pitfalls */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Onde a Maioria Falha</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Síndrome do Super-Herói",
                  desc: "Tentar fazer tudo manualmente porque 'ninguém faz melhor que eu'. Resultado: Burnout e teto de receita.",
                  solution: "Delegue para IA ou elimine a tarefa."
                },
                {
                  title: "Complexidade Desnecessária",
                  desc: "Criar funis complexos, muitos produtos e processos burocráticos. O simples escala, o complexo quebra.",
                  solution: "Foque em 1 Produto, 1 Canal, 1 Avatar."
                },
                {
                  title: "Negligenciar a Audiência",
                  desc: "Focar só em automação e esquecer de construir confiança. Pessoas compram de quem elas confiam.",
                  solution: "Apareça. Seja autêntico. Crie conexão."
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-red-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wide">Solução:</span>
                    <p className="text-xs text-gray-300 mt-1">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para Construir seu Império Solo?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Você tem a tecnologia. Você tem o modelo. Agora só falta a execução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
