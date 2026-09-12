import type { Presentation, SlideData } from '../../types';

export const CLASE_0_MOBILE_SLIDES: SlideData[] = [
  {
    id: 'mobile0-s1',
    sectionId: 'clase-0-mobile',
    slideNumber: 1,
    totalInClass: 7,
    category: '🧰 CLASE 0 — PREPARACIÓN',
    title: 'Prepara Todo Antes de Empezar a Crear Apps iOS & Android',
    subtitle: 'El ecosistema completo para diseñar, programar y probar en tu celular (iPhone o Android) con IA sin fricciones',
    durationMinutes: 5,
    layout: 'hero',
    badge: 'RUTA APPS IOS & ANDROID CON IA',
    heroCta: {
      text: 'Comenzar Preparación Móvil'
    },
    stats: [
      { value: '0', label: 'Líneas de código previo', subtext: 'Cero programación' },
      { value: '2 en 1', label: 'iOS & Android', subtext: 'Un solo código fuente' },
      { value: 'Expo', label: 'Framework universal', subtext: 'React Native + Expo Go' },
      { value: '100%', label: 'Enfoque en tu Producto', subtext: 'De tu idea a las tiendas' }
    ],
    speakerNotes: {
      goal: 'Dar la bienvenida a la Ruta de Apps iOS & Android con IA y transmitir confianza: con Expo creamos para ambas plataformas simultáneamente sin duplicar trabajo.',
      talkingPoints: [
        'Crear una app para iPhone y Android ya no requiere aprender dos lenguajes distintos (Swift y Kotlin).',
        'Hoy combinamos Antigravity IDE (Agentes IA) + Expo (React Native) + Supabase (PostgreSQL en la nube).',
        'Antes de tocar una sola línea de código, la clave absoluta es la preparación del entorno y la claridad del producto.'
      ],
      questionsToAsk: [
        '¿Quiénes aquí tienen un iPhone y quiénes tienen un Android para probar hoy?',
        '¿Qué tipo de aplicación móvil siempre han soñado con tener en su celular?'
      ],
      liveActivity: 'Pedir que levanten la mano quienes ya tengan descargada la app Expo Go en su smartphone (iPhone o Android).'
    }
  },
  {
    id: 'mobile0-s2',
    sectionId: 'clase-0-mobile',
    slideNumber: 2,
    totalInClass: 7,
    category: '💻 HARDWARE & CONEXIÓN',
    title: 'Tu Estación de Creación de Apps Móviles',
    subtitle: 'El equipo físico indispensable antes de iniciar la primera sesión de desarrollo',
    durationMinutes: 6,
    layout: 'grid',
    cards: [
      {
        title: '💻 Laptop (Mac, Windows o Linux)',
        desc: 'Tu estación principal donde ejecutarás Antigravity IDE, gestionarás tus prompts de arquitectura y levantarás el servidor local de Expo.',
        badge: 'Equipo Principal',
        list: [
          'Cualquier sistema operativo (Expo compila en la nube)',
          'Espacio en disco para el entorno de trabajo',
          'Navegador moderno para Supabase y GitHub'
        ]
      },
      {
        title: '🌐 Conexión a Internet Estable',
        desc: 'Imprescindible para sincronizar tu celular con la laptop en la misma red Wi-Fi y consultar los modelos de IA de alta velocidad.',
        badge: 'Conectividad',
        list: [
          'Wi-Fi en la misma red para escanear el QR de Expo Go',
          'Acceso fluido a Supabase y APIs de Google AI',
          'Baja latencia para recargas instantáneas (Fast Refresh)'
        ]
      },
      {
        title: '📱 Smartphone Físico (iPhone o Android)',
        desc: 'El dispositivo real donde tocarás, probarás y sentirás la experiencia de usuario: animaciones, cámara, botones y fluidez táctil.',
        badge: 'Dispositivo Real',
        list: [
          'Cualquier iPhone con iOS o celular Android moderno',
          'Cámara lista para escanear el código QR de Expo',
          'Espacio para la aplicación gratuita Expo Go'
        ]
      }
    ],
    speakerNotes: {
      goal: 'Comprobar que todos los alumnos tengan laptop, internet y su celular a la mano.',
      talkingPoints: [
        'Gracias a Expo no necesitas una Mac cara: puedes desarrollar en Windows o Linux y probar en iPhone o Android.',
        'Probar en un celular físico es fundamental: los simuladores no te dan la sensación real del tacto y la ergonomía del usuario.'
      ]
    }
  },
  {
    id: 'mobile0-s3',
    sectionId: 'clase-0-mobile',
    slideNumber: 3,
    totalInClass: 7,
    category: '🤖 INTELIGENCIA ARTIFICIAL & IDE',
    title: 'El Núcleo de IA: Antigravity IDE, Google AI Pro & GitHub',
    subtitle: 'El equipo de desarrollo autónomo que programará las pantallas y la lógica por ti',
    durationMinutes: 8,
    layout: 'grid',
    cards: [
      {
        title: '🤖 Antigravity IDE',
        desc: 'El entorno de desarrollo agentic donde los agentes leen tu proyecto React Native, generan pantallas de Expo Router e instalan paquetes.',
        badge: 'Editor Agentic',
        list: [
          'Descargar e instalar en tu laptop',
          'Terminal y servidor de desarrollo integrados',
          'Control total de archivos del proyecto'
        ]
      },
      {
        title: '✨ Google AI Pro Activo',
        desc: 'El cerebro multimodal de última generación que comprende diseño UI, arquitecturas de software y código TypeScript para móviles.',
        badge: 'Motor de Razonamiento',
        list: [
          'Ventana de contexto amplia para leer todo el proyecto',
          'Generación precisa de interfaces React Native multiplataforma',
          'Capacidad para resolver bugs y dependencias'
        ]
      },
      {
        title: '🐙 Cuenta GitHub',
        desc: 'El repositorio en la nube que protege tu código fuente, guarda tus versiones y permite colaborar o desplegar builds en la nube.',
        badge: 'Repositorio',
        list: [
          'Cuenta gratuita en github.com',
          'Historial seguro de todas tus versiones',
          'Integración nativa con Expo EAS Build'
        ]
      }
    ],
    speakerNotes: {
      goal: 'Verificar la configuración de Antigravity IDE, Google AI Pro y GitHub.',
      talkingPoints: [
        'Antigravity IDE no es un simple editor de texto: tiene agentes capaces de crear componentes, configurar navegación y testear.',
        'Google AI Pro proporciona el razonamiento técnico para escribir código React Native limpio y moderno.'
      ]
    }
  },
  {
    id: 'mobile0-s4',
    sectionId: 'clase-0-mobile',
    slideNumber: 4,
    totalInClass: 7,
    category: '⚡ STACK MÓVIL & BACKEND',
    title: 'Ecosistema Móvil: Expo, Supabase & Cuentas de Publicación',
    subtitle: 'Las plataformas que permiten compilar, almacenar datos y publicar tu aplicación en iOS & Android',
    durationMinutes: 10,
    layout: 'grid',
    cards: [
      {
        title: '⚡ Cuenta Expo (expo.dev)',
        desc: 'La plataforma estándar en la industria para crear apps universales con React Native para iOS y Android desde una sola base de código.',
        badge: 'Framework Multiplataforma',
        list: [
          'Crear cuenta gratuita en expo.dev',
          'Expo Router para navegación nativa en iOS y Android',
          'EAS Build para compilar APK / AAB (Android) e IPA (iOS) en la nube'
        ]
      },
      {
        title: '📲 Expo Go en tu Celular (iOS / Android)',
        desc: 'La app móvil oficial disponible en el App Store y Google Play Store que te permite escanear el QR y ver tu app corriendo al instante.',
        badge: 'App de Pruebas',
        list: [
          'Descarga gratuita desde App Store o Google Play',
          'Actualización en vivo al guardar cambios (Hot Reload)',
          'Cero cables ni configuraciones complejas'
        ]
      },
      {
        title: '🗄️ Cuenta Supabase (PostgreSQL)',
        desc: 'El backend completo de tu app: base de datos relacional, login de usuarios (Email/Google/Apple), fotos y notificaciones.',
        badge: 'Backend en la Nube',
        list: [
          'Cuenta gratuita en supabase.com',
          'Base de datos PostgreSQL en tiempo real',
          'Row Level Security (RLS) para máxima seguridad'
        ]
      },
      {
        title: '🍎 / 🤖 Cuentas de Desarrollador (Fase Futura)',
        desc: 'Cuentas oficiales de Apple Developer ($99/año) y Google Play Console ($25 pago único) requeridas cuando vayas a publicar comercialmente.',
        badge: 'Publicación en Tiendas',
        list: [
          'Opcionales para la fase de prototipo y aprendizaje',
          'Obligatorias para publicar en App Store y Google Play',
          'Acceso a TestFlight (iOS) y Google Play Beta (Android)'
        ]
      }
    ],
    speakerNotes: {
      goal: 'Aclarar el rol de Expo, Expo Go, Supabase y desmitificar las cuentas de publicación en tiendas.',
      talkingPoints: [
        'Expo Go es la magia: abres la cámara de tu iPhone o la app Expo Go en Android, apuntas al QR de la laptop y tu app aparece corriendo nativamente.',
        'Supabase es el corazón: guarda los usuarios, gastos, pedidos o fotos.',
        'Las cuentas de tiendas (Apple $99/año y Google Play $25 único) solo se necesitan cuando vayas a publicar comercialmente.'
      ]
    }
  },
  {
    id: 'mobile0-s5',
    sectionId: 'clase-0-mobile',
    slideNumber: 5,
    totalInClass: 7,
    category: '🚨 EL REQUISITO FUNDAMENTAL',
    title: 'Trae tu Propia Idea de Aplicación: Las 5 Preguntas Clave',
    subtitle: 'No necesitas saber cómo programarla. Solo necesitas tener absoluta claridad de tu producto.',
    durationMinutes: 12,
    layout: 'custom',
    customComponentKey: 'ios-idea-interactive',
    speakerNotes: {
      goal: 'Enfatizar que cada alumno debe tener clara su idea de aplicación respondiendo las 5 preguntas fundamentales.',
      talkingPoints: [
        '1. ¿Qué aplicación quiero crear? (Nombre/Concepto)',
        '2. ¿Qué problema resuelve? (El dolor real)',
        '3. ¿Quién la utilizará? (El usuario objetivo)',
        '4. ¿Qué podrá hacer? (Las funcionalidades clave)',
        '5. ¿Qué aplicaciones similares existen? (Referencias de mercado)',
        'La IA se encarga de la sintaxis y el código; el alumno se encarga de la visión del producto.'
      ],
      liveActivity: 'Invitar a 2 alumnos a compartir su idea respondiendo estas 5 preguntas.'
    }
  },
  {
    id: 'mobile0-s6',
    sectionId: 'clase-0-mobile',
    slideNumber: 6,
    totalInClass: 7,
    category: '💎 FILOSOFÍA DE CREACIÓN',
    title: 'La Regla de Oro del Creador Móvil',
    subtitle: 'Por qué los proyectos exitosos nacen del problema y no del código',
    durationMinutes: 5,
    layout: 'quote',
    quote: {
      text: 'No empezaría enseñándoles código. Empezaría por su producto.',
      author: 'Metodología de Desarrollo Móvil con IA, Expo & Supabase',
      role: 'Principios Fundamentales para Creadores de Software'
    },
    speakerNotes: {
      goal: 'Fijar la mentalidad correcta: el valor está en solucionar un problema real para un usuario real.',
      talkingPoints: [
        'Los programadores tradicionales solían pasar meses configurando entornos antes de validar si alguien quería su app.',
        'Con IA, validamos el producto primero y generamos la app para iOS y Android en tiempo récord.'
      ]
    }
  },
  {
    id: 'mobile0-s7',
    sectionId: 'clase-0-mobile',
    slideNumber: 7,
    totalInClass: 7,
    category: '🎯 AUDITORÍA EN VIVO',
    title: 'Checklist Maestro de Clase 0 — Apps iOS & Android',
    subtitle: 'Audita los elementos indispensables antes de dar el salto a la Clase 1: De la Idea al App Blueprint',
    durationMinutes: 10,
    layout: 'custom',
    customComponentKey: 'ios-checklist',
    speakerNotes: {
      goal: 'Revisar en vivo que todos los alumnos tengan sus casillas marcadas y su idea definida.',
      talkingPoints: [
        'Repasemos juntos: Laptop, Internet, Antigravity, Google AI Pro, GitHub, Expo, Expo Go en smartphone (iOS/Android), Supabase, Cuentas de tiendas e Idea clara.',
        'Al completar el 100%, estamos listos para construir el APP BLUEPRINT en la Clase 1.'
      ],
      liveActivity: 'Marcar las casillas en vivo y lanzar confetti al alcanzar el 100% de preparación.'
    }
  }
];

