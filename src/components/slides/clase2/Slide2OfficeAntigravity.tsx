import React, { useState } from 'react';
import { 
  Building2, MessageSquare, FolderTree, Terminal, Eye, 
  CheckCircle2, RefreshCw
} from 'lucide-react';

interface ZoneInfo {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  description: string;
  bullets: string[];
  mockupTitle: string;
  mockupContent: React.ReactNode;
}

const OFFICE_ZONES: ZoneInfo[] = [
  {
    id: 'chat',
    title: '1. Chat de Agentes',
    badge: 'ORQUESTACIÓN',
    icon: MessageSquare,
    color: 'from-cyan-500 to-blue-600',
    description: 'Donde tú actúas como CEO. Asignas roles, pasas el Brief de Negocio e inyectas los Skills preparados.',
    bullets: [
      'Comunicación en español natural y directo.',
      'Inyección directa de Skills en un solo prompt.',
      'Memoria de contexto durante toda la sesión.'
    ],
    mockupTitle: 'antigravity-chat',
    mockupContent: (
      <div className="space-y-2 text-xs font-mono">
        <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
          <span className="text-[10px] text-amber-400 font-bold uppercase">👑 CEO (Tú):</span>
          <p className="mt-1 text-slate-200">"Actúa como Web Developer. Carga el Skill 'Landing Page' y construye la Hero Section según nuestro Brief."</p>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
          <span className="text-[10px] text-emerald-400 font-bold uppercase">🤖 Agente Web Developer:</span>
          <p className="mt-1 text-slate-300">"Entendido. Creando <code className="text-cyan-300 font-bold">HeroSection.tsx</code> con diseño responsivo, HSL y CTA a WhatsApp..."</p>
        </div>
      </div>
    )
  },
  {
    id: 'files',
    title: '2. Explorador de Archivos',
    badge: 'SISTEMA DE ARCHIVOS',
    icon: FolderTree,
    color: 'from-violet-500 to-purple-600',
    description: 'Tus agentes crean, editan y organizan carpetas y componentes reales directamente en tu disco duro.',
    bullets: [
      'Cero copiar y pegar código manualmente.',
      'Estructura modular limpia (/components, /data).',
      'Listo para sincronizar con GitHub y Vercel.'
    ],
    mockupTitle: 'project-tree / src /',
    mockupContent: (
      <div className="space-y-1.5 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2 text-violet-400 font-bold">
          <span>📁 src/</span>
        </div>
        <div className="pl-4 flex items-center gap-2 text-slate-400">
          <span>📁 components/</span>
        </div>
        <div className="pl-8 flex items-center gap-2 text-emerald-400">
          <span>📄 HeroSection.tsx</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">auto-creado</span>
        </div>
        <div className="pl-8 flex items-center gap-2 text-emerald-400">
          <span>📄 ServicesGrid.tsx</span>
        </div>
        <div className="pl-8 flex items-center gap-2 text-emerald-400">
          <span>📄 ContactWhatsapp.tsx</span>
        </div>
        <div className="pl-4 flex items-center gap-2 text-slate-400">
          <span>📁 data/</span>
        </div>
        <div className="pl-8 flex items-center gap-2 text-cyan-300">
          <span>📄 businessBrief.ts</span>
        </div>
      </div>
    )
  },
  {
    id: 'terminal',
    title: '3. Terminal & Servidor Local',
    badge: 'EJECUCIÓN NATIVA',
    icon: Terminal,
    color: 'from-emerald-500 to-teal-600',
    description: 'El motor que levanta tu web en segundos en tu propia computadora con Vite y Tailwind CSS.',
    bullets: [
      'Instalación automática de librerías con 1 clic.',
      'Servidor local instantáneo (localhost:5173).',
      'Recarga en caliente (Hot Reload) al instante.'
    ],
    mockupTitle: 'zsh - antigravity terminal',
    mockupContent: (
      <div className="space-y-1.5 text-xs font-mono">
        <div className="text-slate-400">$ npm run dev</div>
        <div className="text-emerald-400">  VITE v5.4.2 ready in 240 ms</div>
        <div className="text-cyan-300">  ➜ Local:   http://localhost:5173/</div>
        <div className="text-slate-400">  ➜ Network: use --host to expose</div>
        <div className="text-emerald-300/80 pt-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Servidor activo • Renderizando cambios en vivo</span>
        </div>
      </div>
    )
  },
  {
    id: 'preview',
    title: '4. Vista Previa & Auto-Fix',
    badge: 'CALIDAD AGENTIC',
    icon: Eye,
    color: 'from-amber-500 to-orange-600',
    description: 'Tus agentes no solo escriben código: ven la pantalla, detectan errores en consola y se auto-corrigen solos.',
    bullets: [
      'Inspección visual en tiempo real en paralelo.',
      'Si algo falla, el agente lee el log y lo repara.',
      'Auditoría visual para celular y escritorio.'
    ],
    mockupTitle: 'live-browser-audit.log',
    mockupContent: (
      <div className="space-y-2 text-xs font-mono">
        <div className="p-2 rounded bg-red-950/40 border border-red-500/30 text-red-300 flex items-center gap-2">
          <span>⚠️ Warning: Missing aria-label on WhatsApp CTA</span>
        </div>
        <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>✓ Auto-corregido por Agente Auditor: Accesibilidad 100%</span>
        </div>
      </div>
    )
  }
];

export const Slide2OfficeAntigravity: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string>('chat');
  const currentZone = OFFICE_ZONES.find((z) => z.id === activeZone) || OFFICE_ZONES[0];

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            La Oficina Digital
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• Dónde vive tu equipo de IA</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mt-1">
          Antigravity: Tu <span className="text-gradient-cyan">Centro de Mando</span>
        </h2>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1">
        {/* Left Column: 4 Zones Switcher */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          {OFFICE_ZONES.map((zone) => {
            const isSelected = zone.id === activeZone;
            const Icon = zone.icon;

            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                    : 'bg-slate-950/50 hover:bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${zone.color} text-white shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400/90 uppercase tracking-wider font-semibold">
                      {zone.badge}
                    </div>
                    <div className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {zone.title}
                    </div>
                  </div>
                </div>

                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Zone Preview & Capabilities */}
        <div className="lg:col-span-7 glass-card p-5 sm:p-6 rounded-3xl border border-slate-700/80 bg-slate-950/80 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="space-y-3.5">
            {/* Zone header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
                  <currentZone.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                    {currentZone.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {currentZone.title}
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                100% Autónomo
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentZone.description}
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
              {currentZone.bullets.map((b, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Visual Mockup Box */}
            <div className="mt-2.5 rounded-2xl bg-[#080d1a] border border-slate-800 p-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-1.5 mb-2 text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300 font-semibold">{currentZone.mockupTitle}</span>
                </div>
                <span className="text-cyan-400 flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 animate-spin" /> Live Sync
                </span>
              </div>

              {currentZone.mockupContent}
            </div>
          </div>

          <div className="pt-2.5 mt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>💡 Antigravity coordina a tus agentes en un solo lugar.</span>
            <span className="text-cyan-400 font-semibold">Tú tienes el control total</span>
          </div>
        </div>
      </div>
    </div>
  );
};
