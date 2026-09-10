import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, FileText, Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  SOFTWARE_PROJECT_PRESETS,
  type SoftwareCategory,
  type SoftwareProjectPreset
} from '../../../data/softwareProjectPrompts';

interface Props {
  onOpenPlanModal: () => void;
}

export const SlideSoftwareIdeaInteractive: React.FC<Props> = ({ onOpenPlanModal }) => {
  const [activeTab, setActiveTab] = useState<'clarity' | 'template' | 'ideas12'>('clarity');
  const [selectedCategory, setSelectedCategory] = useState<SoftwareCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPresets = SOFTWARE_PROJECT_PRESETS.filter(p => {
    const matchesCat = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesSearch = p.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSelectIdea = (_preset: SoftwareProjectPreset) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#a855f7']
    });
    onOpenPlanModal();
  };

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 relative z-10 overflow-y-auto justify-between select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>💡 EL CORAZÓN DE LA RUTA — CLASE 0</span>
          </span>
          <div className="flex items-center gap-1.5 p-1 rounded-xl tab-switcher-container bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('clarity')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'clarity'
                  ? 'tab-switcher-active bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'tab-switcher-inactive text-slate-400 hover:text-white'
              }`}
            >
              1. Las 4 Claridades
            </button>
            <button
              onClick={() => setActiveTab('template')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'template'
                  ? 'tab-switcher-active bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'tab-switcher-inactive text-slate-400 hover:text-white'
              }`}
            >
              2. Plantilla de tu Idea
            </button>
            <button
              onClick={() => setActiveTab('ideas12')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'ideas12'
                  ? 'tab-switcher-active bg-gradient-to-r from-cyan-500/30 to-violet-500/30 text-cyan-200 border border-cyan-400 shadow-sm font-bold'
                  : 'tab-switcher-inactive text-slate-400 hover:text-white'
              }`}
            >
              🌟 3. {SOFTWARE_PROJECT_PRESETS.length} Ideas Listas para Crear
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight">
          Muy Importante: Trae tu Idea de Software
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
          No necesitas saber programar ni qué base de datos utilizar. Los agentes de IA se encargarán de la ingeniería técnica.
        </p>
      </div>

      {/* Main Content Area */}
      {activeTab === 'clarity' && (
        <div className="my-auto py-2 space-y-3">
          {/* Reassurance Banner */}
          <div className="p-3 rounded-2xl banner-highlight-box bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-around gap-2 text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> CERO código previo
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> CERO conocimientos de bases de datos
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Solo tu visión de negocio
            </span>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* 1 */}
            <div className="glass-card p-3.5 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    01
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Propósito
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué quieres crear?</h3>
                <p className="text-xs text-slate-400 mb-2">Define la categoría y propósito general de la app.</p>
                <div className="p-2 rounded-xl idea-quote-box text-[11px] font-mono italic leading-relaxed">
                  "Un sistema para administrar pedidos y mesas en restaurantes."
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="glass-card p-3.5 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    02
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Problema
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué problema solucionas?</h3>
                <p className="text-xs text-slate-400 mb-2">El dolor actual que sufren los usuarios.</p>
                <div className="p-2 rounded-xl idea-quote-box text-[11px] font-mono italic leading-relaxed">
                  "Actualmente gestionan pedidos en papel y Excel, perdiendo comandas."
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="glass-card p-3.5 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    03
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Usuarios
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Quién lo utilizará?</h3>
                <p className="text-xs text-slate-400 mb-2">Los roles exactos que interactuarán con el sistema.</p>
                <div className="p-2 rounded-xl idea-quote-box text-[11px] font-mono italic leading-relaxed">
                  "Dueños de restaurantes, administradores, meseros y cocina."
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="glass-card p-3.5 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    04
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Alcance
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué debería poder hacer?</h3>
                <p className="text-xs text-slate-400 mb-2">Lista inicial de funcionalidades (aunque esté incompleta).</p>
                <div className="p-2 rounded-xl idea-quote-box text-[11px] font-mono italic leading-relaxed">
                  "Crear pedidos por mesa, pantalla de cocina y reporte de caja."
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'template' && (
        <div className="my-auto py-2 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { q: '1. NOMBRE DE MI SOFTWARE', tip: 'Nombre tentativo de tu producto' },
              { q: '2. ¿QUÉ QUIERO CREAR?', tip: 'Descripción general del software' },
              { q: '3. ¿QUÉ PROBLEMA SOLUCIONA?', tip: 'El dolor principal que resuelve' },
              { q: '4. ¿QUIÉN LO UTILIZARÁ?', tip: 'Roles y público objetivo' },
              { q: '5. ¿QUÉ DEBERÍA PODER HACER?', tip: 'Funcionalidades clave iniciales' },
              { q: '6. ¿CÓMO SE HACE ACTUALMENTE?', tip: 'Método actual (manual/Excel/papel)' },
              { q: '7. ¿QUÉ ME GUSTARÍA MEJORAR?', tip: 'Lo que tu software hará 10x mejor' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-2.5 rounded-xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/30 transition-all">
                <div className="text-xs font-bold text-cyan-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {item.q}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 pl-3 font-medium">{item.tip}</div>
              </div>
            ))}

            {/* Helper card */}
            <div className="glass-card p-3 rounded-xl banner-highlight-box border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-between col-span-1 md:col-span-2">
              <div className="text-xs leading-snug">
                <strong className="text-cyan-400 font-bold">💡 No te preocupes si no sabes responder todo: </strong>
                <span>La IA transformará tu idea inicial en una arquitectura técnica completa durante la clase.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 Tab 3: Real-World Software Ideas Showcase */}
      {activeTab === 'ideas12' && (
        <div className="my-auto py-1 space-y-2.5">
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono scrollbar-thin pb-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Filtrar:</span>
              {[
                { id: 'todos' as SoftwareCategory | 'todos', label: 'Todos', icon: '🌟' },
                { id: 'salud' as SoftwareCategory | 'todos', label: 'Salud', icon: '🩺' },
                { id: 'gastronomia' as SoftwareCategory | 'todos', label: 'Gastronomía', icon: '🍽️' },
                { id: 'retail' as SoftwareCategory | 'todos', label: 'Retail', icon: '🛍️' },
                { id: 'servicios' as SoftwareCategory | 'todos', label: 'Servicios', icon: '🏢' },
                { id: 'deportes' as SoftwareCategory | 'todos', label: 'Deportes', icon: '⚽' },
                { id: 'educacion' as SoftwareCategory | 'todos', label: 'Educación', icon: '🎓' }
              ].map((cat) => {
                const count = cat.id === 'todos'
                  ? SOFTWARE_PROJECT_PRESETS.length
                  : SOFTWARE_PROJECT_PRESETS.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as SoftwareCategory)}
                    className={`px-2.5 py-0.5 rounded-lg transition-all flex items-center gap-1 shrink-0 ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative shrink-0 sm:w-64">
              <Search className="w-3 h-3 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar entre los 100 proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-7 pr-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* 100 Cards Grid with Smooth Scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-[380px] sm:max-h-[440px] overflow-y-auto min-h-0 pr-1 scrollbar-thin overscroll-contain touch-auto">
            {filteredPresets.map((preset) => (
              <div
                key={preset.id}
                onClick={() => handleSelectIdea(preset)}
                className="glass-card cursor-pointer p-3 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-cyan-400 hover:bg-slate-900 transition-all flex flex-col justify-between shadow-sm hover:scale-[1.02] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl">{preset.icon}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {preset.categoryLabel}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {preset.label}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-snug line-clamp-2 mt-0.5">
                    {preset.description}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">{preset.supabase.tables.length} tablas SQL</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Generar <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer & CTA */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>El 90% del éxito de un software comienza con una idea bien estructurada.</span>
        </div>

        <button
          onClick={onOpenPlanModal}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <FileText className="w-4 h-4 text-cyan-200" />
          <span>Abrir Generador del Plan (12 Ideas)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
