import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, Smartphone, FileText,
  Lightbulb, Search, DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { IOS_APP_PRESETS, type IosAppPreset, type IosAppCategory } from '../../../data/iosProjectPrompts';

interface Props {
  onOpenBlueprintModal: () => void;
}

const CATEGORY_FILTERS: { id: IosAppCategory | 'todos'; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todas (60)', icon: '🌟' },
  { id: 'nicho', label: '🎯 Poco Comunes (30)', icon: '🎯' },
  { id: 'finanzas', label: 'Finanzas', icon: '💰' },
  { id: 'servicios', label: 'Servicios', icon: '📅' },
  { id: 'salud', label: 'Salud', icon: '⚡' },
  { id: 'gastronomia', label: 'Delivery', icon: '🍔' },
  { id: 'negocios', label: 'Negocios/SaaS', icon: '🏢' },
  { id: 'educacion', label: 'Educación', icon: '🎓' },
  { id: 'productividad', label: 'Productividad', icon: '📄' },
  { id: 'lifestyle', label: 'Lifestyle', icon: '✨' }
];

export const SlideIosIdeaInteractive: React.FC<Props> = ({ onOpenBlueprintModal }) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'philosophy' | 'presets'>('questions');
  const [selectedCategory, setSelectedCategory] = useState<IosAppCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPresets = IOS_APP_PRESETS.filter((preset) => {
    const matchesCat = selectedCategory === 'todos' || preset.category === selectedCategory;
    const matchesSearch = 
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.monetization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.blueprint.problemSolved.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSelectPreset = (_preset: IosAppPreset) => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#ff0055']
    });
    onOpenBlueprintModal();
  };

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 relative z-10 overflow-y-auto justify-between select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>🚨 REQUISITO FUNDAMENTAL — CLASE 0</span>
          </span>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'questions'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Las 5 Preguntas
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'philosophy'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Enfoque en el Producto
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all font-semibold ${
                activeTab === 'presets'
                  ? 'bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 text-cyan-200 border border-cyan-400 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🌟 3. Ideas de Apps ({IOS_APP_PRESETS.length})
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight">
          Trae tu Propia Idea de Aplicación
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
          No empezaría enseñándoles código. Empezaría por su producto. Tienes que poder responder estas 5 preguntas esenciales.
        </p>
      </div>

      {/* Main Content Area */}
      {activeTab === 'questions' && (
        <div className="my-auto py-2 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* 1 */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    01
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                    Concepto
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué aplicación quiero crear?</h3>
                <p className="text-xs text-slate-400 mb-2">Nombre tentativo, tipo de app y sensación que transmite.</p>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-300 italic">
                  "Una app móvil para registrar gastos diarios en 3 segundos."
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    02
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-red-300">
                    Dolor Real
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué problema resuelve?</h3>
                <p className="text-xs text-slate-400 mb-2">El dolor o frustración que sufren las personas hoy.</p>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-red-300 italic">
                  "No sé en qué se me va el dinero a fin de mes ni cuánto ahorro."
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    03
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-300">
                    Audiencia
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Quién la utilizará?</h3>
                <p className="text-xs text-slate-400 mb-2">El perfil exacto de usuario y su momento de uso móvil.</p>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-emerald-300 italic">
                  "Jóvenes y freelancers que quieren control sin trámites bancarios."
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    04
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                    Capacidades
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué podrá hacer?</h3>
                <p className="text-xs text-slate-400 mb-2">Las funciones esenciales del MVP en el celular.</p>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-amber-300 italic">
                  "Anotar gasto, ver balance mensual y filtrar por categorías."
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all col-span-1 sm:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    05
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300">
                    Benchmarking
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 font-display">¿Qué aplicaciones similares existen?</h3>
                <p className="text-xs text-slate-400 mb-2">Apps de referencia en el App Store y qué harás mejor o más simple.</p>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-purple-300 italic">
                  "Monefy, Wallet, Spendee. Nuestra ventaja: 10x más rápida y con asistente de IA."
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'philosophy' && (
        <div className="my-auto py-4 space-y-4">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-950/80 to-slate-950/90 text-center space-y-4">
            <Lightbulb className="w-10 h-10 text-cyan-400 mx-auto animate-pulse" />
            <blockquote className="text-xl sm:text-3xl font-extrabold text-white font-display leading-tight max-w-2xl mx-auto">
              "No empezaría enseñándoles código. Empezaría por su producto."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              El 90% de las personas que abandonan el desarrollo móvil lo hacen porque intentaron aprender sintaxis de programación antes de entender qué problema estaban resolviendo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 max-w-2xl mx-auto">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                <div className="text-xs font-bold text-emerald-400 font-mono">1. Tu Rol</div>
                <div className="text-[11px] text-slate-300 mt-1">Dueño de Producto & Arquitecto de Negocio</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                <div className="text-xs font-bold text-cyan-400 font-mono">2. Rol de la IA</div>
                <div className="text-[11px] text-slate-300 mt-1">Programador Senior & Diseñador de Componentes</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
                <div className="text-xs font-bold text-purple-400 font-mono">3. Rol de Expo</div>
                <div className="text-[11px] text-slate-300 mt-1">Motor que ejecuta la app en tu iPhone al instante</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'presets' && (
        <div className="my-auto py-2 space-y-3">
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-1">
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono scrollbar-thin pb-1">
              {CATEGORY_FILTERS.map((cat) => {
                const count = cat.id === 'todos'
                  ? IOS_APP_PRESETS.length
                  : IOS_APP_PRESETS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-xl transition-all flex items-center gap-1 shrink-0 ${
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
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar entre las 30 ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* 30 Ideas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[380px] sm:max-h-[420px] overflow-y-auto pr-1">
            {filteredPresets.map((preset) => (
              <div
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className="glass-card cursor-pointer p-3.5 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-cyan-400 hover:bg-slate-900 transition-all flex flex-col justify-between shadow-sm hover:scale-[1.02] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{preset.icon}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {preset.categoryLabel}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {preset.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 mt-0.5">
                    {preset.tagline}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-800/80 space-y-1.5">
                  <div className="p-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 flex items-start gap-1">
                    <DollarSign className="w-2.5 h-2.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{preset.monetization}</span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-400">Ver Blueprint</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Cargar <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
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
          <span>Define tu idea antes de pasar a la Clase 1: De la Idea a la Aplicación.</span>
        </div>

        <button
          onClick={onOpenBlueprintModal}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <FileText className="w-4 h-4 text-slate-950" />
          <span>Abrir Generador de App Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
