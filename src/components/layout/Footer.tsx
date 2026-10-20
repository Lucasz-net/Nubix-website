import { Mail, MessageCircle } from 'lucide-react';

// Creamos el ícono de Instagram a mano con SVG (mismo estilo que Lucide)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Dev<span className="text-blue-500">Solutions</span>
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Sistemas de gestión, facturación y desarrollo web a medida para hacer crecer tu comercio de forma inteligente y segura.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col gap-4 md:pl-10">
            <h3 className="text-white font-bold tracking-wide">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-sm hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-sm hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="text-sm hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-wide">Hablemos</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> +54 9 11 1234-5678
              </a>
              <a 
                href="mailto:hola@devsolutions.com" 
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" /> hola@devsolutions.com
              </a>
              <a 
                href="https://instagram.com/tu_usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
              >
                {/* Aquí usamos nuestro SVG personalizado */}
                <InstagramIcon className="w-5 h-5" /> @devsolutions.arg
              </a>
            </div>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} DevSolutions. Todos los derechos reservados.
          </p>
          <div className="text-xs bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            Desarrollado en <span className="text-blue-400 font-semibold">Argentina</span>
          </div>
        </div>

      </div>
    </footer>
  );
}