export const CLASE_1_MOBILE_SLIDES: SlideData[] = [
  {
    id: 'mobile1-s1',
    sectionId: 'clase-1-mobile',
    slideNumber: 1,
    totalInClass: 6,
    category: '🧠 CLASE 1 — DE LA IDEA A LA APP',
    title: 'De una Idea a una Aplicación Concreta',
    subtitle: 'Aquí enseñamos a convertir una idea en un proyecto ejecutable: El plano maestro de tu aplicación móvil (iOS & Android)',
    durationMinutes: 5,
    layout: 'hero',
    badge: 'CLASE 1: APP BLUEPRINT',
    heroCta: {
      text: 'Construir mi App Blueprint'
    },
    stats: [
      { value: '9', label: 'Pilares definidos', subtext: 'De idea a arquitectura' },
      { value: '1', label: 'Caso de estudio real', subtext: 'App de Gastos Personales' },
      { value: '100%', label: 'Claridad de Pantallas', subtext: 'Expo Router + Supabase' },
      { value: '📄', label: 'APP BLUEPRINT', subtext: 'Entregable final' }
    ],
    speakerNotes: {
      goal: 'Presentar el objetivo de la Clase 1: estructurar la idea en un documento técnico y visual que la IA pueda programar.',
      talkingPoints: [
        'Tener una idea en la cabeza no es suficiente: hay que aterrizarla en un App Blueprint.',
        'Hoy cada alumno define los 9 pilares de su aplicación.',
        'Veremos un ejemplo completo con la App de Control de Gastos Personales.'
      ]
    }
  },
  {
    id: 'mobile1-s2',
    sectionId: 'clase-1-mobile',
    slideNumber: 2,
    totalInClass: 6,
    category: '📐 METODOLOGÍA ESTRUCTURADA',
    title: 'Los 9 Pilares que Todo Creador Define',
    subtitle: 'El mapa de ruta para transformar una intuición en una especificación lista para construir',
    durationMinutes: 10,
    layout: 'grid',
    cards: [
      {
        title: '1. 🏷️ Nombre de la app',
        desc: 'Identidad, cómo se llamará en la pantalla de inicio del celular y qué emoción transmite.',
        badge: 'Branding',
        list: ['Corto y memorable', 'Fácil de buscar y pronunciar en App Store y Google Play']
      },
      {
        title: '2. 🎯 Problema',
        desc: 'El dolor específico y frustración que la app elimina en la vida del usuario.',
        badge: 'Dolor Real',
        list: ['¿Qué le cuesta tiempo o dinero hoy?', '¿Por qué las soluciones actuales fallan?']
      },
      {
        title: '3. 👥 Usuario',
        desc: 'Quién tiene este dolor y cómo es su contexto diario al usar el celular.',
        badge: 'Audiencia',
        list: ['Edad, hábitos y necesidades', 'Momento del día en que usa la app']
      },
      {
        title: '4. 💎 Propuesta de valor',
        desc: 'La razón número uno por la que el usuario preferirá tu app frente a cualquier alternativa.',
        badge: 'Diferencial',
        list: ['Beneficio claro en 1 frase', 'Promesa central del producto']
      },
      {
        title: '5. ⚙️ Funciones principales',
        desc: 'Las capacidades esenciales del sistema que hacen realidad la promesa de valor.',
        badge: 'Features',
        list: ['Acciones principales del usuario', 'Automatizaciones inteligentes con IA']
      },
      {
        title: '6. 📱 Pantallas necesarias',
        desc: 'El catálogo visual de vistas que el usuario navegará en su celular con Expo Router.',
        badge: 'Mapa de Vistas',
        list: ['Onboarding, Auth, Tabs principales', 'Modales de creación y detalle']
      },
      {
        title: '7. 🔄 Flujo de usuario',
        desc: 'El recorrido paso a paso desde que abre la app hasta que cumple su meta con éxito.',
        badge: 'User Journey',
        list: ['Paso 1: Abrir -> Paso 2: Acción -> Paso 3: Resultado', 'Mínima fricción y menos taps']
      },
      {
        title: '8. 🚀 Qué tendrá el MVP',
        desc: 'Lo estrictamente indispensable para lanzar la primera versión y probarla en tu celular.',
        badge: 'Versión 1',
        list: ['Núcleo funcional que aporta valor', 'Lanzamiento rápido para validar']
      },
      {
        title: '9. ⏳ Qué dejaremos para después',
        desc: 'Funcionalidades avanzadas que se construirán en la Versión 2 tras recibir feedback.',
        badge: 'Versión 2',
        list: ['Evita el perfeccionismo paralizante', 'Hoja de ruta post-lanzamiento']
      }
    ],
    speakerNotes: {
      goal: 'Explicar los 9 pilares que componen el App Blueprint.',
      talkingPoints: [
        'Cada uno de estos 9 puntos le da contexto a los agentes de IA en Antigravity IDE.',
        'Cuanto más claro sea este plano, más limpio y perfecto será el código que genere la IA para iOS y Android.'
      ]
    }
  },
  {
    id: 'mobile1-s3',
    sectionId: 'clase-1-mobile',
    slideNumber: 3,
    totalInClass: 6,
    category: '💡 CASO DE ESTUDIO PRÁCTICO',
    title: 'Caso Real: App para Administrar Gastos Personales',
    subtitle: 'Cómo desglosamos una idea paso a paso en sus 9 pantallas móviles esenciales',
    durationMinutes: 12,
    layout: 'custom',
    customComponentKey: 'ios-expense-case-study',
    speakerNotes: {
      goal: 'Analizar en detalle el caso de estudio de la App de Gastos Personales y sus 9 pantallas.',
      talkingPoints: [
        'Idea: App para administrar gastos personales sin fricción.',
        'Veamos las 9 pantallas:',
        '1. Inicio (Onboarding)',
        '2. Iniciar sesión',
        '3. Registro',
        '4. Dashboard (Balance y resumen)',
        '5. Registrar gasto (Teclado rápido)',
        '6. Historial (Filtros por mes/día)',
        '7. Categorías (Comida, Ocio, etc.)',
        '8. Estadísticas (Gráficos visuales)',
        '9. Perfil (Moneda y ajustes)',
        'Este es el estándar que cada alumno aplicará a su propia idea.'
      ],
      liveActivity: 'Navegar por las 9 pantallas interactivas en la diapositiva.'
    }
  },
  {
    id: 'mobile1-s4',
    sectionId: 'clase-1-mobile',
    slideNumber: 4,
    totalInClass: 6,
    category: '⚡ ARQUITECTURA TÉCNICA MÓVIL',
    title: 'El Stack Tecnológico: Expo + Supabase + IA (Multiplataforma)',
    subtitle: 'Cómo encajan las piezas para tener una app profesional en iOS & Android en tiempo récord',
    durationMinutes: 8,
    layout: 'grid',
    cards: [
      {
        title: '1. Frontend: Expo & React Native (iOS & Android)',
        desc: 'La interfaz gráfica nativa que se ejecuta en ambos sistemas con componentes táctiles y navegación fluida.',
        badge: 'Capa Móvil Universal',
        list: [
          'Expo Router con navegación por pestañas (Tabs)',
          'Soporte nativo Dark Mode, Safe Area y Haptics',
          'Un solo código ejecutándose en iPhone y Android'
        ]
      },
      {
        title: '2. Backend: Supabase en la Nube',
        desc: 'La base de datos relacional PostgreSQL donde se almacenan usuarios, transacciones y fotos.',
        badge: 'Capa de Datos',
        list: [
          'Autenticación por Email, Google y Apple Sign In',
          'Tablas relacionales seguras con RLS',
          'Sincronización en tiempo real (Supabase Realtime)'
        ]
      },
      {
        title: '3. Inteligencia: Antigravity + Google AI',
        desc: 'El copiloto agentic que traduce tu Blueprint en código TypeScript, screens y esquemas SQL.',
        badge: 'Capa de IA',
        list: [
          'Generación de pantallas a partir del plano',
          'Configuración de endpoints y queries',
          'Detección y corrección automática de errores'
        ]
      }
    ],
    speakerNotes: {
      goal: 'Explicar de forma sencilla cómo interactúan Expo, Supabase y los agentes de IA para iOS y Android.',
      talkingPoints: [
        'Expo pone la cara bonita en tu iPhone y en tu Android.',
        'Supabase guarda los datos con seguridad bancaria.',
        'Antigravity IDE y Google AI Pro unen todo con código limpio.'
      ]
    }
  },
  {
    id: 'mobile1-s5',
    sectionId: 'clase-1-mobile',
    slideNumber: 5,
    totalInClass: 6,
    category: '⚖️ PRIORIZACIÓN RADICAL',
    title: 'Qué Tendrá el MVP vs Qué Dejaremos para Después',
    subtitle: 'La disciplina para no caer en la trampa del perfeccionismo y lanzar en tu celular hoy mismo',
    durationMinutes: 8,
    layout: 'comparison',
    comparison: {
      leftTitle: 'Lo que SÍ entra en el MVP (Lanzamiento Ya)',
      leftSubtitle: 'Lo indispensable para resolver el problema principal',
      leftBadge: 'Foco 100%',
      leftItems: [
        'Registro e inicio de sesión seguro con Supabase.',
        'Dashboard principal con balance mensual y resumen.',
        'Formulario ágil para registrar un gasto en 3 taps.',
        'Historial de gastos ordenado cronológicamente.',
        'Categorías básicas (Comida, Transporte, Hogar, etc.).'
      ],
      rightTitle: 'Lo que dejamos para la Versión 2 (Post-Lanzamiento)',
      rightSubtitle: 'Mejoras secundarias que se añaden con usuarios reales',
      rightBadge: 'Versión 2',
      rightItems: [
        'Escaneo inteligente de recibos con cámara y OCR con IA.',
        'Conexión automática con bancos y tarjetas de crédito.',
        'Presupuestos compartidos para parejas y familias.',
        'Widgets para la pantalla bloqueada y Dynamic Island.',
        'Exportación contable avanzada a PDF y Excel.'
      ]
    },
    callout: {
      type: 'tip',
      title: 'Regla de Oro Móvil',
      text: 'El mejor MVP es aquel que tu usuario puede instalar hoy en su celular y resolver su dolor en menos de 1 minuto.'
    },
    speakerNotes: {
      goal: 'Enseñar a los alumnos a podar funciones superfluas para enfocarse en el núcleo del MVP.',
      talkingPoints: [
        'Muchos proyectos nunca ven la luz porque intentan construir 20 funciones complejas desde el día 1.',
        'Un MVP limpio con 5 pantallas sólidas supera a una app con 30 pantallas a medio terminar.'
      ]
    }
  },
  {
    id: 'mobile1-s6',
    sectionId: 'clase-1-mobile',
    slideNumber: 6,
    totalInClass: 6,
    category: '📄 ENTREGABLE MAESTRO',
    title: 'Tu Entregable Final: El APP BLUEPRINT',
    subtitle: 'Cada alumno termina la clase con el plano maestro de su aplicación móvil (iOS & Android) listo para programar con IA',
    durationMinutes: 15,
    layout: 'custom',
    customComponentKey: 'ios-blueprint-interactive',
    speakerNotes: {
      goal: 'Asegurar que cada alumno abra el Generador de App Blueprint, ingrese su idea y exporte su prompt maestro.',
      talkingPoints: [
        'Este App Blueprint es su tesoro: el mapa exacto para que Antigravity IDE construya su app.',
        'Al pegar este prompt generado en Antigravity IDE, la IA crea las pantallas de Expo y la base de datos de Supabase en minutos.',
        '¡Nadie se va sin su App Blueprint exportado!'
      ],
      liveActivity: 'Abrir el modal "Generar App Blueprint", seleccionar un preset o crear uno nuevo y copiar el prompt en vivo.'
    }
  }
];

