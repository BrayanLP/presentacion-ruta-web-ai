import type { Presentation } from '../../types';

export const NUEVA_PRESENTACION_TEMPLATE: Presentation = {
  id: 'nueva-presentacion',
  title: 'Desarrollo con Agentes de IA & FullStack Moderno',
  shortTitle: 'Agentes IA FullStack',
  subtitle: 'Cómo crear aplicaciones web complejas 10x más rápido con equipos de agentes autónomos',
  badge: 'Nueva Masterclass',
  icon: 'Bot',
  description: 'Aprende a orquestar agentes de IA para planificar, programar, testear y desplegar soluciones web de alto impacto.',
  hasBriefGenerator: false,
  sections: [
    {
      id: 'modulo-1',
      title: 'Módulo 1: La Revolución de los Agentes',
      shortTitle: 'Módulo 1: Agentes',
      badge: 'Fundamentos',
      color: 'cyan',
      description: 'Diferencias entre chatbots simples y agentes autónomos con herramientas y memoria.',
      slides: [
        {
          id: 'np-s1',
          sectionId: 'modulo-1',
          slideNumber: 1,
          totalInClass: 5,
          category: '🚀 MASTERCLASS AGENTES',
          title: 'El Futuro del Desarrollo con Agentes de IA',
          subtitle: 'De escribir cada línea a liderar un equipo de agentes especializados que construyen contigo.',
          durationMinutes: 5,
          layout: 'hero',
          badge: 'NUEVA ERA',
          heroCta: {
            text: 'Comenzar Charla'
          },
          stats: [
            { value: '10x', label: 'Velocidad de entrega', subtext: 'De días a minutos' },
            { value: '100%', label: 'Control del código', subtext: 'FullStack local' },
            { value: '24/7', label: 'Copiloto activo', subtext: 'Pair programming' },
            { value: '0', label: 'Fricción', subtext: 'Flujo visual y ágil' }
          ],
          speakerNotes: {
            goal: 'Presentar la visión: la IA no reemplaza al creador, potencia 10x su capacidad de crear software real.',
            talkingPoints: [
              'Ya no programamos solos desde una pantalla en blanco.',
              'Los agentes ejecutan herramientas: leen archivos, corren tests, prueban en navegadores.',
              'Tu rol principal ahora es visión, arquitectura y criterio de calidad.'
            ],
            questionsToAsk: [
              '¿Quién ya usa asistentes de IA en su día a día?',
              '¿Cuál es la tarea que más tiempo les toma actualmente?'
            ]
          }
        },
        {
          id: 'np-s2',
          sectionId: 'modulo-1',
          slideNumber: 2,
          totalInClass: 5,
          category: '⚔️ PARADIGMA',
          title: 'Chatbots Simples vs Agentes Autónomos',
          subtitle: 'Por qué un agente con herramientas cambia por completo las reglas del juego',
          durationMinutes: 8,
          layout: 'comparison',
          comparison: {
            leftTitle: 'Chatbots Tradicionales (ChatGPT clásico)',
            leftSubtitle: 'Respuestas de texto aisladas sin contexto del proyecto',
            leftBadge: 'Limitado',
            leftItems: [
              'Solo genera bloques de texto que debes copiar y pegar manualmente.',
              'No conoce la estructura real de tus archivos ni dependencias.',
              'No puede ejecutar comandos de terminal ni probar la app.',
              'Alucina con APIs obsoletas sin validar en vivo.'
            ],
            rightTitle: 'Agentes de IA (Antigravity & AI Studio)',
            rightSubtitle: 'Agentes con acceso a herramientas, shell y navegador',
            rightBadge: 'Autónomo & Proactivo',
            rightItems: [
              'Crea, edita y refactoriza archivos directamente en tu disco.',
              'Ejecuta servidores dev, analiza errores de consola y los corrige.',
              'Navega con subagentes browser para validar la interfaz.',
              'Planifica en fases antes de tocar código crítico.'
            ]
          },
          callout: {
            type: 'gem',
            title: 'Principio Clave',
            text: 'Un agente no solo "habla", sino que "actúa" en tu entorno con herramientas supervisadas.'
          },
          speakerNotes: {
            goal: 'Mostrar la enorme diferencia entre copiar código de una ventana de chat y trabajar con un agente integrado.',
            talkingPoints: [
              'El cuello de botella de copiar y pegar código ha sido eliminado.',
              'El agente puede leer el árbol de carpetas y entender dependencias exactas.'
            ]
          }
        },
        {
          id: 'np-s3',
          sectionId: 'modulo-1',
          slideNumber: 3,
          totalInClass: 5,
          category: '🧠 ARQUITECTURA',
          title: 'El Stack de un Agente de IA',
          subtitle: 'Las 4 capas fundamentales que componen un flujo de desarrollo autónomo',
          durationMinutes: 10,
          layout: 'grid',
          cards: [
            {
              title: '1. Modelo de Razonamiento',
              desc: 'Modelos de lenguaje avanzados (Gemini 2.5 Flash / Pro) con alto contexto y capacidad multimodal.',
              badge: 'Cerebro',
              list: ['Planificación previa', 'Análisis de dependencias', 'Generación de código robusto']
            },
            {
              title: '2. Herramientas (Tools)',
              desc: 'Capacidad de interactuar con el sistema operativo y servicios externos mediante APIs y terminal.',
              badge: 'Manos y Pies',
              list: ['Lectura/escritura de archivos', 'Ejecución de terminal', 'Búsqueda en web y grep']
            },
            {
              title: '3. Memoria & Contexto (KI)',
              desc: 'Knowledge Items y contexto persistente del repositorio para no repetir preguntas ni errores.',
              badge: 'Memoria',
              list: ['Convenciones del proyecto', 'Patrones de arquitectura', 'Historial de decisiones']
            },
            {
              title: '4. Verificación Visual',
              desc: 'Subagentes con navegador headless y screenshots para verificar que la UI se vea perfecta.',
              badge: 'Ojos',
              list: ['Detección de desalineaciones', 'Grabaciones webp', 'Pruebas de interactividad']
            }
          ],
          speakerNotes: {
            goal: 'Desmitificar cómo funciona un agente por dentro para que los alumnos entiendan cómo dirigirlo.',
            talkingPoints: [
              'Cerebro + Manos + Memoria + Ojos = Agente completo.',
              'Cuando entiendes estas 4 capas, tus instrucciones (prompts) se vuelven 100x más efectivas.'
            ]
          }
        },
        {
          id: 'np-s4',
          sectionId: 'modulo-1',
          slideNumber: 4,
          totalInClass: 5,
          category: '⚡ METODOLOGÍA',
          title: 'El Flujo de Trabajo en 4 Pasos',
          subtitle: 'De la idea al despliegue en producción sin fricción',
          durationMinutes: 8,
          layout: 'timeline',
          timeline: [
            {
              step: '01',
              title: 'Brief & Especificación',
              desc: 'Definir claramente objetivo, público, secciones y propuesta de valor.',
              badge: 'Estrategia'
            },
            {
              step: '02',
              title: 'Plan de Implementación',
              desc: 'El agente crea el plan técnico paso a paso antes de escribir código.',
              badge: 'Arquitectura'
            },
            {
              step: '03',
              title: 'Desarrollo en Pareja',
              desc: 'Construcción iterativa de componentes, diseño CSS y animaciones GSAP.',
              badge: 'Código'
            },
            {
              step: '04',
              title: 'Verificación & Despliegue',
              desc: 'Tests visuales en navegador y deploy instantáneo a Vercel/Netlify.',
              badge: 'Producción'
            }
          ],
          speakerNotes: {
            goal: 'Presentar el método probado para que no se sientan abrumados al iniciar un proyecto.',
            talkingPoints: [
              'Nunca empezar a codificar a ciegas.',
              'Siempre validar el brief y el plan antes de ejecutar.'
            ]
          }
        },
        {
          id: 'np-s5',
          sectionId: 'modulo-1',
          slideNumber: 5,
          totalInClass: 5,
          category: '💎 REGLA DE ORO',
          title: 'La Mentalidad del Creador Moderno',
          subtitle: 'El superpoder no es escribir código rápido, es tener claridad de visión',
          durationMinutes: 5,
          layout: 'quote',
          quote: {
            text: 'En la era de la Inteligencia Artificial, la velocidad de creación ya no es la ventaja competitiva: tu ventaja es la claridad con la que defines el problema y la calidad de tu criterio estético.',
            author: 'Antigravity AI Academy',
            role: 'Desarrollo Ágil con IA'
          },
          speakerNotes: {
            goal: 'Cerrar con broche de oro y dejar un mensaje inspirador para la sesión práctica.',
            talkingPoints: [
              'Cualquiera puede pedirle a una IA que haga una web mediocre.',
              'Nosotros creamos experiencias memorables, veloces y de alta conversión.'
            ]
          }
        }
      ]
    }
  ]
};
