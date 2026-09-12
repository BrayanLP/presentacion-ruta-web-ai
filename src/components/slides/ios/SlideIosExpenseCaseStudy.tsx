import React, { useState } from 'react';
import { 
  Smartphone, CheckCircle2, 
  Home, Lock, UserPlus, LayoutDashboard, PlusCircle,
  History, Tag, BarChart3, User, ChevronRight, Layers
} from 'lucide-react';

interface ScreenDetail {
  id: string;
  number: string;
  name: string;
  icon: any;
  category: 'auth' | 'main' | 'action' | 'analytics';
  purpose: string;
  components: string[];
  supabaseTable: string;
  mockupContent: {
    headerTitle: string;
    highlights: string[];
    badge: string;
  };
}

const SCREENS_DATA: ScreenDetail[] = [
  {
    id: 'inicio',
    number: '01',
    name: 'Inicio / Onboarding',
    icon: Home,
    category: 'auth',
    purpose: 'Pantalla de bienvenida, carrusel con la propuesta de valor y botones directos de registro o login.',
    components: ['Carrusel de ilustraciones', 'Título impactante', 'Botón "Comenzar gratis"', 'Botón "Ya tengo cuenta"'],
    supabaseTable: 'Ninguna (Estado local en AsyncStorage)',
    mockupContent: {
      headerTitle: 'Fintrack iOS',
      badge: 'Bienvenida',
      highlights: ['Toma el control de tu dinero', 'Registra gastos en 3 segundos', 'Gráficos claros y en tiempo real']
    }
  },
  {
    id: 'login',
    number: '02',
    name: 'Iniciar Sesión',
    icon: Lock,
    category: 'auth',
    purpose: 'Autenticación rápida y segura para usuarios existentes con email/contraseña o Apple Sign In en 1 toque.',
    components: ['Input Email con validación', 'Input Contraseña con show/hide', 'Botón Apple Sign In', 'Recuperar contraseña'],
    supabaseTable: 'supabase.auth.signInWithPassword()',
    mockupContent: {
      headerTitle: 'Bienvenido de vuelta',
      badge: 'Seguridad',
      highlights: ['Apple ID integrado', 'Face ID / Touch ID biométrico', 'Sesión persistente y segura']
    }
  },
  {
    id: 'registro',
    number: '03',
    name: 'Registro',
    icon: UserPlus,
    category: 'auth',
    purpose: 'Creación de nueva cuenta, captura de nombre, email, contraseña y configuración de la moneda principal.',
    components: ['Nombre completo', 'Email y Password', 'Selector de moneda (USD, PEN, EUR, MXN)', 'Términos y condiciones'],
    supabaseTable: 'supabase.auth.signUp() + tabla profiles',
    mockupContent: {
      headerTitle: 'Crea tu Cuenta',
      badge: 'Onboarding',
      highlights: ['Crea tu perfil en segundos', 'Elige tu divisa principal', 'Inicializa categorías predeterminadas']
    }
  },
  {
    id: 'dashboard',
    number: '04',
    name: 'Dashboard Principal',
    icon: LayoutDashboard,
    category: 'main',
    purpose: 'El corazón de la app: balance mensual, ingresos vs gastos del mes, gráfico rápido y acceso al botón (+).',
    components: ['Tarjeta de Balance Total', 'Resumen Ingresos vs Gastos', 'Lista de últimos 5 movimientos', 'Botón flotante rápido (+)'],
    supabaseTable: 'SELECT SUM(amount) FROM transactions',
    mockupContent: {
      headerTitle: 'Balance: $2,450.00',
      badge: 'Vista Central',
      highlights: ['Ingresos: +$3,800.00', 'Gastos: -$1,350.00', '3 movimientos hoy']
    }
  },
  {
    id: 'registrar-gasto',
    number: '05',
    name: 'Registrar Gasto',
    icon: PlusCircle,
    category: 'action',
    purpose: 'Teclado numérico gigante para ingresar el importe en menos de 3 segundos, elegir categoría y guardar con 1 tap.',
    components: ['Teclado numérico táctil (Haptics)', 'Selector horizontal de categoría', 'Selector de fecha y notas opcionales', 'Botón grande "Guardar Gasto"'],
    supabaseTable: 'INSERT INTO transactions (amount, category_id, ...)',
    mockupContent: {
      headerTitle: '$ 18.50',
      badge: 'Acción Rápida',
      highlights: ['Categoría: 🍔 Comida', 'Nota: Almuerzo de trabajo', 'Guardado instantáneo']
    }
  },
  {
    id: 'historial',
    number: '06',
    name: 'Historial',
    icon: History,
    category: 'main',
    purpose: 'Lista cronológica de todas las transacciones ordenadas por día con buscador y filtros por mes o categoría.',
    components: ['Barra de búsqueda en tiempo real', 'Filtro por mes y categoría', 'Items de transacción con icono de color', 'Swipe to delete (Eliminar al deslizar)'],
    supabaseTable: 'SELECT * FROM transactions ORDER BY date DESC',
    mockupContent: {
      headerTitle: 'Movimientos de Septiembre',
      badge: 'Historial',
      highlights: ['Hoy: 2 transacciones (-$32.00)', 'Ayer: 1 transacción (-$12.50)', 'Búsqueda por texto']
    }
  },
  {
    id: 'categorias',
    number: '07',
    name: 'Categorías',
    icon: Tag,
    category: 'action',
    purpose: 'Catálogo editable de categorías con iconos y colores para clasificar los gastos del usuario.',
    components: ['Grid de categorías (Comida, Transporte, Vivienda, Ocio)', 'Botón "+ Nueva Categoría"', 'Selector de color e icono emoji', 'Límite de presupuesto por categoría'],
    supabaseTable: 'SELECT * FROM categories WHERE user_id = auth.uid()',
    mockupContent: {
      headerTitle: 'Mis Categorías (8)',
      badge: 'Clasificación',
      highlights: ['🍔 Comida (#FF6B6B)', '🚕 Transporte (#4D96FF)', '🏠 Vivienda (#6BCB77)']
    }
  },
  {
    id: 'estadisticas',
    number: '08',
    name: 'Estadísticas',
    icon: BarChart3,
    category: 'analytics',
    purpose: 'Análisis visual del comportamiento financiero con gráficos de dona (pie chart) y barras comparativas mensuales.',
    components: ['Gráfico de pastel interactivo', 'Top 3 categorías con mayor gasto', 'Comparativa mes anterior vs actual', 'Consejos de ahorro con IA'],
    supabaseTable: 'Consultas agregadas GROUP BY category_id',
    mockupContent: {
      headerTitle: 'Análisis Mensual',
      badge: 'Gráficos',
      highlights: ['42% Comida ($567.00)', '28% Transporte ($378.00)', '30% Otros ($405.00)']
    }
  },
  {
    id: 'perfil',
    number: '09',
    name: 'Perfil & Ajustes',
    icon: User,
    category: 'main',
    purpose: 'Gestión de la cuenta del usuario, cambio de moneda principal, activación de Face ID, exportar CSV y cerrar sesión.',
    components: ['Foto de avatar y nombre', 'Selector de moneda y tema oscuro', 'Switch de Face ID', 'Botón "Exportar Datos CSV"', 'Cerrar Sesión'],
    supabaseTable: 'UPDATE profiles SET currency = ...',
    mockupContent: {
      headerTitle: 'Brayan LP',
      badge: 'Configuración',
      highlights: ['Moneda: USD ($)', 'Seguridad: Face ID Activado', 'Exportar reporte mensual']
    }
  }
];

