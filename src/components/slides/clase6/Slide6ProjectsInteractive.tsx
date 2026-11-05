import React, { useState, useEffect } from 'react';
import { 
  Code2, Copy, Check, Sparkles, Download, ArrowRight,
  Palette, Layers, Rocket,
  Briefcase, Coffee, CheckSquare, ShoppingBag, GraduationCap, Utensils
} from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

interface SavedProject {
  id: string;
  student: string;
  idea: string;
  category: string;
}

const PRESET_TEMPLATES = [
  {
    id: 'landing',
    title: 'Landing Page de Negocio',
    icon: Coffee,
    tag: 'Alta Conversión',
    description: 'Para cafeterías, gimnasios, clínicas, barberías o servicios locales.',
    colorGradient: 'from-amber-400 to-orange-500',
    defaultIdea: 'Cafetería de Especialidad con menú interactivo y pedidos por WhatsApp',
    sections: ['Navbar blur', 'Hero con CTA WhatsApp', 'Productos / Servicios', 'Testimonios', 'Ubicación & Horarios', 'Footer']
  },
  {
    id: 'portfolio',
    title: 'Portafolio Personal Dev / Creativo',
    icon: Briefcase,
    tag: 'Marca Personal',
    description: 'Para mostrar proyectos, habilidades, GitHub y captar clientes freelance.',
    colorGradient: 'from-blue-400 to-indigo-500',
    defaultIdea: 'Portafolio Frontend Senior con proyectos interactivos y modo oscuro',
    sections: ['Navbar sticky', 'Hero de presentación', 'Grid de Proyectos con hover', 'Habilidades & Stack', 'Formulario Contacto', 'Footer']
  },
  {
    id: 'ecommerce',
    title: 'Catálogo / E-commerce Moderno',
    icon: ShoppingBag,
    tag: 'Ventas Online',
    description: 'Tienda de ropa, accesorios o productos con carrito y checkout por WhatsApp.',
    colorGradient: 'from-emerald-400 to-teal-500',
    defaultIdea: 'Tienda de ropa Streetwear oversize con catálogo filtrable y carrito',
    sections: ['Navbar con badge carrito', 'Hero Promocional', 'Grid Productos filtrable', 'Modal Detalle Producto', 'Reseñas', 'Footer']
  },
  {
    id: 'webapp',
    title: 'Web App Interactiva / SaaS',
    icon: CheckSquare,
    tag: 'Interactividad',
    description: 'Aplicación con estado dinámico (To-Do, gestor de tareas, calculadora, cotizador).',
    colorGradient: 'from-purple-400 to-pink-500',
    defaultIdea: 'Dashboard interactivo de control de hábitos y metas con Glassmorphism',
    sections: ['Sidebar de navegación', 'Header con métricas', 'Área de trabajo interactiva', 'Filtros y búsqueda', 'Modales de acción', 'Footer']
  },
  {
    id: 'restaurante',
    title: 'Restaurante / Carta Digital',
    icon: Utensils,
    tag: 'Gastronomía',
    description: 'Restaurante gourmet con reservas de mesa, fotos de platos y botón delivery.',
    colorGradient: 'from-rose-400 to-red-500',
    defaultIdea: 'Pizzería Italiana con masa madre, reservas de mesa y pedidos online',
    sections: ['Navbar con botón Reserva', 'Hero con video/foto leña', 'Carta por categorías', 'Prueba social Google Maps', 'Footer']
  },
  {
    id: 'academia',
    title: 'Academia / Cursos Online',
    icon: GraduationCap,
    tag: 'Educación',
    description: 'Página de venta para curso digital, temario colapsable y garantía.',
    colorGradient: 'from-cyan-400 to-blue-500',
    defaultIdea: 'Masterclass de Inteligencia Artificial para programadores y diseñadores',
    sections: ['Navbar con botón Comprar', 'Hero con oferta limitada', 'Temario / Módulos', 'Instructor Bio', 'FAQ Accordion', 'Footer']
  }
];

const THEME_STYLES = [
  { id: 'cyber-dark', name: 'Cyber Dark (bg-slate-950 + Neón)', color: 'bg-slate-900 border-cyan-500/50 text-cyan-300' },
  { id: 'clean-minimal', name: 'Minimal Luxury (Blanco/Gris + Negro Carbón)', color: 'bg-slate-900 border-slate-700 text-slate-200' },
  { id: 'vibrant-emerald', name: 'Vibrant Growth (Esmeralda + Ámbar)', color: 'bg-slate-900 border-emerald-500/50 text-emerald-300' },
  { id: 'warm-sunset', name: 'Sunset Gourmet (Naranja Cálido + Carmesí)', color: 'bg-slate-900 border-orange-500/50 text-orange-300' }
];

