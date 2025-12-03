import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Para quem é a Futuree Growth?',
    answer: 'Para empresas B2B e SaaS que já faturam acima de R$ 50k/mês e buscam previsibilidade de escala. Não atendemos dropshipping, afiliados ou negócios em fase de ideação.'
  },
  {
    question: 'Qual a diferença entre Assessoria e Agência?',
    answer: 'Agências focam em tarefas (posts, cliques). Nós focamos em receita. Atuamos como um braço estratégico de Growth, implementando processos de vendas, CRM e inteligência de dados, não apenas anúncios.'
  },
  {
    question: 'Em quanto tempo vejo retorno (ROI)?',
    answer: 'Nossos ciclos de growth são trimestrais. Porém, nas primeiras 4 semanas já implementamos o "Quick Wins" para otimizar o que você já tem rodando, frequentemente pagando o investimento inicial já no primeiro mês.'
  },
  {
    question: 'Vocês garantem resultados?',
    answer: 'Garantimos a execução de uma metodologia validada em mais de 120 operações. O resultado financeiro depende da sua capacidade de atendimento e produto. Se não acreditarmos no potencial de escala do seu negócio, não faremos uma proposta.'
  },
  {
    question: 'Preciso ter time de marketing interno?',
    answer: 'Não é obrigatório. Podemos operar 100% da sua aquisição (Full Service) ou treinar seu time in-house (Consultoria Híbrida). Adaptamos o escopo à sua estrutura atual.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
      
      {/* Decorative Question Mark */}
      <div className="absolute -top-20 -right-20 text-[15rem] md:text-[30rem] font-serif font-bold text-white/[0.02] pointer-events-none select-none rotate-12">?</div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                <HelpCircle className="w-3 h-3" />
                Dúvidas
              </div>
              <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
                Perguntas <br/> <span className="text-gray-500">Frequentes</span>
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                Entenda como nossa metodologia se adapta ao seu negócio. Se sua dúvida não estiver aqui, fale conosco.
              </p>
              <button className="text-primary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
                Falar com um consultor <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-xl overflow-hidden transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-white/[0.03] border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]' 
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left group"
                  >
                    <span className={`text-lg font-medium transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      openIndex === index ? 'bg-primary/10 text-primary rotate-180' : 'bg-white/5 text-gray-500 group-hover:bg-white/10'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
