import type { Presentation, SlideData } from '../../types';

export const CLASE_0_SOFTWARE_SLIDES: SlideData[] = [
  {
    id: 's0-s1',
    sectionId: 'clase-0-software',
    slideNumber: 1,
    totalInClass: 6,
    category: '🧰 CLASE 0 — PREPARACIÓN',
    title: 'Prepara Todo Antes de Empezar',
    subtitle: 'El punto de partida para construir tu primera aplicación y SaaS con agentes de IA',
    durationMinutes: 5,
    layout: 'hero',
    badge: 'RUTA SOFTWARE CON IA',
    heroCta: {
      text: 'Comenzar Preparación'
    },
    stats: [
      { value: '0', label: 'Código previo requerido', subtext: 'Cero programación' },
      { value: '4', label: 'Cuentas clave', subtext: 'GitHub, Vercel, Supabase, Google' },
      { value: '1', label: 'Tu propia idea', subtext: 'El núcleo de tu proyecto' },
      { value: '100%', label: 'Stack moderno', subtext: 'Antigravity + Supabase' }
    ],
    speakerNotes: {
      goal: 'Dar la bienvenida a la Ruta Software con IA y transmitir seguridad: no se necesita saber programar.',
      talkingPoints: [
        'Un software no nace del código, nace de una necesidad clara que resuelve un problema real.',
        'Hoy preparamos las herramientas, las cuentas y sobre todo la claridad de la idea.',
        'La IA se encargará de la programación y la arquitectura técnica; tú pondrás la visión de negocio.'
      ],
      questionsToAsk: [
        '¿Quiénes aquí tienen una idea de software o SaaS en mente?',
        '¿Qué les impidió construirla en el pasado?'
      ],
      liveActivity: 'Pedir a todos que abran su bloc de notas o se preparen para anotar su idea.'
    }
  },
  {
    id: 's0-s2',
    sectionId: 'clase-0-software',
    slideNumber: 2,
    totalInClass: 6,
    category: '💻 REQUISITOS FÍSICOS',
    title: 'Tu Estación de Creación de Software',
    subtitle: 'Hardware, conexión y entorno mental para trabajar sin fricciones',
    durationMinutes: 5,
    layout: 'grid',
    cards: [
      {
        title: '💻 Laptop / Computadora',
        desc: 'Tu estación principal. No requieres una máquina gamer ni servidores dedicados; la nube y la IA hacen el trabajo pesado.',
        badge: 'Equipo',
        list: ['Cualquier sistema operativo (Mac, Windows, Linux)', 'Navegador Chrome/Brave/Edge actualizado', 'Espacio disponible para archivos de proyecto']
      },
      {
        title: '🌐 Internet Estable',
        desc: 'Conexión fluida para sincronizar bases de datos en tiempo real, interactuar con los modelos de IA y desplegar.',
        badge: 'Conectividad',
        list: ['Conexión rápida y estable', 'Acceso a servicios en la nube sin bloqueos', 'Recomendado: cable o Wi-Fi 5GHz']
      },
      {
        title: '☕ Espacio de Trabajo & Enfoque',
        desc: 'Un entorno libre de distracciones para pensar con claridad la lógica de tu aplicación.',
        badge: 'Mentalidad',
        list: ['Cuaderno o app de notas abierta', 'Ganas de resolver un dolor de mercado real', 'Disposición a experimentar con agentes']
      }
    ],
    speakerNotes: {
      goal: 'Verificar que todos tengan las condiciones básicas de hardware y conectividad.',
      talkingPoints: [
        'No necesitas un servidor de 32GB de RAM; hoy el backend corre en Supabase y el frontend en Vercel.',
        'La conexión estable es clave porque los agentes consultan APIs de IA de alta velocidad.'
      ]
    }
  },
  {
    id: 's0-s3',
    sectionId: 'clase-0-software',
    slideNumber: 3,
    totalInClass: 6,
    category: '🤖 INTELIGENCIA ARTIFICIAL',
    title: 'El Núcleo de IA: Antigravity IDE & Google AI Pro',
    subtitle: 'Tu equipo de desarrollo autónomo que programa, testea y estructura por ti',
    durationMinutes: 8,
    layout: 'grid',
    cards: [
      {
        title: '1. Instalar Antigravity IDE',
        desc: 'El entorno de desarrollo agentic de última generación donde los agentes leen tu proyecto y ejecutan tareas reales.',
        badge: 'Editor',
        list: ['Descargar e instalar en tu sistema operativo', 'Permitir permisos de terminal y workspace local', 'Interfaz visual integrada']
      },
      {
        title: '2. Iniciar Sesión en Antigravity',
        desc: 'Conectar tu cuenta para sincronizar configuraciones, atajos y sesiones de trabajo en vivo.',
        badge: 'Login',
        list: ['Autenticación rápida y segura', 'Workspace listo para crear archivos y servidores', 'Terminal integrada']
      },
      {
        title: '3. Google AI Pro Activo',
        desc: 'El motor de razonamiento multimodal que da potencia a los agentes para generar código robusto.',
        badge: 'Motor de IA',
        list: ['Modelos de alta capacidad de razonamiento', 'Ventana de contexto amplia para leer todo el proyecto', 'Velocidad de generación instantánea']
      }
    ],
    speakerNotes: {
      goal: 'Asegurar que el 100% de los alumnos tenga instalado Antigravity IDE y el acceso a Google AI Pro verificado.',
      talkingPoints: [
        'Antigravity IDE no es solo para escribir texto; tiene agentes que crean carpetas, instalan dependencias y prueban el software.',
        'Hacer una comprobación rápida en pantalla.'
      ],
      liveActivity: 'Pedir que abran Antigravity IDE y confirmen con un pulgar arriba en el chat.'
    }
  },
  {
    id: 's0-s4',
    sectionId: 'clase-0-software',
    slideNumber: 4,
    totalInClass: 6,
    category: '👨‍💻 CUENTAS CLAVE',
    title: 'Las 4 Cuentas Fundamentales para Software',
    subtitle: 'La infraestructura moderna en la nube que sostendrá tus aplicaciones y SaaS',
    durationMinutes: 10,
    layout: 'grid',
    cards: [
      {
        title: '1. GitHub',
        desc: 'El baúl seguro donde reside tu código fuente y su historial de cambios.',
        badge: 'Código',
        list: ['Crea tu cuenta gratuita en github.com', 'Permite versionar y proteger tu software', 'Conexión directa con Vercel para auto-deploy']
      },
      {
        title: '2. Vercel',
        desc: 'La plataforma que publica tu aplicación web en internet con un solo clic.',
        badge: 'Hosting & CDN',
        list: ['Inicia sesión con tu cuenta de GitHub', 'Despliegue global instantáneo con SSL/HTTPS gratis', 'Dominio gratuito .vercel.app inmediato']
      },
      {
        title: '3. Supabase (PostgreSQL DB)',
        desc: 'El backend completo de tu software: base de datos relacional, login de usuarios y archivos.',
        badge: 'Base de Datos',
        list: ['Crea tu cuenta gratuita en supabase.com', 'Base de datos PostgreSQL real y potente', 'Autenticación, tablas y seguridad RLS']
      },
      {
        title: '4. Cuenta de Google',
        desc: 'Tu identidad central para iniciar sesión de forma ágil en todas las herramientas del stack.',
        badge: 'Identidad',
        list: ['Correo activo y seguro', 'Acceso a Google AI Studio y Pro', 'Gestión de notificaciones']
      }
    ],
    speakerNotes: {
      goal: 'Explicar el rol de cada una de las 4 cuentas y verificar que las tengan creadas.',
      talkingPoints: [
        'GitHub = Donde vive el código.',
        'Vercel = Donde se ve la app en internet.',
        'Supabase = Donde se guardan los usuarios, clientes, pedidos y datos del negocio.',
        'Google = La llave maestra.'
      ],
      questionsToAsk: [
        '¿Quién ya tiene cuenta en Supabase?',
        '¿Tienen ya su GitHub vinculado con Vercel?'
      ]
    }
  },
  {
    id: 's0-s5',
    sectionId: 'clase-0-software',
    slideNumber: 5,
    totalInClass: 6,
    category: '💡 MUY IMPORTANTE: TU IDEA',
    title: 'Trae tu Idea de Software: Las 4 Claridades',
    subtitle: 'No necesitas saber cómo construirla ni programar. Solo tener clara tu visión de negocio.',
    durationMinutes: 12,
    layout: 'custom',
    customComponentKey: 'software-idea-interactive',
    speakerNotes: {
      goal: 'Desmontar el miedo técnico. Enseñar las 4 preguntas esenciales que todo fundador o creador debe tener claras.',
      talkingPoints: [
        'El 99% de los proyectos fracasan por falta de claridad en el problema, no por falta de código.',
        '1. ¿Qué quieres crear? (Categoría)',
        '2. ¿Qué problema solucionas? (Dolor real)',
        '3. ¿Quién lo utilizará? (Roles y usuarios)',
        '4. ¿Qué debería poder hacer? (Funcionalidades iniciales)',
        'No importa si la lista está incompleta; la IA la perfeccionará en la Clase 1.'
      ],
      liveActivity: 'Abrir el botón de "Generador de Plan de Software" y mostrar un ejemplo en vivo.'
    }
  },
  {
    id: 's0-s6',
    sectionId: 'clase-0-software',
    slideNumber: 6,
    totalInClass: 6,
    category: '🎯 AUDITORÍA EN VIVO',
    title: 'Checklist Maestro de Clase 0',
    subtitle: 'Marca tus casillas y verifica que estás al 100% para la Clase 1: De tu Idea al MVP',
    durationMinutes: 10,
    layout: 'custom',
    customComponentKey: 'software-checklist',
    speakerNotes: {
      goal: 'Auditar en vivo con los alumnos el cumplimiento del checklist: Equipo, IA, Cuentas (Supabase incluido) e Idea de Software.',
      talkingPoints: [
        'Revisemos juntos punto por punto.',
        'Si te falta Supabase o Antigravity, créalo ahora mismo antes de pasar a la Clase 1.'
      ],
      liveActivity: 'Invitar a todos a marcar sus casillas en pantalla hasta completar el 100% y lanzar confetti.'
    }
  }
];

