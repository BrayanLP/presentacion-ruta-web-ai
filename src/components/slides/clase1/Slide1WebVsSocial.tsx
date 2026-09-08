import React, { useState } from 'react';
import { Smartphone, Globe } from 'lucide-react';

export const Slide1WebVsSocial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'synergy'>('matrix');

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            Duelo Estratégico #02
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
            ⚔️ Web vs Redes Sociales
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            ¿Por qué tener solo Instagram o TikTok es como construir un castillo en un terreno prestado?
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'matrix' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Duelo Cara a Cara
          </button>
          <button
            onClick={() => setActiveTab('synergy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'synergy' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            La Sinergia Perfecta
          </button>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        /* Matrix Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
          {/* Social Media Card */}
          <div className="glass-card p-6 rounded-2xl border border-pink-500/30 space-y-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-pink-400 font-bold">
                <Smartphone className="w-5 h-5" />
                <span>Redes Sociales (Instagram / TikTok / FB)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 uppercase">
                Terreno Alquilado
              </span>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-pink-400 block text-xs font-mono">📉 Algoritmo Caprichoso:</strong>
                Tus publicaciones solo llegan al 5%-10% de tus propios seguidores si no pagas anuncios.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-pink-400 block text-xs font-mono">📱 Máxima Distracción:</strong>
                A 1 centímetro de tu post hay videos de gatitos, competencia directa y notificaciones.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-pink-400 block text-xs font-mono">⏳ Vida Útil Efímera:</strong>
                Un Reel o historia muere en 24 a 48 horas.
              </div>
            </div>
          </div>

          {/* Web Card */}
          <div className="glass-card p-6 rounded-2xl border border-cyan-500/40 space-y-4 relative shadow-lg shadow-cyan-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Globe className="w-5 h-5" />
                <span>Página Web Propia</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 uppercase">
                Terreno Propio
              </span>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-200">
              <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                <strong className="text-cyan-400 block text-xs font-mono">🏰 Control Total & Sin Distracciones:</strong>
                El 100% de la pantalla es tuyo. No hay banners de la competencia ni fugas de atención.
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                <strong className="text-cyan-400 block text-xs font-mono">🏆 Máxima Autoridad & Confianza:</strong>
                Tener tu propio dominio transmite seriedad formal ante clientes corporativos y de alto valor.
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                <strong className="text-cyan-400 block text-xs font-mono">♾️ Activo Permanente (SEO & Google):</strong>
                Tu web se posiciona y sigue atrayendo clientes en Google mes tras mes sin expirar.
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Synergy Diagram */
        <div className="glass-panel p-8 rounded-2xl border border-violet-500/30 my-auto text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              No es Web <span className="text-pink-400">O</span> Redes... Es Web <span className="text-cyan-400">+</span> Redes
            </h3>
            <p className="text-slate-300 text-xs md:text-sm">
              Las redes son el megáfono que atrae curiosos; tu web es la tienda impecable que cierra las ventas.
            </p>
          </div>

          {/* Flow steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="glass-card p-4 rounded-xl border border-pink-500/20">
              <div className="text-xs font-mono text-pink-400 font-bold mb-1">PASO 1: ATRACCIÓN</div>
              <div className="text-sm font-semibold text-white">Redes & Publicidad</div>
              <p className="text-xs text-slate-400 mt-1">Reels, TikToks y contenido que despiertan curiosidad en masa.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">PASO 2: CONVERSIÓN</div>
              <div className="text-sm font-semibold text-white">Tu Página Web</div>
              <p className="text-xs text-slate-300 mt-1">Aterrizan sin distracciones, leen tu valor y eligen el servicio.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">PASO 3: CIERRE</div>
              <div className="text-sm font-semibold text-white">WhatsApp / Pago</div>
              <p className="text-xs text-slate-300 mt-1">Llegan educados, convencidos y listos para transferir dinero.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer advice */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-cyan-500">
        <span className="text-xs md:text-sm text-slate-300">
          💡 <strong>Conclusión:</strong> Usa las redes para captar tráfico, pero lleva siempre ese tráfico a <u>tu propio territorio web</u>.
        </span>
      </div>
    </div>
  );
};
