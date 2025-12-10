import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, Heart, Eye, ArrowRight, CheckCircle2, AlertTriangle, Users, Zap } from 'lucide-react';
import { Button } from '../components/Button';

export const School = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ESTRATÉGIA DE CONTEÚDO MULTICANAL
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Marketing Digital 2026: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                A Grande Divergência
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              O que é automatizável virou commodity. O que é humano virou luxo premium. 
              E no meio? Extinção. Bem-vindo à nova era do mercado digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction / The Thesis */}
      <section className="py-20 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">A Tese Central</h2>
                <p className="text-gray-300 mb-4 text-lg">
                  Estamos vivendo "A Grande Divergência". O mercado se dividiu em dois extremos claros, e o meio-termo se tornou uma zona de extinção.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                      <Bot size={20} />
                    </div>
                    <div>
                      <strong className="block text-white">Automatizável = Commodity</strong>
                      <span className="text-gray-400">Custo tende a zero. Eficiência máxima.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 mt-1">
                      <Heart size={20} />
                    </div>
                    <div>
                      <strong className="block text-white">Humano = Premium</strong>
                      <span className="text-gray-400">Valor tende ao infinito. Conexão real.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <strong className="block text-white">O Meio-Termo = Extinção</strong>
                      <span className="text-gray-400">Onde a maioria das empresas está morrendo hoje.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-3xl rounded-full" />
                <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex justify-between items-end h-64 gap-4">
                    <div className="w-1/3 bg-blue-500/20 border border-blue-500/50 rounded-t-lg h-full relative group">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="block text-2xl font-bold text-blue-400">IA</span>
                        <span className="text-xs text-blue-300">Automação</span>
                      </div>
                    </div>
                    <div className="w-1/3 bg-red-500/10 border-t border-dashed border-red-500/30 h-1/4 relative">
                      <div className="absolute -top-8 left-0 right-0 text-center">
                        <span className="text-xs text-red-400 font-mono">ZONA DE EXTINÇÃO</span>
                      </div>
                    </div>
                    <div className="w-1/3 bg-orange-500/20 border border-orange-500/50 rounded-t-lg h-full relative">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="block text-2xl font-bold text-orange-400">Humano</span>
                        <span className="text-xs text-orange-300">Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axis 1 */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-white/5">01</span>
              <h2 className="text-3xl font-bold">A Morte do Intermediário</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="text-gray-400" />
                  Antes
                </h3>
                <p className="text-gray-400 mb-4">Complexidade técnica = barreira de entrada = proteção de mercado.</p>
                <div className="text-sm text-gray-500">
                  Agência tradicional: 50 pessoas, overhead alto.
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <Zap className="text-primary" />
                  Agora (One-Person Business)
                </h3>
                <p className="text-gray-300 mb-4">IA demoliu a barreira técnica. Operações de R$ 1 milhão/mês geridas por 1 pessoa.</p>
                <div className="text-sm text-gray-400">
                  1 pessoa + 20 agentes IA, custo marginal zero.
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-8 border border-white/5">
              <h4 className="text-lg font-semibold mb-4 text-white">Profissões em Risco vs. Nova Classe</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-2 text-gray-400">
                  <li className="text-red-400 font-medium mb-2">⚠️ Em Risco</li>
                  <li>• Desenvolvedor front-end (6-12 meses)</li>
                  <li>• Gestor de tráfego tradicional</li>
                  <li>• Quem apenas "aperta botões"</li>
                </ul>
                <ul className="space-y-2 text-gray-400">
                  <li className="text-green-400 font-medium mb-2">🚀 Emergentes</li>
                  <li>• "Gerente de Agentes"</li>
                  <li>• "Orquestrador de IA"</li>
                  <li>• Estrategistas Criativos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axis 2 */}
      <section className="py-20 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-white/5">02</span>
              <h2 className="text-3xl font-bold">Polarização Econômica</h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              O fim do preço médio. Não há mais espaço para produtos "mornos".
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <div className="text-green-400 font-bold text-lg mb-2">Low Ticket</div>
                <div className="text-2xl font-bold text-white mb-4">R$ 97 - 200</div>
                <div className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded mb-4">✅ Crescimento</div>
                <p className="text-sm text-gray-400">Volume massivo, impulso, CAC zero. Serve para capturar leads e filtrar curiosos.</p>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5 diagonal-stripes opacity-20"></div>
                <div className="text-red-400 font-bold text-lg mb-2">Mid Ticket</div>
                <div className="text-2xl font-bold text-white mb-4">R$ 500 - 2k</div>
                <div className="inline-block px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded mb-4">❌ Zona da Morte</div>
                <p className="text-sm text-gray-400">Caro para impulso, barato para premium. Margem destruída pelo aumento do CPM.</p>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
                <div className="text-purple-400 font-bold text-lg mb-2">High Ticket</div>
                <div className="text-2xl font-bold text-white mb-4">R$ 30k+</div>
                <div className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded mb-4">✅ Boom</div>
                <p className="text-sm text-gray-400">Margem real, exclusividade, proximidade. Comunidade e mentorias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axis 3 */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-white/5">03</span>
              <h2 className="text-3xl font-bold">O Paradoxo da Autenticidade</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-300 mb-8 text-center italic">
                "Quanto mais a IA gera conteúdo perfeito, mais valioso se torna o humano imperfeito."
              </blockquote>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">A Virada Contraintuitiva</h4>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-primary shrink-0" />
                      <span>Nike: vídeo amador de fã superou campanha milionária.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-primary shrink-0" />
                      <span>B2B Brasileiro: mostrar bastidores aumentou leads em 450%.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-primary shrink-0" />
                      <span>Consultor: vender "paz" reduziu CAC de R$ 2.100 para R$ 380.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Autenticidade Radical</h4>
                  <p className="text-gray-400 mb-4">
                    Pessoas confiam em pessoas, não em logos 3D. A única saída contra influenciadores sintéticos perfeitos é ser visceralmente humano.
                  </p>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="block text-sm text-gray-500 mb-1">Nova Promessa</span>
                    <span className="text-white font-medium">De "Fique milionário em 90 dias" para "Durma tranquilo, contas pagas, sem ansiedade".</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axis 4 */}
      <section className="py-20 border-t border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-white/5">04</span>
              <h2 className="text-3xl font-bold">Propriedade de Atenção</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-red-500" />
                  YouTube Longo (30+ min)
                </h3>
                <p className="text-gray-400 mb-4">
                  O renascimento contraintuitivo. O YouTube substituiu a TV linear na sala de estar.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Cria relacionamento "para-social"</li>
                  <li>• Gera conversão de longo prazo</li>
                  <li>• 80% do tráfego vem de recomendação, não busca</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Eye className="text-blue-500" />
                  First-Party Data
                </h3>
                <p className="text-gray-400 mb-4">
                  Dependência de audiência alugada é vulnerabilidade crítica.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Email, WhatsApp, CRM = Apólice de seguro</li>
                  <li>• CPM em canais próprios = Virtualmente zero</li>
                  <li>• Retail Media como gigante silencioso</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthesis Framework */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-black border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Framework da Divergência</h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              {/* Left Pillar */}
              <div className="flex-1 w-full bg-blue-950/30 border border-blue-500/30 p-6 rounded-2xl text-center">
                <div className="text-blue-400 font-bold text-xl mb-2">EXTREMO 1: AUTOMAÇÃO</div>
                <ul className="text-sm text-blue-200/70 space-y-2">
                  <li>Agentes IA (90% operação)</li>
                  <li>Custo marginal → zero</li>
                  <li>Escalabilidade exponencial</li>
                </ul>
              </div>

              {/* Center Divider */}
              <div className="flex flex-col items-center gap-2 z-10">
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-bold tracking-wider">
                  MEIO-TERMO = EXTINÇÃO
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>

              {/* Right Pillar */}
              <div className="flex-1 w-full bg-orange-950/30 border border-orange-500/30 p-6 rounded-2xl text-center">
                <div className="text-orange-400 font-bold text-xl mb-2">EXTREMO 2: HUMANIDADE</div>
                <ul className="text-sm text-orange-200/70 space-y-2">
                  <li>Autenticidade radical</li>
                  <li>Comunidade como produto</li>
                  <li>Valor premium infinito</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-6">Os 3 Pilares Inegociáveis</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <strong className="block text-white mb-1">Tecnologia Humanizada</strong>
                  <span className="text-xs text-gray-400">IA nos bastidores, humano na frente.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <strong className="block text-white mb-1">Autenticidade Radical</strong>
                  <span className="text-xs text-gray-400">Imperfeição como selo de verdade.</span>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <strong className="block text-white mb-1">Comunidade como Produto</strong>
                  <span className="text-xs text-gray-400">Pertencimento {'>'} Transação.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Area */}
      <section className="py-20 border-t border-white/5 bg-white/5 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Futuree Business School</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A Grande Divergência não é sobre tecnologia. É sobre escolha.
            Você vai automatizar a eficiência e humanizar a conexão? Ou vai tentar competir no meio e desaparecer?
          </p>
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90">
            Acessar Frameworks de Implementação
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
