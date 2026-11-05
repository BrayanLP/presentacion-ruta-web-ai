import React, { useState, useEffect, useRef } from 'react';
import { 
  Dices, Plus, Trash2, RotateCcw, Sparkles, ArrowRight, 
  ListPlus, X, Trophy, Rocket, User
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectEntry {
  id: string;
  student: string;
  idea: string;
  category: 'landing' | 'portfolio' | 'ecommerce' | 'webapp' | 'services';
}

interface SlideProps {
  onNext: () => void;
}

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  landing: { label: 'Landing Negocio', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  portfolio: { label: 'Portafolio', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  ecommerce: { label: 'E-commerce', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  webapp: { label: 'Web App / SaaS', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  services: { label: 'Servicios Pro', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
};

const DEFAULT_PROJECTS: ProjectEntry[] = [
  { id: '1', student: 'Carlos M.', idea: 'Barbería Vintage con reservas por WhatsApp', category: 'landing' },
  { id: '2', student: 'Ana R.', idea: 'Pizzería Artesanal a la leña con menú QR', category: 'landing' },
  { id: '3', student: 'Diego S.', idea: 'Portafolio minimalista de fotografía de bodas', category: 'portfolio' },
  { id: '4', student: 'Lucía P.', idea: 'Gimnasio & Crossfit con horarios y membresías', category: 'services' },
  { id: '5', student: 'Sofía C.', idea: 'Tienda de ropa Streetwear oversize con carrito', category: 'ecommerce' },
  { id: '6', student: 'Mateo V.', idea: 'Plataforma SaaS de cotizaciones para electricistas', category: 'webapp' },
  { id: '7', student: 'Valeria R.', idea: 'Clínica dental con agenda y testimonios antes/después', category: 'services' },
  { id: '8', student: 'Javier T.', idea: 'Academia online de clases de guitarra con video demo', category: 'webapp' },
];

const WHEEL_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Emerald
  '#8B5CF6', // Purple
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#06B6D4', // Cyan
  '#F97316', // Orange
  '#6366F1', // Indigo
];

export const Slide6Roulette: React.FC<SlideProps> = ({ onNext }) => {
  const [projects, setProjects] = useState<ProjectEntry[]>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_roulette_projects');
      return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  const [studentName, setStudentName] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [category, setCategory] = useState<ProjectEntry['category']>('landing');

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<ProjectEntry | null>(null);
  const [pastWinners, setPastWinners] = useState<ProjectEntry[]>([]);

  // Bulk Modal State
  const [isBulkOpen, setIsBulkOpen] = useState(false);
  const [bulkText, setBulkText] = useState('');

  const spinTimeoutRef = useRef<any>(null);

  // Sync projects with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ruta_web_roulette_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  // Web Audio Ticker Sound
  const playTick = (freq = 550) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {}
  };

  // Web Audio Fanfare Sound
  const playFanfare = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      const chords = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      chords.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.6);
      });
    } catch {}
  };

  const handleAddProject = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!projectIdea.trim()) return;

    const newEntry: ProjectEntry = {
      id: Date.now().toString(),
      student: studentName.trim() || `Alumno #${projects.length + 1}`,
      idea: projectIdea.trim(),
      category,
    };

    setProjects([newEntry, ...projects]);
    setStudentName('');
    setProjectIdea('');
  };

  const handleRemove = (id: string) => {
    if (projects.length <= 2) return;
    setProjects(projects.filter((p) => p.id !== id));
    if (winner?.id === id) setWinner(null);
  };

  const handleResetDefaults = () => {
    setProjects(DEFAULT_PROJECTS);
    setWinner(null);
  };

  const handleBulkSubmit = () => {
    const lines = bulkText.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) return;

    const parsed: ProjectEntry[] = lines.map((line, idx) => {
      // Split by hyphen or colon if available: "Carlos - Landing Gym"
      const parts = line.split(/[-:]/);
      let student = `Alumno #${projects.length + idx + 1}`;
      let idea = line;
      if (parts.length >= 2) {
        student = parts[0].trim();
        idea = parts.slice(1).join('-').trim();
      }
      return {
        id: (Date.now() + idx).toString(),
        student,
        idea,
        category: 'landing',
      };
    });

    setProjects([...parsed, ...projects]);
    setBulkText('');
    setIsBulkOpen(false);
  };

  // Spin Roulette
  const spinRoulette = () => {
    if (isSpinning || projects.length < 2) return;

    setIsSpinning(true);
    setWinner(null);

    const sliceAngle = 360 / projects.length;
    const winningIndex = Math.floor(Math.random() * projects.length);
    const selected = projects[winningIndex];

    // Spins count (5 to 8 full turns)
    const extraRotations = 360 * (5 + Math.floor(Math.random() * 3));
    // Center of winning slice aligned with top arrow (270 deg or pointer at 90 deg)
    // Pointer is placed at the top (270 deg from 0 deg standard)
    const targetSliceDegree = extraRotations + (360 - (winningIndex * sliceAngle + sliceAngle / 2));
    const nextRotation = rotation + targetSliceDegree;
    setRotation(nextRotation);

    // Audio ticks during spin
    let currentTick = 0;
    const totalTicks = 28;
    const tickInterval = 140;

    const runTicks = () => {
      if (currentTick < totalTicks) {
        playTick(450 + currentTick * 12);
        currentTick++;
        spinTimeoutRef.current = setTimeout(runTicks, tickInterval + currentTick * 15);
      }
    };
    runTicks();

    // Finish spinning after 4.5 seconds
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(selected);
      setPastWinners((prev) => [selected, ...prev]);

      // Save winner for the Next.js Prompt Generator slide
      try {
        localStorage.setItem('ruta_web_roulette_winner', JSON.stringify(selected));
      } catch (e) {
        console.error(e);
      }

      playFanfare();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#00F0FF', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899'],
      });
    }, 4500);
  };

  // Proceed to Prompt Generator with the chosen project
  const handleProceedToPromptGenerator = (project: ProjectEntry) => {
    try {
      localStorage.setItem('ruta_web_roulette_winner', JSON.stringify(project));
    } catch {}
    onNext();
  };

  const sliceAngle = 360 / Math.max(projects.length, 1);

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-3 sm:p-6 md:p-8 relative select-none">
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-3 relative z-10 shrink-0 mb-4">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Dices className="w-3.5 h-3.5 animate-spin-slow" />
            <span>SORTEO DE PROYECTOS EN VIVO</span>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden md:inline">
            {projects.length} {projects.length === 1 ? 'idea registrada' : 'ideas registradas'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsBulkOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-all"
            title="Pegar lista de ideas desde el chat"
          >
            <ListPlus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pegar de Chat</span>
          </button>
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-medium transition-all"
            title="Cargar ideas creativas de ejemplo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ejemplos</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form / List (Left) + Big Roulette Wheel (Right) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-0 relative z-10">
        
        {/* Left Column: Form & Project List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 h-full max-h-[580px]">
          
          {/* Add Project Form Box */}
          <div className="glass-card bg-slate-900/70 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2.5 shadow-xl shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5 text-cyan-400" />
                <span>Agregar Idea de Alumno</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                ¡Pide ideas al chat!
              </span>
            </div>

            <form onSubmit={handleAddProject} className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nombre alumno (ej. Carlos)"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ProjectEntry['category'])}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="landing">Landing de Negocio</option>
                  <option value="portfolio">Portafolio Personal</option>
                  <option value="ecommerce">E-commerce / Tienda</option>
                  <option value="webapp">Web App / SaaS</option>
                  <option value="services">Servicios Pro</option>
                </select>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                  placeholder="Idea de web (ej. Landing para Barbería Vintage con reservas)..."
                  className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!projectIdea.trim() || isSpinning}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir</span>
                </button>
              </div>
            </form>
          </div>

          {/* Scrolleable List of Ideas */}
          <div className="flex-1 glass-card bg-slate-900/50 p-3.5 rounded-2xl border border-slate-800/80 flex flex-col min-h-0 overflow-hidden shadow-lg">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400 font-mono">
              <span>LISTA DE PROYECTOS ({projects.length})</span>
              <span>Categoría</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {projects.map((item, idx) => {
                const catObj = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.landing;
                const isItemWinner = winner?.id === item.id;

                return (
                  <div
                    key={item.id}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
                      isItemWinner
                        ? 'bg-cyan-500/20 border-cyan-400 shadow-md shadow-cyan-500/20 scale-[1.01]'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: WHEEL_COLORS[idx % WHEEL_COLORS.length] }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white truncate">
                            {item.student}
                          </span>
                          {isItemWinner && (
                            <span className="text-[10px] bg-cyan-500 text-slate-950 font-black px-1.5 py-0.2 rounded-full uppercase">
                              ¡Ganador!
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-300 truncate">
                          {item.idea}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${catObj.color}`}>
                        {catObj.label}
                      </span>
                      <button
                        onClick={() => handleRemove(item.id)}
                        disabled={projects.length <= 2 || isSpinning}
                        className="text-slate-500 hover:text-red-400 transition-colors p-1 disabled:opacity-20"
                        title="Eliminar de la ruleta"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Roulette Wheel & Winner Showcase (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center h-full relative">
          
          {/* Wheel Container with Pointer */}
          <div className="relative w-72 h-72 sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] flex items-center justify-center">
            
            {/* Top Indicator Pointer (Arrow pointing down to top of the wheel) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
              <div className="w-6 h-7 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 clip-triangle shadow-[0_0_15px_rgba(245,158,11,0.8)] filter drop-shadow-md" 
                style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
              />
            </div>

            {/* Glowing neon ring around wheel */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.25)] pointer-events-none z-10" />

            {/* The Actual Spinning Wheel */}
            <div
              className="w-full h-full rounded-full relative overflow-hidden border-4 border-slate-900 transition-transform ease-[cubic-bezier(0.12,0,0.08,1)]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transitionDuration: isSpinning ? '4500ms' : '0ms',
                background: `conic-gradient(${projects.map((_, i) => {
                  const start = i * sliceAngle;
                  const end = (i + 1) * sliceAngle;
                  const color = WHEEL_COLORS[i % WHEEL_COLORS.length];
                  return `${color} ${start}deg ${end}deg`;
                }).join(', ')})`,
              }}
            >
              {/* Slice Labels (Radial text lines) */}
              {projects.map((project, idx) => {
                const angle = idx * sliceAngle + sliceAngle / 2;
                return (
                  <div
                    key={project.id}
                    className="absolute top-0 left-0 w-full h-full flex items-start justify-center origin-center pointer-events-none"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="pt-3 sm:pt-4 max-w-[130px] sm:max-w-[150px] text-center px-1">
                      <span className="text-[11px] sm:text-xs font-black text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] truncate block">
                        {project.student}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate block">
                        {project.idea}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Hub & Spin Button */}
            <button
              onClick={spinRoulette}
              disabled={isSpinning || projects.length < 2}
              className={`absolute z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border-4 border-cyan-400 flex flex-col items-center justify-center p-2 text-center shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all hover:scale-105 active:scale-95 group ${
                isSpinning ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:border-amber-400'
              }`}
            >
              <Dices className={`w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:text-amber-400 transition-colors ${
                isSpinning ? 'animate-spin' : ''
              }`} />
              <span className="text-[11px] sm:text-xs font-black text-white uppercase tracking-wider mt-1">
                {isSpinning ? 'Girando...' : '¡Girar!'}
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                {projects.length} ideas
              </span>
            </button>
          </div>

          {/* Winner Spotlight Card */}
          {winner && (
            <div className="mt-4 w-full max-w-lg glass-card bg-gradient-to-r from-cyan-950/90 via-slate-900/90 to-purple-950/90 p-4 rounded-2xl border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.35)] animate-fade-in flex flex-col gap-3 relative z-30">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono font-bold uppercase">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>¡PROYECTO SELECCIONADO!</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Por {winner.student}
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>{winner.idea}</span>
                </h4>
                <p className="text-xs text-cyan-200/80 mt-0.5">
                  Categoría: <span className="font-semibold">{CATEGORY_LABELS[winner.category]?.label || 'Landing'}</span> • Stack: Next.js + Tailwind CSS
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
                <button
                  onClick={() => handleProceedToPromptGenerator(winner)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 transition-all hover:scale-102 active:scale-98"
                >
                  <Rocket className="w-4 h-4 text-amber-300" />
                  <span>Crear Prompt Maestro en Next.js</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={spinRoulette}
                  disabled={isSpinning}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                  title="Girar nuevamente"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {!winner && !isSpinning && (
            <div className="mt-4 text-center">
              <p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Haz clic en <strong>¡GIRAR!</strong> para sortear qué página web construir hoy.</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/60 relative z-10 shrink-0">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span>{pastWinners.length > 0 ? `Ganadores previos: ${pastWinners.length}` : 'Esperando primer giro...'}</span>
        </div>
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all border border-slate-700 hover:border-slate-500"
        >
          <span>Ir al Generador Next.js</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bulk Add Modal */}
      {isBulkOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ListPlus className="w-4 h-4 text-cyan-400" />
                <span>Pegar Ideas de Alumnos en Lote</span>
              </h3>
              <button
                onClick={() => setIsBulkOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Pega las ideas del chat de Zoom, Discord o WhatsApp. Puedes escribir una idea por línea, o en formato: <code className="text-cyan-300">Nombre - Idea de Web</code>.
            </p>

            <textarea
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              rows={6}
              placeholder={`Carlos - Landing para Barbería Vintage con citas por WhatsApp\nSofía - Tienda de Ropa Streetwear con carrito\nDiego - Portafolio de Fotografía Minimalista\nLucía - Web para Gimnasio con horarios`}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setIsBulkOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleBulkSubmit}
                disabled={!bulkText.trim()}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white text-xs font-bold disabled:opacity-40"
              >
                Importar a la Ruleta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
