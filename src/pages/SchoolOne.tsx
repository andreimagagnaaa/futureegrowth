import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Bot, Megaphone, Globe, Cpu, Layers, DollarSign, Brain } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolOne = () => {
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
                ONE-PERSON BUSINESS
              </div>

              <h1 className="text-3xl font-bold tracking-tight mb-6 leading-tight text-white">
                A Ascensão do <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                  Empreendedor Solo
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Escritórios gigantes e equipes inchadas são relíquias do passado. A nova economia pertence a quem escala com código e mídia, não com pessoas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all w-full sm:w-auto">
                  DESCOBRIR O MODELO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500">
                  Leitura de 6 minutos.
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
                    {/* Old Way */}
                    <div className="flex items-center justify-between p-4 rounded bg-white/5 border border-white/5 opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-gray-700/50 text-gray-400"><Users size={18} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">Empresa Tradicional</div>
                          <div className="text-[10px] text-gray-500">Alto Custo Fixo • Gestão Complexa</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">Linear</span>
                    </div>
                    
                    {/* New Way */}
                    <div className="flex items-center justify-between p-4 rounded bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-105">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-primary/20 text-primary"><Cpu size={18} /></div>
                        <div>
                          <div className="text-xs font-bold text-white">One-Person Business</div>
                          <div className="text-[10px] text-gray-500">Margem Alta • Liberdade Total</div>
                        </div>
                      </div>
                      <span className="text-xs text-primary font-mono">Exponencial</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Problem: The Complexity Trap */}
      <section id="content-section" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">A Armadilha da Complexidade</h2>
            <p className="text-gray-400 text-lg">
              Nos ensinaram que crescer significa contratar mais pessoas, alugar escritórios maiores e aumentar a complexidade. Isso é uma mentira que destrói sua liberdade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Users size={24} />,
                title: "Gestão de Pessoas",
                desc: "Passar o dia resolvendo conflitos de equipe em vez de criar e vender. Você vira babá de adultos."
              },
              {
                icon: <DollarSign size={24} />,
                title: "Margens Esmagadas",
                desc: "Faturar R$ 1 Milhão para sobrar R$ 50 mil. O custo fixo devora todo o seu lucro e sua paz de espírito."
              },
              {
                icon: <Layers size={24} />,
                title: "Burocracia Infinita",
                desc: "Processos lentos, reuniões intermináveis e uma estrutura que se move como uma tartaruga."
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

      {/* 3. The Solution: The 4 Levers */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                ALAVANCAGEM INFINITA
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">As 4 Alavancas do Empreendedor Solo</h2>
              <p className="text-gray-400">
                Como substituir 10 funcionários por sistemas, código e mídia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain size={24} />,
                  title: "1. Conhecimento Específico",
                  desc: "Venda o que só você sabe. Transforme sua experiência única em produtos digitais, consultorias high-ticket ou mentorias. Ninguém pode competir com você em ser você."
                },
                {
                  icon: <Megaphone size={24} />,
                  title: "2. Mídia (Audiência)",
                  desc: "Conteúdo é o funcionário que trabalha 24/7, não pede aumento e escala infinitamente. Um vídeo no YouTube pode vender para 10.000 pessoas enquanto você dorme."
                },
                {
                  icon: <Cpu size={24} />,
                  title: "3. Código (No-Code/AI)",
                  desc: "Use automações (Zapier, n8n) e IA para executar tarefas operacionais. O software tem custo marginal zero de replicação."
                },
                {
                  icon: <DollarSign size={24} />,
                  title: "4. Capital",
                  desc: "Use dinheiro para comprar tempo. Invista em tráfego pago para acelerar o que já funciona organicamente. Faça o dinheiro trabalhar para você."
                }
              ].map((lever, i) => (
                <div key={i} className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-primary">
                    {lever.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {lever.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{lever.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{lever.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Model: Productize Yourself */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-white">Productize Yourself</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  O segredo não é trabalhar mais, é desvincular seu tempo do seu ganho. Você precisa criar ativos que geram receita independente da sua presença física.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 border-l-2 border-primary">
                    <h4 className="text-white font-bold mb-1">Serviço Productizado</h4>
                    <p className="text-sm text-gray-400">Empacote seu serviço com escopo fechado, preço fixo e entrega padronizada. Elimine propostas customizadas.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border-l-2 border-primary">
                    <h4 className="text-white font-bold mb-1">Infoprodutos & Comunidades</h4>
                    <p className="text-sm text-gray-400">Venda seu conhecimento gravado ou acesso à sua rede. Margem de lucro próxima de 100%.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border-l-2 border-primary">
                    <h4 className="text-white font-bold mb-1">SaaS & Micro-SaaS</h4>
                    <p className="text-sm text-gray-400">Resolva um problema específico com software. Receita recorrente (MRR) é o santo graal.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative bg-[#050505] border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute -top-4 -right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                    ECOSSISTEMA
                  </div>
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-white mb-2">VOCÊ</div>
                      <div className="text-xs text-gray-500">O Criador (Estratégia)</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center relative">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -z-10" />
                      
                      <div className="bg-[#050505] p-2">
                        <div className="w-10 h-10 mx-auto bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-2"><Bot size={18} /></div>
                        <div className="text-[10px] font-bold text-gray-300">IA & Automação</div>
                      </div>
                      <div className="bg-[#050505] p-2">
                        <div className="w-10 h-10 mx-auto bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-2"><Globe size={18} /></div>
                        <div className="text-[10px] font-bold text-gray-300">Conteúdo</div>
                      </div>
                      <div className="bg-[#050505] p-2">
                        <div className="w-10 h-10 mx-auto bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-2"><DollarSign size={18} /></div>
                        <div className="text-[10px] font-bold text-gray-300">Vendas</div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">R$ 100k - R$ 1M+</div>
                      <div className="text-xs text-gray-500">Faturamento Anual / 90% Margem</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 The Solo Stack */}
      <section className="py-24 bg-[#020202] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">A Pilha Tecnológica do Solopreneur</h2>
            <p className="text-gray-400">
              Substitua departamentos inteiros por software de $20/mês.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Notion/Obsidian", role: "Segundo Cérebro", icon: <Brain size={20} /> },
              { name: "ChatGPT/Claude", role: "Equipe Criativa", icon: <Bot size={20} /> },
              { name: "Zapier/Make", role: "Operações", icon: <Cpu size={20} /> },
              { name: "Stripe/Lemon", role: "Financeiro", icon: <DollarSign size={20} /> },
            ].map((tool, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                <div className="mb-4 text-primary">{tool.icon}</div>
                <h3 className="font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.6 Financial Reality */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">A Matemática da Liberdade</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Agency */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/5 opacity-60">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users size={20} /> Agência Tradicional
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Faturamento</span>
                    <span className="text-white">R$ 200.000/mês</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Equipe (15 pessoas)</span>
                    <span className="text-red-400">- R$ 120.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Escritório/Softwares</span>
                    <span className="text-red-400">- R$ 30.000</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Lucro Líquido</span>
                    <span className="text-green-400">R$ 50.000 (25%)</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-500 bg-black/30 p-3 rounded">
                    Stress alto, gestão de pessoas, risco trabalhista.
                  </div>
                </div>
              </div>

              {/* Solo Business */}
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-3xl" />
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Cpu size={20} className="text-primary" /> One-Person Business
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Faturamento</span>
                    <span className="text-white">R$ 60.000/mês</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Equipe (Freelancers)</span>
                    <span className="text-red-400">- R$ 5.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Stack Tecnológico</span>
                    <span className="text-red-400">- R$ 2.000</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Lucro Líquido</span>
                    <span className="text-primary">R$ 53.000 (88%)</span>
                  </div>
                  <div className="mt-4 text-xs text-primary/80 bg-primary/10 p-3 rounded border border-primary/10">
                    Liberdade geográfica, zero stress, escala infinita.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Quer Construir seu Império de Uma Pessoa?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Pare de gerenciar pessoas e comece a gerenciar sistemas. Descubra como escalar sua liberdade e seu faturamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-black hover:bg-[#C5A028] h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              INICIAR JORNADA SOLO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
