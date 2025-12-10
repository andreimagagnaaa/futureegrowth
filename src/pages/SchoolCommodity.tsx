import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, ShieldCheck, Diamond, Target, Scale, Award, Zap, Users, Fingerprint, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolCommodity = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-red-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                ALERTA DE MERCADO
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Armadilha da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-500">
                  Commoditização
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Quando todos parecem iguais, o cliente escolhe pelo preço. Descubra como escapar da "Guerra dos Clones" e cobrar o que você realmente vale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-white text-black hover:bg-gray-200 h-12 px-8 text-sm font-bold rounded-full transition-all w-full sm:w-auto">
                  ESCAPAR DA ARMADILHA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500">
                  Leitura de 4 minutos.
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-red-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex flex-col items-center justify-center gap-6">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Race to the Bottom */}
                  <div className="relative z-10 w-full space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Margem de Lucro</span>
                      <span>Tempo</span>
                    </div>
                    <div className="h-32 w-full bg-white/5 rounded-lg relative overflow-hidden border border-white/10">
                      {/* Line Chart Simulation */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,20 C50,20 100,80 150,90 C200,100 250,110 350,120" fill="none" stroke="#ef4444" strokeWidth="3" />
                        <path d="M0,20 C50,20 100,80 150,90 C200,100 250,110 350,120 L350,150 L0,150 Z" fill="url(#gradientRed)" opacity="0.2" />
                        <defs>
                          <linearGradient id="gradientRed" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Points */}
                      <div className="absolute top-[20px] left-0 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-red-500" />
                      <div className="absolute bottom-[10px] right-0 w-3 h-3 bg-red-500 rounded-full shadow-lg animate-pulse" />
                    </div>
                    <div className="text-center">
                      <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Race to the Bottom</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Problem: Sea of Sameness */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">O Mar da Mesmice</h2>
            <p className="text-gray-400 text-lg">
              Se o seu cliente não consegue distinguir seu produto do concorrente em 5 segundos, você é uma commodity. E commodities competem por preço.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Scale size={24} />,
                title: "Comparabilidade",
                desc: "Seus recursos são idênticos aos outros. O cliente abre 5 abas e escolhe o mais barato."
              },
              {
                icon: <TrendingDown size={24} />,
                title: "Margens em Queda",
                desc: "Para fechar vendas, você dá descontos. O lucro diminui, o investimento em inovação some."
              },
              {
                icon: <Target size={24} />,
                title: "Cliente Mercenário",
                desc: "Você atrai clientes que não são leais à marca, apenas ao bolso. Eles vão embora por R$ 10 a menos."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution: Decommoditization Framework */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                A SAÍDA
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Os 3 Pilares da Descommoditização</h2>
              <p className="text-gray-400">Como transformar seu negócio em um monopólio de valor.</p>
            </div>

            <div className="space-y-6">
              {/* Pillar 1 */}
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Diamond size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Mecanismo Único</h3>
                  <p className="text-gray-400 mb-4">
                    Não venda o "o quê", venda o "como". Dê um nome proprietário ao seu método.
                  </p>
                  <div className="p-4 bg-black/40 rounded border border-white/5 text-sm text-gray-300">
                    <span className="text-red-400 line-through mr-2">Consultoria de Vendas</span>
                    <ArrowRight className="inline w-4 h-4 mx-2 text-gray-500" />
                    <span className="text-primary font-bold">Sistema de Aceleração Revenue X™</span>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <ShieldCheck size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Garantia Irresistível</h3>
                  <p className="text-gray-400 mb-4">
                    Reverta o risco. Se você é o melhor, prove. Isso elimina a comparação de preços.
                  </p>
                  <div className="p-4 bg-black/40 rounded border border-white/5 text-sm text-gray-300">
                    <span className="text-red-400 line-through mr-2">Satisfação garantida</span>
                    <ArrowRight className="inline w-4 h-4 mx-2 text-gray-500" />
                    <span className="text-primary font-bold">Dobramos seu ROI em 90 dias ou trabalhamos de graça até conseguir.</span>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Award size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. Nicho Específico</h3>
                  <p className="text-gray-400 mb-4">
                    O generalista é pago como clínico geral. O especialista é pago como cirurgião.
                  </p>
                  <div className="p-4 bg-black/40 rounded border border-white/5 text-sm text-gray-300">
                    <span className="text-red-400 line-through mr-2">Marketing Digital para Todos</span>
                    <ArrowRight className="inline w-4 h-4 mx-2 text-gray-500" />
                    <span className="text-primary font-bold">Growth para SaaS B2B Series A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison: Commodity vs Brand */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">A Evolução do Valor</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Commodity */}
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <h3 className="text-xl font-bold text-white">Commodity</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between text-gray-400 border-b border-white/5 pb-2">
                    <span>Foco</span>
                    <span className="text-white">Funcionalidade</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-400 border-b border-white/5 pb-2">
                    <span>Competição</span>
                    <span className="text-white">Preço</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-400 border-b border-white/5 pb-2">
                    <span>Relacionamento</span>
                    <span className="text-white">Transacional</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-400 pb-2">
                    <span>Lucro</span>
                    <span className="text-red-400">Baixo</span>
                  </li>
                </ul>
              </div>

              {/* Right: Brand */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-primary/10 to-black border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#D4AF37]" />
                  <h3 className="text-xl font-bold text-white">Category King</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center justify-between text-gray-300 border-b border-primary/10 pb-2">
                    <span>Foco</span>
                    <span className="text-white font-medium">Transformação</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-300 border-b border-primary/10 pb-2">
                    <span>Competição</span>
                    <span className="text-white font-medium">Irrelevante</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-300 border-b border-primary/10 pb-2">
                    <span>Relacionamento</span>
                    <span className="text-white font-medium">Tribal / Fã</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-300 pb-2">
                    <span>Lucro</span>
                    <span className="text-primary font-bold">Exponencial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW SECTION: The Value Ladder */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">A Escada de Valor</h2>
            <p className="text-gray-400">
              Quanto mais você sobe, menos concorrência existe e maior é a margem de lucro.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-primary hidden md:block" />

            <div className="space-y-12 relative">
              {[
                {
                  step: "1. Commodity",
                  example: "Grão de Café",
                  price: "$",
                  color: "text-red-500",
                  desc: "Extração de matéria-prima. Preço definido pelo mercado global."
                },
                {
                  step: "2. Produto",
                  example: "Café em Pó",
                  price: "$$",
                  color: "text-orange-500",
                  desc: "Manufatura e embalagem. Pequena diferenciação por marca."
                },
                {
                  step: "3. Serviço",
                  example: "Xícara de Café",
                  price: "$$$",
                  color: "text-yellow-500",
                  desc: "Conveniência e preparo. O cliente paga para não fazer."
                },
                {
                  step: "4. Experiência",
                  example: "Starbucks",
                  price: "$$$$",
                  color: "text-primary",
                  desc: "Ambiente e status. O cliente paga por como se sente."
                },
                {
                  step: "5. Transformação",
                  example: "Mentoria de Barista",
                  price: "$$$$$",
                  color: "text-white",
                  desc: "Mudança de identidade. O cliente paga para se tornar alguém melhor."
                }
              ].map((level, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`text-2xl font-bold mb-2 ${level.color}`}>{level.step}</div>
                    <div className="text-xl text-white font-medium mb-2">{level.example}</div>
                    <p className="text-sm text-gray-400">{level.desc}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 shadow-xl">
                    <span className="font-mono font-bold text-white">{level.price}</span>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW SECTION: Anti-Commodity Arsenal */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">O Arsenal Anti-Commodity</h2>
            <p className="text-gray-400">Ferramentas que seus concorrentes não podem copiar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Fingerprint size={24} />,
                title: "Personalidade",
                desc: "Pessoas compram de pessoas. Sua história, valores e visão de mundo são incopiáveis."
              },
              {
                icon: <Users size={24} />,
                title: "Comunidade",
                desc: "Um produto pode ser substituído. Um sentimento de pertencimento não."
              },
              {
                icon: <Lock size={24} />,
                title: "Propriedade Intelectual",
                desc: "Metodologias, frameworks e dados proprietários que só você possui."
              },
              {
                icon: <Zap size={24} />,
                title: "Velocidade",
                desc: "Seja o primeiro a inovar. Quando copiarem, você já estará no próximo nível."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pare de Competir. Comece a Dominar.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Sua empresa tem algo único. O problema é que você não está comunicando isso. Vamos construir sua autoridade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              CONSTRUIR MINHA MARCA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
