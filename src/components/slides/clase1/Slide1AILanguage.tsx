import React from 'react';
import { Sparkles, Bot, Globe2 } from 'lucide-react';

export const Slide1AILanguage: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-violet-400 font-semibold tracking-wider uppercase">
          Ingeniería de Prompts #06
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          🤖 Qué Información darle a la IA
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          "Garbage in, Garbage out": Si le pides poco a la IA, te dará una plantilla genérica. Si invocas al <strong>Agente Arquitecto Frontend & Especialista SEO/GEO</strong> con el stack exacto, creará una obra maestra.
        </p>
      </div>

      {/* Bad vs Master Prompt comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto">
        {/* Bad Prompt */}
        <div className="glass-card p-5 rounded-2xl border border-red-500/30 bg-red-950/10 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-red-500/20">
              <span className="text-xs font-mono text-red-400 font-bold uppercase">❌ Prompt Débil / Principiante</span>
              <span className="text-[10px] text-red-400 font-mono">Sin posicionamiento ni arquitectura</span>
            </div>
            <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-red-300 italic">
              "Hazme una página web para mi negocio de consultoría con un diseño bonito y botón de WhatsApp."
            </div>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              La IA no sabe tu arquitectura, ignora el framework, crea formularios frágiles sin validación, carece de Schema SEO/GEO y no será indexada ni citada por motores de IA como ChatGPT o Perplexity.
            </p>
          </div>
          <div className="text-[11px] text-red-400 font-mono">
            ⚠️ Resultado: Código monolítico, invisible en Google e IA.
          </div>
        </div>

        {/* Master Prompt */}
        <div className="glass-panel p-5 rounded-2xl border border-brand-500/40 bg-brand-950/10 space-y-3 flex flex-col justify-between shadow-xl shadow-brand-950/30">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-brand-500/20">
              <span className="text-xs font-mono text-brand-400 font-bold uppercase flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" /> Prompt Maestro: Arquitecto Frontend + SEO & GEO
              </span>
              <span className="text-[10px] text-brand-300 font-mono bg-brand-500/20 px-2 py-0.5 rounded">Ruta Web IA</span>
            </div>
            <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-200 space-y-1.5">
              <p className="text-cyan-400 font-semibold flex items-center gap-1">
                <span>[ROL & STACK PROFESIONAL]</span>
              </p>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                "Actúa como <strong>Agente Arquitecto Frontend Senior & Especialista en SEO y GEO</strong>. Construye la web en <strong>Next.js (App Router)</strong>, anima con <strong>GSAP</strong> y valida con <strong>React Hook Form</strong>..."
              </p>
              <p className="text-emerald-400 font-semibold pt-0.5 flex items-center gap-1">
                <Globe2 className="w-3 h-3" /> [ESTRATEGIA SEO & GEO + SCHEMA]
              </p>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Schema JSON-LD estructurado (LocalBusiness/FAQ), OpenGraph dinámico, palabras clave geográficas y optimización para ChatGPT Search y Perplexity...
              </p>
            </div>
          </div>
          <div className="text-[11px] text-brand-400 font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultado: Código modular, alta conversión y visible en Google y motores de IA.</span>
          </div>
        </div>
      </div>

      {/* Footer advice */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-violet-500">
        <span className="text-xs md:text-sm text-slate-200">
          🎯 <strong>La Clave:</strong> No tienes que escribir este prompt a mano. Nuestro <u>Generador de Brief</u> lo redacta automáticamente con Next.js, GSAP, React Hook Form y GEO/SEO.
        </span>
      </div>
    </div>
  );
};
