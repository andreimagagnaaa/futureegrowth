import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Megaphone, Users, Star, AlertTriangle, Rocket, Eye } from 'lucide-react';
import { Button } from '../components/Button';

export const SchoolPurpleCow = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-purple-500/20 selection:text-purple-400">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] font-medium mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                SETH GODIN & DIFERENCIAÇÃO
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                A Vaca Roxa: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-600">
                  Transforme seu Negócio sendo Notável
                </span>
              </h1>
              
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                O oposto de "notável" não é "ruim". É "muito bom". <br />
                Em um mundo de vacas marrons, ser muito bom é ser invisível. O seguro é arriscado. O normal é o caminho para o fracasso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button onClick={scrollToContent} size="lg" className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all w-full sm:w-auto">
                  SER NOTÁVEL
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
              <div className="relative rounded-xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden group hover:border-purple-500/20 transition-colors duration-500">
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="p-8 relative min-h-[320px] flex items-center justify-center bg-gradient-to-br from-black to-purple-900/10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Visual: The Purple Cow in a Field of Brown */}
                  <div className="relative z-10 grid grid-cols-3 gap-4">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-16 h-16 rounded-lg bg-[#3d2b1f] border border-white/5 flex items-center justify-center opacity-40 grayscale">
                        <div className="w-8 h-8 rounded bg-[#5c4030]" />
                      </div>
                    ))}
                    {/* The Purple Cow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-xl bg-purple-600 border-2 border-white/20 shadow-[0_0_40px_rgba(147,51,234,0.4)] flex items-center justify-center animate-pulse">
                      <Star className="text-white w-10 h-10 fill-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 text-center w-full">
                    <p className="text-xs text-purple-300 font-mono uppercase tracking-widest">Destaque-se ou Morra</p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="content-section" className="relative z-20 bg-background">
        
        {/* 2. The Problem: TV Industrial Complex */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">O Fim do Complexo TV-Industrial</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Antigamente, você criava produtos médios para pessoas médias e comprava muita publicidade para interrompê-las. Esse modelo morreu. Hoje, a atenção é escassa e o consumidor tem o controle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 opacity-50">
                <h3 className="text-xl font-bold text-gray-400 mb-2 line-through decoration-red-500">Velho Modelo</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Produtos seguros e comuns</li>
                  <li>• Marketing para as massas</li>
                  <li>• Interrupção (Comerciais de TV)</li>
                  <li>• "Muito bom" é o objetivo</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Novo Modelo</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Produtos notáveis (Vaca Roxa)</li>
                  <li>• Marketing para os "Otakus" (Fãs)</li>
                  <li>• Permissão e Boca a Boca</li>
                  <li>• "Seguro" é arriscado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Concepts */}
        <section className="py-12 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* 1. Remarkable */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ser Notável</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Notável significa literalmente: "digno de nota". Algo sobre o qual vale a pena fazer um comentário.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    Se ninguém comenta sobre seu produto, ele é invisível. Não tente agradar a todos, agrade aos extremos.
                  </p>
                </div>
              </div>

              {/* 2. The Otaku */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">O Otaku</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Termo japonês para pessoas com interesses obsessivos. São eles que impulsionam a inovação.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    Encontre o nicho que é obcecado pelo que você faz. Venda para quem está ouvindo.
                  </p>
                </div>
              </div>

              {/* 3. The Sneezer */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Megaphone className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Os "Espirradores"</h3>
                <p className="text-sm text-gray-400 mb-4">
                  São os Early Adopters que espalham a ideia (o vírus) para o resto da população.
                </p>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <p className="text-xs text-gray-300">
                    Seu marketing deve ser desenhado para dar ferramentas aos Espirradores, não para convencer a massa.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. The Curve of Diffusion */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">A Curva de Adoção</h2>
                <p className="text-gray-400 mb-6">
                  A maioria das empresas tenta vender para a "Maioria Inicial" e "Maioria Tardia" (o meio da curva). Isso é um erro fatal.
                </p>
                <p className="text-gray-400 mb-6">
                  A massa ignora você. Eles só compram quando é seguro. Quem você precisa conquistar são os <strong>Inovadores</strong> e os <strong>Adotantes Iniciais</strong>.
                </p>
                <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-purple-300 font-bold">
                    "Não tente mudar a massa. Encontre as pessoas que já estão procurando pelo que você tem e surpreenda-as."
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                {/* Simplified Diffusion Curve */}
                <div className="relative h-64 w-full flex items-end space-x-1">
                  <div className="w-[10%] h-[20%] bg-purple-600 rounded-t flex items-center justify-center text-[8px] text-white font-bold hover:h-[25%] transition-all cursor-help" title="Inovadores (2.5%)">Inov.</div>
                  <div className="w-[15%] h-[40%] bg-purple-500 rounded-t flex items-center justify-center text-[8px] text-white font-bold hover:h-[45%] transition-all cursor-help" title="Adotantes Iniciais (13.5%)">Early</div>
                  <div className="w-[30%] h-[80%] bg-gray-700 rounded-t flex items-center justify-center text-[8px] text-gray-400 font-bold opacity-50">Maioria Inicial</div>
                  <div className="w-[30%] h-[60%] bg-gray-800 rounded-t flex items-center justify-center text-[8px] text-gray-500 font-bold opacity-50">Maioria Tardia</div>
                  <div className="w-[15%] h-[30%] bg-gray-900 rounded-t flex items-center justify-center text-[8px] text-gray-600 font-bold opacity-50">Retardatários</div>
                </div>
                <div className="absolute top-0 right-0 p-2 bg-black/80 text-xs text-gray-400 border border-white/10 rounded">
                  Foque na esquerda da curva!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why Safe is Risky */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
                <AlertTriangle className="text-red-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Por que o "Seguro" é Arriscado</h2>
              <p className="text-xl text-gray-400 mb-12">
                "Em um mercado lotado, não se destacar é o mesmo que ser invisível."
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Eye className="text-gray-500" size={20} />
                    O Medo da Crítica
                  </h4>
                  <p className="text-sm text-gray-400">
                    Se você for notável, é provável que algumas pessoas não gostem. Isso não é um problema, é um sinal de sucesso. O oposto de amor não é ódio, é indiferença.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="text-purple-500" size={20} />
                    O Ciclo da Vaca
                  </h4>
                  <p className="text-sm text-gray-400">
                    Nenhuma Vaca Roxa dura para sempre. Quando ela se torna normal, você precisa ordenhá-la para financiar a criação da próxima Vaca Roxa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Marketing is the Product */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-6">
                  MUDANÇA DE PARADIGMA
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif">
                  O Marketing não é um "Add-on"
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  No velho mundo, engenheiros criavam o produto e marqueteiros criavam a campanha. Na era da Vaca Roxa, <strong>o marketing é embutido no produto</strong>.
                </p>
                <p className="text-gray-400 mb-6">
                  Se o seu produto precisa de muita publicidade para ser vendido, ele provavelmente é uma vaca marrom. Produtos notáveis se vendem sozinhos porque seus usuários não conseguem parar de falar sobre eles.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">A</div>
                    <div>
                      <div className="text-sm font-bold text-white">JetBlue</div>
                      <div className="text-xs text-gray-500">Mudou a experiência de voar, não os anúncios de TV.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center text-green-400 font-bold">B</div>
                    <div>
                      <div className="text-sm font-bold text-white">Starbucks</div>
                      <div className="text-xs text-gray-500">Criou o "terceiro lugar", não apenas café melhor.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full opacity-30" />
                <div className="relative bg-black border border-white/10 rounded-xl p-8 text-center">
                  <div className="text-sm text-gray-500 mb-8 uppercase tracking-widest">A Hierarquia do Valor</div>
                  
                  <div className="space-y-2">
                    <div className="p-4 bg-purple-600 rounded text-white font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] transform scale-105 z-10 relative">
                      DESIGN & INOVAÇÃO (O Produto)
                    </div>
                    <div className="p-4 bg-gray-800 rounded text-gray-400 text-sm scale-95 opacity-80">
                      Distribuição & Logística
                    </div>
                    <div className="p-4 bg-gray-900 rounded text-gray-500 text-xs scale-90 opacity-60">
                      Publicidade & Promoção
                    </div>
                  </div>
                  
                  <p className="mt-8 text-xs text-gray-400">
                    Invista no topo da pirâmide. Faça o produto ser tão bom que a base se torne irrelevante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The "Very Good" Trap */}
        <section className="py-24 bg-[#050505] border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-white font-serif">A Armadilha do "Muito Bom"</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="text-gray-400 text-lg mb-6">
                    "Muito bom" é o que acontece quando você segue todas as regras, ouve todos os conselhos e tenta não ofender ninguém.
                  </p>
                  <p className="text-gray-400">
                    O problema é que "muito bom" é chato. Ninguém atravessa a rua para ver uma vaca "muito boa". Eles atravessam para ver uma vaca roxa.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Ruim</span>
                      <span className="text-gray-500">Notável</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-red-500 via-gray-500 to-purple-500 opacity-50" />
                    </div>
                    <div className="flex justify-center">
                      <div className="px-4 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-white/10">
                        Zona do "Muito Bom" (Morte)
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      É melhor ser terrível do que ser apenas "bom". Pelo menos o terrível gera conversa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Practical Commandments */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white font-serif">Os Mandamentos da Vaca Roxa</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">01</div>
                  <p className="text-gray-300 text-sm">
                    Não seja chato. Seguro é arriscado.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">02</div>
                  <p className="text-gray-300 text-sm">
                    Design rules now. O design não é apenas a aparência, é como funciona.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">03</div>
                  <p className="text-gray-300 text-sm">
                    Mire nos nichos, não nas massas. Seja tudo para alguém, não algo para todos.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">04</div>
                  <p className="text-gray-300 text-sm">
                    Seja o primeiro. Copiar uma Vaca Roxa cria uma Vaca Marrom.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">05</div>
                  <p className="text-gray-300 text-sm">
                    Meça tudo. Se você não pode medir, não pode melhorar.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold text-xl mb-4">06</div>
                  <p className="text-gray-300 text-sm">
                    Tenha a vontade de fazer. A barreira não é técnica, é emocional (medo).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA Final */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Você está sendo notável ou invisível?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Pare de tentar ser perfeito. Comece a tentar ser interessante.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold rounded-full">
              CRIAR MINHA VACA ROXA
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
