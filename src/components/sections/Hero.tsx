import { ArrowRight, BarChart3, ShoppingCart, TrendingUp, ShieldCheck, MonitorSmartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 to-white min-h-[100dvh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
      
      {/* Iluminación Ambiental Perimetral (Ambient Glows) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-teal-400/20 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-multiply"></div>
      </div>

      {/* Máscara de difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-8 w-full z-10">
        
        {/* Columna Izquierda: Textos */}
        <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 leading-[1.1]">
            Sistemas a medida para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">hacer crecer tu negocio</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Olvídate del papel y el descontrol. Diseñamos software rápido y fácil de usar para administrar tus ventas, controlar el stock y gestionar tu facturación.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95 w-full sm:w-auto"
            >
              Contáctanos
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
              href="#servicios" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-base font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm w-full sm:w-auto"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-8 lg:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-teal-500" /> Facturación ARCA
            </div>
            <div className="flex items-center gap-1.5">
              <MonitorSmartphone className="w-5 h-5 text-blue-500" /> Multi-dispositivo
            </div>
          </div>
        </div>

        {/* Columna Derecha: Ilustración UI */}
        <div className="flex-1 w-full max-w-[280px] sm:max-w-xl lg:max-w-none relative mt-8 lg:mt-0 mx-auto">
          
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden aspect-[4/3] transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            
            <div className="h-5 sm:h-10 bg-slate-50 border-b border-slate-100 flex items-center px-2 sm:px-4 gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
              <div className="ml-1 sm:ml-2 px-1.5 sm:px-3 py-0.5 sm:py-1 bg-white rounded-[4px] sm:rounded-md border border-gray-200 text-[5px] sm:text-[10px] text-gray-400 flex items-center gap-0.5 sm:gap-1 shadow-sm">
                <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div> app.nubixsoftware.com
              </div>
            </div>

            <div className="flex h-full bg-slate-50/50">
              <div className="w-1/4 bg-slate-900 border-r border-slate-800 p-2 sm:p-4 flex flex-col gap-2 sm:gap-4">
                <div className="w-full h-2 sm:h-4 bg-slate-800 rounded mb-1 sm:mb-2"></div>
                <div className="w-3/4 h-1 sm:h-2 bg-blue-500/50 rounded-full mb-2 sm:mb-4"></div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-[2px] sm:rounded bg-slate-800"></div>
                    <div className="w-full h-1 sm:h-2 bg-slate-800 rounded-full"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 p-2 sm:p-5 flex flex-col gap-2 sm:gap-5">
                <div className="flex justify-between items-center">
                  <div className="w-1/3 h-2 sm:h-4 bg-slate-200 rounded-full"></div>
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1 bg-white border border-slate-100 rounded-lg sm:rounded-xl flex flex-col shadow-sm overflow-hidden relative">
                  <div className="p-2 sm:p-4 flex flex-col gap-1 sm:gap-2 z-10">
                    <div className="w-1/4 h-1 sm:h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-1/3 h-1 sm:h-2 bg-slate-100 rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-0 w-full h-3/4 flex items-end">
                    <svg className="w-full h-full text-blue-500/10" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="area-gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,40 L0,32 L15,18 L30,25 L45,10 L60,28 L80,12 L100,5 L100,40 Z" fill="url(#area-gradient)" />
                      <path d="M0,32 L15,18 L30,25 L45,10 L60,28 L80,12 L100,5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/80" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Flotante 1: Visible y escalada en móviles */}
          <div className="absolute -left-3 sm:-left-8 top-10 sm:top-24 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 w-[110px] sm:w-48 transform -rotate-3 animate-bounce shadow-slate-200/50" style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                <ShoppingCart className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[6px] sm:text-[10px] font-bold text-slate-500 uppercase leading-tight truncate">Nueva Venta</div>
                <div className="text-[9px] sm:text-sm font-extrabold text-slate-900 leading-tight">$ 14.500</div>
              </div>
            </div>
            <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-full h-full bg-green-500"></div>
            </div>
          </div>

          {/* Tarjeta Flotante 2: Visible y escalada en móviles */}
          <div className="absolute -right-3 sm:-right-6 bottom-8 sm:bottom-16 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 w-[100px] sm:w-44 transform rotate-3 animate-bounce shadow-slate-200/50" style={{ animationDuration: '5s', animationDelay: '1s' }}>
             <div className="flex items-center justify-between mb-1 sm:mb-2">
               <div className="w-5 h-5 sm:w-8 sm:h-8 bg-blue-100 rounded-[4px] sm:rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                 <BarChart3 className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
               </div>
               <span className="flex items-center text-[5px] sm:text-[10px] font-bold text-green-600 bg-green-50 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full shrink-0">
                 <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" /> +24%
               </span>
             </div>
             <div className="text-[6px] sm:text-[11px] font-bold text-slate-500 mt-1 sm:mt-2">Ventas del mes</div>
             <div className="w-3/4 h-1 sm:h-2 bg-slate-200 rounded-full mt-1 sm:mt-1.5"></div>
          </div>

        </div>
      </div>
    </section>
  );
}