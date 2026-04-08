import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: "Portfólio Web Developer",
      description: "Construído de raiz para demonstrar as minhas competências em desenvolvimento front-end moderno. Destaca-se pelas animações fluidas e performance otimizada.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://josecruzportfolio.pt/",
      githubUrl: "https://github.com/jcruzz8/portfolio-pessoal",
      image: "/projetos/portfolio-preview.png",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Stand Automóvel - NCRUZ CARROS",
      description: "Construído de raíz para um stand automóvel local, com integração de catálogo de veículos, sistema de contacto e otimização SEO para aumentar a visibilidade online.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://ncruzcarros.pt/",
      githubUrl: "https://github.com/jcruzz8/NCruzCarros",
      image: "/projetos/ncruzcarros-preview.png",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Stalker.ia - Landing Page Corporativa",
      description: "Desenvolvimento de uma plataforma web de alta performance para uma agência de Automação de IA. Construída com Next.js e TypeScript para máxima velocidade e SEO, com estilização responsiva em Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Next.js"],
      liveUrl: "https://www.stalkeragent.pt/",
      githubUrl: "https://github.com/jcruzz8/stalker.ia",
      image: "/projetos/stalkeragent-preview.png",
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
              {/* Lógica Condicional para Imagem vs Gradiente */}
              <div className="h-48 w-full relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 flex items-center justify-center`}>
                    <span className="text-white/80 font-bold text-xl tracking-widest mix-blend-overlay">PROJETO</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                    <ExternalLink size={18} /> Ver Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github size={18} /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link to="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-700 hover:border-blue-500 text-white rounded-full font-medium transition-all group">
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}