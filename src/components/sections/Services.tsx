import {
  Check, Search, ShoppingCart, Globe, BarChart3, ArrowRight,
  LayoutDashboard, Wallet, ReceiptText, ChartColumn, Package, Users,
  ScanBarcode, CupSoda, Candy, Popcorn, Cookie, AlertTriangle, HandCoins,
  Boxes, ShoppingBag, Truck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Fondo de la demo de Nubix Software: celeste claro con brillos azul y verde agua.
const fondoDemo = {
  backgroundColor: "#f1f6fc",
  backgroundImage: [
    "radial-gradient(60% 60% at 95% -10%, rgb(125 211 252 / 0.45), transparent 70%)",
    "radial-gradient(50% 50% at 100% 100%, rgb(45 212 191 / 0.22), transparent 70%)",
    "radial-gradient(45% 45% at 25% 110%, rgb(59 130 246 / 0.16), transparent 70%)",
  ].join(", "),
};

// Tarjeta de vidrio, igual a la clase .card de la demo
const tarjeta = "bg-white/85 border border-white/80 shadow-[0_1px_2px_rgb(11_27_54/0.04),0_10px_30px_-10px_rgb(11_27_54/0.12)]";
const brilloAzul = "shadow-[0_10px_24px_-8px_rgb(29_111_242/0.6)]";

const menuDemo: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "dashboard", label: "Resumen", icon: LayoutDashboard },
  { id: "pos", label: "Punto de Venta", icon: ShoppingCart },
  { id: "cash", label: "Caja", icon: Wallet },
  { id: "sales", label: "Ventas", icon: ReceiptText },
  { id: "stats", label: "Estadísticas", icon: ChartColumn },
  { id: "inventory", label: "Inventario", icon: Package },
  { id: "customers", label: "Clientes y Fiado", icon: Users },
];

// Productos de ejemplo con los mismos íconos y degradés por categoría que usa la demo
const productosDemo = [
  { nombre: "Gaseosa cola 500ml", precio: "$ 1.900", stock: "48 u.", icon: CupSoda, tile: "from-sky-400 to-blue-600", enTicket: 2 },
  { nombre: "Alfajor de chocolate", precio: "$ 1.200", stock: "50 u.", icon: Candy, tile: "from-teal-300 to-teal-500", enTicket: 3 },
  { nombre: "Papas fritas 85g", precio: "$ 2.400", stock: "24 u.", icon: Popcorn, tile: "from-blue-500 to-indigo-600", enTicket: 1 },
  { nombre: "Galletitas rellenas", precio: "$ 1.800", stock: "28 u.", icon: Cookie, tile: "from-cyan-400 to-blue-500", enTicket: 0 },
  { nombre: "Agua mineral 500ml", precio: "$ 1.200", stock: "60 u.", icon: CupSoda, tile: "from-sky-300 to-sky-500", enTicket: 0 },
  { nombre: "Chocolate con leche", precio: "$ 2.400", stock: "3 u.", icon: Candy, tile: "from-teal-400 to-sky-500", enTicket: 0, bajo: true },
  { nombre: "Maní salado 100g", precio: "$ 1.400", stock: "30 u.", icon: Popcorn, tile: "from-blue-500 to-indigo-600", enTicket: 0 },
  { nombre: "Gaseosa lima 500ml", precio: "$ 1.850", stock: "30 u.", icon: CupSoda, tile: "from-sky-400 to-blue-600", enTicket: 0 },
  { nombre: "Galletitas de agua", precio: "$ 2.000", stock: "15 u.", icon: Cookie, tile: "from-cyan-400 to-blue-500", enTicket: 0 },
];

