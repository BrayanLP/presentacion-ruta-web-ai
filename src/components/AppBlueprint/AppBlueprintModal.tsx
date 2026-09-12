import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, Copy, Check, Sparkles, Download, Smartphone, 
  FileText, Layers, Search, DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { AppBlueprintData } from '../../types';
import { 
  IOS_APP_PRESETS, 
  type IosAppPreset, 
  type IosAppCategory,
  generateIosAppPrompt 
} from '../../data/iosProjectPrompts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_FILTERS: { id: IosAppCategory | 'todos'; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todas las Ideas (60)', icon: '🌟' },
  { id: 'nicho', label: '🎯 Poco Comunes / Micro-Nichos (30)', icon: '🎯' },
  { id: 'finanzas', label: 'Finanzas & Dinero', icon: '💰' },
  { id: 'servicios', label: 'Servicios & Citas', icon: '📅' },
  { id: 'salud', label: 'Salud & Fitness', icon: '⚡' },
  { id: 'gastronomia', label: 'Gastronomía & Delivery', icon: '🍔' },
  { id: 'negocios', label: 'Negocios & SaaS', icon: '🏢' },
  { id: 'educacion', label: 'Educación & Cursos', icon: '🎓' },
  { id: 'productividad', label: 'Productividad & IA', icon: '📄' },
  { id: 'lifestyle', label: 'Estilo de Vida', icon: '✨' }
];

