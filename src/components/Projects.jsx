import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Plataforma E-commerce B2B",
      description: "Aumentou as conversões online em 40% ao modernizar a interface e otimizar o tempo de carregamento de 4s para 0.8s.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Dashboard de Gestão Interna",
      description: "Automatizou o processamento de dados, poupando 15 horas semanais à equipa financeira através de um dashboard em tempo real.",
      tags: ["React", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "App de Agendamento Clínico",
      description: "Reduziu as faltas a consultas em 25% através de um sistema de marcações com notificações SMS integradas numa interface fluida.",
      tags: ["React Native", "Tailwind", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-slate-950 relative border-t border-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-50"
          >
            Portfólio <span className="text-blue-500">Pessoal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl"
          >
            Estes são alguns dos projetos em que trabalhei recentemente. Cada um deles é um exemplo do meu compromisso em transformar o pensamento do cliente num produto real.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800/60 hover:border-slate-500/50 transition-all group flex flex-col"
            >
              {/* Em vez de imagens que podem quebrar, usamos gradientes abstratos com aspeto moderno */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}>
                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                 <span className="text-white/80 font-bold text-xl tracking-widest mix-blend-overlay">PROJETO</span>
              </div>

              <div className="p-8 flex flex-col flex-grow relative bg-slate-900/40 backdrop-blur-sm">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-slate-950 border border-slate-800 text-blue-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6 mt-auto pt-6 border-t border-slate-800/60">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                    <ExternalLink size={18} /> Ver Live
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github size={18} /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}