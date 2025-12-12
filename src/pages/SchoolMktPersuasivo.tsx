import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Clock, ShieldCheck, UserCheck, Heart, Users, Scale, BrainCircuit } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolMktPersuasivo = () => {
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
        
        <div className="container mx-auto relative z-10">
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
                CIÊNCIA DA PERSUASÃO
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                Os 6 Atalhos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-200 to-emerald-500">
                  Universais do "Sim"
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Baseado em 60 anos de pesquisa do Dr. Robert Cialdini. Não é mágica, é ciência comportamental. Aprenda a influenciar de forma ética e eficaz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all w-full sm:w-auto">
                  DOMINAR A INFLUÊNCIA
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
                  
                  {/* Visual: The Brain/Influence Network */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-4 rounded-full border border-emerald-500/40 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BrainCircuit size={64} className="text-emerald-400" />
                      </div>
                      
                      {/* Orbiting Principles */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#050505] px-2 py-1 rounded border border-emerald-500/30 text-[10px] text-emerald-400 font-bold">RECIPROCIDADE</div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#050505] px-2 py-1 rounded border border-emerald-500/30 text-[10px] text-emerald-400 font-bold">ESCASSEZ</div>
                      <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-[#050505] px-2 py-1 rounded border border-emerald-500/30 text-[10px] text-emerald-400 font-bold">AUTORIDADE</div>
                      <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-[#050505] px-2 py-1 rounded border border-emerald-500/30 text-[10px] text-emerald-400 font-bold">CONSENSO</div>
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
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Por que dizemos "Sim"?</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Em um mundo sobrecarregado de informações, nosso cérebro precisa de atalhos para tomar decisões. Conhecer esses atalhos não é manipulação, é entender a natureza humana.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The 6 Principles Grid */}
        <section className="py-12 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* 1. Reciprocity */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Gift className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Reciprocidade</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas se sentem obrigadas a retribuir o que receberam primeiro.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Ofereça valor gratuito (e-book, trial, consultoria) <em>antes</em> de pedir a venda. Seja o primeiro a dar.
                  </p>
                </div>
              </div>

              {/* 2. Scarcity */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Clock className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Escassez</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas querem mais daquilo que elas podem ter menos.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Não diga apenas os benefícios. Diga o que elas vão <em>perder</em> se não agirem agora. (FOMO ético).
                  </p>
                </div>
              </div>

              {/* 3. Authority */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <ShieldCheck className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Autoridade</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas seguem a liderança de especialistas credíveis e conhecedores.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Mostre suas credenciais, prêmios e anos de experiência antes de tentar influenciar.
                  </p>
                </div>
              </div>

              {/* 4. Consistency */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <UserCheck className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">4. Consistência</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas gostam de ser consistentes com o que disseram ou fizeram anteriormente.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Busque pequenos compromissos iniciais (micro-sim) antes de pedir o grande compromisso.
                  </p>
                </div>
              </div>

              {/* 5. Liking */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Heart className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">5. Afeição</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas preferem dizer sim para quem elas gostam.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Encontre similaridades reais, faça elogios genuínos e coopere para objetivos mútuos.
                  </p>
                </div>
              </div>

              {/* 6. Consensus */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Users className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">6. Consenso</h3>
                <p className="text-sm text-gray-400 mb-4">
                  As pessoas olham para as ações dos outros para determinar as suas próprias.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    <strong className="text-emerald-400">Aplicação:</strong> Mostre o que outros (similares ao seu cliente) já estão fazendo. Depoimentos e números.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. The 7th Principle (Bonus) */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Scale size={40} className="text-white" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-3">
                  BÔNUS: O 7º PRINCÍPIO
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Unidade (Unity)</h3>
                <p className="text-gray-400 mb-4">
                  Adicionado posteriormente por Cialdini. Não é apenas sobre gostar (Afeição), é sobre <strong>ser um de nós</strong>. Identidade compartilhada.
                </p>
                <p className="text-sm text-gray-500">
                  "Nós somos família", "Nós somos engenheiros", "Nós somos brasileiros". Quando você evoca uma identidade compartilhada, a influência é instantânea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pre-Suasion */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6">
                  ALÉM DA PERSUASÃO
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif">
                  Pre-Suasão: <br />
                  <span className="text-gray-500">A Arte de Preparar o Terreno</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Os melhores influenciadores não apenas dizem as coisas certas, eles dizem no <strong>momento certo</strong>. Pre-suasão é o processo de organizar o que acontece <em>antes</em> da sua mensagem principal para torná-la mais aceitável.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">✓</div>
                    <p className="text-gray-300 text-sm"><strong>Foco de Atenção:</strong> O que está na mente do seu cliente no momento da decisão é o que importa (mesmo que não seja o mais importante).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">✓</div>
                    <p className="text-gray-300 text-sm"><strong>Perguntas Direcionadas:</strong> Perguntar "Você se considera aventureiro?" antes de vender um pacote de viagens aumenta drasticamente a conversão.</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full opacity-30" />
                <div className="relative bg-black border border-white/10 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="text-sm font-mono text-gray-500">TIMELINE DA INFLUÊNCIA</span>
                  </div>
                  <div className="space-y-8 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-white/10" />
                    
                    <div className="relative flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-500/50 flex items-center justify-center z-10">
                        <span className="text-emerald-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">O Momento Privilegiado</h4>
                        <p className="text-xs text-gray-500">Antes da mensagem. Capture a atenção e direcione o foco.</p>
                      </div>
                    </div>

                    <div className="relative flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center z-10">
                        <span className="text-gray-500 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-bold mb-1">A Mensagem</h4>
                        <p className="text-xs text-gray-500">Sua oferta, argumento ou pedido.</p>
                      </div>
                    </div>

                    <div className="relative flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center z-10">
                        <span className="text-gray-500 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-gray-300 font-bold mb-1">A Ação</h4>
                        <p className="text-xs text-gray-500">O "Sim" do cliente.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The Power of Because */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">O Poder da Palavra "Porque"</h2>
                <p className="text-gray-400">O estudo clássico da máquina de xerox de Ellen Langer (Harvard, 1978).</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Case 1 */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-500 mb-4">PEDIDO SIMPLES</div>
                  <p className="text-white italic mb-6">"Tenho 5 páginas. Posso usar a máquina de xerox?"</p>
                  <div className="text-4xl font-bold text-gray-400 mb-2">60%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Concordaram</div>
                </div>

                {/* Case 2 */}
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                  <div className="text-sm text-emerald-400 mb-4 font-bold">COM MOTIVO REAL</div>
                  <p className="text-white italic mb-6">"Posso usar a máquina <span className="text-emerald-400 font-bold">porque</span> estou com pressa?"</p>
                  <div className="text-5xl font-bold text-white mb-2">94%</div>
                  <div className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Concordaram</div>
                </div>

                {/* Case 3 */}
                <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 text-center">
                  <div className="text-sm text-emerald-400/80 mb-4">COM MOTIVO FÚTIL</div>
                  <p className="text-white italic mb-6">"Posso usar a máquina <span className="text-emerald-400 font-bold">porque</span> eu tenho que fazer cópias?"</p>
                  <div className="text-4xl font-bold text-white mb-2">93%</div>
                  <div className="text-xs text-emerald-400/80 uppercase tracking-widest">Concordaram</div>
                </div>
              </div>
              
              <div className="mt-12 text-center max-w-2xl mx-auto">
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Lição:</strong> O cérebro humano busca uma razão. A palavra "porque" aciona um gatilho automático de aceitação, mesmo que a razão a seguir não seja forte. Sempre justifique seus pedidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Practical Application Checklist */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Checklist de Aplicação</h2>
                <p className="text-gray-400 mb-8">
                  Como aplicar esses princípios em diferentes etapas do seu funil de vendas hoje mesmo.
                </p>
                <div className="p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl">
                  <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                    <BrainCircuit size={16} />
                    Dica Pro
                  </h4>
                  <p className="text-sm text-gray-400">
                    Não tente usar todos de uma vez. O excesso de gatilhos pode parecer artificial e gerar desconfiança (reatância psicológica).
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3 grid gap-6">
                {/* Landing Page */}
                <div className="group">
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-t-lg border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    <h3 className="font-bold text-white">Landing Page</h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">Topo de Funil</span>
                  </div>
                  <div className="bg-black/40 border-x border-b border-white/10 p-6 rounded-b-lg space-y-3">
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Autoridade:</span>
                      <span>Logos de clientes, prêmios e certificações visíveis na primeira dobra.</span>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Consenso:</span>
                      <span>"Junte-se a +10.000 profissionais". Números grandes geram confiança.</span>
                    </div>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="group">
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-t-lg border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    <h3 className="font-bold text-white">Email Marketing</h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">Meio de Funil</span>
                  </div>
                  <div className="bg-black/40 border-x border-b border-white/10 p-6 rounded-b-lg space-y-3">
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Escassez:</span>
                      <span>Contadores regressivos reais ou avisos de "últimas vagas" no assunto.</span>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Afeição:</span>
                      <span>Use tom conversacional, conte histórias pessoais e mostre vulnerabilidade.</span>
                    </div>
                  </div>
                </div>

                {/* Sales Call */}
                <div className="group">
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-t-lg border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    <h3 className="font-bold text-white">Vendas / Negociação</h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">Fundo de Funil</span>
                  </div>
                  <div className="bg-black/40 border-x border-b border-white/10 p-6 rounded-b-lg space-y-3">
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Reciprocidade:</span>
                      <span>Ofereça um desconto ou bônus inesperado antes de pedir o fechamento.</span>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-400">
                      <span className="text-emerald-500 font-bold min-w-[80px]">Consistência:</span>
                      <span>Relembre o cliente dos problemas que ele admitiu ter no início da conversa.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA Final */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Use com Responsabilidade
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              A linha entre persuasão e manipulação é a intenção. Use esses princípios para ajudar seus clientes a tomarem a melhor decisão para eles.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold rounded-full">
              APLICAR NA MINHA ESTRATÉGIA
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
