import React, { useState } from 'react';
import { Sparkles, Check, Play } from 'lucide-react';

export const Slide0AIStack: React.FC = () => {
  const [tested, setTested] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
          El Motor Inteligente #02
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          🤖 Antigravity IDE & Google AI Pro
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          El entorno donde los agentes de IA no solo sugieren código, sino que crean aplicaciones completas de forma autónoma.
        </p>
      </div>

      {/* Main split comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-auto items-center">
        {/* Left: 4 Steps */}
        <div className="space-y-4">
          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Instalar Antigravity IDE</h4>
              <p className="text-slate-400 text-xs mt-0.5">Descarga el ejecutable oficial e instálalo en tu sistema operativo.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Iniciar Sesión con Google</h4>
              <p className="text-slate-400 text-xs mt-0.5">Autentica tu cuenta para sincronizar tus proyectos y configuraciones.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 font-mono font-bold flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Tener Google AI Pro Activo</h4>
              <p className="text-slate-400 text-xs mt-0.5">Desbloquea los modelos más potentes con capacidades de razonamiento profundo.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 font-mono font-bold flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Verificar que Responda</h4>
              <p className="text-slate-400 text-xs mt-0.5">Comprueba que el agente pueda leer archivos, ejecutar comandos y crear interfaces.</p>
            </div>
          </div>
        </div>

        {/* Right: Mock IDE Terminal Card */}
        <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">antigravity-agent // v2.0</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold uppercase">
              Pro Mode
            </span>
          </div>

          <div className="font-mono text-xs space-y-2 text-slate-300">
            <p className="text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conectado a Google AI Pro Engine (Gemini 2.5/3.7 Reasoning)</span>
            </p>
            <p className="text-slate-400">
              <span className="text-cyan-400">user@ruta-web:~$</span> Antigravity, ¿estás listo para construir la web?
            </p>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs leading-relaxed">
              <p className="text-brand-400 font-semibold mb-1">🤖 Antigravity Assistant:</p>
              "Listo. Tengo acceso a las herramientas del sistema, navegador y terminal. Dame el brief del negocio y comenzaremos a estructurar los componentes."
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">Estado: {tested ? '✅ Verificado y Conectado' : '⏳ Pendiente de Test'}</span>
            <button
              onClick={() => setTested(true)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-all flex items-center gap-1.5"
            >
              {tested ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5" />}
              <span>{tested ? '¡Test Superado!' : 'Simular Test de Conexión'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer advice */}
      <div className="text-xs text-slate-400 font-mono flex items-center justify-between border-t border-slate-800/80 pt-4">
        <span>💡 ¿Por qué Antigravity? Menos tiempo peleando con sintaxis, más tiempo resolviendo necesidades reales.</span>
      </div>
    </div>
  );
};
