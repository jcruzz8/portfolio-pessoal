import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900/50 pt-20 pb-10 relative overflow-hidden">
      
      {/* Brilho de fundo subtil */}
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Esquerda: Texto e Contactos Diretos */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-50">
              Vamos construir o seu <span className="text-blue-500">projeto</span> juntos.
            </h2>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Estou atualmente disponível para novos projetos freelance. Quer tenha uma ideia bem definida ou apenas precise de ajuda técnica, envie-me uma mensagem!
            </p>

            <div className="flex flex-col gap-5">
              <a href="mailto:josejmcruz10@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors w-fit group">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 group-hover:border-blue-500/50 transition-colors"><Mail size={20} /></div>
                josejmcruz10@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/jose-cruzz0812/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors w-fit group">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 group-hover:border-blue-500/50 transition-colors"><Linkedin size={20} /></div>
                LinkedIn
              </a>
              <a href="https://github.com/jcruzz8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors w-fit group">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 group-hover:border-slate-500 transition-colors"><Github size={20} /></div>
                GitHub
              </a>
            </div>
          </div>

          {/* Direita: Formulário de Contacto */}
          <div className="bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-slate-800/60 backdrop-blur-sm">
            {/* O onSubmit previne que a página recarregue ao clicar no botão */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-400">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="O seu nome" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="O seu melhor email" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Ideia de Negócio</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Como posso ajudar o seu negócio?" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} José Cruz. Todos os direitos reservados.</p>
          <p>Desenhado & Desenvolvido com React + Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}