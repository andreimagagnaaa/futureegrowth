import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Target, Zap, DollarSign, CheckCircle2, Lightbulb, Database, Server, Layout, CreditCard, AlertTriangle, Skull, MousePointer2, Search, Hammer, Megaphone, TrendingUp, Users, Lock, Globe } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolMicroSaaS = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-indigo-500/20 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                MICRO SAAS
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight text-white">
                Pequenos Softwares. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-200 to-indigo-500">
                  Margens Brutais.
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Esqueça o "próximo unicórnio". A nova onda são negócios de nicho, operados por uma pessoa, gerando receita recorrente com margem de 90%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all w-full sm:w-auto">
                  COMEÇAR AGORA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Visual Representation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative rounded-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-indigo-500/20 transition-colors duration-500">
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="p-8 relative min-h-[400px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Visual: The Profit Stack */}
                  <div className="relative z-10 w-full max-w-sm space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-widest mb-2">
                        <span>Revenue Breakdown</span>
                        <span>Monthly</span>
                    </div>
                    
                    {/* Revenue Bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl"
                    >
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-400 text-sm">MRR (Receita Recorrente)</span>
                            <span className="text-2xl font-bold text-white">$12,450</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "90%" }}
                              transition={{ duration: 1, delay: 0.8 }}
                              className="h-full bg-indigo-500" 
                            />
                        </div>
                    </motion.div>

                    {/* Expenses Bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl"
                    >
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-400 text-sm">Custos (Server + Tools)</span>
                            <span className="text-xl font-bold text-white">$140</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "5%" }}
                              transition={{ duration: 1, delay: 1 }}
                              className="h-full bg-red-500" 
                            />
                        </div>
                    </motion.div>

                    {/* Profit Bar */}
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
                        <div className="relative z-10 flex justify-between items-end">
                            <div>
                                <span className="text-emerald-400 text-sm font-bold block mb-1">LUCRO LÍQUIDO</span>
                                <span className="text-3xl font-bold text-white">$12,310</span>
                            </div>
                            <div className="text-right">
                                <span className="text-emerald-400 font-bold text-lg">98.8%</span>
                                <span className="text-gray-500 text-xs block">Margem</span>
                            </div>
                        </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Trap: VC vs Bootstrapped */}
      <section id="content-section" className="py-32 bg-[#020202] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A Armadilha do <span className="text-indigo-400">Unicórnio</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nos venderam a ideia de que sucesso é levantar milhões de investimento, contratar 100 pessoas e queimar caixa. Para 99% dos fundadores, isso é um pesadelo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* The VC Trap */}
            <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:border-red-500/20 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={120} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Startup Tradicional</h3>
              <p className="text-sm text-red-400 font-mono mb-8">"Growth at all costs"</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                        <Lock size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Você é Empregado</h4>
                        <p className="text-sm text-gray-400">Investidores controlam o board. Você pode ser demitido da sua própria empresa.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Diluição Constante</h4>
                        <p className="text-sm text-gray-400">A cada rodada, sua fatia do bolo diminui. Você trabalha mais por menos.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                        <AlertTriangle size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Binário: Tudo ou Nada</h4>
                        <p className="text-sm text-gray-400">Ou vira bilionário ou vai a zero. Não existe meio termo saudável.</p>
                    </div>
                </li>
              </ul>
            </div>

            {/* The MicroSaaS Way - Enhanced UI */}
            <div className="p-10 rounded-3xl bg-indigo-900/10 border border-indigo-500/30 relative overflow-hidden group hover:border-indigo-500/50 transition-all shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.2)]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={120} className="text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MicroSaaS</h3>
              <p className="text-sm text-indigo-400 font-mono mb-8">"Profit first"</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Liberdade Total</h4>
                        <p className="text-sm text-gray-300">Você decide o roadmap, o preço e quando tirar férias. Sem chefe.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                        <DollarSign size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">100% do Equity</h4>
                        <p className="text-sm text-gray-300">Todo o lucro vai para o seu bolso. Margens de software são infinitas.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                        <Globe size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Lifestyle Business</h4>
                        <p className="text-sm text-gray-300">Construído para servir sua vida, não para consumir sua vida.</p>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Pillars */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">A Tríade do MicroSaaS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Para funcionar com uma pessoa só, o modelo precisa ser perfeito.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Target className="w-10 h-10 text-indigo-400" />,
                title: "Hiper-Nicho",
                desc: "Não tente vender para todo mundo. Escolha um problema específico de um grupo específico. Ex: 'CRM para Fotógrafos de Casamento' em vez de 'CRM Genérico'.",
                bg: "bg-indigo-500/5",
                border: "border-indigo-500/20",
                hoverBg: "group-hover:bg-indigo-500/10"
              },
              {
                icon: <Zap className="w-10 h-10 text-purple-400" />,
                title: "Problema Doloroso",
                desc: "Seu software deve ser um 'analgésico', não uma 'vitamina'. Resolva algo que custa tempo ou dinheiro real para o seu cliente agora.",
                bg: "bg-purple-500/5",
                border: "border-purple-500/20",
                hoverBg: "group-hover:bg-purple-500/10"
              },
              {
                icon: <DollarSign className="w-10 h-10 text-emerald-400" />,
                title: "Modelo Recorrente",
                desc: "Venda assinaturas (SaaS). A previsibilidade de receita permite que você planeje o futuro e tenha paz de espírito, diferente de vender projetos únicos.",
                bg: "bg-emerald-500/5",
                border: "border-emerald-500/20",
                hoverBg: "group-hover:bg-emerald-500/10"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bg} border ${item.border} p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300 group ${item.hoverBg}`}>
                <div className="mb-8 p-5 bg-white/5 rounded-2xl inline-block shadow-lg backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Roadmap */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">O Caminho das Pedras</h2>
            
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent md:before:mx-auto md:before:translate-x-0">
              {[
                {
                  step: "01",
                  icon: <Search className="w-6 h-6" />,
                  title: "Mineração de Ideias",
                  desc: "Procure em fóruns, reviews de softwares ruins na App Store, ou problemas que você mesmo enfrenta. Onde as pessoas estão reclamando?",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10"
                },
                {
                  step: "02",
                  icon: <MousePointer2 className="w-6 h-6" />,
                  title: "Validação Sem Código",
                  desc: "Antes de escrever uma linha de código, crie uma Landing Page. Tente vender a ideia. Se ninguém clicar em 'Comprar', não construa.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10"
                },
                {
                  step: "03",
                  icon: <Hammer className="w-6 h-6" />,
                  title: "MVP (Mínimo Produto Viável)",
                  desc: "Construa apenas o essencial para resolver o problema central. Esqueça funcionalidades 'nice to have'. Foque no 'must have'.",
                  color: "text-pink-400",
                  bg: "bg-pink-500/10"
                },
                {
                  step: "04",
                  icon: <Megaphone className="w-6 h-6" />,
                  title: "Distribuição > Produto",
                  desc: "O melhor software do mundo morre sem marketing. Dedique 50% do tempo construindo e 50% vendendo (SEO, Content, Cold Outreach).",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/10 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${item.bg} ${item.color} z-10 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors hover:bg-white/[0.07]">
                    <div className={`text-xs font-bold ${item.color} mb-2 tracking-widest`}>PASSO {item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ideas Generator */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-white">
              <Lightbulb className="text-yellow-400 w-8 h-8" />
              Ideias para Copiar <span className="text-gray-500 text-2xl font-normal">(ou se inspirar)</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">O segredo não é a ideia, é a execução. Mas aqui estão alguns caminhos provados.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Plugins de Plataforma",
                desc: "Shopify, WordPress, Salesforce. Crie uma funcionalidade que falta nessas plataformas gigantes.",
                example: "Ex: App de SEO automático para Shopify."
              },
              {
                title: "Chrome Extensions",
                desc: "Modifique a experiência de sites que as pessoas já usam diariamente (LinkedIn, Gmail, Twitter).",
                example: "Ex: CRM que roda dentro do LinkedIn."
              },
              {
                title: "Wrappers de API",
                desc: "Pegue uma API complexa (como OpenAI) e crie uma interface simples para um nicho específico.",
                example: "Ex: Gerador de posts imobiliários com IA."
              },
              {
                title: "Curadoria / Dados",
                desc: "Venda acesso a dados organizados que são difíceis de encontrar manualmente.",
                example: "Ex: Lista de investidores anjo ativos no Brasil."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors flex flex-col h-full group hover:border-indigo-500/20">
                <h3 className="font-bold text-xl mb-4 text-indigo-300 group-hover:text-indigo-200 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">{item.desc}</p>
                <div className="text-xs font-mono text-gray-500 bg-black/30 p-3 rounded-lg border border-white/5 group-hover:border-indigo-500/10 transition-colors">
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tech Stack */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">A Caixa de Ferramentas</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Layout className="w-10 h-10 text-cyan-400" />,
                  category: "Frontend",
                  tool: "React + Vite",
                  why: "Velocidade de desenvolvimento e performance."
                },
                {
                  icon: <Database className="w-10 h-10 text-green-400" />,
                  category: "Backend",
                  tool: "Supabase",
                  why: "Banco de dados + Auth + Storage prontos. Zero config."
                },
                {
                  icon: <CreditCard className="w-10 h-10 text-purple-400" />,
                  category: "Pagamentos",
                  tool: "Stripe",
                  why: "Aceite cartões do mundo todo em minutos."
                },
                {
                  icon: <Server className="w-10 h-10 text-white" />,
                  category: "Deploy",
                  tool: "Vercel",
                  why: "Hospedagem gratuita para começar e escala infinita."
                }
              ].map((item, index) => (
                <div key={index} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-white/20 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">{item.category}</div>
                  <div className="font-bold text-xl text-white mb-3">{item.tool}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Graveyard (Mistakes) */}
      <section className="py-32 bg-red-950/10 border-y border-red-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6 text-red-500 ring-1 ring-red-500/20">
              <Skull size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Cemitério de Ideias</h2>
            <p className="text-lg text-gray-400">Evite esses erros e suas chances de sucesso aumentam em 10x.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                error: "Construir antes de Vender",
                desc: "Passar 6 meses codando sem ter falado com um único cliente. Resultado: Ninguém quer."
              },
              {
                error: "Nicho Genérico Demais",
                desc: "Tentar fazer um 'CRM para Pequenas Empresas'. Você vai ser esmagado pelos grandes. Nicho = 'CRM para Dentistas'."
              },
              {
                error: "Feature Creep",
                desc: "Adicionar botão para tudo. O cliente quer simplicidade, não um painel de avião."
              },
              {
                error: "Preço Baixo Demais",
                desc: "Cobrar R$ 9,90. Você precisa de milhares de clientes para sobreviver. Cobre R$ 99,00 ou mais."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-[#020202] p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-colors group">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-500 group-hover:scale-110 transition-transform shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">{item.error}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
