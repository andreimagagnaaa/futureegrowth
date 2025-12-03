import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Founder = () => {
  return (
    <section id="about" className="py-32 border-t border-white/5 bg-black relative bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 relative group shadow-2xl">
              <img 
                src="/andrei-magagna.png" 
                alt="Andrei Magagna" 
                className="w-full h-full object-cover grayscale hover:grayscale-[0.2] transition-all duration-500"
              />
              
              {/* Name Tag */}
              <div className="absolute bottom-6 left-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xl font-serif font-medium text-white">Andrei Magagna</div>
                <div className="text-sm text-primary tracking-widest uppercase mt-1 flex items-center gap-2">
                  CEO & Founder <span className="h-px w-4 bg-primary inline-block" />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse-slow" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <Quote className="h-12 w-12 text-primary/20 mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              A visão de <br/> <span className="text-primary relative inline-block">
                Andrei Magagna.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                "Fundei o ecossistema Futuree com uma tese clara: <strong className="text-white font-medium bg-white/5 px-1 rounded">comprar mídia ficou fácil, criar demanda ficou difícil.</strong>
              </p>
              <p>
                A complexidade do mercado atual exige mais do que criativos bonitos. Exige engenharia de dados e automação. Criei a Futuree Solutions para resolver problemas de escala que concorrentes comuns nem enxergam.
              </p>
              <p>
                Não vendo milagres. Entrego a infraestrutura necessária para o seu próximo nível de faturamento."
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-4">
               <div className="h-px w-12 bg-primary" />
               <span className="text-sm tracking-widest uppercase text-gray-500 font-medium">Futuree AI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
