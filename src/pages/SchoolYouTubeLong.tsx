import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Youtube, Video, Mic, Monitor, Film, BarChart3, Heart, Eye, Zap, AlertTriangle, Skull, CheckCircle2, DollarSign, Image as ImageIcon, MousePointer, Layers, Share2 } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolYouTubeLong = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-red-500/30 selection:text-red-200">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-red-500/20 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                YOUTUBE LONG-FORM
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight text-white">
                Profundidade Gera <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                  Autoridade Real.
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Shorts trazem visualizações. Vídeos longos trazem fãs, clientes e construção de marca que dura décadas. O jogo mudou de "atenção rápida" para "retenção profunda".
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-red-600 text-white hover:bg-red-700 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all w-full sm:w-auto">
                  DOMINAR O LONGO
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
              <div className="relative rounded-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-red-500/20 transition-colors duration-500">
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="p-8 relative min-h-[400px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Visual: The Retention Curve */}
                  <div className="relative z-10 w-full max-w-sm space-y-6">
                    <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-widest mb-2">
                        <span>Trust Building</span>
                        <span>Time Spent</span>
                    </div>
                    
                    <div className="relative h-48 w-full border-l border-b border-white/10">
                        {/* Graph Line */}
                        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                            <motion.path 
                                d="M0,192 C50,180 100,150 150,100 C200,50 300,20 384,5" 
                                fill="none" 
                                stroke="url(#gradient)" 
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#ef4444" />
                                </linearGradient>
                            </defs>
                        </svg>
                        
                        {/* Points */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute left-[10%] bottom-[10%] flex flex-col items-center"
                        >
                            <div className="w-3 h-3 bg-gray-500 rounded-full mb-2" />
                            <span className="text-[10px] text-gray-500">Shorts (15s)</span>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute right-0 top-0 flex flex-col items-center translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-4 h-4 bg-red-500 rounded-full mb-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                            <span className="text-xs font-bold text-red-400 whitespace-nowrap">Long Form (30m+)</span>
                            <span className="text-[10px] text-white bg-red-500/20 px-2 py-0.5 rounded-full mt-1 border border-red-500/30">Venda Real</span>
                        </motion.div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                        <div className="p-2 bg-red-500/20 rounded-lg text-red-500">
                            <Heart className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">Conexão Emocional</div>
                            <div className="text-white font-bold">100x Maior</div>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Shift: Dopamine vs Oxytocin */}
      <section id="content-section" className="py-32 bg-[#020202] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A Batalha da <span className="text-red-500">Atenção</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              O mercado está saturado de conteúdo raso. Quem se aprofunda se destaca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* The Dopamine Trap (Shorts) */}
            <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:border-gray-500/20 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Conteúdo Rápido</h3>
              <p className="text-sm text-gray-400 font-mono mb-8">TikTok, Reels, Shorts</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 text-gray-400">
                        <Eye size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Alta Descoberta</h4>
                        <p className="text-sm text-gray-400">Ótimo para ser visto por estranhos, péssimo para ser lembrado.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 text-gray-400">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Churn Elevado</h4>
                        <p className="text-sm text-gray-400">As pessoas assistem e esquecem em 3 segundos. Dopamina barata.</p>
                    </div>
                </li>
              </ul>
            </div>

            {/* The Oxytocin Power (Long Form) */}
            <div className="p-10 rounded-3xl bg-red-950/10 border border-red-500/30 relative overflow-hidden group hover:border-red-500/50 transition-all shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:shadow-[0_0_50px_rgba(220,38,38,0.2)]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Youtube size={120} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Conteúdo Profundo</h3>
              <p className="text-sm text-red-400 font-mono mb-8">YouTube (30min+)</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                        <Users size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Comunidade Real</h4>
                        <p className="text-sm text-gray-300">Quem assiste 30 minutos de você sente que te conhece intimamente.</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Conversão Alta</h4>
                        <p className="text-sm text-gray-300">É muito mais fácil vender um ticket alto para quem já investiu tempo em você.</p>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Pillars of Retention */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">A Tríade da Retenção</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Como manter alguém assistindo por 40 minutos em um mundo de distrações.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Film className="w-10 h-10 text-red-500" />,
                title: "Storytelling Estruturado",
                desc: "Não é apenas falar. É criar arcos narrativos, abrir loops, criar tensão e resolução. O roteiro é 80% do sucesso.",
                bg: "bg-red-500/5",
                border: "border-red-500/20",
                hoverBg: "group-hover:bg-red-500/10"
              },
              {
                icon: <Eye className="w-10 h-10 text-orange-400" />,
                title: "Embalagem Irresistível",
                desc: "Thumbnail e Título não são detalhes, são a porta de entrada. Se ninguém clica, ninguém assiste sua obra-prima.",
                bg: "bg-orange-500/5",
                border: "border-orange-500/20",
                hoverBg: "group-hover:bg-orange-500/10"
              },
              {
                icon: <Zap className="w-10 h-10 text-yellow-400" />,
                title: "Edição Dinâmica",
                desc: "Padrões de interrupção visual a cada 3-5 segundos. B-rolls, textos, zoom-ins. Mantenha o cérebro do espectador engajado.",
                bg: "bg-yellow-500/5",
                border: "border-yellow-500/20",
                hoverBg: "group-hover:bg-yellow-500/10"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">O Processo de Produção</h2>
            
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent md:before:mx-auto md:before:translate-x-0">
              {[
                {
                  step: "01",
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: "Ideação & Pesquisa",
                  desc: "Analise o que já funciona. Encontre um ângulo único. Defina o Título e a Thumb ANTES de escrever o roteiro.",
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10"
                },
                {
                  step: "02",
                  icon: <FileText className="w-6 h-6" />,
                  title: "Roteirização Profunda",
                  desc: "Escreva palavra por palavra ou tópicos detalhados. Planeje os ganchos visuais. Onde entra o B-roll? Onde entra o gráfico?",
                  color: "text-gray-200",
                  bg: "bg-white/10"
                },
                {
                  step: "03",
                  icon: <Video className="w-6 h-6" />,
                  title: "Gravação (A-Roll)",
                  desc: "Luz, Câmera, Ação. Entregue energia. Fale com a lente como se fosse um amigo. Errou? Repete. O editor salva.",
                  color: "text-red-400",
                  bg: "bg-red-500/10"
                },
                {
                  step: "04",
                  icon: <Monitor className="w-6 h-6" />,
                  title: "Edição & Sound Design",
                  desc: "A mágica acontece aqui. Corte os silêncios. Adicione música que guia a emoção. Efeitos sonoros são cruciais.",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/10 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${item.bg} ${item.color} z-10 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors hover:bg-white/[0.07]">
                    <div className={`text-xs font-bold ${item.color} mb-2 tracking-widest`}>FASE {item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Setup Recomendado</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Video className="w-10 h-10 text-white" />,
                  category: "Imagem",
                  tool: "Sony ZV-E10 / iPhone",
                  why: "Você não precisa de uma câmera de cinema. Precisa de boa iluminação."
                },
                {
                  icon: <Mic className="w-10 h-10 text-red-400" />,
                  category: "Áudio",
                  tool: "Shure MV7 / Rode",
                  why: "Áudio ruim faz as pessoas fecharem o vídeo. Imagem ruim é tolerável."
                },
                {
                  icon: <Monitor className="w-10 h-10 text-blue-400" />,
                  category: "Edição",
                  tool: "Premiere / DaVinci",
                  why: "Softwares profissionais permitem fluxo de trabalho rápido e efeitos complexos."
                },
                {
                  icon: <BarChart3 className="w-10 h-10 text-green-400" />,
                  category: "Analytics",
                  tool: "YouTube Studio",
                  why: "Estude a retenção. Onde as pessoas saíram? Melhore no próximo."
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

      {/* 6. Monetization Ecosystem */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                <DollarSign size={14} />
                MONETIZAÇÃO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                O Iceberg do <br />
                <span className="text-green-400">Lucro Real</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Muitos criadores focam apenas no AdSense (centavos). O dinheiro real está no que você constrói <i>atrás</i> do canal. O YouTube é apenas o topo do funil.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "AdSense (Topo)",
                    desc: "O dinheiro do 'view'. Geralmente paga as contas básicas, mas não te deixa rico. É instável.",
                    color: "bg-gray-800",
                    text: "text-gray-300"
                  },
                  {
                    title: "Patrocínios (Meio)",
                    desc: "Marcas pagando pela sua audiência. Ótimo dinheiro, mas você ainda vende seu tempo.",
                    color: "bg-blue-900/30",
                    text: "text-blue-300"
                  },
                  {
                    title: "Produtos Próprios (Fundo)",
                    desc: "A mina de ouro. Cursos, consultorias, software. Margem de 90%+. Controle total.",
                    color: "bg-green-900/30",
                    text: "text-green-300 border-green-500/30"
                  }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-xl border border-white/5 ${item.color} transition-transform hover:translate-x-2`}>
                    <h3 className={`font-bold text-lg mb-1 ${item.text}`}>{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col items-center gap-2">
                  {/* Pyramid Visualization */}
                  <div className="w-32 h-24 bg-gray-800 clip-path-triangle flex items-center justify-center text-xs text-gray-400 mb-1 rounded-t-lg">AdSense</div>
                  <div className="w-48 h-32 bg-blue-900/40 flex items-center justify-center text-sm text-blue-300 font-bold mb-1">Sponsors</div>
                  <div className="w-64 h-40 bg-green-600 flex items-center justify-center text-lg text-white font-bold shadow-[0_0_30px_rgba(22,163,74,0.4)]">SEU PRODUTO</div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Potencial de Receita</p>
                  <div className="text-3xl font-bold text-white">$1k <span className="text-gray-600">vs</span> $10k <span className="text-gray-600">vs</span> $100k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Content Waterfall */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Multiplicação de Conteúdo</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Trabalhe uma vez, distribua em todo lugar. O método "Content Waterfall".</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24 relative z-10">
              {/* Step 1: The Source */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right pr-12 hidden md:block">
                  <h3 className="text-2xl font-bold text-white mb-2">1. O Vídeo Pilar</h3>
                  <p className="text-gray-400">Um vídeo denso de 20-40 minutos no YouTube. É a fonte de tudo.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] border-4 border-[#050505] shrink-0">
                  <Youtube className="text-white w-8 h-8" />
                </div>
                <div className="md:w-1/2 pl-4 md:pl-12 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2 md:hidden">1. O Vídeo Pilar</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 inline-block">
                    <span className="text-red-400 font-mono text-sm">Arquivo_Mestre.mp4</span>
                  </div>
                  <p className="text-gray-400 mt-4 md:hidden">Um vídeo denso de 20-40 minutos no YouTube. É a fonte de tudo.</p>
                </div>
              </div>

              {/* Step 2: The Split */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right pr-12 hidden md:block">
                   <div className="grid grid-cols-3 gap-2 justify-end">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-24 w-16 bg-purple-500/20 border border-purple-500/30 rounded-lg" />
                      ))}
                   </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)] border-4 border-[#050505] shrink-0">
                  <Layers className="text-white w-8 h-8" />
                </div>
                <div className="md:w-1/2 pl-4 md:pl-12 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">2. Micro-Cortes</h3>
                  <p className="text-gray-400 mb-4">Extraia 3-5 Shorts/Reels dos melhores momentos. Poste no TikTok, IG e YT Shorts.</p>
                  <div className="flex gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">TikTok</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs border border-pink-500/20">Reels</span>
                  </div>
                </div>
              </div>

              {/* Step 3: The Text */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right pr-12 hidden md:block">
                  <h3 className="text-2xl font-bold text-white mb-2">3. Texto & Imagem</h3>
                  <p className="text-gray-400">Transcreva. Vire uma Thread no Twitter. Vire um post no LinkedIn. Vire um Email.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] border-4 border-[#050505] shrink-0">
                  <Share2 className="text-white w-8 h-8" />
                </div>
                <div className="md:w-1/2 pl-4 md:pl-12 text-center md:text-left">
                   <h3 className="text-2xl font-bold text-white mb-2 md:hidden">3. Texto & Imagem</h3>
                   <div className="space-y-2">
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs text-gray-400 text-left max-w-xs mx-auto md:mx-0">
                        "Acabei de postar um vídeo sobre..."
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs text-gray-400 text-left max-w-xs mx-auto md:mx-0 opacity-70">
                        "A lição principal foi..."
                      </div>
                   </div>
                   <p className="text-gray-400 mt-4 md:hidden">Transcreva. Vire uma Thread no Twitter. Vire um post no LinkedIn. Vire um Email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Thumbnail Psychology */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-6 w-fit">
                  <ImageIcon size={14} />
                  A ARTE DO CLIQUE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Psicologia da <br />
                  <span className="text-orange-500">Thumbnail</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Se a taxa de clique (CTR) for baixa, o YouTube para de recomendar seu vídeo. A Thumb é uma promessa visual.
                </p>
                
                <ul className="space-y-4">
                  {[
                    { label: "Contraste Extremo", desc: "Cores que saltam no fundo branco/preto do YouTube." },
                    { label: "Expressão Facial", desc: "Emoção clara (medo, alegria, surpresa) ativa neurônios espelho." },
                    { label: "Regra dos 3 Elementos", desc: "Não polua. Rosto + Objeto + Texto Curto." },
                    { label: "Curiosity Gap", desc: "Mostre algo que o cérebro precisa 'fechar' assistindo." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <div>
                        <strong className="text-white block">{item.label}</strong>
                        <span className="text-sm text-gray-500">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/5 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
                
                {/* Mock Thumbnail */}
                <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl overflow-hidden group cursor-pointer">
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50" />
                  
                  {/* Face */}
                  <div className="absolute right-4 bottom-0 w-1/2 h-4/5 bg-gray-700 rounded-t-full opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Text */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2">
                    <div className="text-4xl font-black text-white uppercase leading-none drop-shadow-lg transform -rotate-2">
                      Segredo <br />
                      <span className="text-orange-500">Revelado</span>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute top-6 right-6 text-red-500 transform rotate-12">
                    <MousePointer size={48} className="fill-red-500 stroke-white stroke-2" />
                  </div>

                  {/* CTR Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-green-400 border border-green-500/30">
                    CTR: 12.5%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. The Graveyard (Mistakes) */}
      <section className="py-32 bg-red-950/10 border-y border-red-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6 text-red-500 ring-1 ring-red-500/20">
              <Skull size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Erros Fatais</h2>
            <p className="text-lg text-gray-400">Por que canais morrem antes de começar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                error: "Intro Longa Demais",
                desc: "Ninguém quer ver sua logo girando por 10 segundos. Comece com o conteúdo imediatamente."
              },
              {
                error: "Áudio Ruim",
                desc: "O espectador tolera vídeo em 720p, mas não tolera áudio com eco ou chiado."
              },
              {
                error: "Consistência > Qualidade",
                desc: "Postar lixo todo dia não funciona no longo prazo. Melhor 1 vídeo incrível por semana."
              },
              {
                error: "Ignorar a Thumb",
                desc: "Gastar 20 horas no vídeo e 5 minutos na Thumb. É como escrever um livro e não fazer a capa."
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

// Helper component for the roadmap icon
function FileText(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    )
  }

// Helper component for the roadmap icon
function Lightbulb(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  }