export const Slide6ProjectsInteractive: React.FC<SlideProps> = ({ onNext }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('landing');
  const [rouletteProject, setRouletteProject] = useState<SavedProject | null>(null);
  const [customIdea, setCustomIdea] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('cyber-dark');
  const [includeWhatsApp, setIncludeWhatsApp] = useState(true);
  const [includeFaq, setIncludeFaq] = useState(true);
  const [includeTestimonials, setIncludeTestimonials] = useState(true);
  const [includeAnimations, setIncludeAnimations] = useState(true);
  const [copied, setCopied] = useState(false);

  // Check if a project was saved from the Roulette
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ruta_web_roulette_winner');
      if (saved) {
        const parsed = JSON.parse(saved);
        setRouletteProject(parsed);
        setCustomIdea(parsed.idea);
        setAuthorName(parsed.student);
        if (parsed.category) {
          const match = PRESET_TEMPLATES.find(p => p.id === parsed.category);
          if (match) setSelectedTemplate(match.id);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const activeTemplate = PRESET_TEMPLATES.find(t => t.id === selectedTemplate) || PRESET_TEMPLATES[0];
  const effectiveIdea = customIdea.trim() || activeTemplate.defaultIdea;
  const effectiveAuthor = authorName.trim() || 'Estudiante de Ruta Web';

  // Construct Next.js Master Prompt
  const generateNextPrompt = () => {
    return `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: DESARROLLO EN NEXT.JS 15 + TAILWIND CSS

Actúa como un Desarrollador Frontend Senior y Diseñador UI/UX de clase mundial especializado en Next.js (App Router), React 19, TypeScript y Tailwind CSS.

---

### 📌 INFORMACIÓN DEL PROYECTO
- **Idea de la Página Web:** ${effectiveIdea}
- **Tipo de Web:** ${activeTemplate.title} (${activeTemplate.tag})
- **Creador / Alumno:** ${effectiveAuthor}
- **Estilo Visual & Paleta:** ${THEME_STYLES.find(s => s.id === selectedTheme)?.name || 'Cyber Dark Mode'}
- **Stack Técnico:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion / GSAP.

---

### 🎯 OBJETIVO PRINCIPAL
Construir una página web completa, ultra moderna, responsiva (Mobile-First) y visualmente impactante que cause un efecto WOW inmediato en cualquier visitante. Debe estar lista para producción y optimizada para altas conversiones.

---

### 🧱 ARQUITECTURA DE ARCHIVOS Y COMPONENTES RECOMENDADA
Crea una estructura limpia y modular dentro del directorio \`app/\` y \`components/\`:
- \`app/layout.tsx\`: Configuración de tipografía moderna (Inter / Outfit / Plus Jakarta Sans), metadata SEO y OpenGraph.
- \`app/page.tsx\`: Página principal ensamblando cada componente en orden lógico.
- \`components/Navbar.tsx\`: Barra de navegación fija con \`backdrop-blur-md\`, logo llamativo, links de anclaje y botón de llamada a la acción.${includeWhatsApp ? '\n- `components/Hero.tsx`: Sección principal con titular persuasivo, subtítulo con promesa de valor clara, botones CTA principales y enlace directo a WhatsApp.' : '\n- `components/Hero.tsx`: Sección principal con titular persuasivo y botón CTA.'}
- \`components/Features.tsx\`: Grid de características/servicios con tarjetas interactivas, micro-animaciones al hacer hover (scale, glow, border-gradient).${includeTestimonials ? '\n- `components/Testimonials.tsx`: Prueba social con tarjetas de testimonios, avatares, valoraciones de 5 estrellas y métricas clave.' : ''}${includeFaq ? '\n- `components/FAQ.tsx`: Acordeón interactivo de Preguntas Frecuentes con animaciones suaves de apertura/cierre.' : ''}
- \`components/ContactSection.tsx\`: Formulario interactivo estilizado con validación visual y botón con gradiente.
- \`components/Footer.tsx\`: Pie de página profesional con enlaces de navegación, redes sociales, derechos reservados y mención de marca.

---

### 🎨 REGLAS DE DISEÑO VISUAL & UX (NO HAGAS WEBS BÁSICAS)
1. **Paleta de Colores Cuidadosa:** No uses colores planos estándar (ni rojo ni azul genérico). Emplea tonos refinados tipo HSL/Tailwind (\`slate-950\`, \`slate-900\`, gradientes con \`cyan-400\`, \`violet-500\`, \`emerald-400\` o \`amber-400\`).
2. **Glassmorphism & Profundidad:** Utiliza tarjetas con bordes sutiles semi-transparentes (\`border-white/10\`), fondos difuminados (\`backdrop-blur-xl\`) y sombras ambientales.
3. **Micro-interacciones:** Agrega transiciones suaves en todos los botones, tarjetas y links (\`transition-all duration-300 hover:scale-[1.02]\`).${includeAnimations ? '\n4. **Animaciones Fluidas:** Implementa efectos de entrada suaves con Tailwind o Framer Motion para que los elementos aparezcan con elegancia al hacer scroll.' : ''}
5. **100% Responsivo:** La versión móvil debe verse impecable, con menú hamburguesa fluido y textos con tamaños legibles.

---

### ⚡ CÓDIGO ESPERADO
- Entrega el código TypeScript completo y sin omisiones ni placeholders como "...resto del código".
- Componentes reutilizables, tipados con interfaces de TypeScript.
- Código limpio, semántico y listo para copiar en Antigravity IDE y desplegar en Vercel con \`npm run build\`.`;
  };

  const promptText = generateNextPrompt();

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([promptText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Prompt-Maestro-${activeTemplate.id}-${Date.now()}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClearRouletteWinner = () => {
    try {
      localStorage.removeItem('ruta_web_roulette_winner');
      setRouletteProject(null);
      setCustomIdea('');
      setAuthorName('');
    } catch {}
  };

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-3 sm:p-6 md:p-8 relative select-none">
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Pill */}
      <div className="flex items-center justify-between gap-3 relative z-10 shrink-0 mb-4">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>GENERADOR DE PROMPT MAESTRO (NEXT.JS + TAILWIND)</span>
          </div>
          {rouletteProject && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Proyecto desde la Ruleta: <strong>{rouletteProject.student}</strong></span>
            </span>
          )}
        </div>

        {rouletteProject && (
          <button
            onClick={handleClearRouletteWinner}
            className="text-xs text-slate-400 hover:text-slate-200 underline font-mono"
          >
            Restablecer a plantilla libre
          </button>
        )}
      </div>

      {/* Main 2-Column Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 relative z-10 items-stretch">
        
        {/* Left Column: Configuration & Project Presets (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 overflow-y-auto pr-1 custom-scrollbar max-h-[580px]">
          
          {/* Active Idea Input Box */}
          <div className="glass-card bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Idea de la Página Web</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {effectiveAuthor}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={customIdea}
                onChange={(e) => setCustomIdea(e.target.value)}
                placeholder={activeTemplate.defaultIdea}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Nombre del alumno / autor (ej. Carlos Mendoza)"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Preset Template Selector Grid */}
          <div className="glass-card bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2.5 shadow-xl">
            <span className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
              1. Selecciona el Tipo de Web
            </span>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_TEMPLATES.map((tmpl) => {
                const Icon = tmpl.icon;
                const isSelected = selectedTemplate === tmpl.id;
                return (
                  <button
                    key={tmpl.id}
                    onClick={() => {
                      setSelectedTemplate(tmpl.id);
                      if (!customIdea || customIdea === activeTemplate.defaultIdea) {
                        setCustomIdea(tmpl.defaultIdea);
                      }
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-400 shadow-md shadow-blue-500/20'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${tmpl.colorGradient} text-slate-950 shrink-0`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-white truncate">
                        {tmpl.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      {tmpl.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme & Visual Style Selector */}
          <div className="glass-card bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2.5 shadow-xl">
            <span className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>2. Estilo Visual & Modo</span>
            </span>
            <div className="grid grid-cols-2 gap-2">
              {THEME_STYLES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedTheme(st.id)}
                  className={`p-2 rounded-xl border text-left text-xs transition-all ${
                    selectedTheme === st.id
                      ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200 font-semibold'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </div>

          {/* Component Switches */}
          <div className="glass-card bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2 shadow-xl">
            <span className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>3. Bloques Clave a Incluir</span>
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeWhatsApp}
                  onChange={(e) => setIncludeWhatsApp(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0"
                />
                <span className="text-slate-300">CTA WhatsApp</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeTestimonials}
                  onChange={(e) => setIncludeTestimonials(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0"
                />
                <span className="text-slate-300">Prueba Social</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeFaq}
                  onChange={(e) => setIncludeFaq(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0"
                />
                <span className="text-slate-300">FAQ Acordeón</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAnimations}
                  onChange={(e) => setIncludeAnimations(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0"
                />
                <span className="text-slate-300">Micro-animaciones</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Live Master Prompt Display & Copy Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col h-full max-h-[580px] bg-slate-900/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
          
          {/* Header Bar with Action Buttons */}
          <div className="bg-slate-800/90 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-700 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🤖</span>
              <div>
                <h3 className="font-bold text-white text-sm">Prompt Maestro Next.js</h3>
                <span className="text-[11px] text-cyan-400 font-mono">
                  Optimizado para Antigravity IDE & Cursor
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white rounded-lg transition-colors text-xs font-medium"
                title="Descargar como archivo Markdown"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Descargar .md</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-95 text-white rounded-lg transition-all text-xs font-bold shadow-lg shadow-blue-500/25 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Prompt'}</span>
              </button>
            </div>
          </div>

          {/* Prompt Code Display */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs sm:text-[13px] text-emerald-300/95 whitespace-pre-wrap custom-scrollbar leading-relaxed bg-slate-950/70 select-text">
            {promptText}
          </div>

          {/* Bottom Execution Tip */}
          <div className="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Rocket className="w-3.5 h-3.5" />
              <span>Instrucción: Pega este prompt en Antigravity IDE para comenzar.</span>
            </span>
            <span className="text-slate-500 hidden sm:inline">
              Next.js 15 App Router
            </span>
          </div>
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/60 relative z-10 shrink-0">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <span>{effectiveIdea ? `Listo: "${effectiveIdea.slice(0, 40)}..."` : 'Selecciona o escribe una idea'}</span>
        </span>
        {onNext && (
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all border border-slate-700 hover:border-slate-500"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};
