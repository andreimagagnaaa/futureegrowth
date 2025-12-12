import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, TrendingUp, Activity, Database, Bot, Code2, AlertTriangle, CheckCircle2, BarChart3, Layers, ShieldCheck, Smartphone, FileCode2 } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolHypeCycle = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-violet-500/20 selection:text-violet-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                GARTNER 2025 REPORT
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                Hype Cycle 2025: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-200 to-violet-500">
                  Muito Além da GenAI
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                A festa acabou? A IA Generativa caiu no "Abismo da Desilusão". Descubra o que vem depois do hype e onde o dinheiro inteligente está indo agora.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-violet-600 text-white hover:bg-violet-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all w-full sm:w-auto">
                  LER RELATÓRIO
                  <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-violet-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: Hype Cycle Curve */}
                  <div className="relative z-10 w-full h-48">
                    <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                      {/* The Curve */}
                      <path 
                        d="M 10,180 Q 50,180 80,50 Q 110,-50 150,100 Q 180,180 250,160 Q 320,140 390,140" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                          <stop offset="20%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#22c55e" />
                        </linearGradient>
                      </defs>

                      {/* Points */}
                      <circle cx="80" cy="50" r="4" fill="#8b5cf6" className="animate-pulse" />
                      <text x="60" y="40" fill="white" fontSize="10" fontWeight="bold">Agentes de IA</text>

                      <circle cx="150" cy="100" r="6" fill="#ef4444" className="animate-ping" />
                      <circle cx="150" cy="100" r="4" fill="white" />
                      <text x="160" y="100" fill="#ef4444" fontSize="12" fontWeight="bold">GenAI (Hoje)</text>

                      <circle cx="300" cy="150" r="4" fill="#22c55e" />
                      <text x="310" y="150" fill="white" fontSize="10" fontWeight="bold">ModelOps</text>
                    </svg>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Trough of Disillusionment */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-400 mb-6">
                <TrendingDown size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Abismo da Desilusão</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Em 2024, a GenAI era "transformadora". Em 2025, a realidade bateu à porta. As empresas estão percebendo que o ChatGPT não é uma varinha mágica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-red-400" size={24} />
                  <h3 className="text-xl font-bold text-white">A Crise do ROI</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Apesar de gastos médios de US$ 1,9 milhão, <strong>menos de 30% dos CEOs</strong> estão satisfeitos com o retorno.
                </p>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[30%]" />
                </div>
                <p className="text-[10px] text-gray-500 mt-2 text-right">Satisfação dos CEOs</p>
              </div>

              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="text-red-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Barreiras Reais</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-500 mt-1">×</span>
                    Falta de profissionais qualificados
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-500 mt-1">×</span>
                    Governança e riscos legais (alucinações)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-500 mt-1">×</span>
                    Dificuldade em integrar com sistemas legados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Enablers */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold mb-4">
                  <CheckCircle2 size={14} />
                  SOLUÇÃO SUSTENTÁVEL
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Os Alicerces Invisíveis</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Enquanto o hype da GenAI esfria, tecnologias de suporte estão atingindo o "Platô da Produtividade". É aqui que a engenharia real acontece.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 p-2 rounded bg-white/5 border border-white/10 h-fit">
                      <Code2 size={20} className="text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Engenharia de IA</h4>
                      <p className="text-sm text-gray-500">Não é apenas "fazer funcionar", é fazer funcionar com segurança, escala e coesão.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 p-2 rounded bg-white/5 border border-white/10 h-fit">
                      <BarChart3 size={20} className="text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">ModelOps</h4>
                      <p className="text-sm text-gray-500">Governança de ponta a ponta. O ciclo de vida do modelo, do treino ao descarte.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-violet-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-bold">Maturidade Tecnológica</h3>
                    <span className="text-xs text-gray-500">Fonte: Gartner 2025</span>
                  </div>
                  
                  <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-800" />

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-violet-500 border-4 border-black z-10" />
                      <h4 className="text-violet-400 font-bold text-sm">ModelOps</h4>
                      <p className="text-xs text-gray-500">Platô da Produtividade</p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-700 border-4 border-black z-10" />
                      <h4 className="text-gray-300 font-bold text-sm">Engenharia de IA</h4>
                      <p className="text-xs text-gray-500">Ladeira da Iluminação</p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-500 border-4 border-black z-10" />
                      <h4 className="text-red-400 font-bold text-sm">GenAI</h4>
                      <p className="text-xs text-gray-500">Abismo da Desilusão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Next Wave: Agents & Data */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 mb-6">
                <TrendingUp size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Próxima Onda</h2>
              <p className="text-gray-400 text-lg">
                Enquanto a GenAI se estabiliza, duas novas forças estão subindo o pico das expectativas infladas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: Data */}
              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all">
                <div className="absolute top-0 right-0 p-32 bg-violet-500/10 blur-[80px] rounded-full group-hover:bg-violet-500/20 transition-all" />
                <Database className="text-violet-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">Dados Prontos para IA</h3>
                <p className="text-gray-400 mb-6">
                  Não adianta ter o melhor modelo se seus dados são lixo. <strong>57% das empresas</strong> admitem que seus dados não estão prontos.
                </p>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <p className="text-xs text-gray-300 font-mono">
                    &gt; SELECT * FROM chaos;<br/>
                    <span className="text-red-400">Error: Unstructured data not found.</span>
                  </p>
                </div>
              </div>

              {/* Card 2: Agents */}
              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all">
                <div className="absolute top-0 right-0 p-32 bg-fuchsia-500/10 blur-[80px] rounded-full group-hover:bg-fuchsia-500/20 transition-all" />
                <Bot className="text-fuchsia-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">Agentes de IA</h3>
                <p className="text-gray-400 mb-6">
                  Softwares autônomos que tomam decisões. O sonho da automação total, mas com riscos de segurança e confiança ainda não resolvidos.
                </p>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <p className="text-xs text-gray-300 font-mono">
                    &gt; Agent.execute_task()<br/>
                    <span className="text-yellow-400">Warning: Human supervision required.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 Emerging Technologies */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">No Radar do Futuro</h2>
              <p className="text-gray-400 text-lg">
                Outras tecnologias críticas que estão moldando o ecossistema de IA em 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-colors group">
                <Layers className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">IA Composta</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A combinação de diferentes técnicas de IA (Machine Learning, Grafos, Regras) para resolver problemas que um único modelo não consegue. O todo é maior que a soma das partes.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-colors group">
                <ShieldCheck className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">AI TRiSM</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Trust, Risk, and Security Management. Ferramentas para garantir que a IA seja justa, explicável e segura contra ataques adversários.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-colors group">
                <Smartphone className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Edge AI</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Rodar modelos de IA diretamente no dispositivo (celular, IoT) em vez da nuvem. Menor latência, maior privacidade e menor custo de banda.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-colors group">
                <FileCode2 className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Dados Sintéticos</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Usar IA para gerar dados de treinamento quando os dados reais são escassos, caros ou sensíveis (privacidade). O fim da escassez de dados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AI-Native Engineering */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-900/20 to-black border border-violet-500/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <Code2 className="text-violet-400 mx-auto mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">O Fim do "Junior Dev"?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A "Engenharia de Software Nativa de IA" entrou no radar. O código não é mais escrito à mão, é curado.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-2">O Novo Papel</h4>
                  <p className="text-sm text-gray-400">
                    O foco muda de sintaxe para <strong>raciocínio crítico, criatividade e empatia</strong>. O engenheiro vira um arquiteto de sistemas de IA.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">O Risco</h4>
                  <p className="text-sm text-gray-400">
                    Confiar cegamente no código gerado cria vulnerabilidades de segurança e dívida técnica invisível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Final */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-violet-900/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Não Seja Pego no Hype
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              A diferença entre quem quebra e quem escala é saber ler os sinais. Prepare sua empresa para a fase de produtividade real.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold rounded-full">
              AGENDAR CONSULTORIA ESTRATÉGICA
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
