import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Clock, Dumbbell, Trophy, Zap, Target, Lock, Unlock } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolMktInjusta = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-violet-500/20 selection:text-violet-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                VANTAGEM INJUSTA
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Equação de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-200 to-violet-500">
                  Valor Infinito
                </span>
              </h1>
              
              <blockquote className="border-l-2 border-violet-500/30 pl-4 mb-8 italic text-gray-400 text-sm">
                "Faça uma oferta tão boa que as pessoas se sintam estúpidas em dizer não."
                <footer className="text-violet-400 not-italic font-medium mt-1 text-xs">— Alex Hormozi</footer>
              </blockquote>

              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Não é sobre ser o melhor. É sobre construir uma oferta onde o valor percebido é infinitamente maior que o preço cobrado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-violet-600 text-white hover:bg-violet-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all w-full sm:w-auto">
                  DESCOBRIR A EQUAÇÃO
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-violet-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Value Equation */}
                  <div className="relative z-10 w-full flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4 text-2xl font-bold text-white">
                        <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-green-400 text-sm mb-1">Sonho</span>
                            <Trophy size={24} className="text-green-400" />
                        </div>
                        <span>×</span>
                        <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-green-400 text-sm mb-1">Certeza</span>
                            <Target size={24} className="text-green-400" />
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-white/20 my-2 relative">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-2 text-gray-500 text-xs">DIVIDIDO POR</span>
                    </div>
                    <div className="flex items-center gap-4 text-2xl font-bold text-white">
                        <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-red-400 text-sm mb-1">Tempo</span>
                            <Clock size={24} className="text-red-400" />
                        </div>
                        <span>×</span>
                        <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-red-400 text-sm mb-1">Esforço</span>
                            <Dumbbell size={24} className="text-red-400" />
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
        
        {/* 2. The Equation Explained */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Equação de Valor</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Para criar uma "Vantagem Injusta", você precisa manipular as quatro variáveis da equação de valor. Seu objetivo é maximizar o numerador (o que o cliente ganha) e minimizar o denominador (o que custa para ele).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Numerator: Increase These */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                  <span className="p-1 bg-green-500/10 rounded">⬆️</span> Aumente ao Máximo
                </h3>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Resultado Sonhado</h4>
                      <p className="text-sm text-gray-400">
                        O que o cliente realmente quer? Não é "perder peso", é "ter um corpo de praia". Não é "marketing", é "dinheiro na conta". Venda o destino, não o avião.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Probabilidade Percebida</h4>
                      <p className="text-sm text-gray-400">
                        Qual a chance disso funcionar *para mim*? Aumente isso com provas sociais, garantias ousadas e estudos de caso. Se a chance for 100%, o valor é infinito.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Denominator: Decrease These */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <span className="p-1 bg-red-500/10 rounded">⬇️</span> Reduza a Zero
                </h3>
                
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Tempo (Delay)</h4>
                      <p className="text-sm text-gray-400">
                        Quanto tempo demora para ver o resultado? Amazon ganha porque entrega amanhã. Netflix ganha porque toca agora. Reduza o tempo entre o pagamento e a recompensa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                      <Dumbbell size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Esforço e Sacrifício</h4>
                      <p className="text-sm text-gray-400">
                        O que eu tenho que fazer? Se for "nada" (Done For You), vale muito. Se for "tudo" (curso online), vale pouco. Remova o atrito.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Grand Slam Offer */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Oferta Grand Slam</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Uma oferta Grand Slam é aquela que não pode ser comparada. Se você vende "Consultoria de Marketing", você é uma commodity. Se você vende "Sistema de Aquisição de Clientes com Garantia de ROI ou seu Dinheiro de Volta", você é único.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Resolva um problema urgente e doloroso.",
                    "Tenha um mecanismo único (seu 'segredo').",
                    "Ofereça uma garantia inquebrável (reversão de risco).",
                    "Use escassez e urgência reais.",
                    "Dê bônus que resolvem os problemas criados pela compra."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Zap className="text-violet-500 shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">Commodity vs. Grand Slam</h3>
                    <Scale className="text-violet-500" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded bg-white/5 border-l-2 border-gray-500 opacity-50">
                      <p className="text-xs text-gray-400 uppercase mb-1">Oferta Comum</p>
                      <p className="text-white font-medium">"Vendo sites por R$ 2.000"</p>
                      <p className="text-xs text-red-400 mt-2">Concorre por preço. Margem baixa.</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="text-gray-600 rotate-90 md:rotate-0" />
                    </div>

                    <div className="p-4 rounded bg-violet-500/10 border-l-2 border-violet-500">
                      <p className="text-xs text-violet-300 uppercase mb-1">Oferta Grand Slam</p>
                      <p className="text-white font-medium">"Crio sua máquina de vendas online em 30 dias ou devolvo seu dinheiro + R$ 1.000 pelo seu tempo."</p>
                      <p className="text-xs text-green-400 mt-2">Sem concorrentes. Margem infinita.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Magic Headline */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Nome Mágico</h2>
              <p className="text-gray-400 text-lg">
                O nome da sua oferta é a primeira coisa que o cliente vê. Ele deve prometer o resultado sonhado, definir o tempo e remover o risco.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-violet-400 font-bold mb-2">Passo 1: Promessa</div>
                <p className="text-white font-medium mb-2">"Como conseguir [Resultado Sonhado]"</p>
                <p className="text-sm text-gray-500">Ex: Como conseguir 10 novos clientes...</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-violet-400 font-bold mb-2">Passo 2: Tempo</div>
                <p className="text-white font-medium mb-2">"Em [Tempo Específico]"</p>
                <p className="text-sm text-gray-500">Ex: ...em 30 dias...</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-violet-400 font-bold mb-2">Passo 3: Sem Esforço</div>
                <p className="text-white font-medium mb-2">"Sem [Dor Comum]"</p>
                <p className="text-sm text-gray-500">Ex: ...sem gastar com anúncios.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bonuses & Stack */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5">
                      <span className="text-white">Oferta Principal</span>
                      <span className="text-violet-400 font-bold">R$ 5.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5 ml-4">
                      <span className="text-gray-300">+ Bônus 1: Scripts de Vendas</span>
                      <span className="text-gray-500 line-through">R$ 1.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5 ml-4">
                      <span className="text-gray-300">+ Bônus 2: Consultoria 1:1</span>
                      <span className="text-gray-500 line-through">R$ 2.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5 ml-4">
                      <span className="text-gray-300">+ Bônus 3: Comunidade VIP</span>
                      <span className="text-gray-500 line-through">R$ 500</span>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="text-gray-400">Valor Total: <span className="line-through">R$ 8.500</span></span>
                      <span className="text-green-400 font-bold text-xl">Hoje: R$ 5.000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Pilha de Bônus (The Stack)</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Uma única oferta é fácil de comparar. Uma "pilha" de valor é incomparável. Quebre sua oferta em componentes e apresente cada um como um bônus valioso.
                </p>
                <p className="text-gray-400 text-lg">
                  Os bônus devem resolver os <strong>novos problemas</strong> que sua oferta principal cria.
                  <br/><br/>
                  <em>Exemplo: Se você vende um curso de marketing (oferta), o cliente terá o problema de "não saber design". O bônus deve ser "Templates de Design Prontos".</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Guarantees & Risk Reversal */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Reversão de Risco</h2>
              <p className="text-gray-400 text-lg">
                O maior obstáculo para a compra é o risco. Se você remover o risco do cliente e colocá-lo em você, a venda se torna lógica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                <Unlock className="text-violet-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Garantia Incondicional</h3>
                <p className="text-sm text-gray-400">
                  "Teste por 30 dias. Se não gostar, devolvo 100% do seu dinheiro. Sem perguntas."
                </p>
                <p className="text-xs text-gray-500 mt-4">Baixo risco para você, alto conforto para o cliente.</p>
              </div>
              
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                <Lock className="text-violet-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Garantia Condicional</h3>
                <p className="text-sm text-gray-400">
                  "Se você aplicar o método e não tiver resultado em 90 dias, eu trabalho de graça para você até conseguir."
                </p>
                <p className="text-xs text-gray-500 mt-4">Elimina o medo de "não funcionar para mim".</p>
              </div>

              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                <Zap className="text-violet-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Anti-Garantia</h3>
                <p className="text-sm text-gray-400">
                  "Todas as vendas são finais. Se você não tem certeza, não compre. Queremos apenas os comprometidos."
                </p>
                <p className="text-xs text-gray-500 mt-4">Cria exclusividade e atrai clientes de alta qualidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Scarcity & Urgency */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-white font-serif">Escassez e Urgência</h2>
            <p className="text-gray-400 text-lg mb-12">
              As pessoas procrastinam. Escassez (quantidade) e Urgência (tempo) são as únicas razões pelas quais as pessoas compram <strong>agora</strong> e não "depois".
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border-l-4 border-red-500 bg-white/5">
                <h4 className="text-lg font-bold text-white mb-2">Escassez (Quantidade)</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• "Apenas 3 vagas disponíveis para consultoria."</li>
                  <li>• "Edição limitada a 100 cópias."</li>
                  <li>• "Bônus apenas para os 10 primeiros."</li>
                </ul>
              </div>
              <div className="p-6 border-l-4 border-orange-500 bg-white/5">
                <h4 className="text-lg font-bold text-white mb-2">Urgência (Tempo)</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• "O preço sobe na sexta-feira."</li>
                  <li>• "Inscrições encerram em 24 horas."</li>
                  <li>• "Oferta válida apenas nesta página."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. The Rule of 100 */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Regra dos 100</h2>
              <p className="text-gray-400 text-lg">
                A maioria das pessoas falha não porque a estratégia é ruim, mas porque o volume é baixo. A Regra dos 100 garante que você nunca falhe por falta de esforço.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-violet-400 mb-4">100</div>
                <h3 className="text-xl font-bold text-white mb-2">Outreachs Diários</h3>
                <p className="text-sm text-gray-400">
                  Mande 100 mensagens, faça 100 ligações ou envie 100 e-mails todos os dias.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-violet-400 mb-4">100</div>
                <h3 className="text-xl font-bold text-white mb-2">Minutos de Conteúdo</h3>
                <p className="text-sm text-gray-400">
                  Produza 100 minutos de conteúdo por semana para construir autoridade.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-violet-400 mb-4">100</div>
                <h3 className="text-xl font-bold text-white mb-2">Dólares em Ads</h3>
                <p className="text-sm text-gray-400">
                  Invista $100 por dia em anúncios pagos para testar suas ofertas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. The Core 4 (Lead Gen) */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Os 4 Canais de Aquisição (Core 4)</h2>
              <p className="text-gray-400 text-lg">
                Só existem 4 maneiras de conseguir um cliente. Se você não está fazendo uma delas, você não está fazendo marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 font-bold">1</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Warm Outreach (Quem você conhece)</h4>
                  <p className="text-sm text-gray-400">Contatar amigos, familiares, ex-clientes e sua lista de contatos atual.</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 font-bold">2</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Cold Outreach (Quem você não conhece)</h4>
                  <p className="text-sm text-gray-400">Cold calls, cold emails, DMs para estranhos. Volume é o segredo aqui.</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 font-bold">3</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Conteúdo Gratuito (Postar)</h4>
                  <p className="text-sm text-gray-400">Atrair pessoas que não te conhecem através de valor entregue de graça.</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 font-bold">4</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Anúncios Pagos (Pagar)</h4>
                  <p className="text-sm text-gray-400">Comprar a atenção de estranhos. A maneira mais rápida e escalável.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CTA Final */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-violet-900/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              Qual é a sua <span className="text-violet-400">Vantagem Injusta</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Pare de competir. Comece a dominar. Vamos construir sua oferta Grand Slam juntos.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl transition-all">
              CRIAR MINHA OFERTA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
