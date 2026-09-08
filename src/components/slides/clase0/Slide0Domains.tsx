import React, { useState } from 'react';
import { Search, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const Slide0Domains: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('minegocio');

  const cleanTerm = searchTerm.toLowerCase().replace(/[^a-z0-9-]/g, '');

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-yellow-400 font-semibold tracking-wider uppercase">
          Estrategia de Naming #04
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          🌐 Traer 3 Opciones de Dominio
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Tu dirección en internet debe ser memorable, corta y fácil de dictar por teléfono o audio de WhatsApp.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        {/* Left rules (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-card p-5 rounded-xl border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Reglas de Oro para Elegir Dominio</span>
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Regla de la Radio:</strong> Si se lo dictas a un amigo por voz, ¿sabe cómo escribirlo sin dudar?</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Sin caracteres complejos:</strong> Evita números confusos (0 vs O), guiones (-) y letras duplicadas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Extensión adecuada:</strong> <code>.com</code> (estándar global), <code>.pe / .co / .mx / .es</code> (negocio local con arraigo).</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="glass-panel p-3.5 rounded-xl text-center border-l-2 border-l-emerald-500">
              <div className="text-xs text-slate-400 font-mono">OPCIÓN 1</div>
              <div className="text-sm font-bold text-white mt-1">Nombre Exacto</div>
              <div className="text-[11px] text-emerald-400 font-mono">marca.com</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center border-l-2 border-l-cyan-500">
              <div className="text-xs text-slate-400 font-mono">OPCIÓN 2</div>
              <div className="text-sm font-bold text-white mt-1">Con Acción / Local</div>
              <div className="text-[11px] text-cyan-400 font-mono">marcalocal.pe</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center border-l-2 border-l-violet-500">
              <div className="text-xs text-slate-400 font-mono">OPCIÓN 3</div>
              <div className="text-sm font-bold text-white mt-1">Verbo o Palabra</div>
              <div className="text-[11px] text-violet-400 font-mono">soymarca.com</div>
            </div>
          </div>
        </div>

        {/* Right: Live Interactive Domain Simulator (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-yellow-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-yellow-400 font-bold uppercase flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" /> Simulador de Naming
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Vista Previa</span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe el nombre de tu marca..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-mono focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="space-y-2 pt-1">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-semibold">{cleanTerm || 'ejemplo'}<span className="text-emerald-400 font-bold">.com</span></span>
              <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded">Global</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-semibold">{cleanTerm || 'ejemplo'}<span className="text-cyan-400 font-bold">.pe</span></span>
              <span className="text-cyan-400 text-[11px] bg-cyan-500/10 px-2 py-0.5 rounded">Local Perú</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-semibold">soy{cleanTerm || 'ejemplo'}<span className="text-violet-400 font-bold">.com</span></span>
              <span className="text-violet-400 text-[11px] bg-violet-500/10 px-2 py-0.5 rounded">Marca</span>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border-l-4 border-l-yellow-500">
        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
        <span className="text-xs md:text-sm text-slate-200">
          ⚠️ <strong>IMPORTANTE:</strong> <u>No compres ningún dominio todavía</u>. Primero estructuramos la web, validamos la propuesta de valor con los alumnos y luego compramos el ideal.
        </span>
      </div>
    </div>
  );
};
