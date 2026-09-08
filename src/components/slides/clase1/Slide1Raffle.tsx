import React, { useState, useEffect, useRef } from 'react';
import { 
  Gift, Trophy, Sparkles, UserPlus, Users, 
  ArrowRight, Crown, Flame, Trash2, ListPlus, X, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onNext: () => void;
}

const DEFAULT_PARTICIPANTS = [
  'Carlos Mendoza (Agencia)',
  'Ana Rodríguez (Pizzería)',
  'Diego Silva (Clínica Dental)',
  'Lucía Paredes (Gimnasio)',
  'Brayan Laureano (Instructor)',
  'Mateo Vargas (E-commerce)',
  'Sofía Castro (Consultora)',
  'Gabriel Morales (Academia)',
  'Valeria Ríos (Boutique)',
  'Javier Torres (Restaurante)'
];

export const Slide1Raffle: React.FC<Props> = ({ onNext }) => {
  const [participants, setParticipants] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_raffle_names');
      return saved ? JSON.parse(saved) : DEFAULT_PARTICIPANTS;
    } catch {
      return DEFAULT_PARTICIPANTS;
    }
  });

  const [newName, setNewName] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>('¿Quién será el ganador?');
  const [pastWinners, setPastWinners] = useState<string[]>([]);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkText, setBulkText] = useState('');

  const spinTimerRef = useRef<any>(null);

  useEffect(() => {
    try {
      localStorage.setItem('ruta_web_raffle_names', JSON.stringify(participants));
    } catch (e) {
      console.error(e);
    }
  }, [participants]);

  // Web Audio ticker sound
  const playTick = (freq = 600) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch {}
  };

  // Web Audio Winner Fanfare
  const playFanfare = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.12);
        osc.stop(audioCtx.currentTime + idx * 0.12 + 0.65);
      });
    } catch {}
  };

  const addParticipant = () => {
    if (!newName.trim()) return;
    if (!participants.includes(newName.trim())) {
      setParticipants([...participants, newName.trim()]);
      setNewName('');
    }
  };

  const removeParticipant = (nameToRemove: string) => {
    setParticipants(participants.filter((p) => p !== nameToRemove));
  };

  const handleBulkAdd = () => {
    const lines = bulkText
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    const merged = Array.from(new Set([...participants, ...lines]));
    setParticipants(merged);
    setBulkText('');
    setIsBulkModalOpen(false);
  };

  const startRaffle = () => {
    if (participants.length < 2 || isSpinning) return;

    setIsSpinning(true);
    setWinner(null);

    let speed = 40;
    let iterations = 0;
    const maxIterations = 35 + Math.floor(Math.random() * 15);

    const spin = () => {
      iterations++;
      const randomIndex = Math.floor(Math.random() * participants.length);
      const candidate = participants[randomIndex];
      setDisplayName(candidate);
      playTick(500 + iterations * 15);

      if (iterations < maxIterations) {
        speed += 8;
        spinTimerRef.current = setTimeout(spin, speed);
      } else {
        // We have our final winner!
        setIsSpinning(false);
        setWinner(candidate);
        setPastWinners((prev) => [candidate, ...prev]);
        playFanfare();

        // Fireworks Confetti Blast
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#f59e0b', '#10b981', '#06b6d4', '#ec4899', '#8b5cf6']
        });
        setTimeout(() => {
          confetti({
            particleCount: 100,
            angle: 60,
            spread: 60,
            origin: { x: 0, y: 0.6 }
          });
          confetti({
            particleCount: 100,
            angle: 120,
            spread: 60,
            origin: { x: 1, y: 0.6 }
          });
        }, 300);
      }
    };

    spin();
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-12 relative overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>DINÁMICA EN VIVO • PREMIANDO EL COMPROMISO</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white font-display">
            🎁 Gran Sorteo de la Clase 1
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            Exclusivo para los alumnos que cumplieron el reto y trajeron su anuncio o datos del negocio.
          </p>
        </div>

        {/* Action badges */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setIsBulkModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-all"
          >
            <ListPlus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pegar Lista</span>
          </button>
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{participants.length} Participantes</span>
          </div>
        </div>
      </div>

      {/* Main Center Roulette Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left: Interactive Roulette Stage (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-3xl border border-amber-500/40 shadow-2xl flex flex-col justify-between items-center text-center space-y-6 relative overflow-hidden bg-slate-950/80">
          <div className="w-full flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Tómbola Digital
            </span>
            {winner && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-400" /> ¡Ganador Seleccionado!
              </span>
            )}
          </div>

          {/* Slot Machine Display Screen */}
          <div className="w-full py-8 md:py-12 px-6 rounded-2xl bg-slate-900/90 border-2 border-amber-500/50 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
            {winner ? (
              <div className="space-y-3 animate-fadeIn">
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-500/30 animate-bounce">
                  <Trophy className="w-10 h-10" />
                </div>
                <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                  🎉 ¡FELICIDADES AL GANADOR! 🎉
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display text-gradient-gold">
                  {winner}
                </h3>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {isSpinning ? '⚡ Girando a toda velocidad...' : '🎯 Listo para el sorteo'}
                </div>
                <h3
                  className={`text-xl sm:text-3xl md:text-4xl font-extrabold font-display transition-all ${
                    isSpinning
                      ? 'text-cyan-300 scale-105 animate-pulse'
                      : 'text-slate-300'
                  }`}
                >
                  {displayName}
                </h3>
              </div>
            )}
          </div>

          {/* Big Spin Button */}
          <div className="w-full flex items-center justify-center gap-3">
            <button
              onClick={startRaffle}
              disabled={isSpinning || participants.length < 2}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-2xl ${
                isSpinning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-amber-500/30 hover:scale-105 active:scale-95'
              }`}
            >
              <Flame className="w-6 h-6 animate-pulse" />
              <span>{isSpinning ? '¡Girando la Ruleta...!' : winner ? '¡Girar de Nuevo!' : '¡GIRAR RULETA EN VIVO!'}</span>
            </button>
          </div>
        </div>

        {/* Right: Participant List & Input (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-300 font-bold uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" /> Lista de Participantes
              </span>
              <button
                onClick={() => setParticipants([])}
                className="text-[11px] text-slate-500 hover:text-red-400 font-mono transition-colors"
                title="Limpiar lista"
              >
                Limpiar Todo
              </button>
            </div>

            {/* Quick Add Form */}
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addParticipant()}
                placeholder="Escribe un nombre y presiona Enter..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-sans focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={addParticipant}
                className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shrink-0"
                title="Agregar"
              >
                <UserPlus className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable list of chips */}
            <div className="mt-3 max-h-48 overflow-y-auto space-y-1.5 pr-1">
              {participants.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500 font-mono">
                  No hay participantes. Escribe nombres o haz clic en "Pegar Lista".
                </div>
              ) : (
                participants.map((name, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-200 group hover:border-slate-700"
                  >
                    <span className="font-medium truncate">{idx + 1}. {name}</span>
                    <button
                      onClick={() => removeParticipant(name)}
                      className="text-slate-600 hover:text-red-400 transition-colors p-1"
                      title="Eliminar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Past Winners list */}
          {pastWinners.length > 0 && (
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono text-amber-400 font-bold mb-1">
                🏆 Ganadores de esta Sesión:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pastWinners.map((w, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bulk Add Modal */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md p-5 rounded-2xl border border-slate-700 bg-slate-950 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white font-display">Pegar Lista de Participantes</h4>
              <button onClick={() => setIsBulkModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Pega los nombres de tus alumnos (un nombre por línea o separados por comas):
            </p>
            <textarea
              rows={6}
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              placeholder="Carlos Mendoza&#10;Ana Rodríguez&#10;Diego Silva..."
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsBulkModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleBulkAdd}
                className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs font-mono hover:bg-amber-400 transition-all flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Agregar Nombres</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Next Button */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <span className="text-xs text-slate-400 font-mono">
          🚀 Siguiente paso: Crear el Brief de tu Web y exportar el Prompt para la IA.
        </span>

        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-400 hover:to-cyan-400 text-slate-950 font-bold text-xs md:text-sm transition-all shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95"
        >
          <span>Pasar al Proyecto: Brief de mi Web</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
