import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, Copy, Check, Sparkles, Download, FileCode, 
  Lightbulb, Database
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { SoftwarePlanData } from '../../types';
import { 
  SOFTWARE_PROJECT_PRESETS, 
  type SoftwareCategory, 
  type SoftwareProjectPreset 
} from '../../data/softwareProjectPrompts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_DATA: SoftwarePlanData = {
  softwareName: '',
  whatToCreate: '',
  problemSolved: '',
  targetUser: '',
  keyFeatures: '',
  currentSolution: '',
  desiredImprovements: '',
  databaseNeeds: '',
  mvpScope: ''
};

const CATEGORIES: { id: SoftwareCategory | 'todos'; label: string; icon: string }[] = [
  { id: 'todos', label: 'Todos', icon: '🌟' },
  { id: 'salud', label: 'Salud & Bienestar', icon: '🩺' },
  { id: 'gastronomia', label: 'Gastronomía', icon: '🍽️' },
  { id: 'retail', label: 'Retail & Tiendas', icon: '🛍️' },
  { id: 'servicios', label: 'Servicios', icon: '🏢' },
  { id: 'deportes', label: 'Deportes', icon: '⚽' },
  { id: 'educacion', label: 'Educación', icon: '🎓' }
];

export const SoftwarePlanModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<SoftwarePlanData>(INITIAL_DATA);
  const [selectedCategory, setSelectedCategory] = useState<SoftwareCategory | 'todos'>('todos');
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const filteredPresets = selectedCategory === 'todos'
    ? SOFTWARE_PROJECT_PRESETS
    : SOFTWARE_PROJECT_PRESETS.filter(p => p.category === selectedCategory);

  const handleChange = (field: keyof SoftwarePlanData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLoadPreset = (preset: SoftwareProjectPreset) => {
    setFormData(preset.planData);
    setActivePresetId(preset.id);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#a855f7']
    });
  };

  // Generate Prompt for AI Agents in Antigravity IDE
  const generatePrompt = () => {
    return `### 🚀 ESPECIFICACIÓN DE SOFTWARE: ${formData.softwareName || 'Mi Nuevo Software'}

Actúa como un **Agente Arquitecto de Software FullStack** de clase mundial.
Vamos a construir un Software como Servicio (SaaS) / Aplicación Web moderna utilizando:
- **Frontend**: Next.js 14 / React (TypeScript, Tailwind CSS, Lucide Icons, Framer Motion).
- **Backend & Base de Datos**: Supabase (PostgreSQL, Row Level Security, Auth & Realtime).
- **Despliegue**: Vercel.

---

#### 1. ¿QUÉ ES Y QUÉ CONSTRUIMOS?
**Nombre del Software**: ${formData.softwareName || 'Pendiente de definir'}
**Descripción del Producto**: ${formData.whatToCreate || 'No especificado'}

#### 2. PROBLEMA QUE SOLUCIONA
${formData.problemSolved || 'No especificado'}

#### 3. PÚBLICO OBJETIVO Y USUARIOS (ROLES)
${formData.targetUser || 'No especificado'}

#### 4. CÓMO SE HACE ACTUALMENTE (SITUACIÓN ANTERIOR)
${formData.currentSolution || 'Proceso manual / Excel / Papel'}

#### 5. MEJORAS CLAVE DESEADAS
${formData.desiredImprovements || 'No especificado'}

#### 6. FUNCIONALIDADES ESENCIALES (ALCANCE MVP)
${formData.keyFeatures || 'No especificado'}

${formData.databaseNeeds ? `#### 7. ESTRUCTURA DE DATOS & SUPABASE\n${formData.databaseNeeds}\n` : ''}
${formData.mvpScope ? `#### 8. PRIORIDAD DE LANZAMIENTO (FASE 1)\n${formData.mvpScope}\n` : ''}

---

### INSTRUCCIONES PARA EL AGENTE DE ANTIGRAVITY IDE:
1. Crea el \`implementation_plan.md\` detallando la arquitectura de carpetas, esquema SQL de Supabase (PostgreSQL + RLS) y rutas de la app.
2. Desarrolla una interfaz moderna, limpia, con diseño premium (glassmorphism, microanimaciones, dark/light mode responsive).
3. Conecta las operaciones CRUD con Supabase de forma segura respetando las políticas RLS.
`;
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([generatePrompt()], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `plan-software-${formData.softwareName ? formData.softwareName.toLowerCase().replace(/\s+/g, '-') : 'idea'}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="w-full max-w-6xl h-[94vh] rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden bg-[#080c16] text-slate-100">
        
        {/* Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 font-black shadow-md shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <span>Generador del Plan de mi Software</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {SOFTWARE_PROJECT_PRESETS.length} Ideas Listas
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Transforma tu idea en una especificación técnica exacta para Antigravity IDE & Supabase
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories & Project Presets Quick-Bar */}
        <div className="px-3.5 py-2.5 bg-slate-900/60 border-b border-slate-800/80 space-y-2 shrink-0">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-thin">
            <span className="text-slate-400 font-mono flex items-center gap-1 shrink-0 text-[10px] uppercase font-bold mr-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              Filtrar:
            </span>
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'todos'
                ? SOFTWARE_PROJECT_PRESETS.length
                : SOFTWARE_PROJECT_PRESETS.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Project Pills List */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {filteredPresets.map((preset) => {
              const isActive = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleLoadPreset(preset)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-500/30 text-white border-cyan-400 shadow-md scale-[1.02]'
                      : 'bg-slate-800/70 hover:bg-slate-700/80 text-slate-300 hover:text-white border-slate-700/80'
                  }`}
                  title={preset.description}
                >
                  <span className="text-sm">{preset.icon}</span>
                  <span className="font-semibold">{preset.label}</span>
                  {isActive && <Check className="w-3 h-3 text-cyan-400 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form & Live Preview Columns */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left: Input Form (Editable & Auto-filled) */}
          <div className="lg:col-span-7 p-3.5 sm:p-5 overflow-y-auto space-y-3.5 border-r border-slate-800/80 bg-slate-950/60">
            {/* 1. Nombre */}
            <div>
              <label className="block text-xs font-mono text-cyan-300 font-semibold mb-1">
                1. NOMBRE DE MI SOFTWARE
              </label>
              <input
                type="text"
                placeholder="Ej: FitCore Gym, OptoVision, RestoFlow AI, VetCare..."
                value={formData.softwareName}
                onChange={(e) => handleChange('softwareName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            {/* 2. Qué quiero crear */}
            <div>
              <label className="block text-xs font-mono text-cyan-300 font-semibold mb-1">
                2. ¿QUÉ QUIERO CREAR? (DESCRIPCIÓN DEL PRODUCTO)
              </label>
              <textarea
                rows={2}
                placeholder="Ej: Sistema integral de gestión con módulos táctiles y base de datos relacional..."
                value={formData.whatToCreate}
                onChange={(e) => handleChange('whatToCreate', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            {/* 3. Qué problema soluciona */}
            <div>
              <label className="block text-xs font-mono text-cyan-300 font-semibold mb-1">
                3. ¿QUÉ PROBLEMA SOLUCIONA? (DOLOR REAL)
              </label>
              <textarea
                rows={2}
                placeholder="Ej: Procesos manuales lentos, descontrol en caja y fuga de clientes por falta de seguimiento..."
                value={formData.problemSolved}
                onChange={(e) => handleChange('problemSolved', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            {/* 4. Quién lo utilizará */}
            <div>
              <label className="block text-xs font-mono text-cyan-300 font-semibold mb-1">
                4. ¿QUIÉN LO UTILIZARÁ? (USUARIOS Y ROLES)
              </label>
              <input
                type="text"
                placeholder="Ej: Administrador, Asesores de venta, Técnicos especialistas y Clientes finales..."
                value={formData.targetUser}
                onChange={(e) => handleChange('targetUser', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            {/* 5. Funcionalidades Esenciales */}
            <div>
              <label className="block text-xs font-mono text-cyan-300 font-semibold mb-1">
                5. ¿QUÉ DEBERÍA PODER HACER? (FUNCIONALIDADES CLAVE)
              </label>
              <textarea
                rows={3}
                placeholder="1. Módulo táctil rápido&#10;2. Base de datos segura en Supabase&#10;3. Reportes automáticos&#10;4. Alertas por WhatsApp..."
                value={formData.keyFeatures}
                onChange={(e) => handleChange('keyFeatures', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all font-mono"
              />
            </div>

            {/* 6 & 7. Situación Actual y Mejoras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-slate-400 font-semibold mb-1">
                  6. SITUACIÓN ANTERIOR
                </label>
                <input
                  type="text"
                  placeholder="Ej: En cuadernos y Excel manual..."
                  value={formData.currentSolution}
                  onChange={(e) => handleChange('currentSolution', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 font-semibold mb-1">
                  7. MEJORA DESEADA
                </label>
                <input
                  type="text"
                  placeholder="Ej: Automatización 100% y cero errores..."
                  value={formData.desiredImprovements}
                  onChange={(e) => handleChange('desiredImprovements', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* 8. Base de Datos / Supabase */}
            <div>
              <label className="block text-xs font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                <Database className="w-3.5 h-3.5" />
                8. ESTRUCTURA DE DATOS & TABLAS SUPABASE (OPCIONAL)
              </label>
              <input
                type="text"
                placeholder="Ej: Tablas para usuarios, reservas, pagos, productos y reportes..."
                value={formData.databaseNeeds || ''}
                onChange={(e) => handleChange('databaseNeeds', e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          {/* Right: Live Prompt Output & Actions */}
          <div className="lg:col-span-5 p-3.5 sm:p-5 bg-slate-950/90 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  Prompt Maestro para Antigravity IDE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Listo para Agentes
                </span>
              </div>

              {/* Code preview */}
              <div className="flex-1 overflow-y-auto rounded-2xl bg-slate-900/95 border border-slate-800 p-3.5 text-xs font-mono text-slate-200 shadow-inner select-text">
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px] text-cyan-200/90">
                  {generatePrompt()}
                </pre>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 justify-between shrink-0">
              <button
                onClick={handleDownloadMarkdown}
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono font-medium flex items-center gap-1.5 transition-all active:scale-95"
                title="Descargar archivo Markdown"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Descargar .md</span>
              </button>

              <button
                onClick={handleCopyPrompt}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>¡Copiado al Portapapeles! 🎉</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-200" />
                    <span>Copiar Prompt Maestro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
