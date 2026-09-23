import React, { useState } from 'react';
import { 
  Smartphone, Monitor, CheckCircle2, AlertTriangle, 
  Menu, X, MessageCircle, ShieldCheck
} from 'lucide-react';

export const Slide4MobileFirst: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Smartphone className="w-3.5 h-3.5" /> Estándar de la Industria
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Prioridad Absoluta: La Versión Móvil
          </h2>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              deviceMode === 'mobile'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-transparent'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Móvil (375px)</span>
          </button>
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              deviceMode === 'desktop'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-transparent'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Escritorio (Full)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-center">
        {/* Left: Device Simulator Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          {deviceMode === 'mobile' ? (
            /* Smartphone Frame */
            <div className="w-[280px] sm:w-[300px] h-[440px] rounded-[36px] bg-slate-100 dark:bg-slate-950 border-4 border-slate-300 dark:border-slate-700/80 shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-950/40 p-3 flex flex-col justify-between relative overflow-hidden">
              {/* Top Notch / Speaker */}
              <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-100 dark:bg-slate-950 mr-2" />
                <div className="w-8 h-1 bg-slate-200 dark:bg-slate-900 rounded-full" />
              </div>

              {/* Mobile Screen Content */}
              <div className="flex-1 rounded-2xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800/80 p-3 flex flex-col justify-between overflow-y-auto relative">
                {/* Mobile Navbar */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="font-extrabold text-xs text-slate-900 dark:text-white">TuMarca⚡</span>
                  <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400"
                  >
                    {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </button>
                </div>

                {/* Mobile Menu Dropdown Simulation */}
                {mobileMenuOpen && (
                  <div className="p-3 my-2 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono space-y-2 animate-fadeIn">
                    <div className="text-slate-900 dark:text-white hover:text-cyan-600 dark:text-cyan-400 py-1 border-b border-slate-200 dark:border-slate-800">Servicios</div>
                    <div className="text-slate-900 dark:text-white hover:text-cyan-600 dark:text-cyan-400 py-1 border-b border-slate-200 dark:border-slate-800">Beneficios</div>
                    <div className="text-slate-900 dark:text-white hover:text-cyan-600 dark:text-cyan-400 py-1">Contacto</div>
                  </div>
                )}

                {/* Mobile Hero preview */}
                <div className="space-y-2 py-3 text-center my-auto">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                    Mobile First
                  </span>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                    Multiplica tus clientes con una web optimizada
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Carga en 0.8s en 4G/5G.
                  </p>
                  <button className="w-full py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold shadow-md">
                    Pedir Presupuesto
                  </button>
                </div>

                {/* Floating WhatsApp in Thumb Zone */}
                <div className="flex justify-end pt-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 animate-pulse cursor-pointer">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-28 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2 shrink-0" />
            </div>
          ) : (
            /* Desktop Monitor Frame */
            <div className="w-full max-w-[420px] h-[320px] rounded-2xl bg-slate-100 dark:bg-slate-950 border-4 border-slate-300 dark:border-slate-700 shadow-2xl p-3 flex flex-col justify-between">
              {/* Browser Bar */}
              <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <div className="flex-1 ml-2 px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                  https://tumarca.com
                </div>
              </div>

              {/* Desktop Screen Content */}
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">TuMarca⚡</span>
                  <div className="flex gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>Servicios</span>
                    <span>Beneficios</span>
                    <span>FAQs</span>
                  </div>
                  <button className="px-2 py-1 rounded bg-amber-400 text-slate-950 text-[10px] font-bold">
                    WhatsApp
                  </button>
                </div>

                <div className="text-center space-y-1 my-auto">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Web Corporativa de Alto Impacto</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Rejilla expandida de 3 columnas para pantallas grandes.</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300">Servicio 1</div>
                  <div className="p-2 rounded bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300">Servicio 2</div>
                  <div className="p-2 rounded bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 dark:text-slate-300">Servicio 3</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: The 4 Golden Rules of Mobile-First */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> La Realidad del Mercado Hoy
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <strong className="text-slate-900 dark:text-white">85 de cada 100 visitas</strong> provienen de smartphones. Si tu web se ve increíble en laptop pero el texto es minúsculo en teléfono, estás perdiendo el 85% de tus ventas potenciales.
            </p>
          </div>

          {/* 4 Rules List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 1. Zona del Pulgar (Thumb Zone)
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                El botón de WhatsApp y los CTAs principales deben estar abajo a la derecha, al alcance de una mano.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 2. Botones de 44x44px Mínimo
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Áreas de toque amplias para que nadie toque el botón equivocado por error.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 3. Menú Hamburguesa Accesible
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Radix Dialog para abrir y cerrar el menú sin trabas ni saltos de scroll.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 4. Textos a 16px sin Zoom
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Tipografía legible sin obligar al usuario a pellizcar la pantalla.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Tailwind garantiza esto con prefijos limpios: <code className="text-slate-900 dark:text-white">sm: md: lg:</code>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span>📱 Siempre audita primero en pantalla pequeña; lo grande se acomoda solo.</span>
        <span className="hidden sm:inline text-cyan-600 dark:text-cyan-400">Prueba el switch arriba Móvil vs Escritorio</span>
      </div>
    </div>
  );
};
