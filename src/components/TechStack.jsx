import { motion } from 'framer-motion';

export default function TechStack() {
  // Lista das tecnologias que dominas (podes alterar à vontade)
  const technologies = [
    "React", "TypeScript", "JavaScript", "Node.js", 
    "Tailwind CSS", "SQL", "MongoDB", "Java", "HTML5"
  ];

  // Duplicamos o array para criar o efeito infinito perfeitamente sem quebras
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-10 bg-slate-950 relative overflow-hidden border-y border-slate-900/50">
      
      {/* Sombras nas laterais para dar o efeito de "fade" (desvanecer) */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Contentor com largura extra para a animação ter espaço */}
      <div className="flex w-fit">
        <motion.div
          className="flex gap-6 px-3"
          // Anima da posição 0 até -50% (como o array é duplicado, parece infinito)
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, // Tempo que demora a dar uma volta (aumenta para ficar mais lento)
            repeat: Infinity 
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center whitespace-nowrap px-8 py-4 bg-slate-900/40 border border-slate-800/60 rounded-full text-slate-300 font-medium text-lg hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
            >
              <span className="text-blue-500 mr-3">✦</span>
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}