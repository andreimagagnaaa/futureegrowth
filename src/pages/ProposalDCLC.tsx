import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { Scale, Shield, Search, Linkedin, ArrowRight, Building2, Users, Lock, Globe, CheckCircle2, Target } from 'lucide-react';
import { Button } from '../components/Button';

export const ProposalDCLC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('proposal-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-slate-500/30 selection:text-slate-200">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0B0F19]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-300 text-[10px] font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
                </span>
                PLANO ESTRATÉGICO 2025
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white font-serif">
                DCLC <span className="text-slate-500 font-sans">|</span> Futuree
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Construindo um motor de aquisição B2B <br/>
                <span className="text-slate-300 font-medium">Sóbrio, Ético e de Alta Performance.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button onClick={scrollToContent} size="lg" className="bg-slate-700 text-white hover:bg-slate-600 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(71,85,105,0.2)] hover:shadow-[0_0_30px_rgba(71,85,105,0.4)] transition-all w-full sm:w-auto">
                  VER ESTRATÉGIA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="proposal-content">
        {/* 2. Diagnosis */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Diagnóstico Atual</h2>
              <p className="text-lg text-gray-400">
                O escritório possui um site profissional e reputação sólida, mas depende exclusivamente de indicações.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-sm bg-slate-900/50 border border-slate-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Lock className="text-slate-400" />
                  O Dilema da Boutique
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  "Não temos um produto de prateleira. Vendemos o escritório, o intelecto e a reputação."
                </p>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Não concorremos com "varejo jurídico" ou preço.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Venda complexa, consultiva e de alto ticket.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Restrições éticas: não podemos fazer "propaganda".</li>
                </ul>
              </div>

              <div className="p-8 rounded-sm bg-slate-900/50 border border-slate-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="text-slate-400" />
                  A Estratégia Sob Medida
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Ao invés de vender serviços, vendemos autoridade e confiança para quem já busca excelência.
                </p>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Posicionamento de autoridade para decisores (C-Level).</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Estar presente onde o "Varejo Jurídico" não está: na exclusividade.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2" /> Marketing de Conteúdo Técnico vs. Marketing de Massa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OAB Compliance */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#131825] border border-slate-500/20 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Scale size={120} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-3">
                <Shield className="text-slate-400" />
                Conformidade & Ética (OAB)
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Nossa abordagem é 100% informativa e sóbria. Não fazemos "propaganda", fazemos <strong>Marketing Jurídico de Conteúdo</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-300">Foco em artigos técnicos e informativos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-300">Sem promessas de resultado ou mercantilização.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-300">Presença institucional sólida.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-300">Troca voluntária de valor (Conteúdo por Atenção).</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Strategy & Channels */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Estratégia: Visibilidade para Decisores</h2>
              <p className="text-gray-400">Colocar o DCLC na frente de quem assina o cheque.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              <div className="bg-[#0B0F19] p-8 border border-white/5 hover:border-slate-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                  <Linkedin size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. LinkedIn Ads</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Segmentação cirúrgica por cargo (CEO, CFO, Dir. Jurídico) e setor.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                  <li className="flex gap-2">✓ Message Ads (Mensagem Direta)</li>
                  <li className="flex gap-2">✓ Lead Gen Forms (Captura)</li>
                </ul>
              </div>

              <div className="bg-[#0B0F19] p-8 border border-white/5 hover:border-slate-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center mb-6 text-orange-400">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Google Ads</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Captura de intenção ativa. Aparecer quando buscam sua especialidade.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                  <li className="flex gap-2">✓ Rede de Pesquisa (Search)</li>
                  <li className="flex gap-2">✓ Palavras-chave de fundo de funil</li>
                </ul>
              </div>

              <div className="bg-[#0B0F19] p-8 border border-white/5 hover:border-slate-500/30 transition-all group">
                <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Automação & CRM</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Não basta gerar o lead, é preciso nutrir e qualificar.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                  <li className="flex gap-2">✓ Nutrição por E-mail</li>
                  <li className="flex gap-2">✓ Gestão de Pipeline</li>
                </ul>
              </div>
            </div>

            {/* Exemplos de Posicionamento */}
            <div className="max-w-5xl mx-auto bg-[#131825] border border-slate-500/20 rounded-sm p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center font-serif">Na Prática: A Diferença de Abordagem</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 opacity-50 grayscale">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    O que evitamos (Varejo)
                  </div>
                  <div className="bg-white p-4 rounded text-black text-sm font-sans border-l-4 border-red-500">
                    <p className="font-bold mb-2">Advogado Trabalhista SP</p>
                    <p className="text-gray-600 mb-2">Processos rápidos e baratos. Entre em contato agora e tire suas dúvidas. Atendemos 24h.</p>
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 inline-block rounded">Fale Conosco</div>
                  </div>
                  <p className="text-xs text-gray-500 text-center">Foco em preço e urgência. Atrai leads desqualificados.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-wider">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Nossa Abordagem (Boutique)
                  </div>
                  <div className="bg-[#0B0F19] p-6 rounded border border-slate-500/30 text-white text-sm font-serif border-l-4 border-slate-400 shadow-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                      <div>
                        <p className="font-bold text-xs">DCLC Advogados</p>
                        <p className="text-[10px] text-gray-400">Assessoria Jurídica Estratégica</p>
                      </div>
                    </div>
                    <p className="mb-3 leading-relaxed text-gray-300">
                      "A complexidade tributária não deve ser um freio para a expansão. Nossa análise sobre a nova reforma destaca oportunidades de eficiência fiscal para holdings familiares."
                    </p>
                    <div className="bg-slate-700/50 text-slate-200 text-xs px-3 py-2 inline-block rounded border border-slate-600">Ler Análise Completa</div>
                  </div>
                  <p className="text-xs text-gray-400 text-center">Foco em autoridade e intelecto. Atrai decisores.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ICP */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-white font-serif">Perfil do Cliente Ideal (ICP)</h2>
                <p className="text-gray-400 mb-8">
                  Não atiramos para todo lado. Focamos em empresas com maturidade e orçamento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[#131825] border border-white/5 rounded-lg">
                    <Building2 className="text-slate-400" />
                    <div>
                      <div className="text-white font-bold">Empresas</div>
                      <div className="text-sm text-gray-500">Médio/Grande porte (50+ func), Faturamento &gt; R$ 10M/ano</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#131825] border border-white/5 rounded-lg">
                    <Users className="text-slate-400" />
                    <div>
                      <div className="text-white font-bold">Decisores</div>
                      <div className="text-sm text-gray-500">CEO, CFO, Diretor Jurídico, Gerente de Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#131825] border border-white/5 rounded-lg">
                    <Globe className="text-slate-400" />
                    <div>
                      <div className="text-white font-bold">Geografia</div>
                      <div className="text-sm text-gray-500">Foco inicial em SP, RJ, MG, RS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/20 to-transparent blur-3xl rounded-full" />
                <div className="relative bg-[#0F131F] border border-slate-500/20 p-8 rounded-sm">
                  <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">Dores que Resolvemos</h3>
                  <ul className="space-y-3">
                    {["Conformidade & Compliance", "Gestão de Riscos", "Litígios Complexos", "Questões Trabalhistas Estratégicas"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Investment Plans */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white font-serif">Planos de Investimento</h2>
              <p className="text-gray-400">Opções escaláveis para iniciar a operação digital.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential */}
              <div className="bg-[#0B0F19] border border-white/5 p-8 rounded-sm flex flex-col hover:border-slate-500/30 transition-all">
                <div className="mb-4 text-slate-400 font-bold tracking-widest text-sm">ESSENCIAL</div>
                <div className="text-3xl font-bold text-white mb-2">R$ 2.200<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <div className="text-xs text-gray-500 mb-8">+ Mídia sugerida: R$ 1.300</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Gestão LinkedIn + Google Ads</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> CRM + Automação Básica</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> 1 Landing Page</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Relatório Mensal</li>
                </ul>
                <Button variant="outline" className="w-full border-slate-500/30 hover:bg-slate-500/10">Selecionar</Button>
              </div>

              {/* Advanced */}
              <div className="bg-[#131825] border border-slate-500/50 p-8 rounded-sm flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-slate-900/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-500 text-white text-[10px] font-bold px-3 py-1 rounded-b-lg tracking-widest">RECOMENDADO</div>
                <div className="mb-4 text-slate-300 font-bold tracking-widest text-sm mt-2">AVANÇADO</div>
                <div className="text-3xl font-bold text-white mb-2">R$ 2.900<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <div className="text-xs text-gray-500 mb-8">+ Mídia sugerida: R$ 2.000</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-white font-medium"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Tudo do Essencial</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Google Display + Remarketing</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> 2 E-books/Guias (semestral)</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Automação Avançada</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Relatório Quinzenal</li>
                </ul>
                <Button className="w-full bg-slate-600 hover:bg-slate-500 text-white">Selecionar</Button>
              </div>

              {/* Premium */}
              <div className="bg-[#0B0F19] border border-white/5 p-8 rounded-sm flex flex-col hover:border-slate-500/30 transition-all">
                <div className="mb-4 text-slate-400 font-bold tracking-widest text-sm">PREMIUM</div>
                <div className="text-3xl font-bold text-white mb-2">R$ 3.500<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <div className="text-xs text-gray-500 mb-8">+ Mídia sugerida: R$ 3.000</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Tudo do Avançado</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> 8 Posts LinkedIn (Ghostwriting)</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> 2 Artigos Blog (SEO)</li>
                  <li className="flex gap-3 text-sm text-gray-300"><CheckCircle2 size={16} className="text-slate-500 shrink-0" /> Relatório Semanal</li>
                </ul>
                <Button variant="outline" className="w-full border-slate-500/30 hover:bg-slate-500/10">Selecionar</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ROI Projection */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white font-serif">Projeção de ROI (6 Meses)</h2>
              <p className="text-center text-gray-400 mb-12 -mt-8">Baseado em ticket médio conservador de R$ 50k</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { plan: "Essencial", invest: "21.000", return: "100.000", roi: "376%", clients: "2" },
                  { plan: "Avançado", invest: "29.400", return: "150.000", roi: "510%", clients: "3", highlight: true },
                  { plan: "Premium", invest: "39.000", return: "300.000", roi: "769%", clients: "6" }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-sm border ${item.highlight ? 'bg-[#131825] border-slate-500/50' : 'bg-[#0F131F] border-white/5'} text-center`}>
                    <div className="text-sm text-slate-400 mb-4 font-bold uppercase">{item.plan}</div>
                    <div className="text-3xl font-bold text-white mb-1">{item.roi}</div>
                    <div className="text-xs text-green-400 mb-6">ROI Estimado</div>
                    
                    <div className="space-y-2 text-sm border-t border-white/5 pt-4">
                      <div className="flex justify-between text-gray-400">
                        <span>Investimento:</span>
                        <span>R$ {item.invest}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold">
                        <span>Retorno:</span>
                        <span>R$ {item.return}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">({item.clients} clientes fechados)</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Timeline */}
        <section className="py-24 bg-[#0F131F] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white font-serif">Cronograma de Implementação</h2>
              
              <div className="space-y-8">
                {[
                  { time: "Mês 1", title: "Imersão & Diagnóstico", desc: "Entendimento profundo da cultura 'Boutique' do DCLC. Definição das teses jurídicas de alto valor e configuração técnica." },
                  { time: "Mês 2", title: "Construção de Autoridade", desc: "Início da distribuição de conteúdo técnico para C-Levels. Campanhas de 'Awareness' (Consciência) no LinkedIn." },
                  { time: "Mês 3", title: "Aproximação Qualificada", desc: "Ativação de campanhas de conversão (Message Ads) para decisores específicos. Início das reuniões de qualificação." },
                  { time: "Mês 4", title: "Refinamento do Discurso", desc: "Análise qualitativa dos leads. Ajuste fino na comunicação para atrair apenas o perfil 'Boutique' e afastar o 'Varejo'." },
                  { time: "Mês 5", title: "Consolidação da Presença", desc: "O DCLC se torna referência top-of-mind para o nicho selecionado. Nutrição automática de leads de longo prazo." },
                  { time: "Mês 6", title: "Review Estratégico", desc: "Análise de ROI e impacto na marca. Planejamento da expansão para novas áreas de prática." }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                    {/* Linha conectora (apenas desktop) */}
                    {i !== 5 && (
                      <div className="hidden md:block absolute left-[100px] top-12 bottom-[-32px] w-0.5 bg-slate-500/20" />
                    )}
                    
                    <div className="md:w-[100px] shrink-0 flex md:flex-col items-center md:items-end gap-4 md:gap-2">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{step.time}</div>
                      <div className="w-3 h-3 rounded-full bg-slate-500 border-2 border-[#0F131F] relative z-10 hidden md:block" />
                    </div>
                    
                    <div className="flex-1 pb-8 border-b border-white/5 md:border-none">
                      <h3 className="text-xl font-bold text-white mb-2 font-serif">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Next Steps */}
        <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-white font-serif">Próximos Passos</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { step: "1", title: "Aprovação", desc: "Aceite formal deste Plano Estratégico." },
                { step: "2", title: "Formalização", desc: "Assinatura do contrato digital." },
                { step: "3", title: "Onboarding", desc: "Reunião de Kick-off para início imediato." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 border border-slate-500/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#131825] p-12 rounded-sm border border-slate-500/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Prontos para construir o futuro digital do DCLC?</h3>
              <p className="text-gray-400 mb-8">Estamos à disposição para discutir esta proposta e iniciar esta parceria de sucesso.</p>
              <Button onClick={() => window.open('http://wa.me/5551993569285', '_blank')} size="lg" className="bg-slate-200 hover:bg-white text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg shadow-slate-500/10">
                FALAR COM CONSULTOR
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
