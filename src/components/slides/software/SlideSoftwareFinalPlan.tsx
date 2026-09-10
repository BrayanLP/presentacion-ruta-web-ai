import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, 
  Database, Cpu, Layers, Terminal, ShieldCheck, 
  Copy, Check, Rocket, Zap, Table, Search,
  ChevronRight, ListFilter
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

type PillarType = 'architecture' | 'supabase' | 'prompt';

const CATEGORIES: { id: SoftwareCategory | 'todos'; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'salud', label: 'Salud', icon: '🩺' },
  { id: 'gastronomia', label: 'Gastronomía', icon: '🍽️' },
  { id: 'retail', label: 'Retail & Tiendas', icon: '🛍️' },
  { id: 'servicios', label: 'Servicios', icon: '🏢' },
  { id: 'deportes', label: 'Deportes', icon: '⚽' },
  { id: 'educacion', label: 'Educación', icon: '🎓' }
];

export const SlideSoftwareFinalPlan: React.FC<Props> = ({ onOpenPlanModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<SoftwareCategory | 'todos'>('todos');
  const [activePresetId, setActivePresetId] = useState<string>('gym');
  const [activePillar, setActivePillar] = useState<PillarType>('architecture');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredPresets = SOFTWARE_PROJECT_PRESETS.filter(p => {
    const matchesCat = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesSearch = p.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const currentPreset: SoftwareProjectPreset = 
    SOFTWARE_PROJECT_PRESETS.find(p => p.id === activePresetId) || SOFTWARE_PROJECT_PRESETS[0];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenModal = () => {
    confetti({
      particleCount: 120,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#a855f7', '#ec4899']
    });
    onOpenPlanModal();
  };

  return (
    <div className="h-full max-h-full flex flex-col justify-between p-2 sm:p-3 md:p-3.5 pb-8 relative z-10 overflow-hidden select-none">
      
      {/* Top Header Banner */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>PASO 6 / 6: PLAN TÉCNICO MAESTRO</span>
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              De Idea a Especificación Técnica con Agentes
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
              {SOFTWARE_PROJECT_PRESETS.length} Modelos de Software Listos
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mt-1">
          <h2 className="text-lg sm:text-xl font-black text-white font-display tracking-tight flex items-center gap-2">
            <span>El Plan de tu Software:</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
              Tu Brújula de Construcción
            </span>
          </h2>
          <p className="text-xs text-slate-300 font-mono">
            Selecciona un proyecto de la lista para inspeccionar su arquitectura y código
          </p>
        </div>
      </div>

      {/* Main 2-Column Master-Detail Layout in Clean List Format */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0 overflow-hidden my-1">
        
        {/* Left Column: 100 Projects List (Sidebar) */}
        <div className="lg:col-span-4 flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 shadow-xl overflow-hidden h-full min-h-0">
          
          {/* List Header & Filters */}
          <div className="p-2.5 bg-slate-900/90 border-b border-slate-800 space-y-2 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <ListFilter className="w-3.5 h-3.5 text-cyan-400" />
                <span>Lista de Proyectos ({filteredPresets.length})</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                SaaS & Apps
              </span>
            </div>

            {/* Category Filter Dropdown / Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none text-[11px] font-mono">
              {CATEGORIES.map((cat) => {
                const count = cat.id === 'todos' 
                  ? SOFTWARE_PROJECT_PRESETS.length 
                  : SOFTWARE_PROJECT_PRESETS.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2 py-0.5 rounded-lg transition-all shrink-0 flex items-center gap-1 ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500/30 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="text-[9px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3 h-3 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar entre los 100 proyectos (ej: Pizza, Gym, Auto)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-7 pr-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* Scrollable Vertical List of 100 Projects */}
          <div className="flex-1 overflow-y-auto min-h-0 p-2 space-y-1.5 scrollbar-thin overscroll-contain touch-auto">
            {filteredPresets.map((preset, index) => {
              const isSelected = activePresetId === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => setActivePresetId(preset.id)}
                  className={`cursor-pointer p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? 'border-cyan-400 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-slate-900 shadow-md shadow-cyan-950/50 translate-x-0.5'
                      : 'border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 border ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400/50 shadow-sm'
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}>
                      {preset.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className={`text-xs font-bold font-display truncate ${
                          isSelected ? 'text-cyan-300' : 'text-white'
                        }`}>
                          {preset.label}
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {preset.tag}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1">
                    {isSelected ? (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)] animate-pulse" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* List Footer Trust Note */}
          <div className="p-2 bg-slate-900/80 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between shrink-0">
            <span>⚡ 100% Sin Código Manual</span>
            <span className="text-emerald-400 font-bold">Supabase + AI</span>
          </div>
        </div>

        {/* Right Column: Selected Project Detail & Live Spec Inspector */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl border border-slate-800 bg-slate-950/95 shadow-xl overflow-hidden min-h-0">
          
          {/* Detail Header: Project Title & Deliverable Tabs */}
          <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl p-1.5 rounded-xl bg-slate-800 border border-slate-700">
                {currentPreset.icon}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    {currentPreset.label}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {currentPreset.categoryLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {currentPreset.tag}
                </p>
              </div>
            </div>

            {/* 3 Deliverable Selector Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActivePillar('architecture')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  activePillar === 'architecture'
                    ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>1. Arquitectura</span>
              </button>

              <button
                onClick={() => setActivePillar('supabase')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  activePillar === 'supabase'
                    ? 'bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>2. Supabase SQL</span>
              </button>

              <button
                onClick={() => setActivePillar('prompt')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  activePillar === 'prompt'
                    ? 'bg-violet-500/25 text-violet-300 font-bold border border-violet-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>3. Prompt Agente</span>
              </button>
            </div>
          </div>

          {/* Terminal File Name & Copy Action Bar */}
          <div className="px-3.5 py-1.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono shrink-0">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              </div>
              <span className="text-[11px] text-slate-300 flex items-center gap-1.5 ml-2 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {activePillar === 'architecture' && `${currentPreset.id}-architecture.json`}
                {activePillar === 'supabase' && `${currentPreset.id}-schema.sql`}
                {activePillar === 'prompt' && `${currentPreset.id}-master-prompt.md`}
              </span>
            </div>

            <button
              onClick={() => {
                const textToCopy = 
                  activePillar === 'architecture'
                    ? JSON.stringify(currentPreset.architecture, null, 2)
                    : activePillar === 'supabase'
                    ? currentPreset.supabase.sqlSnippet
                    : currentPreset.prompt.fullText;
                handleCopyCode(textToCopy);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-mono text-[10px] flex items-center gap-1.5 transition-all active:scale-95"
              title="Copiar contenido de este panel"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-cyan-400" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Dynamic Content View based on active pillar */}
          <div className="flex-1 overflow-y-auto min-h-0 p-3 sm:p-4 font-mono text-xs space-y-2.5 select-text bg-slate-950/70 scrollbar-thin overscroll-contain touch-auto">
            {activePillar === 'architecture' && (
              <div className="space-y-2 text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    🎯 Problema que resuelve
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    {currentPreset.architecture.problem}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    👥 Usuarios y Roles
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    {currentPreset.architecture.users}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] text-violet-400 font-bold uppercase tracking-wider mb-1">
                      🚀 Alcance MVP Fase 1
                    </div>
                    <div className="text-[11px] text-slate-300 leading-tight">
                      {currentPreset.architecture.mvpScope}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                      📱 Pantallas Clave
                    </div>
                    <div className="text-[11px] text-slate-300 space-y-0.5">
                      {currentPreset.architecture.screens.map((s, idx) => (
                        <div key={idx} className="truncate">• {s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePillar === 'supabase' && (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5 items-center mb-1">
                  <span className="text-[10px] text-slate-400 font-bold">TABLAS CREADAS:</span>
                  {currentPreset.supabase.tables.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px]">
                      <Table className="w-2.5 h-2.5 inline mr-1" />
                      {t}
                    </span>
                  ))}
                </div>
                <pre className="p-3 rounded-xl bg-slate-900/95 border border-slate-800 text-[11px] text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                  {currentPreset.supabase.sqlSnippet}
                </pre>
                <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{currentPreset.supabase.rlsPolicies}</span>
                </div>
              </div>
            )}

            {activePillar === 'prompt' && (
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] text-violet-400 font-bold uppercase tracking-wider mb-0.5">
                    ⚡ Stack Técnico Configurado
                  </div>
                  <div className="text-[11px] text-slate-200">
                    {currentPreset.prompt.stack}
                  </div>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900/95 border border-slate-800 text-[11px] text-cyan-200 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                  {currentPreset.prompt.fullText}
                </pre>
              </div>
            )}
          </div>

          {/* Bottom Action CTA */}
          <div className="p-2.5 sm:p-3 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
            <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Proyecto activo: <strong className="text-white">{currentPreset.label}</strong></span>
            </div>

            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 text-white font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-98"
            >
              <Rocket className="w-4 h-4 text-cyan-200" />
              <span>Generar Plan de mi Software</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Next Steps Banner */}
      <div className="banner-highlight-box p-2 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-[11px] shrink-0">
        <div className="flex items-center gap-2 text-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="leading-tight">
            🚀 <strong>Próximo Paso:</strong> Conectamos este Plan Maestro en Antigravity IDE, ejecutamos los agentes inteligentes y publicamos tu software en vivo a internet con Vercel y Supabase.
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0 self-end sm:self-center">
          <span className="px-1.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[9px] font-mono text-cyan-300">
            Next.js 14
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[9px] font-mono text-emerald-300">
            PostgreSQL
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[9px] font-mono text-violet-300">
            Agentes AI
          </span>
        </div>
      </div>
    </div>
  );
};
