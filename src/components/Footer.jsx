import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Instagram } from 'lucide-react';

export default function Footer() {
  // 1. Adicionámos o 'phone' ao estado inicial
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  // COLOCA AQUI O TEU ID DO FORMSPREE NOVAMENTE
  const FORMSPREE_URL = "https://formspree.io/f/xaqlloew";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          // 2. Dissemos ao Formspree para incluir o telemóvel no email que te envia
          Telemóvel: formData.phone || 'Não fornecido', 
          Mensagem: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        // 3. Limpamos também o telemóvel quando a mensagem é enviada
        setFormData({ name: '', email: '', phone: '', message: '' }); 
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900/50 pt-20 pb-10 relative overflow-hidden">
      
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-50">
              Vamos construir o seu <span className="text-blue-500">projeto</span> juntos.
            </h2>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Estou disponível para o ajudar com o seu projeto. Quer tenha uma ideia bem definida ou apenas precise de ajuda técnica, envie-me uma mensagem!
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
              <a href="https://www.instagram.com/_.josecruzz._/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-pink-500 transition-colors w-fit group">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 group-hover:border-pink-500/50 transition-colors"><Instagram size={20} /></div>
                Instagram
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-slate-800/60 backdrop-blur-sm relative">
            
            {status === 'success' ? (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/95 rounded-3xl backdrop-blur-md border border-emerald-500/30 text-center p-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-50 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-400">Obrigado pelo contacto. Responderei o mais brevemente possível.</p>
              </div>
            ) : null}

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O seu nome" 
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  />
                </div>
                
                {/* 4. O Novo Campo de Telemóvel lado a lado com o Nome (em ecrãs maiores) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-400">Telemóvel (Opcional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: 912 345 678" 
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="O seu melhor email" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Mensagem</label>
                <textarea 
                  id="message" 
                  required
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como posso ajudar o seu negócio?" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>Ocorreu um erro ao enviar. Por favor, tente novamente.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                {status === 'submitting' ? 'A enviar...' : (
                  <>Enviar Mensagem <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} José Cruz. Todos os direitos reservados.</p>
          <p>Desenhado & Desenvolvido com React + Tailwind.</p>
        </div>
      </div>
    </footer>
  );
} 