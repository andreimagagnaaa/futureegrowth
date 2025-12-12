import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Infinity, Layers, Database, BookOpen, Users, Zap, Lock, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolInfoSaaS = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                INFO + SAAS
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Estratégia Definitiva do <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-cyan-500">
                  LTV Infinito.
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Infoprodutos geram caixa rápido, mas morrem no churn. SaaS gera valor a longo prazo, mas quebra no CAC. Descubra por que unir os dois é a estratégia definitiva de crescimento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all w-full sm:w-auto">
                  ENTENDER O MODELO
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-cyan-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Flywheel */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-center gap-4">
                    
                    <div className="relative w-48 h-48">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
                      
                      {/* Info Node */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-2 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <BookOpen size={20} className="text-cyan-400" />
                      </div>
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-cyan-400">EDUCAÇÃO</div>

                      {/* SaaS Node */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#050505] p-2 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <Database size={20} className="text-cyan-400" />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-cyan-400">FERRAMENTA</div>

                      {/* Community Node */}
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-2 rounded-lg border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <Users size={20} className="text-cyan-400" />
                      </div>

                      {/* Arrows */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RefreshCw size={40} className="text-white/10 animate-spin" style={{ animationDuration: '3s' }} />
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-xs text-gray-400">O Flywheel Perfeito</p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Problem */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Dilema dos Modelos Isolados</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sozinhos, ambos os modelos têm falhas fatais que limitam o crescimento. Juntos, eles cobrem as fraquezas um do outro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Apenas Infoproduto</h3>
                </div>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>LTV Baixo:</strong> O cliente compra o curso, assiste e vai embora. Você precisa vender de novo todo mês.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>Pirataria:</strong> Seu conteúdo é facilmente copiado e distribuído.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>Fadiga de Lançamento:</strong> Viver de lançamentos é estressante e imprevisível.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Apenas SaaS</h3>
                </div>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>CAC Altíssimo:</strong> Convencer alguém a usar um novo software é difícil e caro.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>Churn por Complexidade:</strong> O cliente assina, não sabe usar e cancela.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 mt-0.5">❌</span>
                    <span><strong>Comoditização:</strong> Funcionalidades são copiadas rapidamente por concorrentes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution: Synergy */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4">
                  <Infinity size={14} />
                  SINERGIA TOTAL
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Equação de Valor</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Quando você combina educação com software, você cria um ecossistema onde o cliente entra pelo conteúdo e fica pela utilidade.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><Zap size={24} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Educação como Marketing (CAC Zero)</h4>
                      <p className="text-sm text-gray-400">
                        Ensine a metodologia gratuitamente ou a baixo custo. O software se torna a maneira mais fácil de aplicar o que foi ensinado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><Lock size={24} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Software como Retenção (Lock-in)</h4>
                      <p className="text-sm text-gray-400">
                        Conteúdo se consome, ferramenta se usa. É difícil cancelar algo que contém seus dados e fluxos de trabalho diários.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-gray-400">Venda do Curso</span>
                      <span className="text-green-400 font-mono">+ $997 (One-time)</span>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                      <span className="text-cyan-300">Assinatura da Ferramenta</span>
                      <span className="text-cyan-300 font-mono">+ $97/mês (Recorrente)</span>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-gray-400">Certificação Avançada</span>
                      <span className="text-green-400 font-mono">+ $2,997 (Upsell)</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-6">
                    O cliente paga para aprender, paga para usar e paga para se especializar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Case Studies */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Quem está fazendo isso?</h2>
                <p className="text-gray-400 text-lg">
                  Os maiores players do mercado digital já entenderam o jogo.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="h-10 w-10 bg-orange-500 rounded-lg mb-4 flex items-center justify-center font-bold text-black">H</div>
                  <h3 className="text-lg font-bold text-white mb-2">HubSpot</h3>
                  <p className="text-sm text-gray-400">
                    Inventaram o "Inbound Marketing". Criaram cursos gratuitos (HubSpot Academy) para ensinar a metodologia, e vendem o software para executá-la.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="h-10 w-10 bg-blue-600 rounded-lg mb-4 flex items-center justify-center font-bold text-white">C</div>
                  <h3 className="text-lg font-bold text-white mb-2">ClickFunnels</h3>
                  <p className="text-sm text-gray-400">
                    Russell Brunson vende livros e cursos sobre "Funis de Venda". O ClickFunnels é simplesmente a ferramenta para construir esses funis.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="h-10 w-10 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center font-bold text-black">S</div>
                  <h3 className="text-lg font-bold text-white mb-2">Skool</h3>
                  <p className="text-sm text-gray-400">
                    Sam Ovens migrou de vender cursos de $2k para uma plataforma de comunidade de $99/mês. O produto É a comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The Trojan Horse Strategy (NEW) */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">1</div>
                      <div>
                        <h4 className="text-white font-bold">Curso Gratuito</h4>
                        <p className="text-xs text-gray-400">"Como organizar suas finanças"</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90" />
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">2</div>
                      <div>
                        <h4 className="text-white font-bold">Planilha "Mágica"</h4>
                        <p className="text-xs text-gray-400">Entregue dentro do curso</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90" />
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-cyan-500/20 rounded-lg border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center font-bold text-black">3</div>
                      <div>
                        <h4 className="text-white font-bold">Upgrade para App</h4>
                        <p className="text-xs text-gray-300">"Importe seus dados da planilha"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4">
                  <Users size={14} />
                  ESTRATÉGIA CAVALO DE TROIA
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Venda Sem Vender</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Ninguém acorda querendo comprar um software novo. Mas todos querem resolver um problema.
                </p>
                <p className="text-gray-400 text-lg mb-6">
                  Ao vender a <strong>educação</strong> primeiro, você estabelece autoridade e confiança. O software entra não como uma "compra", mas como a <strong>ferramenta necessária</strong> para implementar o que eles acabaram de aprender.
                </p>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2">✅ O curso cria a demanda pelo software.</li>
                  <li className="flex gap-2">✅ O software facilita a promessa do curso.</li>
                  <li className="flex gap-2">✅ O churn cai porque eles sabem EXATAMENTE como usar.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Implementation Steps */}
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <Layers className="text-cyan-400 mx-auto mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">Como Implementar</h2>
              </div>
              
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/50">1</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Identifique o "Processo Manual"</h4>
                    <p className="text-gray-400 text-sm">O que seus alunos fazem manualmente em planilhas ou docs? Isso é uma oportunidade de SaaS.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/50">2</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Crie "Micro-SaaS" como Bônus</h4>
                    <p className="text-gray-400 text-sm">Não comece com uma plataforma gigante. Crie uma ferramenta simples (calculadora, gerador) e dê como bônus do curso.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/50">3</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Evolua para Assinatura</h4>
                    <p className="text-gray-400 text-sm">Quando a ferramenta se tornar indispensável, separe-a do curso e cobre uma mensalidade recorrente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The Churn Killer (NEW) */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Fim do Churn</h2>
              <p className="text-gray-400 text-lg">
                Por que clientes cancelam? Porque param de ver valor. Como resolver?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <RefreshCw className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Atualização Constante</h3>
                <p className="text-sm text-gray-400">
                  Lance novos módulos do curso que ensinam novas features do software. O aprendizado nunca para, o uso também não.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <Database className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Data Lock-in</h3>
                <p className="text-sm text-gray-400">
                  Quanto mais eles usam, mais dados históricos eles têm. Sair significa perder o histórico do negócio deles.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <Users className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Comunidade Ativa</h3>
                <p className="text-sm text-gray-400">
                  Crie um espaço onde usuários trocam templates e estratégias. Eles ficam pelos amigos, não só pela ferramenta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA Final */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-cyan-900/10" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              Pare de Vender Apenas Informação. <br />
              <span className="text-cyan-400">Comece a Vender Resultados.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Transforme seu conhecimento em software e construa um ativo que vale milhões, não apenas um lançamento que paga as contas do mês.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl transition-all">
              CONSTRUIR MEU ECOSSISTEMA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
