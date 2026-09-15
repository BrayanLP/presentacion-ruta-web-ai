import React, { useState } from 'react';
import { 
  Crown, CheckCircle2, XCircle, MessageSquare, 
  Eye, Wrench, Sparkles, Zap
} from 'lucide-react';

export const Slide2DirectingAgents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'formula' | 'review' | 'feedback'>('formula');

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Manual del CEO
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• Comunicación de Alto Rendimiento</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mt-1">
          Cómo Dirigir a tu <span className="text-gradient-amber">Equipo de Agentes</span>
        </h2>
      </div>

      {/* 3 Steps Navigation Pills */}
      <div className="flex items-center gap-2 my-1.5">
        <button
          onClick={() => setActiveTab('formula')}
          className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'formula'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-extrabold'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>1. Dar Instrucciones</span>
        </button>

        <button
          onClick={() => setActiveTab('review')}
          className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'review'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-extrabold'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>2. Auditar en Vivo</span>
        </button>

        <button
          onClick={() => setActiveTab('feedback')}
          className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'feedback'
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-extrabold'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>3. Ajustes Quirúrgicos</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="my-auto py-1">
        {activeTab === 'formula' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* 5-Part Formula Cards */}
            <div className="lg:col-span-6 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-1">
                La Fórmula del Prompt Maestro (5 Elementos):
              </span>
              
              <div className="grid grid-cols-1 gap-1.5">
                {/* 1. ROL */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/40 flex items-start gap-2.5 shadow-sm">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-mono font-extrabold shrink-0 mt-0.5 border border-amber-500/40">
                    1. ROL
                  </span>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="text-slate-400">Identidad: </span>
                    <strong className="text-amber-300 font-mono">"Actúa como Web Developer"</strong>
                  </div>
                </div>

                {/* 2. SKILL */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-purple-500/40 flex items-start gap-2.5 shadow-sm">
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-mono font-extrabold shrink-0 mt-0.5 border border-purple-500/40">
                    2. SKILL
                  </span>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="text-slate-400">Superpoder: </span>
                    <strong className="text-purple-300 font-mono">"Carga el Skill 'Landing Page'"</strong>
                  </div>
                </div>

                {/* 3. CONTEXTO */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-start gap-2.5 shadow-sm">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-extrabold shrink-0 mt-0.5 border border-cyan-500/40">
                    3. CONTEXTO
                  </span>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="text-slate-400">Brief Clase 1: </span>
                    <strong className="text-cyan-300 font-mono">"Basándote en nuestro Brief de Negocio"</strong>
                  </div>
                </div>

                {/* 4. TAREA */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 flex items-start gap-2.5 shadow-sm">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-extrabold shrink-0 mt-0.5 border border-emerald-500/40">
                    4. TAREA
                  </span>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="text-slate-400">Misión: </span>
                    <strong className="text-emerald-300 font-mono">"Construye la sección Hero y el botón WhatsApp"</strong>
                  </div>
                </div>

                {/* 5. LÍMITES */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-rose-500/40 flex items-start gap-2.5 shadow-sm">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-mono font-extrabold shrink-0 mt-0.5 border border-rose-500/40">
                    5. LÍMITES
                  </span>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="text-slate-400">Reglas: </span>
                    <strong className="text-rose-300 font-mono">"Usa Tailwind, tipografía Inter y diseño mobile"</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
              {/* Bad Prompt Box */}
              <div className="p-4 rounded-2xl bg-red-950/40 border-2 border-red-500/50 shadow-lg space-y-2">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase font-mono">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>❌ El Mal Prompt (El novato que delega a ciegas)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#160608] border border-red-500/30">
                  <p className="text-xs sm:text-[13px] font-mono text-red-200 leading-relaxed">
                    "Hazme una página web bonita para mi negocio de pizzas."
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-red-300 font-medium">
                  <span>⚠️ Resultado: Plantilla genérica, sin conversión, sin WhatsApp y sin estrategia.</span>
                </div>
              </div>

              {/* CEO Master Prompt Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border-2 border-emerald-500/60 shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>✅ El Prompt de CEO (Dirige con maestría técnica)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06140d] border border-emerald-500/40 shadow-inner">
                  <p className="text-xs sm:text-[13px] font-mono text-emerald-200 leading-relaxed font-medium">
                    "Actúa como Web Developer. Carga el Skill 'Landing Page' y utiliza nuestro Brief de Negocio. Construye la HeroSection con título persuasivo, botón directo a WhatsApp y diseño mobile-first."
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold">
                  <span>✓ Resultado: Código limpio, diseño de agencia, conversión inmediata y cero errores.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'review' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-cyan-500/40 bg-slate-950/90 space-y-2.5 shadow-lg">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 w-fit">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Paso 1: Mira el Navegador en Vivo</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No leas 500 líneas de código en el editor. Abre la vista previa en vivo (<code className="text-cyan-300 font-mono">localhost:5173</code>) y valida visualmente cómo luce la página.
              </p>
              <span className="text-[11px] font-mono text-cyan-400 block pt-1">✦ El diseño entra por los ojos</span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-amber-500/40 bg-slate-950/90 space-y-2.5 shadow-lg">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 w-fit">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Paso 2: Prueba Todas las Acciones</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Haz clic en el botón de WhatsApp, abre el menú móvil en pantalla reducida y navega entre secciones. Comprueba que no haya botones muertos.
              </p>
              <span className="text-[11px] font-mono text-amber-400 block pt-1">✦ Cero enlaces rotos</span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-emerald-500/40 bg-slate-950/90 space-y-2.5 shadow-lg">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 w-fit">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Paso 3: Valida contra el Brief</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ¿El texto comunica la propuesta de valor del Brief? ¿Los colores representan la identidad de la marca? Si falta algo, pide el ajuste quirúrgico.
              </p>
              <span className="text-[11px] font-mono text-emerald-400 block pt-1">✦ Fidelidad al negocio</span>
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                La Regla de Oro del Ajuste Quirúrgico
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Cuando algo no te guste, <strong>nunca le digas "está feo, hazlo de nuevo"</strong>. Los agentes trabajan mejor cuando les indicas las 3 coordenadas exactas:
              </p>

              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                  <span><strong>1. Dónde:</strong> "En la sección de Servicios..."</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>2. Qué elemento:</strong> "...en el botón de cada tarjeta..."</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                  <span><strong>3. El cambio exacto:</strong> "...cambia el texto a 'Cotizar por WhatsApp' y añade icono de chat."</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/50 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  Ejemplo de Instrucción Quirúrgica Perfecta
                </span>
                <div className="p-3 rounded-xl bg-[#06140d] border border-emerald-500/30 mt-2">
                  <p className="text-xs sm:text-[13px] font-mono text-emerald-200 leading-relaxed font-medium">
                    "Actúa como Web Developer. En el componente <code>HeroSection.tsx</code>, aumenta el tamaño del titular H1 a <code>text-5xl</code> en móvil, cambia el gradiente del botón a <code>from-emerald-400 to-teal-500</code> y añade un micro-hover de escala 1.05."
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono text-emerald-300 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>El agente ejecutará el cambio en 4 segundos sin alterar el resto de la web.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
