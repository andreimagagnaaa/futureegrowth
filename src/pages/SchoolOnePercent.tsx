import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Layers, Activity, Repeat, Zap } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolOnePercent = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-sky-500/20 selection:text-sky-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                HÁBITOS ATÔMICOS & KAIZEN
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Regra do <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-sky-500">
                  1% Melhor Todo Dia
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Não subestime o poder das pequenas melhorias. O sucesso da noite para o dia é um mito. O verdadeiro crescimento é o resultado de juros compostos aplicados aos seus hábitos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-sky-600 text-white hover:bg-sky-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all w-full sm:w-auto">
                  ENTENDER A MATEMÁTICA
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-sky-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Exponential Curve */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-64 h-48 border-l border-b border-white/20">
                      {/* 1% Better Curve */}
                      <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 Q50,90 100,0" fill="none" stroke="#38bdf8" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      </svg>
                      {/* 1% Worse Curve */}
                      <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q50,95 100,98" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                      </svg>
                      
                      <div className="absolute -top-8 right-0 text-sky-400 font-bold text-xl">37.78x</div>
                      <div className="absolute bottom-0 right-0 text-red-400/50 font-bold text-xs translate-y-4">0.03x</div>
                    </div>
                    <div className="mt-8 text-center">
                      <div className="text-sm text-gray-400">1.01<sup className="text-[10px]">365</sup> = <span className="text-sky-400 font-bold">37.78</span></div>
                      <div className="text-xs text-gray-600 mt-1">Pequenas melhorias, resultados massivos.</div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. Intro */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Agregação de Ganhos Marginais</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Conceito popularizado por Dave Brailsford (British Cycling). Se você melhorar 1% em cada área relacionada ao seu objetivo, o efeito cumulativo será gigantesco.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Core Concepts Grid */}
        <section className="py-12 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* 1. Systems > Goals */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                  <Layers className="text-sky-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sistemas {'>'} Metas</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Vencedores e perdedores têm as mesmas metas. O que diferencia é o sistema.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-sky-400">Marketing:</strong> Não foque em "vender 1 milhão". Foque em "publicar 1 conteúdo de valor todo dia" e "otimizar 1 anúncio toda semana".
                  </p>
                </div>
              </div>

              {/* 2. Identity Based Habits */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                  <Target className="text-sky-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Identidade</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A mudança real acontece quando você muda quem você <em>é</em>, não apenas o que você faz.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-sky-400">Marketing:</strong> Pare de dizer "estou tentando vender". Diga "nós somos uma empresa obcecada pelo sucesso do cliente".
                  </p>
                </div>
              </div>

              {/* 3. The Plateau */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                  <Activity className="text-sky-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">O Platô do Potencial Latente</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Resultados demoram a aparecer. O "Vale da Desilusão" é onde a maioria desiste.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-sky-400">Marketing:</strong> SEO, Branding e Conteúdo levam tempo. Se você não vê resultados em 3 meses, não pare. Você está acumulando potencial.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. The 4 Laws of Behavior Change */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white font-serif">As 4 Leis da Mudança de Comportamento</h2>
              
              <div className="space-y-6">
                {/* Law 1 */}
                <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center text-sky-400 font-bold text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Torne-o Óbvio (O Estímulo)</h3>
                    <p className="text-gray-400 mb-3">
                      O design do ambiente vence a força de vontade. Se você quer criar conteúdo, deixe a câmera montada na mesa.
                    </p>
                    <p className="text-sm text-sky-400 font-mono">Inversão: Para quebrar um hábito ruim, torne-o invisível.</p>
                  </div>
                </div>

                {/* Law 2 */}
                <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center text-sky-400 font-bold text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Torne-o Atraente (O Desejo)</h3>
                    <p className="text-gray-400 mb-3">
                      Use o "Empacotamento de Tentações". Só ouça seu podcast favorito enquanto faz a tarefa chata de CRM.
                    </p>
                    <p className="text-sm text-sky-400 font-mono">Inversão: Para quebrar um hábito ruim, torne-o desinteressante.</p>
                  </div>
                </div>

                {/* Law 3 */}
                <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center text-sky-400 font-bold text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Torne-o Fácil (A Resposta)</h3>
                    <p className="text-gray-400 mb-3">
                      A Regra dos 2 Minutos: "Ler um livro" vira "Ler uma página". Reduza a fricção inicial a zero.
                    </p>
                    <p className="text-sm text-sky-400 font-mono">Inversão: Para quebrar um hábito ruim, torne-o difícil (aumente a fricção).</p>
                  </div>
                </div>

                {/* Law 4 */}
                <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center text-sky-400 font-bold text-xl shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Torne-o Satisfatório (A Recompensa)</h3>
                    <p className="text-gray-400 mb-3">
                      O que é recompensado é repetido. Use um rastreador de hábitos (Habit Tracker) para visualizar seu progresso.
                    </p>
                    <p className="text-sm text-sky-400 font-mono">Inversão: Para quebrar um hábito ruim, torne-o insatisfatório (punição imediata).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Advanced Techniques */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white font-serif">Técnicas Avançadas</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Habit Stacking */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-black border border-white/10 rounded-xl p-8 h-full">
                    <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6">
                      <Repeat className="text-sky-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Empilhamento de Hábitos</h3>
                    <p className="text-gray-400 mb-6">
                      A maneira mais fácil de criar um novo hábito é conectá-lo a um hábito existente.
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 font-mono text-sm text-sky-300">
                      "Depois de [HÁBITO ATUAL], eu vou [NOVO HÁBITO]."
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500">Ex: "Depois de servir meu café, vou meditar por 1 minuto."</p>
                      <p className="text-sm text-gray-500">Ex: "Depois de sentar na minha mesa, vou escrever minha prioridade do dia."</p>
                    </div>
                  </div>
                </div>

                {/* Goldilocks Rule */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-black border border-white/10 rounded-xl p-8 h-full">
                    <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-6">
                      <Zap className="text-sky-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">A Regra de Cachinhos Dourados</h3>
                    <p className="text-gray-400 mb-6">
                      O cérebro humano ama desafios, mas apenas se estiverem na zona ideal de dificuldade.
                    </p>
                    <div className="relative h-32 w-full border-b border-l border-white/20 flex items-end">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-4">
                        <div className="w-1/3 h-12 bg-white/5 mx-1 rounded-t flex items-center justify-center text-[10px] text-gray-500">Tédio</div>
                        <div className="w-1/3 h-24 bg-sky-500/20 border-t border-x border-sky-500/50 mx-1 rounded-t flex items-center justify-center text-xs font-bold text-sky-400">FLOW</div>
                        <div className="w-1/3 h-12 bg-white/5 mx-1 rounded-t flex items-center justify-center text-[10px] text-gray-500">Ansiedade</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Mantenha-se no limite da sua habilidade atual. Nem muito fácil, nem muito difícil. Apenas certo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Goals vs Systems Comparison */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">Metas vs. Sistemas</h2>
                <p className="text-gray-400">Por que focar no processo é superior a focar no resultado.</p>
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-2 border-b border-white/10 bg-white/5">
                  <div className="p-6 text-center font-bold text-gray-400">METAS (O Quê)</div>
                  <div className="p-6 text-center font-bold text-sky-400">SISTEMAS (O Como)</div>
                </div>
                
                <div className="divide-y divide-white/5">
                  <div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
                    <div className="p-6 text-gray-400 text-sm">"Quero perder 10kg"</div>
                    <div className="p-6 text-white text-sm font-medium">"Vou comer vegetais em todas as refeições"</div>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
                    <div className="p-6 text-gray-400 text-sm">"Quero escrever um livro"</div>
                    <div className="p-6 text-white text-sm font-medium">"Vou escrever 200 palavras todo dia às 8h"</div>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
                    <div className="p-6 text-gray-400 text-sm">"Quero ganhar a maratona"</div>
                    <div className="p-6 text-white text-sm font-medium">"Vou seguir meu plano de treino religiosamente"</div>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
                    <div className="p-6 text-gray-400 text-sm">Foco no futuro (felicidade adiada)</div>
                    <div className="p-6 text-white text-sm font-medium">Foco no presente (felicidade no processo)</div>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
                    <div className="p-6 text-gray-400 text-sm">Efeito ioiô (para após atingir)</div>
                    <div className="p-6 text-white text-sm font-medium">Progresso contínuo (jogo infinito)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Final */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-sky-900/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Comece Pequeno. Pense Grande.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Você não precisa revolucionar sua empresa hoje. Você só precisa ser 1% melhor do que ontem.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold rounded-full">
              INICIAR MEU HÁBITO DE CRESCIMENTO
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
