import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Search, BarChart3, AlertTriangle, CheckCircle2, XCircle, Megaphone, Globe, Handshake, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolDemandB2B = () => {
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
                DEMANDA B2B 2.0
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                Pare de Caçar Leads. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                  Comece a Criar Demanda.
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                O modelo de "Lead Gen" tradicional está quebrado. Descubra como os líderes de mercado estão construindo pipelines de receita previsível através da <strong>Geração de Demanda</strong> e <strong>Canais B2B Estratégicos</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all w-full sm:w-auto">
                  ACESSAR O PLAYBOOK
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500">
                  Leitura de 7 minutos.
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
                  
                  <div className="relative z-10 w-full max-w-sm space-y-4">
                    <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-red-500/10 text-red-400"><XCircle size={16} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">Lead Gen (Velho)</div>
                          <div className="text-[10px] text-gray-500">Captura → Spam → Venda</div>
                        </div>
                      </div>
                      <span className="text-xs text-red-400 font-mono">1% Conv.</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90" size={20} />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-primary/20 text-primary"><CheckCircle2 size={16} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">Demand Gen (Novo)</div>
                          <div className="text-[10px] text-gray-500">Educação → Confiança → Compra</div>
                        </div>
                      </div>
                      <span className="text-xs text-primary font-mono">15% Conv.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Problem: The "Lead Gen" Trap */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">O Colapso do "Lead Generation"</h2>
            <p className="text-gray-400 text-lg">
              Comprar listas, fazer cold calls massivos e enviar spam no LinkedIn não funciona mais como em 2015. O comprador B2B mudou.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <AlertTriangle size={24} />,
                title: "Cegueira de Banner",
                desc: "Seus prospects são bombardeados por 3.000+ mensagens comerciais por dia. Eles aprenderam a ignorar o ruído."
              },
              {
                icon: <BarChart3 size={24} />,
                title: "CAC Insustentável",
                desc: "O custo por lead aumentou, mas a qualidade caiu. Você precisa de mais leads para fechar a mesma quantidade de vendas."
              },
              {
                icon: <Users size={24} />,
                title: "Dark Social",
                desc: "As decisões de compra acontecem onde você não consegue rastrear: comunidades, podcasts, boca a boca e DMs."
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

      {/* 2.5 The Hierarchy of Growth */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">A Ordem Lógica do Crescimento</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A maioria das empresas falha porque tenta escalar (anúncios) antes de validar (oferta) ou construir confiança (audiência).
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:-translate-x-1/2" />

              <div className="space-y-12 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-white mb-2">1. Product-Market Fit & Oferta</h3>
                    <p className="text-gray-400 text-sm">
                      Antes de gritar para o mundo, garanta que você tem algo que o mercado desesperadamente quer. Sem isso, marketing é apenas amplificação de um problema.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center order-1 md:order-2 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#020202] border-2 border-primary flex items-center justify-center text-primary font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3 hidden md:block" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 order-3 md:order-1 hidden md:block" />
                  <div className="md:w-12 flex justify-center order-1 md:order-2 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#020202] border-2 border-primary flex items-center justify-center text-primary font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                    <h3 className="text-xl font-bold text-white mb-2">2. Construção de Audiência (Orgânico)</h3>
                    <p className="text-gray-400 text-sm">
                      Crie conteúdo proprietário. Construa uma lista de emails. Engaje no LinkedIn. A audiência é o ativo mais valioso porque ela confia em você antes de você pedir dinheiro.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-white mb-2">3. Tráfego Pago (Escala)</h3>
                    <p className="text-gray-400 text-sm">
                      Só agora entra o dinheiro. Use anúncios para distribuir o conteúdo que já funcionou organicamente e para retargeting. O tráfego pago é gasolina, não o motor.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center order-1 md:order-2 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#020202] border-2 border-gray-700 flex items-center justify-center text-gray-500 font-bold text-xl">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 md:order-3 hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution: Demand Generation Pillars */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                A NOVA ESTRATÉGIA
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Os 4 Pilares da Geração de Demanda</h2>
              <p className="text-gray-400">
                Ao invés de forçar a venda, crie um ambiente onde comprar de você seja a única conclusão lógica.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Megaphone size={24} />,
                  title: "1. Conteúdo que Educa, Não que Vende",
                  desc: "Pare de falar sobre o quão bom é o seu produto. Comece a falar sobre os problemas que seu cliente enfrenta e como resolvê-los. Torne-se a autoridade no assunto."
                },
                {
                  icon: <Globe size={24} />,
                  title: "2. Distribuição Nativa (Zero-Click Content)",
                  desc: "Entregue valor direto no feed (LinkedIn, Instagram, YouTube). Não force o clique para o seu blog. Construa confiança onde o cliente já está."
                },
                {
                  icon: <Handshake size={24} />,
                  title: "3. Relacionamento e Comunidade",
                  desc: "Participe das conversas. Esteja presente nos eventos do setor. O B2B é feito de pessoas comprando de pessoas (H2H)."
                },
                {
                  icon: <Target size={24} />,
                  title: "4. Captura de Demanda Existente",
                  desc: "Quando o cliente estiver pronto para comprar (High Intent), garanta que você seja fácil de encontrar e que o processo de compra seja sem atrito."
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

      {/* 4. Channels Deep Dive */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Canais de Tração B2B</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0077b5]/20 to-transparent border border-[#0077b5]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Users size={100} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn & Social Selling</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#0077b5] mt-1" /> <span>Perfil Pessoal como Canal de Mídia</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#0077b5] mt-1" /> <span>Conteúdo Autoral vs. Corporativo</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#0077b5] mt-1" /> <span>Comentários Estratégicos em Posts de Decisores</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Mail size={100} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">Cold Email 2.0 (Outbound)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-purple-500 mt-1" /> <span>Hiper-personalização (Icebreakers)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-purple-500 mt-1" /> <span>Foco em Relevância, não em Volume</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-purple-500 mt-1" /> <span>Sequências Mistas (Email + LinkedIn + Fone)</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Search size={100} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">SEO & Intent Data</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 mt-1" /> <span>Captura de demanda fundo de funil</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 mt-1" /> <span>Páginas de Comparação ("Alternative to X")</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-green-500 mt-1" /> <span>Monitoramento de intenção de compra</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Handshake size={100} /></div>
                <h3 className="text-2xl font-bold text-white mb-4">Parcerias & Ecossistema</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-orange-500 mt-1" /> <span>Co-marketing com empresas não-concorrentes</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-orange-500 mt-1" /> <span>Integrações de produto</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-orange-500 mt-1" /> <span>Programas de Indicação</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Paid Traffic Strategy */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-4">
                  O ACELERADOR
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Quando Ligar o Tráfego Pago?</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Muitas empresas queimam caixa tentando validar uma oferta ruim com anúncios caros. O tráfego pago deve ser usado apenas em dois momentos específicos:
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Megaphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Amplificação de Conteúdo</h4>
                      <p className="text-sm text-gray-400">Pegue seus posts orgânicos com melhor performance e impulsione-os para o seu ICP. Garanta que sua mensagem chegue a quem importa.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Retargeting de Alta Intenção</h4>
                      <p className="text-sm text-gray-400">Mostre estudos de caso e provas sociais apenas para quem visitou sua página de preços ou agendamento. Converta quem já demonstrou interesse.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl opacity-30" />
                <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="text-sm font-mono text-gray-500">CAMPAIGN_STATUS</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">ACTIVE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Budget Diário</span>
                      <span className="text-white font-mono">R$ 500,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">ROAS</span>
                      <span className="text-green-400 font-mono font-bold">4.2x</span>
                    </div>
                    <div className="h-px bg-white/5 my-4" />
                    <div className="text-xs text-gray-500 text-center">
                      *Resultado obtido após 3 meses de validação orgânica.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para Construir sua Máquina de Demanda?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Não deixe seu pipeline depender da sorte. Implemente um sistema previsível de atração e conversão de clientes B2B.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              FALAR COM UM ESPECIALISTA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
