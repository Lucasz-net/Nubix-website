import { 
  Check, Search, Plus, Hammer, Wrench, PaintBucket, Package, Zap, 
  Home, BarChart2, Users, Settings, DollarSign, AlertCircle, ShoppingCart, 
  Menu, UserCircle, Archive, Globe, BarChart3, ArrowRight
} from 'lucide-react';

export default function Services() {
  const servicios = [
    {
      id: "punto-venta",
      titulo: "Vender de forma rápida y automática",
      iconoTitulo: ShoppingCart,
      colorIcono: "text-blue-600",
      bgIcono: "bg-blue-100",
      glowColor: "bg-blue-500",
      funciones: [
        "Usá tu compu o tablet como punto de venta",
        "Conectá tu caja, impresora y lector de códigos",
        "Generá facturas válidas ante ARCA (ex AFIP)",
        "Seguí facturando aunque internet o la AFIP estén caídos"
      ],
      boton: "Ver punto de venta",
      invertir: false 
    },
    {
      id: "gestion-negocio",
      titulo: "Tener las ventas, el stock y los números siempre al día",
      iconoTitulo: BarChart3,
      colorIcono: "text-indigo-600",
      bgIcono: "bg-indigo-100",
      glowColor: "bg-indigo-500",
      funciones: [
        "Controlá tu stock en tiempo real y evitá faltantes",
        "Actualizá precios de forma masiva fácilmente",
        "Accedé a reportes y estadísticas inteligentes de ventas",
        "Protegé tu efectivo con aperturas y cierres de caja"
      ],
      boton: "Conocer la gestión",
      invertir: true 
    },
    {
      id: "diseno-web",
      titulo: "Llevar tu comercio al mundo digital",
      iconoTitulo: Globe,
      colorIcono: "text-teal-600",
      bgIcono: "bg-teal-100",
      glowColor: "bg-teal-500",
      funciones: [
        "Tiendas online integradas con tu stock físico",
        "Diseño web moderno, rápido y adaptado a celulares",
        "Integración total con Mercado Pago y envíos",
        "Panel autogestionable para subir tus productos"
      ],
      boton: "Cotizar diseño web",
      invertir: false
    }
  ];

  const productosMock = [
    { color: "bg-violet-400", icon: Hammer },
    { color: "bg-violet-400", icon: Wrench },
    { color: "bg-violet-400", icon: PaintBucket },
    { color: "bg-teal-400", icon: Package },
    { color: "bg-teal-400", icon: Zap },
    { color: "bg-teal-400", icon: Package },
  ];

  const renderMockup = (id: string) => {
    switch (id) {
      case "punto-venta":
        return (
          <div className="flex-1 flex overflow-hidden bg-slate-50">
            {/* Catálogo en escala para móvil y escritorio */}
            <div className="w-2/3 p-2 sm:p-5 flex flex-col gap-2 sm:gap-4 overflow-hidden">
              <div className="flex gap-1 sm:gap-2 items-center shrink-0">
                <div className="flex-1 h-5 sm:h-8 bg-white rounded-[4px] sm:rounded-md border border-gray-200 flex items-center px-1.5 sm:px-3 gap-1 sm:gap-2 shadow-sm">
                  <Search className="w-2 h-2 sm:w-4 sm:h-4 text-gray-400" />
                  <span className="text-[6px] sm:text-[11px] text-gray-400 font-medium">Buscar...</span>
                </div>
                <div className="w-5 h-5 sm:w-8 h-8 bg-white rounded-[4px] sm:rounded-md border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm">
                  <UserCircle className="w-3 h-3 sm:w-5 sm:h-5" />
                </div>
              </div>
              
              <div className="flex-1 overflow-hidden pr-1 pb-1">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                  {productosMock.map((prod, i) => {
                    const Icon = prod.icon;
                    return (
                      <div key={i} className="bg-white rounded-[4px] sm:rounded-lg border border-gray-200 shadow-sm flex flex-col overflow-hidden">
                        <div className={`h-10 sm:h-24 ${prod.color} relative flex items-center justify-center overflow-hidden shrink-0`}>
                          <div className="absolute w-5 h-5 sm:w-12 sm:h-12 bg-white/20 rounded-full"></div>
                          <Icon className="w-4 h-4 sm:w-8 sm:h-8 text-white relative z-10" />
                        </div>
                        <div className="p-1.5 sm:p-3 flex flex-col gap-1 sm:gap-2 relative bg-white">
                          <div className="w-3/4 h-1 sm:h-2.5 bg-gray-200 rounded-full"></div>
                          <div className="w-1/2 h-1 sm:h-2 bg-gray-100 rounded-full"></div>
                          <div className="mt-0.5 sm:mt-2 flex items-center justify-between">
                            <div className="w-1/3 h-1 sm:h-3 bg-green-100 rounded-full"></div>
                            <button className="w-3 h-3 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-sm">
                              <Plus className="w-2 h-2 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Panel lateral de ticket visible siempre */}
            <div className="flex w-1/3 bg-white border-l border-gray-200 p-2 sm:p-4 flex-col">
              <h3 className="text-[6px] sm:text-xs font-bold text-gray-800 border-b border-gray-100 pb-1 sm:pb-2 mb-1.5 sm:mb-3 flex items-center gap-1 sm:gap-1.5 shrink-0">
                <ShoppingCart className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-500" /> Ticket
              </h3>
              
              <div className="flex-1 flex flex-col gap-2 sm:gap-4 overflow-hidden pt-0.5 sm:pt-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex flex-col gap-0.5 sm:gap-1.5 w-full">
                      <div className="w-2/3 h-1 sm:h-2.5 bg-gray-300 rounded-full"></div>
                      <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                        <div className="w-1/4 h-1 sm:h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-1/4 h-1 sm:h-2.5 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 sm:pt-4 border-t border-gray-100 mt-auto space-y-1 sm:space-y-2 shrink-0">
                <div className="flex justify-between items-center mb-1.5 sm:mb-4">
                  <span className="text-[6px] sm:text-[13px] font-extrabold text-gray-900">Total</span>
                  <span className="text-[6px] sm:text-[13px] font-extrabold text-blue-600">$ 11.011</span>
                </div>
                <button className="w-full py-1.5 sm:py-2.5 bg-blue-600 rounded-[4px] sm:rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-white font-semibold text-[5px] sm:text-[11px] shadow-md">
                  <Check className="w-2 h-2 sm:w-3.5 sm:h-3.5" /> Cobrar
                </button>
              </div>
            </div>
          </div>
        );

      case "gestion-negocio":
        return (
          <div className="flex-1 flex overflow-hidden bg-slate-50">
            {/* Sidebar Dashboard */}
            <div className="flex w-1/4 bg-gray-900 p-2 sm:p-4 flex-col gap-1.5 sm:gap-4 text-gray-300">
              <div className="text-[6px] sm:text-[13px] font-bold text-white border-b border-gray-700 pb-1.5 sm:pb-3 mb-0.5 sm:mb-1">Tu Negocio</div>
              <div className="flex items-center gap-1 sm:gap-2 text-indigo-400 bg-gray-800/50 p-1 sm:p-1.5 rounded-[4px] sm:rounded-md"><Home className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Dashboard</span></div>
              <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-1.5"><BarChart2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Ventas</span></div>
              <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-1.5"><Package className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Inventario</span></div>
              <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-1.5"><Archive className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Stock</span></div>
              <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-1.5"><Users className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Clientes</span></div>
              <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-1.5 mt-auto"><Settings className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /><span className="text-[5px] sm:text-[10px]">Ajustes</span></div>
            </div>
            
            <div className="w-3/4 p-2 sm:p-4 flex flex-col gap-2 sm:gap-4 overflow-hidden">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 shrink-0">
                <div className="bg-white p-1.5 sm:p-3 rounded-[4px] sm:rounded-lg border border-gray-200 shadow-sm flex flex-col">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 mb-0.5 sm:mb-1">
                    <DollarSign className="w-2 h-2 sm:w-3 sm:h-3" /><span className="text-[4px] sm:text-[9px] uppercase font-bold">Ventas</span>
                  </div>
                  <span className="text-[7px] sm:text-[13px] font-extrabold text-gray-900">$ 145.500</span>
                </div>
                <div className="bg-white p-1.5 sm:p-3 rounded-[4px] sm:rounded-lg border border-gray-200 shadow-sm flex flex-col">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 mb-0.5 sm:mb-1">
                    <Package className="w-2 h-2 sm:w-3 sm:h-3" /><span className="text-[4px] sm:text-[9px] uppercase font-bold">Val.</span>
                  </div>
                  <span className="text-[7px] sm:text-[13px] font-extrabold text-gray-900">$ 2.45M</span>
                </div>
                <div className="flex bg-white p-1.5 sm:p-3 rounded-[4px] sm:rounded-lg border border-red-100 shadow-sm flex-col bg-red-50/30">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-red-500 mb-0.5 sm:mb-1">
                    <AlertCircle className="w-2 h-2 sm:w-3 sm:h-3" /><span className="text-[4px] sm:text-[9px] uppercase font-bold">Faltantes</span>
                  </div>
                  <span className="text-[7px] sm:text-[13px] font-extrabold text-red-700">5 ítems</span>
                </div>
              </div>
              
              <div className="flex-1 bg-white rounded-[4px] sm:rounded-lg border border-gray-200 shadow-sm p-1.5 sm:p-4 flex flex-col">
                <div className="flex justify-between items-center mb-1 sm:mb-4 shrink-0">
                  <span className="text-[6px] sm:text-[11px] font-bold text-gray-800">Evolución</span>
                </div>
                <div className="flex-1 flex items-end justify-between px-1 sm:px-2 gap-1 sm:gap-3 border-b border-gray-200 pb-1 sm:pb-2 relative">
                  <div className="absolute top-0 w-full border-t border-gray-100 border-dashed"></div>
                  
                  {[
                    {h: "40%", label: "L"}, {h: "70%", label: "M"}, 
                    {h: "45%", label: "X"}, {h: "90%", label: "J"}, 
                    {h: "65%", label: "V"}, {h: "100%", label: "S"},
                    {h: "30%", label: "D"}
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5 sm:gap-1 w-full h-full justify-end relative z-10">
                      <div className="w-full bg-indigo-100 rounded-t-[2px] sm:rounded-t-sm relative overflow-hidden flex items-end" style={{ height: bar.h }}>
                        <div className="w-full h-full bg-indigo-500 rounded-t-[2px] sm:rounded-t-sm"></div>
                      </div>
                      <span className="text-[4px] sm:text-[8px] text-gray-500 mt-0.5 sm:mt-1">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "diseno-web":
        return (
          <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
            <div className="h-6 sm:h-10 border-b border-gray-200 flex items-center justify-between px-2 sm:px-4 bg-white shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Menu className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-500" />
                <span className="text-[6px] sm:text-[12px] font-extrabold text-gray-900">FERRE<span className="text-teal-600">CENTRO</span></span>
              </div>
              <div className="flex gap-2 sm:gap-4">
                <span className="text-[5px] sm:text-[10px] font-semibold text-teal-600">Inicio</span>
                <span className="text-[5px] sm:text-[10px] font-medium text-gray-500">Catálogo</span>
              </div>
              <div className="relative">
                <ShoppingCart className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-700" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full flex items-center justify-center text-[3px] sm:text-[6px] text-white font-bold">2</div>
              </div>
            </div>
            
            <div className="h-14 sm:h-28 bg-teal-600 flex flex-col items-center justify-center gap-1 sm:gap-1.5 p-2 sm:p-4 text-center shrink-0">
              <h1 className="text-[7px] sm:text-[16px] font-extrabold text-white">Renová tus herramientas</h1>
              <div className="w-8 sm:w-20 h-2.5 sm:h-6 mt-0.5 sm:mt-1 bg-white rounded-full"></div>
            </div>
            
            <div className="p-2 sm:p-4 flex-1 overflow-hidden">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                {productosMock.slice(0, 4).map((prod, i) => {
                  const Icon = prod.icon;
                  return (
                    <div key={i} className="flex bg-white rounded-[4px] sm:rounded-lg border border-gray-200 shadow-sm flex-col overflow-hidden">
                      <div className={`h-8 sm:h-16 ${prod.color} relative flex items-center justify-center overflow-hidden shrink-0`}>
                         <Icon className="w-3 h-3 sm:w-6 sm:h-6 text-white relative z-10" />
                      </div>
                      <div className="p-1 sm:p-2 flex flex-col gap-1 sm:gap-1.5 items-center">
                        <div className="w-3/4 h-1 sm:h-2 bg-gray-200 rounded-full mt-0.5 sm:mt-1"></div>
                        <div className="w-full h-1.5 sm:h-5 mt-0.5 sm:mt-2 bg-gray-100 rounded-[2px] sm:rounded flex items-center justify-center"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white overflow-hidden space-y-32">
      {servicios.map((servicio) => {
        const IconoMain = servicio.iconoTitulo;
        
        return (
          <div key={servicio.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className={`space-y-8 order-2 ${servicio.invertir ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${servicio.bgIcono} rounded-2xl flex items-center justify-center shrink-0 mt-1 shadow-inner`}>
                    <IconoMain className={`w-7 h-7 ${servicio.colorIcono}`} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    {servicio.titulo}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {servicio.funciones.map((funcion, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <Check className={`w-6 h-6 flex-shrink-0 ${servicio.colorIcono} opacity-80 group-hover:opacity-100 transition-opacity`} strokeWidth={2.5} />
                      <span className="text-gray-700 text-lg font-medium">{funcion}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                <a 
                  href="#contacto" 
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all duration-300 shadow-sm
                    ${servicio.bgIcono} ${servicio.colorIcono} ring-1 ring-inset ring-black/5 hover:shadow-md hover:-translate-y-1 hover:brightness-95`}
                >
                  {servicio.boton}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
              </div>

              <div className={`relative order-1 group ${servicio.invertir ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className={`absolute inset-0 translate-y-6 scale-[1.10] ${servicio.glowColor} blur-xl opacity-30 rounded-3xl z-0 group-hover:opacity-40 group-hover:translate-y-8 group-hover:blur-2xl transition-all duration-500`}></div>
                
                <div className="relative z-10 bg-white rounded-xl shadow-xl shadow-slate-900/5 border border-slate-100 overflow-hidden aspect-video lg:aspect-[4/3] flex flex-col group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
                  
                  {/* Top Bar del navegador adaptada para celular */}
                  <div className="h-5 sm:h-10 bg-slate-50/90 backdrop-blur-md border-b border-gray-200 flex items-center px-2 sm:px-4 gap-1 sm:gap-2 shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    <div className="ml-1 sm:ml-2 px-1.5 sm:px-3 py-0.5 sm:py-1 bg-white rounded-[4px] sm:rounded-md border border-gray-200 text-[5px] sm:text-[10px] text-gray-400 flex-1 max-w-[100px] sm:max-w-[200px] flex items-center gap-0.5 sm:gap-1 shadow-sm">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div> app.nubixsoftware.com
                    </div>
                  </div>
                  
                  {renderMockup(servicio.id)}

                </div>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}