export const CLASE_1_SOFTWARE_SLIDES: SlideData[] = [
  {
    id: 's1-s1',
    sectionId: 'clase-1-software',
    slideNumber: 1,
    totalInClass: 6,
    category: '🧠 CLASE 1 — ESTRATEGIA & MVP',
    title: 'De tu Idea al MVP de Software',
    subtitle: '"Aquí cada alumno trabaja sobre su propia idea: de \'Tengo una idea\' a \'Sé exactamente qué software voy a construir\'"',
    durationMinutes: 5,
    layout: 'hero',
    badge: 'CLASE 1: METODOLOGÍA MVP',
    heroCta: {
      text: 'Comenzar Arquitectura'
    },
    stats: [
      { value: '1 a 1', label: 'Trabajo personalizado', subtext: 'Sobre tu propia idea' },
      { value: '8', label: 'Pasos guiados con IA', subtext: 'De problema a MVP' },
      { value: '100%', label: 'Claridad arquitectónica', subtext: 'Base de datos + Pantallas' },
      { value: '1', label: 'Plan Maestro de Software', subtext: 'Entregable final' }
    ],
    speakerNotes: {
      goal: 'Establecer la meta de la sesión: convertir la idea abstracta de cada alumno en una hoja de ruta técnica precisa (Software Blueprint).',
      talkingPoints: [
        'Hoy nadie se queda atrás: cada uno avanza con su propio proyecto.',
        'El objetivo de hoy no es escribir 5,000 líneas de código, sino definir la arquitectura que los agentes construirán.',
        'Un software bien planificado se programa en horas; un software sin plan no se termina nunca.'
      ],
      questionsToAsk: [
        '¿Quién tiene ya el nombre o la categoría de su software definido?'
      ]
    }
  },
  {
    id: 's1-s2',
    sectionId: 'clase-1-software',
    slideNumber: 2,
    totalInClass: 6,
    category: '⚔️ PARADIGMA DE CREACIÓN',
    title: 'El Error Común vs El Método con Agentes',
    subtitle: 'Por qué el 90% se rinde intentando programar sin un plan estructurado',
    durationMinutes: 8,
    layout: 'comparison',
    comparison: {
      leftTitle: 'El Enfoque Antiguo / Caótico',
      leftSubtitle: 'Intentar programar sin arquitectura ni datos claros',
      leftBadge: 'Frustrante & Lento',
      leftItems: [
        'Intentar diseñar pantallas sin saber qué datos guardar en la base de datos.',
        'Pedirle a un chatbot trozos de código suelto que luego no encajan entre sí.',
        'Pasar semanas memorizando sintaxis y configuraciones complejas.',
        'Construir funcionalidades secundarias que nadie necesita antes de validar.'
      ],
      rightTitle: 'El Método de la Ruta Software con IA',
      rightSubtitle: 'Arquitectura guiada con agentes y Supabase',
      rightBadge: 'Ágil & Estructurado',
      rightItems: [
        'Definir claramente los 8 pasos: problema, usuario, funciones, pantallas, flujos y datos.',
        'El agente en Antigravity IDE genera la arquitectura completa y el esquema SQL.',
        'Base de datos PostgreSQL en Supabase conectada desde el primer minuto.',
        'Foco 100% en el MVP para salir a validar y facturar rápidamente.'
      ]
    },
    callout: {
      type: 'gem',
      title: 'Regla de Oro',
      text: 'Los agentes de IA multiplican tu velocidad, pero tú eres el arquitecto que define el rumbo y la lógica de negocio.'
    },
    speakerNotes: {
      goal: 'Mostrar el contraste entre perderse en el código versus planificar con el método de agentes.',
      talkingPoints: [
        'El código es un resultado, no el punto de partida.',
        'Con el método de agentes, diseñar la base de datos y las pantallas toma minutos si el plan está claro.'
      ]
    }
  },
  {
    id: 's1-s3',
    sectionId: 'clase-1-software',
    slideNumber: 3,
    totalInClass: 6,
    category: '🚀 METODOLOGÍA GUIADA',
    title: 'El Proceso en 8 Pasos con Agentes de IA',
    subtitle: 'Cómo transformamos tu idea paso a paso con la ayuda de los agentes inteligentes',
    durationMinutes: 12,
    layout: 'custom',
    customComponentKey: 'software-mvp-steps',
    speakerNotes: {
      goal: 'Recorrer los 8 pasos uno por uno: Problema, Usuario, Funcionalidades, Pantallas, Flujos, Datos (Supabase), MVP y Priorización.',
      talkingPoints: [
        '1. Problema: El dolor que eliminamos.',
        '2. Usuario: Los roles de la app.',
        '3. Funcionalidades: Qué hace la app.',
        '4. Pantallas: Qué ve el usuario.',
        '5. Flujos: Cómo se mueve el usuario.',
        '6. Datos: Las tablas en Supabase.',
        '7. MVP: El núcleo mínimo vendible.',
        '8. Priorización: Separar lo urgente de lo secundario.'
      ],
      liveActivity: 'Hacer clic en cada paso interactivo para explicarlo.'
    }
  },
  {
    id: 's1-s4',
    sectionId: 'clase-1-software',
    slideNumber: 4,
    totalInClass: 6,
    category: '📐 ARQUITECTURA DE SOFTWARE',
    title: 'Las 3 Capas de un Software Moderno',
    subtitle: 'Cómo se integran el Frontend, la Base de Datos y la Lógica de Negocio',
    durationMinutes: 10,
    layout: 'grid',
    cards: [
      {
        title: '1. Frontend & Experiencia',
        desc: 'Lo que el usuario ve, toca e interactúa en su pantalla.',
        badge: 'Capa Visual',
        list: ['Next.js 14 / React & TypeScript', 'Tailwind CSS (Dark/Light mode)', 'Componentes interactivos y formularios limpios']
      },
      {
        title: '2. Backend & Supabase DB',
        desc: 'El corazón donde residen los datos de forma segura.',
        badge: 'Capa de Datos',
        list: ['PostgreSQL en la nube de Supabase', 'Autenticación de usuarios por correo/OAuth', 'Seguridad por filas (Row Level Security)']
      },
      {
        title: '3. Lógica de Negocio & Agentes',
        desc: 'Las reglas que hacen funcionar tu negocio en automático.',
        badge: 'Capa Inteligente',
        list: ['Cálculo de cobros, pedidos y estados', 'Notificaciones automáticas', 'Agentes de IA para tareas automatizadas']
      }
    ],
    speakerNotes: {
      goal: 'Explicar a personas sin base técnica cómo funciona una aplicación web moderna sin tecnicismos abrumadores.',
      talkingPoints: [
        'Frontend = La carrocería y el volante.',
        'Backend/Supabase = El motor y el tanque de combustible.',
        'Lógica = La computadora a bordo que controla todo.'
      ]
    }
  },
  {
    id: 's1-s5',
    sectionId: 'clase-1-software',
    slideNumber: 5,
    totalInClass: 6,
    category: '🎯 ENFOQUE & VELOCIDAD',
    title: 'Priorización Radical: Qué va al MVP vs Qué va a la Versión 2',
    subtitle: 'La regla de oro para no quedar atrapado en el perfeccionismo y lanzar en tiempo récord',
    durationMinutes: 8,
    layout: 'comparison',
    comparison: {
      leftTitle: 'Versión 1 — MVP (Lanzamiento Inmediato)',
      leftSubtitle: 'Lo estrictamente indispensable para resolver el dolor principal',
      leftBadge: 'Foco Total',
      leftItems: [
        'Registro e inicio de sesión seguro de usuarios.',
        'El flujo principal (Ej: Crear pedido -> Ver en cocina -> Cobrar).',
        'Guardado de datos en tiempo real en Supabase.',
        'Diseño limpio, profesional y 100% funcional en móvil y PC.'
      ],
      rightTitle: 'Versión 2 — Post-Lanzamiento',
      rightSubtitle: 'Mejoras que se construyen cuando ya tienes usuarios activos',
      rightBadge: 'Fase 2',
      rightItems: [
        'Pasarelas de pago internacionales con cripto o suscripciones complejas.',
        'Reportes gráficos avanzados con IA predictiva.',
        'Integraciones con 10 APIs externas simultáneas.',
        'Personalización extrema de temas visuales por usuario.'
      ]
    },
    callout: {
      type: 'tip',
      title: 'Consejo de Silicon Valley',
      text: 'Si la primera versión de tu software no te da un poco de vergüenza, es porque la lanzaste demasiado tarde.'
    },
    speakerNotes: {
      goal: 'Eliminar el perfeccionismo. Enseñar a los alumnos a podar funciones accesorias para enfocarse en el núcleo vendible.',
      talkingPoints: [
        'El MVP no es un producto mediocre; es el producto más simple que entrega valor real.',
        'Menos funciones bien hechas vencen a 20 funciones llenas de errores.'
      ]
    }
  },
  {
    id: 's1-s6',
    sectionId: 'clase-1-software',
    slideNumber: 6,
    totalInClass: 6,
    category: '📋 ENTREGABLE MAESTRO',
    title: 'El Plan de tu Software: Tu Brújula de Construcción',
    subtitle: 'Sales de la clase con la especificación exacta lista para que los agentes en Antigravity programen',
    durationMinutes: 15,
    layout: 'custom',
    customComponentKey: 'software-final-plan',
    speakerNotes: {
      goal: 'Guiar a los alumnos a completar su Plan de Software en el modal interactivo y exportar su prompt.',
      talkingPoints: [
        'Este plan es el activo más valioso que tienen hoy.',
        'En la siguiente fase, este prompt se pega en Antigravity y el agente crea toda la estructura en minutos.',
        '¡Nadie se va sin su Plan de Software exportado!'
      ],
      liveActivity: 'Abrir el modal "Generar Plan de mi Software", llenarlo con un voluntario y copiar el prompt en vivo.'
    }
  }
];

