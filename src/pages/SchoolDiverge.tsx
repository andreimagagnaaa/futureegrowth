import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Users, Rocket, Search, BarChart3, Bot, Heart, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolDiverge = () => {
  const scrollToDiagnosis = () => {
    const element = document.getElementById('diagnosis-section');
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
                MÉTODO D.I.V.E.R.G.E
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Grande Divergência: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                  O Manual de 2026
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                O meio-termo colapsou. Integre <strong>Automação nos Bastidores</strong> para escalar a <strong>Humanização na Experiência</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToDiagnosis} size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all w-full sm:w-auto">
                  ACESSAR O PROTOCOLO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500">
                  Leitura de 5 minutos.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Visual Representation (Graph) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-primary/20 transition-colors duration-500">
                {/* Window Header */}
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>

                {/* Content Area */}
                <div className="p-6 relative min-h-[320px] flex items-center justify-center">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  <div className="relative z-10 w-full max-w-sm">
                    {/* Top Labels */}
                    <div className="flex justify-between mb-8">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                          <Bot size={12} />
                          <span className="text-[9px] font-bold uppercase">Automação</span>
                        </div>
                        <div className="text-base font-bold text-white">Commodity</div>
                        <div className="text-[9px] text-gray-400">Custo → 0</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-orange-400 mb-1 justify-end">
                          <span className="text-[9px] font-bold uppercase">Humanidade</span>
                          <Heart size={12} />
                        </div>
                        <div className="text-base font-bold text-white">Premium</div>
                        <div className="text-[9px] text-gray-400">Valor → ∞</div>
                      </div>
                    </div>

                    {/* The Divergence Graph Representation */}
                    <div className="relative h-28 w-full">
                      {/* Middle Line (Extinction) */}
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 border-t border-dashed border-white/20" />
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[9px] text-red-500 font-mono bg-red-500/10 px-1.5 py-0.5 rounded">
                        EXTINÇÃO
                      </div>

                      {/* Curves */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        {/* Upward Curve (Human) */}
                        <path 
                          d="M0,56 C70,56 140,56 280,10" 
                          fill="none" 
                          stroke="url(#gradientHuman)" 
                          strokeWidth="2"
                          className="drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                        />
                        {/* Downward Curve (Automation) */}
                        <path 
                          d="M0,56 C70,56 140,56 280,102" 
                          fill="none" 
                          stroke="url(#gradientAuto)" 
                          strokeWidth="2"
                          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                        />
                        <defs>
                          <linearGradient id="gradientHuman" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#333" stopOpacity="0" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                          <linearGradient id="gradientAuto" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#333" stopOpacity="0" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.5 The Problem: Middle Ground Extinction (Thesis Style) */}
      <section className="py-24 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">A Nova Arquitetura de Valor</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  O erro é tentar ser "médio" em tudo. O acerto é ser extremo onde importa.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mt-1 border border-blue-500/20">
                      <Bot size={24} />
                    </div>
                    <div>
                      <strong className="block text-white text-lg mb-1">Automação</strong>
                      <span className="text-gray-400 leading-relaxed">Processos invisíveis, dados e IA garantindo eficiência e margem.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 mt-1 border border-orange-500/20">
                      <Heart size={24} />
                    </div>
                    <div>
                      <strong className="block text-white text-lg mb-1">Humanização</strong>
                      <span className="text-gray-400 leading-relaxed">Narrativa, cultura e relacionamento gerando conexão e LTV.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-500/10 text-red-400 mt-1 border border-red-500/20">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <strong className="block text-white text-lg mb-1">Zona da Morte</strong>
                      <span className="text-gray-400 leading-relaxed">Genérico. Lento. Caro. Onde a maioria falha.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-3xl rounded-full opacity-50" />
                <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex justify-between items-end h-80 gap-4">
                    {/* Automation Bar */}
                    <div className="w-1/3 bg-blue-500/10 border border-blue-500/30 rounded-t-lg h-[90%] relative group hover:bg-blue-500/20 transition-colors">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="block text-2xl font-bold text-blue-400">IA</span>
                        <span className="text-xs text-blue-300 uppercase tracking-wider">Escala</span>
                      </div>
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-500/20 text-blue-300 text-[10px] px-2 py-1 rounded border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Custo Zero
                      </div>
                    </div>
                    
                    {/* Extinction Bar */}
                    <div className="w-1/3 bg-red-500/5 border-t-2 border-dashed border-red-500/30 h-[20%] relative group">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <span className="text-xs text-red-400 font-mono bg-red-500/10 px-2 py-1 rounded">ZONA DE EXTINÇÃO</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-red-500/50 text-4xl font-bold">†</span>
                      </div>
                    </div>
                    
                    {/* Human Bar */}
                    <div className="w-1/3 bg-orange-500/10 border border-orange-500/30 rounded-t-lg h-full relative group hover:bg-orange-500/20 transition-colors">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="block text-2xl font-bold text-orange-400">Humano</span>
                        <span className="text-xs text-orange-300 uppercase tracking-wider">Valor</span>
                      </div>
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-500/20 text-orange-300 text-[10px] px-2 py-1 rounded border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Ticket Alto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.6 Symptoms Section */}
      <section id="diagnosis-section" className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Sintomas da Zona de Extinção</h2>
              <p className="text-gray-400 text-base">
                Se sua empresa apresenta estes sinais, você está no meio-termo perigoso.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">CAC Instável</h3>
                <p className="text-sm text-gray-500">
                  O custo para adquirir um cliente sobe constantemente, corroendo toda a margem de lucro.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <Users size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Guerra de Preços</h3>
                <p className="text-sm text-gray-500">
                  O cliente não percebe diferencial e a única forma de fechar venda é dando desconto.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Baixa Retenção</h3>
                <p className="text-sm text-gray-500">
                  Clientes entram e saem rapidamente (Churn alto), impedindo o crescimento composto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Framework D.I.V.E.R.G.E. */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">O Protocolo D.I.V.E.R.G.E</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-base">
                A sequência lógica para escapar da extinção e construir um ativo antifrágil.
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 md:-translate-x-1/2" />

              <div className="space-y-12">
                {[
                  { letter: 'D', title: 'Diagnóstico', desc: 'Análise de Ruptura de Mercado' },
                  { letter: 'I', title: 'Identidade', desc: 'Definição do Núcleo de Valor' },
                  { letter: 'V', title: 'Visão', desc: 'Mapeamento de Futuros Possíveis' },
                  { letter: 'E', title: 'Estrutura', desc: 'Engenharia de Processos' },
                  { letter: 'R', title: 'Ressonância', desc: 'Alinhamento de Mensagem' },
                  { letter: 'G', title: 'Growth', desc: 'Sistemas de Aquisição' },
                  { letter: 'E', title: 'Evolução', desc: 'Adaptação Contínua' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Box */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all group hover:bg-white/[0.04]">
                        <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-3 md:block justify-end">
                          <span className="md:hidden text-primary font-mono">{item.letter}</span>
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center Marker */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#020202] border border-primary/20 z-10 group-hover:border-primary transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      <span className="text-primary font-bold font-mono">{item.letter}</span>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Proof Section */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Relatório de Impacto</h2>
              <p className="text-gray-400 text-base">Métricas validadas em operações reais após a implementação do protocolo.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-black/40 p-8 rounded-2xl border border-white/5 text-center hover:border-green-500/30 transition-colors group"
              >
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">3.5x</div>
                <div className="text-white font-medium mb-2">LTV (Lifetime Value)</div>
                <p className="text-sm text-gray-500">Setor de Educação</p>
                <div className="mt-4 text-xs text-gray-600 border-t border-white/5 pt-4 group-hover:text-gray-400 transition-colors">
                  Via Retenção Ativa
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-black/40 p-8 rounded-2xl border border-white/5 text-center hover:border-green-500/30 transition-colors group"
              >
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">-60%</div>
                <div className="text-white font-medium mb-2">CAC (Custo de Aquisição)</div>
                <p className="text-sm text-gray-500">SaaS B2B</p>
                <div className="mt-4 text-xs text-gray-600 border-t border-white/5 pt-4 group-hover:text-gray-400 transition-colors">
                  Via Posicionamento
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-black/40 p-8 rounded-2xl border border-white/5 text-center hover:border-green-500/30 transition-colors group"
              >
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">Top 1%</div>
                <div className="text-white font-medium mb-2">Market Share</div>
                <p className="text-sm text-gray-500">Consultoria</p>
                <div className="mt-4 text-xs text-gray-600 border-t border-white/5 pt-4 group-hover:text-gray-400 transition-colors">
                  Via Autoridade
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Differentials */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Arquitetura de Aprendizagem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Não é um curso. É uma transferência de competência estruturada.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="p-4 bg-primary/5 rounded-xl h-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Target className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">Metodologia Proprietária</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors text-sm">
                    Acesso ao framework D.I.V.E.R.G.E, desenvolvido e validado em campo.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="p-4 bg-primary/5 rounded-xl h-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Users className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">Mentoria de Elite</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors text-sm">
                    Acompanhamento direto com estrategistas que operam no front de batalha.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="p-4 bg-primary/5 rounded-xl h-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">Arsenal Tático</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors text-sm">
                    Templates, scripts e ferramentas prontas para implementação imediata.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="p-4 bg-primary/5 rounded-xl h-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Rocket className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">Ecossistema de Valor</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors text-sm">
                    Networking com outros operadores de alto nível e oportunidades de parceria.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Roadmap */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Cronograma de Implementação</h2>
              <p className="text-gray-400 text-base">A rota crítica para a transformação do seu negócio.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  month: 'Fase 1', 
                  title: 'Fundação', 
                  desc: 'Diagnóstico profundo e definição da Identidade Central. Onde tudo começa.',
                  icon: <Search className="w-5 h-5 text-primary" />
                },
                { 
                  month: 'Fase 2', 
                  title: 'Construção', 
                  desc: 'Engenharia de processos e calibração da mensagem para Ressonância máxima.',
                  icon: <Rocket className="w-5 h-5 text-primary" />
                },
                { 
                  month: 'Fase 3', 
                  title: 'Expansão', 
                  desc: 'Ativação dos sistemas de Growth e consolidação da Evolução contínua.',
                  icon: <BarChart3 className="w-5 h-5 text-primary" />
                }
              ].map((phase, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 relative group hover:border-primary/20 transition-all hover:bg-white/[0.04]"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                      {phase.month}
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-primary transition-colors">
                      {phase.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">{phase.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who is this for (New Section) */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Perfil de Operador</h2>
              <p className="text-gray-400 text-base">Este protocolo não é para todos. Verifique sua elegibilidade.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-8">
                <h3 className="text-green-400 font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  Para quem é
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                    <span>Busca construção de ativos de longo prazo, não hacks rápidos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                    <span>Entende que o mercado mudou e os métodos antigos faliram.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                    <span>Está disposto a investir tempo e energia na reestruturação do negócio.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                    <span>Valoriza fundamentos sólidos sobre táticas passageiras.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8">
                <h3 className="text-red-400 font-bold mb-6 flex items-center gap-2">
                  <XCircle size={20} />
                  Para quem NÃO é
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <XCircle size={16} className="text-red-500 mt-1 shrink-0" />
                    <span>Procura "dinheiro fácil" ou "fórmulas mágicas".</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <XCircle size={16} className="text-red-500 mt-1 shrink-0" />
                    <span>Acredita que "mais tráfego" resolve um produto ruim.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <XCircle size={16} className="text-red-500 mt-1 shrink-0" />
                    <span>Não tem paciência para construir bases sólidas.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <XCircle size={16} className="text-red-500 mt-1 shrink-0" />
                    <span>Resiste a mudanças e prefere manter o status quo.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-white/[0.08] to-transparent p-1 rounded-3xl">
              <div className="bg-[#020202] rounded-[22px] p-12 text-center border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
                    Iniciação do Protocolo
                  </h2>
                  <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    A janela de oportunidade para se posicionar corretamente está se fechando.
                    O mercado não espera por quem hesita.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      className="bg-primary hover:bg-primary-dark text-black px-10 py-6 text-lg rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(0,255,153,0.3)]"
                      onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    >
                      Conhecer a Futuree Growth
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-4 sm:mt-0">
                      * Aplicação sujeita a análise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
