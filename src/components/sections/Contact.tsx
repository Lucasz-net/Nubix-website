import { MessageCircle, Mail } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  // Clase unificada para los 3 botones: fondo más claro, borde y resplandor (glow)
  const botonEstilo = "w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-slate-700/60 hover:bg-slate-600/80 backdrop-blur-md border border-slate-500 shadow-[0_0_15px_rgba(148,163,184,0.15)] hover:shadow-[0_0_25px_rgba(148,163,184,0.35)] transition-all duration-300 hover:-translate-y-1";

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
          
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative p-10 sm:p-16 text-center z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              ¿Listo para digitalizar tu comercio?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Escríbenos para contarnos qué necesita tu negocio y armamos una propuesta a medida sin compromiso. Empezá a ahorrar tiempo hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 flex-wrap">
              <a 
                href="https://wa.me/5493794350875" 
                target="_blank" 
                rel="noopener noreferrer"
                className={botonEstilo}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>

              <a 
                href="https://www.instagram.com/nubix.software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={botonEstilo}
              >
                <InstagramIcon className="mr-2 h-5 w-5" />
                Instagram
              </a>
              
              <a 
                href="mailto:lucasszdev@gmail.com" 
                className={botonEstilo}
              >
                <Mail className="mr-2 h-5 w-5" />
                Correo
              </a>
            </div>
            
            <p className="mt-8 text-sm text-slate-400 font-medium">
              Respuestas rápidas. Presupuestos sin cargo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}