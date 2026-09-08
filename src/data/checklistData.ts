import type { ChecklistCategory } from '../types';

export const CLASE_0_CHECKLIST: ChecklistCategory[] = [
  {
    id: 'equipo',
    title: '💻 Equipo & Entorno Físico',
    icon: 'Laptop',
    description: 'Condiciones de hardware y conectividad mínimas para trabajar con fluidez',
    items: [
      { id: 'laptop', label: 'Laptop o PC de escritorio disponible', required: true, hint: 'Cualquier sistema moderno (Windows, Mac o Linux)' },
      { id: 'internet', label: 'Conexión a Internet estable y fluida', required: true, hint: 'Recomendado > 20 Mbps para descargas y despliegue rápido' },
      { id: 'espacio', label: 'Espacio de almacenamiento suficiente', required: true, hint: 'Al menos 5-10 GB libres para proyectos y entornos' }
    ]
  },
  {
    id: 'ia',
    title: '🤖 Inteligencia Artificial & IDE',
    icon: 'Bot',
    description: 'Tu entorno de desarrollo con agentes autónomos listos',
    items: [
      { id: 'antigravity_install', label: 'Instalar Antigravity IDE', required: true, hint: 'Descargado e instalado en tu sistema' },
      { id: 'antigravity_login', label: 'Iniciar sesión en Antigravity', required: true, hint: 'Tu cuenta conectada y autenticada' },
      { id: 'google_ai_pro', label: 'Tener Google AI Pro activo', required: true, hint: 'Acceso a los modelos más potentes de razonamiento' },
      { id: 'antigravity_test', label: 'Verificar que Antigravity funcione', required: true, hint: 'Hacer una prueba rápida en el chat o terminal' }
    ]
  },
  {
    id: 'cuentas',
    title: '👨‍💻 Cuentas & Servicios Cloud',
    icon: 'Cloud',
    description: 'Tus credenciales para guardar código y publicar en la web mundial',
    items: [
      { id: 'github', label: 'Crear cuenta de GitHub', required: true, hint: 'github.com — Repositorio seguro para tu código fuente' },
      { id: 'vercel', label: 'Crear cuenta de Vercel', required: true, hint: 'vercel.com — Hosting ultrarrápido con SSL automático' },
      { id: 'google_acc', label: 'Tener cuenta de Google', required: true, hint: 'Para vincular servicios y Google Analytics' },
      { id: 'email', label: 'Tener correo electrónico disponible', required: true, hint: 'Para recibir confirmaciones y notificaciones de clientes' }
    ]
  },
  {
    id: 'dominio',
    title: '🌐 Ideas de Dominio',
    icon: 'Globe',
    description: 'Traer 3 posibles nombres de dominio (¡Aún NO comprar!)',
    items: [
      { id: 'dom1', label: 'Dominio Opción #1 (Ej: miempresa.com)', required: true, hint: 'Tu opción ideal número uno' },
      { id: 'dom2', label: 'Dominio Opción #2 (Ej: miempresa.pe / .co)', required: true, hint: 'Alternativa local o con extensión moderna' },
      { id: 'dom3', label: 'Dominio Opción #3 (Ej: soyempresa.app)', required: false, hint: 'Respaldo creativo o con verbo' }
    ]
  },
  {
    id: 'negocio',
    title: '🏢 Información del Negocio',
    icon: 'Briefcase',
    description: 'El contenido que le dará vida y ventas a tu página web',
    items: [
      { id: 'biz_name', label: 'Nombre oficial del negocio o marca', required: true },
      { id: 'biz_logo', label: 'Logo o concepto de identidad gráfica', required: true },
      { id: 'biz_colors', label: 'Colores de la marca (2 o 3 colores clave)', required: true },
      { id: 'biz_services', label: 'Lista de Servicios o Productos principales', required: true },
      { id: 'biz_desc', label: 'Descripción clara de qué problema resuelves', required: true },
      { id: 'biz_whatsapp', label: 'Número de WhatsApp oficial para ventas', required: true },
      { id: 'biz_socials', label: 'Enlaces a Redes Sociales activas', required: false },
      { id: 'biz_address', label: 'Dirección física (si aplica) o ciudad', required: false },
      { id: 'biz_hours', label: 'Horarios de atención al cliente', required: false },
      { id: 'biz_photos', label: 'Fotografías reales del producto/equipo', required: false },
      { id: 'biz_target', label: 'Público objetivo definido (¿Quién te compra?)', required: true }
    ]
  }
];
