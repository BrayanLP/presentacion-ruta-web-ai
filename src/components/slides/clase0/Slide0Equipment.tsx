import React from 'react';
import { Laptop, Wifi, HardDrive, CheckCircle2, AlertCircle } from 'lucide-react';

export const Slide0Equipment: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
          Requisito Físico #01
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          💻 Tu Estación de Trabajo
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          No necesitas una supercomputadora: la mayor parte del procesamiento pesado se ejecuta con IA y en la nube.
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {/* Card 1: Laptop */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Laptop className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">1. Laptop o PC</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Windows, macOS o Linux. Solo necesitas un navegador moderno (Chrome, Edge o Brave) y poder ejecutar Antigravity IDE.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>Mínimo 4GB - 8GB RAM</span>
          </div>
        </div>

        {/* Card 2: Internet */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Wifi className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">2. Internet Estable</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                La comunicación en tiempo real con los modelos de IA de Google y el despliegue automático a Vercel requieren baja latencia.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>Recomendado &gt; 15-20 Mbps</span>
          </div>
        </div>

        {/* Card 3: Storage */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <HardDrive className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">3. Espacio en Disco</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tener al menos 5 GB a 10 GB libres para instalar Node.js, librerías y descargar los recursos visuales del proyecto.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-violet-400 font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>5 - 10 GB Libres</span>
          </div>
        </div>
      </div>

      {/* Tip Banner */}
      <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border-l-4 border-l-emerald-500">
        <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <p className="text-xs md:text-sm text-slate-300">
          <strong className="text-white font-semibold">Consejo Pro:</strong> Si estás en laptop, mantenla conectada al cargador durante las sesiones de desarrollo con IA para evitar bajadas de rendimiento.
        </p>
      </div>
    </div>
  );
};
