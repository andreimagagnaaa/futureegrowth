import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Target, ShieldAlert, Sword, Crown, Eye, Network, Brain, Rocket, Fingerprint } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolFounderMode = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-orange-500/20 selection:text-orange-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                FOUNDER MODE
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                Pare de Gerenciar. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-500">
                  Comece a Fundar.
                </span>
              </h1>
              
              <blockquote className="border-l-2 border-orange-500/30 pl-4 mb-8 italic text-gray-400 text-sm">
                "Contrate bons gestores e deixe-os trabalhar... é o conselho mais desastroso já dado a fundadores."
                <footer className="text-orange-400 not-italic font-medium mt-1 text-xs">— Paul Graham</footer>
              </blockquote>

              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                O "Modo Gestor" está matando sua empresa. Descubra por que os maiores CEOs do mundo (Jobs, Chesky, Musk) ignoram o organograma e mergulham nos detalhes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-orange-600 text-white hover:bg-orange-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all w-full sm:w-auto">
                  ATIVAR FOUNDER MODE
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-orange-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: Hierarchy vs Network */}
                  <div className="relative z-10 w-full flex flex-col gap-8">
                    
                    {/* Manager Mode */}
                    <div className="flex items-center justify-between opacity-50 grayscale">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-500 mb-2" />
                        <div className="w-0.5 h-4 bg-gray-700" />
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-600" />
                          <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-600" />
                        </div>
                      </div>
                      <div className="text-right">
                        <h4 className="text-sm font-bold text-gray-400">Manager Mode</h4>
                        <p className="text-[10px] text-gray-600">Hierarquia Rígida. Telefone sem fio.</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    {/* Founder Mode */}
                    <div className="flex items-center justify-between">
                      <div className="relative w-32 h-24">
                        {/* Founder */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 border border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-20 flex items-center justify-center">
                          <Crown size={14} className="text-white" />
                        </div>
                        {/* Connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <line x1="50%" y1="10%" x2="20%" y2="80%" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="50%" y1="10%" x2="80%" y2="80%" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="50%" y1="10%" x2="50%" y2="50%" stroke="#f97316" strokeWidth="1" strokeOpacity="0.5" />
                        </svg>
                        {/* Nodes */}
                        <div className="absolute bottom-0 left-[20%] w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/50" />
                        <div className="absolute bottom-0 right-[20%] w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/50" />
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/50" />
                      </div>
                      <div className="text-right">
                        <h4 className="text-sm font-bold text-orange-400">Founder Mode</h4>
                        <p className="text-[10px] text-gray-400">Acesso Direto. Verdade Nua.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Great Gaslight */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Grande "Gaslighting"</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Por décadas, disseram aos fundadores que, ao crescer, eles deveriam "sair da frente" e deixar os "profissionais" gerenciarem. O resultado? Empresas lentas, produtos medíocres e morte por burocracia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">O Mito do Gestor</h3>
                </div>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2">❌ "Não microgerencie." (Tradução: Não saiba o que está acontecendo)</li>
                  <li className="flex gap-2">❌ "Fale apenas com seus reportes diretos."</li>
                  <li className="flex gap-2">❌ "Foque na estratégia, não na execução."</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-orange-400" size={24} />
                  <h3 className="text-xl font-bold text-white">A Realidade do Fundador</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-2">✅ Mergulhe nos detalhes até encontrar a verdade.</li>
                  <li className="flex gap-2">✅ Pule níveis hierárquicos (Skip-level).</li>
                  <li className="flex gap-2">✅ A estratégia É a execução.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Case Study: Jobs vs Sculley (NEW) */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent mix-blend-overlay" />
                  <div className="p-8 bg-white/5">
                    <div className="flex justify-between items-end h-64">
                      <div className="w-1/3 bg-gray-800/50 rounded-t-lg h-[40%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Sculley</div>
                      </div>
                      <div className="w-1/3 bg-orange-600 rounded-t-lg h-[90%] relative group shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-orange-400 font-bold">Jobs</div>
                      </div>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-400">Impacto na Inovação (Ilustrativo)</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold mb-4">
                  <Brain size={14} />
                  ESTUDO DE CASO
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Efeito Steve Jobs</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Quando Steve Jobs foi demitido da Apple, a empresa foi entregue a "gestores profissionais". Eles seguiram todas as regras do MBA. O resultado? A Apple quase faliu.
                </p>
                <p className="text-gray-400 text-lg mb-6">
                  Ao retornar, Jobs não agiu como um CEO tradicional. Ele realizava reuniões semanais de produto, revisava pixels e demitia quem não tinha paixão. Ele operava em <strong>Founder Mode</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Two Rules */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Como Operar em Founder Mode</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Não é sobre fazer o trabalho de todo mundo. É sobre ter a liberdade de intervir em qualquer parte do negócio quando necessário.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400"><Eye size={24} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">1. Reuniões "Skip-Level"</h4>
                      <p className="text-sm text-gray-400">
                        Não confie apenas no que seus VPs dizem. Fale diretamente com quem está codando, vendendo e atendendo. A verdade se dilui na subida.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400"><Sword size={24} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">2. Microgerenciamento Seletivo</h4>
                      <p className="text-sm text-gray-400">
                        Escolha batalhas críticas e vá fundo. Steve Jobs discutia a cor dos parafusos. Elon Musk revisa código. Detalhes fazem o produto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white">O Organograma Real</h3>
                  </div>
                  
                  <div className="relative h-64 w-full flex items-center justify-center">
                    {/* Central Node */}
                    <div className="absolute z-20 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <span className="font-bold text-white text-xs">CEO</span>
                    </div>
                    
                    {/* Orbiting Nodes */}
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="absolute w-full h-full animate-[spin_10s_linear_infinite]" style={{ animationDelay: `-${i * 1.5}s` }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center">
                          <span className="text-[8px] text-gray-400">VP</span>
                        </div>
                      </div>
                    ))}

                    {/* Direct Lines (Founder Mode) */}
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="absolute w-full h-full rotate-45">
                         <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-orange-400/50" />
                         <svg className="absolute inset-0 w-full h-full">
                           <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                         </svg>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    O fundador é o "nó" central conectado a tudo, não apenas ao topo da pirâmide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Hiring Animals (NEW) */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Contratando para a Guerra</h2>
                <p className="text-gray-400 text-lg">
                  Em Founder Mode, você não contrata currículos. Você contrata obsessão.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <Rocket className="text-orange-400 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Bias for Action</h3>
                  <p className="text-sm text-gray-400">
                    Prefira quem pede desculpas em vez de permissão. A velocidade é a única vantagem competitiva duradoura.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <Fingerprint className="text-orange-400 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Ownership Extremo</h3>
                  <p className="text-sm text-gray-400">
                    Pessoas que agem como donos não dizem "isso não é minha função". Elas resolvem o problema.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <Brain className="text-orange-400 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">Primeiros Princípios</h3>
                  <p className="text-sm text-gray-400">
                    Ignore o "sempre foi feito assim". Contrate quem desconstrói problemas até a raiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Signs You Are in Manager Mode */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Sinais de Alerta</h2>
              <p className="text-gray-400 text-lg">
                Você caiu na armadilha do "Modo Gestor" se...
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                <ShieldAlert className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Você se sente isolado</h3>
                <p className="text-sm text-gray-400">
                  Você só recebe boas notícias. Os problemas reais são escondidos de você até que seja tarde demais.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                <Network className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Burocracia &gt; Produto</h3>
                <p className="text-sm text-gray-400">
                  Há mais reuniões sobre "como fazer" do que pessoas realmente "fazendo". O processo virou o produto.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                <Target className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Consenso Paralisante</h3>
                <p className="text-sm text-gray-400">
                  Ninguém toma decisões difíceis sem fazer um comitê. A velocidade de execução caiu drasticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The Sample of One (NEW) */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 rounded-2xl p-8 md:p-12 text-center">
              <Crown className="text-orange-400 mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Amostra de Um</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Gestores confiam em médias e pesquisas de mercado. Fundadores confiam em sua intuição. 
                Se você ama o produto, há uma boa chance de que outros também amem. 
                Não deixe os dados matarem a magia.
              </p>
              <div className="inline-block px-6 py-3 bg-orange-500/10 rounded-lg border border-orange-500/30 text-orange-300 font-mono text-sm">
                "Se eu tivesse perguntado às pessoas o que elas queriam, teriam dito cavalos mais rápidos." — Henry Ford
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA Final */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-orange-900/10" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              Retome o Controle da <span className="text-orange-400">Sua Empresa</span>.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Seus instintos de fundador não estão errados. O manual de gestão é que está.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl transition-all">
              VOLTAR AO MODO FUNDADOR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
