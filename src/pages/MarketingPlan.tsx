import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Target, 
  FileText, 
  Compass,
  Layers,
  Cpu
} from 'lucide-react';
import { Accordion, AccordionItem } from '../components/Accordion';

export const MarketingPlan = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Plano de Crescimento Acelerado
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
                Pare de <span className="text-gray-500 italic">chutar</span>. <br />
                Comece a <span className="text-primary">escalar</span>.
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Um plano tático, financeiro e operacional para levar sua empresa ao próximo nível de faturamento. Sem termos complexos. Apenas o que funciona.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4 sm:mt-0">
                  *Vagas limitadas por mês
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem: Gambling vs Engineering */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                A maioria das empresas não tem um plano. <br />
                <span className="text-red-500">Elas têm esperança.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                Você acorda, olha para o Gerenciador de Anúncios, posta um story, manda um e-mail e <i>espera</i> que as vendas aconteçam. Isso não é estratégia. Isso é jogo de azar.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                O <strong>Plano Futuree</strong> substitui a esperança por previsibilidade. Transformamos metas financeiras em tarefas diárias claras para sua equipe.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-red-200 mb-1">Marketing de Palco</h4>
                    <p className="text-sm text-gray-500">PDFs bonitos de 50 páginas que ninguém lê e não geram R$ 1 de receita.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-primary mb-1">Crescimento Real</h4>
                    <p className="text-sm text-gray-500">Planilhas, processos, scripts e indicadores. O que fazer, como fazer e quando fazer.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] rounded-full opacity-30" />
              <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="space-y-8">
                  {[
                    { label: "Clareza Estratégica", val: 15, target: 100 },
                    { label: "Previsibilidade de Receita", val: 25, target: 100 },
                    { label: "Processos Definidos", val: 10, target: 100 }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-red-400">{stat.val}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-red-500/50"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-500 italic">
                      "O custo da ignorância é maior que o preço do planejamento."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section (New) */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Por que somos diferentes?</h2>
            <p className="text-gray-400">Não somos uma agência tradicional. Somos parceiros de negócio.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-gray-500 font-normal">Critério</th>
                  <th className="p-4 text-gray-500 font-normal">Agência Tradicional</th>
                  <th className="p-4 text-primary font-bold bg-primary/5 rounded-t-lg">Futuree Growth</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white font-medium">Foco Principal</td>
                  <td className="p-4 text-gray-400">Likes, Seguidores e Posts</td>
                  <td className="p-4 text-white bg-primary/5">Vendas, Lucro e ROI</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white font-medium">Entregável</td>
                  <td className="p-4 text-gray-400">Artes bonitas para Instagram</td>
                  <td className="p-4 text-white bg-primary/5">Processos de Vendas e Estratégia</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white font-medium">Relatórios</td>
                  <td className="p-4 text-gray-400">Métricas de vaidade (alcance)</td>
                  <td className="p-4 text-white bg-primary/5">Métricas financeiras (CAC, LTV)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white font-medium">Equipe</td>
                  <td className="p-4 text-gray-400">Designers júnior</td>
                  <td className="p-4 text-white bg-primary/5">Estrategistas de Negócio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Nossa Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6">Os 4 Pilares do Plano</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Não entregamos apenas "ideias". Entregamos um sistema completo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Compass,
                title: "1. Diagnóstico",
                desc: "Mergulhamos nos seus dados atuais. Identificamos onde você está perdendo dinheiro hoje."
              },
              {
                icon: Target,
                title: "2. Meta Clara",
                desc: "Definimos onde queremos chegar financeiramente e criamos o caminho reverso até lá."
              },
              {
                icon: Layers,
                title: "3. Canais de Venda",
                desc: "Definimos quais canais (Google, Instagram, LinkedIn) vão trazer os clientes certos."
              },
              {
                icon: Cpu,
                title: "4. Manual de Execução",
                desc: "O passo a passo para sua equipe. Quem faz o quê, quando e como. Sem dúvidas."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section (New) */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Cronograma de Entrega</h2>
            <p className="text-gray-400">Em 4 semanas, você terá o controle total do seu crescimento.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { week: "Semana 1", title: "Imersão", desc: "Entrevistas com sócios, análise de dados e auditoria de contas." },
              { week: "Semana 2", title: "Estratégia", desc: "Definição de posicionamento, ofertas e modelagem financeira." },
              { week: "Semana 3", title: "Tático", desc: "Criação de funis, scripts de vendas e calendário editorial." },
              { week: "Semana 4", title: "Entrega", desc: "Apresentação do plano final e treinamento da equipe." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 border-l-2 border-primary/30 pl-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{item.week}</span>
                <h3 className="text-xl font-serif font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for Section (New) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Para quem é este plano?</h2>
              <div className="space-y-4">
                {[
                  "Empresas que já faturam e querem escalar com lucro.",
                  "Negócios que dependem de indicação e querem previsibilidade.",
                  "Gestores cansados de agências que só entregam 'posts'.",
                  "Empresários que querem profissionalizar o setor comercial."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-xl font-serif font-medium text-white mb-4">Para quem NÃO é:</h3>
              <div className="space-y-4">
                {[
                  "Quem procura fórmulas mágicas de enriquecimento rápido.",
                  "Quem não tem produto ou serviço validado.",
                  "Quem não está disposto a investir em tráfego ou ferramentas.",
                  "Quem acha que marketing é apenas 'fazer artes bonitas'."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Deliverables - Detailed */}
      <section className="py-24 bg-gradient-radial-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
                  O que você recebe em mãos?
                </h2>
                <div className="space-y-6">
                  {[
                    "Mapa Estratégico Visual (Onde vamos atacar)",
                    "Planilha de Projeção Financeira (Metas claras)",
                    "Cronograma de Implementação de 90 Dias",
                    "Scripts de Vendas e Modelos de Mensagem",
                    "Estrutura de Campanhas de Anúncios",
                    "Definição de Indicadores de Sucesso (KPIs)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Ver Exemplo de Entregável
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-[80px] opacity-40" />
                <div className="relative bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="h-8 bg-gray-800 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-8 bg-black/50 backdrop-blur-sm min-h-[300px] flex flex-col items-center justify-center text-center">
                    <FileText className="w-16 h-16 text-gray-700 mb-4" />
                    <h4 className="text-xl font-serif text-gray-500">Futuree Growth Plan</h4>
                    <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest">Confidencial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-medium mb-12 text-center">Perguntas Frequentes</h2>
          <Accordion>
            <AccordionItem title="Para quem é este plano?">
              Para empresas que já faturam acima de R$ 50k/mês e querem escalar para R$ 500k/mês ou mais. Se você está começando do zero absoluto, este produto pode ser avançado demais.
            </AccordionItem>
            <AccordionItem title="Quanto tempo leva para ficar pronto?">
              O ciclo de desenvolvimento dura 4 semanas. Semana 1: Imersão e Diagnóstico. Semana 2: Estratégia e Modelagem. Semana 3: Tático e Operacional. Semana 4: Refinamento e Entrega Final.
            </AccordionItem>
            <AccordionItem title="Vocês executam o plano?">
              O Plano é um produto de consultoria estratégica. A execução é feita pela sua equipe (interna ou terceirizada). No entanto, oferecemos serviços de acompanhamento ou execução para clientes selecionados após a entrega do plano.
            </AccordionItem>
            <AccordionItem title="Qual o investimento?">
              O valor depende da complexidade do seu negócio e do escopo necessário. Agende uma sessão de diagnóstico gratuita para entendermos se o Plano é o que você precisa agora.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8">
            Sua empresa, <br />
            <span className="text-primary">projetada para crescer.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Não deixe mais um ano passar com "quase" resultados. Tenha o plano exato em mãos.
          </p>
          <Button size="lg" className="h-16 px-12 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
            Agendar Diagnóstico Gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