export const SlideIosExpenseCaseStudy: React.FC = () => {
  const [selectedScreenId, setSelectedScreenId] = useState<string>('dashboard');

  const selectedScreen = SCREENS_DATA.find((s) => s.id === selectedScreenId) || SCREENS_DATA[3];

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 relative z-10 overflow-y-auto justify-between select-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>💡 CASO DE ESTUDIO — CLASE 1</span>
          </span>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
            9 PANTALLAS DEL MVP
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
          Ejemplo: App para Administrar Gastos Personales
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-3xl">
          Observa cómo desglosamos una idea general en 9 vistas claras y específicas listas para programar con Expo Router y Supabase.
        </p>
      </div>

      {/* Main Interactive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-2 items-center">
        {/* Left Column: 9 Screen Selector List */}
        <div className="lg:col-span-5 space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
          {SCREENS_DATA.map((screen) => {
            const isSelected = screen.id === selectedScreenId;
            const Icon = screen.icon;
            return (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenId(screen.id)}
                className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {screen.number}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate font-display">
                      {screen.name}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {screen.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`} />
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Screen Detail & Mockup Card */}
        <div className="lg:col-span-7">
          <div className="glass-card p-5 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-cyan-950/20 shadow-2xl flex flex-col justify-between space-y-4">
            {/* Screen Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    {selectedScreen.number}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedScreen.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {selectedScreen.purpose}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-500/30 shrink-0">
                {selectedScreen.mockupContent.badge}
              </span>
            </div>

            {/* Simulated iPhone Screen Mockup Banner */}
            <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedScreen.mockupContent.headerTitle}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Expo Router Vista</span>
              </div>

              <div className="space-y-1.5 pt-1">
                {selectedScreen.mockupContent.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specification: Components & Supabase Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Components */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  <span>Componentes UI (React Native)</span>
                </div>
                <ul className="space-y-1">
                  {selectedScreen.components.map((comp, idx) => (
                    <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supabase Connection */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold mb-1.5">
                  🗄️ Conexión Supabase DB
                </div>
                <div className="text-[11px] font-mono text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800 leading-snug">
                  <code>{selectedScreen.supabaseTable}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Haz clic en cada una de las 9 pantallas para explorar su estructura</span>
        <span>Resultado: Blueprint completo para Antigravity IDE</span>
      </div>
    </div>
  );
};
