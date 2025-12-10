import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Fingerprint, Youtube, Linkedin, Mic, Video, PenTool, Heart, Shield, Ghost, User, Lock, Eye, Bot } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolAutenticidade = () => {
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
                AUTENTICIDADE RADICAL
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                Na Era da IA, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                  Ser Humano é o Novo Luxo
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Em um mar de conteúdo gerado por IA, sua personalidade é o único fosso defensivo real. Autenticidade não é opcional, é sobrevivência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all w-full sm:w-auto">
                  DESCOBRIR O MÉTODO
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
                    {/* The Clone */}
                    <div className="flex items-center justify-between p-4 rounded bg-white/5 border border-white/5 opacity-50 grayscale">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-gray-700/50 text-gray-400"><Bot size={18} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">Conteúdo Genérico</div>
                          <div className="text-[10px] text-gray-500">ChatGPT • Stock Photos • Perfeito</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">Ignorado</span>
                    </div>
                    
                    {/* The Human */}
                    <div className="flex items-center justify-between p-4 rounded bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-105">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-primary/20 text-primary"><Fingerprint size={18} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">Marca Pessoal Autêntica</div>
                          <div className="text-[10px] text-gray-500">Opinião • Falhas • Bastidores</div>
                        </div>
                      </div>
                      <span className="text-xs text-primary font-mono">Magnético</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Problem: The Sea of Sameness */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">O Ataque dos Clones</h2>
            <p className="text-gray-400 text-lg">
              A internet foi inundada por conteúdo medíocre gerado por IA e gurus repetindo as mesmas fórmulas. O resultado? Ninguém confia em ninguém.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Ghost size={24} />,
                title: "Invisibilidade",
                desc: "Se o seu conteúdo parece com o de todo mundo, você é invisível. O cérebro humano é treinado para ignorar padrões repetitivos."
              },
              {
                icon: <Shield size={24} />,
                title: "Ceticismo Extremo",
                desc: "Promessas exageradas e vidas perfeitas no Instagram criaram uma barreira de defesa nos consumidores. A perfeição é suspeita."
              },
              {
                icon: <Lock size={24} />,
                title: "Comoditização",
                desc: "Se você não tem uma voz única, você é apenas mais uma opção na prateleira. E opções iguais competem por preço."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution: Founder-Led Growth */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                A ESTRATÉGIA
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Founder-Led Growth</h2>
              <p className="text-gray-400">
                Pessoas compram de pessoas, não de logotipos. O fundador é o maior ativo de marketing da empresa.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Heart size={24} />,
                  title: "Vulnerabilidade Estratégica",
                  desc: "Não mostre apenas as vitórias. Compartilhe os desafios, os erros e as lições aprendidas. Isso cria empatia e confiança instantânea."
                },
                {
                  icon: <PenTool size={24} />,
                  title: "Opinião Forte (Polarização)",
                  desc: "Não tente agradar a todos. Tenha um ponto de vista claro sobre o seu mercado. Quem tenta falar com todo mundo, não fala com ninguém."
                },
                {
                  icon: <Eye size={24} />,
                  title: "Building in Public",
                  desc: "Mostre os bastidores. Como você constrói seu produto? Como você toma decisões? O processo é tão interessante quanto o resultado."
                }
              ].map((pillar, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 The 3 Layers of Authenticity */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">As 3 Camadas da Autenticidade</h2>
              <p className="text-gray-400">
                A maioria para na superfície. A conexão real acontece nas profundezas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-700" />
                <div className="w-12 h-12 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4 font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Superfície</h3>
                <p className="text-xs text-gray-500 mb-4">Identidade Visual • Tom de Voz • Estética</p>
                <p className="text-sm text-gray-400">O que as pessoas veem. É importante para reconhecimento, mas não cria lealdade.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50" />
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Narrativa</h3>
                <p className="text-xs text-gray-500 mb-4">Jornada • Lutas • Vitórias</p>
                <p className="text-sm text-gray-400">Sua história de origem. Por que você faz o que faz. Cria empatia e contexto.</p>
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-105 z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center text-black mb-4 font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Núcleo (Core)</h3>
                <p className="text-xs text-primary/70 mb-4">Crenças • Valores • Inimigos</p>
                <p className="text-sm text-gray-300">O que você defende e o que você combate. É aqui que fãs viram devotos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Channels Deep Dive */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Onde Construir sua Voz</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* YouTube */}
              <div className="p-8 rounded-2xl bg-[#FF0000]/5 border border-[#FF0000]/20 relative overflow-hidden group hover:bg-[#FF0000]/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-[#FF0000]"><Youtube size={80} /></div>
                <div className="w-12 h-12 rounded-lg bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] mb-6">
                  <Video size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">YouTube</h3>
                <p className="text-sm text-gray-400 mb-4">Profundidade e Conexão.</p>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FF0000] rounded-full"/> Vídeos longos (Podcasts/Vlogs)</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FF0000] rounded-full"/> Tutoriais aprofundados</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FF0000] rounded-full"/> Onde a confiança é construída</li>
                </ul>
              </div>

              {/* LinkedIn */}
              <div className="p-8 rounded-2xl bg-[#0077b5]/5 border border-[#0077b5]/20 relative overflow-hidden group hover:bg-[#0077b5]/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-[#0077b5]"><Linkedin size={80} /></div>
                <div className="w-12 h-12 rounded-lg bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] mb-6">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
                <p className="text-sm text-gray-400 mb-4">Autoridade Profissional.</p>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0077b5] rounded-full"/> Liderança de pensamento</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0077b5] rounded-full"/> Networking de alto nível</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0077b5] rounded-full"/> Quebra da fachada corporativa</li>
                </ul>
              </div>

              {/* Podcast/Audio */}
              <div className="p-8 rounded-2xl bg-purple-500/5 border border-purple-500/20 relative overflow-hidden group hover:bg-purple-500/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-purple-500"><Mic size={80} /></div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                  <Mic size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Podcast</h3>
                <p className="text-sm text-gray-400 mb-4">Intimidade e Retenção.</p>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"/> Tempo de atenção massivo</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"/> Conversas sem filtro</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"/> Companhia diária do ouvinte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Sua História é Seu Maior Ativo</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Ninguém pode copiar quem você é. Transforme sua personalidade em um fosso defensivo inexpugnável.
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
