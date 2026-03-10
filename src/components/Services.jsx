import { MonitorSmartphone, Server, LineChart, DiscIcon, MousePointerBanIcon, PhoneIcon, LucidePhone, PanelRightOpen, SmartphoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-blue-500" />,
      title: "Desenvolvimento Web Customizado",
      description: "Sites e aplicações web responsivas, ultra-rápidas e desenhadas para converter visitantes em clientes, sem dores de cabeça."
    },
    {
      icon: <Server className="w-8 h-8 text-emerald-500" />,
      title: "Arquitetura e Backend",
      description: "APIs robustas e bases de dados escaláveis. Garanto que a infraestrutura do seu projeto é segura e suporta o crescimento do seu negócio."
    },
    {
      icon: <SmartphoneIcon className="w-8 h-8 text-purple-500" />,
      title: "Landing Pages Otimizadas",
      description: "Criação de landing pages focadas em conversão, com design moderno para garantir que o seu negócio se destaca online."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative border-t border-slate-900/50">
      
      {/* Brilho de fundo subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-900/20 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-50"
          >
            Serviços ao <span className="text-blue-500">seu</span> dispor
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Não escrevo apenas código. Resolvo problemas reais que precisam de soluções digitais fiáveis e escaláveis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-slate-950 rounded-2xl inline-block border border-slate-800 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}