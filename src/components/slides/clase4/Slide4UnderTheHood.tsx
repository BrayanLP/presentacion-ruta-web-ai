import React, { useState } from 'react';
import { 
  Cpu, Palette, ShieldCheck, Mail, Sparkles, 
  CheckCircle, FileText, ChevronRight, Info, Compass
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  role: string;
  analogy: string;
  whatItDoes: string;
  whyClientLovesIt: string;
  promptToAgent: string;
  icon: React.ElementType;
  badgeColor: string;
  tag: string;
}

const TECH_STACK: TechItem[] = [
  {
    id: 'nextjs',
    name: 'Next.js (App Router)',
    role: 'El Chasis y Motor Central',
    analogy: 'Un motor de Fórmula 1: potente, eficiente y diseñado para ganar carreras de velocidad.',
    whatItDoes: 'Genera las páginas de forma ultrarrápida, optimiza imágenes automáticamente y posiciona en los primeros puestos de Google gracias a su arquitectura moderna.',
    whyClientLovesIt: 'Tu web abre al instante. Si tarda más de 2 segundos, el 53% de los usuarios se marchan.',
    promptToAgent: 'Usa Next.js con App Router y Server Components para máxima velocidad de carga.',
    icon: Cpu,
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    tag: 'Rendimiento & SEO'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'El Sastre de Alta Costura',
    analogy: 'Un armario de piezas modulares que encajan a la perfección sin coser tela desde cero.',
    whatItDoes: 'Permite estilizar cualquier elemento (colores, espaciados, bordes y responsive) con clases utilitarias limpias sin escribir archivos CSS desordenados.',
    whyClientLovesIt: 'Diseño ultra pulido, consistente, con modo oscuro y proporciones perfectas en cualquier pantalla.',
    promptToAgent: 'Aplica Tailwind con paleta de diseño moderna, espaciados consistentes y responsive mobile-first.',
    icon: Palette,
    badgeColor: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    tag: 'Estilo Visual'
  },
  {
    id: 'radix',
    name: 'Radix UI Primitives',
    role: 'La Ingeniería Mecánica Accesible',
    analogy: 'Los frenos ABS y airbags del automóvil: no los ves a simple vista, pero salvan vidas al interactuar.',
    whatItDoes: 'Componentes interactivos (acordeones de FAQs, menús desplegables, ventanas modales) construidos con accesibilidad WCAG y navegación por teclado.',
    whyClientLovesIt: 'Funciona para personas con discapacidades, en lectores de pantalla y nunca se traba al hacer clic.',
    promptToAgent: 'Implementa el acordeón de FAQs y los modales usando componentes sin estilo de Radix UI.',
    icon: ShieldCheck,
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
    tag: 'Accesibilidad'
  },
  {
    id: 'react-hook-form',
    name: 'React Hook Form',
    role: 'El Receptor de Leads Impecable',
    analogy: 'Un recepcionista de hotel 5 estrellas que valida tu pasaporte al instante sin hacerte esperar en la fila.',
    whatItDoes: 'Gestiona el formulario de contacto validando que el email sea real, el teléfono tenga dígitos correctos y no recarga la página al enviar.',
    whyClientLovesIt: 'Envía su consulta en 1 segundo y ve una confirmación visual inmediata con retroalimentación clara.',
    promptToAgent: 'Crea el formulario de contacto con React Hook Form, validación de campos y feedback de éxito.',
    icon: Mail,
    badgeColor: 'border-pink-500/30 bg-pink-500/10 text-pink-400',
    tag: 'Captura de Clientes'
  },
  {
    id: 'gsap-lottie',
    name: 'GSAP + Lottie Animations',
    role: 'El Magnetismo Visual',
    analogy: 'La iluminación ambiental y música suave de un restaurante de lujo que cautiva tus sentidos.',
    whatItDoes: 'GSAP crea transiciones suaves al deslizar la página (fade-in, scroll suave). Lottie inserta animaciones vectoriales ligeras sin peso de vídeo.',
    whyClientLovesIt: 'Hace que tu negocio se perciba como una marca de alta gama, moderna y confiable.',
    promptToAgent: 'Agrega microinteracciones con GSAP al hacer scroll y un icono animado Lottie en el Hero.',
    icon: Sparkles,
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    tag: 'Micro-Animaciones'
  },
  {
    id: 'font-awesome',
    name: 'Font Awesome / Lucide Icons',
    role: 'La Iconografía Universal',
    analogy: 'La señalética de un aeropuerto internacional: cualquier persona del mundo entiende el símbolo sin leer.',
    whatItDoes: 'Iconos vectoriales nítidos para WhatsApp, checkmarks de beneficios, estrellas de testimonios y flechas de acción.',
    whyClientLovesIt: 'Guía la vista del cliente rápidamente hacia lo que realmente importa sin saturar de texto.',
    promptToAgent: 'Usa iconos profesionales y consistentes para representar cada servicio y beneficio clave.',
    icon: Compass,
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    tag: 'Señalética'
  },
  {
    id: 'clean-code-tests',
    name: 'Clean Code & Unit Tests',
    role: 'El Control de Calidad y Blindaje',
    analogy: 'La inspección técnica vehicular previa a salir a la autopista: asegura que ningún tornillo esté flojo.',
    whatItDoes: 'Código modular bien organizado y pruebas automáticas que simulan clics en el botón de WhatsApp y formularios.',
    whyClientLovesIt: 'Tu web nunca se rompe en fin de semana ni pierdes clientes por un botón que no funciona.',
    promptToAgent: 'Escribe código modular siguiendo Clean Code y agrega pruebas unitarias para el formulario y navegación.',
    icon: CheckCircle,
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    tag: 'Cero Errores'
  },
  {
    id: 'code-docs',
    name: 'Documentación de Código',
    role: 'El Manual del Propietario',
    analogy: 'El manual de usuario y libro de garantías de un equipo prémium para que cualquiera sepa cómo operarlo.',
    whatItDoes: 'Documento `README.md` y comentarios precisos que explican cómo cambiar un teléfono, un texto o un color en 1 minuto.',
    whyClientLovesIt: 'Nunca eres esclavo de una agencia o un programador externo: tienes el control total.',
    promptToAgent: 'Genera un README claro con la guía para actualizar textos, números de WhatsApp y enlaces.',
    icon: FileText,
    badgeColor: 'border-teal-500/30 bg-teal-500/10 text-teal-400',
    tag: 'Autonomía Total'
  }
];

