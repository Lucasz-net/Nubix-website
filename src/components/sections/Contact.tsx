import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tarjeta oscura tipo SaaS */}
        <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Elementos decorativos de fondo (Glow interno) */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative p-10 sm:p-16 text-center z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              ¿Listo para digitalizar tu comercio?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Escríbenos para contarnos qué necesita tu negocio y armamos una propuesta a medida sin compromiso. Empezá a ahorrar tiempo hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              {/* Botón Principal (WhatsApp) */}
              <a 
                href="https://wa.me/5491112345678" // Reemplazar con tu número real
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-900 bg-[#25D366] hover:bg-[#20b858] transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar por WhatsApp
              </a>
              
              {/* Botón Secundario (Correo) */}
              <a 
                href="mailto:hola@devsolutions.com" // Reemplazar con tu correo
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar un Correo
              </a>
            </div>
            
            {/* Texto de confianza inferior */}
            <p className="mt-8 text-sm text-slate-400 font-medium">
              Respuestas rápidas. Presupuestos sin cargo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}