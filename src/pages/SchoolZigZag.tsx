import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Split, AlertTriangle, Lightbulb, Compass, Layers, MousePointer2, Scissors, TrendingUp, Type } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolZigZag = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-yellow-500/20 selection:text-yellow-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                RADICAL DIFFERENTIATION
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                Quando todos fazem ZIG, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-200 to-yellow-500">
                  você faz ZAG.
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Não tente ser "melhor". Melhor é subjetivo. Melhor é uma armadilha. Para vencer em um mercado saturado, você precisa ser radicalmente diferente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all w-full sm:w-auto">
                  ENCONTRAR MEU ZAG
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-yellow-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: Zig Zag Pattern */}
                  <div className="relative z-10 w-full h-64 flex items-center justify-center">
                    <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                      {/* The Crowd (Zigs) */}
                      <path 
                        d="M 50,150 L 100,100 L 150,150 L 200,100 L 250,150" 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <path 
                        d="M 50,130 L 100,80 L 150,130 L 200,80 L 250,130" 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      
                      {/* The Zag */}
                      <path 
                        d="M 250,150 L 350,50" 
                        fill="none" 
                        stroke="#eab308" 
                        strokeWidth="4"
                        markerEnd="url(#arrow)"
                        className="animate-dash"
                      />
                      
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L0,6 L9,3 z" fill="#eab308" />
                        </marker>
                      </defs>

                      <text x="100" y="170" fill="#666" fontSize="12" textAnchor="middle">A Multidão (Zig)</text>
                      <text x="320" y="40" fill="#eab308" fontSize="14" fontWeight="bold" textAnchor="middle">Você (Zag)</text>
                    </svg>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Trap of "Better" */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Armadilha do "Melhor"</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A maioria das empresas tenta ser "melhor" que o concorrente. Mais rápido, mais barato, mais features. Isso é uma corrida para o fundo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="text-gray-400" size={24} />
                  <h3 className="text-xl font-bold text-white">O Oceano Vermelho</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Quando você compete em features, você vira commodity. O cliente compara preço. Margens caem.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">Guerra de Preço</span>
                  <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">CAC Alto</span>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Split className="text-yellow-400" size={24} />
                  <h3 className="text-xl font-bold text-white">A Estratégia Zag</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Não tente ser o melhor da categoria. Crie uma <strong>nova categoria</strong> onde você é o único.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded">Monopólio Temporário</span>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded">Margem Alta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Onlyness Test */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold mb-4">
                  <Target size={14} />
                  O TESTE DE FOGO
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Teste da "Unicidade"</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Se você não consegue completar esta frase, você não tem um Zag. Você é apenas mais um ruído no mercado.
                </p>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 font-mono text-sm leading-loose">
                  <p className="text-gray-500 mb-2">// The Onlyness Statement</p>
                  <p className="text-white">
                    Nossa marca é a <span className="text-yellow-400 font-bold">ÚNICA</span> [Categoria]<br/>
                    que [Benefício Principal]<br/>
                    para [Cliente Ideal]<br/>
                    em [Geografia/Mercado].
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full opacity-30" />
                <div className="relative p-8 rounded-2xl bg-black border border-white/10">
                  <h3 className="text-white font-bold mb-6">Exemplos Reais</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-yellow-500 pl-4">
                      <h4 className="text-white font-bold">Cirque du Soleil</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        O ÚNICO circo que mistura teatro e acrobacia, sem animais, para adultos sofisticados.
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-700 pl-4">
                      <h4 className="text-white font-bold">Southwest Airlines</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        A ÚNICA companhia aérea de curta distância, ponto-a-ponto, de baixo custo e alta diversão.
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-700 pl-4">
                      <h4 className="text-white font-bold">Harley Davidson</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        A ÚNICA fabricante de motos que vende um estilo de vida de liberdade rebelde para contadores de meia-idade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Good Different vs Bad Different */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Diferente Bom vs. Diferente Ruim</h2>
              <p className="text-gray-400 text-lg">
                Ser diferente por ser diferente é estupidez. Ser diferente com propósito é estratégia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 opacity-50">
                <AlertTriangle className="text-gray-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">O Mesmo</h3>
                <p className="text-sm text-gray-400">
                  Seguro, validado, mas invisível. Ninguém nota, ninguém compra (a menos que seja o mais barato).
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 opacity-50">
                <Lightbulb className="text-gray-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Diferente Ruim</h3>
                <p className="text-sm text-gray-400">
                  "Pizza de Sushi". Chama atenção, mas ninguém quer. Não resolve um problema real.
                </p>
              </div>
              <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/40 transform scale-105 shadow-xl">
                <Zap className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">O ZAG (Diferente Bom)</h3>
                <p className="text-sm text-gray-400">
                  Surpreendente mas óbvio em retrospecto. Resolve o problema de um jeito que ninguém pensou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How to Find Your Zag */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-500/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <Compass className="text-yellow-400 mx-auto mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 text-white font-serif">Como Encontrar o Espaço em Branco</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-white/5 border border-white/10 h-fit">
                    <MousePointer2 size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Olhe para o que TODOS odeiam</h4>
                    <p className="text-sm text-gray-400">
                      O que é o "padrão da indústria" que os clientes toleram mas detestam? (Ex: Taxas de atraso da Blockbuster &rarr; Netflix).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 p-2 rounded bg-white/5 border border-white/10 h-fit">
                    <Split size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Combine Opostos</h4>
                    <p className="text-sm text-gray-400">
                      Luxo + Acessível? Rápido + Saudável? (Ex: Uber Black - Motorista particular no celular).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 The Art of Sacrifice */}
        <section className="py-24 border-y border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Arte do Sacrifício</h2>
              <p className="text-gray-400 text-lg">
                Você não pode ser tudo para todos. Se você persegue dois coelhos, não pega nenhum. O que você está disposto a <strong>não</strong> fazer?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-colors group">
                <Scissors className="text-yellow-400 mb-4 group-hover:rotate-12 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Sacrifício de Produto</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Reduza a linha de produtos. Foque no que você faz melhor que qualquer um. A Apple quase faliu com 30 produtos. Jobs reduziu para 4.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-colors group">
                <Target className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Sacrifício de Público</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Demitir clientes ruins é tão importante quanto atrair bons. Se sua marca é para "todo mundo", ela não é para ninguém.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-colors group">
                <TrendingUp className="text-yellow-400 mb-4 group-hover:translate-y-[-4px] transition-transform" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">Sacrifício de Crescimento</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Crescer rápido demais pode matar sua cultura e sua diferenciação. Às vezes, dizer "não" a uma oportunidade é o maior ZAG.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5.6 Naming as a Weapon */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-white/5">
                      <span className="text-gray-500 line-through">Federal Express</span>
                      <ArrowRight size={16} className="text-yellow-400" />
                      <span className="text-white font-bold">FedEx</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-white/5">
                      <span className="text-gray-500 line-through">Computing Tabulating Recording Corp</span>
                      <ArrowRight size={16} className="text-yellow-400" />
                      <span className="text-white font-bold">IBM</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black/40 rounded border border-white/5">
                      <span className="text-gray-500 line-through">BackRub</span>
                      <ArrowRight size={16} className="text-yellow-400" />
                      <span className="text-white font-bold">Google</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold mb-4">
                  <Type size={14} />
                  NAMING
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Nome é o Primeiro ZAG</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Um nome fraco precisa de milhões em publicidade para ser lembrado. Um nome forte gruda na mente instantaneamente.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-yellow-500 mt-1">•</span>
                    <strong>Diferente:</strong> Soa diferente dos concorrentes?
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-yellow-500 mt-1">•</span>
                    <strong>Breve:</strong> Tem 4 sílabas ou menos?
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-yellow-500 mt-1">•</span>
                    <strong>Apropriado:</strong> Faz sentido para a categoria, mas sem ser descritivo demais?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Final */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-yellow-900/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Pare de Seguir.<br/>Comece a Liderar.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              O mundo não precisa de mais uma cópia. O mundo precisa do seu Zag.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold rounded-full">
              DEFINIR MINHA ESTRATÉGIA
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