export const Slide4UnderTheHood: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_STACK[0]);

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-6 sm:p-10 relative overflow-y-auto overflow-x-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" /> El Motor Oculto
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Bajo el Capó: El Stack Explicado para Directores
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <Info className="w-4 h-4 text-amber-400" />
          <span>No memorices código; aprende a dirigirlo</span>
        </div>
      </div>

      {/* Main Grid: Left Tech List, Right Deep Dive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left Tech Grid (8 items) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
          {TECH_STACK.map((tech) => {
            const isSelected = selectedTech.id === tech.id;
            const Icon = tech.icon;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 relative group ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/80 ring-1 ring-amber-500/30 shadow-lg shadow-black/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${tech.badgeColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {tech.tag}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {tech.role}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute right-2 bottom-2 text-amber-400">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Detail Card for Selected Tech */}
        <div className="lg:col-span-6 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between relative">
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${selectedTech.badgeColor}`}>
                  <selectedTech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {selectedTech.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-400">{selectedTech.role}</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {selectedTech.tag}
              </span>
            </div>

            {/* Analogy Box */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                💡 Analogía del Mundo Real
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic">
                "{selectedTech.analogy}"
              </p>
            </div>

            {/* What it does & Why client loves it */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div>
                <strong className="text-white">¿Qué hace técnicamente?</strong>
                <p className="text-slate-400 text-xs mt-0.5">{selectedTech.whatItDoes}</p>
              </div>

              <div>
                <strong className="text-white">¿Por qué lo agradece tu cliente?</strong>
                <p className="text-slate-400 text-xs mt-0.5">{selectedTech.whyClientLovesIt}</p>
              </div>
            </div>
          </div>

          {/* CEO Prompt to Agent */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
              <span>👑 Cómo se lo ordenas a tu Agente en Antigravity:</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto select-all">
              "{selectedTech.promptToAgent}"
            </div>
          </div>
        </div>
      </div>

      {/* Footer Insight */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>⚡ Este stack profesional convierte tu web en un activo de alta tecnología.</span>
        <span className="hidden sm:inline text-amber-400">Toca cada tarjeta para ver la analogía</span>
      </div>
    </div>
  );
};