export const RUTA_SOFTWARE_AI_PRESENTATION: Presentation = {
  id: 'ruta-software-ai',
  title: 'Ruta Software con IA',
  shortTitle: 'Ruta Software con IA',
  subtitle: 'De tu Idea de Negocio a tu Primer Software & SaaS con Agentes y Supabase',
  badge: '2 Clases Prácticas',
  icon: 'Layers',
  description: 'Masterclass práctica de 2 clases para preparar tu entorno de desarrollo (Antigravity, GitHub, Vercel, Supabase) y estructurar el MVP y Plan Maestro de tu software con agentes de IA.',
  hasBriefGenerator: false,
  hasSoftwarePlanGenerator: true,
  sections: [
    {
      id: 'clase-0-software',
      title: 'Clase 0: Prepara Todo Antes de Empezar',
      shortTitle: 'Clase 0: Preparación',
      badge: 'Entorno & Idea',
      color: 'cyan',
      description: 'Equipo, Antigravity IDE, Google AI Pro, GitHub, Vercel, Supabase y las 4 claridades de tu idea de software.',
      slides: CLASE_0_SOFTWARE_SLIDES
    },
    {
      id: 'clase-1-software',
      title: 'Clase 1: De tu Idea al MVP de Software',
      shortTitle: 'Clase 1: De tu Idea al MVP',
      badge: 'Estrategia MVP',
      color: 'violet',
      description: 'Metodología en 8 pasos con agentes de IA, arquitectura en 3 capas, priorización y Generador del Plan de tu Software.',
      slides: CLASE_1_SOFTWARE_SLIDES
    }
  ]
};
