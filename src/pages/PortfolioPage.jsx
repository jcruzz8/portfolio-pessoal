import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  // Estado para controlar a página atual da paginação
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Garante que a página abre sempre no topo na primeira visita
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfólio Completo | José Cruz";
  }, []);

  // A tua lista completa de projetos
  const allProjects = [
    {
      title: "Vitoria Clube de Futebol - Website Oficial",
      description: "Construído de raíz para um clube desportivo em React e Tailwind, integrando Supabase para gestão de notícias e Google Sheets como um CMS customizado para resultados desportivos.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://vitoriacl.pt/",
      githubUrl: "https://github.com/jcruzz8/SiteOficialVitoriaClubeDeLisboa",
      image: "/projetos/vitoriacl-preview.png",
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
      title: "Stalker.ia - Landing Page",
      description: "Desenvolvimento de uma plataforma web de alta performance para uma agência de Automação de IA. Construída com Next.js e TypeScript para máxima velocidade e SEO, com estilização responsiva em Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Next.js"],
      liveUrl: "https://stalkeragent.pt/",
      githubUrl: "https://github.com/jcruzz8/stalker.ia",
      image: "/projetos/stalkeragent-preview.png",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Portfólio Web Developer",
      description: "Construído de raiz para demonstrar as minhas competências em desenvolvimento front-end moderno. Destaca-se pelas animações fluidas e performance otimizada.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://josecruzportfolio.pt/",
      githubUrl: "https://github.com/jcruzz8/portfolio-pessoal",
      image: "/projetos/portfolio-preview.png",
      gradient: "from-blue-600 to-cyan-500"
    }
  ];

  // Lógica Matemática da Paginação
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  
  // Extrai apenas os 6 projetos da página atual
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Função para mudar de página e subir o ecrã suavemente
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        {/* Grelha Paginada (Mostra apenas os projetos recortados pelo .slice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div 
              key={`${currentPage}-${index}`} // Chave dinâmica para forçar a animação ao mudar de página
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.05 }} 
              className="bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800/60 hover:border-slate-500/50 transition-all flex flex-col group"
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <span className="text-white/80 font-bold tracking-widest mix-blend-overlay">PROJETO</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400"><ExternalLink size={18} /> Live</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"><Github size={18} /> Código</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controlos de Paginação (Só aparecem se houver mais de 1 página) */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-6 mt-16"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 font-medium transition-all
                ${currentPage === 1 
                  ? 'text-slate-600 bg-slate-900/20 cursor-not-allowed border-slate-800' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500'}`}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:block">Anterior</span>
            </button>

            <span className="text-slate-400 font-medium bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800/50">
              Página <span className="text-blue-400">{currentPage}</span> de {totalPages}
            </span>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 font-medium transition-all
                ${currentPage === totalPages 
                  ? 'text-slate-600 bg-slate-900/20 cursor-not-allowed border-slate-800' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500'}`}
            >
              <span className="hidden sm:block">Seguinte</span>
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}