import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Eye, Zap, Layers } from 'lucide-react';

const philosophies = [
  {
    icon: Eye,
    title: 'Inteligência de Dados',
    description: 'Não chutamos. Analisamos. Usamos dados proprietários para identificar brechas de crescimento invisíveis a olho nu.',
  },
  {
    icon: Zap,
    title: 'Velocidade de Execução',
    description: 'O dinheiro ama velocidade. Testamos e corrigimos enquanto o mercado ainda marca reuniões.',
  },
  {
    icon: Layers,
    title: 'Parceiros de Negócios',
    description: 'Muito além de agência. Tecnologia, Processos e Dados. Não vendemos horas, vendemos escala.',
  },
];

export const Philosophy = () => {
  return (
    <section className="py-32 bg-gradient-radial-center relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl leading-tight">
            Por que 99% das empresas <br/> <span className="italic text-gray-500">viram commodity</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            Não jogamos para competir. Criamos monopólios através da sua Vantagem Injusta.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full p-10 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="mb-8 inline-flex items-center justify-center text-primary">
                  <item.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="mb-4 text-xl font-serif font-medium">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