function BarraLateral({ activa, compacta = false }: { activa: string; compacta?: boolean }) {
  return (
    <div
      className={`relative flex shrink-0 flex-col overflow-hidden rounded-[0.6rem] sm:rounded-[1.25rem] bg-gradient-to-b from-[#0b1b36] via-[#0d2447] to-[#0f3a6b] p-1 sm:p-2 text-[#b3c6dc] shadow-[0_15px_35px_-12px_rgb(11_27_54/0.45)] ${
        compacta ? "w-6 sm:w-12 items-center" : "w-[27%]"
      }`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-sky-400/20 blur-2xl"></div>
      <div className="pointer-events-none absolute -bottom-8 -left-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-teal-400/15 blur-2xl"></div>

      <div className={`relative flex items-center gap-1 sm:gap-2 pb-1.5 sm:pb-3 ${compacta ? "" : "px-0.5 sm:px-1"}`}>
        <img src="/logonubix.png" alt="" className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 rounded-[3px] sm:rounded-lg ring-1 ring-white/20" />
        {!compacta && (
          <div className="min-w-0">
            <p className="text-[6px] sm:text-[11px] font-bold leading-none text-white">Nubix</p>
            <p className="mt-px sm:mt-0.5 text-[3px] sm:text-[6px] font-medium uppercase tracking-[0.2em] text-sky-300/80">Software</p>
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-0.5 sm:gap-1">
        {menuDemo.map(({ id, label, icon: Icon }) => {
          const esActiva = id === activa;
          return (
            <div
              key={id}
              className={`flex items-center gap-1 sm:gap-1.5 rounded-[3px] sm:rounded-lg p-px sm:p-0.5 ${
                esActiva && !compacta ? "bg-white/12 text-white ring-1 ring-white/10" : ""
              }`}
            >
              <span
                className={`flex h-3 w-3 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-[3px] sm:rounded-md ${
                  esActiva ? `bg-gradient-to-br from-blue-500 to-teal-400 text-white ${brilloAzul}` : "bg-white/8"
                }`}
              >
                <Icon className="h-1.5 w-1.5 sm:h-3 sm:w-3" />
              </span>
              {!compacta && <span className="truncate text-[4px] sm:text-[8px] font-semibold">{label}</span>}
            </div>
          );
        })}
      </div>

      {!compacta && (
        <div className="relative mt-1 flex items-center gap-1 sm:gap-1.5 rounded-[3px] sm:rounded-lg bg-white/8 p-0.5 sm:p-1 ring-1 ring-white/10">
          <span className="flex h-3 w-3 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-[3px] sm:text-[6px] font-bold text-white">RD</span>
          <div className="min-w-0">
            <p className="truncate text-[4px] sm:text-[7px] font-semibold text-white">Roberto Díaz</p>
            <p className="text-[3px] sm:text-[5px] font-semibold uppercase tracking-wider text-sky-300/80">Dueño</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const servicios = [
    {
      id: "punto-venta",
      titulo: "Cobrá en segundos y facturá sin complicaciones",
      iconoTitulo: ShoppingCart,
      colorIcono: "text-blue-600",
      bgIcono: "bg-blue-100",
      glowColor: "bg-blue-500",
      url: "app.nubixsoftware.com",
      funciones: [
        "Vendé desde la compu o la tablet, con lector de códigos, impresora y cajón de dinero",
        "Emití facturas electrónicas válidas ante ARCA (ex AFIP) en cada venta",
        "Seguí vendiendo y facturando aunque se corte internet o ARCA esté caída",
        "Cobrá en efectivo, débito, crédito, Mercado Pago, transferencia",
        "Cada empleado entra con su usuario y ve solo lo que le corresponde"
      ],
      boton: "Ver punto de venta",
      invertir: false
    },
    {
      id: "gestion-negocio",
      titulo: "Tus ventas, tu stock y tu caja, siempre bajo control",
      iconoTitulo: BarChart3,
      colorIcono: "text-indigo-600",
      bgIcono: "bg-indigo-100",
      glowColor: "bg-indigo-500",
      url: "app.nubixsoftware.com",
      funciones: [
        "Mirá en un solo panel cuánto vendiste, cuánto ganaste y qué te falta",
        "Controlá el stock en tiempo real y recibí avisos antes de quedarte sin mercadería",
        "Actualizá los precios de una categoría o de todo el local en un solo paso",
        "Abrí y cerrá la caja con conteo y diferencia, y llevá el fiado de cada cliente",
        "Tomá decisiones con reportes de ventas por día, horario y producto"
      ],
      boton: "Conocer la gestión",
      invertir: true
    },
    {
      id: "diseno-web",
      titulo: "Llevá tu negocio a internet con una web propia",
      iconoTitulo: Globe,
      colorIcono: "text-teal-600",
      bgIcono: "bg-teal-100",
      glowColor: "bg-teal-500",
      url: "kioscocentral.com.ar",
      funciones: [
        "Páginas web y tiendas online a medida, con tu marca y tus productos",
        "Diseño moderno, rápido y pensado para verse perfecto en el celular",
        "Cobros con Mercado Pago y opciones de envío o retiro en el local",
        "Stock y precios sincronizados con tu sistema Nubix",
        "Panel propio para cargar productos, fotos y precios cuando quieras"
      ],
      boton: "Cotizar mi página web",
      invertir: false
    }
  ];

  const renderMockup = (id: string) => {
    switch (id) {
      case "punto-venta":
        return (
          <div className="flex-1 flex gap-1 sm:gap-3 p-1 sm:p-3 overflow-hidden text-[#152a4d]" style={fondoDemo}>
            <BarraLateral activa="pos" compacta />

            {/* Catálogo: buscador, categorías y productos */}
            {/* El padding deja lugar al borde azul de las tarjetas que están en el ticket */}
            <div className="flex-[7] min-w-0 flex flex-col gap-1 sm:gap-2 p-0.5 sm:p-1 overflow-hidden">
              <div className={`h-4 sm:h-8 shrink-0 rounded-full bg-white flex items-center px-1.5 sm:px-3 gap-1 sm:gap-2 ${tarjeta}`}>
                <Search className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#8399b3]" />
                <span className="flex-1 truncate text-[5px] sm:text-[9px] text-[#8399b3]">Buscar producto o escanear código...</span>
                <ScanBarcode className="hidden sm:block w-3 h-3 text-[#8399b3]" />
                <span className="rounded-[2px] sm:rounded bg-[#e8f0fa] px-0.5 sm:px-1 text-[4px] sm:text-[7px] font-semibold text-[#5b7391]">F2</span>
              </div>

              <div className="flex shrink-0 gap-0.5 sm:gap-1.5">
                {["Todas", "Bebidas", "Golosinas", "Snacks"].map((c, i) => (
                  <span
                    key={c}
                    className={`rounded-full px-1 sm:px-2.5 py-px sm:py-1 text-[4px] sm:text-[8px] font-semibold ${
                      i === 0 ? "bg-[#0b1b36] text-white" : "bg-white/80 text-[#43597a]"
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 content-start gap-1 sm:gap-2">
                {productosDemo.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.nombre}
                      className={`relative flex flex-col rounded-[5px] sm:rounded-xl p-1 sm:p-2 ${tarjeta} ${p.enTicket > 0 ? "ring-1 sm:ring-2 ring-blue-500" : ""}`}
                    >
                      {p.enTicket > 0 && (
                        <span className={`absolute right-0.5 top-0.5 sm:right-1.5 sm:top-1.5 flex h-2 w-2 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-blue-600 text-[4px] sm:text-[7px] font-bold text-white ${brilloAzul}`}>
                          {p.enTicket}
                        </span>
                      )}
                      <span className={`mb-0.5 sm:mb-1.5 flex h-3.5 w-3.5 sm:h-7 sm:w-7 items-center justify-center rounded-[3px] sm:rounded-lg bg-gradient-to-br text-white shadow-md ${p.tile}`}>
                        <Icon className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                      </span>
                      <span className="truncate text-[4px] sm:text-[8px] font-semibold text-[#0b1b36]">{p.nombre}</span>
                      <div className="mt-0.5 sm:mt-1.5 flex items-center justify-between gap-0.5">
                        <span className="text-[5px] sm:text-[10px] font-extrabold tracking-tight text-[#0b1b36]">{p.precio}</span>
                        <span className={`rounded-full px-0.5 sm:px-1.5 py-px text-[3px] sm:text-[6px] font-semibold ${p.bajo ? "bg-amber-50 text-amber-700" : "bg-teal-50 text-teal-700"}`}>
                          {p.stock}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ticket actual */}
            <div className={`flex-[3] min-w-0 flex flex-col overflow-hidden rounded-[6px] sm:rounded-2xl ${tarjeta}`}>
              <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 px-1 sm:px-2.5 pt-1 sm:pt-2.5 pb-0.5 sm:pb-1.5">
                <span className={`flex h-2.5 w-2.5 sm:h-5 sm:w-5 items-center justify-center rounded-[3px] sm:rounded-md bg-gradient-to-br from-blue-600 to-sky-400 text-white ${brilloAzul}`}>
                  <ReceiptText className="w-1.5 h-1.5 sm:w-3 sm:h-3" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[5px] sm:text-[9px] font-bold leading-tight text-[#0b1b36]">Ticket actual</p>
                  <p className="text-[3px] sm:text-[6px] text-[#5b7391]">6 unidades</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-0.5 sm:gap-1 overflow-hidden px-0.5 sm:px-1.5">
                {productosDemo.filter((p) => p.enTicket > 0).map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.nombre} className="flex items-center gap-0.5 sm:gap-1 rounded-[3px] sm:rounded-lg bg-[#f4f8fd] p-0.5 sm:p-1">
                      <span className={`flex h-2 w-2 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-[2px] sm:rounded bg-gradient-to-br text-white ${p.tile}`}>
                        <Icon className="w-1 h-1 sm:w-2.5 sm:h-2.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[3.5px] sm:text-[6.5px] font-semibold text-[#152a4d]">{p.nombre}</p>
                        <p className="text-[3px] sm:text-[5.5px] text-[#8399b3]">x{p.enTicket}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="shrink-0 space-y-px sm:space-y-0.5 border-t border-[#e8f0fa] bg-white/60 px-1 sm:px-2.5 pt-0.5 sm:pt-1.5 pb-1 sm:pb-2.5">
                <div className="flex justify-between text-[3px] sm:text-[6px] text-[#5b7391]"><span>Subtotal (neto)</span><span>$ 8.099</span></div>
                <div className="flex justify-between text-[3px] sm:text-[6px] text-[#5b7391]"><span>IVA 21% incluido</span><span>$ 1.701</span></div>
                <div className="flex items-end justify-between pt-px sm:pt-0.5">
                  <span className="text-[3.5px] sm:text-[6px] font-semibold uppercase tracking-wider text-[#5b7391]">Total</span>
                  <span className="text-[7px] sm:text-[15px] font-extrabold tracking-tight text-[#0b1b36]">$ 9.800</span>
                </div>
                <div className={`mt-0.5 sm:mt-1.5 flex items-center justify-center gap-0.5 sm:gap-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 py-0.5 sm:py-1.5 text-[4px] sm:text-[8px] font-semibold text-white ${brilloAzul}`}>
                  Cobrar <span className="rounded-[2px] bg-white/25 px-0.5 text-[3px] sm:text-[6px]">F9</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "gestion-negocio":
        return (
          <div className="flex-1 flex gap-1 sm:gap-3 p-1 sm:p-3 overflow-hidden text-[#152a4d]" style={fondoDemo}>
            <BarraLateral activa="dashboard" />

            <div className="flex-1 min-w-0 flex flex-col gap-1 sm:gap-2 overflow-hidden">
              {/* Ventas de hoy */}
              <div className="flex shrink-0 gap-1 sm:gap-2">
                <div className="relative flex-[3] min-w-0 overflow-hidden rounded-[6px] sm:rounded-2xl bg-gradient-to-br from-[#0b1b36] via-[#0d2a55] to-blue-600 p-1.5 sm:p-3 text-white shadow-[0_15px_35px_-12px_rgb(11_27_54/0.45)]">
                  <div className="pointer-events-none absolute -right-4 -top-4 h-12 w-12 sm:h-24 sm:w-24 rounded-full bg-sky-400/30 blur-2xl"></div>
                  <div className="pointer-events-none absolute -bottom-6 left-1/3 h-10 w-10 sm:h-20 sm:w-20 rounded-full bg-teal-400/25 blur-2xl"></div>
                  <div className="relative">
                    <p className="text-[3.5px] sm:text-[6.5px] font-semibold uppercase tracking-[0.2em] text-sky-200">Ventas de hoy</p>
                    <p className="mt-px sm:mt-0.5 text-[10px] sm:text-[22px] font-extrabold leading-tight tracking-tight">$ 187.400</p>
                    <div className="mt-1 sm:mt-2 grid grid-cols-3 gap-0.5 sm:gap-1.5">
                      {[
                        { label: "Ganancia", valor: "$ 52.300", nota: "28% de margen", tono: "text-teal-300" },
                        { label: "Operaciones", valor: "64", nota: "ventas", tono: "text-sky-200/80" },
                        { label: "Ticket prom.", valor: "$ 2.928", nota: "por venta", tono: "text-sky-200/80" },
                      ].map((k) => (
                        <div key={k.label} className="rounded-[3px] sm:rounded-lg bg-white/10 p-0.5 sm:p-1.5 ring-1 ring-white/10">
                          <p className="truncate text-[3px] sm:text-[5.5px] font-semibold uppercase tracking-wider text-sky-200">{k.label}</p>
                          <p className="text-[5px] sm:text-[10px] font-bold">{k.valor}</p>
                          <p className={`truncate text-[3px] sm:text-[5.5px] ${k.tono}`}>{k.nota}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-[2] min-w-0 flex flex-col gap-0.5 sm:gap-1.5">
                  {[
                    { label: "Valor del stock", valor: "$ 1.248.600", icon: Boxes, tile: "from-blue-500 to-indigo-600" },
                    { label: "Faltantes", valor: "5", icon: AlertTriangle, tile: "from-amber-400 to-orange-500" },
                    { label: "Fiado pendiente", valor: "$ 34.200", icon: HandCoins, tile: "from-sky-400 to-teal-500" },
                  ].map(({ label, valor, icon: Icon, tile }) => (
                    <div key={label} className={`flex flex-1 items-center gap-1 sm:gap-1.5 rounded-[4px] sm:rounded-xl px-1 sm:px-2 ${tarjeta}`}>
                      <span className={`flex h-2.5 w-2.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-[2px] sm:rounded-md bg-gradient-to-br text-white shadow-md ${tile}`}>
                        <Icon className="w-1.5 h-1.5 sm:w-3 sm:h-3" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[3px] sm:text-[5.5px] font-semibold uppercase tracking-wider text-[#5b7391]">{label}</p>
                        <p className="truncate text-[5px] sm:text-[10px] font-extrabold tracking-tight text-[#0b1b36]">{valor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evolución y más vendidos */}
              <div className="flex-1 min-h-0 flex gap-1 sm:gap-2">
                <div className={`flex-[3] min-w-0 flex flex-col rounded-[6px] sm:rounded-2xl p-1 sm:p-2.5 ${tarjeta}`}>
                  <div className="mb-0.5 sm:mb-1.5 flex shrink-0 items-start justify-between gap-1">
                    <div className="min-w-0">
                      <p className="truncate text-[4.5px] sm:text-[8.5px] font-bold text-[#0b1b36]">Evolución de los últimos 7 días</p>
                      <p className="text-[3px] sm:text-[6px] text-[#5b7391]">Total vendido por día</p>
                    </div>
                    <div className="flex shrink-0 rounded-full bg-[#e8f0fa] p-px text-[3px] sm:text-[5.5px] font-semibold">
                      <span className="rounded-full bg-white px-0.5 sm:px-1.5 py-px text-[#0b1b36] shadow-sm">Ventas</span>
                      <span className="px-0.5 sm:px-1.5 py-px text-[#5b7391]">Ganancia</span>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 flex items-end gap-0.5 sm:gap-1.5">
                    {[
                      { d: "jue", h: 58, v: "$142k" }, { d: "vie", h: 74, v: "$181k" },
                      { d: "sáb", h: 88, v: "$215k" }, { d: "dom", h: 46, v: "$112k" },
                      { d: "lun", h: 62, v: "$151k" }, { d: "mar", h: 55, v: "$134k" },
                      { d: "Hoy", h: 77, v: "$187k" }
                    ].map((b, i) => {
                      const hoy = i === 6;
                      return (
                        <div key={b.d} className="flex h-full flex-1 flex-col items-center justify-end gap-px sm:gap-0.5">
                          <span className={`text-[3px] sm:text-[5.5px] font-bold ${hoy ? "text-blue-700" : "text-[#5b7391]"}`}>{b.v}</span>
                          <div
                            className={`w-full rounded-[2px] sm:rounded-md ${hoy ? `bg-gradient-to-t from-blue-600 to-sky-400 ${brilloAzul}` : "bg-gradient-to-t from-[#d5e2f1] to-[#e8f0fa]"}`}
                            style={{ height: `${b.h}%` }}
                          ></div>
                          <span className={`text-[3px] sm:text-[5.5px] font-semibold capitalize ${hoy ? "text-blue-700" : "text-[#5b7391]"}`}>{b.d}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={`flex-[2] min-w-0 flex flex-col rounded-[6px] sm:rounded-2xl p-1 sm:p-2.5 ${tarjeta}`}>
                  <p className="text-[4.5px] sm:text-[8.5px] font-bold text-[#0b1b36]">Más vendidos</p>
                  <p className="mb-0.5 sm:mb-1.5 text-[3px] sm:text-[6px] text-[#5b7391]">Unidades de 7 días</p>
                  <div className="flex flex-1 flex-col justify-around gap-0.5">
                    {[
                      { n: "Gaseosa cola 500ml", q: 142 }, { n: "Alfajor de chocolate", q: 118 },
                      { n: "Papas fritas 85g", q: 87 }, { n: "Agua mineral 500ml", q: 64 }
                    ].map((t, i) => (
                      <div key={t.n}>
                        <div className="mb-px sm:mb-0.5 flex items-center justify-between gap-0.5 text-[3px] sm:text-[6px]">
                          <span className="flex min-w-0 items-center gap-0.5 sm:gap-1">
                            <span className="flex h-1.5 w-1.5 sm:h-3 sm:w-3 shrink-0 items-center justify-center rounded-full bg-[#e8f0fa] font-bold text-[#43597a]">{i + 1}</span>
                            <span className="truncate font-medium text-[#152a4d]">{t.n}</span>
                          </span>
                          <span className="shrink-0 font-bold text-[#0b1b36]">{t.q} u.</span>
                        </div>
                        <div className="h-0.5 sm:h-1 rounded-full bg-[#e8f0fa]">
                          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400" style={{ width: `${(t.q / 142) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "diseno-web":
        return (
          <div className="flex-1 flex flex-col gap-1 sm:gap-2.5 p-1 sm:p-3 overflow-hidden text-[#152a4d]" style={fondoDemo}>
            {/* Barra de navegación de la tienda */}
            <div className={`flex h-5 sm:h-9 shrink-0 items-center justify-between rounded-full px-1 sm:px-2 ${tarjeta}`}>
              <div className="flex items-center gap-0.5 sm:gap-1.5">
                <span className={`flex h-3 w-3 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white ${brilloAzul}`}>
                  <ShoppingBag className="w-1.5 h-1.5 sm:w-3 sm:h-3" />
                </span>
                <span className="text-[5px] sm:text-[10px] font-extrabold tracking-tight text-[#0b1b36]">Kiosco <span className="text-blue-600">Central</span></span>
              </div>
              <div className="flex gap-1.5 sm:gap-3 text-[4px] sm:text-[8px] font-semibold">
                <span className="text-blue-600">Inicio</span>
                <span className="text-[#5b7391]">Productos</span>
                <span className="text-[#5b7391]">Contacto</span>
              </div>
              <span className="relative flex h-3 w-3 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#0b1b36] text-white">
                <ShoppingCart className="w-1.5 h-1.5 sm:w-3 sm:h-3" />
                <span className="absolute -right-0.5 -top-0.5 flex h-1.5 w-1.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-sky-400 text-[3px] sm:text-[6px] font-bold text-[#0b1b36] ring-1 ring-white">2</span>
              </span>
            </div>

            {/* Portada */}
            <div className="relative shrink-0 overflow-hidden rounded-[6px] sm:rounded-2xl bg-gradient-to-br from-[#0b1b36] via-[#0d2a55] to-blue-600 px-2 py-1.5 sm:px-5 sm:py-4 text-white shadow-[0_15px_35px_-12px_rgb(11_27_54/0.45)]">
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 sm:h-32 sm:w-32 rounded-full bg-sky-400/30 blur-2xl"></div>
              <div className="pointer-events-none absolute -bottom-8 left-1/2 h-12 w-12 sm:h-24 sm:w-24 rounded-full bg-teal-400/25 blur-2xl"></div>
              <div className="relative">
                <p className="text-[3.5px] sm:text-[6.5px] font-semibold uppercase tracking-[0.2em] text-sky-200">Envíos en el día</p>
                <p className="mt-px sm:mt-1 text-[8px] sm:text-[17px] font-extrabold leading-tight tracking-tight">Tu kiosco, ahora online</p>
                <p className="mt-px sm:mt-0.5 text-[4px] sm:text-[8px] text-sky-100/80">Pedí desde el celu y pagá con Mercado Pago.</p>
                <div className="mt-1 sm:mt-2.5 flex gap-0.5 sm:gap-1.5">
                  <span className="rounded-full bg-white px-1.5 sm:px-3 py-0.5 sm:py-1 text-[4px] sm:text-[8px] font-semibold text-[#0b1b36]">Ver productos</span>
                  <span className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 text-[4px] sm:text-[8px] font-semibold text-white ring-1 ring-white/20">
                    <Truck className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5" /> Envíos
                  </span>
                </div>
              </div>
            </div>

            {/* Productos */}
            <div className="flex shrink-0 items-end justify-between px-0.5 sm:px-1">
              <div>
                <p className="text-[5px] sm:text-[10px] font-bold text-[#0b1b36]">Lo más pedido</p>
                <p className="text-[3.5px] sm:text-[7px] text-[#5b7391]">Precios actualizados con el stock del local</p>
              </div>
              <span className="text-[4px] sm:text-[7.5px] font-semibold text-blue-600">Ver todo →</span>
            </div>
            <div className="grid grid-cols-4 content-start gap-1 sm:gap-2 overflow-hidden">
              {[0, 1, 2, 3, 6, 4, 7, 8].map((i) => productosDemo[i]).map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.nombre} className={`flex flex-col rounded-[5px] sm:rounded-xl p-1 sm:p-2 ${tarjeta}`}>
                    <div className={`mb-0.5 sm:mb-1.5 flex h-5 sm:h-11 items-center justify-center rounded-[3px] sm:rounded-lg bg-gradient-to-br text-white ${p.tile}`}>
                      <Icon className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
                    </div>
                    <span className="truncate text-[4px] sm:text-[7.5px] font-semibold text-[#0b1b36]">{p.nombre}</span>
                    <div className="mt-0.5 sm:mt-1 flex items-center justify-between gap-0.5">
                      <span className="text-[5px] sm:text-[9.5px] font-extrabold tracking-tight text-[#0b1b36]">{p.precio}</span>
                      <span className={`flex h-2 w-2 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-[5px] sm:text-[9px] font-bold leading-none text-white ${brilloAzul}`}>+</span>
                    </div>
                  </div>
                );
              })}
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

                <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 overflow-hidden aspect-video lg:aspect-[4/3] flex flex-col group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">

                  {/* Top Bar del navegador adaptada para celular */}
                  <div className="h-5 sm:h-9 bg-white/90 backdrop-blur-md border-b border-[#e8f0fa] flex items-center px-2 sm:px-4 gap-1 sm:gap-2 shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400"></div>
                    <div className="ml-1 sm:ml-2 px-1.5 sm:px-3 py-0.5 sm:py-1 bg-[#f4f8fd] rounded-full border border-[#e8f0fa] text-[5px] sm:text-[10px] text-[#8399b3] flex-1 max-w-[100px] sm:max-w-[200px] flex items-center gap-0.5 sm:gap-1">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-teal-500 animate-pulse"></div> {servicio.url}
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
