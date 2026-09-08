import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const Slide1Purpose: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-pink-400 font-semibold tracking-wider uppercase">
          Propósito Central #01
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          ¿Para qué sirve realmente una Web?
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Desmontando el mito del folleto digital estático y entendiendo el activo más rentable de tu negocio.
        </p>
      </div>

      {/* Comparison: The Old Way vs The Real Machine */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* Left: The Old Myth */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
              <XCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 font-bold uppercase">La Vieja Idea Equivocada</span>
              <h3 className="text-lg md:text-xl font-bold text-white">Un Folleto Digital Abandonado</h3>
            </div>
          </div>

          <ul className="space-y-3 text-xs md:text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold">✕</span>
              <span>Poner párrafos gigantes de "Misión y Visión" que nadie lee.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold">✕</span>
              <span>Tener un formulario de contacto de 10 campos que nadie llena.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-400 font-bold">✕</span>
              <span>Hacer una web solo "para tener presencia" sin medir resultados ni clics.</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-red-500/10 text-red-300 text-xs font-mono">
            Resultado: 0 conversiones, dinero perdido y sensación de que "las webs no funcionan".
          </div>
        </div>

        {/* Right: The Real Machine */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 space-y-6 shadow-xl shadow-emerald-950/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">La Realidad de Alto Impacto</span>
              <h3 className="text-lg md:text-xl font-bold text-white">Tu Mejor Vendedor 24 Horas al Día</h3>
            </div>
          </div>

          <ul className="space-y-3 text-xs md:text-sm text-slate-200">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Trabaja 24/7/365:</strong> Explica tu oferta y responde dudas mientras duermes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Filtra clientes:</strong> Califica a los prospectos ideales y descarta a curiosos.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Dispara WhatsApps listos:</strong> El cliente llega a tu chat sabiendo el precio y con ganas de comprar.</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-300 text-xs font-mono">
            🎯 Meta: Convertir visitas anónimas en conversaciones reales de compra.
          </div>
        </div>
      </div>

      {/* Bottom takeaway */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-emerald-500">
        <span className="text-xs md:text-sm text-slate-300">
          🔑 <strong>Premisa Innegociable:</strong> Tu web no se diseña para complacerte a ti; se diseña para responder rápidamente las 3 preguntas del visitante: <em>¿Qué haces? ¿Por qué tú? ¿Cómo lo compro?</em>
        </span>
      </div>
    </div>
  );
};
