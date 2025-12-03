import { motion } from 'framer-motion';

const toolsRow1 = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'ActiveCampaign', category: 'Email' },
  { name: 'Klaviyo', category: 'Email' },
  { name: 'Google Ads', category: 'Ads' },
  { name: 'Meta Ads', category: 'Ads' },
  { name: 'LinkedIn Ads', category: 'Ads' },
  { name: 'TikTok Ads', category: 'Ads' },
];

const toolsRow2 = [
  { name: 'GA4', category: 'Analytics' },
  { name: 'Looker Studio', category: 'BI' },
  { name: 'Power BI', category: 'BI' },
  { name: 'Make', category: 'Automation' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'Vercel', category: 'Infra' },
  { name: 'Stripe', category: 'Payments' },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-black border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto relative z-10 mb-16">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Integrações & Ferramentas
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mt-4">
            Falamos a língua do seu stack
          </h3>
          <p className="mt-4 text-gray-400 font-light max-w-2xl mx-auto">
            Não importa qual ferramenta você usa. Nós conectamos, integramos e extraímos inteligência dela.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mask-linear-fade">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8 px-4"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...toolsRow1, ...toolsRow1, ...toolsRow1].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium hover:border-primary/30 hover:text-white hover:bg-white/10 transition-all cursor-default whitespace-nowrap"
              >
                {tool.name} <span className="ml-2 text-xs text-gray-600">| {tool.category}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-8 px-4"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...toolsRow2, ...toolsRow2, ...toolsRow2].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium hover:border-primary/30 hover:text-white hover:bg-white/10 transition-all cursor-default whitespace-nowrap"
              >
                {tool.name} <span className="ml-2 text-xs text-gray-600">| {tool.category}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