export const AppBlueprintModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppBlueprintData>(IOS_APP_PRESETS[0].blueprint);
  const [activeTab, setActiveTab] = useState<'form' | 'presets' | 'prompt'>('presets');
  const [selectedCategory, setSelectedCategory] = useState<IosAppCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePresetId, setActivePresetId] = useState<string | null>(IOS_APP_PRESETS[0].id);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const filteredPresets = IOS_APP_PRESETS.filter((preset) => {
    const matchesCat = selectedCategory === 'todos' || preset.category === selectedCategory;
    const matchesSearch = 
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.monetization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.blueprint.problemSolved.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleChange = (field: keyof AppBlueprintData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLoadPreset = (preset: IosAppPreset) => {
    setFormData(preset.blueprint);
    setActivePresetId(preset.id);
    setActiveTab('form');
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#ff0055']
    });
  };

  const promptText = generateIosAppPrompt(formData);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#10b981', '#ff0055']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const filename = `${formData.appName ? formData.appName.toLowerCase().replace(/\s+/g, '-') : 'app'}-blueprint.md`;
    const blob = new Blob([promptText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Container */}
      <div className="relative w-full max-w-5xl rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden bg-[#080c16] text-slate-100 ring-1 ring-white/10 max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-400 text-slate-950 font-black shadow-lg shadow-cyan-500/20">
              <Smartphone className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <span>📄 Generador de APP BLUEPRINT</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {IOS_APP_PRESETS.length} Ideas Monetizables (iOS & Android)
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Especifica tu producto móvil y exporta el prompt para Antigravity IDE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'presets'
                  ? 'bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 text-cyan-200 border border-cyan-400 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>1. Catálogo ({IOS_APP_PRESETS.length} Ideas Rentables)</span>
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'form'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. Editar Blueprint</span>
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'prompt'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>3. Ver Prompt para IA</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleCopyPrompt}
              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Prompt'}</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: PRESETS (30 IDEAS) */}
          {activeTab === 'presets' && (
            <div className="space-y-3 animate-fadeIn">
              {/* Filter and Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-1">
                {/* Category Pills */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {filteredPresets.map((preset) => {
                  const isSelected = activePresetId === preset.id;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => handleLoadPreset(preset)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between group hover:scale-[1.01] ${
                        isSelected
                          ? 'bg-gradient-to-b from-cyan-950/50 to-slate-950/90 border-cyan-400 text-white shadow-lg ring-1 ring-cyan-400/40'
                          : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-900'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl group-hover:scale-110 transition-transform">{preset.icon}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                            {preset.categoryLabel}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                          {preset.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                          {preset.tagline}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-2">
                        {/* Monetization Pill */}
                        <div className="p-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 flex items-start gap-1">
                          <DollarSign className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{preset.monetization}</span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-slate-400">9 Pantallas definidas</span>
                          <span className="text-cyan-400 font-bold group-hover:translate-x-0.5 transition-transform">
                            Cargar Blueprint →
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: FORM */}
          {activeTab === 'form' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Nombre */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    1. 🏷️ Nombre de la App
                  </label>
                  <input
                    type="text"
                    value={formData.appName}
                    onChange={(e) => handleChange('appName', e.target.value)}
                    placeholder="Ej. Fintrack Móvil"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 2. Propuesta de Valor */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    2. 💎 Propuesta de Valor
                  </label>
                  <input
                    type="text"
                    value={formData.valueProposition}
                    onChange={(e) => handleChange('valueProposition', e.target.value)}
                    placeholder="Ej. Registra cualquier gasto en menos de 3 segundos con gráficos visuales"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 3. Problema */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    3. 🎯 Problema que Resuelve
                  </label>
                  <textarea
                    rows={2}
                    value={formData.problemSolved}
                    onChange={(e) => handleChange('problemSolved', e.target.value)}
                    placeholder="¿Qué dolor o frustración elimina en el usuario?"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 4. Usuario */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    4. 👥 Usuario Objetivo
                  </label>
                  <textarea
                    rows={2}
                    value={formData.targetUser}
                    onChange={(e) => handleChange('targetUser', e.target.value)}
                    placeholder="¿Quién usará la app y en qué momento del día?"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 5. Funciones Principales */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    5. ⚙️ Funciones Principales (MVP)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.keyFeatures}
                    onChange={(e) => handleChange('keyFeatures', e.target.value)}
                    placeholder="Lista de funcionalidades esenciales separadas por viñetas"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 6. Pantallas Necesarias */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    6. 📱 Pantallas Necesarias (Mapa de Navegación Expo Router)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.requiredScreens}
                    onChange={(e) => handleChange('requiredScreens', e.target.value)}
                    placeholder="1. Inicio, 2. Login, 3. Registro, 4. Dashboard, 5. Registrar gasto, 6. Historial, 7. Categorías, 8. Estadísticas, 9. Perfil"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 7. Flujo de Usuario */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    7. 🔄 Flujo de Usuario
                  </label>
                  <textarea
                    rows={2}
                    value={formData.userFlow}
                    onChange={(e) => handleChange('userFlow', e.target.value)}
                    placeholder="Paso 1: Abre app -> Paso 2: Toca (+) -> Paso 3: Guarda -> Paso 4: Ve balance"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 8. Qué dejaremos para después (V2) */}
                <div>
                  <label className="block text-xs font-mono text-cyan-400 font-bold mb-1">
                    8. ⏳ Qué Dejaremos para Después (Versión 2)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.futureScope}
                    onChange={(e) => handleChange('futureScope', e.target.value)}
                    placeholder="Funciones secundarias para no retrasar el MVP (OCR, bancos, etc.)"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* 9. Supabase */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-mono text-emerald-400 font-bold mb-1">
                    9. 🗄️ Tablas Requeridas en Supabase (PostgreSQL)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.supabaseNeeds || ''}
                    onChange={(e) => handleChange('supabaseNeeds', e.target.value)}
                    placeholder="Tablas: profiles, transactions, categories..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROMPT VIEW */}
          {activeTab === 'prompt' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between">
                <span>⚡ Este prompt está optimizado para <strong>Antigravity IDE</strong> + <strong>Expo Router (iOS & Android)</strong> + <strong>Supabase</strong>.</span>
              </div>
              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto max-h-[400px] leading-relaxed select-text">
                <code>{promptText}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-slate-400">
            {formData.appName ? `App: ${formData.appName}` : 'Define el nombre de tu app'}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .MD</span>
            </button>

            <button
              onClick={handleCopyPrompt}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:opacity-90 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4 text-slate-950" />}
              <span>{copied ? '¡Prompt Copiado!' : 'Copiar Prompt para Antigravity'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
