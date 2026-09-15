import React, { useState } from 'react';
import { 
  Brain, Sparkles, CheckCircle2, Palette, Target, 
  PenTool, Search, Bot, BookOpen, Crown, Shield, Gauge, 
  Rocket, Eye, Code2
} from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  icon: React.ElementType;
  category: string;
  color: string;
  power: string;
  rules: string[];
  exampleInstruction: string;
}

const SKILLS_LIST: SkillItem[] = [
  {
    id: 'web-design',
    name: 'Web Design',
    icon: Palette,
    category: 'Estética & Visual',
    color: 'from-pink-500 to-rose-600',
    power: 'Inyecta diseño de vanguardia: paletas HSL afinadas, dark mode elegante, glassmorphism y microinteracciones.',
    rules: [
      'Prohibido el diseño básico o colores genéricos (azul puro, rojo puro).',
      'Uso de tipografías modernas (Inter, Plus Jakarta Sans, Outfit).',
      'Micro-animaciones suaves al pasar el cursor (hover states).'
    ],
    exampleInstruction: 'Aplica el Skill "Web Design" para darle un estilo futurista con glassmorphism y acentos en cian a esta sección.'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    icon: Target,
    category: 'Conversión',
    color: 'from-cyan-500 to-blue-600',
    power: 'Estructura la web como una máquina de ventas probada: Hero magnético, Beneficios, Prueba Social y CTA directo.',
    rules: [
      'El botón de llamada a la acción principal debe ser visible en los primeros 3 segundos.',
      'Estructura de embudo: Captar atención -> Generar deseo -> Cerrar en WhatsApp.',
      'Optimización 100% Mobile-First.'
    ],
    exampleInstruction: 'Usa el Skill "Landing Page" para estructurar la página en 5 bloques orientados a conseguir reservas por WhatsApp.'
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    icon: PenTool,
    category: 'Persuasión',
    color: 'from-amber-500 to-orange-600',
    power: 'Redacta textos que tocan dolores reales del cliente y presentan la solución de forma irresistible.',
    rules: [
      'Uso de fórmulas PAS (Problema - Agitación - Solución) y AIDA.',
      'Cero frases corporativas vacías ("somos líderes"). Hablar de beneficios tangibles.',
      'Verbos de acción directos en todos los botones.'
    ],
    exampleInstruction: 'Con el Skill "Copywriting", reescribe el titular principal para que resalte el ahorro de tiempo del cliente.'
  },
  {
    id: 'seo',
    name: 'SEO',
    icon: Search,
    category: 'Buscadores',
    color: 'from-emerald-500 to-teal-600',
    power: 'Optimiza la arquitectura y meta-datos para que Google indexe y posicione la web en primeras páginas.',
    rules: [
      'Un único H1 semántico por página con la palabra clave principal.',
      'Meta description persuasiva y OpenGraph para previsualizaciones en redes.',
      'Imágenes con atributos alt descriptivos.'
    ],
    exampleInstruction: 'Ejecuta el Skill "SEO" para generar todas las etiquetas OpenGraph y meta-tags locales para nuestro negocio.'
  },
  {
    id: 'geo',
    name: 'GEO',
    icon: Bot,
    category: 'Motores IA (Nuevo)',
    color: 'from-purple-500 to-indigo-600',
    power: 'Generative Engine Optimization: prepara la web con Schema.org JSON-LD para que ChatGPT y Perplexity te citen.',
    rules: [
      'Inyección de Schema.org tipo LocalBusiness / Service.',
      'Preguntas y respuestas estructuradas en FAQPage Schema.',
      'Datos semánticos legibles por agentes y motores de búsqueda generativa.'
    ],
    exampleInstruction: 'Aplica el Skill "GEO" e inyecta el esquema JSON-LD para que los buscadores de IA entiendan nuestros servicios.'
  },
  {
    id: 'blog',
    name: 'Blog',
    icon: BookOpen,
    category: 'Autoridad',
    color: 'from-violet-500 to-fuchsia-600',
    power: 'Crea artículos de autoridad y guías paso a paso que educan a la audiencia y atraen tráfico orgánico.',
    rules: [
      'Estructura con tabla de contenidos y resumen ejecutivo.',
      'Llamadas a la acción intermedias hacia el servicio principal.',
      'Formato escaneable con viñetas y destacados.'
    ],
    exampleInstruction: 'Con el Skill "Blog", genera un artículo educativo de 800 palabras resolviendo la duda más común de los clientes.'
  },
  {
    id: 'branding',
    name: 'Branding',
    icon: Crown,
    category: 'Identidad',
    color: 'from-amber-400 to-yellow-600',
    power: 'Mantiene una identidad coherente: voz de marca, tono de comunicación y consistencia visual en cada pixel.',
    rules: [
      'Tono de voz alineado con el cliente ideal (cercano, premium o técnico).',
      'Uso armónico de colores principales, secundarios y de acento.',
      'Consistencia en bordes redondeados, sombras y espaciados.'
    ],
    exampleInstruction: 'Carga el Skill "Branding" para verificar que los colores y el tono de voz respeten la guía de estilo del brief.'
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    icon: Eye,
    category: 'Inclusión & WCAG',
    color: 'from-blue-500 to-cyan-600',
    power: 'Garantiza que cualquier persona pueda navegar tu web, cumpliendo los estándares internacionales WCAG AA.',
    rules: [
      'Ratio de contraste mínimo de 4.5:1 en todos los textos.',
      'Navegabilidad 100% por teclado con estados :focus visibles.',
      'Etiquetas aria-label en botones de iconos y enlaces a WhatsApp.'
    ],
    exampleInstruction: 'Usa el Skill "Accessibility" para auditar contrastes y agregar etiquetas de accesibilidad en todos los botones.'
  },
  {
    id: 'performance',
    name: 'Performance',
    icon: Gauge,
    category: 'Velocidad',
    color: 'from-teal-500 to-emerald-600',
    power: 'Convierte tu web en un cohete de carga ultrarrápida: optimización de assets, CSS limpio y 90+ en Google Lighthouse.',
    rules: [
      'Lazy loading en imágenes y componentes pesados.',
      'Cero dependencias innecesarias que ralenticen la carga.',
      'Tiempo de respuesta inferior a 1 segundo.'
    ],
    exampleInstruction: 'Aplica el Skill "Performance" para optimizar los imports y garantizar que la web cargue en menos de 1 segundo.'
  },
  {
    id: 'audit',
    name: 'Audit',
    icon: Shield,
    category: 'Seguridad & QA',
    color: 'from-slate-500 to-slate-700',
    power: 'Escaneo exhaustivo 360° antes del lanzamiento para detectar cualquier error antes que tus clientes.',
    rules: [
      'Verificación de todos los enlaces y números de WhatsApp.',
      'Prueba de visualización en pantallas de iPhone, Android y Laptop.',
      'Revisión de ortografía y gramática.'
    ],
    exampleInstruction: 'Ejecuta el Skill "Audit" y entrégame un reporte de 10 puntos con posibles errores a corregir antes de publicar.'
  },
  {
    id: 'launch',
    name: 'Launch',
    icon: Rocket,
    category: 'Publicación',
    color: 'from-rose-500 to-red-600',
    power: 'Checklist maestro de publicación en Vercel, repositorio GitHub seguro y conexión de dominio propio con SSL.',
    rules: [
      'Configuración de variables de entorno seguras.',
      'Despliegue automático mediante Git push.',
      'Verificación de certificado SSL (https://) activo.'
    ],
    exampleInstruction: 'Con el Skill "Launch", guíame en los 3 pasos para conectar GitHub a Vercel y tener la web online.'
  }
];

