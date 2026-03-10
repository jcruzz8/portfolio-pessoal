import { motion } from 'framer-motion';
import { CheckCircle2, Terminal } from 'lucide-react';

export default function About() {
  const highlights = [
    "Engenharia Informática de Base",
    "Foco no Retorno do Investimento (ROI)",
    "Código Limpo e Escalável",
    "Comunicação Clara e Transparente"
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-950 relative border-t border-slate-900/50 overflow-hidden">
      
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-1/2 left-[-5%] w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none translate-y-[-50%]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-50">
              Muito mais do que <br/>
              <span className="text-emerald-400">apenas código.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-8">
              <p>
                Como Engenheiro Informático, aprendi a construir sistemas complexos desde a raiz. No entanto, percebi rapidamente que os meus clientes não procuram algoritmos complexos — <strong className="text-slate-200 font-medium">procuram resultados.</strong>
              </p>
              <p>
                Como freelancer, o meu foco é oferecer ao cliente um produto funcional que corresponda às suas necessidades e dentro de um curto prazo de tempo.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lado Direito: Imagem / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Moldura principal para a tua foto */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-[4/5] md:aspect-square flex items-center justify-center group">
              
              {/* Substitui o interior desta div pela tua tag <img src="..." /> mais tarde */}
              <div className="absolute inset-0 bg-gradient-to-br transition-opacity duration-500" />
              <img src="/josecruz.JPEG" />
              
            </div>

            {/* Crachá flutuante decorativo */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <span className="text-emerald-400 font-bold text-xl">2+</span>
              </div>
              <div>
                <p className="text-slate-100 font-bold text-sm">Anos de Código</p>
                <p className="text-slate-400 text-xs">Sempre a inovar o conhecimento</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}