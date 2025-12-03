import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Qualification = () => {
  return (
    <section className="py-32 bg-grid-pattern border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Background Symbols */}
      <div className="absolute top-20 left-10 text-primary/5 rotate-12 pointer-events-none">
        <CheckCircle2 className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 right-10 text-gray-800/20 -rotate-12 pointer-events-none">
        <XCircle className="w-64 h-64" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            Para quem é a Futuree Growth?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            Somos parceiros estratégicos para poucos. Nossa metodologia exige maturidade e compromisso.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* YES Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-8 md:p-12 hover:bg-primary/[0.04] transition-colors duration-500"
          >
            <h3 className="mb-8 text-2xl font-serif font-medium text-white flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              Este ecossistema é para você se:
            </h3>
            <ul className="space-y-6">
              {[
                'Você já tem um produto ou serviço validado e quer escalar.',
                'Você entende que marketing é investimento e busca retorno sobre o capital (ROAS/ROI).',
                'Você busca profissionalização e quer sair do operacional para focar no estratégico.',
                'Você valoriza dados acima de opiniões.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 font-light group">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NO Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 hover:bg-white/[0.04] transition-colors duration-500"
          >
            <h3 className="mb-8 text-2xl font-serif font-medium text-gray-400 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-500">
                <XCircle className="h-5 w-5" />
              </span>
              NÃO somos para você se:
            </h3>
            <ul className="space-y-6">
              {[
                'Você procura "dicas rápidas" ou soluções mágicas sem investimento.',
                'Você quer microgerenciar cada vírgula em vez de confiar no processo.',
                'Seu foco é apenas preço, e não valor e construção de ativo.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500 font-light group">
                  <XCircle className="h-5 w-5 shrink-0 text-gray-600 mt-0.5 group-hover:text-red-500/50 transition-colors" />
                  <span className="group-hover:text-gray-400 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
