import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingDown, Zap, Layers, History, Brain, Search, ShieldAlert, Database, Leaf, Bot, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolBolhaIA = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-fuchsia-500/20 selection:text-fuchsia-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                </span>
                REALITY CHECK
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Bolha da IA: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-200 to-fuchsia-500">
                  Revolução ou Delírio?
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Estamos vivendo a maior transformação tecnológica da história ou apenas repetindo a euforia das pontocom? A resposta pode salvar (ou quebrar) seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-fuchsia-600 text-white hover:bg-fuchsia-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all w-full sm:w-auto">
                  FURAR A BOLHA
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-fuchsia-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Bubble */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-center">
                    
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      {/* The Bubble */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-transparent border border-fuchsia-500/50 animate-pulse shadow-[0_0_50px_rgba(217,70,239,0.3)]" />
                      
                      {/* Needle */}
                      <div className="absolute -top-8 -right-8 text-gray-400 animate-bounce" style={{ animationDuration: '3s' }}>
                        <AlertTriangle size={32} />
                      </div>

                      {/* Content inside bubble */}
                      <div className="text-center z-10">
                        <h3 className="text-2xl font-bold text-white mb-1">HYPE</h3>
                        <p className="text-[10px] text-fuchsia-300 uppercase tracking-widest">Valuation Infinito</p>
                      </div>
                    </div>

                    <div className="mt-8 w-full bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-end h-16 gap-2">
                        <div className="w-1/5 bg-gray-700/50 rounded-t h-[20%]" />
                        <div className="w-1/5 bg-gray-700/50 rounded-t h-[40%]" />
                        <div className="w-1/5 bg-gray-700/50 rounded-t h-[60%]" />
                        <div className="w-1/5 bg-fuchsia-500 rounded-t h-[100%] relative">
                           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-fuchsia-400 font-bold">AGORA</div>
                        </div>
                        <div className="w-1/5 bg-gray-700/50 rounded-t h-[30%] border-t-2 border-dashed border-gray-500" />
                      </div>
                      <p className="text-center text-[10px] text-gray-500 mt-2">Ciclo de Expectativa Gartner (Simplificado)</p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Provocation */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Elefante na Sala</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Todo mundo está adicionando "AI" no pitch deck. Mas quantos estão realmente criando valor e quantos estão apenas "embrulhando" o ChatGPT?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">O Fenômeno "Wrapper"</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Milhares de startups são apenas interfaces bonitas (wrappers) conectadas à API da OpenAI.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                  <p className="text-red-300 text-xs font-bold">O RISCO:</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Quando o modelo base (GPT-5, Claude 4) lançar sua feature nativa, seu negócio desaparece da noite para o dia. Lembra dos apps de "PDF Chat"? O GPT-4 matou todos em uma atualização.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-fuchsia-500/5 border border-fuchsia-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-fuchsia-400" size={24} />
                  <h3 className="text-xl font-bold text-white">A Verdadeira Inovação</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Empresas que usam IA para resolver problemas proprietários, com dados proprietários.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                  <p className="text-green-300 text-xs font-bold">A OPORTUNIDADE:</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Vertical AI. IA treinada em dados específicos de uma indústria (ex: Direito, Medicina, Engenharia) que modelos generalistas não conseguem acessar ou entender profundamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Dotcom Parallel */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-xs font-bold mb-4">
                  <History size={14} />
                  LIÇÕES DA HISTÓRIA
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Fantasma de 2000</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Na bolha da internet, qualquer empresa que colocasse ".com" no nome recebia milhões em investimento. A maioria faliu (Pets.com, Webvan).
                </p>
                <p className="text-gray-400 text-lg mb-6">
                  Mas a internet em si <strong>não era uma bolha</strong>. Era uma revolução real. Quem sobreviveu (Amazon, Google) dominou o mundo.
                </p>
                <p className="text-white font-bold text-lg">
                  A IA segue o mesmo padrão. A tecnologia é real. As empresas, nem tanto.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-white font-bold">Pets.com (2000)</h4>
                        <p className="text-xs text-gray-500">Promessa: "Ração pela internet"</p>
                      </div>
                      <div className="text-right">
                        <span className="text-red-500 font-mono font-bold">FALIU</span>
                        <p className="text-[10px] text-gray-600">Logística insustentável</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-white font-bold">Amazon (2000)</h4>
                        <p className="text-xs text-gray-500">Promessa: "Tudo pela internet"</p>
                      </div>
                      <div className="text-right">
                        <span className="text-green-500 font-mono font-bold">SOBREVIVEU</span>
                        <p className="text-[10px] text-gray-600">Infraestrutura real</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h4 className="text-fuchsia-400 font-bold">Sua Empresa de IA (2025)</h4>
                        <p className="text-xs text-gray-500">Promessa: "IA para X"</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white font-mono font-bold">?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 The Turing Trap */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8 flex items-center justify-center">
                    <Bot size={120} className="text-fuchsia-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <p className="text-white font-mono text-sm">
                        &gt; Human_Parity = False<br/>
                        &gt; Super_Intelligence = True
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Armadilha de Turing</h2>
                  <p className="text-gray-400 text-lg mb-6">
                    Erik Brynjolfsson (Stanford) alerta: estamos obcecados em criar IAs que <em>imitam</em> humanos (automação), quando deveríamos criar IAs que fazem o que humanos <em>não conseguem</em> (aumentação).
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="mt-1 p-1 rounded bg-red-500/10 text-red-400">
                        <TrendingDown size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">Automação (Substituição)</h4>
                        <p className="text-gray-500 text-xs">Reduz custos marginalmente, mas deprime salários e cria resistência social.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1 p-1 rounded bg-green-500/10 text-green-400">
                        <Zap size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">Aumentação (Superpoderes)</h4>
                        <p className="text-gray-500 text-xs">Permite que uma pessoa faça o trabalho de dez, criando valor exponencial.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Trough of Disillusionment */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Vale da Desilusão</h2>
              <p className="text-gray-400 text-lg">
                O que acontece quando a novidade passa e os boletos chegam?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <TrendingDown className="text-fuchsia-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Custo Computacional</h3>
                <p className="text-sm text-gray-400">
                  Rodar LLMs é caro. Muitas startups de IA têm margens negativas. Elas subsidiam o usuário com dinheiro de VC. Quando o dinheiro acabar, o preço sobe.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <ShieldAlert className="text-fuchsia-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Alucinação & Confiança</h3>
                <p className="text-sm text-gray-400">
                  Empresas sérias (B2B) não podem tolerar erros de 1%. A IA criativa é ótima para marketing, mas perigosa para contabilidade ou jurídico sem supervisão.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <Search className="text-fuchsia-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">A Busca por Utilidade</h3>
                <p className="text-sm text-gray-400">
                  "Chat com seus dados" já é commodity. A pergunta agora é: essa IA executa o trabalho ou apenas dá conselhos? Agentes &gt; Chatbots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 Data is the New Oil */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Database size={100} className="text-fuchsia-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">O Fosso Defensivo</h3>
                  <p className="text-gray-400 mb-6">
                    Modelos (GPT-4, Llama 3) são commodities. Eles ficarão mais baratos e inteligentes. O que não fica mais barato? <strong>Dados Proprietários.</strong>
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded bg-black/40 border border-white/5">
                      <Lock size={18} className="text-fuchsia-400" />
                      <span className="text-sm text-gray-300">Dados de Clientes (CRM)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded bg-black/40 border border-white/5">
                      <Lock size={18} className="text-fuchsia-400" />
                      <span className="text-sm text-gray-300">Processos Internos Documentados</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded bg-black/40 border border-white/5">
                      <Lock size={18} className="text-fuchsia-400" />
                      <span className="text-sm text-gray-300">Histórico de Transações</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Dados: O Novo Petróleo (De Novo)</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Se sua estratégia de IA depende apenas de "engenharia de prompt", você não tem uma estratégia. Qualquer um pode copiar seu prompt. Ninguém pode copiar seus dados.
                </p>
                <p className="text-white font-bold">
                  A vitória será de quem conseguir estruturar seus dados não-estruturados para alimentar agentes autônomos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.6 The Energy Crisis */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-400 mb-6">
                <Leaf size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Limite Físico: Energia</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                A IA não vive na nuvem, ela vive em data centers que consomem a energia de países inteiros. A próxima crise não será de chips, será de eletricidade.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">10x</div>
                  <p className="text-xs text-gray-500">Uma busca no ChatGPT consome 10x mais energia que uma busca no Google.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">Nuclear</div>
                  <p className="text-xs text-gray-500">Microsoft e Amazon estão comprando usinas nucleares para alimentar seus data centers.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">Hardware</div>
                  <p className="text-xs text-gray-500">O futuro pertence a quem rodar modelos eficientes localmente (Edge AI), não apenas na nuvem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Survival Guide */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-fuchsia-900/20 to-black border border-fuchsia-500/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <Zap className="text-fuchsia-400 mx-auto mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">Como Não Estourar Junto</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-fuchsia-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Foque no Problema, não na IA</h4>
                    <p className="text-gray-400">Ninguém quer "IA". As pessoas querem "escrever e-mails mais rápido" ou "analisar contratos automaticamente". A IA é o meio, não o fim.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-fuchsia-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Construa Fossos (Moats) Reais</h4>
                    <p className="text-gray-400">Dados proprietários, efeitos de rede, integrações profundas, marca forte. Se seu único diferencial é o prompt, você está morto.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-fuchsia-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Prepare-se para a Consolidação</h4>
                    <p className="text-gray-400">Haverá poucos modelos fundacionais (OpenAI, Google, Anthropic, Meta). Não tente competir na infraestrutura. Compita na aplicação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Final */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-fuchsia-900/10" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white font-serif">
              Não Seja um "Turista" da IA. <br />
              <span className="text-fuchsia-400">Seja um Construtor.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              A bolha vai limpar o mercado dos oportunistas. O que vai sobrar são as empresas que geram valor real. De que lado você vai estar?
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-base font-bold rounded-full shadow-xl transition-all">
              CONSTRUIR VALOR REAL
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
