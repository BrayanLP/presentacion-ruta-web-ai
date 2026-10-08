import React, { useState } from 'react';
import { Copy, Check, ChevronRight, Terminal } from 'lucide-react';

const ROULETTE_PROJECTS = [
  {
    id: 'linkinbio',
    title: 'Link-in-Bio',
    icon: '🌳',
    description: 'Tarjeta personal digital con enlaces',
    prompt: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Link-in-Bio Premium

**[CONTEXTO DEL PROYECTO]**
Proyecto: Página personal (Linktree alternativo) para agrupar enlaces de redes sociales.
Problema que resuelve: Dificultad para compartir múltiples enlaces en un solo perfil (ej. Instagram).
Usuario Objetivo: Creadores de contenido, profesionales, freelancers.
Alcance del MVP: Pantalla única responsiva con foto de perfil, biografía y botones de enlaces.

**[STACK TECNOLÓGICO]**
Frontend: Next.js 14 + Tailwind CSS + Framer Motion (Opcional)
Diseño: Glassmorphism, fondo oscuro con degradado sutil en tonos púrpuras.
Base de Datos: Sin base de datos inicial (datos estáticos o JSON local).

**[ARQUITECTURA Y PANTALLAS (UI/UX)]**
1. / : Pantalla principal centrada. Contiene:
   - Avatar circular.
   - Título (Nombre) y Subtítulo (Rol/Bio).
   - 4-5 botones anchos (100% de la tarjeta) con efectos "hover" elegantes.
   - Íconos de Lucide React en cada botón.

**[ESQUEMA DE BASE DE DATOS]**
No aplica para el MVP inicial. (Opcional: usar un archivo data.ts con la lista de enlaces).

**[INSTRUCCIONES PARA EL EQUIPO DE AGENTES]**
🤖 @ProductManager: Define la estructura del JSON estático para los enlaces.
🤖 @SoftwareArchitect: Inicializa el proyecto en Next.js.
🤖 @Developer: Construye la interfaz con Tailwind (efecto glassmorphism) y asegúrate de que sea 100% responsiva.
🤖 @QAAgent: Revisa que todos los botones tengan animaciones hover suaves y funcionen en móviles.`
  },
  {
    id: 'pomodoro',
    title: 'Reloj Pomodoro',
    icon: '🍅',
    description: 'Temporizador de productividad 25/5',
    prompt: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Reloj Pomodoro Zen

**[CONTEXTO DEL PROYECTO]**
Proyecto: Aplicación de productividad basada en la técnica Pomodoro.
Problema que resuelve: Procrastinación y falta de enfoque.
Usuario Objetivo: Estudiantes y trabajadores remotos.
Alcance del MVP: Temporizador de 25 minutos de trabajo y 5 minutos de descanso, con controles básicos.

**[STACK TECNOLÓGICO]**
Frontend: Next.js 14 + Tailwind CSS
Diseño: Minimalista, paleta de colores pastel (cambia de color según el modo trabajo/descanso).
Base de Datos: Sin base de datos (manejo de estado local en React).

**[ARQUITECTURA Y PANTALLAS (UI/UX)]**
1. / : Pantalla única con:
   - Selector de modo: Pomodoro (25m), Short Break (5m).
   - Reloj de cuenta regresiva gigante (MM:SS).
   - Botón principal de acción (Iniciar/Pausar).
   - Botón secundario (Reiniciar).

**[ESQUEMA DE BASE DE DATOS]**
No aplica.

**[INSTRUCCIONES PARA EL EQUIPO DE AGENTES]**
🤖 @ProductManager: Define los estados de la aplicación (Trabajando, Pausado, Descanso).
🤖 @SoftwareArchitect: Inicializa el proyecto y configura los colores pastel en Tailwind.
🤖 @Developer: Implementa la lógica del reloj con setInterval en React, asegurando que el tiempo no se desincronice.
🤖 @QAAgent: Prueba los ciclos completos de cuenta regresiva y el cambio de estados.`
  },
  {
    id: 'gastos',
    title: 'Rastreador Gastos',
    icon: '💰',
    description: 'Control de finanzas personales',
    prompt: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Rastreador de Gastos

**[CONTEXTO DEL PROYECTO]**
Proyecto: Aplicación web para control de finanzas personales (Gastos e Ingresos).
Problema que resuelve: Falta de control sobre el dinero diario.
Usuario Objetivo: Personas jóvenes que quieren ahorrar.
Alcance del MVP: Formulario para registrar movimientos, lista histórica y cálculo del total disponible.

**[STACK TECNOLÓGICO]**
Frontend: Next.js 14 + Tailwind CSS + Iconos Lucide
Diseño: Dark Mode con tarjetas estilo Glassmorphism.
Backend & Base de Datos: Supabase (PostgreSQL)

**[ARQUITECTURA Y PANTALLAS (UI/UX)]**
1. / : Dashboard principal con el Total Disponible en texto grande.
2. Formulario flotante o sección para nuevo registro (Concepto, Monto, Tipo: Ingreso/Gasto).
3. /historial: Lista de todos los movimientos registrados con icono verde (ingreso) o rojo (gasto).

**[ESQUEMA DE BASE DE DATOS]**
Tablas en Supabase: movimientos (id, concepto, monto, tipo, fecha).
(Habilitar Políticas de Seguridad por Fila - RLS).

**[INSTRUCCIONES PARA EL EQUIPO DE AGENTES]**
🤖 @ProductManager: Define el alcance del MVP en base a este prompt.
🤖 @SoftwareArchitect: Inicializa el proyecto en Next.js.
🤖 @SupabaseSpecialist: Conéctate a Supabase, ejecuta el esquema SQL y configura RLS anónimo o por usuario.
🤖 @Developer: Construye la UI y conéctala con las funciones insert/select de Supabase.
🤖 @QAAgent: Revisa que el cálculo matemático del balance total se actualice en tiempo real.`
  },
  {
    id: 'frases',
    title: 'Gen. de Frases',
    icon: '✨',
    description: 'Frases aleatorias con API/Array',
    prompt: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Generador de Frases Inspiradoras

**[CONTEXTO DEL PROYECTO]**
Proyecto: Aplicación web sencilla que muestra una cita aleatoria.
Problema que resuelve: Necesidad de micro-motivación diaria.
Usuario Objetivo: Público general.
Alcance del MVP: Botón que, al hacer clic, cambia la frase y el autor en la pantalla.

**[STACK TECNOLÓGICO]**
Frontend: Next.js 14 + Tailwind CSS
Diseño: Tarjeta flotante en el centro de la pantalla con tipografía elegante. Fondo dinámico o colores aleatorios por frase.
Backend: Arrays en código o Fetch a una API gratuita (ej. Quotable).

**[ARQUITECTURA Y PANTALLAS (UI/UX)]**
1. / : Pantalla única.
   - Tarjeta central.
   - Texto de la frase entre comillas grandes.
   - Nombre del autor.
   - Botón grande "Inspirame" o "Nueva Frase".

**[ESQUEMA DE BASE DE DATOS]**
No aplica.

**[INSTRUCCIONES PARA EL EQUIPO DE AGENTES]**
🤖 @ProductManager: Define la lista de 10 frases iniciales en un array si no se usa API externa.
🤖 @SoftwareArchitect: Inicializa el proyecto.
🤖 @Developer: Construye la lógica del estado (useState) para seleccionar un elemento aleatorio del array cada vez que se hace clic. Añade animaciones de "fade-in" al cambiar el texto.
🤖 @QAAgent: Asegúrate de que el botón no arroje error si se hace clic muy rápido consecutivamente.`
  }
];