export const Slide2SkillsKit: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('landing-page');
  const selectedSkill = SKILLS_LIST.find((s) => s.id === selectedSkillId) || SKILLS_LIST[0];

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-wide uppercase">
            <Brain className="w-3.5 h-3.5 text-purple-400" />
            Skills Preinstalados
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• 11 Superpoderes</span>
        </div>

        <div className="mt-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            El Kit de <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">11 Skills Maestros</span>
          </h2>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1">
        {/* Left Column: Skills Explorer Grid */}
        <div className="lg:col-span-6 grid grid-cols-3 sm:grid-cols-4 gap-2">
          {SKILLS_LIST.map((skill) => {
            const isSelected = skill.id === selectedSkillId;
            const Icon = skill.icon;

            return (
              <button
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`p-2.5 rounded-2xl border transition-all flex flex-col items-center text-center justify-between gap-1.5 cursor-pointer group ${
                  isSelected
                    ? 'bg-slate-900 border-purple-400 shadow-lg shadow-purple-500/20 ring-2 ring-purple-400/40 -translate-y-0.5'
                    : 'bg-slate-950/60 hover:bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <div className={`text-[11px] font-bold truncate ${isSelected ? 'text-purple-300' : 'text-slate-200'}`}>
                    {skill.name}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 truncate">
                    {skill.category}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Bonus callout tile */}
          <div className="p-2.5 rounded-2xl border border-dashed border-cyan-500/40 bg-cyan-950/20 flex flex-col items-center justify-center text-center">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse mb-1" />
            <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">Modular</span>
            <span className="text-[8px] text-slate-400">Combínalos</span>
          </div>
        </div>

        {/* Right Column: Skill Detail & Agency Rules */}
        <div className="lg:col-span-6 glass-card p-5 sm:p-6 rounded-3xl border border-slate-700/80 bg-slate-950/90 flex flex-col justify-between shadow-2xl relative">
          <div className="space-y-3.5">
            {/* Header of selected skill */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${selectedSkill.color} text-white shadow-lg`}>
                  <selectedSkill.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-wider">
                    {selectedSkill.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-display">
                    Skill: {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30">
                Calidad Agencia
              </span>
            </div>

            {/* Power description */}
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <span className="text-[10px] font-mono text-purple-300 uppercase font-bold flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3 h-3 text-yellow-400" /> Superpoder que inyecta:
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {selectedSkill.power}
              </p>
            </div>

            {/* Rules */}
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Reglas no negociables incluidas en este Skill:
              </span>
              <ul className="mt-1.5 space-y-1.5">
                {selectedSkill.rules.map((rule, idx) => (
                  <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to invoke */}
            <div className="rounded-xl bg-[#090e1c] border border-slate-800 p-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center gap-1">
                <Code2 className="w-3 h-3 text-cyan-400" /> Ejemplo de invocación en prompt:
              </span>
              <p className="text-xs font-mono text-cyan-300 mt-1 bg-black/40 p-2 rounded-lg border border-slate-800">
                "{selectedSkill.exampleInstruction}"
              </p>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-800/60 mt-2">
            <span>💡 Las reglas vienen preprogramadas en el Skill.</span>
            <span className="text-purple-400 font-semibold">Garantía de calidad</span>
          </div>
        </div>
      </div>
    </div>
  );
};
