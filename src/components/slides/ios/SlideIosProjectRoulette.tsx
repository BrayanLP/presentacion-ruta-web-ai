import React, { useState } from 'react';
import { Play, Plus, X, ArrowRight, Dices, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onNext: () => void;
}

export const SlideIosProjectRoulette: React.FC<Props> = ({ onNext }) => {
  const [projects, setProjects] = useState<string[]>([
    'App de Delivery',
    'Finanzas Personales',
    'To-Do List Colaborativa',
    'Reservas de Canchas'
  ]);
  const [newProject, setNewProject] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.trim() && !projects.includes(newProject.trim())) {
      setProjects([...projects, newProject.trim()]);
      setNewProject('');
      setWinner(null);
    }
  };

  const handleRemoveProject = (index: number) => {
    if (projects.length > 2) {
      setProjects(projects.filter((_, i) => i !== index));
      setWinner(null);
    }
  };

  const spinWheel = () => {
    if (isSpinning || projects.length < 2) return;
    
    setIsSpinning(true);
    setWinner(null);

    // Calculate rotation
    const spins = 5; // number of full rotations
    const sliceAngle = 360 / projects.length;
    const winningIndex = Math.floor(Math.random() * projects.length);
    
    // Stop at the middle of the winning slice
    // CSS rotation goes clockwise. Arrow is at the right (0 degrees).
    const stopAngle = (spins * 360) + (360 - (winningIndex * sliceAngle)) - (sliceAngle / 2);
    
    setRotation(rotation + stopAngle + 360 - (rotation % 360)); // Ensure it always spins forward

    setTimeout(() => {
      setIsSpinning(false);
      setWinner(projects[winningIndex]);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF1493', '#00FFFF', '#FFD700']
      });
    }, 4000); // 4 seconds spin duration
  };

  return (
    <div className="h-full flex flex-col p-6 sm:p-10 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex items-center gap-3 relative z-10 shrink-0 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Smartphone className="w-3.5 h-3.5" />
          <span>RUTA APP CON IA</span>
        </div>
      </div>

      <div className="mb-8 shrink-0 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display mb-3">
          Ruleta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Proyectos</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Agrega las ideas de la audiencia y deja que la suerte decida qué aplicación móvil vamos a construir hoy.
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-center min-h-0 relative z-10">
        
        {/* Left: Project List & Input */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="glass-card bg-slate-900/50 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Dices className="text-pink-400" />
              Opciones de App
            </h3>
            
            <form onSubmit={handleAddProject} className="flex gap-2 mb-6">
              <input
                type="text"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                placeholder="Nueva idea de app..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!newProject.trim() || isSpinning}
                className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:hover:bg-pink-600 text-white p-2.5 rounded-xl transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5" />
              </button>
            </form>

            <div className="flex flex-col gap-2 max-h-[30vh] overflow-y-auto custom-scrollbar pr-2">
              {projects.map((project, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-800/80 px-4 py-3 rounded-xl group border border-slate-700/50">
                  <span className="text-slate-200 font-medium">{project}</span>
                  <button
                    onClick={() => handleRemoveProject(idx)}
                    disabled={projects.length <= 2 || isSpinning}
                    className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: The Wheel */}
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center relative">
          
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px]">
            {/* Pointer */}
            <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-20">
              <div className="w-0 h-0 border-y-[15px] border-y-transparent border-r-[30px] border-r-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] rotate-180" />
            </div>

            {/* The Wheel */}
            <div 
              className="w-full h-full rounded-full border-4 border-slate-800 relative overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.15)] transition-transform duration-[4000ms] ease-[cubic-bezier(0.1,0,0,1)]"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {projects.map((_, idx) => {
                const sliceAngle = 360 / projects.length;
                const rotate = idx * sliceAngle;
                

                return (
                  <div 
                    key={idx}
                    className="absolute top-0 left-0 w-full h-full origin-center"
                    style={{ transform: `rotate(${rotate}deg)` }}
                  >
                    {/* SVG wedge trick to handle precise angles */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] origin-bottom flex flex-col items-center justify-start pt-6" style={{ transform: `rotate(${sliceAngle/2}deg)` }}>
                       <span className="text-white font-bold text-sm sm:text-base transform -rotate-90 origin-center whitespace-nowrap overflow-hidden text-ellipsis px-4 max-w-[150px]" style={{ transform: `rotate(90deg) translateY(-20px)` }}>
                          {/* We don't render text here if we do full CSS SVG wedges, let's use a simpler approach */}
                       </span>
                    </div>
                  </div>
                );
              })}
              
              {/* Conic Gradient for the wheel background */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${projects.map((_, i) => {
                    const start = i * (360 / projects.length);
                    const end = (i + 1) * (360 / projects.length);
                    const colors = ['#db2777', '#9333ea', '#2563eb', '#0891b2', '#059669', '#d97706'];
                    const color = colors[i % colors.length];
                    return `${color} ${start}deg ${end}deg`;
                  }).join(', ')})`
                }}
              />
              
              {/* Text placement */}
              {projects.map((project, idx) => {
                const sliceAngle = 360 / projects.length;
                const rotate = idx * sliceAngle + (sliceAngle / 2);
                return (
                  <div
                    key={idx}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{ transform: `rotate(${rotate}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex items-start justify-center pt-8 sm:pt-12">
                      <span className="text-white font-bold text-sm sm:text-base drop-shadow-md px-4 whitespace-nowrap transform -rotate-90 origin-center" style={{ transform: 'rotate(90deg) translateX(40px)' }}>
                        {project.length > 20 ? project.substring(0, 17) + '...' : project}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 rounded-full border-4 border-slate-800 z-10 shadow-xl flex items-center justify-center">
                 <div className="w-3 h-3 bg-pink-500 rounded-full" />
              </div>
            </div>
          </div>

          <button
            onClick={spinWheel}
            disabled={isSpinning || projects.length < 2}
            className="mt-8 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-200" />
            <div className="relative px-10 py-4 bg-slate-900 rounded-2xl border border-slate-700 flex items-center gap-3">
              <Play className="w-6 h-6 text-pink-400 fill-pink-400" />
              <span className="text-xl font-bold text-white">GIRAR RULETA</span>
            </div>
          </button>

        </div>
      </div>

      {/* Winner Modal */}
      {winner && !isSpinning && (
        <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-pink-500/30 p-10 rounded-3xl max-w-lg w-full text-center shadow-[0_0_50px_rgba(236,72,153,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-cyan-500" />
            <h2 className="text-2xl font-medium text-slate-300 mb-2">¡Proyecto Seleccionado!</h2>
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 my-6">{winner}</h3>
            
            <button
              onClick={() => {
                setWinner(null);
                onNext();
              }}
              className="mt-4 px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 w-full"
            >
              Iniciar Proyecto <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setWinner(null)}
              className="mt-4 px-8 py-3 bg-transparent text-slate-400 hover:text-white rounded-xl font-medium transition-all w-full"
            >
              Girar de nuevo
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