export function SlideSoftwareProjectSelector() {
  const [activeProject, setActiveProject] = useState(ROULETTE_PROJECTS[0]);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeProject.prompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-6 sm:p-10 relative z-10 select-none">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 flex items-center gap-3 font-display">
          <Terminal className="w-8 h-8 text-cyan-400" />
          Selector de Prompts Maestros
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base font-mono">
          Selecciona tu proyecto de la ruleta y copia la instrucción exacta para Antigravity IDE.
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
        {/* Sidebar: Projects List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {ROULETTE_PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all shrink-0 ${
                activeProject.id === project.id
                  ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                  : 'bg-slate-950/80 backdrop-blur-sm border-slate-800 hover:bg-slate-900/90 hover:border-slate-700'
              }`}
            >
              <div className="text-3xl drop-shadow-lg">{project.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-bold truncate font-display ${activeProject.id === project.id ? 'text-cyan-400' : 'text-white'}`}>
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 truncate mt-0.5">{project.description}</p>
              </div>
              {activeProject.id === project.id && (
                <ChevronRight className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              )}
            </button>
          ))}
        </div>

        {/* Main Content: Markdown Prompt Editor */}
        <div className="w-full lg:w-2/3 flex flex-col bg-slate-950/90 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden relative shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                isCopied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Prompt</span>
                </>
              )}
            </button>
          </div>
          <div className="flex-1 overflow-auto p-5 sm:p-6 font-mono text-[13px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">
              <code className="block" dangerouslySetInnerHTML={{ __html: formatPrompt(activeProject.prompt) }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple highlighter for the markdown specific to these prompts
function formatPrompt(text: string) {
  return text
    .replace(/### (.*)/g, '<span class="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">### $1</span>')
    .replace(/\\*\\*\\[(.*?)\\]\\*\\*/g, '<br/><span class="text-indigo-400 font-bold">**[$1]**</span>')
    .replace(/🤖 @(.*?):/g, '🤖 <span class="text-emerald-400 font-bold">@$1</span>:');
}

export default SlideSoftwareProjectSelector;
