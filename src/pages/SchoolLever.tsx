import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Code, Video, Scale, Lock, Unlock, Zap } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolLever = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                LEVER GROWTH
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Arte da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-500">
                  Alavancagem Infinita
                </span>
              </h1>
              
              <blockquote className="border-l-2 border-blue-500/30 pl-4 mb-8 italic text-gray-400 text-sm">
                "Dê-me uma alavanca longa o suficiente e um ponto de apoio, e moverei o mundo."
                <footer className="text-blue-400 not-italic font-medium mt-1 text-xs">— Arquimedes</footer>
              </blockquote>

              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Crescimento não é sobre esforço linear. É sobre encontrar os pontos de alavancagem onde 1 hora de trabalho gera 1000 horas de resultado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all w-full sm:w-auto">
                  ENTENDER AS ALAVANCAS
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-blue-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Lever */}
                  <div className="relative z-10 w-full max-w-xs flex flex-col items-center">
                    <div className="w-full h-1 bg-white/20 rounded-full relative mb-2 transform -rotate-6 origin-bottom-right">
                        <div className="absolute -top-8 -right-4 w-12 h-12 bg-blue-500 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center animate-pulse">
                            <TrendingUp className="text-white" size={24} />
                        </div>
                        <div className="absolute -bottom-8 left-4 w-8 h-8 bg-gray-800 rounded border border-white/10 flex items-center justify-center">
                            <span className="text-[10px] text-gray-400">Input</span>
                        </div>
                    </div>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white/20" />
                    <div className="mt-4 text-center">
                        <p className="text-xs text-blue-400 font-mono">OUTPUT EXPONENCIAL</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The 4 Levers of Growth */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">As 4 Formas de Alavancagem</h2>
            <p className="text-gray-400 text-lg">
              Na era digital, você não precisa de permissão para usar as alavancas mais poderosas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "1. Trabalho (Labor)",
                desc: "Pessoas trabalhando para você. É a forma mais antiga e difícil de alavancagem. Requer liderança e gestão complexa.",
                icon: <Users size={24} />,
                permission: "Requer Permissão",
                color: "text-gray-400"
              },
              {
                title: "2. Capital (Money)",
                desc: "Dinheiro trabalhando para você. Escala muito bem, mas requer que você já tenha capital para investir.",
                icon: <DollarSign size={24} />,
                permission: "Requer Permissão",
                color: "text-green-400"
              },
              {
                title: "3. Código (Code)",
                desc: "Software que trabalha enquanto você dorme. Custo marginal de replicação zero. A alavanca dos novos bilionários.",
                icon: <Code size={24} />,
                permission: "Sem Permissão (Permissionless)",
                color: "text-blue-400"
              },
              {
                title: "4. Mídia (Media)",
                desc: "Conteúdo que alcança milhões. Um vídeo gravado uma vez pode ser visto para sempre. A alavanca da influência.",
                icon: <Video size={24} />,
                permission: "Sem Permissão (Permissionless)",
                color: "text-purple-400"
              }
            ].map((lever, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${lever.color} group-hover:scale-110 transition-transform`}>
                  {lever.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{lever.title}</h3>
                  <span className={`text-[10px] px-2 py-1 rounded border ${lever.permission.includes('Sem') ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-gray-700 text-gray-500 bg-gray-800/50'}`}>
                    {lever.permission}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {lever.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Linear vs Exponential */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
                  MATEMÁTICA DO CRESCIMENTO
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Linear vs. Exponencial</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A maioria das pessoas opera em modo linear: trocam tempo por dinheiro. Se você para de trabalhar, a receita para.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  O "Lever Growth" busca desconectar inputs de outputs. Você constrói ativos (código, mídia, marca) que compõem juros sobre si mesmos.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <Scale size={14} />
                    </div>
                    <span>Linear: 1h Trabalho = 1 Unidade de Resultado</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <TrendingUp size={14} />
                    </div>
                    <span>Alavancado: 1h Trabalho = ∞ Unidades de Resultado</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-[400px] bg-[#0A0A0A] rounded-2xl border border-white/10 p-8 flex items-end">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Chart Visualization */}
                <div className="relative z-10 w-full h-full flex items-end gap-8 pl-8 pb-8 border-l border-b border-white/20">
                    {/* Linear Line */}
                    <div className="absolute bottom-8 left-8 w-full h-full pointer-events-none">
                        <svg className="w-full h-full overflow-visible">
                            <line x1="0" y1="100%" x2="100%" y2="20%" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="90%" y="15%" fill="#ef4444" fontSize="12">Linear</text>
                        </svg>
                    </div>
                    
                    {/* Exponential Curve */}
                    <div className="absolute bottom-8 left-8 w-full h-full pointer-events-none">
                        <svg className="w-full h-full overflow-visible">
                            <path d="M0,300 C100,300 200,280 300,0" fill="none" stroke="#3b82f6" strokeWidth="3" />
                            <text x="90%" y="-5%" fill="#3b82f6" fontSize="12" fontWeight="bold">Exponencial</text>
                        </svg>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Permissionless Era */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">A Era "Permissionless"</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                As velhas alavancas (Trabalho e Capital) exigiam que alguém te desse permissão. As novas (Código e Mídia) estão disponíveis para qualquer um.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Lock size={100} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Velha Economia
                </h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Precisa de investidores para ter capital.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Precisa de gerentes para contratar pessoas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Gatekeepers controlam sua distribuição (TV, Rádio).</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-blue-900/10 border border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Unlock size={100} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Nova Economia
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Código é gratuito para escrever e implantar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>Mídia é gratuita para criar e distribuir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>O mercado é o único juiz do seu valor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Leverage Ladder */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">A Escada da Alavancagem</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: "Nível 1",
                  title: "Troca de Tempo",
                  desc: "Salário ou Freelancer. Você ganha pelo que faz, não pelo valor que cria.",
                  color: "bg-gray-800"
                },
                {
                  step: "Nível 2",
                  title: "Produtização de Serviço",
                  desc: "Agência ou Consultoria. Você cria processos e contrata pessoas (Labor) para escalar.",
                  color: "bg-blue-900/40"
                },
                {
                  step: "Nível 3",
                  title: "Produtos Digitais",
                  desc: "Cursos, E-books. Custo marginal zero. Você cria uma vez e vende infinitamente (Media/Code).",
                  color: "bg-blue-800/60"
                },
                {
                  step: "Nível 4",
                  title: "SaaS / Plataforma",
                  desc: "Software como Serviço. Receita recorrente e alta barreira de entrada. O auge da alavancagem.",
                  color: "bg-blue-600"
                }
              ].map((level, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
                  <div className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center shrink-0 font-bold text-white text-sm shadow-lg`}>
                    {level.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                      {level.title}
                      {i === 3 && <Zap size={16} className="text-yellow-400 fill-yellow-400" />}
                    </h3>
                    <p className="text-sm text-gray-400">{level.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Encontre Sua Alavanca</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Pare de empurrar a pedra morro acima. Comece a construir a máquina que a carrega por você.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl hover:scale-105 transition-all">
            COMEÇAR AGORA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
