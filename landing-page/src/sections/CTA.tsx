import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';

export const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-white/10 bg-grid-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Você está deixando <br/>
              <span className="text-primary italic">dinheiro na mesa.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Seu negócio tem um teto de crescimento? Nós o quebramos. Agende uma Sessão Estratégica e descubra seus gargalos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="min-w-[250px] h-14 text-lg" onClick={() => setIsModalOpen(true)}>
                Agendar Sessão Estratégica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <span className="text-sm text-gray-500">
                *Vagas limitadas para este mês.
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
