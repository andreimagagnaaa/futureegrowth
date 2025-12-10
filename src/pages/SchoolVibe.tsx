import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Palette, Users, Eye, BarChart3, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolVibe = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                VIBE GROWTH
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                Não é sobre Dados. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-200 to-pink-500">
                  É sobre Feeling.
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Planilhas não criam fãs. Algoritmos não têm alma. Descubra como construir marcas que as pessoas amam irracionalmente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-pink-600 text-white hover:bg-pink-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(219,39,119,0.2)] hover:shadow-[0_0_30px_rgba(219,39,119,0.4)] transition-all w-full sm:w-auto">
                  SENTIR A VIBE
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-pink-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Vibe Meter */}
                  <div className="relative z-10 w-full max-w-xs flex flex-col items-center justify-center">
                    <div className="relative w-48 h-24 overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full bg-white/5 rounded-t-full border-t border-l border-r border-white/10" />
                      <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full overflow-hidden">
                         <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />
                      </div>
                      
                      {/* Needle */}
                      <div className="absolute bottom-0 left-1/2 w-1 h-24 bg-pink-500 origin-bottom transform rotate-45 shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-transform duration-1000 animate-pulse" style={{ borderRadius: '4px 4px 0 0' }} />
                      
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg z-20" />
                    </div>
                    
                    <div className="mt-8 text-center space-y-2">
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Current Mood</div>
                      <div className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                        <Sparkles className="text-pink-500" size={20} />
                        IMMACULATE
                        <Sparkles className="text-pink-500" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Logic vs Magic */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Lógica vs. Mágica</h2>
            <p className="text-gray-400 text-lg">
              O marketing tradicional tenta convencer o cérebro. O Vibe Growth seduz o coração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Logic Card */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute top-0 right-0 p-4">
                <BarChart3 size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Performance Marketing</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  Foco em CPA, ROAS, CTR.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  Otimização incremental (A/B Testing).
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  Transacional: "Compre agora".
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  Commoditizável (qualquer um pode copiar).
                </li>
              </ul>
            </div>

            {/* Magic Card */}
            <div className="p-8 rounded-2xl bg-pink-900/10 border border-pink-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Heart size={24} className="text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Vibe Marketing</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Foco em Identidade, Cultura, Pertencimento.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Apostas criativas ousadas (Moonshots).
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Relacional: "Junte-se a nós".
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Incopiável (ninguém copia sua alma).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Elements of Vibe */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Os Elementos da Vibe</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Estética Radical",
                  desc: "Visual que quebra padrões. Se parece com um anúncio, é ignorado. Se parece arte, é compartilhado.",
                  icon: <Palette size={24} />,
                  color: "text-purple-400"
                },
                {
                  title: "Narrativa de Culto",
                  desc: "Uma história 'nós contra eles'. Um inimigo comum. Uma missão que vai além do lucro.",
                  icon: <Users size={24} />,
                  color: "text-pink-400"
                },
                {
                  title: "Exclusividade",
                  desc: "Drops limitados, listas de espera, easter eggs. O desejo cresce na escassez.",
                  icon: <Eye size={24} />,
                  color: "text-yellow-400"
                }
              ].map((elem, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all group text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 ${elem.color} group-hover:scale-110 transition-transform`}>
                    {elem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{elem.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {elem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Studies */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Mestres da Vibe</h2>
            
            <div className="space-y-6">
              {[
                {
                  brand: "Liquid Death",
                  industry: "Água Mineral",
                  vibe: "Heavy Metal / Humor Negro",
                  tactic: "Transformou a coisa mais chata do mundo (água) em algo que você quer segurar numa festa."
                },
                {
                  brand: "MSCHF",
                  industry: "Arte / Moda",
                  vibe: "Caos / Viralidade",
                  tactic: "Produtos que são memes físicos. Botas vermelhas gigantes, tênis com água benta. Marketing é o produto."
                },
                {
                  brand: "Nubank (Early Days)",
                  industry: "Banco",
                  vibe: "Rebelde / Humano",
                  tactic: "Lutando contra os 'bancões'. Cartas escritas à mão, atendimento humanizado, design roxo icônico."
                }
              ].map((caseStudy, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
                  <div className="min-w-[150px]">
                    <h3 className="text-xl font-bold text-white">{caseStudy.brand}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{caseStudy.industry}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={14} className="text-pink-500" />
                      <span className="text-sm font-bold text-pink-400">{caseStudy.vibe}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {caseStudy.tactic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Vibe Checklist */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">O Checklist da Vibe</h2>
              <p className="text-gray-400">
                Como saber se sua marca tem alma ou é apenas mais um logotipo?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <XCircle className="text-red-500" />
                  Marca Genérica (Sem Vibe)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Usa fotos de banco de imagem (pessoas sorrindo em reuniões).</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Copy corporativo: "Soluções inovadoras para alavancar seus resultados".</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Medo de ofender alguém. Tenta agradar todo mundo.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Design "clean" e seguro, igual a todos os concorrentes.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-pink-900/10 border border-pink-500/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-pink-500" />
                  Marca com Alma (Vibe)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Estética própria, imperfeita e autêntica (Lo-fi, Memes, Arte).</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Voz humana, com opinião forte e senso de humor.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Polariza: quem ama, ama muito. Quem odeia, odeia.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-pink-500 mt-1">✓</span>
                    <span>Cria rituais, gírias e símbolos que só a comunidade entende.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Community vs Audience */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Audiência vs. Comunidade</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Audiência é o que você compra (Ads) ou aluga (Algoritmo). Comunidade é o que você constrói e ninguém pode tirar de você.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Audience Card */}
                <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 relative group hover:border-white/20 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Eye size={64} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-8">Audiência</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0">
                                <span className="font-mono text-gray-400">01</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">One-to-Many</h4>
                                <p className="text-sm text-gray-400">Você fala, eles escutam. Monólogo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0">
                                <span className="font-mono text-gray-400">02</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Passivo</h4>
                                <p className="text-sm text-gray-400">Consomem conteúdo, mas não interagem entre si.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0">
                                <span className="font-mono text-gray-400">03</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Frágil</h4>
                                <p className="text-sm text-gray-400">Se o algoritmo mudar, você perde tudo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Card */}
                <div className="p-8 rounded-2xl bg-pink-900/10 border border-pink-500/20 relative group hover:border-pink-500/40 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Users size={64} className="text-pink-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        Comunidade
                        <span className="px-2 py-0.5 rounded-full bg-pink-500 text-[10px] text-white font-bold uppercase">Meta</span>
                    </h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-pink-500/20 flex items-center justify-center shrink-0">
                                <span className="font-mono text-pink-500">01</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Many-to-Many</h4>
                                <p className="text-sm text-gray-300">Eles falam entre si. Você é apenas o anfitrião.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-pink-500/20 flex items-center justify-center shrink-0">
                                <span className="font-mono text-pink-500">02</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Ativo</h4>
                                <p className="text-sm text-gray-300">Criam conteúdo (UGC), defendem a marca, trazem amigos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded bg-pink-500/20 flex items-center justify-center shrink-0">
                                <span className="font-mono text-pink-500">03</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Antifrágil</h4>
                                <p className="text-sm text-gray-300">A comunidade existe independente da plataforma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Brand Rituals */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-white">Rituais de Marca</h2>
                    <p className="text-gray-400">
                        Marcas comuns têm clientes. Cult brands têm rituais.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "O Drop",
                            desc: "Lançamentos escassos em horários específicos. Cria hábito e adrenalina.",
                            example: "Supreme, Yeezy"
                        },
                        {
                            title: "O Unboxing",
                            desc: "A experiência de abrir é tão importante quanto o produto. Feito para ser filmado.",
                            example: "Apple, Tiffany"
                        },
                        {
                            title: "A Linguagem Secreta",
                            desc: "Acronyms e gírias que só quem é 'de dentro' entende. Cria pertencimento.",
                            example: "CrossFit (WOD, AMRAP), Gamers (GG, Noob)"
                        }
                    ].map((ritual, i) => (
                        <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Sparkles size={20} className="text-pink-500" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{ritual.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{ritual.desc}</p>
                            <div className="pt-4 border-t border-white/5">
                                <span className="text-xs text-gray-500">Ex: {ritual.example}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Encontre Sua Tribo</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Não construa uma lista de clientes. Construa um movimento.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl hover:scale-105 transition-all">
            CRIAR CULTURA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
