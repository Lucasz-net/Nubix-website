import { Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-2.5 text-2xl font-extrabold text-slate-900 tracking-tight">
              <img src="/logonubix.png" alt="Logo Nubix Software" className="h-8 w-auto" />
              <span>Nubix<span className="text-blue-600"> Software</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contacto"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" /> Hablemos
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg"
            >
              <MessageCircle className="w-5 h-5" /> Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}