import { Calendar, Link as LinkIcon, ExternalLink, Clock, Target, Zap, Layers, Video, Instagram, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';

const sitemapUrls = [
  "https://growth.futuree.org/school-mkt-2026",
  "https://growth.futuree.org/school-mkt-diverge",
  "https://growth.futuree.org/school-mkt-vaca-roxa",
  "https://growth.futuree.org/school-mkt-zig-zag",
  "https://growth.futuree.org/school-mkt-persuasivo",
  "https://growth.futuree.org/school-mkt-1-porcento",
  "https://growth.futuree.org/school-mkt-ai-generativa",
  "https://growth.futuree.org/school-mkt-hype-cycle-gartner-2025",
  "https://growth.futuree.org/school-mkt-ai-vertical",
  "https://growth.futuree.org/school-mkt-bolha-ia",
  "https://growth.futuree.org/school-mkt-one",
  "https://growth.futuree.org/school-mkt-founder-mode",
  "https://growth.futuree.org/school-mkt-MicroSaaS",
  "https://growth.futuree.org/school-mkt-PLG",
  "https://growth.futuree.org/school-mkt-demand-b2b",
  "https://growth.futuree.org/school-mkt-info-saas",
  "https://growth.futuree.org/school-mkt-yt-longo",
  "https://growth.futuree.org/school-mkt-autenticidade",
  "https://growth.futuree.org/school-mkt-alavanca",
  "https://growth.futuree.org/school-mkt-injusta",
  "https://growth.futuree.org/school-mkt-1-1m",
  "https://growth.futuree.org/school-mkt-commodity",
  "https://growth.futuree.org/school-mkt-Vibe"
];

const editorialCalendar = [
  {
    month: "Mês 1: Fundamentos e Mindset (A Nova Era)",
    description: "O objetivo é quebrar crenças limitantes e estabelecer a nova filosofia de mercado.",
    weeks: [
      {
        week: "Semana 01 (05/01 - 11/01)",
        title: "O Grande Reset",
        themeA: { title: "A Grande Divergência: O que muda em 2026", slug: "school-mkt-2026" },
        themeB: { title: "Divergir ou Morrer: A estratégia de sobrevivência", slug: "school-mkt-diverge" }
      },
      {
        week: "Semana 02 (12/01 - 18/01)",
        title: "Diferenciação Radical",
        themeA: { title: "Vaca Roxa: Por que o \"Muito Bom\" é inimigo do ótimo", slug: "school-mkt-vaca-roxa" },
        themeB: { title: "Zig Zag: Quando todos fazem Zig, você faz Zag", slug: "school-mkt-zig-zag" }
      },
      {
        week: "Semana 03 (19/01 - 25/01)",
        title: "Psicologia e Alta Performance",
        themeA: { title: "Os 6 Atalhos da Persuasão + Pre-suasão", slug: "school-mkt-persuasivo" },
        themeB: { title: "Hábitos Atômicos: A regra do 1% melhor todo dia", slug: "school-mkt-1-porcento" }
      },
      {
        week: "Semana 04 (26/01 - 01/02)",
        title: "A Revolução da IA",
        themeA: { title: "Como a IA Generativa zera o custo de criação", slug: "school-mkt-ai-generativa" },
        themeB: { title: "O Futuro segundo o Gartner: O que é Hype e o que é Real", slug: "school-mkt-hype-cycle-gartner-2025" }
      }
    ]
  },
  {
    month: "Mês 2: Modelos de Negócio e Tecnologia",
    description: "Foco em como estruturar empresas modernas, enxutas e tecnológicas.",
    weeks: [
      {
        week: "Semana 05 (02/02 - 08/02)",
        title: "Profundidade em IA",
        themeA: { title: "Agentes de IA Verticais: O fim do SaaS genérico", slug: "school-mkt-ai-vertical" },
        themeB: { title: "A Bolha da IA: Quem vai sobreviver ao estouro?", slug: "school-mkt-bolha-ia" }
      },
      {
        week: "Semana 06 (09/02 - 15/02)",
        title: "O Empreendedor Solo",
        themeA: { title: "One-Person Business: Faturando milhões sozinho", slug: "school-mkt-one" },
        themeB: { title: "Founder Mode: Gerenciando como Steve Jobs, não como um MBA", slug: "school-mkt-founder-mode" }
      },
      {
        week: "Semana 07 (16/02 - 22/02)",
        title: "A Nova Economia de Software",
        themeA: { title: "MicroSaaS: Resolvendo problemas pequenos e lucrativos", slug: "school-mkt-MicroSaaS" },
        themeB: { title: "Product-Led Growth: O produto que se vende sozinho", slug: "school-mkt-PLG" }
      },
      {
        week: "Semana 08 (23/02 - 01/03)",
        title: "B2B e Transição de Carreira",
        themeA: { title: "Geração de Demanda B2B sem Cold Call chato", slug: "school-mkt-demand-b2b" },
        themeB: { title: "De Infoprodutor para Dono de Software", slug: "school-mkt-info-saas" }
      }
    ]
  },
  {
    month: "Mês 3: Crescimento, Conteúdo e Escala",
    description: "Táticas práticas para alavancar o negócio estruturado nos meses anteriores.",
    weeks: [
      {
        week: "Semana 09 (02/03 - 08/03)",
        title: "A Guerra da Atenção",
        themeA: { title: "YouTube Longo: O novo ativo de confiança", slug: "school-mkt-yt-longo" },
        themeB: { title: "Autenticidade Radical: A única coisa que a IA não copia", slug: "school-mkt-autenticidade" }
      },
      {
        week: "Semana 10 (09/03 - 15/03)",
        title: "Alavancagem",
        themeA: { title: "As 4 Alavancas de Naval Ravikant: Código e Mídia", slug: "school-mkt-alavanca" },
        themeB: { title: "Vantagem Injusta: Descobrindo seu superpoder", slug: "school-mkt-injusta" }
      },
      {
        week: "Semana 11 (16/03 - 22/03)",
        title: "Jornada de Escala",
        themeA: { title: "O Mapa de 0 a 1 Milhão: Fases e armadilhas", slug: "school-mkt-1-1m" },
        themeB: { title: "Fugindo da Commoditização: Como cobrar mais caro", slug: "school-mkt-commodity" }
      },
      {
        week: "Semana 12 (23/03 - 29/03)",
        title: "Cultura e Futuro",
        themeA: { title: "Vibe Economy: Vendendo sentimentos e tribos", slug: "school-mkt-Vibe" },
        themeB: { title: "Recap / Aula Magna de Encerramento do Trimestre", slug: "" }
      }
    ]
  }
];

const DashEditorial2026 = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>Planejamento Estratégico Q1 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Editorial Roadmap 2026
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            O mapa completo da nossa jornada de conteúdo para o primeiro trimestre.
            Fundamentos, Modelos de Negócio e Escala.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Total de Temas</span>
            </div>
            <p className="text-3xl font-bold text-white">23</p>
            <p className="text-xs text-gray-500 mt-1">Tópicos mapeados</p>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Vídeos Longos</span>
            </div>
            <p className="text-3xl font-bold text-white">24</p>
            <p className="text-xs text-gray-500 mt-1">2 por semana</p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Reels / Shorts</span>
            </div>
            <p className="text-3xl font-bold text-white">72</p>
            <p className="text-xs text-gray-500 mt-1">6 por semana</p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-gray-400 text-sm font-medium">Duração</span>
            </div>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-xs text-gray-500 mt-1">Semanas de conteúdo</p>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
            <h3 className="text-xl font-bold text-white mb-2">Mês 1: Mindset</h3>
            <p className="text-gray-400 text-sm mb-4">Quebra de crenças e nova filosofia.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Divergência</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Persuasão</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">IA Generativa</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>
            <h3 className="text-xl font-bold text-white mb-2">Mês 2: Business</h3>
            <p className="text-gray-400 text-sm mb-4">Modelos de negócio e tecnologia.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">MicroSaaS</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Founder Mode</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">B2B</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-green-500/20"></div>
            <h3 className="text-xl font-bold text-white mb-2">Mês 3: Scale</h3>
            <p className="text-gray-400 text-sm mb-4">Crescimento, conteúdo e escala.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">YouTube</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Alavancagem</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Vibe Economy</span>
            </div>
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <LinkIcon className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Sitemap & URLs Mapeadas</h2>
            </div>
            <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sitemapUrls.map((url, index) => (
                <a 
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-purple-900/10 border border-transparent hover:border-purple-500/20 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-gray-200 truncate font-mono">
                    {url.replace('https://growth.futuree.org', '')}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Linha Editorial Q1 2026</h2>
          </div>

          <div className="space-y-12">
            {editorialCalendar.map((month, mIndex) => (
              <div key={mIndex} className="relative">
                <div className="sticky top-24 z-10 bg-black/90 backdrop-blur-sm py-4 border-b border-gray-800 mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-1">{month.month}</h3>
                    <p className="text-gray-400 text-sm">{month.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                      4 Semanas
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {month.weeks.map((week, wIndex) => (
                    <div key={wIndex} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-purple-400 bg-purple-900/20 px-2 py-1 rounded">
                          {week.week}
                        </span>
                        <Zap className="w-4 h-4 text-gray-600 group-hover:text-yellow-500 transition-colors" />
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-6">{week.title}</h4>
                      
                      <div className="space-y-4">
                        {/* Theme A */}
                        <div className="relative pl-4 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                            Seg - Qua (Tema A)
                          </span>
                          <p className="text-sm text-gray-300 font-medium mb-1">{week.themeA.title}</p>
                          <code className="text-xs text-gray-500 font-mono block">/{week.themeA.slug}</code>
                        </div>

                        {/* Theme B */}
                        <div className="relative pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors">
                          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-purple-500"></div>
                          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block mb-1">
                            Qui - Dom (Tema B)
                          </span>
                          <p className="text-sm text-gray-300 font-medium mb-1">{week.themeB.title}</p>
                          {week.themeB.slug && (
                            <code className="text-xs text-gray-500 font-mono block">/{week.themeB.slug}</code>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Estrutura de Produção Semanal</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <span className="text-blue-400 font-medium block mb-1">Tema A (Segunda a Quarta)</span>
                <p className="text-sm text-gray-400">1 Vídeo Longo (YouTube) + 3 Reels (Cortes/Hooks)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <span className="text-purple-400 font-medium block mb-1">Tema B (Quinta a Domingo)</span>
                <p className="text-sm text-gray-400">1 Vídeo Longo (YouTube) + 3 Reels (Cortes/Hooks)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default DashEditorial2026;
