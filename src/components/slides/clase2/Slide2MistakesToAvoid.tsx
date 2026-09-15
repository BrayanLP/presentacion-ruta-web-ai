import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle2, XCircle, 
  ShieldCheck, Smartphone, Code2, Bot, Layers
} from 'lucide-react';

interface MistakeItem {
  id: number;
  title: string;
  trap: string;
  antidote: string;
  icon: React.ElementType;
  color: string;
  tag: string;
}

const MISTAKES_LIST: MistakeItem[] = [
  {
    id: 1,
    title: 'El Micromanagement de Código',
    trap: 'Intentar escribir o corregir HTML/CSS a mano y frustrarse con errores de sintaxis.',
    antidote: 'Tú eres el CEO. Dale la instrucción clara al Web Developer y deja que él escriba el código y el Auditor lo revise.',
    icon: Code2,
    color: 'from-red-500 to-rose-600',
    tag: 'Mentalidad'
  },
  {
    id: 2,
    title: 'El "Mega Prompt" Saturado',
    trap: 'Pedirle en un solo mensaje gigante que haga toda la web, la base de datos y el blog de golpe.',
    antidote: 'Divide y vencerás. Construye componente por componente (Hero -> Servicios -> Testimonios -> FAQs).',
    icon: Layers,
    color: 'from-amber-500 to-orange-600',
    tag: 'Estrategia'
  },
  {
    id: 3,
    title: 'No Revisar en Pantallas Móviles',
    trap: 'Mirar solo la pantalla de tu computadora y olvidar cómo se ve en un smartphone.',
    antidote: 'El 80% de tus clientes vendrán desde WhatsApp y celular. Pídele al agente diseño Mobile-First desde el segundo cero.',
    icon: Smartphone,
    color: 'from-pink-500 to-purple-600',
    tag: 'Diseño'
  },
  {
    id: 4,
    title: 'Olvidar la Optimización GEO (Era IA)',
    trap: 'Pensar que con solo poner palabras clave en Google es suficiente para el futuro.',
    antidote: 'Activa siempre al GEO Specialist para inyectar Schema.org JSON-LD y que ChatGPT y Perplexity citen tu marca.',
    icon: Bot,
    color: 'from-purple-500 to-indigo-600',
    tag: 'Innovación'
  },
  {
    id: 5,
    title: 'No Usar el Kit de Skills Preparado',
    trap: 'Tratar de explicarle todas las reglas de diseño y conversión a la IA desde cero cada vez.',
    antidote: 'Inyecta los Skills listos (Web Design, Landing Page, Copywriting). Ahorras 90% de tiempo y aseguras calidad top.',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600',
    tag: 'Velocidad'
  }
];

export const Slide2MistakesToAvoid: React.FC = () => {
  const [selectedMistakeId, setSelectedMistakeId] = useState<number>(1);
  const activeMistake = MISTAKES_LIST.find((m) => m.id === selectedMistakeId) || MISTAKES_LIST[0];

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wide uppercase">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            Prevención de Errores
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• 5 Trampas Habituales</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mt-1">
          5 Errores Comunes y sus <span className="text-gradient-amber">Antídotos</span>
        </h2>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1 items-start">
        {/* Left column: 5 Mistakes list */}
        <div className="lg:col-span-5 flex flex-col gap-1.5">
          {MISTAKES_LIST.map((mistake) => {
            const isSelected = mistake.id === selectedMistakeId;
            const Icon = mistake.icon;

            return (
              <button
                key={mistake.id}
                onClick={() => setSelectedMistakeId(mistake.id)}
                className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400/90 shadow-md shadow-amber-500/10 ring-1 ring-amber-400/40 -translate-x-0.5'
                    : 'bg-slate-950/60 hover:bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${mistake.color} text-white shadow-md`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
                      Error #{mistake.id} • {mistake.tag}
                    </span>
                    <div className={`text-xs sm:text-[13px] font-bold truncate ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                      {mistake.title}
                    </div>
                  </div>
                </div>

                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400 animate-ping' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Right column: Deep dive into the trap and the antidote */}
        <div className="lg:col-span-7 glass-card p-4 sm:p-5 rounded-3xl border border-amber-500/40 bg-slate-950/95 flex flex-col justify-between shadow-2xl relative space-y-2.5">
          <div className="space-y-2.5">
            {/* Header of selected */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${activeMistake.color} text-white shadow-md`}>
                  <activeMistake.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                    Error #{activeMistake.id} • {activeMistake.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {activeMistake.title}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-mono font-bold border border-red-500/20">
                Peligro Común
              </span>
            </div>

            {/* The Trap (Red Box) */}
            <div className="p-3 rounded-2xl bg-red-950/40 border-2 border-red-500/40 space-y-1 shadow-sm">
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" /> La Trampa en la que caen los principiantes:
              </span>
              <p className="text-xs sm:text-[13px] text-red-200 leading-relaxed font-mono pt-0.5">
                {activeMistake.trap}
              </p>
            </div>

            {/* The Antidote (Emerald Box) */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border-2 border-emerald-500/50 space-y-1 shadow-md">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> El Antídoto del CEO Profesional:
              </span>
              <p className="text-xs sm:text-[13px] text-emerald-200 leading-relaxed font-medium pt-0.5">
                {activeMistake.antidote}
              </p>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-800/60">
            <span>💡 Conocer el error es el 50% de la victoria.</span>
            <span className="text-amber-400 font-semibold">Avanza con seguridad</span>
          </div>
        </div>
      </div>
    </div>
  );
};
