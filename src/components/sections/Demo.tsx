import { Download, MonitorDown, MousePointerClick, Rocket, ShieldCheck, Gift, Info } from 'lucide-react';

const linkDescarga = "https://drive.google.com/file/d/1rQ8lMsrw7H18Lhe2eUFfouAYzkfNud5r/view?usp=drive_link";

// Mismo fondo celeste con brillos que usan los mockups de la demo
const fondoDemo = {
  backgroundColor: "#f1f6fc",
  backgroundImage: [
    "radial-gradient(60% 60% at 95% -10%, rgb(125 211 252 / 0.45), transparent 70%)",
    "radial-gradient(50% 50% at 100% 100%, rgb(45 212 191 / 0.22), transparent 70%)",
    "radial-gradient(45% 45% at 25% 110%, rgb(59 130 246 / 0.16), transparent 70%)",
  ].join(", "),
};

const tarjeta = "bg-white/85 border border-white/80 shadow-[0_1px_2px_rgb(11_27_54/0.04),0_10px_30px_-10px_rgb(11_27_54/0.12)]";

const pasos = [
  { icon: MonitorDown, titulo: "Descargá", texto: "Bajá el instalador desde Google Drive.", tile: "from-blue-600 to-sky-400" },
  { icon: MousePointerClick, titulo: "Instalá", texto: "Abrí el archivo y seguí los pasos. No pide permisos de administrador.", tile: "from-sky-400 to-teal-400" },
  { icon: Rocket, titulo: "Probá", texto: "Cargá productos, hacé ventas y cerrá la caja como en tu kiosco.", tile: "from-teal-300 to-teal-500" },
];

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-[2.5rem] overflow-hidden border border-[#e8f0fa] shadow-xl shadow-slate-900/5" style={fondoDemo}>
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16">

            {/* Columna Izquierda: Textos y botón */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-white/80 text-xs font-bold text-blue-600 shadow-sm mb-5">
                <Gift className="w-3.5 h-3.5" /> Demo gratuita
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
                Probá <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Nubix Software</span> en tu computadora
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Descargá la demo y recorré el punto de venta, la caja, el inventario y las estadísticas antes de decidir. Sin registrarte y sin costo.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={linkDescarga}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-sky-500 shadow-[0_10px_24px_-8px_rgb(29_111_242/0.6)] hover:shadow-[0_14px_30px_-8px_rgb(29_111_242/0.75)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Descargar demo
                </a>
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                  <ShieldCheck className="w-5 h-5 text-teal-500" /> Para Windows 10 y 11
                </div>
              </div>

              <p className="mt-6 flex items-start gap-2 text-sm text-gray-500 max-w-xl mx-auto lg:mx-0 text-left">
                <Info className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                <span>
                  Si Windows muestra el aviso "Windows protegió su PC", tocá <strong className="text-gray-700">Más información</strong> y después <strong className="text-gray-700">Ejecutar de todas formas</strong>.
                </span>
              </p>
            </div>

            {/* Columna Derecha: Pasos */}
            <div className="flex flex-col gap-4">
              {pasos.map(({ icon: Icon, titulo, texto, tile }, i) => (
                <div key={titulo} className={`flex items-center gap-4 sm:gap-5 rounded-2xl p-5 sm:p-6 ${tarjeta} transition-transform duration-300 hover:-translate-y-1`}>
                  <span className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br text-white shadow-md ${tile}`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8399b3]">Paso {i + 1}</p>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">{titulo}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{texto}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
