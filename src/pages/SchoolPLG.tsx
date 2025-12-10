import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Zap, BarChart3, RefreshCw, MousePointerClick, Magnet, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolPLG = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                PRODUCT-LED GROWTH
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                O Produto é o <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-200 to-purple-500">
                  Seu Melhor Vendedor
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Pare de forçar vendas. Comece a entregar valor antes de pedir o cartão de crédito. A era do "Fale com um Vendedor" acabou.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all w-full sm:w-auto">
                  ENTENDER PLG
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-purple-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Flywheel */}
                  <div className="relative z-10 w-full max-w-xs flex flex-col items-center justify-center">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 rounded-full border-4 border-purple-500/20 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-0 rounded-full border-t-4 border-purple-500 animate-[spin_3s_linear_infinite]" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                          <Rocket className="text-purple-400" size={32} />
                        </div>
                      </div>

                      {/* Orbiting Elements */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-2 py-1 rounded border border-white/10 text-[10px] text-gray-400">
                        Acquisition
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0A0A0A] px-2 py-1 rounded border border-white/10 text-[10px] text-gray-400">
                        Retention
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-2 py-1 rounded border border-white/10 text-[10px] text-gray-400">
                        Expansion
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-2 py-1 rounded border border-white/10 text-[10px] text-gray-400">
                        Conversion
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Sales-Led vs Product-Led */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">A Inversão do Modelo</h2>
            <p className="text-gray-400 text-lg">
              No modelo tradicional, você vende a promessa. No PLG, você entrega a promessa e depois cobra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sales-Led Card */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute top-0 right-0 p-4">
                <Users size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Sales-Led Growth (SLG)</h3>
              <div className="space-y-6 relative">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">1</div>
                  <p className="text-sm text-gray-400">Marketing gera Leads (MQLs)</p>
                </div>
                <div className="w-0.5 h-6 bg-gray-800 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">2</div>
                  <p className="text-sm text-gray-400">Vendas qualifica e faz Demo</p>
                </div>
                <div className="w-0.5 h-6 bg-gray-800 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">3</div>
                  <p className="text-sm text-gray-400">Cliente assina contrato</p>
                </div>
                <div className="w-0.5 h-6 bg-gray-800 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">4</div>
                  <p className="text-sm text-gray-400">Cliente usa o produto</p>
                </div>
              </div>
            </div>

            {/* Product-Led Card */}
            <div className="p-8 rounded-2xl bg-purple-900/10 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Rocket size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Product-Led Growth (PLG)</h3>
              <div className="space-y-6 relative">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">1</div>
                  <p className="text-sm text-gray-300">Usuário descobre e testa (Freemium/Trial)</p>
                </div>
                <div className="w-0.5 h-6 bg-purple-500/30 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">2</div>
                  <p className="text-sm text-gray-300">Usuário vê valor (Aha! Moment)</p>
                </div>
                <div className="w-0.5 h-6 bg-purple-500/30 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">3</div>
                  <p className="text-sm text-gray-300">Usuário vira cliente (Self-Service)</p>
                </div>
                <div className="w-0.5 h-6 bg-purple-500/30 ml-4" />
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">4</div>
                  <p className="text-sm text-gray-300">Expansão e Viralidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Pillars of PLG */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Os 3 Pilares do PLG</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fricção Zero",
                  desc: "Elimine barreiras de entrada. Sem cartão de crédito, sem setup complexo, sem falar com humanos.",
                  icon: <MousePointerClick size={24} />,
                  color: "text-blue-400"
                },
                {
                  title: "Time-to-Value",
                  desc: "O usuário deve experimentar o valor central do produto em minutos, não dias ou semanas.",
                  icon: <Zap size={24} />,
                  color: "text-yellow-400"
                },
                {
                  title: "Viralidade",
                  desc: "O uso do produto naturalmente convida outros usuários (ex: Slack, Zoom, Dropbox).",
                  icon: <Magnet size={24} />,
                  color: "text-pink-400"
                }
              ].map((pillar, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all group text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 ${pillar.color} group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Metrics that Matter */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Métricas da Nova Era</h2>
                <p className="text-gray-400 mb-8">
                  Esqueça MQLs e SQLs. No PLG, o comportamento do usuário dita o sucesso.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">PQL (Product Qualified Lead)</span>
                      <BarChart3 size={16} className="text-purple-400" />
                    </div>
                    <p className="text-xs text-gray-400">Usuários que atingiram o "Aha! Moment" e estão prontos para comprar.</p>
                  </div>
                  <div className="p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">NRR (Net Revenue Retention)</span>
                      <RefreshCw size={16} className="text-green-400" />
                    </div>
                    <p className="text-xs text-gray-400">Quanto sua receita cresce sem novos clientes (Upsell/Cross-sell).</p>
                  </div>
                  <div className="p-4 rounded bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Viral Coefficient (K-Factor)</span>
                      <Users size={16} className="text-blue-400" />
                    </div>
                    <p className="text-xs text-gray-400">Quantos novos usuários cada usuário existente traz.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] bg-[#0A0A0A] rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">O Efeito Flywheel</h3>
                  <p className="text-sm text-gray-400 mb-8">Melhor Produto → Mais Usuários → Mais Dados → Melhor Produto</p>
                  
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-purple-500/20 border-t-purple-500 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket size={48} className="text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Freemium vs Free Trial */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Freemium vs. Free Trial</h2>
              <p className="text-gray-400">
                Qual modelo de aquisição é o certo para o seu produto?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Freemium
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Versão gratuita para sempre com limitações de features ou uso.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Melhor para viralidade e market share.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>Ideal para produtos com baixo custo marginal.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <span>Risco de canibalizar a versão paga.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-xs font-bold text-gray-500 uppercase">Exemplos:</span>
                  <p className="text-sm text-white mt-1">Spotify, Dropbox, Slack</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Free Trial
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Acesso total a todas as features por tempo limitado (7-30 dias).
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span>Cria urgência de compra (FOMO).</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span>Melhor para produtos complexos/B2B.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <span>Barreira de entrada mais alta que Freemium.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-xs font-bold text-gray-500 uppercase">Exemplos:</span>
                  <p className="text-sm text-white mt-1">Shopify, Netflix, Adobe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Perfect Onboarding */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">O Onboarding Perfeito</h2>
            
            <div className="relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Setup Mínimo",
                    desc: "Peça apenas o essencial (Email + Senha). Deixe o resto para depois."
                  },
                  {
                    step: "2",
                    title: "Personalização",
                    desc: "Pergunte 'Qual seu objetivo?' para adaptar a experiência ao usuário."
                  },
                  {
                    step: "3",
                    title: "Checklist Interativo",
                    desc: "Guie o usuário com uma barra de progresso até o primeiro sucesso."
                  },
                  {
                    step: "4",
                    title: "Celebração",
                    desc: "Comemore pequenas vitórias (confetes, badges) para liberar dopamina."
                  }
                ].map((item, i) => (
                  <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-purple-500 border-4 border-black flex items-center justify-center z-10 shadow-xl">
                      <span className="text-[10px] font-bold text-white">{item.step}</span>
                    </div>
                    
                    <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Transforme seu Produto em Motor</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Pare de gastar fortunas em ads para vender um produto ruim. Construa um produto que se vende sozinho.
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
