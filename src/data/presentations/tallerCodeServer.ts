import type { Presentation, SlideData } from '../../types';

const SLIDES: SlideData[] = [
  {
    id: 'taller-1',
    slideNumber: 1,
    totalInClass: 11,
    category: 'Introducción',
    title: 'Desarrollo en la Nube con IA 🚀',
    subtitle: 'Code-Server + Antigravity CLI',
    durationMinutes: 5,
    layout: 'hero',
    badge: 'Taller Práctico',
    heroCta: {
      text: 'Comenzar Taller',
      action: 'next'
    },
    speakerNotes: {
      goal: 'Dar la bienvenida y establecer el tono del taller.',
      talkingPoints: ['La nube es el futuro del desarrollo', 'La IA multiplica tu productividad'],
    }
  },
  {
    id: 'taller-2',
    slideNumber: 2,
    totalInClass: 11,
    category: 'Objetivos',
    title: 'Objetivos de la Sesión',
    durationMinutes: 5,
    layout: 'grid',
    cards: [
      {
        title: 'Entornos Remotos',
        desc: 'Entender el concepto y beneficios de desarrollar directamente en la nube.',
        icon: 'Cloud'
      },
      {
        title: 'Code-Server',
        desc: 'Conocer esta alternativa para programar desde cualquier navegador.',
        icon: 'Monitor'
      },
      {
        title: 'Antigravity CLI (agy)',
        desc: 'Descubrir cómo la IA puede integrarse nativamente en la terminal.',
        icon: 'Terminal'
      },
      {
        title: 'Proyecto Práctico',
        desc: 'Crear un servidor web con Express.js programando de la mano con la IA.',
        icon: 'Code'
      }
    ],
    speakerNotes: {
      goal: 'Explicar qué vamos a lograr hoy.',
      talkingPoints: ['Hoy no será pura teoría, será 100% práctico.'],
    }
  },
  {
    id: 'taller-3',
    slideNumber: 3,
    totalInClass: 11,
    category: 'Code-Server',
    title: '¿Qué es Code-Server?',
    subtitle: 'VS Code directamente en tu Navegador',
    durationMinutes: 5,
    layout: 'split',
    points: [
      { text: 'Es la versión Open Source de VS Code corriendo en un servidor remoto.' },
      { text: 'Accesible desde cualquier navegador (Chrome, Safari, iPad).' },
      { text: 'Todo el procesamiento (CPU, RAM) ocurre en el servidor, no en tu laptop.' },
      { text: 'Acceso directo a un entorno Linux real.' }
    ],
    callout: {
      type: 'gem',
      title: 'Ventaja Principal',
      text: 'Tienes exactamente el mismo entorno de desarrollo sin importar si estás en tu PC de escritorio, en tu laptop o en una tablet.'
    },
    speakerNotes: {
      goal: 'Explicar los beneficios de Code-Server.',
      talkingPoints: ['Ya no dependes de la potencia de tu PC.'],
    }
  },
  {
    id: 'taller-4',
    slideNumber: 4,
    totalInClass: 11,
    category: 'Antigravity',
    title: '¿Qué es Antigravity CLI?',
    subtitle: 'Tu Asistente de IA en la Terminal',
    durationMinutes: 10,
    layout: 'split',
    points: [
      { text: 'Una interfaz de línea de comandos (agy) que trae capacidades de IA avanzadas.' },
      { text: 'Entiende el contexto completo de tus archivos y carpetas.' },
      { text: 'Escribe, refactoriza y analiza código directamente en tus proyectos.' },
      { text: 'Se comunica en lenguaje natural y mediante slash commands (/help).' }
    ],
    speakerNotes: {
      goal: 'Presentar Antigravity CLI (agy).',
      talkingPoints: ['No es solo un chat, es un agente que actúa en tu terminal.'],
    }
  },
  {
    id: 'taller-5',
    slideNumber: 5,
    totalInClass: 11,
    category: 'Sinergia',
    title: 'La Pareja Perfecta',
    subtitle: 'Code-Server + agy',
    durationMinutes: 5,
    layout: 'comparison',
    comparison: {
      leftTitle: 'Code-Server',
      leftBadge: 'El Entorno',
      leftItems: [
        'Desarrollo 100% Remoto',
        'Accesible desde cualquier lugar',
        'Editor visual potente (VS Code)',
        'Terminal integrada al servidor'
      ],
      rightTitle: 'Antigravity CLI',
      rightBadge: 'El Motor (IA)',
      rightItems: [
        'Vive dentro de tu terminal',
        'Analiza tu proyecto en tiempo real',
        'Escribe y modifica tus archivos',
        'Resuelve errores al instante'
      ]
    },
    speakerNotes: {
      goal: 'Mostrar cómo se complementan.',
      talkingPoints: ['La terminal de Code-Server es el hogar perfecto para agy.'],
    }
  },
  {
    id: 'taller-6',
    slideNumber: 6,
    totalInClass: 11,
    category: 'Infraestructura',
    title: 'Nuestro Servidor: Contabo VPS',
    subtitle: 'Cloud VPS Core 4 con Ubuntu 24.04',
    durationMinutes: 5,
    layout: 'split',
    heroCta: {
      text: 'Ver Servidor en Contabo',
      action: 'external',
      url: 'https://contabo.com/en/vps/cloud-vps-core-4?addons=2218&image=ubuntu.332&qty=1&contract=24&storage-type=ssd-storage-cloud-vps-core-4-default'
    },
    stats: [
      { value: '4', label: 'vCPU Cores', color: 'blue' },
      { value: '8 GB', label: 'Memoria RAM', color: 'emerald' },
      { value: '100 GB', label: 'Almacenamiento SSD', color: 'amber' }
    ],
    points: [
      { text: 'Utilizaremos Contabo como nuestro proveedor de infraestructura cloud.' },
      { text: 'Este VPS tiene potencia de sobra para correr Code-Server, múltiples proyectos Node.js y nuestros asistentes IA fluidamente.' },
      { text: 'Trabajaremos sobre una instalación limpia de Ubuntu 24.04 LTS.' }
    ],
    speakerNotes: {
      goal: 'Presentar los requisitos de hardware y el proveedor.',
      talkingPoints: ['Contabo ofrece una relación calidad-precio imbatible para desarrollo.'],
    }
  },
  {
    id: 'taller-7',
    slideNumber: 7,
    totalInClass: 11,
    category: 'Arquitectura',
    title: 'Arquitectura del Entorno',
    subtitle: 'Lo que montaremos en nuestro VPS',
    durationMinutes: 5,
    layout: 'timeline',
    timeline: [
      {
        step: '1',
        title: 'Node.js (v20)',
        desc: 'El runtime para ejecutar nuestro proyecto web.'
      },
      {
        step: '2',
        title: 'Firewall (UFW)',
        desc: 'Apertura de puertos 8080 (Code-Server) y 3000 (Proyecto).'
      },
      {
        step: '3',
        title: 'Code-Server',
        desc: 'Instalado y configurado como servicio en segundo plano.'
      },
      {
        step: '4',
        title: 'Acceso Externo',
        desc: 'Configurado en la IP 0.0.0.0 para acceso web público.'
      }
    ],
    speakerNotes: {
      goal: 'Preparar mentalmente a los alumnos para la configuración.',
      talkingPoints: ['Estos son los pasos técnicos detrás de bambalinas.'],
    }
  },
  {
    id: 'taller-8',
    slideNumber: 8,
    totalInClass: 11,
    category: 'Manos a la obra',
    title: '¡Manos a la obra!',
    subtitle: 'Ejecución del Script Automatizado',
    durationMinutes: 10,
    layout: 'split',
    badge: 'Descargable',
    heroCta: {
      text: 'Descargar Script',
      action: 'external',
      url: '/setup_ubuntu24.sh'
    },
    points: [
      { text: 'Hemos preparado un script (setup_ubuntu24.sh) que automatiza todo.' },
      { text: 'Se encarga de instalar dependencias, configurar el firewall y levantar el servicio.' },
      { text: 'Una vez finalice, entra a la IP de tu VPS por el puerto 8080.' }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'Comandos en tu Servidor',
      code: 'chmod +x setup_ubuntu24.sh\n./setup_ubuntu24.sh'
    },
    speakerNotes: {
      goal: 'Guiar a los alumnos en la instalación.',
      talkingPoints: ['Asegúrense de no correrlo como root directo si van a usar systemctl --user.'],
    }
  },
  {
    id: 'taller-9',
    slideNumber: 9,
    totalInClass: 11,
    category: 'Práctica',
    title: 'Ejercicio Práctico',
    subtitle: 'Servidor Express con IA',
    durationMinutes: 15,
    layout: 'split',
    points: [
      { text: 'Abre la terminal en tu Code-Server.', highlight: true },
      { text: 'Inicializa el proyecto con: mkdir proyecto && cd proyecto && npm init -y && npm install express' },
      { text: 'Lanza Antigravity CLI ejecutando agy' }
    ],
    callout: {
      type: 'info',
      title: 'Prompt Sugerido',
      text: '"Crea server.js con Express escuchando en el puerto 3000. Debe tener un endpoint raíz que diga \'Hola Taller\' y otro /api/status que devuelva JSON."'
    },
    speakerNotes: {
      goal: 'Que experimenten el poder de agy.',
      talkingPoints: ['Observen cómo agy crea el archivo y escribe el código sin que ustedes toquen el teclado.'],
    }
  },
  {
    id: 'taller-10',
    slideNumber: 10,
    totalInClass: 11,
    category: 'Retos',
    title: 'Retos Autónomos',
    subtitle: 'Prueba el poder de agy',
    durationMinutes: 15,
    layout: 'grid',
    cards: [
      {
        title: 'Reto 1: Refactorización',
        desc: 'Pide a agy que modifique server.js para que el puerto (3000) sea configurable por una variable de entorno PORT.',
        icon: 'RefreshCw'
      },
      {
        title: 'Reto 2: Estilos Web',
        desc: 'Pide a agy que cree un index.html con un diseño moderno (modo oscuro) y que tu servidor Express lo devuelva en la ruta raíz.',
        icon: 'Paintbrush'
      },
      {
        title: 'Reto 3: Depuración',
        desc: 'Borra a propósito una llave { de tu código y pregúntale a agy: "¿Por qué falla mi aplicación?".',
        icon: 'Bug'
      }
    ],
    speakerNotes: {
      goal: 'Fomentar la exploración autónoma.',
      talkingPoints: ['La IA brilla en la refactorización y depuración.'],
    }
  },
  {
    id: 'taller-11',
    slideNumber: 11,
    totalInClass: 11,
    category: 'Cierre',
    title: 'Preguntas y Respuestas',
    subtitle: '¡Gracias por participar en el taller!',
    durationMinutes: 10,
    layout: 'hero',
    badge: 'Fin de la Sesión',
    speakerNotes: {
      goal: 'Resolver dudas finales.',
      talkingPoints: ['¿Dudas sobre cómo escalarlo?', '¿Integración con Docker?'],
    }
  }
];

export const TALLER_CODE_SERVER_PRESENTATION: Presentation = {
  id: 'taller-code-server',
  title: 'Taller Práctico',
  shortTitle: 'Code-Server & CLI',
  subtitle: 'Entornos Remotos y Asistentes IA',
  badge: 'Taller',
  icon: 'Terminal',
  description: 'Aprende a montar un entorno de desarrollo 100% en la nube con Code-Server y a integrarlo con Antigravity CLI (agy) para un flujo de trabajo ultra productivo.',
  hasBriefGenerator: false,
  sections: [
    {
      id: 'sesion-unica',
      title: 'Taller: Code-Server + Antigravity CLI',
      shortTitle: 'Taller',
      color: 'blue',
      description: 'Configuración de servidor, despliegue y retos prácticos.',
      slides: SLIDES
    }
  ]
};
