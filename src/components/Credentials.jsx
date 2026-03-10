import { motion } from 'framer-motion';
import { GraduationCap, FileText, Award, Download } from 'lucide-react';

export default function Credentials() {
  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Engenharia Informática",
      institution: "ISCTE-IUL",
      year: "2023 - 2026",
      description: "Forte base em algoritmos, arquitetura de sistemas e engenharia de software."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      title: "Certificações Técnicas",
      institution: "JavaScript, React, Node.js",
      year: "Recente",
      description: "Sempre a atualizar conhecimentos nas tecnologias mais recentes do mercado."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/30 relative border-t border-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Lado Esquerdo: Título e Botão de CV */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-50">
              Formação & <span className="text-blue-500">Credenciais</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              A base académica sólida que garante que o seu projeto é construído com as melhores práticas de engenharia, não apenas "colado" com tutoriais.
            </p>
            
            {/* O href deve apontar para o teu ficheiro PDF colocado na pasta public */}
            <a 
              href="/José-Cruz-FlowCV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 text-white rounded-xl font-medium transition-all group shadow-lg"
            >
              <FileText className="w-5 h-5 text-blue-400" />
              Descarregar Currículo
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Lado Direito: Lista de Credenciais */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {credentials.map((cred, index) => (
              <div key={index} className="p-6 bg-slate-950/50 border border-slate-800/60 rounded-2xl hover:border-slate-600 transition-colors">
                <div className="mb-4 p-3 bg-slate-900 inline-block rounded-xl border border-slate-800">
                  {cred.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">{cred.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 font-medium">
                  <span>{cred.institution}</span>
                  <span>•</span>
                  <span>{cred.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cred.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}