import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Box, Cpu, Database, Briefcase, Stethoscope, Scale, Zap, Globe } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolAIVertical = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                VERTICAL AI
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Era da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500">
                  Inteligência Especializada
                </span>
              </h1>
              
              <blockquote className="border-l-2 border-emerald-500/30 pl-4 mb-8 italic text-gray-400 text-sm">
                "O futuro da IA não é apenas sobre modelos maiores, mas sobre modelos que conhecem profundamente o seu negócio."
                <footer className="text-emerald-400 not-italic font-medium mt-1 text-xs">— Futuree Insights</footer>
              </blockquote>

              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Enquanto o mundo brinca com o ChatGPT (Horizontal), os verdadeiros impérios estão sendo construídos com IAs que dominam verticais específicas (Vertical).
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all w-full sm:w-auto">
                  EXPLORAR O FUTURO
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-emerald-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: Horizontal vs Vertical */}
                  <div className="relative z-10 w-full flex flex-col gap-8">
                    
                    {/* Horizontal */}
                    <div className="relative">
                      <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
                        <Globe className="text-gray-500 mr-3" size={20} />
                        <span className="text-gray-400 text-sm">Horizontal AI (Generalista)</span>
                        <div className="ml-auto w-24 h-1.5 bg-gray-700 rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600">
                        Largo, mas raso
                      </div>
                    </div>

                    {/* Vertical */}
                    <div className="flex justify-center gap-4">
                      <div className="w-16 h-32 bg-emerald-500/10 rounded-lg border border-emerald-500/50 flex flex-col items-center justify-end p-2 relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-emerald-500/20 to-transparent" />
                        <Scale className="text-emerald-400 mb-2 relative z-10" size={20} />
                        <span className="text-[10px] text-emerald-300 font-bold relative z-10">Legal</span>
                      </div>
                      <div className="w-16 h-32 bg-emerald-500/10 rounded-lg border border-emerald-500/50 flex flex-col items-center justify-end p-2 relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-emerald-500/20 to-transparent" />
                        <Stethoscope className="text-emerald-400 mb-2 relative z-10" size={20} />
                        <span className="text-[10px] text-emerald-300 font-bold relative z-10">Saúde</span>
                      </div>
                      <div className="w-16 h-32 bg-emerald-500/10 rounded-lg border border-emerald-500/50 flex flex-col items-center justify-end p-2 relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-emerald-500/20 to-transparent" />
                        <Briefcase className="text-emerald-400 mb-2 relative z-10" size={20} />
                        <span className="text-[10px] text-emerald-300 font-bold relative z-10">Finanças</span>
                      </div>
                    </div>
                    <div className="text-center text-[10px] text-emerald-500 font-medium">
                      Estreito, mas profundo (Vertical AI)
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. Concept Definition */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Que é IA Vertical?</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A IA Horizontal (como o ChatGPT) sabe "um pouco de tudo". A IA Vertical sabe "tudo de uma coisa". Ela é treinada em dados proprietários, entende fluxos de trabalho específicos e resolve problemas profundos de uma indústria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">IA Horizontal</h3>
                </div>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2">❌ "Escreva um e-mail de vendas." (Genérico)</li>
                  <li className="flex gap-2">❌ Treinada na internet pública.</li>
                  <li className="flex gap-2">❌ Alucina com fatos técnicos específicos.</li>
                  <li className="flex gap-2">❌ Interface de Chat (Conversa).</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="text-emerald-400" size={24} />
                  <h3 className="text-xl font-bold text-white">IA Vertical</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-2">✅ "Analise este contrato de M&A sob a lei brasileira."</li>
                  <li className="flex gap-2">✅ Treinada em dados privados e curados.</li>
                  <li className="flex gap-2">✅ Alta precisão e conformidade.</li>
                  <li className="flex gap-2">✅ Interface de Workflow (Ação).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why It Matters (The Moat) */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Fosso Defensivo (The Moat)</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Se você usa apenas o ChatGPT, você não tem vantagem competitiva. Qualquer um pode digitar o mesmo prompt.
                </p>
                <p className="text-gray-400 text-lg mb-8">
                  A vantagem real está nos <strong>Dados Proprietários</strong>. Uma IA Vertical se torna mais inteligente quanto mais você a usa, criando um fosso que concorrentes não podem cruzar.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded text-emerald-400"><Database size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white">Dados Únicos</h4>
                      <p className="text-sm text-gray-500">Seus e-mails passados, seus contratos, suas chamadas de vendas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded text-emerald-400"><Cpu size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white">Fine-Tuning</h4>
                      <p className="text-sm text-gray-500">Ajustar o modelo para falar com a sua voz e seguir suas regras.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded text-emerald-400"><Box size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white">Integração Profunda</h4>
                      <p className="text-sm text-gray-500">A IA não é um chat, ela vive dentro do seu CRM ou ERP.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white">A Camada de Valor</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-4 bg-gray-800 rounded text-center text-gray-500 text-sm">
                      Hardware (Nvidia) - Commodity
                    </div>
                    <div className="p-4 bg-gray-700 rounded text-center text-gray-400 text-sm">
                      Cloud (AWS/Azure) - Commodity
                    </div>
                    <div className="p-4 bg-gray-600 rounded text-center text-gray-300 text-sm">
                      Modelos Fundacionais (GPT-4/Claude) - Commodity
                    </div>
                    <div className="p-6 bg-emerald-600 rounded text-center text-white font-bold shadow-lg transform scale-105 border border-emerald-400">
                      Aplicação Vertical (Sua Empresa)
                      <div className="text-xs font-normal opacity-80 mt-1">Onde o lucro real vive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Examples */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Exemplos Reais</h2>
              <p className="text-gray-400 text-lg">
                Empresas que já valem bilhões focando em um único problema vertical.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <Scale className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Harvey AI</h3>
                <p className="text-xs text-emerald-400 uppercase font-bold mb-3">Jurídico</p>
                <p className="text-sm text-gray-400">
                  Parceira da OpenAI para escritórios de advocacia. Analisa milhares de precedentes, redige contratos complexos e encontra brechas legais.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <Stethoscope className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Nabla</h3>
                <p className="text-xs text-emerald-400 uppercase font-bold mb-3">Saúde</p>
                <p className="text-sm text-gray-400">
                  Copiloto para médicos. Ouve a consulta, transcreve, extrai dados clínicos e gera o prontuário automaticamente no padrão médico.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <Briefcase className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Leyline</h3>
                <p className="text-xs text-emerald-400 uppercase font-bold mb-3">Construção</p>
                <p className="text-sm text-gray-400">
                  Analisa códigos de zoneamento e plantas de construção para aprovar projetos imobiliários 10x mais rápido que humanos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Build vs Buy */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Construir ou Comprar?</h2>
              <p className="text-gray-400 text-lg">
                A grande dúvida dos executivos. A resposta depende do quão central a IA é para o seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-red-400">🛒</span> Comprar (SaaS)
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Use ferramentas prontas quando o problema for comum a todas as empresas (ex: CRM, Contabilidade, RH).
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">✅ Implementação imediata.</li>
                  <li className="flex gap-2">✅ Custo inicial baixo.</li>
                  <li className="flex gap-2">❌ Sem vantagem competitiva (todos têm).</li>
                  <li className="flex gap-2">❌ Dados ficam com o fornecedor.</li>
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-emerald-400">🏗️</span> Construir (Proprietário)
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Desenvolva internamente quando a IA tocar no seu "Core Business" ou na sua "Receita Secreta".
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">✅ Vantagem injusta e defensável.</li>
                  <li className="flex gap-2">✅ Controle total dos dados.</li>
                  <li className="flex gap-2">❌ Custo inicial alto.</li>
                  <li className="flex gap-2">❌ Requer time técnico ou parceiro.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The Data Flywheel */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border-4 border-emerald-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="text-emerald-400 mx-auto mb-2" size={32} />
                      <span className="font-bold text-white">Melhor IA</span>
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020202] px-2 text-emerald-400 font-bold text-sm">Mais Usuários</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#020202] px-2 text-emerald-400 font-bold text-sm">Mais Dados</div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020202] px-2 text-emerald-400 font-bold text-sm rotate-[-90deg]">Melhor Produto</div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#020202] px-2 text-emerald-400 font-bold text-sm rotate-[90deg]">Mais Valor</div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Volante de Dados (Flywheel)</h2>
                <p className="text-gray-400 text-lg mb-6">
                  A mágica da IA Vertical é que ela melhora com o uso. É um ciclo virtuoso que torna impossível para um concorrente novo alcançar você.
                </p>
                <ol className="space-y-4 list-decimal list-inside text-gray-300">
                  <li className="pl-2"><strong className="text-white">Melhor Produto:</strong> Sua IA resolve um problema específico muito bem.</li>
                  <li className="pl-2"><strong className="text-white">Mais Usuários:</strong> Clientes amam e usam a ferramenta diariamente.</li>
                  <li className="pl-2"><strong className="text-white">Mais Dados:</strong> O uso gera novos dados de treinamento (edge cases).</li>
                  <li className="pl-2"><strong className="text-white">Melhor IA:</strong> O modelo é re-treinado e fica mais inteligente.</li>
                  <li className="pl-2"><strong className="text-white">Repete:</strong> O produto fica ainda melhor, atraindo mais usuários...</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Final */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              Sua empresa será <span className="text-emerald-400">Vertical</span> ou Obsoleta?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Não tente competir com o ChatGPT. Construa a IA que só a sua empresa poderia ter.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl transition-all">
              CONSTRUIR MINHA IA VERTICAL
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
