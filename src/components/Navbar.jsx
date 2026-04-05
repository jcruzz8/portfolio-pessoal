import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre mim', href: '/#sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Projetos', href: '/portfolio' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logotipo */}
        <a href="/#" className="text-2xl font-bold tracking-tighter text-slate-50">
          José <span className="text-blue-500">Cruz</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contacto" 
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            Falar Comigo
          </a>
        </div>

        {/* Botão Mobile (Hamburguer) */}
        <button 
          className="md:hidden text-slate-300 hover:text-white transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-slate-900 border-b border-slate-800 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg text-center mt-2" 
            onClick={() => setIsOpen(false)}
          >
            Falar Comigo
          </a>
        </div>
      )}
    </nav>
  );
}