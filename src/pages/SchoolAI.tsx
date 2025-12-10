import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, Zap, Brain, Layers, Code, Cpu, MessageSquare, FileText, Search } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolAI = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                IA GENERATIVA
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Nova Revolução <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                  Industrial é Cognitiva
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Redefina a produtividade e a criatividade. Quem dominar a IA será o arquiteto do futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all w-full sm:w-auto">
                  DOMINAR A IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500">
                  Leitura de 5 minutos.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Visual Representation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-primary/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-6 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  <div className="relative z-10 w-full max-w-sm space-y-6">
                    {/* Stat Card */}
                    <div className="flex flex-col items-center justify-center p-6 rounded bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                        <Sparkles size={32} />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">30%</div>
                      <div className="text-sm text-gray-300 font-medium">
                        Dos novos unicórnios de 2024 são empresas de <span className="text-primary">IA Generativa</span>.
                      </div>
                      <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                        Tendência de Mercado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Shift: Why Now? */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">A Aceleração Exponencial</h2>
            <p className="text-gray-400 text-lg">
              O que levava meses agora leva minutos. A barreira de entrada para criar software, conteúdo e estratégias complexas desmoronou.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Zap size={24} />,
                title: "Velocidade",
                desc: "Ciclos de iteração reduzidos de semanas para horas. Quem testa mais rápido, aprende mais rápido e vence o mercado."
              },
              {
                icon: <Layers size={24} />,
                title: "Personalização",
                desc: "Marketing 1:1 em escala. Crie mensagens únicas para cada lead sem aumentar a equipe de copywriters."
              },
              {
                icon: <Brain size={24} />,
                title: "Inteligência",
                desc: "Acesso a um 'estagiário sênior' infinito. Análise de dados, brainstorming e síntese de informações em tempo real."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: The AI Stack */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                INFRAESTRUTURA
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">A Pilha de IA (AI Stack)</h2>
              <p className="text-gray-400">Como as camadas de tecnologia se conectam para criar valor.</p>
            </div>

            <div className="space-y-4">
              {/* Top Layer */}
              <div className="p-8 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Bot size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1. Aplicações & Agentes</h3>
                <p className="text-gray-300 text-sm mb-4">A interface onde o valor é entregue. Chatbots, Copilots, Automações.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-400">ChatGPT</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-400">Midjourney</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-400">Jasper</span>
                </div>
              </div>

              {/* Middle Layer */}
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Modelos Fundacionais (LLMs)</h3>
                <p className="text-gray-400 text-sm mb-4">O "cérebro" que processa e gera informações.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">GPT-4</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">Claude 3</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">Llama 3</span>
                </div>
              </div>

              {/* Bottom Layer */}
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Infraestrutura & Compute</h3>
                <p className="text-gray-400 text-sm mb-4">O hardware e a nuvem que tornam tudo possível.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">NVIDIA GPUs</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">AWS / Azure</span>
                  <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-xs text-gray-500">Vector DBs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: Human vs AI Workflow */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">O Novo Fluxo de Trabalho</h2>
                <p className="text-gray-400 mb-8">
                  A IA não substitui o humano, ela elimina o atrito. O tempo gasto em tarefas repetitivas é convertido em estratégia e criatividade.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                      <span className="font-bold text-xs">OLD</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Processo Tradicional</h4>
                      <p className="text-sm text-gray-500">Pesquisa manual (4h) → Rascunho (3h) → Revisão (2h) → Finalização (1h) = <span className="text-red-400">10 Horas</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <span className="font-bold text-xs">NEW</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Processo Aumentado por IA</h4>
                      <p className="text-sm text-gray-500">Prompt & Contexto (15m) → Geração AI (1m) → Curadoria Humana (45m) = <span className="text-primary">1 Hora</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm border-b border-white/5 pb-4">
                    <span className="text-gray-400">Produtividade</span>
                    <span className="text-primary font-bold">+10x</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-white/5 pb-4">
                    <span className="text-gray-400">Custo por Output</span>
                    <span className="text-primary font-bold">-90%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pb-2">
                    <span className="text-gray-400">Qualidade Inicial</span>
                    <span className="text-primary font-bold">80% Pronta</span>
                  </div>
                  
                  {/* Visual Bar Chart */}
                  <div className="mt-6 flex items-end gap-4 h-32 px-4">
                    <div className="w-1/2 bg-white/5 rounded-t-lg h-full relative group">
                      <div className="absolute bottom-0 w-full bg-white/10 h-[20%] rounded-t-lg transition-all group-hover:bg-white/20"></div>
                      <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-gray-500">Humano</span>
                    </div>
                    <div className="w-1/2 bg-primary/5 rounded-t-lg h-full relative group">
                      <div className="absolute bottom-0 w-full bg-primary h-[90%] rounded-t-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"></div>
                      <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-primary">Humano + IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW SECTION: Use Cases Grid */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Casos de Uso B2B</h2>
            <p className="text-gray-400">Onde aplicar a IA Generativa hoje para gerar ROI imediato.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare size={20} />,
                title: "Marketing",
                items: ["Criação de Conteúdo", "SEO Programático", "Personalização de Ads", "Imagens & Vídeos"]
              },
              {
                icon: <Search size={20} />,
                title: "Vendas",
                items: ["Prospecção Outbound", "Análise de Calls", "Respostas de Email", "Scoring de Leads"]
              },
              {
                icon: <Code size={20} />,
                title: "Engenharia",
                items: ["Geração de Código", "Documentação", "Testes Unitários", "Refatoração"]
              },
              {
                icon: <FileText size={20} />,
                title: "Operações",
                items: ["Análise de Contratos", "Suporte ao Cliente", "Onboarding de RH", "Relatórios Financeiros"]
              }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Agentic AI Section (Existing but refined) */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                O FUTURO
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Agentic AI</h2>
              <p className="text-gray-400 mb-6">
                A próxima fase não é sobre chatbots que respondem perguntas, mas sobre <span className="text-white font-medium">agentes autônomos</span> que executam tarefas complexas do início ao fim.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Navegam na web e usam ferramentas",
                  "Planejam e executam sequências de ações",
                  "Aprendem com feedback e melhoram",
                  "Trabalham 24/7 sem supervisão constante"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0A0A] rounded-lg border border-white/10 p-4 font-mono text-xs md:text-sm shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-2 text-gray-500">agent_terminal</span>
              </div>
              <div className="space-y-2">
                <div className="text-green-400">$ start_agent --goal="market_research"</div>
                <div className="text-gray-500">&gt; Initializing autonomous agent...</div>
                <div className="text-gray-500">&gt; Connected to web browser...</div>
                <div className="text-blue-400">&gt; Searching for "B2B trends 2025"...</div>
                <div className="text-gray-500">&gt; Found 14 relevant reports. Analyzing...</div>
                <div className="text-blue-400">&gt; Synthesizing data points...</div>
                <div className="text-primary">&gt; Report generated successfully. (output.pdf)</div>
                <div className="animate-pulse text-primary">_</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Não Seja Substituído. Seja Aumentado.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            A IA não vai tirar o seu emprego. Alguém usando IA vai. Aprenda a integrar inteligência artificial no seu fluxo de trabalho hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              IMPLEMENTAR IA AGORA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