export const RUTA_IOS_AI_PRESENTATION: Presentation = {
  id: 'ruta-ios-ai',
  title: 'Ruta: Crear Apps iOS & Android con IA + Expo + Supabase',
  shortTitle: 'Ruta Apps iOS & Android',
  subtitle: 'De una Idea a tu Primera Aplicación iOS & Android en tu Celular con IA, Expo & Supabase',
  badge: '2 Clases Prácticas',
  icon: 'Smartphone',
  description: 'Masterclass interactiva de 2 clases para preparar tu entorno de desarrollo móvil (Antigravity IDE, Expo, Expo Go en iPhone/Android, Supabase) y diseñar el App Blueprint y MVP de tu aplicación móvil.',
  hasBriefGenerator: false,
  hasSoftwarePlanGenerator: false,
  hasAppBlueprintGenerator: true,
  sections: [
    {
      id: 'clase-0-ios',
      title: 'CLASE 0 — Preparación del Entorno & Tu Idea de App (iOS & Android)',
      shortTitle: 'Clase 0: Preparación',
      badge: 'Entorno & Idea',
      color: 'emerald',
      description: 'Laptop, Internet, Antigravity IDE, Google AI Pro, GitHub, Expo, Expo Go en iPhone y Android, Supabase y las 5 preguntas de tu idea.',
      slides: CLASE_0_MOBILE_SLIDES
    },
    {
      id: 'clase-1-ios',
      title: 'CLASE 1 — De una Idea a una Aplicación (App Blueprint)',
      shortTitle: 'Clase 1: App Blueprint',
      badge: 'Estrategia & Blueprint',
      color: 'cyan',
      description: 'Los 9 pilares del producto móvil, caso de estudio de la App de Gastos Personales (9 pantallas), priorización MVP y Generador de App Blueprint.',
      slides: CLASE_1_MOBILE_SLIDES
    }
  ]
};
