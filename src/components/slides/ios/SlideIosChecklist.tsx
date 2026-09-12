import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, Trophy, ArrowRight, 
  RotateCcw, Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onGoToClass1: () => void;
}

interface ChecklistItem {
  id: string;
  category: 'hardware' | 'ai' | 'accounts' | 'mobile' | 'idea';
  icon: string;
  title: string;
  desc: string;
  required: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'laptop',
    category: 'hardware',
    icon: '💻',
    title: 'Laptop (Mac o PC)',
    desc: 'Equipo principal donde corre Antigravity IDE y el servidor local de Expo.',
    required: true
  },
  {
    id: 'internet',
    category: 'hardware',
    icon: '🌐',
    title: 'Internet de Alta Velocidad',
    desc: 'Conexión Wi-Fi compartida para sincronizar tu iPhone con la laptop.',
    required: true
  },
  {
    id: 'antigravity',
    category: 'ai',
    icon: '🤖',
    title: 'Antigravity IDE Instalado',
    desc: 'Entorno agentic con permisos de workspace y terminal habilitados.',
    required: true
  },
  {
    id: 'google-ai',
    category: 'ai',
    icon: '✨',
    title: 'Google AI Pro Activo',
    desc: 'Motor de razonamiento multimodal conectado para generar el código React Native.',
    required: true
  },
  {
    id: 'github',
    category: 'accounts',
    icon: '🐙',
    title: 'Cuenta en GitHub',
    desc: 'Repositorio para versionar y resguardar tu código fuente en la nube.',
    required: true
  },
  {
    id: 'expo-account',
    category: 'mobile',
    icon: '⚡',
    title: 'Cuenta Expo (expo.dev)',
    desc: 'Cuenta creada en la plataforma oficial para compilar y desplegar con EAS.',
    required: true
  },
  {
    id: 'supabase',
    category: 'accounts',
    icon: '🗄️',
    title: 'Cuenta en Supabase',
    desc: 'Base de datos PostgreSQL en la nube, autenticación y storage listos.',
    required: true
  },
  {
    id: 'apple-google-dev',
    category: 'mobile',
    icon: '🍎/🤖',
    title: 'Cuentas Developer (Apple / Google)',
    desc: 'Opcionales para fase de pruebas; requeridas para publicar en App Store y Google Play.',
    required: false
  },
  {
    id: 'smartphone',
    category: 'mobile',
    icon: '📱',
    title: 'Smartphone Físico (iPhone o Android)',
    desc: 'Dispositivo real para interactuar y validar la experiencia táctil en vivo.',
    required: true
  },
  {
    id: 'expo-go',
    category: 'mobile',
    icon: '📲',
    title: 'Expo Go Instalado (iOS / Android)',
    desc: 'App móvil descargada desde App Store o Google Play para escanear el QR y probar.',
    required: true
  },
  {
    id: 'app-idea',
    category: 'idea',
    icon: '🚨',
    title: 'Tu Propia Idea de Aplicación',
    desc: 'Respuestas claras a: ¿Qué quiero crear? ¿Qué problema resuelve? ¿Quién la usará?',
    required: true
  }
];

export const SlideIosChecklist: React.FC<Props> = ({ onGoToClass1 }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    'laptop', 'internet', 'antigravity', 'google-ai', 'github', 'expo-account', 'supabase', 'smartphone', 'expo-go'
  ]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      if (next.length === CHECKLIST_ITEMS.length) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#10b981', '#ff0055', '#ffe600']
        });
      }
      return next;
    });
  };

  const markAll = () => {
    setCheckedIds(CHECKLIST_ITEMS.map((i) => i.id));
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#10b981', '#3b82f6', '#ec4899']
    });
  };

  const resetAll = () => setCheckedIds([]);

  const progress = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);
  const isComplete = progress === 100;

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 relative z-10 overflow-y-auto justify-between select-none">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>🎯 AUDITORÍA EN VIVO — CLASE 0</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={markAll}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono transition-colors"
            >
              Marcar Todos
            </button>
            <button
              onClick={resetAll}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-mono transition-colors flex items-center gap-1"
              title="Reiniciar casillas"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Checklist Maestro: Apps iOS & Android
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Marca cada casilla en vivo y confirma que estás al 100% para la Clase 1.
            </p>
          </div>

          {/* Progress Pill */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-2.5 rounded-2xl shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center font-mono">
              {progress}%
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                {checkedIds.length} de {CHECKLIST_ITEMS.length} verificados
              </div>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 my-auto py-3">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3 rounded-2xl cursor-pointer transition-all border flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-emerald-950/20 border-emerald-500/50 text-white shadow-sm'
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </span>
                  {!item.required && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                      Opcional
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer & Next Class Action */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          {isComplete ? (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Trophy className="w-4 h-4 text-emerald-400" /> ¡Entorno y Producto 100% listos para construir!
            </span>
          ) : (
            <span>Marca todas las casillas para continuar hacia la Clase 1.</span>
          )}
        </div>

        <button
          onClick={onGoToClass1}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg ${
            isComplete
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-emerald-500/25 hover:scale-105'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
          }`}
        >
          <span>Pasar a Clase 1: App Blueprint</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
