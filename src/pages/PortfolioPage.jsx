import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  // Garante que a página abre sempre no topo
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfólio Completo | José Cruz";
  }, []);

  // Aqui vais colocar TODOS os teus projetos reais
  const allProjects = [
    {
      title: "Plataforma E-commerce B2B",
      description: "Aumentou as conversões online em 40% ao modernizar a interface.",
      tags: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#", githubUrl: "#", gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Dashboard de Gestão Interna",
      description: "Automatizou o processamento de dados, poupando 15 horas semanais.",
      tags: ["React", "TypeScript", "Firebase"],
      liveUrl: "#", githubUrl: "#", gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "App de Agendamento Clínico",
      description: "Reduziu as faltas a consultas em 25% através de SMS.",
      tags: ["React Native", "Tailwind"],
      liveUrl: "#", githubUrl: "#", gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Site Institucional para Advocacia",
      description: "Aumentou a captação de leads com um formulário otimizado.",
      tags: ["Next.js", "Tailwind CSS"],
      liveUrl: "#", githubUrl: "#", gradient: "from-slate-600 to-slate-400"
    },
    {
      title: "Sistema de Faturação Web",
      description: "Integração com AT e geração de PDFs em tempo real.",
      tags: ["Vue.js", "PHP", "MySQL"],
      liveUrl: "#", githubUrl: "#", gradient: "from-indigo-600 to-blue-500"
    },
    {
      title: "Blog Otimizado (SEO)",
      description: "Alcançou a 1ª página do Google em 3 meses de conteúdo.",
      tags: ["Astro", "Markdown"],
      liveUrl: "#", githubUrl: "#", gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Botão Voltar */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-medium mb-10 transition-colors">
          <ArrowLeft size={20} /> Voltar à página inicial
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-50">
            Portfólio <span className="text-blue-500">Completo</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Uma visão completa dos trabalhos desenvolvidos, tecnologias utilizadas e problemas resolvidos.
          </p>
        </motion.div>

        {/* Grelha Completa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800/60 hover:border-slate-500/50 transition-all flex flex-col group">
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                 <span className="text-white/80 font-bold tracking-widest mix-blend-overlay">PROJETO</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-slate-950 border border-slate-800 text-blue-400 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="flex items-center gap-6 mt-auto pt-6 border-t border-slate-800/60">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400"><ExternalLink size={18} /> Live</a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"><Github size={18} /> Código</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}