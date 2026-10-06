import React, { useState } from 'react';
import { Briefcase, Coffee, CheckSquare, Copy, Check, MousePointer2, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide6ProjectsInteractive: React.FC<SlideProps> = ({ onNext }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const projects = [
    {
      id: 'portfolio',
      title: 'Portafolio Personal',
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      description: 'Ideal para mostrar tu trabajo y presentarte al mundo.',
      color: 'blue',
      prompt: `Actúa como un desarrollador Frontend Senior experto en React y Next.js (App Router). Genera el código para un portafolio personal moderno y premium. 

Requisitos técnicos:
1. Usa Next.js con Tailwind CSS para los estilos.
2. Divide el código en componentes reutilizables (Navbar, Hero, ProjectCard, Footer).
3. Entrégame el código del componente principal page.tsx que integre todo.

Secciones a incluir:
- Navbar: Fija con efecto blur (backdrop-blur). Logo a la izquierda, links a la derecha.
- Hero Section: Título impactante ('Hola, soy [Tu Nombre]'), subtítulo y botón llamativo con gradiente.
- Proyectos: Un grid responsivo. Tarjetas con efecto hover (escala ligera y sombra resaltada).
- Footer: Redes sociales y contacto.

Estilo visual: Implementa un modo oscuro elegante (bg-slate-950) con detalles en colores vibrantes.`
    },
    {
      id: 'landing',
      title: 'Landing Page de Negocio',
      icon: <Coffee className="w-8 h-8 text-amber-400" />,
      description: 'Página de ventas o presentación para una cafetería, gimnasio, etc.',
      color: 'amber',
      prompt: `Actúa como un desarrollador Frontend Senior experto en React y Next.js. Genera el código para una Landing Page de un negocio (ej. Cafetería de Especialidad) moderna y premium.

Requisitos técnicos:
1. Usa Next.js con Tailwind CSS.
2. Crea una estructura clara en componentes.

Secciones a incluir:
- Navbar: Navegación simple y botón de 'Contáctanos'.
- Hero Section: Imagen de fondo (o gradiente cálido), promesa de valor grande y CTA (Llamado a la acción).
- Servicios/Productos: Grid de 3 columnas mostrando los mejores productos.
- Testimonios: Prueba social.
- Footer: Horarios y ubicación.

Estilo visual: Paleta de colores cálidos y premium. Tipografía moderna como 'Inter' o 'Outfit'. Transiciones suaves en botones.`
    },
    {
      id: 'webapp',
      title: 'Interfaz de Web App',
      icon: <CheckSquare className="w-8 h-8 text-emerald-400" />,
      description: 'Aplicación interactiva como una lista de tareas (To-Do list) con Glassmorphism.',
      color: 'emerald',
      prompt: `Actúa como un desarrollador Frontend y diseñador UI/UX. Genera la interfaz (React + Next.js + Tailwind CSS) de una aplicación de Lista de Tareas (To-Do List) al estilo Glassmorphism.

Requisitos técnicos:
- Estructura limpia usando Flexbox y estado inicial simulado (UI estática funcional).

Estructura:
- Contenedor principal centrado.
- Título atractivo ('Mis Tareas').
- Input text y botón 'Agregar' estilizados.
- Lista de tareas donde cada una tiene un checkbox personalizado y botón de eliminar (icono).

Estilo visual: 
- Fondo general con gradiente vibrante (ej. azul a morado). 
- El contenedor principal debe tener Glassmorphism (bg-white/10, backdrop-blur-md, borde blanco semi-transparente).
- Elementos interactivos con hover effects.`
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedData = projects.find(p => p.id === selectedProject);

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-4 sm:p-6 md:p-10 relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Pill */}
      <div className="flex items-center gap-3 relative z-10 shrink-0 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold tracking-wider uppercase">
          <MousePointer2 className="w-3.5 h-3.5" />
          <span>SELECCIÓN DE PROYECTO</span>
        </div>
      </div>

      <div className="mb-6 shrink-0 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.08] font-display">
          Elige tu <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Proyecto Next.js</span>
        </h1>
        <p className="text-slate-300 mt-2">Selecciona una opción y obtén el Prompt Maestro para generar tu primera web.</p>
      </div>

      {/* Main Interactive Content */}
      <div className="flex-1 flex flex-col md:flex-row h-0 gap-6 relative z-10">
        {/* Left Column: Selection */}
        <div className="w-full md:w-1/3 flex flex-col space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`flex flex-col items-start p-5 rounded-2xl border text-left transition-all group ${
                selectedProject === project.id 
                  ? `bg-slate-800 border-${project.color}-500 shadow-[0_0_20px_rgba(var(--${project.color}-500),0.2)]` 
                  : 'glass-card bg-slate-900/60 border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-3 rounded-xl ${
                  selectedProject === project.id 
                    ? `bg-${project.color}-500/20` 
                    : 'bg-slate-800 group-hover:bg-slate-700'
                } transition-colors`}>
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
            </button>
          ))}
        </div>

        {/* Right Column: Prompt Display */}
        <div className="w-full md:w-2/3 h-full flex flex-col">
          {selectedData ? (
            <div className="bg-slate-900/80 rounded-2xl border border-slate-700 flex flex-col h-full overflow-hidden animate-fade-in shadow-2xl">
              <div className="bg-slate-800/80 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <h3 className="font-bold text-white">Prompt Maestro</h3>
                </div>
                <button
                  onClick={() => handleCopy(selectedData.prompt)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? '¡Copiado!' : 'Copiar Prompt'}
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1 font-mono text-sm text-emerald-400 whitespace-pre-wrap custom-scrollbar leading-relaxed">
                {selectedData.prompt}
              </div>
            </div>
          ) : (
            <div className="bg-slate-800/20 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center h-full text-slate-500 border-dashed p-8 text-center animate-fade-in">
              <MousePointer2 className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-lg font-medium text-slate-400">Selecciona un proyecto a la izquierda</p>
              <p className="text-sm mt-2">Para desbloquear tu Prompt Maestro</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/60 relative z-10 shrink-0">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <span>{selectedProject ? '¡Listo para crear!' : 'Esperando selección...'}</span>
        </span>
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700 hover:border-slate-500"
        >
          <span>Siguiente</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
