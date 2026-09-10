import type { SoftwarePlanData } from '../types';

export type SoftwareCategory = 
  | 'todos'
  | 'salud'
  | 'gastronomia'
  | 'retail'
  | 'servicios'
  | 'educacion'
  | 'deportes';

export interface SoftwareProjectPreset {
  id: string;
  category: SoftwareCategory;
  categoryLabel: string;
  label: string;
  icon: string;
  tag: string;
  description: string;
  planData: SoftwarePlanData;
  architecture: {
    title: string;
    problem: string;
    users: string;
    mvpScope: string;
    screens: string[];
  };
  supabase: {
    tables: string[];
    sqlSnippet: string;
    rlsPolicies: string;
  };
  prompt: {
    headline: string;
    stack: string;
    instructions: string[];
    fullText: string;
  };
}

export const SOFTWARE_PROJECT_PRESETS: SoftwareProjectPreset[] = [
  // 1. GIMNASIOS & CENTROS FITNESS
  {
    id: 'gym',
    category: 'salud',
    categoryLabel: 'Salud & Deporte',
    label: 'Gimnasios & Centros Fitness',
    icon: '🏋️',
    tag: 'Gimnasios, Crossfit & Centros de Entrenamiento',
    description: 'Control de membresías, accesos por código QR, reserva de clases grupales y rutinas de ejercicios.',
    planData: {
      softwareName: 'Sistema de Gestión para Gimnasios & Centros Fitness',
      whatToCreate: 'Plataforma web integral especializada para gimnasios & centros fitness con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: socios, membresias, accesos_qr, clases_grupales, reservas_clases, rutinas, pagos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Gimnasios & Centros Fitness (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/recepcion/acceso-qr","/socio/mi-carnet","/clases/agenda","/admin/cobranzas"]
    },
    supabase: {
      tables: ["socios","membresias","accesos_qr","clases_grupales","reservas_clases","rutinas","pagos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: GIMNASIOS & CENTROS FITNESS
create table if not exists socios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists membresias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists accesos_qr (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clases_grupales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_clases (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutinas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pagos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table socios enable row level security;
alter table membresias enable row level security;
alter table accesos_qr enable row level security;
alter table clases_grupales enable row level security;
alter table reservas_clases enable row level security;
alter table rutinas enable row level security;
alter table pagos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Gimnasios & Centros Fitness',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Gimnasios & Centros Fitness
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para gimnasios & centros fitness:
1. /recepcion/acceso-qr: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /socio/mi-carnet: Gestión interactiva con filtros de búsqueda instantáneos.
3. /clases/agenda: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/cobranzas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 2. ÓPTICAS & SALUD VISUAL
  {
    id: 'opticas',
    category: 'salud',
    categoryLabel: 'Salud & Visión',
    label: 'Ópticas & Salud Visual',
    icon: '👓',
    tag: 'Ópticas & Consultorios de Optometría',
    description: 'Historial de graduación visual, seguimiento de órdenes en taller y recordatorio de cambio de lunas.',
    planData: {
      softwareName: 'Sistema de Gestión para Ópticas & Salud Visual',
      whatToCreate: 'Plataforma web integral especializada para ópticas & salud visual con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes, recetas_optometricas, monturas, ordenes_taller, ventas_optica.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Ópticas & Salud Visual (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/optometria/refraccion","/taller/ordenes-kanban","/catalogo/monturas","/admin/ventas"]
    },
    supabase: {
      tables: ["pacientes","recetas_optometricas","monturas","ordenes_taller","ventas_optica"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ÓPTICAS & SALUD VISUAL
create table if not exists pacientes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetas_optometricas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists monturas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ordenes_taller (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_optica (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes enable row level security;
alter table recetas_optometricas enable row level security;
alter table monturas enable row level security;
alter table ordenes_taller enable row level security;
alter table ventas_optica enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Ópticas & Salud Visual',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Ópticas & Salud Visual
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para ópticas & salud visual:
1. /optometria/refraccion: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /taller/ordenes-kanban: Gestión interactiva con filtros de búsqueda instantáneos.
3. /catalogo/monturas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 3. FISIOTERAPIA & REHABILITACIÓN
  {
    id: 'fisioterapia',
    category: 'salud',
    categoryLabel: 'Salud & Rehabilitación',
    label: 'Fisioterapia & Rehabilitación',
    icon: '🩺',
    tag: 'Fisioterapia, Kinesiología & Terapia Física',
    description: 'Historias clínicas posturales, seguimiento de dolor con escala EVA y planes de ejercicios con videos.',
    planData: {
      softwareName: 'Sistema de Gestión para Fisioterapia & Rehabilitación',
      whatToCreate: 'Plataforma web integral especializada para fisioterapia & rehabilitación con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_fisio, evaluaciones_posturales, escala_dolor_eva, ejercicios_prescritos, sesiones_terapia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Fisioterapia & Rehabilitación (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/evaluacion","/ejercicios/biblioteca","/agenda/box-terapia","/admin/sesiones"]
    },
    supabase: {
      tables: ["pacientes_fisio","evaluaciones_posturales","escala_dolor_eva","ejercicios_prescritos","sesiones_terapia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FISIOTERAPIA & REHABILITACIÓN
create table if not exists pacientes_fisio (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_posturales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists escala_dolor_eva (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ejercicios_prescritos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sesiones_terapia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_fisio enable row level security;
alter table evaluaciones_posturales enable row level security;
alter table escala_dolor_eva enable row level security;
alter table ejercicios_prescritos enable row level security;
alter table sesiones_terapia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Fisioterapia & Rehabilitación',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Fisioterapia & Rehabilitación
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para fisioterapia & rehabilitación:
1. /paciente/[id]/evaluacion: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /ejercicios/biblioteca: Gestión interactiva con filtros de búsqueda instantáneos.
3. /agenda/box-terapia: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/sesiones: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 4. LABORATORIOS CLÍNICOS & ANÁLISIS
  {
    id: 'laboratorios',
    category: 'salud',
    categoryLabel: 'Salud & Diagnóstico',
    label: 'Laboratorios Clínicos & Análisis',
    icon: '🧪',
    tag: 'Laboratorios Clínicos & Toma de Muestras',
    description: 'Portal de descarga de resultados con código seguro, código de barras para tubos y valores de referencia.',
    planData: {
      softwareName: 'Sistema de Gestión para Laboratorios Clínicos & Análisis',
      whatToCreate: 'Plataforma web integral especializada para laboratorios clínicos & análisis con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_lab, ordenes_analisis, resultados_bioquimicos, valores_referencia, muestras_tubos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Laboratorios Clínicos & Análisis (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/resultados/[codigoSeguro]","/laboratorio/ingreso-valores","/recepcion/toma-muestras","/admin/analisis"]
    },
    supabase: {
      tables: ["pacientes_lab","ordenes_analisis","resultados_bioquimicos","valores_referencia","muestras_tubos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: LABORATORIOS CLÍNICOS & ANÁLISIS
create table if not exists pacientes_lab (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ordenes_analisis (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists resultados_bioquimicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists valores_referencia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists muestras_tubos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_lab enable row level security;
alter table ordenes_analisis enable row level security;
alter table resultados_bioquimicos enable row level security;
alter table valores_referencia enable row level security;
alter table muestras_tubos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Laboratorios Clínicos & Análisis',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Laboratorios Clínicos & Análisis
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para laboratorios clínicos & análisis:
1. /resultados/[codigoSeguro]: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /laboratorio/ingreso-valores: Gestión interactiva con filtros de búsqueda instantáneos.
3. /recepcion/toma-muestras: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/analisis: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 5. PSICOLOGÍA & SALUD MENTAL
  {
    id: 'psicologos',
    category: 'salud',
    categoryLabel: 'Salud Mental',
    label: 'Psicología & Salud Mental',
    icon: '🧠',
    tag: 'Consultorios de Psicología & Psicoterapia',
    description: 'Notas de sesión confidenciales, test psicométricos online y sala de videoconsulta cifrada.',
    planData: {
      softwareName: 'Sistema de Gestión para Psicología & Salud Mental',
      whatToCreate: 'Plataforma web integral especializada para psicología & salud mental con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_psico, sesiones_terapeuticas, test_psicometricos, citas_videollamada, pagos_consultas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Psicología & Salud Mental (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/notas-clinicas","/test/evaluacion-ansiedad","/videoconsulta/[salaId]","/agenda/citas"]
    },
    supabase: {
      tables: ["pacientes_psico","sesiones_terapeuticas","test_psicometricos","citas_videollamada","pagos_consultas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PSICOLOGÍA & SALUD MENTAL
create table if not exists pacientes_psico (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sesiones_terapeuticas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists test_psicometricos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_videollamada (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pagos_consultas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_psico enable row level security;
alter table sesiones_terapeuticas enable row level security;
alter table test_psicometricos enable row level security;
alter table citas_videollamada enable row level security;
alter table pagos_consultas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Psicología & Salud Mental',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Psicología & Salud Mental
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para psicología & salud mental:
1. /paciente/[id]/notas-clinicas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /test/evaluacion-ansiedad: Gestión interactiva con filtros de búsqueda instantáneos.
3. /videoconsulta/[salaId]: Módulo de seguimiento y actualización de estados con alertas.
4. /agenda/citas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 6. CLÍNICAS ODONTOLÓGICAS & DENTISTAS
  {
    id: 'dentistas',
    category: 'salud',
    categoryLabel: 'Salud Odontológica',
    label: 'Clínicas Odontológicas & Dentistas',
    icon: '🦷',
    tag: 'Odontología, Ortodoncia & Estética Dental',
    description: 'Odontograma digital interactivo, presupuestos por pieza dental y recordatorios de profilaxis.',
    planData: {
      softwareName: 'Sistema de Gestión para Clínicas Odontológicas & Dentistas',
      whatToCreate: 'Plataforma web integral especializada para clínicas odontológicas & dentistas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_dental, odontogramas, presupuestos_tratamiento, citas_odontologia, historial_evolucion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Clínicas Odontológicas & Dentistas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/odontograma/[pacienteId]","/presupuestos/crear","/agenda/sillones-dentales","/admin/caja"]
    },
    supabase: {
      tables: ["pacientes_dental","odontogramas","presupuestos_tratamiento","citas_odontologia","historial_evolucion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CLÍNICAS ODONTOLÓGICAS & DENTISTAS
create table if not exists pacientes_dental (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists odontogramas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists presupuestos_tratamiento (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_odontologia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists historial_evolucion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_dental enable row level security;
alter table odontogramas enable row level security;
alter table presupuestos_tratamiento enable row level security;
alter table citas_odontologia enable row level security;
alter table historial_evolucion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Clínicas Odontológicas & Dentistas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Clínicas Odontológicas & Dentistas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para clínicas odontológicas & dentistas:
1. /odontograma/[pacienteId]: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /presupuestos/crear: Gestión interactiva con filtros de búsqueda instantáneos.
3. /agenda/sillones-dentales: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 7. CENTROS DE NUTRICIÓN & DIETÉTICA
  {
    id: 'nutricion',
    category: 'salud',
    categoryLabel: 'Salud & Nutrición',
    label: 'Centros de Nutrición & Dietética',
    icon: '🥗',
    tag: 'Consultorios de Nutrición, Dietistas & Planes Alimenticios',
    description: 'Cálculo de macronutrientes, planes de alimentación semanales y registro fotográfico de evolución corporal.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Nutrición & Dietética',
      whatToCreate: 'Plataforma web integral especializada para centros de nutrición & dietética con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_nutricion, evaluaciones_corporales, planes_semanales, recetas_alimentos, fotos_progreso.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Nutrición & Dietética (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pacientes/[id]/evaluacion","/planes/crear-dieta","/paciente/mi-menu","/admin/agenda"]
    },
    supabase: {
      tables: ["pacientes_nutricion","evaluaciones_corporales","planes_semanales","recetas_alimentos","fotos_progreso"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE NUTRICIÓN & DIETÉTICA
create table if not exists pacientes_nutricion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_corporales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists planes_semanales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetas_alimentos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists fotos_progreso (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_nutricion enable row level security;
alter table evaluaciones_corporales enable row level security;
alter table planes_semanales enable row level security;
alter table recetas_alimentos enable row level security;
alter table fotos_progreso enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Nutrición & Dietética',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Nutrición & Dietética
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de nutrición & dietética:
1. /pacientes/[id]/evaluacion: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /planes/crear-dieta: Gestión interactiva con filtros de búsqueda instantáneos.
3. /paciente/mi-menu: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/agenda: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 8. ESTUDIOS DE YOGA & PILATES
  {
    id: 'yoga',
    category: 'salud',
    categoryLabel: 'Salud & Bienestar',
    label: 'Estudios de Yoga & Pilates',
    icon: '🧘',
    tag: 'Estudios de Yoga, Pilates Reformer & Meditación',
    description: 'Reserva de esterillas / reformers, paquetes de clases por créditos y videoteca de sesiones guiadas.',
    planData: {
      softwareName: 'Sistema de Gestión para Estudios de Yoga & Pilates',
      whatToCreate: 'Plataforma web integral especializada para estudios de yoga & pilates con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: practicantes, paquetes_creditos, horarios_clases, reservas_sala, instructores_yoga.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Estudios de Yoga & Pilates (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/estudio/reserva","/mi-perfil/creditos","/admin/horarios","/admin/alumnos"]
    },
    supabase: {
      tables: ["practicantes","paquetes_creditos","horarios_clases","reservas_sala","instructores_yoga"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESTUDIOS DE YOGA & PILATES
create table if not exists practicantes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists paquetes_creditos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists horarios_clases (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_sala (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists instructores_yoga (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table practicantes enable row level security;
alter table paquetes_creditos enable row level security;
alter table horarios_clases enable row level security;
alter table reservas_sala enable row level security;
alter table instructores_yoga enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Estudios de Yoga & Pilates',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Estudios de Yoga & Pilates
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para estudios de yoga & pilates:
1. /estudio/reserva: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /mi-perfil/creditos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /admin/horarios: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/alumnos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 9. SPA & CENTROS DE ESTÉTICA Y MASAJES
  {
    id: 'spa_estetica',
    category: 'salud',
    categoryLabel: 'Salud & Estética',
    label: 'Spa & Centros de Estética y Masajes',
    icon: '💆‍♀️',
    tag: 'Spas, Centros de Relajación & Cosmiatría',
    description: 'Reserva de cabinas de masaje, paquetes de sesiones estéticas e historial de tratamientos en piel.',
    planData: {
      softwareName: 'Sistema de Gestión para Spa & Centros de Estética y Masajes',
      whatToCreate: 'Plataforma web integral especializada para spa & centros de estética y masajes con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: clientes_spa, cabinas_spa, reservas_spa, paquetes_clientes, consentimientos_firmados.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Spa & Centros de Estética y Masajes (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/spa/agenda-cabinas","/cliente/paquetes-sesiones","/consentimiento/[id]","/admin/terapeutas"]
    },
    supabase: {
      tables: ["clientes_spa","cabinas_spa","reservas_spa","paquetes_clientes","consentimientos_firmados"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SPA & CENTROS DE ESTÉTICA Y MASAJES
create table if not exists clientes_spa (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cabinas_spa (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_spa (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists paquetes_clientes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists consentimientos_firmados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table clientes_spa enable row level security;
alter table cabinas_spa enable row level security;
alter table reservas_spa enable row level security;
alter table paquetes_clientes enable row level security;
alter table consentimientos_firmados enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Spa & Centros de Estética y Masajes',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Spa & Centros de Estética y Masajes
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para spa & centros de estética y masajes:
1. /spa/agenda-cabinas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cliente/paquetes-sesiones: Gestión interactiva con filtros de búsqueda instantáneos.
3. /consentimiento/[id]: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/terapeutas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 10. FARMACIAS & BOTICAS DE BARRIO
  {
    id: 'farmacias',
    category: 'salud',
    categoryLabel: 'Salud & Medicamentos',
    label: 'Farmacias & Boticas de Barrio',
    icon: '💊',
    tag: 'Farmacias, Boticas & Droguerías',
    description: 'Control de lotes con fecha de vencimiento, búsqueda por principio activo y recetas médicas retenidas.',
    planData: {
      softwareName: 'Sistema de Gestión para Farmacias & Boticas de Barrio',
      whatToCreate: 'Plataforma web integral especializada para farmacias & boticas de barrio con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: medicamentos, lotes_stock, recetas_retenidas, ventas_farmacia, laboratorios_proveedores.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Farmacias & Boticas de Barrio (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/mostrador","/inventario/lotes-vencimiento","/recetas-retenidas","/admin/reportes"]
    },
    supabase: {
      tables: ["medicamentos","lotes_stock","recetas_retenidas","ventas_farmacia","laboratorios_proveedores"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FARMACIAS & BOTICAS DE BARRIO
create table if not exists medicamentos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists lotes_stock (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetas_retenidas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_farmacia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists laboratorios_proveedores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table medicamentos enable row level security;
alter table lotes_stock enable row level security;
alter table recetas_retenidas enable row level security;
alter table ventas_farmacia enable row level security;
alter table laboratorios_proveedores enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Farmacias & Boticas de Barrio',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Farmacias & Boticas de Barrio
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para farmacias & boticas de barrio:
1. /pos/mostrador: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /inventario/lotes-vencimiento: Gestión interactiva con filtros de búsqueda instantáneos.
3. /recetas-retenidas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/reportes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 11. CLÍNICAS PEDIÁTRICAS & CONTROL INFANTIL
  {
    id: 'pediatria',
    category: 'salud',
    categoryLabel: 'Salud Infantil',
    label: 'Clínicas Pediátricas & Control Infantil',
    icon: '👶',
    tag: 'Pediatría, Neonatología & Control de Crecimiento',
    description: 'Curvas de crecimiento OMS (peso/talla), calendario vacunal y recetas pediátricas con dosis por kilo.',
    planData: {
      softwareName: 'Sistema de Gestión para Clínicas Pediátricas & Control Infantil',
      whatToCreate: 'Plataforma web integral especializada para clínicas pediátricas & control infantil con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_ninos, controles_mensuales, vacunas_aplicadas, recetas_pediatricas, tutores_contacto.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Clínicas Pediátricas & Control Infantil (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/percentiles","/calculadora-dosis","/carnet-vacunacion","/portal-padres"]
    },
    supabase: {
      tables: ["pacientes_ninos","controles_mensuales","vacunas_aplicadas","recetas_pediatricas","tutores_contacto"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CLÍNICAS PEDIÁTRICAS & CONTROL INFANTIL
create table if not exists pacientes_ninos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists controles_mensuales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists vacunas_aplicadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetas_pediatricas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tutores_contacto (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_ninos enable row level security;
alter table controles_mensuales enable row level security;
alter table vacunas_aplicadas enable row level security;
alter table recetas_pediatricas enable row level security;
alter table tutores_contacto enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Clínicas Pediátricas & Control Infantil',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Clínicas Pediátricas & Control Infantil
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para clínicas pediátricas & control infantil:
1. /paciente/[id]/percentiles: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /calculadora-dosis: Gestión interactiva con filtros de búsqueda instantáneos.
3. /carnet-vacunacion: Módulo de seguimiento y actualización de estados con alertas.
4. /portal-padres: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 12. CENTROS DERMATOLÓGICOS & CUIDADO DE PIEL
  {
    id: 'dermatologia',
    category: 'salud',
    categoryLabel: 'Salud & Dermatología',
    label: 'Centros Dermatológicos & Cuidado de Piel',
    icon: '✨',
    tag: 'Dermatología Clínica, Láser & Cuidado Cutáneo',
    description: 'Mapeo corporal de lunares y manchas, evolución fotográfica de acné y seguimiento de rutinas de skincare.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros Dermatológicos & Cuidado de Piel',
      whatToCreate: 'Plataforma web integral especializada para centros dermatológicos & cuidado de piel con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_dermato, lesiones_corporales, fotos_lesiones, rutinas_prescritas, procedimientos_laser.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros Dermatológicos & Cuidado de Piel (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/mapa-corporal","/comparador-fotos","/skincare/receta","/admin/citas"]
    },
    supabase: {
      tables: ["pacientes_dermato","lesiones_corporales","fotos_lesiones","rutinas_prescritas","procedimientos_laser"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DERMATOLÓGICOS & CUIDADO DE PIEL
create table if not exists pacientes_dermato (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists lesiones_corporales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists fotos_lesiones (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutinas_prescritas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists procedimientos_laser (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_dermato enable row level security;
alter table lesiones_corporales enable row level security;
alter table fotos_lesiones enable row level security;
alter table rutinas_prescritas enable row level security;
alter table procedimientos_laser enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros Dermatológicos & Cuidado de Piel',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros Dermatológicos & Cuidado de Piel
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros dermatológicos & cuidado de piel:
1. /paciente/[id]/mapa-corporal: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /comparador-fotos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /skincare/receta: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/citas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 13. CENTROS DE PODOLOGÍA & CUIDADO DEL PIE
  {
    id: 'podologia',
    category: 'salud',
    categoryLabel: 'Salud & Podología',
    label: 'Centros de Podología & Cuidado del Pie',
    icon: '🦶',
    tag: 'Podología Clínica, Pie Diabético & Ortopedia',
    description: 'Ficha podológica de uñas y pisada, control preventivo de pie diabético y citas de profilaxis.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Podología & Cuidado del Pie',
      whatToCreate: 'Plataforma web integral especializada para centros de podología & cuidado del pie con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_podologia, fichas_podologicas, citas_podologia, evaluaciones_diabeticas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Podología & Cuidado del Pie (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/ficha-pie","/pie-diabetico/protocolo","/agenda/profilaxis","/admin/tratamientos"]
    },
    supabase: {
      tables: ["pacientes_podologia","fichas_podologicas","citas_podologia","evaluaciones_diabeticas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE PODOLOGÍA & CUIDADO DEL PIE
create table if not exists pacientes_podologia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists fichas_podologicas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_podologia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_diabeticas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_podologia enable row level security;
alter table fichas_podologicas enable row level security;
alter table citas_podologia enable row level security;
alter table evaluaciones_diabeticas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Podología & Cuidado del Pie',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Podología & Cuidado del Pie
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de podología & cuidado del pie:
1. /paciente/[id]/ficha-pie: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pie-diabetico/protocolo: Gestión interactiva con filtros de búsqueda instantáneos.
3. /agenda/profilaxis: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/tratamientos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 14. CENTROS DE QUIROPRÁCTICA & ALINEACIÓN
  {
    id: 'quiropractica',
    category: 'salud',
    categoryLabel: 'Salud & Columna',
    label: 'Centros de Quiropráctica & Alineación',
    icon: '🦴',
    tag: 'Quiropráctica, Salud Vertebral & Ajustes',
    description: 'Mapeo de vértebras y subluxaciones, paquetes de ajustes de columna y radiografías digitales.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Quiropráctica & Alineación',
      whatToCreate: 'Plataforma web integral especializada para centros de quiropráctica & alineación con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_quiro, subluxaciones_columna, sesiones_ajustes, radiografias_digitales.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Quiropráctica & Alineación (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/paciente/[id]/columna","/radiografias/visor","/paquetes/ajustes","/admin/pacientes"]
    },
    supabase: {
      tables: ["pacientes_quiro","subluxaciones_columna","sesiones_ajustes","radiografias_digitales"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE QUIROPRÁCTICA & ALINEACIÓN
create table if not exists pacientes_quiro (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists subluxaciones_columna (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sesiones_ajustes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists radiografias_digitales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_quiro enable row level security;
alter table subluxaciones_columna enable row level security;
alter table sesiones_ajustes enable row level security;
alter table radiografias_digitales enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Quiropráctica & Alineación',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Quiropráctica & Alineación
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de quiropráctica & alineación:
1. /paciente/[id]/columna: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /radiografias/visor: Gestión interactiva con filtros de búsqueda instantáneos.
3. /paquetes/ajustes: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/pacientes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 15. FONOAUDIOLOGÍA & TERAPIA DEL LENGUAJE
  {
    id: 'fonoaudiologia',
    category: 'salud',
    categoryLabel: 'Salud & Terapia',
    label: 'Fonoaudiología & Terapia del Lenguaje',
    icon: '🗣️',
    tag: 'Fonoaudiología, Terapia del Lenguaje & Fonoaudiólogos',
    description: 'Evaluación de fonemas y articulación, grabaciones de voz de progreso y ejercicios para casa.',
    planData: {
      softwareName: 'Sistema de Gestión para Fonoaudiología & Terapia del Lenguaje',
      whatToCreate: 'Plataforma web integral especializada para fonoaudiología & terapia del lenguaje con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_fono, evaluaciones_fonemas, muestras_audio, tareas_casa, informes_evolucion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Fonoaudiología & Terapia del Lenguaje (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/evaluacion-fonetica","/audios/[pacienteId]","/actividades-casa","/informe-evolucion"]
    },
    supabase: {
      tables: ["pacientes_fono","evaluaciones_fonemas","muestras_audio","tareas_casa","informes_evolucion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FONOAUDIOLOGÍA & TERAPIA DEL LENGUAJE
create table if not exists pacientes_fono (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_fonemas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists muestras_audio (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tareas_casa (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists informes_evolucion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_fono enable row level security;
alter table evaluaciones_fonemas enable row level security;
alter table muestras_audio enable row level security;
alter table tareas_casa enable row level security;
alter table informes_evolucion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Fonoaudiología & Terapia del Lenguaje',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Fonoaudiología & Terapia del Lenguaje
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para fonoaudiología & terapia del lenguaje:
1. /evaluacion-fonetica: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /audios/[pacienteId]: Gestión interactiva con filtros de búsqueda instantáneos.
3. /actividades-casa: Módulo de seguimiento y actualización de estados con alertas.
4. /informe-evolucion: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 16. CENTROS DE VACUNACIÓN & INMUNIZACIONES
  {
    id: 'vacunacion',
    category: 'salud',
    categoryLabel: 'Salud Preventiva',
    label: 'Centros de Vacunación & Inmunizaciones',
    icon: '💉',
    tag: 'Centros de Vacunación Internacional & Pediátrica',
    description: 'Registro de lotes de biológicos, control de cadena de frío y emisión de certificados internacionales.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Vacunación & Inmunizaciones',
      whatToCreate: 'Plataforma web integral especializada para centros de vacunación & inmunizaciones con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_vacunacion, lotes_biologicos, temperatura_termos, certificados_viaje, citas_dosis.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Vacunación & Inmunizaciones (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/vacunacion/registro","/cadena-frio/temperaturas","/certificados/emitir","/admin/stock-biologicos"]
    },
    supabase: {
      tables: ["pacientes_vacunacion","lotes_biologicos","temperatura_termos","certificados_viaje","citas_dosis"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE VACUNACIÓN & INMUNIZACIONES
create table if not exists pacientes_vacunacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists lotes_biologicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists temperatura_termos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists certificados_viaje (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_dosis (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_vacunacion enable row level security;
alter table lotes_biologicos enable row level security;
alter table temperatura_termos enable row level security;
alter table certificados_viaje enable row level security;
alter table citas_dosis enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Vacunación & Inmunizaciones',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Vacunación & Inmunizaciones
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de vacunación & inmunizaciones:
1. /vacunacion/registro: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cadena-frio/temperaturas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /certificados/emitir: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock-biologicos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 17. TERAPIA OCUPACIONAL & ESTIMULACIÓN
  {
    id: 'terapia_ocupacional',
    category: 'salud',
    categoryLabel: 'Terapia & Neurodesarrollo',
    label: 'Terapia Ocupacional & Estimulación',
    icon: '🧩',
    tag: 'Terapia Ocupacional, Integración Sensorial & Neurodesarrollo',
    description: 'Perfiles de procesamiento sensorial, registro de hitos motores y guías de adaptación escolar.',
    planData: {
      softwareName: 'Sistema de Gestión para Terapia Ocupacional & Estimulación',
      whatToCreate: 'Plataforma web integral especializada para terapia ocupacional & estimulación con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: ninos_terapia, perfiles_sensoriales, hitos_motores, adaptaciones_escolares, sesiones_terapia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Terapia Ocupacional & Estimulación (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/evaluacion/perfil-sensorial","/hitos/progreso","/guias/colegio","/admin/terapeutas"]
    },
    supabase: {
      tables: ["ninos_terapia","perfiles_sensoriales","hitos_motores","adaptaciones_escolares","sesiones_terapia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TERAPIA OCUPACIONAL & ESTIMULACIÓN
create table if not exists ninos_terapia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists perfiles_sensoriales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists hitos_motores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists adaptaciones_escolares (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sesiones_terapia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table ninos_terapia enable row level security;
alter table perfiles_sensoriales enable row level security;
alter table hitos_motores enable row level security;
alter table adaptaciones_escolares enable row level security;
alter table sesiones_terapia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Terapia Ocupacional & Estimulación',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Terapia Ocupacional & Estimulación
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para terapia ocupacional & estimulación:
1. /evaluacion/perfil-sensorial: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /hitos/progreso: Gestión interactiva con filtros de búsqueda instantáneos.
3. /guias/colegio: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/terapeutas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 18. CONSULTORIOS DE GINECOLOGÍA & MATERNIDAD
  {
    id: 'ginecologia',
    category: 'salud',
    categoryLabel: 'Salud Femenina',
    label: 'Consultorios de Ginecología & Maternidad',
    icon: '🌸',
    tag: 'Ginecología, Obstetricia & Control Prenatal',
    description: 'Carnet prenatal con fecha probable de parto, ecografías obstétricas y calendario de controles.',
    planData: {
      softwareName: 'Sistema de Gestión para Consultorios de Ginecología & Maternidad',
      whatToCreate: 'Plataforma web integral especializada para consultorios de ginecología & maternidad con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pacientes_ginecologia, embarazos_controles, ecografias_archivos, papanicolau_resultados.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Consultorios de Ginecología & Maternidad (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/embarazo/carnet-prenatal","/ecografias/galeria","/controles/agenda","/admin/pacientes"]
    },
    supabase: {
      tables: ["pacientes_ginecologia","embarazos_controles","ecografias_archivos","papanicolau_resultados"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CONSULTORIOS DE GINECOLOGÍA & MATERNIDAD
create table if not exists pacientes_ginecologia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists embarazos_controles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ecografias_archivos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists papanicolau_resultados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pacientes_ginecologia enable row level security;
alter table embarazos_controles enable row level security;
alter table ecografias_archivos enable row level security;
alter table papanicolau_resultados enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Consultorios de Ginecología & Maternidad',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Consultorios de Ginecología & Maternidad
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para consultorios de ginecología & maternidad:
1. /embarazo/carnet-prenatal: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /ecografias/galeria: Gestión interactiva con filtros de búsqueda instantáneos.
3. /controles/agenda: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/pacientes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 19. RESTOBARES & BARES
  {
    id: 'restobares',
    category: 'gastronomia',
    categoryLabel: 'Gastronomía & Bares',
    label: 'Restobares & Bares',
    icon: '🍸',
    tag: 'Restobares, Bares, Discotecas & Pubs',
    description: 'Comandas digitales a barra y cocina, división de cuentas entre amigos y control de botellas por onzas.',
    planData: {
      softwareName: 'Sistema de Gestión para Restobares & Bares',
      whatToCreate: 'Plataforma web integral especializada para restobares & bares con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: mesas_restobar, pedidos_comandas, barra_tragos, cuentas_divididas, descuento_botellas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Restobares & Bares (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/mesas/mapa-vivo","/barra/pantalla-tragos","/cocina/pantalla-pedidos","/cuenta/dividir-pago"]
    },
    supabase: {
      tables: ["mesas_restobar","pedidos_comandas","barra_tragos","cuentas_divididas","descuento_botellas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: RESTOBARES & BARES
create table if not exists mesas_restobar (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_comandas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists barra_tragos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cuentas_divididas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists descuento_botellas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table mesas_restobar enable row level security;
alter table pedidos_comandas enable row level security;
alter table barra_tragos enable row level security;
alter table cuentas_divididas enable row level security;
alter table descuento_botellas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Restobares & Bares',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Restobares & Bares
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para restobares & bares:
1. /mesas/mapa-vivo: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /barra/pantalla-tragos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cocina/pantalla-pedidos: Módulo de seguimiento y actualización de estados con alertas.
4. /cuenta/dividir-pago: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 20. CAFETERÍAS DE ESPECIALIDAD
  {
    id: 'cafeteria',
    category: 'gastronomia',
    categoryLabel: 'Café & Pastelería',
    label: 'Cafeterías de Especialidad',
    icon: '☕',
    tag: 'Cafeterías de Especialidad, Tostadurías & Coffee Shops',
    description: 'Punto de venta táctil rápido, personalización de bebidas (tipo de leche, endulzante) y fidelización.',
    planData: {
      softwareName: 'Sistema de Gestión para Cafeterías de Especialidad',
      whatToCreate: 'Plataforma web integral especializada para cafeterías de especialidad con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: productos_cafe, modificadores_leche, ventas_pos, clientes_fidelidad, recetas_granos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Cafeterías de Especialidad (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/caja-rapida","/comandas/barista","/fidelidad/puntos","/inventario/granos-cafe"]
    },
    supabase: {
      tables: ["productos_cafe","modificadores_leche","ventas_pos","clientes_fidelidad","recetas_granos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CAFETERÍAS DE ESPECIALIDAD
create table if not exists productos_cafe (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists modificadores_leche (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_pos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_fidelidad (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetas_granos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table productos_cafe enable row level security;
alter table modificadores_leche enable row level security;
alter table ventas_pos enable row level security;
alter table clientes_fidelidad enable row level security;
alter table recetas_granos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Cafeterías de Especialidad',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Cafeterías de Especialidad
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para cafeterías de especialidad:
1. /pos/caja-rapida: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /comandas/barista: Gestión interactiva con filtros de búsqueda instantáneos.
3. /fidelidad/puntos: Módulo de seguimiento y actualización de estados con alertas.
4. /inventario/granos-cafe: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 21. PANADERÍAS & PASTELERÍAS
  {
    id: 'panaderia',
    category: 'gastronomia',
    categoryLabel: 'Panadería & Pastelería',
    label: 'Panaderías & Pastelerías',
    icon: '🥐',
    tag: 'Panaderías, Pastelerías & Repostería Fina',
    description: 'Planificación de horneadas diarias, cálculo de harina/mantequilla y pedidos de tortas personalizadas.',
    planData: {
      softwareName: 'Sistema de Gestión para Panaderías & Pastelerías',
      whatToCreate: 'Plataforma web integral especializada para panaderías & pastelerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: recetas_panaderia, horneadas_diarias, insumos_harina, pedidos_tortas_personalizadas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Panaderías & Pastelerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/produccion/horneadas","/tortas/pedidos-personalizados","/insumos/recetas-costos","/pos/mostrador"]
    },
    supabase: {
      tables: ["recetas_panaderia","horneadas_diarias","insumos_harina","pedidos_tortas_personalizadas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PANADERÍAS & PASTELERÍAS
create table if not exists recetas_panaderia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists horneadas_diarias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists insumos_harina (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_tortas_personalizadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table recetas_panaderia enable row level security;
alter table horneadas_diarias enable row level security;
alter table insumos_harina enable row level security;
alter table pedidos_tortas_personalizadas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Panaderías & Pastelerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Panaderías & Pastelerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para panaderías & pastelerías:
1. /produccion/horneadas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /tortas/pedidos-personalizados: Gestión interactiva con filtros de búsqueda instantáneos.
3. /insumos/recetas-costos: Módulo de seguimiento y actualización de estados con alertas.
4. /pos/mostrador: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 22. PIZZERÍAS & COMIDA RÁPIDA
  {
    id: 'pizzerias',
    category: 'gastronomia',
    categoryLabel: 'Comida Rápida',
    label: 'Pizzerías & Comida Rápida',
    icon: '🍕',
    tag: 'Pizzerías, Hamburgueserías & Fast Food',
    description: 'Armador de pizzas mitad y mitad, pantalla de horno/cocina KDS y despachos a repartidores.',
    planData: {
      softwareName: 'Sistema de Gestión para Pizzerías & Comida Rápida',
      whatToCreate: 'Plataforma web integral especializada para pizzerías & comida rápida con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pizzas_tamanos, ingredientes_toppings, pedidos_kds, repartidores_delivery.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Pizzerías & Comida Rápida (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/crear-pizza/mitades","/cocina/kds-pantalla","/delivery/despacho-motorizados","/admin/caja"]
    },
    supabase: {
      tables: ["pizzas_tamanos","ingredientes_toppings","pedidos_kds","repartidores_delivery"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PIZZERÍAS & COMIDA RÁPIDA
create table if not exists pizzas_tamanos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ingredientes_toppings (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_kds (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists repartidores_delivery (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pizzas_tamanos enable row level security;
alter table ingredientes_toppings enable row level security;
alter table pedidos_kds enable row level security;
alter table repartidores_delivery enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Pizzerías & Comida Rápida',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Pizzerías & Comida Rápida
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para pizzerías & comida rápida:
1. /crear-pizza/mitades: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cocina/kds-pantalla: Gestión interactiva con filtros de búsqueda instantáneos.
3. /delivery/despacho-motorizados: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 23. CARNICERÍAS & CORTES ESPECIALES
  {
    id: 'carnicerias',
    category: 'gastronomia',
    categoryLabel: 'Alimentos & Carnes',
    label: 'Carnicerías & Cortes Especiales',
    icon: '🥩',
    tag: 'Carnicerías, Cortes Finos & Distribuidoras Cárnicas',
    description: 'Venta por peso exacto con balanza, control de mermas de desposte y pedidos mayoristas a restaurantes.',
    planData: {
      softwareName: 'Sistema de Gestión para Carnicerías & Cortes Especiales',
      whatToCreate: 'Plataforma web integral especializada para carnicerías & cortes especiales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: cortes_carne, despostes_lotes, ventas_items_peso, pedidos_restaurantes.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Carnicerías & Cortes Especiales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/mostrador-peso","/desposte/rendimiento","/inventario/cortes-frios","/mayoristas/pedidos"]
    },
    supabase: {
      tables: ["cortes_carne","despostes_lotes","ventas_items_peso","pedidos_restaurantes"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CARNICERÍAS & CORTES ESPECIALES
create table if not exists cortes_carne (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists despostes_lotes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_items_peso (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_restaurantes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table cortes_carne enable row level security;
alter table despostes_lotes enable row level security;
alter table ventas_items_peso enable row level security;
alter table pedidos_restaurantes enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Carnicerías & Cortes Especiales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Carnicerías & Cortes Especiales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para carnicerías & cortes especiales:
1. /pos/mostrador-peso: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /desposte/rendimiento: Gestión interactiva con filtros de búsqueda instantáneos.
3. /inventario/cortes-frios: Módulo de seguimiento y actualización de estados con alertas.
4. /mayoristas/pedidos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 24. CEVICHERÍAS & MARISQUERÍAS
  {
    id: 'cevicherias',
    category: 'gastronomia',
    categoryLabel: 'Mariscos & Comida Marina',
    label: 'Cevicherías & Marisquerías',
    icon: '🐟',
    tag: 'Cevicherías, Marisquerías & Comida Marina',
    description: 'Comandas de pescados frescos del día, nivel de picante/ají personalizado y control de pesca fresca.',
    planData: {
      softwareName: 'Sistema de Gestión para Cevicherías & Marisquerías',
      whatToCreate: 'Plataforma web integral especializada para cevicherías & marisquerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: platos_marinos, pesca_del_dia, comandas_ceviche, mesas_salon, proveedores_pescadores.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Cevicherías & Marisquerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/mesas/salon","/cocina/comandas-marinas","/pesca-del-dia/ajuste-precios","/caja/arqueo"]
    },
    supabase: {
      tables: ["platos_marinos","pesca_del_dia","comandas_ceviche","mesas_salon","proveedores_pescadores"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CEVICHERÍAS & MARISQUERÍAS
create table if not exists platos_marinos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pesca_del_dia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comandas_ceviche (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists mesas_salon (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists proveedores_pescadores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table platos_marinos enable row level security;
alter table pesca_del_dia enable row level security;
alter table comandas_ceviche enable row level security;
alter table mesas_salon enable row level security;
alter table proveedores_pescadores enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Cevicherías & Marisquerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Cevicherías & Marisquerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para cevicherías & marisquerías:
1. /mesas/salon: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cocina/comandas-marinas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pesca-del-dia/ajuste-precios: Módulo de seguimiento y actualización de estados con alertas.
4. /caja/arqueo: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 25. POLLERÍAS & BRASAS
  {
    id: 'pollerias',
    category: 'gastronomia',
    categoryLabel: 'Pollos & Brasas',
    label: 'Pollerías & Brasas',
    icon: '🍗',
    tag: 'Pollerías a la Brasa & Broaster',
    description: 'Control de pollos en horno vs despachados, guarniciones (papas, ensalada) y ruteo masivo de delivery.',
    planData: {
      softwareName: 'Sistema de Gestión para Pollerías & Brasas',
      whatToCreate: 'Plataforma web integral especializada para pollerías & brasas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pollos_horno, guarniciones_combos, pedidos_delivery, mesas_polleria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Pollerías & Brasas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/horno/control-pollos","/delivery/mapa-motorizados","/pos/mostrador","/admin/reportes"]
    },
    supabase: {
      tables: ["pollos_horno","guarniciones_combos","pedidos_delivery","mesas_polleria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: POLLERÍAS & BRASAS
create table if not exists pollos_horno (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists guarniciones_combos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_delivery (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists mesas_polleria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pollos_horno enable row level security;
alter table guarniciones_combos enable row level security;
alter table pedidos_delivery enable row level security;
alter table mesas_polleria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Pollerías & Brasas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Pollerías & Brasas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para pollerías & brasas:
1. /horno/control-pollos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /delivery/mapa-motorizados: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/mostrador: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/reportes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 26. HELADERÍAS ARTESANALES
  {
    id: 'heladerias',
    category: 'gastronomia',
    categoryLabel: 'Postres & Helados',
    label: 'Heladerías Artesanales',
    icon: '🍨',
    tag: 'Heladerías Artesanales & Paleterías',
    description: 'Control de cubetas por sabor, combinaciones en copas/conos y pedidos de potes de litro para llevar.',
    planData: {
      softwareName: 'Sistema de Gestión para Heladerías Artesanales',
      whatToCreate: 'Plataforma web integral especializada para heladerías artesanales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: sabores_helado, cubetas_stock, presentaciones_conos, ventas_mostrador.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Heladerías Artesanales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/sabores-toppings","/cubetas/rotacion-stock","/delivery/potes-litro","/admin/ventas"]
    },
    supabase: {
      tables: ["sabores_helado","cubetas_stock","presentaciones_conos","ventas_mostrador"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: HELADERÍAS ARTESANALES
create table if not exists sabores_helado (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cubetas_stock (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists presentaciones_conos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_mostrador (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table sabores_helado enable row level security;
alter table cubetas_stock enable row level security;
alter table presentaciones_conos enable row level security;
alter table ventas_mostrador enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Heladerías Artesanales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Heladerías Artesanales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para heladerías artesanales:
1. /pos/sabores-toppings: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cubetas/rotacion-stock: Gestión interactiva con filtros de búsqueda instantáneos.
3. /delivery/potes-litro: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 27. FOOD TRUCKS & PUESTOS MÓVILES
  {
    id: 'foodtrucks',
    category: 'gastronomia',
    categoryLabel: 'Food Trucks',
    label: 'Food Trucks & Puestos Móviles',
    icon: '🚚',
    tag: 'Food Trucks, Carritos Gourmet & Ferias',
    description: 'Punto de venta ultrarrápido offline-first, buzzer/aviso de pedido listo por SMS y stock limitado.',
    planData: {
      softwareName: 'Sistema de Gestión para Food Trucks & Puestos Móviles',
      whatToCreate: 'Plataforma web integral especializada para food trucks & puestos móviles con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: menu_reducido, pedidos_turnos, sms_avisos_listo, ventas_feria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Food Trucks & Puestos Móviles (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/express-touch","/pedidos/aviso-cliente","/cierre/arqueo-turno","/admin/menu"]
    },
    supabase: {
      tables: ["menu_reducido","pedidos_turnos","sms_avisos_listo","ventas_feria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FOOD TRUCKS & PUESTOS MÓVILES
create table if not exists menu_reducido (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_turnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sms_avisos_listo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_feria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table menu_reducido enable row level security;
alter table pedidos_turnos enable row level security;
alter table sms_avisos_listo enable row level security;
alter table ventas_feria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Food Trucks & Puestos Móviles',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Food Trucks & Puestos Móviles
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para food trucks & puestos móviles:
1. /pos/express-touch: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pedidos/aviso-cliente: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cierre/arqueo-turno: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/menu: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 28. CERVECERÍAS ARTESANALES & TAPROOMS
  {
    id: 'cervecerias',
    category: 'gastronomia',
    categoryLabel: 'Cerveza & Taprooms',
    label: 'Cervecerías Artesanales & Taprooms',
    icon: '🍺',
    tag: 'Cervecerías Artesanales, Taprooms & Bares de Barril',
    description: 'Pizarrón digital de barriles (Taps) con IBU/ABV, litros restantes por barril y recarga de growlers.',
    planData: {
      softwareName: 'Sistema de Gestión para Cervecerías Artesanales & Taprooms',
      whatToCreate: 'Plataforma web integral especializada para cervecerías artesanales & taprooms con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: taps_barriles, estilos_cerveza, litros_consumidos, growlers_recargas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Cervecerías Artesanales & Taprooms (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/taproom/pizarra-taps","/barriles/monitoreo-litros","/pos/pintas-growlers","/admin/lotes"]
    },
    supabase: {
      tables: ["taps_barriles","estilos_cerveza","litros_consumidos","growlers_recargas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CERVECERÍAS ARTESANALES & TAPROOMS
create table if not exists taps_barriles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estilos_cerveza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists litros_consumidos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists growlers_recargas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table taps_barriles enable row level security;
alter table estilos_cerveza enable row level security;
alter table litros_consumidos enable row level security;
alter table growlers_recargas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Cervecerías Artesanales & Taprooms',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Cervecerías Artesanales & Taprooms
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para cervecerías artesanales & taprooms:
1. /taproom/pizarra-taps: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /barriles/monitoreo-litros: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/pintas-growlers: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/lotes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 29. SERVICIOS DE CATERING & BANQUETES
  {
    id: 'catering',
    category: 'gastronomia',
    categoryLabel: 'Eventos & Catering',
    label: 'Servicios de Catering & Banquetes',
    icon: '🥂',
    tag: 'Catering, Banquetes, Buffets & Eventos Corporativos',
    description: 'Cotizador por número de comensales, checklist de menaje/cubiertos e itinerario de servicio.',
    planData: {
      softwareName: 'Sistema de Gestión para Servicios de Catering & Banquetes',
      whatToCreate: 'Plataforma web integral especializada para servicios de catering & banquetes con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: eventos_catering, menus_opciones, menaje_inventario, personal_mozos_cocineros.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Servicios de Catering & Banquetes (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/cotizador/por-comensal","/checklist/menaje-almacen","/cronograma/servicio-evento","/admin/contratos"]
    },
    supabase: {
      tables: ["eventos_catering","menus_opciones","menaje_inventario","personal_mozos_cocineros"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SERVICIOS DE CATERING & BANQUETES
create table if not exists eventos_catering (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists menus_opciones (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists menaje_inventario (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists personal_mozos_cocineros (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table eventos_catering enable row level security;
alter table menus_opciones enable row level security;
alter table menaje_inventario enable row level security;
alter table personal_mozos_cocineros enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Servicios de Catering & Banquetes',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Servicios de Catering & Banquetes
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para servicios de catering & banquetes:
1. /cotizador/por-comensal: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /checklist/menaje-almacen: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cronograma/servicio-evento: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 30. RESTAURANTES DE SUSHI & COMIDA NIKKEI
  {
    id: 'sushi',
    category: 'gastronomia',
    categoryLabel: 'Comida Oriental',
    label: 'Restaurantes de Sushi & Comida Nikkei',
    icon: '🍣',
    tag: 'Sushi Bars, Cocina Nikkei & Japonesa',
    description: 'Comandas de makis por piezas/tablas, alérgenos (pescado crudo, sésamo) y combos all you can eat.',
    planData: {
      softwareName: 'Sistema de Gestión para Restaurantes de Sushi & Comida Nikkei',
      whatToCreate: 'Plataforma web integral especializada para restaurantes de sushi & comida nikkei con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: rolls_makis, tablas_combinadas, comandas_sushibar, all_you_can_eat_rondas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Restaurantes de Sushi & Comida Nikkei (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/sushibar/pantalla-itamae","/mesas/comandas-makis","/promos/all-you-can-eat","/admin/caja"]
    },
    supabase: {
      tables: ["rolls_makis","tablas_combinadas","comandas_sushibar","all_you_can_eat_rondas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: RESTAURANTES DE SUSHI & COMIDA NIKKEI
create table if not exists rolls_makis (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tablas_combinadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comandas_sushibar (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists all_you_can_eat_rondas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table rolls_makis enable row level security;
alter table tablas_combinadas enable row level security;
alter table comandas_sushibar enable row level security;
alter table all_you_can_eat_rondas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Restaurantes de Sushi & Comida Nikkei',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Restaurantes de Sushi & Comida Nikkei
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para restaurantes de sushi & comida nikkei:
1. /sushibar/pantalla-itamae: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /mesas/comandas-makis: Gestión interactiva con filtros de búsqueda instantáneos.
3. /promos/all-you-can-eat: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 31. DARK KITCHENS & COCINAS VIRTUALES
  {
    id: 'dark_kitchens',
    category: 'gastronomia',
    categoryLabel: 'Cocinas Ocultas',
    label: 'Dark Kitchens & Cocinas Virtuales',
    icon: '🥡',
    tag: 'Dark Kitchens, Marcas Virtuales & Multi-Restaurante',
    description: 'Unificación de pedidos de múltiples marcas en una sola pantalla de cocina e insumos compartidos.',
    planData: {
      softwareName: 'Sistema de Gestión para Dark Kitchens & Cocinas Virtuales',
      whatToCreate: 'Plataforma web integral especializada para dark kitchens & cocinas virtuales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: marcas_virtuales, pedidos_unificados, kds_estaciones, insumos_central.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Dark Kitchens & Cocinas Virtuales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/cocina/kds-multimarca","/pedidos/consolidado-apps","/almacen/insumos-compartidos","/admin/metricas"]
    },
    supabase: {
      tables: ["marcas_virtuales","pedidos_unificados","kds_estaciones","insumos_central"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: DARK KITCHENS & COCINAS VIRTUALES
create table if not exists marcas_virtuales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_unificados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists kds_estaciones (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists insumos_central (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table marcas_virtuales enable row level security;
alter table pedidos_unificados enable row level security;
alter table kds_estaciones enable row level security;
alter table insumos_central enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Dark Kitchens & Cocinas Virtuales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Dark Kitchens & Cocinas Virtuales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para dark kitchens & cocinas virtuales:
1. /cocina/kds-multimarca: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pedidos/consolidado-apps: Gestión interactiva con filtros de búsqueda instantáneos.
3. /almacen/insumos-compartidos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/metricas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 32. SANDWICHERÍAS & JUGUERÍAS
  {
    id: 'sandwicherias',
    category: 'gastronomia',
    categoryLabel: 'Sandwiches & Jugos',
    label: 'Sandwicherías & Juguerías',
    icon: '🥪',
    tag: 'Sandwicherías, Sangucherías & Fuentes de Soda',
    description: 'Personalización de panes, salsas y cremas, preparación de jugos naturales y despacho veloz.',
    planData: {
      softwareName: 'Sistema de Gestión para Sandwicherías & Juguerías',
      whatToCreate: 'Plataforma web integral especializada para sandwicherías & juguerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: sandwiches_tipos, cremas_adicionales, jugos_frutas, pedidos_mostrador.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Sandwicherías & Juguerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/combo-sandwich-jugo","/cocina/plancha-sandwichera","/barra/jugueria","/admin/ventas"]
    },
    supabase: {
      tables: ["sandwiches_tipos","cremas_adicionales","jugos_frutas","pedidos_mostrador"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SANDWICHERÍAS & JUGUERÍAS
create table if not exists sandwiches_tipos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cremas_adicionales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists jugos_frutas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_mostrador (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table sandwiches_tipos enable row level security;
alter table cremas_adicionales enable row level security;
alter table jugos_frutas enable row level security;
alter table pedidos_mostrador enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Sandwicherías & Juguerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Sandwicherías & Juguerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para sandwicherías & juguerías:
1. /pos/combo-sandwich-jugo: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /cocina/plancha-sandwichera: Gestión interactiva con filtros de búsqueda instantáneos.
3. /barra/jugueria: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 33. CHURRASQUERÍAS & PARRILLADAS
  {
    id: 'parrilladas',
    category: 'gastronomia',
    categoryLabel: 'Parrillas & Carnes',
    label: 'Churrasquerías & Parrilladas',
    icon: '🔥',
    tag: 'Parrillas, Steakhouses & Churrasquerías',
    description: 'Términos de cocción de carne (término medio, tres cuartos, bien cocido) y guarniciones criollas.',
    planData: {
      softwareName: 'Sistema de Gestión para Churrasquerías & Parrilladas',
      whatToCreate: 'Plataforma web integral especializada para churrasquerías & parrilladas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: cortes_parrilla, terminos_coccion, comandas_parrillero, mesas_parrilla.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Churrasquerías & Parrilladas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/parrilla/comandas-terminos","/mesas/pedidos-cortes","/caja/facturacion","/admin/stock-carnes"]
    },
    supabase: {
      tables: ["cortes_parrilla","terminos_coccion","comandas_parrillero","mesas_parrilla"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CHURRASQUERÍAS & PARRILLADAS
create table if not exists cortes_parrilla (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists terminos_coccion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comandas_parrillero (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists mesas_parrilla (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table cortes_parrilla enable row level security;
alter table terminos_coccion enable row level security;
alter table comandas_parrillero enable row level security;
alter table mesas_parrilla enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Churrasquerías & Parrilladas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Churrasquerías & Parrilladas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para churrasquerías & parrilladas:
1. /parrilla/comandas-terminos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /mesas/pedidos-cortes: Gestión interactiva con filtros de búsqueda instantáneos.
3. /caja/facturacion: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock-carnes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 34. PESCADERÍAS & MARISCOS FRESCOS
  {
    id: 'pescaderias',
    category: 'gastronomia',
    categoryLabel: 'Pescados & Mariscos',
    label: 'Pescaderías & Mariscos Frescos',
    icon: '🦐',
    tag: 'Pescaderías, Terminales Pesqueros & Distribuidoras',
    description: 'Venta por kilo de pescado entero vs fileteado, control de hielo y despacho de mariscos congelados.',
    planData: {
      softwareName: 'Sistema de Gestión para Pescaderías & Mariscos Frescos',
      whatToCreate: 'Plataforma web integral especializada para pescaderías & mariscos frescos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: especies_marinas, modalidad_corte, kilos_ingresados, ventas_pescaderia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Pescaderías & Mariscos Frescos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/balanza-pescados","/almacen/pescado-fresco","/despacho/fileteado","/admin/proveedores"]
    },
    supabase: {
      tables: ["especies_marinas","modalidad_corte","kilos_ingresados","ventas_pescaderia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PESCADERÍAS & MARISCOS FRESCOS
create table if not exists especies_marinas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists modalidad_corte (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists kilos_ingresados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_pescaderia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table especies_marinas enable row level security;
alter table modalidad_corte enable row level security;
alter table kilos_ingresados enable row level security;
alter table ventas_pescaderia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Pescaderías & Mariscos Frescos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Pescaderías & Mariscos Frescos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para pescaderías & mariscos frescos:
1. /pos/balanza-pescados: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /almacen/pescado-fresco: Gestión interactiva con filtros de búsqueda instantáneos.
3. /despacho/fileteado: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/proveedores: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 35. TIENDAS DE TÉ, TISANAS & BUBBLE TEA
  {
    id: 'bubble_tea',
    category: 'gastronomia',
    categoryLabel: 'Bebidas & Té',
    label: 'Tiendas de Té, Tisanas & Bubble Tea',
    icon: '🧋',
    tag: 'Bubble Tea, Té de Burbujas & Tisanas',
    description: 'Personalización milimétrica: nivel de azúcar (0%, 30%, 50%, 100%), hielo y toppings (tapioca, poppings).',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Té, Tisanas & Bubble Tea',
      whatToCreate: 'Plataforma web integral especializada para tiendas de té, tisanas & bubble tea con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: bases_te, toppings_burbujas, niveles_azucar_hielo, ventas_bubbletea.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Té, Tisanas & Bubble Tea (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/personalizador-bebida","/barra/pantalla-preparacion","/fidelidad/tarjeta-sellos","/admin/stock"]
    },
    supabase: {
      tables: ["bases_te","toppings_burbujas","niveles_azucar_hielo","ventas_bubbletea"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE TÉ, TISANAS & BUBBLE TEA
create table if not exists bases_te (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists toppings_burbujas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists niveles_azucar_hielo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_bubbletea (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table bases_te enable row level security;
alter table toppings_burbujas enable row level security;
alter table niveles_azucar_hielo enable row level security;
alter table ventas_bubbletea enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Té, Tisanas & Bubble Tea',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Té, Tisanas & Bubble Tea
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de té, tisanas & bubble tea:
1. /pos/personalizador-bebida: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /barra/pantalla-preparacion: Gestión interactiva con filtros de búsqueda instantáneos.
3. /fidelidad/tarjeta-sellos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 36. COMEDORES CORPORATIVOS & VIANDAS
  {
    id: 'comedores_viandas',
    category: 'gastronomia',
    categoryLabel: 'Comedores & Viandas',
    label: 'Comedores Corporativos & Viandas',
    icon: '🍱',
    tag: 'Comedores Industriales, Viandas & Menús Ejecutivos',
    description: 'Programación semanal de menús corporativos, reservas de almuerzos de colaboradores y dietas especiales.',
    planData: {
      softwareName: 'Sistema de Gestión para Comedores Corporativos & Viandas',
      whatToCreate: 'Plataforma web integral especializada para comedores corporativos & viandas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: empresas_convenio, colaboradores_empleados, menus_diarios, reservas_almuerzos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Comedores Corporativos & Viandas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/empleado/elegir-menu-semanal","/comedor/lector-fotocheck","/cocina/conteos-platos","/admin/facturacion-empresas"]
    },
    supabase: {
      tables: ["empresas_convenio","colaboradores_empleados","menus_diarios","reservas_almuerzos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: COMEDORES CORPORATIVOS & VIANDAS
create table if not exists empresas_convenio (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists colaboradores_empleados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists menus_diarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_almuerzos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table empresas_convenio enable row level security;
alter table colaboradores_empleados enable row level security;
alter table menus_diarios enable row level security;
alter table reservas_almuerzos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Comedores Corporativos & Viandas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Comedores Corporativos & Viandas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para comedores corporativos & viandas:
1. /empleado/elegir-menu-semanal: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /comedor/lector-fotocheck: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cocina/conteos-platos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/facturacion-empresas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 37. PERFUMERÍAS & FRAGANCIAS
  {
    id: 'perfumeria',
    category: 'retail',
    categoryLabel: 'Belleza & Fragancias',
    label: 'Perfumerías & Fragancias',
    icon: '🧴',
    tag: 'Perfumerías, Fragancias & Cosmética',
    description: 'Buscador por familias olfativas, notas aromáticas (salida/corazón/fondo) y control de decants.',
    planData: {
      softwareName: 'Sistema de Gestión para Perfumerías & Fragancias',
      whatToCreate: 'Plataforma web integral especializada para perfumerías & fragancias con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: perfumes_catalogo, familias_olfativas, decants_mililitros, clientes_preferencias, ventas_perfumeria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Perfumerías & Fragancias (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/familias-olfativas","/perfume/[id]/piramide","/pos/decants-fraccionados","/admin/inventario"]
    },
    supabase: {
      tables: ["perfumes_catalogo","familias_olfativas","decants_mililitros","clientes_preferencias","ventas_perfumeria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PERFUMERÍAS & FRAGANCIAS
create table if not exists perfumes_catalogo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists familias_olfativas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists decants_mililitros (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_preferencias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_perfumeria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table perfumes_catalogo enable row level security;
alter table familias_olfativas enable row level security;
alter table decants_mililitros enable row level security;
alter table clientes_preferencias enable row level security;
alter table ventas_perfumeria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Perfumerías & Fragancias',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Perfumerías & Fragancias
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para perfumerías & fragancias:
1. /catalogo/familias-olfativas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /perfume/[id]/piramide: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/decants-fraccionados: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/inventario: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 38. BOUTIQUES DE ROPA & TIENDAS DE MODA
  {
    id: 'boutiques',
    category: 'retail',
    categoryLabel: 'Moda & Ropa',
    label: 'Boutiques de Ropa & Tiendas de Moda',
    icon: '👗',
    tag: 'Boutiques, Tiendas de Ropa & Moda Femenina/Masculina',
    description: 'Matriz de inventario por talla y color (SKUs), probador virtual y catálogo de colecciones por temporada.',
    planData: {
      softwareName: 'Sistema de Gestión para Boutiques de Ropa & Tiendas de Moda',
      whatToCreate: 'Plataforma web integral especializada para boutiques de ropa & tiendas de moda con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: prendas_ropa, variantes_talla_color, colecciones_temporada, pedidos_boutique.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Boutiques de Ropa & Tiendas de Moda (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/temporada","/pos/mostrador-tallas","/inventario/matriz-sku","/admin/ventas"]
    },
    supabase: {
      tables: ["prendas_ropa","variantes_talla_color","colecciones_temporada","pedidos_boutique"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: BOUTIQUES DE ROPA & TIENDAS DE MODA
create table if not exists prendas_ropa (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists variantes_talla_color (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists colecciones_temporada (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_boutique (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table prendas_ropa enable row level security;
alter table variantes_talla_color enable row level security;
alter table colecciones_temporada enable row level security;
alter table pedidos_boutique enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Boutiques de Ropa & Tiendas de Moda',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Boutiques de Ropa & Tiendas de Moda
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para boutiques de ropa & tiendas de moda:
1. /catalogo/temporada: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pos/mostrador-tallas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /inventario/matriz-sku: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 39. CONCESIONARIAS DE AUTOS SEMINUEVOS
  {
    id: 'autos',
    category: 'retail',
    categoryLabel: 'Automotriz & Vehículos',
    label: 'Concesionarias de Autos Seminuevos',
    icon: '🚗',
    tag: 'Concesionarias, Venta de Autos & Seminuevos',
    description: 'Catálogo de vehículos con ficha técnica, simulador de crédito vehicular y agendamiento de pruebas de manejo.',
    planData: {
      softwareName: 'Sistema de Gestión para Concesionarias de Autos Seminuevos',
      whatToCreate: 'Plataforma web integral especializada para concesionarias de autos seminuevos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: autos_inventario, solicitudes_testdrive, cotizaciones_credito, tasaciones_autos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Concesionarias de Autos Seminuevos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/autos","/vehiculo/[id]/simulador","/test-drive/agendar","/admin/leads"]
    },
    supabase: {
      tables: ["autos_inventario","solicitudes_testdrive","cotizaciones_credito","tasaciones_autos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CONCESIONARIAS DE AUTOS SEMINUEVOS
create table if not exists autos_inventario (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists solicitudes_testdrive (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cotizaciones_credito (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tasaciones_autos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table autos_inventario enable row level security;
alter table solicitudes_testdrive enable row level security;
alter table cotizaciones_credito enable row level security;
alter table tasaciones_autos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Concesionarias de Autos Seminuevos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Concesionarias de Autos Seminuevos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para concesionarias de autos seminuevos:
1. /catalogo/autos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /vehiculo/[id]/simulador: Gestión interactiva con filtros de búsqueda instantáneos.
3. /test-drive/agendar: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/leads: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 40. VIVEROS & PAISAJISMO BOTÁNICO
  {
    id: 'viveros',
    category: 'retail',
    categoryLabel: 'Plantas & Botánica',
    label: 'Viveros & Paisajismo Botánico',
    icon: '🌿',
    tag: 'Viveros, Jardinería, Paisajismo & Plantas Ornamentales',
    description: 'Catálogo de plantas según luz y riego, cotizador de diseño de jardines e inventario de sustratos.',
    planData: {
      softwareName: 'Sistema de Gestión para Viveros & Paisajismo Botánico',
      whatToCreate: 'Plataforma web integral especializada para viveros & paisajismo botánico con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: plantas_especies, guias_cuidado, cotizaciones_jardines, insumos_jardineria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Viveros & Paisajismo Botánico (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/plantas","/planta/[id]/cuidados-qr","/paisajismo/cotizador","/admin/stock"]
    },
    supabase: {
      tables: ["plantas_especies","guias_cuidado","cotizaciones_jardines","insumos_jardineria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: VIVEROS & PAISAJISMO BOTÁNICO
create table if not exists plantas_especies (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists guias_cuidado (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cotizaciones_jardines (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists insumos_jardineria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table plantas_especies enable row level security;
alter table guias_cuidado enable row level security;
alter table cotizaciones_jardines enable row level security;
alter table insumos_jardineria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Viveros & Paisajismo Botánico',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Viveros & Paisajismo Botánico
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para viveros & paisajismo botánico:
1. /catalogo/plantas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /planta/[id]/cuidados-qr: Gestión interactiva con filtros de búsqueda instantáneos.
3. /paisajismo/cotizador: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 41. TIENDAS DE SUPLEMENTOS DEPORTIVOS
  {
    id: 'suplementos',
    category: 'retail',
    categoryLabel: 'Fitness & Nutrición',
    label: 'Tiendas de Suplementos Deportivos',
    icon: '📦',
    tag: 'Suplementos Deportivos, Proteínas & Nutrición Fitness',
    description: 'Catálogo de proteínas y creatinas por objetivo físico, combos con descuento y programa de puntos.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Suplementos Deportivos',
      whatToCreate: 'Plataforma web integral especializada para tiendas de suplementos deportivos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: suplementos_productos, combos_promocionales, clientes_fidelidad, pedidos_suplementos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Suplementos Deportivos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/test-objetivo/asesor","/catalogo/suplementos","/combos/packs-ahorro","/pos/mostrador"]
    },
    supabase: {
      tables: ["suplementos_productos","combos_promocionales","clientes_fidelidad","pedidos_suplementos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE SUPLEMENTOS DEPORTIVOS
create table if not exists suplementos_productos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists combos_promocionales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_fidelidad (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_suplementos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table suplementos_productos enable row level security;
alter table combos_promocionales enable row level security;
alter table clientes_fidelidad enable row level security;
alter table pedidos_suplementos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Suplementos Deportivos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Suplementos Deportivos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de suplementos deportivos:
1. /test-objetivo/asesor: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /catalogo/suplementos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /combos/packs-ahorro: Módulo de seguimiento y actualización de estados con alertas.
4. /pos/mostrador: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 42. FERRETERÍAS & MATERIALES DE CONSTRUCCIÓN
  {
    id: 'ferreterias',
    category: 'retail',
    categoryLabel: 'Construcción & Ferretería',
    label: 'Ferreterías & Materiales de Construcción',
    icon: '🔨',
    tag: 'Ferreterías, Herramientas & Materiales de Construcción',
    description: 'Venta por unidades, metros (cables/tubos) y kilos (clavos/cemento), control de estantes y cotizaciones de obra.',
    planData: {
      softwareName: 'Sistema de Gestión para Ferreterías & Materiales de Construcción',
      whatToCreate: 'Plataforma web integral especializada para ferreterías & materiales de construcción con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: articulos_ferreteria, ubicacion_estantes, cotizaciones_obra, ventas_fraccionadas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Ferreterías & Materiales de Construcción (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/venta-fraccionada","/buscador/por-medidas-roscas","/cotizaciones/obras","/admin/stock-minimo"]
    },
    supabase: {
      tables: ["articulos_ferreteria","ubicacion_estantes","cotizaciones_obra","ventas_fraccionadas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FERRETERÍAS & MATERIALES DE CONSTRUCCIÓN
create table if not exists articulos_ferreteria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ubicacion_estantes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cotizaciones_obra (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_fraccionadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table articulos_ferreteria enable row level security;
alter table ubicacion_estantes enable row level security;
alter table cotizaciones_obra enable row level security;
alter table ventas_fraccionadas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Ferreterías & Materiales de Construcción',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Ferreterías & Materiales de Construcción
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para ferreterías & materiales de construcción:
1. /pos/venta-fraccionada: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /buscador/por-medidas-roscas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cotizaciones/obras: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock-minimo: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 43. ZAPATERÍAS & CALZADO
  {
    id: 'zapaterias',
    category: 'retail',
    categoryLabel: 'Calzado & Zapatos',
    label: 'Zapaterías & Calzado',
    icon: '👟',
    tag: 'Zapaterías, Zapatillas & Calzado Deportivo/Formal',
    description: 'Consulta rápida de tallas en almacén trasero desde el móvil del vendedor y control de pares sueltos.',
    planData: {
      softwareName: 'Sistema de Gestión para Zapaterías & Calzado',
      whatToCreate: 'Plataforma web integral especializada para zapaterías & calzado con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: calzados_modelos, tallas_stock_almacen, ventas_calzado, marcas_zapatos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Zapaterías & Calzado (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/vendedor/consultar-talla-rapida","/catalogo/estilos","/pos/caja","/admin/inventario-pares"]
    },
    supabase: {
      tables: ["calzados_modelos","tallas_stock_almacen","ventas_calzado","marcas_zapatos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ZAPATERÍAS & CALZADO
create table if not exists calzados_modelos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tallas_stock_almacen (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_calzado (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists marcas_zapatos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table calzados_modelos enable row level security;
alter table tallas_stock_almacen enable row level security;
alter table ventas_calzado enable row level security;
alter table marcas_zapatos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Zapaterías & Calzado',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Zapaterías & Calzado
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para zapaterías & calzado:
1. /vendedor/consultar-talla-rapida: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /catalogo/estilos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/caja: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/inventario-pares: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 44. JOYERÍAS & RELOJERÍAS
  {
    id: 'joyerias',
    category: 'retail',
    categoryLabel: 'Joyería & Lujo',
    label: 'Joyerías & Relojerías',
    icon: '💍',
    tag: 'Joyerías, Relojerías de Lujo & Platerías',
    description: 'Certificados de autenticidad en PDF con código QR, control de peso en oro/plata (gramos) y reparaciones.',
    planData: {
      softwareName: 'Sistema de Gestión para Joyerías & Relojerías',
      whatToCreate: 'Plataforma web integral especializada para joyerías & relojerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: joyas_catalogo, certificados_gemologicos, ordenes_reparacion_taller, ventas_joyas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Joyerías & Relojerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/joyas-finas","/certificados/verificador-qr","/taller/reparaciones-joyas","/admin/caja"]
    },
    supabase: {
      tables: ["joyas_catalogo","certificados_gemologicos","ordenes_reparacion_taller","ventas_joyas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: JOYERÍAS & RELOJERÍAS
create table if not exists joyas_catalogo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists certificados_gemologicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ordenes_reparacion_taller (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_joyas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table joyas_catalogo enable row level security;
alter table certificados_gemologicos enable row level security;
alter table ordenes_reparacion_taller enable row level security;
alter table ventas_joyas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Joyerías & Relojerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Joyerías & Relojerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para joyerías & relojerías:
1. /catalogo/joyas-finas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /certificados/verificador-qr: Gestión interactiva con filtros de búsqueda instantáneos.
3. /taller/reparaciones-joyas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 45. LIBRERÍAS & PAPELERÍAS
  {
    id: 'librerias',
    category: 'retail',
    categoryLabel: 'Libros & Papelería',
    label: 'Librerías & Papelerías',
    icon: '📚',
    tag: 'Librerías, Papelerías & Tiendas de Útiles Escolares',
    description: 'Buscador por ISBN/autor/editorial, cotizador de listas de útiles escolares con marcas alternativas.',
    planData: {
      softwareName: 'Sistema de Gestión para Librerías & Papelerías',
      whatToCreate: 'Plataforma web integral especializada para librerías & papelerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: libros_catalogo, listas_utiles_colegios, articulos_papeleria, ventas_libreria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Librerías & Papelerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/buscador/isbn-autor","/listas-utiles/cotizador-rapido","/pos/mostrador","/admin/editoriales"]
    },
    supabase: {
      tables: ["libros_catalogo","listas_utiles_colegios","articulos_papeleria","ventas_libreria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: LIBRERÍAS & PAPELERÍAS
create table if not exists libros_catalogo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists listas_utiles_colegios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists articulos_papeleria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_libreria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table libros_catalogo enable row level security;
alter table listas_utiles_colegios enable row level security;
alter table articulos_papeleria enable row level security;
alter table ventas_libreria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Librerías & Papelerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Librerías & Papelerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para librerías & papelerías:
1. /buscador/isbn-autor: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /listas-utiles/cotizador-rapido: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/mostrador: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/editoriales: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 46. TIENDAS DE MASCOTAS & PET SHOPS
  {
    id: 'pet_shops',
    category: 'retail',
    categoryLabel: 'Mascotas & Alimentos',
    label: 'Tiendas de Mascotas & Pet Shops',
    icon: '🐶',
    tag: 'Pet Shops, Venta de Alimentos & Accesorios de Mascotas',
    description: 'Venta de alimento para mascotas a granel por kilo, recordatorio de compra de comida y accesorios.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Mascotas & Pet Shops',
      whatToCreate: 'Plataforma web integral especializada para tiendas de mascotas & pet shops con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alimentos_mascotas, accesorios_perros_gatos, recordatorios_recompra, ventas_petshop.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Mascotas & Pet Shops (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pos/granel-bolsas","/mascotas/recordatorio-comida","/catalogo/accesorios","/admin/proveedores"]
    },
    supabase: {
      tables: ["alimentos_mascotas","accesorios_perros_gatos","recordatorios_recompra","ventas_petshop"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE MASCOTAS & PET SHOPS
create table if not exists alimentos_mascotas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists accesorios_perros_gatos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recordatorios_recompra (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_petshop (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alimentos_mascotas enable row level security;
alter table accesorios_perros_gatos enable row level security;
alter table recordatorios_recompra enable row level security;
alter table ventas_petshop enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Mascotas & Pet Shops',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Mascotas & Pet Shops
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de mascotas & pet shops:
1. /pos/granel-bolsas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /mascotas/recordatorio-comida: Gestión interactiva con filtros de búsqueda instantáneos.
3. /catalogo/accesorios: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/proveedores: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 47. TIENDAS DE REPUESTOS DE MOTOS & BICIS
  {
    id: 'repuestos_motos',
    category: 'retail',
    categoryLabel: 'Repuestos & Motos',
    label: 'Tiendas de Repuestos de Motos & Bicis',
    icon: '🏍️',
    tag: 'Repuestos de Motos, Bicicletas & Talleres Rápidos',
    description: 'Búsqueda por compatibilidad de modelo y cilindrada (125cc, 250cc), códigos OEM y venta en mostrador.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Repuestos de Motos & Bicis',
      whatToCreate: 'Plataforma web integral especializada para tiendas de repuestos de motos & bicis con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: repuestos_motos, compatibilidad_modelos, marcas_fabricantes, ventas_repuestos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Repuestos de Motos & Bicis (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/buscador/por-marca-modelo-ano","/pos/mostrador-motos","/inventario/codigos-oem","/admin/compras"]
    },
    supabase: {
      tables: ["repuestos_motos","compatibilidad_modelos","marcas_fabricantes","ventas_repuestos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE REPUESTOS DE MOTOS & BICIS
create table if not exists repuestos_motos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists compatibilidad_modelos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists marcas_fabricantes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_repuestos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table repuestos_motos enable row level security;
alter table compatibilidad_modelos enable row level security;
alter table marcas_fabricantes enable row level security;
alter table ventas_repuestos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Repuestos de Motos & Bicis',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Repuestos de Motos & Bicis
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de repuestos de motos & bicis:
1. /buscador/por-marca-modelo-ano: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pos/mostrador-motos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /inventario/codigos-oem: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/compras: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 48. MUEBLERÍAS & DECORACIÓN DEL HOGAR
  {
    id: 'mueblerias',
    category: 'retail',
    categoryLabel: 'Muebles & Hogar',
    label: 'Mueblerías & Decoración del Hogar',
    icon: '🛋️',
    tag: 'Mueblerías, Decoración & Muebles de Melamina/Madera',
    description: 'Catálogo con visualizador de telas/acabados, órdenes de despacho a domicilio con montaje y seguimiento.',
    planData: {
      softwareName: 'Sistema de Gestión para Mueblerías & Decoración del Hogar',
      whatToCreate: 'Plataforma web integral especializada para mueblerías & decoración del hogar con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: muebles_catalogo, telas_acabados, ordenes_despacho_flete, contratos_fabricacion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Mueblerías & Decoración del Hogar (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/muebles-acabados","/pedidos/despacho-armado","/pos/contratos-muebles","/admin/fabricacion"]
    },
    supabase: {
      tables: ["muebles_catalogo","telas_acabados","ordenes_despacho_flete","contratos_fabricacion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: MUEBLERÍAS & DECORACIÓN DEL HOGAR
create table if not exists muebles_catalogo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists telas_acabados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ordenes_despacho_flete (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists contratos_fabricacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table muebles_catalogo enable row level security;
alter table telas_acabados enable row level security;
alter table ordenes_despacho_flete enable row level security;
alter table contratos_fabricacion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Mueblerías & Decoración del Hogar',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Mueblerías & Decoración del Hogar
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para mueblerías & decoración del hogar:
1. /catalogo/muebles-acabados: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /pedidos/despacho-armado: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/contratos-muebles: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/fabricacion: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 49. TIENDAS DE ARTÍCULOS DE FIESTA & COTILLÓN
  {
    id: 'cotillon',
    category: 'retail',
    categoryLabel: 'Fiestas & Eventos',
    label: 'Tiendas de Artículos de Fiesta & Cotillón',
    icon: '🎉',
    tag: 'Cotillón, Globos, Fiestas Infantiles & Temáticas',
    description: 'Kits para fiestas temáticas, calculador de globos/helio e inventario de piñatas y descartables.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Artículos de Fiesta & Cotillón',
      whatToCreate: 'Plataforma web integral especializada para tiendas de artículos de fiesta & cotillón con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: articulos_fiesta, kits_tematicos, calculador_globos_helio, ventas_cotillon.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Artículos de Fiesta & Cotillón (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/tematicas/kits-cumpleanos","/calculador/helio-globos","/pos/caja-rapida","/admin/stock"]
    },
    supabase: {
      tables: ["articulos_fiesta","kits_tematicos","calculador_globos_helio","ventas_cotillon"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE ARTÍCULOS DE FIESTA & COTILLÓN
create table if not exists articulos_fiesta (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists kits_tematicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists calculador_globos_helio (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_cotillon (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table articulos_fiesta enable row level security;
alter table kits_tematicos enable row level security;
alter table calculador_globos_helio enable row level security;
alter table ventas_cotillon enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Artículos de Fiesta & Cotillón',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Artículos de Fiesta & Cotillón
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de artículos de fiesta & cotillón:
1. /tematicas/kits-cumpleanos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /calculador/helio-globos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/caja-rapida: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 50. TIENDAS DE ELECTRÓNICA & ACCESORIOS MÓVILES
  {
    id: 'electronica',
    category: 'retail',
    categoryLabel: 'Tecnología & Gadgets',
    label: 'Tiendas de Electrónica & Accesorios Móviles',
    icon: '📱',
    tag: 'Accesorios para Celulares, Audio & Gadgets',
    description: 'Búsqueda por compatibilidad de funda/vidrio templado con modelo de smartphone y garantía por IMEI.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Electrónica & Accesorios Móviles',
      whatToCreate: 'Plataforma web integral especializada para tiendas de electrónica & accesorios móviles con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: gadgets_accesorios, compatibilidad_celulares, garantias_imei, ventas_tecnologia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Electrónica & Accesorios Móviles (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/buscador/por-modelo-celular","/garantias/consulta-imei","/pos/gadgets","/admin/inventario"]
    },
    supabase: {
      tables: ["gadgets_accesorios","compatibilidad_celulares","garantias_imei","ventas_tecnologia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE ELECTRÓNICA & ACCESORIOS MÓVILES
create table if not exists gadgets_accesorios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists compatibilidad_celulares (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists garantias_imei (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_tecnologia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table gadgets_accesorios enable row level security;
alter table compatibilidad_celulares enable row level security;
alter table garantias_imei enable row level security;
alter table ventas_tecnologia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Electrónica & Accesorios Móviles',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Electrónica & Accesorios Móviles
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de electrónica & accesorios móviles:
1. /buscador/por-modelo-celular: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /garantias/consulta-imei: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/gadgets: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/inventario: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 51. TIENDAS DE ROPA INFANTIL & BEBÉS
  {
    id: 'ropa_bebes',
    category: 'retail',
    categoryLabel: 'Bebés & Maternidad',
    label: 'Tiendas de Ropa Infantil & Bebés',
    icon: '🍼',
    tag: 'Ropa de Bebé, Ajuares, Cunas & Accesorios',
    description: 'Listas de baby shower con regalos marcados por invitados, ajuares por meses (0-3m, 3-6m) y calzado infantil.',
    planData: {
      softwareName: 'Sistema de Gestión para Tiendas de Ropa Infantil & Bebés',
      whatToCreate: 'Plataforma web integral especializada para tiendas de ropa infantil & bebés con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: ropa_bebes_catalogo, meses_tallas, listas_baby_shower, regalos_comprados.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tiendas de Ropa Infantil & Bebés (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/baby-shower/lista-regalos","/catalogo/ajuares-recien-nacido","/pos/mostrador","/admin/stock"]
    },
    supabase: {
      tables: ["ropa_bebes_catalogo","meses_tallas","listas_baby_shower","regalos_comprados"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TIENDAS DE ROPA INFANTIL & BEBÉS
create table if not exists ropa_bebes_catalogo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists meses_tallas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists listas_baby_shower (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists regalos_comprados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table ropa_bebes_catalogo enable row level security;
alter table meses_tallas enable row level security;
alter table listas_baby_shower enable row level security;
alter table regalos_comprados enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tiendas de Ropa Infantil & Bebés',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tiendas de Ropa Infantil & Bebés
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tiendas de ropa infantil & bebés:
1. /baby-shower/lista-regalos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /catalogo/ajuares-recien-nacido: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/mostrador: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/stock: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 52. LICORERÍAS & TIENDAS DE VINOS
  {
    id: 'licorerias',
    category: 'retail',
    categoryLabel: 'Vinos & Licores',
    label: 'Licorerías & Tiendas de Vinos',
    icon: '🍷',
    tag: 'Licorerías, Vinos Finos, Piscos & Licores Premium',
    description: 'Catálogo de cepas y maridajes recomendados, packs con hielo/bebidas y delivery nocturno.',
    planData: {
      softwareName: 'Sistema de Gestión para Licorerías & Tiendas de Vinos',
      whatToCreate: 'Plataforma web integral especializada para licorerías & tiendas de vinos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: vinos_licores, cepas_maridajes, combos_nocturnos, ventas_delivery_licor.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Licorerías & Tiendas de Vinos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/catalogo/vinos-maridaje","/combos/packs-nocturnos","/pos/mostrador","/delivery/despacho"]
    },
    supabase: {
      tables: ["vinos_licores","cepas_maridajes","combos_nocturnos","ventas_delivery_licor"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: LICORERÍAS & TIENDAS DE VINOS
create table if not exists vinos_licores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cepas_maridajes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists combos_nocturnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_delivery_licor (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table vinos_licores enable row level security;
alter table cepas_maridajes enable row level security;
alter table combos_nocturnos enable row level security;
alter table ventas_delivery_licor enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Licorerías & Tiendas de Vinos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Licorerías & Tiendas de Vinos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para licorerías & tiendas de vinos:
1. /catalogo/vinos-maridaje: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /combos/packs-nocturnos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/mostrador: Módulo de seguimiento y actualización de estados con alertas.
4. /delivery/despacho: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 53. FUNERARIAS & SERVICIOS EXEQUIALES
  {
    id: 'funeraria',
    category: 'servicios',
    categoryLabel: 'Servicios Exequiales',
    label: 'Funerarias & Servicios Exequiales',
    icon: '🕊️',
    tag: 'Servicios Funerarios, Salas de Velación & Cremación',
    description: 'Asignación de salas de velación en tiempo real, gestión de ataúdes/urnas y coordinación de trámites.',
    planData: {
      softwareName: 'Sistema de Gestión para Funerarias & Servicios Exequiales',
      whatToCreate: 'Plataforma web integral especializada para funerarias & servicios exequiales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: servicios_funerarios, salas_velacion, catalogo_ataudes, tramites_defuncion, pagos_servicios.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Funerarias & Servicios Exequiales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/salas/disponibilidad","/servicios/contrato-nuevo","/catalogo/ataudes-urnas","/admin/expedientes"]
    },
    supabase: {
      tables: ["servicios_funerarios","salas_velacion","catalogo_ataudes","tramites_defuncion","pagos_servicios"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: FUNERARIAS & SERVICIOS EXEQUIALES
create table if not exists servicios_funerarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists salas_velacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists catalogo_ataudes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tramites_defuncion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pagos_servicios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table servicios_funerarios enable row level security;
alter table salas_velacion enable row level security;
alter table catalogo_ataudes enable row level security;
alter table tramites_defuncion enable row level security;
alter table pagos_servicios enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Funerarias & Servicios Exequiales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Funerarias & Servicios Exequiales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para funerarias & servicios exequiales:
1. /salas/disponibilidad: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /servicios/contrato-nuevo: Gestión interactiva con filtros de búsqueda instantáneos.
3. /catalogo/ataudes-urnas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/expedientes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 54. CLÍNICAS VETERINARIAS & MASCOTAS
  {
    id: 'veterinarias',
    category: 'servicios',
    categoryLabel: 'Veterinaria & Mascotas',
    label: 'Clínicas Veterinarias & Mascotas',
    icon: '🐾',
    tag: 'Clínicas Veterinarias, Hospitales de Animales & Grooming',
    description: 'Historia clínica por mascota, calendario de vacunas y desparasitación, y agenda de baño y corte.',
    planData: {
      softwareName: 'Sistema de Gestión para Clínicas Veterinarias & Mascotas',
      whatToCreate: 'Plataforma web integral especializada para clínicas veterinarias & mascotas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: mascotas, propietarios, historial_medico, vacunaciones_mascotas, citas_grooming_bano.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Clínicas Veterinarias & Mascotas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/mascota/[id]/historia-clinica","/grooming/agenda-bano","/vacunas/recordatorios-whatsapp","/admin/caja"]
    },
    supabase: {
      tables: ["mascotas","propietarios","historial_medico","vacunaciones_mascotas","citas_grooming_bano"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CLÍNICAS VETERINARIAS & MASCOTAS
create table if not exists mascotas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists propietarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists historial_medico (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists vacunaciones_mascotas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_grooming_bano (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table mascotas enable row level security;
alter table propietarios enable row level security;
alter table historial_medico enable row level security;
alter table vacunaciones_mascotas enable row level security;
alter table citas_grooming_bano enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Clínicas Veterinarias & Mascotas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Clínicas Veterinarias & Mascotas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para clínicas veterinarias & mascotas:
1. /mascota/[id]/historia-clinica: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /grooming/agenda-bano: Gestión interactiva con filtros de búsqueda instantáneos.
3. /vacunas/recordatorios-whatsapp: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 55. BARBERÍAS & SALONES DE BELLEZA
  {
    id: 'barberias',
    category: 'servicios',
    categoryLabel: 'Belleza & Cuidado',
    label: 'Barberías & Salones de Belleza',
    icon: '💈',
    tag: 'Barberías, Salones de Belleza, Peluquerías & Spas de Uñas',
    description: 'Reserva online con barbero o estilista favorito, cálculo automático de comisiones por corte y catálogo.',
    planData: {
      softwareName: 'Sistema de Gestión para Barberías & Salones de Belleza',
      whatToCreate: 'Plataforma web integral especializada para barberías & salones de belleza con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: barberos_estilistas, servicios_cortes, citas_reservadas, comisiones_diarias, clientes_barberia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Barberías & Salones de Belleza (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/reservas/elegir-barbero","/barbero/mi-agenda-hoy","/admin/comisiones-dia","/catalogo/cortes-tendencia"]
    },
    supabase: {
      tables: ["barberos_estilistas","servicios_cortes","citas_reservadas","comisiones_diarias","clientes_barberia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: BARBERÍAS & SALONES DE BELLEZA
create table if not exists barberos_estilistas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists servicios_cortes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_reservadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comisiones_diarias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_barberia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table barberos_estilistas enable row level security;
alter table servicios_cortes enable row level security;
alter table citas_reservadas enable row level security;
alter table comisiones_diarias enable row level security;
alter table clientes_barberia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Barberías & Salones de Belleza',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Barberías & Salones de Belleza
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para barberías & salones de belleza:
1. /reservas/elegir-barbero: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /barbero/mi-agenda-hoy: Gestión interactiva con filtros de búsqueda instantáneos.
3. /admin/comisiones-dia: Módulo de seguimiento y actualización de estados con alertas.
4. /catalogo/cortes-tendencia: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 56. TALLERES MECÁNICOS & CAR WASH
  {
    id: 'talleres_mecanicos',
    category: 'servicios',
    categoryLabel: 'Automotriz & Mantenimiento',
    label: 'Talleres Mecánicos & Car Wash',
    icon: '🔧',
    tag: 'Talleres Mecánicos, Car Wash & Detailing Automotriz',
    description: 'Ficha de ingreso del auto con fotos de rayones previos, cotizador de mano de obra y repuestos.',
    planData: {
      softwareName: 'Sistema de Gestión para Talleres Mecánicos & Car Wash',
      whatToCreate: 'Plataforma web integral especializada para talleres mecánicos & car wash con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: vehiculos_clientes, ordenes_trabajo, inventario_repuestos, inspeccion_rayones_fotos, estados_reparacion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Talleres Mecánicos & Car Wash (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/ingreso/check-in-fotos","/taller/ordenes-kanban","/cotizacion/[ordenId]","/cliente/estado-reparacion"]
    },
    supabase: {
      tables: ["vehiculos_clientes","ordenes_trabajo","inventario_repuestos","inspeccion_rayones_fotos","estados_reparacion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TALLERES MECÁNICOS & CAR WASH
create table if not exists vehiculos_clientes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ordenes_trabajo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists inventario_repuestos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists inspeccion_rayones_fotos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estados_reparacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table vehiculos_clientes enable row level security;
alter table ordenes_trabajo enable row level security;
alter table inventario_repuestos enable row level security;
alter table inspeccion_rayones_fotos enable row level security;
alter table estados_reparacion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Talleres Mecánicos & Car Wash',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Talleres Mecánicos & Car Wash
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para talleres mecánicos & car wash:
1. /ingreso/check-in-fotos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /taller/ordenes-kanban: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cotizacion/[ordenId]: Módulo de seguimiento y actualización de estados con alertas.
4. /cliente/estado-reparacion: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 57. INMOBILIARIAS & ALQUILER DE INMUEBLES
  {
    id: 'inmobiliarias',
    category: 'servicios',
    categoryLabel: 'Inmobiliaria & Propiedades',
    label: 'Inmobiliarias & Alquiler de Inmuebles',
    icon: '🏢',
    tag: 'Agencias Inmobiliarias, Corredores & Alquileres',
    description: 'Portafolio de propiedades con fotos y geolocalización, CRM de prospectos y contratos de alquiler.',
    planData: {
      softwareName: 'Sistema de Gestión para Inmobiliarias & Alquiler de Inmuebles',
      whatToCreate: 'Plataforma web integral especializada para inmobiliarias & alquiler de inmuebles con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: propiedades_inmuebles, agentes_inmobiliarios, prospectos_leads, visitas_agendadas, contratos_arrendamiento.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Inmobiliarias & Alquiler de Inmuebles (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/propiedades/catalogo-mapa","/crm/prospectos-kanban","/visitas/agendar","/admin/contratos"]
    },
    supabase: {
      tables: ["propiedades_inmuebles","agentes_inmobiliarios","prospectos_leads","visitas_agendadas","contratos_arrendamiento"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: INMOBILIARIAS & ALQUILER DE INMUEBLES
create table if not exists propiedades_inmuebles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists agentes_inmobiliarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists prospectos_leads (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists visitas_agendadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists contratos_arrendamiento (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table propiedades_inmuebles enable row level security;
alter table agentes_inmobiliarios enable row level security;
alter table prospectos_leads enable row level security;
alter table visitas_agendadas enable row level security;
alter table contratos_arrendamiento enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Inmobiliarias & Alquiler de Inmuebles',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Inmobiliarias & Alquiler de Inmuebles
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para inmobiliarias & alquiler de inmuebles:
1. /propiedades/catalogo-mapa: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /crm/prospectos-kanban: Gestión interactiva con filtros de búsqueda instantáneos.
3. /visitas/agendar: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 58. LOGÍSTICA & ENVÍOS COURIER
  {
    id: 'courier_logistica',
    category: 'servicios',
    categoryLabel: 'Logística & Courier',
    label: 'Logística & Envíos Courier',
    icon: '🚚',
    tag: 'Empresas de Envíos, Courier Express & Última Milla',
    description: 'Rastreo de paquetes por número de guía en tiempo real, escáner de códigos de barras en almacén y ruteo.',
    planData: {
      softwareName: 'Sistema de Gestión para Logística & Envíos Courier',
      whatToCreate: 'Plataforma web integral especializada para logística & envíos courier con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: envios_paquetes, rutas_motorizados, estados_tracking, liquidaciones_repartidores, clientes_remitentes.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Logística & Envíos Courier (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/tracking/[numeroGuia]","/almacen/escaner-recepcion","/motorizado/ruta-entregas","/admin/liquidaciones"]
    },
    supabase: {
      tables: ["envios_paquetes","rutas_motorizados","estados_tracking","liquidaciones_repartidores","clientes_remitentes"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: LOGÍSTICA & ENVÍOS COURIER
create table if not exists envios_paquetes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutas_motorizados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estados_tracking (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists liquidaciones_repartidores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_remitentes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table envios_paquetes enable row level security;
alter table rutas_motorizados enable row level security;
alter table estados_tracking enable row level security;
alter table liquidaciones_repartidores enable row level security;
alter table clientes_remitentes enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Logística & Envíos Courier',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Logística & Envíos Courier
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para logística & envíos courier:
1. /tracking/[numeroGuia]: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /almacen/escaner-recepcion: Gestión interactiva con filtros de búsqueda instantáneos.
3. /motorizado/ruta-entregas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/liquidaciones: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 59. LAVANDERÍAS & TINTORERÍAS
  {
    id: 'lavanderias',
    category: 'servicios',
    categoryLabel: 'Lavandería & Tintorería',
    label: 'Lavanderías & Tintorerías',
    icon: '🧼',
    tag: 'Lavanderías por Kilo, Tintorerías & Lavado en Seco',
    description: 'Pesaje de ropa con ticket de entrega, seguimiento de prendas por color/tipo y avisos automáticos.',
    planData: {
      softwareName: 'Sistema de Gestión para Lavanderías & Tintorerías',
      whatToCreate: 'Plataforma web integral especializada para lavanderías & tintorerías con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: ordenes_lavanderia, prendas_detalle, tickets_pesaje, estados_lavado, clientes_lavanderia.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Lavanderías & Tintorerías (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/recepcion/ticket-pesaje","/lavanderia/tablero-lavado","/entregas/despacho-listo","/admin/caja-diaria"]
    },
    supabase: {
      tables: ["ordenes_lavanderia","prendas_detalle","tickets_pesaje","estados_lavado","clientes_lavanderia"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: LAVANDERÍAS & TINTORERÍAS
create table if not exists ordenes_lavanderia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists prendas_detalle (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tickets_pesaje (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estados_lavado (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_lavanderia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table ordenes_lavanderia enable row level security;
alter table prendas_detalle enable row level security;
alter table tickets_pesaje enable row level security;
alter table estados_lavado enable row level security;
alter table clientes_lavanderia enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Lavanderías & Tintorerías',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Lavanderías & Tintorerías
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para lavanderías & tintorerías:
1. /recepcion/ticket-pesaje: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /lavanderia/tablero-lavado: Gestión interactiva con filtros de búsqueda instantáneos.
3. /entregas/despacho-listo: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja-diaria: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 60. ESTUDIOS DE ABOGADOS & ASESORÍA LEGAL
  {
    id: 'abogados',
    category: 'servicios',
    categoryLabel: 'Servicios Jurídicos',
    label: 'Estudios de Abogados & Asesoría Legal',
    icon: '⚖️',
    tag: 'Estudios Jurídicos, Bufetes de Abogados & Asesoría Legal',
    description: 'Control de expedientes judiciales, calendario de audiencias con alertas y seguimiento de honorarios.',
    planData: {
      softwareName: 'Sistema de Gestión para Estudios de Abogados & Asesoría Legal',
      whatToCreate: 'Plataforma web integral especializada para estudios de abogados & asesoría legal con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: clientes_legales, expedientes_judiciales, audiencias_fechas, plazos_procesales, honorarios_pagos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Estudios de Abogados & Asesoría Legal (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/expedientes/directorio","/expedientes/[id]/historia","/audiencias/calendario-alertas","/honorarios/control"]
    },
    supabase: {
      tables: ["clientes_legales","expedientes_judiciales","audiencias_fechas","plazos_procesales","honorarios_pagos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESTUDIOS DE ABOGADOS & ASESORÍA LEGAL
create table if not exists clientes_legales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists expedientes_judiciales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists audiencias_fechas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists plazos_procesales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists honorarios_pagos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table clientes_legales enable row level security;
alter table expedientes_judiciales enable row level security;
alter table audiencias_fechas enable row level security;
alter table plazos_procesales enable row level security;
alter table honorarios_pagos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Estudios de Abogados & Asesoría Legal',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Estudios de Abogados & Asesoría Legal
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para estudios de abogados & asesoría legal:
1. /expedientes/directorio: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /expedientes/[id]/historia: Gestión interactiva con filtros de búsqueda instantáneos.
3. /audiencias/calendario-alertas: Módulo de seguimiento y actualización de estados con alertas.
4. /honorarios/control: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 61. HOTELES BOUTIQUE & HOSTALES
  {
    id: 'hoteles',
    category: 'servicios',
    categoryLabel: 'Hotelería & Turismo',
    label: 'Hoteles Boutique & Hostales',
    icon: '🏨',
    tag: 'Hoteles Boutique, Hostales & Hospedajes',
    description: 'Motor de reservas de habitaciones, control de check-in / check-out, consumos de minibar y limpieza.',
    planData: {
      softwareName: 'Sistema de Gestión para Hoteles Boutique & Hostales',
      whatToCreate: 'Plataforma web integral especializada para hoteles boutique & hostales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: habitaciones_hotel, reservas_hotel, consumos_habitacion, estados_limpieza, huespedes_registro.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Hoteles Boutique & Hostales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/rack/habitaciones-mapa","/checkin/registro-huesped","/checkout/[reservaId]","/limpieza/camareras-panel"]
    },
    supabase: {
      tables: ["habitaciones_hotel","reservas_hotel","consumos_habitacion","estados_limpieza","huespedes_registro"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: HOTELES BOUTIQUE & HOSTALES
create table if not exists habitaciones_hotel (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_hotel (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists consumos_habitacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estados_limpieza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists huespedes_registro (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table habitaciones_hotel enable row level security;
alter table reservas_hotel enable row level security;
alter table consumos_habitacion enable row level security;
alter table estados_limpieza enable row level security;
alter table huespedes_registro enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Hoteles Boutique & Hostales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Hoteles Boutique & Hostales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para hoteles boutique & hostales:
1. /rack/habitaciones-mapa: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /checkin/registro-huesped: Gestión interactiva con filtros de búsqueda instantáneos.
3. /checkout/[reservaId]: Módulo de seguimiento y actualización de estados con alertas.
4. /limpieza/camareras-panel: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 62. ESTUDIOS DE FOTOGRAFÍA & EVENTOS
  {
    id: 'fotografia',
    category: 'servicios',
    categoryLabel: 'Servicios Creativos',
    label: 'Estudios de Fotografía & Eventos',
    icon: '📸',
    tag: 'Estudios Fotográficos, Bodas & Eventos',
    description: 'Galería privada con marcas de agua para selección de fotos, cotizador de paquetes y contratos de cobertura.',
    planData: {
      softwareName: 'Sistema de Gestión para Estudios de Fotografía & Eventos',
      whatToCreate: 'Plataforma web integral especializada para estudios de fotografía & eventos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: galerias_fotos, fotos_items, clientes_fotografia, eventos_fechas, pagos_eventos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Estudios de Fotografía & Eventos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/galerias/[id]/portal-cliente","/admin/eventos-agenda","/admin/galerias/crear","/admin/contratos"]
    },
    supabase: {
      tables: ["galerias_fotos","fotos_items","clientes_fotografia","eventos_fechas","pagos_eventos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESTUDIOS DE FOTOGRAFÍA & EVENTOS
create table if not exists galerias_fotos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists fotos_items (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_fotografia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists eventos_fechas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pagos_eventos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table galerias_fotos enable row level security;
alter table fotos_items enable row level security;
alter table clientes_fotografia enable row level security;
alter table eventos_fechas enable row level security;
alter table pagos_eventos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Estudios de Fotografía & Eventos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Estudios de Fotografía & Eventos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para estudios de fotografía & eventos:
1. /galerias/[id]/portal-cliente: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /admin/eventos-agenda: Gestión interactiva con filtros de búsqueda instantáneos.
3. /admin/galerias/crear: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 63. CONDOMINIOS & EDIFICIOS RESIDENCIALES
  {
    id: 'condominios',
    category: 'servicios',
    categoryLabel: 'Administración Inmobiliaria',
    label: 'Condominios & Edificios Residenciales',
    icon: '🏡',
    tag: 'Condominios, Edificios Residenciales & Juntas de Propietarios',
    description: 'Cobro de cuotas de mantenimiento, reservas de áreas comunes (parrilla, piscina) y control de visitas en garita.',
    planData: {
      softwareName: 'Sistema de Gestión para Condominios & Edificios Residenciales',
      whatToCreate: 'Plataforma web integral especializada para condominios & edificios residenciales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: departamentos, cuotas_mantenimiento, areas_comunes, reservas_areas, visitas_garita.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Condominios & Edificios Residenciales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/residente/mi-cuenta","/areas-comunes/reservar","/porteria/visitas","/admin/finanzas"]
    },
    supabase: {
      tables: ["departamentos","cuotas_mantenimiento","areas_comunes","reservas_areas","visitas_garita"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CONDOMINIOS & EDIFICIOS RESIDENCIALES
create table if not exists departamentos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cuotas_mantenimiento (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists areas_comunes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_areas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists visitas_garita (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table departamentos enable row level security;
alter table cuotas_mantenimiento enable row level security;
alter table areas_comunes enable row level security;
alter table reservas_areas enable row level security;
alter table visitas_garita enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Condominios & Edificios Residenciales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Condominios & Edificios Residenciales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para condominios & edificios residenciales:
1. /residente/mi-cuenta: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /areas-comunes/reservar: Gestión interactiva con filtros de búsqueda instantáneos.
3. /porteria/visitas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/finanzas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 64. AGENCIAS CREATIVAS & MARKETING
  {
    id: 'agencias',
    category: 'servicios',
    categoryLabel: 'Servicios Digitales',
    label: 'Agencias Creativas & Marketing',
    icon: '🎨',
    tag: 'Agencias de Publicidad, Marketing & Diseño Gráfico',
    description: 'Portal de revisión de piezas gráficas con comentarios sobre la imagen, control de entregables y solicitudes de cambios.',
    planData: {
      softwareName: 'Sistema de Gestión para Agencias Creativas & Marketing',
      whatToCreate: 'Plataforma web integral especializada para agencias creativas & marketing con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: piezas_entregables, comentarios_pines, clientes_agencia, proyectos_campanas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Agencias Creativas & Marketing (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/revision/[piezaId]/visor","/parrilla/contenidos-redes","/admin/proyectos","/kit-marca/recursos"]
    },
    supabase: {
      tables: ["piezas_entregables","comentarios_pines","clientes_agencia","proyectos_campanas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: AGENCIAS CREATIVAS & MARKETING
create table if not exists piezas_entregables (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comentarios_pines (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_agencia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists proyectos_campanas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table piezas_entregables enable row level security;
alter table comentarios_pines enable row level security;
alter table clientes_agencia enable row level security;
alter table proyectos_campanas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Agencias Creativas & Marketing',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Agencias Creativas & Marketing
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para agencias creativas & marketing:
1. /revision/[piezaId]/visor: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /parrilla/contenidos-redes: Gestión interactiva con filtros de búsqueda instantáneos.
3. /admin/proyectos: Módulo de seguimiento y actualización de estados con alertas.
4. /kit-marca/recursos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 65. EMPRESAS DE SEGURIDAD & VIGILANCIA
  {
    id: 'seguridad',
    category: 'servicios',
    categoryLabel: 'Seguridad & Protección',
    label: 'Empresas de Seguridad & Vigilancia',
    icon: '🛡️',
    tag: 'Seguridad Privada, Vigilancia & Rondas de Control',
    description: 'Rondas de vigilancia con escaneo de puntos QR con geolocalización, libro de novedades y alertas de pánico.',
    planData: {
      softwareName: 'Sistema de Gestión para Empresas de Seguridad & Vigilancia',
      whatToCreate: 'Plataforma web integral especializada para empresas de seguridad & vigilancia con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: puestos_vigilancia, puntos_qr, registros_rondas, ocurrencias_libro, agentes_seguridad.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Empresas de Seguridad & Vigilancia (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/agente/ronda-qr","/agente/novedad-foto","/central/monitoreo-vivo","/admin/puestos"]
    },
    supabase: {
      tables: ["puestos_vigilancia","puntos_qr","registros_rondas","ocurrencias_libro","agentes_seguridad"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: EMPRESAS DE SEGURIDAD & VIGILANCIA
create table if not exists puestos_vigilancia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists puntos_qr (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists registros_rondas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ocurrencias_libro (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists agentes_seguridad (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table puestos_vigilancia enable row level security;
alter table puntos_qr enable row level security;
alter table registros_rondas enable row level security;
alter table ocurrencias_libro enable row level security;
alter table agentes_seguridad enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Empresas de Seguridad & Vigilancia',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Empresas de Seguridad & Vigilancia
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para empresas de seguridad & vigilancia:
1. /agente/ronda-qr: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /agente/novedad-foto: Gestión interactiva con filtros de búsqueda instantáneos.
3. /central/monitoreo-vivo: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/puestos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 66. SERVICIOS DE MUDANZAS & FLETES
  {
    id: 'mudanzas',
    category: 'servicios',
    categoryLabel: 'Transporte & Fletes',
    label: 'Servicios de Mudanzas & Fletes',
    icon: '📦',
    tag: 'Empresas de Mudanzas, Fletes & Embalaje',
    description: 'Cotizador de mudanza por inventario de bultos/muebles, cálculo de pisos por escalera y seguimiento GPS.',
    planData: {
      softwareName: 'Sistema de Gestión para Servicios de Mudanzas & Fletes',
      whatToCreate: 'Plataforma web integral especializada para servicios de mudanzas & fletes con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: cotizaciones_mudanza, inventario_muebles_cliente, camiones_flota, rutas_mudanza.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Servicios de Mudanzas & Fletes (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/cotizador/inventario-bultos","/camiones/programacion-rutas","/cliente/seguimiento-flete","/admin/caja"]
    },
    supabase: {
      tables: ["cotizaciones_mudanza","inventario_muebles_cliente","camiones_flota","rutas_mudanza"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SERVICIOS DE MUDANZAS & FLETES
create table if not exists cotizaciones_mudanza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists inventario_muebles_cliente (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists camiones_flota (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutas_mudanza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table cotizaciones_mudanza enable row level security;
alter table inventario_muebles_cliente enable row level security;
alter table camiones_flota enable row level security;
alter table rutas_mudanza enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Servicios de Mudanzas & Fletes',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Servicios de Mudanzas & Fletes
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para servicios de mudanzas & fletes:
1. /cotizador/inventario-bultos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /camiones/programacion-rutas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cliente/seguimiento-flete: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 67. EMPRESAS DE LIMPIEZA CORPORATIVA
  {
    id: 'limpieza_empresas',
    category: 'servicios',
    categoryLabel: 'Limpieza & Mantenimiento',
    label: 'Empresas de Limpieza Corporativa',
    icon: '🧹',
    tag: 'Limpieza de Oficinas, Desinfección & Facility Management',
    description: 'Checklist de supervisión de limpieza por áreas de oficinas, control de asistencia por GPS e insumos químicos.',
    planData: {
      softwareName: 'Sistema de Gestión para Empresas de Limpieza Corporativa',
      whatToCreate: 'Plataforma web integral especializada para empresas de limpieza corporativa con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: clientes_corporativos, areas_oficinas, supervision_checklist, insumos_quimicos_stock.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Empresas de Limpieza Corporativa (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/supervisor/checklist-inspeccion","/personal/asistencia-gps","/almacen/insumos-limpieza","/admin/contratos"]
    },
    supabase: {
      tables: ["clientes_corporativos","areas_oficinas","supervision_checklist","insumos_quimicos_stock"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: EMPRESAS DE LIMPIEZA CORPORATIVA
create table if not exists clientes_corporativos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists areas_oficinas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists supervision_checklist (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists insumos_quimicos_stock (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table clientes_corporativos enable row level security;
alter table areas_oficinas enable row level security;
alter table supervision_checklist enable row level security;
alter table insumos_quimicos_stock enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Empresas de Limpieza Corporativa',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Empresas de Limpieza Corporativa
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para empresas de limpieza corporativa:
1. /supervisor/checklist-inspeccion: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /personal/asistencia-gps: Gestión interactiva con filtros de búsqueda instantáneos.
3. /almacen/insumos-limpieza: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 68. CARPINTERÍAS & MUEBLES A MEDIDA
  {
    id: 'carpinterias',
    category: 'servicios',
    categoryLabel: 'Fabricación & Madera',
    label: 'Carpinterías & Muebles a Medida',
    icon: '🪚',
    tag: 'Carpinterías, Muebles de Melamina & Ebanistería',
    description: 'Optimizador de corte de tableros de melamina, despiece de muebles y cotizador por metros lineales.',
    planData: {
      softwareName: 'Sistema de Gestión para Carpinterías & Muebles a Medida',
      whatToCreate: 'Plataforma web integral especializada para carpinterías & muebles a medida con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: proyectos_muebles, despiece_tableros, herrajes_accesorios, cotizaciones_carpinteria.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Carpinterías & Muebles a Medida (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/optimizador/corte-melamina","/despiece/medidas-tapacantos","/cotizador/metros-lineales","/admin/proyectos"]
    },
    supabase: {
      tables: ["proyectos_muebles","despiece_tableros","herrajes_accesorios","cotizaciones_carpinteria"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CARPINTERÍAS & MUEBLES A MEDIDA
create table if not exists proyectos_muebles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists despiece_tableros (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists herrajes_accesorios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cotizaciones_carpinteria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table proyectos_muebles enable row level security;
alter table despiece_tableros enable row level security;
alter table herrajes_accesorios enable row level security;
alter table cotizaciones_carpinteria enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Carpinterías & Muebles a Medida',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Carpinterías & Muebles a Medida
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para carpinterías & muebles a medida:
1. /optimizador/corte-melamina: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /despiece/medidas-tapacantos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cotizador/metros-lineales: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/proyectos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 69. IMPRENTAS & PUBLICIDAD GRÁFICA
  {
    id: 'imprentas',
    category: 'servicios',
    categoryLabel: 'Artes Gráficas',
    label: 'Imprentas & Publicidad Gráfica',
    icon: '🖨️',
    tag: 'Imprentas Digitales, Gigantografías & Merchandising',
    description: 'Cotizador por millares de volantes, metros cuadrados de banner, pruebas de color y control de máquinas.',
    planData: {
      softwareName: 'Sistema de Gestión para Imprentas & Publicidad Gráfica',
      whatToCreate: 'Plataforma web integral especializada para imprentas & publicidad gráfica con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: ordenes_impresion, sustratos_papeles, maquinas_plotters, cotizaciones_millares.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Imprentas & Publicidad Gráfica (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/cotizador/imprenta-pliegos","/taller/cola-impresion-kanban","/clientes/aprobacion-arte","/admin/caja"]
    },
    supabase: {
      tables: ["ordenes_impresion","sustratos_papeles","maquinas_plotters","cotizaciones_millares"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: IMPRENTAS & PUBLICIDAD GRÁFICA
create table if not exists ordenes_impresion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sustratos_papeles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists maquinas_plotters (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cotizaciones_millares (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table ordenes_impresion enable row level security;
alter table sustratos_papeles enable row level security;
alter table maquinas_plotters enable row level security;
alter table cotizaciones_millares enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Imprentas & Publicidad Gráfica',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Imprentas & Publicidad Gráfica
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para imprentas & publicidad gráfica:
1. /cotizador/imprenta-pliegos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /taller/cola-impresion-kanban: Gestión interactiva con filtros de búsqueda instantáneos.
3. /clientes/aprobacion-arte: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 70. CERRAJERÍAS & DUPLICADO DE EMERGENCIA
  {
    id: 'cerrajerias',
    category: 'servicios',
    categoryLabel: 'Cerrajería & Llaves',
    label: 'Cerrajerías & Duplicado de Emergencia',
    icon: '🔑',
    tag: 'Cerrajerías Residenciales, Automotrices & Emergencias 24h',
    description: 'Despacho de cerrajero de emergencia más cercano con geolocalización, catálogo de chapas y cerrojos.',
    planData: {
      softwareName: 'Sistema de Gestión para Cerrajerías & Duplicado de Emergencia',
      whatToCreate: 'Plataforma web integral especializada para cerrajerías & duplicado de emergencia con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: solicitudes_emergencia, tecnicos_cerrajeros, catalogo_cerraduras, pagos_servicios.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Cerrajerías & Duplicado de Emergencia (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/emergencias/solicitar-cerrajero","/mapa/despacho-tecnicos","/pos/duplicado-llaves","/admin/reportes"]
    },
    supabase: {
      tables: ["solicitudes_emergencia","tecnicos_cerrajeros","catalogo_cerraduras","pagos_servicios"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CERRAJERÍAS & DUPLICADO DE EMERGENCIA
create table if not exists solicitudes_emergencia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tecnicos_cerrajeros (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists catalogo_cerraduras (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pagos_servicios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table solicitudes_emergencia enable row level security;
alter table tecnicos_cerrajeros enable row level security;
alter table catalogo_cerraduras enable row level security;
alter table pagos_servicios enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Cerrajerías & Duplicado de Emergencia',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Cerrajerías & Duplicado de Emergencia
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para cerrajerías & duplicado de emergencia:
1. /emergencias/solicitar-cerrajero: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /mapa/despacho-tecnicos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /pos/duplicado-llaves: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/reportes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 71. SERVICIOS DE GASFITERÍA & PLOMERÍA
  {
    id: 'plomeria',
    category: 'servicios',
    categoryLabel: 'Fontanería & Reparaciones',
    label: 'Servicios de Gasfitería & Plomería',
    icon: '🔧',
    tag: 'Gasfiteros, Plomeros & Detección de Fugas',
    description: 'Agendamiento de visitas técnicas para reparación de fugas, presupuesto de materiales y garantía firmada.',
    planData: {
      softwareName: 'Sistema de Gestión para Servicios de Gasfitería & Plomería',
      whatToCreate: 'Plataforma web integral especializada para servicios de gasfitería & plomería con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: servicios_gasfiteria, tecnicos_gasfiteros, presupuestos_reparacion, garantias_trabajos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Servicios de Gasfitería & Plomería (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/agendar/visita-tecnica","/presupuesto/armar-materiales","/garantia/certificado-digital","/admin/servicios"]
    },
    supabase: {
      tables: ["servicios_gasfiteria","tecnicos_gasfiteros","presupuestos_reparacion","garantias_trabajos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SERVICIOS DE GASFITERÍA & PLOMERÍA
create table if not exists servicios_gasfiteria (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tecnicos_gasfiteros (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists presupuestos_reparacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists garantias_trabajos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table servicios_gasfiteria enable row level security;
alter table tecnicos_gasfiteros enable row level security;
alter table presupuestos_reparacion enable row level security;
alter table garantias_trabajos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Servicios de Gasfitería & Plomería',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Servicios de Gasfitería & Plomería
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para servicios de gasfitería & plomería:
1. /agendar/visita-tecnica: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /presupuesto/armar-materiales: Gestión interactiva con filtros de búsqueda instantáneos.
3. /garantia/certificado-digital: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/servicios: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 72. EMPRESAS DE AIRE ACONDICIONADO
  {
    id: 'aire_acondicionado',
    category: 'servicios',
    categoryLabel: 'Climatización & HVAC',
    label: 'Empresas de Aire Acondicionado',
    icon: '❄️',
    tag: 'Instalación, Mantenimiento de Aire Acondicionado & HVAC',
    description: 'Cálculo de BTUs necesarios por metro cúbico de habitación, bitácora de mantenimiento preventivo y gas refrigerante.',
    planData: {
      softwareName: 'Sistema de Gestión para Empresas de Aire Acondicionado',
      whatToCreate: 'Plataforma web integral especializada para empresas de aire acondicionado con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: clientes_climatizacion, equipos_instalados, calculo_btus, mantenimientos_preventivos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Empresas de Aire Acondicionado (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/calculadora/btus-ambiente","/equipos/hoja-de-vida","/agenda/mantenimiento-rutinario","/admin/contratos"]
    },
    supabase: {
      tables: ["clientes_climatizacion","equipos_instalados","calculo_btus","mantenimientos_preventivos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: EMPRESAS DE AIRE ACONDICIONADO
create table if not exists clientes_climatizacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists equipos_instalados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists calculo_btus (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists mantenimientos_preventivos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table clientes_climatizacion enable row level security;
alter table equipos_instalados enable row level security;
alter table calculo_btus enable row level security;
alter table mantenimientos_preventivos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Empresas de Aire Acondicionado',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Empresas de Aire Acondicionado
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para empresas de aire acondicionado:
1. /calculadora/btus-ambiente: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /equipos/hoja-de-vida: Gestión interactiva con filtros de búsqueda instantáneos.
3. /agenda/mantenimiento-rutinario: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 73. CANCHAS SINTÉTICAS & ALQUILER DEPORTIVO
  {
    id: 'canchas_sinteticas',
    category: 'deportes',
    categoryLabel: 'Fútbol & Complejos',
    label: 'Canchas Sintéticas & Alquiler Deportivo',
    icon: '⚽',
    tag: 'Canchas Sintéticas de Fútbol 7/Grass, Pádel & Losas',
    description: 'Grilla horaria de alquiler por horas de canchas, reserva con pago del 50% y venta en cantina deportiva.',
    planData: {
      softwareName: 'Sistema de Gestión para Canchas Sintéticas & Alquiler Deportivo',
      whatToCreate: 'Plataforma web integral especializada para canchas sintéticas & alquiler deportivo con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: canchas_deportivas, reservas_canchas, turnos_horarios, ventas_cantina_bebidas, clientes_futbol.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Canchas Sintéticas & Alquiler Deportivo (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/canchas/grilla-horaria","/reservas/adelanto-pago","/cantina/pos-bebidas","/admin/cierre-caja"]
    },
    supabase: {
      tables: ["canchas_deportivas","reservas_canchas","turnos_horarios","ventas_cantina_bebidas","clientes_futbol"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CANCHAS SINTÉTICAS & ALQUILER DEPORTIVO
create table if not exists canchas_deportivas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_canchas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists turnos_horarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ventas_cantina_bebidas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clientes_futbol (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table canchas_deportivas enable row level security;
alter table reservas_canchas enable row level security;
alter table turnos_horarios enable row level security;
alter table ventas_cantina_bebidas enable row level security;
alter table clientes_futbol enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Canchas Sintéticas & Alquiler Deportivo',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Canchas Sintéticas & Alquiler Deportivo
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para canchas sintéticas & alquiler deportivo:
1. /canchas/grilla-horaria: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /reservas/adelanto-pago: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cantina/pos-bebidas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/cierre-caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 74. ACADEMIAS DE NATACIÓN & CLUBES
  {
    id: 'natacion',
    category: 'deportes',
    categoryLabel: 'Deportes Acuáticos',
    label: 'Academias de Natación & Clubes',
    icon: '🏊',
    tag: 'Academias de Natación, Escuelas Acuáticas & Clubes',
    description: 'Asignación de andariveles por nivel técnico, control de aforo en piscina y medallas digitales por estilos.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Natación & Clubes',
      whatToCreate: 'Plataforma web integral especializada para academias de natación & clubes con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: nadadores, horarios_piscina, andariveles, evaluaciones_estilos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Natación & Clubes (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/piscina/andariveles","/evaluacion/[alumnoId]","/padre/progreso-medallas","/admin/quimicos-agua"]
    },
    supabase: {
      tables: ["nadadores","horarios_piscina","andariveles","evaluaciones_estilos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE NATACIÓN & CLUBES
create table if not exists nadadores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists horarios_piscina (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists andariveles (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_estilos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table nadadores enable row level security;
alter table horarios_piscina enable row level security;
alter table andariveles enable row level security;
alter table evaluaciones_estilos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Natación & Clubes',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Natación & Clubes
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de natación & clubes:
1. /piscina/andariveles: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /evaluacion/[alumnoId]: Gestión interactiva con filtros de búsqueda instantáneos.
3. /padre/progreso-medallas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/quimicos-agua: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 75. SALAS DE ENSAYO & ESTUDIOS DE AUDIO
  {
    id: 'salas_ensayo',
    category: 'deportes',
    categoryLabel: 'Música & Ensayo',
    label: 'Salas de Ensayo & Estudios de Audio',
    icon: '🎤',
    tag: 'Estudios de Grabación, Salas de Ensayo & Cabinas de Audio',
    description: 'Reserva por horas de salas acústicas, alquiler de instrumentos y asignación de ingenieros de sonido.',
    planData: {
      softwareName: 'Sistema de Gestión para Salas de Ensayo & Estudios de Audio',
      whatToCreate: 'Plataforma web integral especializada para salas de ensayo & estudios de audio con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: salas_ensayo, equipos_backline, reservas_turnos, equipos_alquilados.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Salas de Ensayo & Estudios de Audio (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/reservas/horarios","/sala/[id]/alquiler-equipos","/cabina/cronometro-vivo","/admin/reportes"]
    },
    supabase: {
      tables: ["salas_ensayo","equipos_backline","reservas_turnos","equipos_alquilados"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: SALAS DE ENSAYO & ESTUDIOS DE AUDIO
create table if not exists salas_ensayo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists equipos_backline (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_turnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists equipos_alquilados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table salas_ensayo enable row level security;
alter table equipos_backline enable row level security;
alter table reservas_turnos enable row level security;
alter table equipos_alquilados enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Salas de Ensayo & Estudios de Audio',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Salas de Ensayo & Estudios de Audio
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para salas de ensayo & estudios de audio:
1. /reservas/horarios: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /sala/[id]/alquiler-equipos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cabina/cronometro-vivo: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/reportes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 76. ACADEMIAS DE JIU JITSU, KARATE & ARTES MARCIALES
  {
    id: 'artes_marciales',
    category: 'deportes',
    categoryLabel: 'Artes Marciales & Combate',
    label: 'Academias de Jiu Jitsu, Karate & Artes Marciales',
    icon: '🥋',
    tag: 'Dojos de Karate, Jiu Jitsu Brasileño (BJJ), Taekwondo & Judo',
    description: 'Graduación de cinturones y grados (stripes), control de asistencia para derecho a examen y torneos.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Jiu Jitsu, Karate & Artes Marciales',
      whatToCreate: 'Plataforma web integral especializada para academias de jiu jitsu, karate & artes marciales con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_marciales, cinturones_grados, asistencias_tatami, examenes_promocion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Jiu Jitsu, Karate & Artes Marciales (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/tatami/asistencia-rapida","/alumno/[id]/cinturon-grados","/examenes/elegibles-promocion","/admin/mensualidades"]
    },
    supabase: {
      tables: ["alumnos_marciales","cinturones_grados","asistencias_tatami","examenes_promocion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE JIU JITSU, KARATE & ARTES MARCIALES
create table if not exists alumnos_marciales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cinturones_grados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists asistencias_tatami (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists examenes_promocion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_marciales enable row level security;
alter table cinturones_grados enable row level security;
alter table asistencias_tatami enable row level security;
alter table examenes_promocion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Jiu Jitsu, Karate & Artes Marciales',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Jiu Jitsu, Karate & Artes Marciales
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de jiu jitsu, karate & artes marciales:
1. /tatami/asistencia-rapida: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /alumno/[id]/cinturon-grados: Gestión interactiva con filtros de búsqueda instantáneos.
3. /examenes/elegibles-promocion: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/mensualidades: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 77. CLUBES DE PÁDEL & TENIS
  {
    id: 'club_padel',
    category: 'deportes',
    categoryLabel: 'Pádel & Tenis',
    label: 'Clubes de Pádel & Tenis',
    icon: '🎾',
    tag: 'Clubes de Pádel, Tenis, Squash & Raqueta',
    description: 'Reserva de pistas de cristal, buscador de partidos abiertos por categoría (1ra a 6ta) y alquiler de palas.',
    planData: {
      softwareName: 'Sistema de Gestión para Clubes de Pádel & Tenis',
      whatToCreate: 'Plataforma web integral especializada para clubes de pádel & tenis con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pistas_padel, reservas_pistas, partidos_abiertos_ranking, alquiler_palas_pelotas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Clubes de Pádel & Tenis (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pistas/reserva-vivo","/partidos/unirse-cuarto-jugador","/ranking/torneo-americano","/admin/caja"]
    },
    supabase: {
      tables: ["pistas_padel","reservas_pistas","partidos_abiertos_ranking","alquiler_palas_pelotas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CLUBES DE PÁDEL & TENIS
create table if not exists pistas_padel (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_pistas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists partidos_abiertos_ranking (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists alquiler_palas_pelotas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pistas_padel enable row level security;
alter table reservas_pistas enable row level security;
alter table partidos_abiertos_ranking enable row level security;
alter table alquiler_palas_pelotas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Clubes de Pádel & Tenis',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Clubes de Pádel & Tenis
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para clubes de pádel & tenis:
1. /pistas/reserva-vivo: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /partidos/unirse-cuarto-jugador: Gestión interactiva con filtros de búsqueda instantáneos.
3. /ranking/torneo-americano: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 78. BOXES DE CROSSFIT & ENTRENAMIENTO
  {
    id: 'crossfit',
    category: 'deportes',
    categoryLabel: 'Crossfit & Funcional',
    label: 'Boxes de Crossfit & Entrenamiento',
    icon: '🏋️‍♂️',
    tag: 'Boxes de Crossfit, Entrenamiento Funcional & Calistenia',
    description: 'Publicación del WOD del día, pizarra de récords personales (PRs) de levantamientos y reservas de turnos.',
    planData: {
      softwareName: 'Sistema de Gestión para Boxes de Crossfit & Entrenamiento',
      whatToCreate: 'Plataforma web integral especializada para boxes de crossfit & entrenamiento con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: atletas_box, wods_diarios, records_prs, reservas_turnos_box.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Boxes de Crossfit & Entrenamiento (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/wod/pizarra-del-dia","/atleta/mis-prs-levantamiento","/clases/reservar-turno","/admin/atletas"]
    },
    supabase: {
      tables: ["atletas_box","wods_diarios","records_prs","reservas_turnos_box"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: BOXES DE CROSSFIT & ENTRENAMIENTO
create table if not exists atletas_box (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists wods_diarios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists records_prs (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_turnos_box (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table atletas_box enable row level security;
alter table wods_diarios enable row level security;
alter table records_prs enable row level security;
alter table reservas_turnos_box enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Boxes de Crossfit & Entrenamiento',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Boxes de Crossfit & Entrenamiento
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para boxes de crossfit & entrenamiento:
1. /wod/pizarra-del-dia: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /atleta/mis-prs-levantamiento: Gestión interactiva con filtros de búsqueda instantáneos.
3. /clases/reservar-turno: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/atletas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 79. ACADEMIAS DE BOXEO & CONTACTO
  {
    id: 'boxeo',
    category: 'deportes',
    categoryLabel: 'Boxeo & Deportes',
    label: 'Academias de Boxeo & Contacto',
    icon: '🥊',
    tag: 'Gimnasios de Boxeo, Kickboxing & Muay Thai',
    description: 'Control de rounds con temporizador sonoro en pantalla gigante, categorías de peso y sparring seguro.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Boxeo & Contacto',
      whatToCreate: 'Plataforma web integral especializada para academias de boxeo & contacto con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: boxeadores_socios, temporizadores_rounds, sparrings_programados, membresias_boxeo.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Boxeo & Contacto (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/ring/temporizador-rounds-tv","/sparring/emparejamiento-pesos","/socios/asistencia","/admin/planes"]
    },
    supabase: {
      tables: ["boxeadores_socios","temporizadores_rounds","sparrings_programados","membresias_boxeo"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE BOXEO & CONTACTO
create table if not exists boxeadores_socios (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists temporizadores_rounds (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sparrings_programados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists membresias_boxeo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table boxeadores_socios enable row level security;
alter table temporizadores_rounds enable row level security;
alter table sparrings_programados enable row level security;
alter table membresias_boxeo enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Boxeo & Contacto',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Boxeo & Contacto
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de boxeo & contacto:
1. /ring/temporizador-rounds-tv: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /sparring/emparejamiento-pesos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /socios/asistencia: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/planes: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 80. ESCUELAS DE SURF & DEPORTES DE OLAS
  {
    id: 'surf',
    category: 'deportes',
    categoryLabel: 'Deportes Acuáticos',
    label: 'Escuelas de Surf & Deportes de Olas',
    icon: '🏄‍♂️',
    tag: 'Escuelas de Surf, Bodyboard & Paddle Surf',
    description: 'Reporte de mareas y oleaje, alquiler de tablas por volumen (litros) y trajes de neopreno según talla.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Surf & Deportes de Olas',
      whatToCreate: 'Plataforma web integral especializada para escuelas de surf & deportes de olas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_surf, tablas_neoprenos_stock, reporte_olas_mareas, clases_surf_agenda.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Surf & Deportes de Olas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/playa/reporte-olas-hoy","/alquiler/tablas-trajes","/clases/agenda-instructores","/admin/ventas"]
    },
    supabase: {
      tables: ["alumnos_surf","tablas_neoprenos_stock","reporte_olas_mareas","clases_surf_agenda"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE SURF & DEPORTES DE OLAS
create table if not exists alumnos_surf (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tablas_neoprenos_stock (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reporte_olas_mareas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clases_surf_agenda (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_surf enable row level security;
alter table tablas_neoprenos_stock enable row level security;
alter table reporte_olas_mareas enable row level security;
alter table clases_surf_agenda enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Surf & Deportes de Olas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Surf & Deportes de Olas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de surf & deportes de olas:
1. /playa/reporte-olas-hoy: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /alquiler/tablas-trajes: Gestión interactiva con filtros de búsqueda instantáneos.
3. /clases/agenda-instructores: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 81. GIMNASIOS DE ESCALADA & BOULDER
  {
    id: 'escalada_boulder',
    category: 'deportes',
    categoryLabel: 'Escalada & Aventura',
    label: 'Gimnasios de Escalada & Boulder',
    icon: '🧗',
    tag: 'Muros de Escalada, Boulder & Rocódromos',
    description: 'Catálogo interactivo de rutas de boulder por colores/dificultad (V0 a V10), registro de ascensos (tops).',
    planData: {
      softwareName: 'Sistema de Gestión para Gimnasios de Escalada & Boulder',
      whatToCreate: 'Plataforma web integral especializada para gimnasios de escalada & boulder con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: muros_sectores, rutas_boulder_grados, ascensos_tops_atletas, alquiler_pies_de_gato.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Gimnasios de Escalada & Boulder (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/boulder/mapa-rutas-colores","/atleta/marcar-tops-flashes","/alquiler/magnesio-zapatillas","/admin/pases"]
    },
    supabase: {
      tables: ["muros_sectores","rutas_boulder_grados","ascensos_tops_atletas","alquiler_pies_de_gato"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: GIMNASIOS DE ESCALADA & BOULDER
create table if not exists muros_sectores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutas_boulder_grados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists ascensos_tops_atletas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists alquiler_pies_de_gato (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table muros_sectores enable row level security;
alter table rutas_boulder_grados enable row level security;
alter table ascensos_tops_atletas enable row level security;
alter table alquiler_pies_de_gato enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Gimnasios de Escalada & Boulder',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Gimnasios de Escalada & Boulder
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para gimnasios de escalada & boulder:
1. /boulder/mapa-rutas-colores: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /atleta/marcar-tops-flashes: Gestión interactiva con filtros de búsqueda instantáneos.
3. /alquiler/magnesio-zapatillas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/pases: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 82. TALLERES DE CICLISMO & RUTAS GUIADAS
  {
    id: 'ciclismo',
    category: 'deportes',
    categoryLabel: 'Ciclismo & Rutas',
    label: 'Talleres de Ciclismo & Rutas Guiadas',
    icon: '🚴',
    tag: 'Talleres de Bicicletas, Ciclismo de Montaña & Tours',
    description: 'Mantenimiento de suspensiones y transmisión por kilometraje, alquiler de bicis y grupos de salidas.',
    planData: {
      softwareName: 'Sistema de Gestión para Talleres de Ciclismo & Rutas Guiadas',
      whatToCreate: 'Plataforma web integral especializada para talleres de ciclismo & rutas guiadas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: bicicletas_taller, servicios_mantenimiento_bici, rutas_grupales_salidas, alquiler_bicis.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Talleres de Ciclismo & Rutas Guiadas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/taller/orden-mantenimiento","/rutas/inscripcion-salidas","/alquiler/flota-bicis","/admin/repuestos"]
    },
    supabase: {
      tables: ["bicicletas_taller","servicios_mantenimiento_bici","rutas_grupales_salidas","alquiler_bicis"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TALLERES DE CICLISMO & RUTAS GUIADAS
create table if not exists bicicletas_taller (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists servicios_mantenimiento_bici (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists rutas_grupales_salidas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists alquiler_bicis (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table bicicletas_taller enable row level security;
alter table servicios_mantenimiento_bici enable row level security;
alter table rutas_grupales_salidas enable row level security;
alter table alquiler_bicis enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Talleres de Ciclismo & Rutas Guiadas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Talleres de Ciclismo & Rutas Guiadas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para talleres de ciclismo & rutas guiadas:
1. /taller/orden-mantenimiento: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /rutas/inscripcion-salidas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /alquiler/flota-bicis: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/repuestos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 83. BOLERAS & CENTROS DE BOWLING
  {
    id: 'bowling',
    category: 'deportes',
    categoryLabel: 'Entretenimiento & Bolos',
    label: 'Boleras & Centros de Bowling',
    icon: '🎳',
    tag: 'Boleras, Centros de Bowling & Juegos Familiares',
    description: 'Marcador de puntajes automático por pista, control de alquiler de zapatos por talla y pedidos de snacks.',
    planData: {
      softwareName: 'Sistema de Gestión para Boleras & Centros de Bowling',
      whatToCreate: 'Plataforma web integral especializada para boleras & centros de bowling con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: pistas_bowling, partidas_jugadores, zapatos_bowling_tallas, pedidos_snack_bar.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Boleras & Centros de Bowling (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pista/marcador-puntajes","/recepcion/asignar-pistas-zapatos","/cantina/pedidos-mesa","/admin/caja"]
    },
    supabase: {
      tables: ["pistas_bowling","partidas_jugadores","zapatos_bowling_tallas","pedidos_snack_bar"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: BOLERAS & CENTROS DE BOWLING
create table if not exists pistas_bowling (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists partidas_jugadores (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists zapatos_bowling_tallas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pedidos_snack_bar (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table pistas_bowling enable row level security;
alter table partidas_jugadores enable row level security;
alter table zapatos_bowling_tallas enable row level security;
alter table pedidos_snack_bar enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Boleras & Centros de Bowling',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Boleras & Centros de Bowling
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para boleras & centros de bowling:
1. /pista/marcador-puntajes: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /recepcion/asignar-pistas-zapatos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cantina/pedidos-mesa: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/caja: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 84. PISTAS DE PATINAJE & ROLLER SKATE
  {
    id: 'patinaje',
    category: 'deportes',
    categoryLabel: 'Patinaje & Ruedas',
    label: 'Pistas de Patinaje & Roller Skate',
    icon: '🛼',
    tag: 'Pistas de Patinaje sobre Ruedas, Hielo & Roller Disco',
    description: 'Control de tiempo en pista por pulsera RFID, alquiler de patines y cascos de protección y pases libres.',
    planData: {
      softwareName: 'Sistema de Gestión para Pistas de Patinaje & Roller Skate',
      whatToCreate: 'Plataforma web integral especializada para pistas de patinaje & roller skate con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: patines_inventario, sesiones_pista_pulseras, pases_tiempo_entradas, clases_patinaje.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Pistas de Patinaje & Roller Skate (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/pista/cronometro-pulseras","/alquiler/patines-protecciones","/boleteria/pases-hora","/admin/ventas"]
    },
    supabase: {
      tables: ["patines_inventario","sesiones_pista_pulseras","pases_tiempo_entradas","clases_patinaje"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: PISTAS DE PATINAJE & ROLLER SKATE
create table if not exists patines_inventario (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists sesiones_pista_pulseras (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists pases_tiempo_entradas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clases_patinaje (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table patines_inventario enable row level security;
alter table sesiones_pista_pulseras enable row level security;
alter table pases_tiempo_entradas enable row level security;
alter table clases_patinaje enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Pistas de Patinaje & Roller Skate',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Pistas de Patinaje & Roller Skate
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para pistas de patinaje & roller skate:
1. /pista/cronometro-pulseras: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /alquiler/patines-protecciones: Gestión interactiva con filtros de búsqueda instantáneos.
3. /boleteria/pases-hora: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/ventas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 85. CAMPOS DE PAINTBALL & AIRSOFT
  {
    id: 'paintball',
    category: 'deportes',
    categoryLabel: 'Aventura & Táctico',
    label: 'Campos de Paintball & Airsoft',
    icon: '🎯',
    tag: 'Campos de Paintball, Airsoft & Combates Tácticos',
    description: 'Reserva de campos temáticos por grupos, recargas de pintura/gas CO2 y alquiler de marcadoras y máscaras.',
    planData: {
      softwareName: 'Sistema de Gestión para Campos de Paintball & Airsoft',
      whatToCreate: 'Plataforma web integral especializada para campos de paintball & airsoft con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: campos_tematicos, reservas_grupos_partidas, recargas_bolas_gas, equipos_seguridad.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Campos de Paintball & Airsoft (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/reservas/grupos-combate","/campo/cronometro-partida","/recargas/bolas-pintura","/admin/equipamiento"]
    },
    supabase: {
      tables: ["campos_tematicos","reservas_grupos_partidas","recargas_bolas_gas","equipos_seguridad"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CAMPOS DE PAINTBALL & AIRSOFT
create table if not exists campos_tematicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reservas_grupos_partidas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recargas_bolas_gas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists equipos_seguridad (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table campos_tematicos enable row level security;
alter table reservas_grupos_partidas enable row level security;
alter table recargas_bolas_gas enable row level security;
alter table equipos_seguridad enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Campos de Paintball & Airsoft',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Campos de Paintball & Airsoft
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para campos de paintball & airsoft:
1. /reservas/grupos-combate: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /campo/cronometro-partida: Gestión interactiva con filtros de búsqueda instantáneos.
3. /recargas/bolas-pintura: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/equipamiento: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 86. ACADEMIAS DE GIMNASIA & ACROBACIA
  {
    id: 'gimnasia_artistica',
    category: 'deportes',
    categoryLabel: 'Gimnasia & Acrobacia',
    label: 'Academias de Gimnasia & Acrobacia',
    icon: '🤸‍♀️',
    tag: 'Gimnasia Artística, Rítmica, Acrobacia & Parkour',
    description: 'Evaluación de rutinas en suelo, viga, barras y salto, control de categorías por edad y festivales de gala.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Gimnasia & Acrobacia',
      whatToCreate: 'Plataforma web integral especializada para academias de gimnasia & acrobacia con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: gimnastas_alumnas, aparatos_disciplinas, evaluaciones_rutinas, entradas_gala_anual.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Gimnasia & Acrobacia (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/evaluaciones/aparatos","/alumna/progresion-habilidades","/asistencia/turnos","/admin/mensualidades"]
    },
    supabase: {
      tables: ["gimnastas_alumnas","aparatos_disciplinas","evaluaciones_rutinas","entradas_gala_anual"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE GIMNASIA & ACROBACIA
create table if not exists gimnastas_alumnas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists aparatos_disciplinas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_rutinas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists entradas_gala_anual (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table gimnastas_alumnas enable row level security;
alter table aparatos_disciplinas enable row level security;
alter table evaluaciones_rutinas enable row level security;
alter table entradas_gala_anual enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Gimnasia & Acrobacia',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Gimnasia & Acrobacia
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de gimnasia & acrobacia:
1. /evaluaciones/aparatos: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /alumna/progresion-habilidades: Gestión interactiva con filtros de búsqueda instantáneos.
3. /asistencia/turnos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/mensualidades: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 87. ACADEMIAS DE DANZA & BAILE
  {
    id: 'danza',
    category: 'educacion',
    categoryLabel: 'Arte & Danza',
    label: 'Academias de Danza & Baile',
    icon: '💃',
    tag: 'Academias de Ballet, Salsa, Bachata, Urbano & Danza',
    description: 'Control de mensualidades, pases libres de clases, coreografías en video y vestuario para festivales.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Danza & Baile',
      whatToCreate: 'Plataforma web integral especializada para academias de danza & baile con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: estudiantes_danza, disciplinas_danza, horarios_dias, asistencias_alumnos, vestuarios_festivales.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Danza & Baile (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/asistencias/check-in-baile","/estudiante/mis-clases","/coreografias/biblioteca-videos","/admin/recibos"]
    },
    supabase: {
      tables: ["estudiantes_danza","disciplinas_danza","horarios_dias","asistencias_alumnos","vestuarios_festivales"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE DANZA & BAILE
create table if not exists estudiantes_danza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists disciplinas_danza (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists horarios_dias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists asistencias_alumnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists vestuarios_festivales (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table estudiantes_danza enable row level security;
alter table disciplinas_danza enable row level security;
alter table horarios_dias enable row level security;
alter table asistencias_alumnos enable row level security;
alter table vestuarios_festivales enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Danza & Baile',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Danza & Baile
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de danza & baile:
1. /asistencias/check-in-baile: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /estudiante/mis-clases: Gestión interactiva con filtros de búsqueda instantáneos.
3. /coreografias/biblioteca-videos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/recibos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 88. ACADEMIAS PREUNIVERSITARIAS & CURSOS
  {
    id: 'academias_cursos',
    category: 'educacion',
    categoryLabel: 'Educación & Cursos',
    label: 'Academias Preuniversitarias & Cursos',
    icon: '🎓',
    tag: 'Academias Preuniversitarias, Institutos & Cursos Online',
    description: 'Simulacros de examen con cálculo de puntaje y orden de mérito, banco de preguntas y clases grabadas.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias Preuniversitarias & Cursos',
      whatToCreate: 'Plataforma web integral especializada para academias preuniversitarias & cursos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_academia, simulacros_examenes, preguntas_banco, cursos_modulos, orden_merito.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias Preuniversitarias & Cursos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/simulacros/rendir-examen","/resultados/ranking-merito","/aula-virtual/clases-grabadas","/admin/alumnos"]
    },
    supabase: {
      tables: ["alumnos_academia","simulacros_examenes","preguntas_banco","cursos_modulos","orden_merito"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS PREUNIVERSITARIAS & CURSOS
create table if not exists alumnos_academia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists simulacros_examenes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists preguntas_banco (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists cursos_modulos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists orden_merito (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_academia enable row level security;
alter table simulacros_examenes enable row level security;
alter table preguntas_banco enable row level security;
alter table cursos_modulos enable row level security;
alter table orden_merito enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias Preuniversitarias & Cursos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias Preuniversitarias & Cursos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias preuniversitarias & cursos:
1. /simulacros/rendir-examen: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /resultados/ranking-merito: Gestión interactiva con filtros de búsqueda instantáneos.
3. /aula-virtual/clases-grabadas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/alumnos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 89. ESCUELAS DE MANEJO & AUTOESCUELAS
  {
    id: 'escuelas_manejo',
    category: 'educacion',
    categoryLabel: 'Conducción & Manejo',
    label: 'Escuelas de Manejo & Autoescuelas',
    icon: '🚦',
    tag: 'Autoescuelas, Clases de Manejo & Licencias de Conducir',
    description: 'Programación de horas prácticas en circuito y calle con auto doble pedal, test de reglas de tránsito.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Manejo & Autoescuelas',
      whatToCreate: 'Plataforma web integral especializada para escuelas de manejo & autoescuelas con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_conduccion, instructores_manejo, autos_doble_pedal, horas_practicas_agenda, simulador_reglas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Manejo & Autoescuelas (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/agenda/horas-practicas-auto","/simulador/examen-reglas","/instructor/evaluacion-calle","/admin/licencias"]
    },
    supabase: {
      tables: ["alumnos_conduccion","instructores_manejo","autos_doble_pedal","horas_practicas_agenda","simulador_reglas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE MANEJO & AUTOESCUELAS
create table if not exists alumnos_conduccion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists instructores_manejo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists autos_doble_pedal (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists horas_practicas_agenda (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists simulador_reglas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_conduccion enable row level security;
alter table instructores_manejo enable row level security;
alter table autos_doble_pedal enable row level security;
alter table horas_practicas_agenda enable row level security;
alter table simulador_reglas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Manejo & Autoescuelas',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Manejo & Autoescuelas
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de manejo & autoescuelas:
1. /agenda/horas-practicas-auto: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /simulador/examen-reglas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /instructor/evaluacion-calle: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/licencias: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 90. ACADEMIAS DE IDIOMAS & INGLÉS
  {
    id: 'idiomas',
    category: 'educacion',
    categoryLabel: 'Idiomas & Lenguas',
    label: 'Academias de Idiomas & Inglés',
    icon: '🗣️',
    tag: 'Institutos de Inglés, Francés, Alemán & Lenguas Extranjeras',
    description: 'Exámenes de nivelación según marco CEFR (A1 a C2), clubes de conversación y tareas de pronunciación.',
    planData: {
      softwareName: 'Sistema de Gestión para Academias de Idiomas & Inglés',
      whatToCreate: 'Plataforma web integral especializada para academias de idiomas & inglés con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: estudiantes_idiomas, niveles_cefr, clubes_conversacion, evaluaciones_orales_escritas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Academias de Idiomas & Inglés (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/test-nivelacion/ingreso","/club-conversacion/reservar","/aula/audios-listening","/admin/certificados"]
    },
    supabase: {
      tables: ["estudiantes_idiomas","niveles_cefr","clubes_conversacion","evaluaciones_orales_escritas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ACADEMIAS DE IDIOMAS & INGLÉS
create table if not exists estudiantes_idiomas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists niveles_cefr (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists clubes_conversacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists evaluaciones_orales_escritas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table estudiantes_idiomas enable row level security;
alter table niveles_cefr enable row level security;
alter table clubes_conversacion enable row level security;
alter table evaluaciones_orales_escritas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Academias de Idiomas & Inglés',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Academias de Idiomas & Inglés
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para academias de idiomas & inglés:
1. /test-nivelacion/ingreso: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /club-conversacion/reservar: Gestión interactiva con filtros de búsqueda instantáneos.
3. /aula/audios-listening: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/certificados: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 91. ESCUELAS DE MÚSICA, CANTO & INSTRUMENTOS
  {
    id: 'escuela_musica',
    category: 'educacion',
    categoryLabel: 'Música & Canto',
    label: 'Escuelas de Música, Canto & Instrumentos',
    icon: '🎸',
    tag: 'Academias de Música, Canto, Piano, Guitarra & Batería',
    description: 'Agenda de clases individuales de instrumento, visor de partituras/tablaturas y audiciones de fin de ciclo.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Música, Canto & Instrumentos',
      whatToCreate: 'Plataforma web integral especializada para escuelas de música, canto & instrumentos con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_musica, profesores_instrumento, aulas_insonorizadas, partituras_archivos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Música, Canto & Instrumentos (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/agenda/clases-individuales","/partituras/visor-digital","/recital/programa-audicion","/admin/pagos"]
    },
    supabase: {
      tables: ["alumnos_musica","profesores_instrumento","aulas_insonorizadas","partituras_archivos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE MÚSICA, CANTO & INSTRUMENTOS
create table if not exists alumnos_musica (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists profesores_instrumento (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists aulas_insonorizadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists partituras_archivos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_musica enable row level security;
alter table profesores_instrumento enable row level security;
alter table aulas_insonorizadas enable row level security;
alter table partituras_archivos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Música, Canto & Instrumentos',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Música, Canto & Instrumentos
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de música, canto & instrumentos:
1. /agenda/clases-individuales: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /partituras/visor-digital: Gestión interactiva con filtros de búsqueda instantáneos.
3. /recital/programa-audicion: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/pagos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 92. TALLERES DE GASTRONOMÍA & REPOSTERÍA
  {
    id: 'talleres_cocina',
    category: 'educacion',
    categoryLabel: 'Gastronomía & Talleres',
    label: 'Talleres de Gastronomía & Repostería',
    icon: '👩‍🍳',
    tag: 'Escuelas de Cocina, Talleres de Repostería & Sommelier',
    description: 'Inscripción a masterclasses de cocina con ingredientes incluidos, recetarios descargables y recetario paso a paso.',
    planData: {
      softwareName: 'Sistema de Gestión para Talleres de Gastronomía & Repostería',
      whatToCreate: 'Plataforma web integral especializada para talleres de gastronomía & repostería con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: talleres_cocina_eventos, recetarios_masterclass, inscripciones_alumnos, estaciones_cocina.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Talleres de Gastronomía & Repostería (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/talleres/proximas-fechas","/recetario/paso-a-paso","/estacion/guia-ingredientes","/admin/inscripciones"]
    },
    supabase: {
      tables: ["talleres_cocina_eventos","recetarios_masterclass","inscripciones_alumnos","estaciones_cocina"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TALLERES DE GASTRONOMÍA & REPOSTERÍA
create table if not exists talleres_cocina_eventos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists recetarios_masterclass (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists inscripciones_alumnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists estaciones_cocina (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table talleres_cocina_eventos enable row level security;
alter table recetarios_masterclass enable row level security;
alter table inscripciones_alumnos enable row level security;
alter table estaciones_cocina enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Talleres de Gastronomía & Repostería',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Talleres de Gastronomía & Repostería
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para talleres de gastronomía & repostería:
1. /talleres/proximas-fechas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /recetario/paso-a-paso: Gestión interactiva con filtros de búsqueda instantáneos.
3. /estacion/guia-ingredientes: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/inscripciones: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 93. GUARDERÍAS & NIDOS INFANTILES
  {
    id: 'guarderias',
    category: 'educacion',
    categoryLabel: 'Cuidado Infantil',
    label: 'Guarderías & Nidos Infantiles',
    icon: '🧸',
    tag: 'Guarderías, Nidos, Cunas & Jardines de Infancia',
    description: 'Libreta de control diario digital (siesta, comida, pañal/baño), fotos privadas para padres y aviso de retiro.',
    planData: {
      softwareName: 'Sistema de Gestión para Guarderías & Nidos Infantiles',
      whatToCreate: 'Plataforma web integral especializada para guarderías & nidos infantiles con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: ninos_guarderia, reportes_diarios_actividades, autorizados_recojo_dni, fotos_privadas_sala.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Guarderías & Nidos Infantiles (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/sala/reporte-diario-rapido","/padres/muro-actividades","/puerta/control-recojo-seguro","/admin/matriculas"]
    },
    supabase: {
      tables: ["ninos_guarderia","reportes_diarios_actividades","autorizados_recojo_dni","fotos_privadas_sala"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: GUARDERÍAS & NIDOS INFANTILES
create table if not exists ninos_guarderia (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists reportes_diarios_actividades (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists autorizados_recojo_dni (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists fotos_privadas_sala (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table ninos_guarderia enable row level security;
alter table reportes_diarios_actividades enable row level security;
alter table autorizados_recojo_dni enable row level security;
alter table fotos_privadas_sala enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Guarderías & Nidos Infantiles',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Guarderías & Nidos Infantiles
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para guarderías & nidos infantiles:
1. /sala/reporte-diario-rapido: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /padres/muro-actividades: Gestión interactiva con filtros de búsqueda instantáneos.
3. /puerta/control-recojo-seguro: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/matriculas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 94. CENTROS DE CAPACITACIÓN TÉCNICA & OFICIOS
  {
    id: 'capacitacion_tecnica',
    category: 'educacion',
    categoryLabel: 'Oficios & Técnica',
    label: 'Centros de Capacitación Técnica & Oficios',
    icon: '🛠️',
    tag: 'Institutos Técnicos de Electricidad, Soldadura, Redes & Reparación',
    description: 'Talleres prácticos con control de uso de herramientas de laboratorio, certificación de horas y bolsa de trabajo.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Capacitación Técnica & Oficios',
      whatToCreate: 'Plataforma web integral especializada para centros de capacitación técnica & oficios con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_tecnicos, laboratorios_mesas, certificados_competencias, bolsa_empleo_empresas.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Capacitación Técnica & Oficios (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/laboratorio/asistencia-practicas","/certificados/emision-competencias","/bolsa-trabajo/ofertas","/admin/cursos"]
    },
    supabase: {
      tables: ["alumnos_tecnicos","laboratorios_mesas","certificados_competencias","bolsa_empleo_empresas"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE CAPACITACIÓN TÉCNICA & OFICIOS
create table if not exists alumnos_tecnicos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists laboratorios_mesas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists certificados_competencias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists bolsa_empleo_empresas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_tecnicos enable row level security;
alter table laboratorios_mesas enable row level security;
alter table certificados_competencias enable row level security;
alter table bolsa_empleo_empresas enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Capacitación Técnica & Oficios',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Capacitación Técnica & Oficios
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de capacitación técnica & oficios:
1. /laboratorio/asistencia-practicas: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /certificados/emision-competencias: Gestión interactiva con filtros de búsqueda instantáneos.
3. /bolsa-trabajo/ofertas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/cursos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 95. ESCUELAS DE CÓDIGO & ROBÓTICA PARA NIÑOS
  {
    id: 'robotica_ninos',
    category: 'educacion',
    categoryLabel: 'Tecnología & STEM',
    label: 'Escuelas de Código & Robótica para Niños',
    icon: '🤖',
    tag: 'Academias STEM, Robótica Educativa, Scratch & Python Kids',
    description: 'Gamificación de retos de programación por niveles (misiones), proyectos de robótica y diplomas de logros.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Código & Robótica para Niños',
      whatToCreate: 'Plataforma web integral especializada para escuelas de código & robótica para niños con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: estudiantes_kids, misiones_retos_codigo, medallas_desbloqueadas, proyectos_showcase.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Código & Robótica para Niños (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/misiones/mapa-de-niveles","/estudiante/mis-medallas","/feria/galeria-proyectos","/admin/alumnos"]
    },
    supabase: {
      tables: ["estudiantes_kids","misiones_retos_codigo","medallas_desbloqueadas","proyectos_showcase"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE CÓDIGO & ROBÓTICA PARA NIÑOS
create table if not exists estudiantes_kids (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists misiones_retos_codigo (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists medallas_desbloqueadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists proyectos_showcase (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table estudiantes_kids enable row level security;
alter table misiones_retos_codigo enable row level security;
alter table medallas_desbloqueadas enable row level security;
alter table proyectos_showcase enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Código & Robótica para Niños',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Código & Robótica para Niños
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de código & robótica para niños:
1. /misiones/mapa-de-niveles: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /estudiante/mis-medallas: Gestión interactiva con filtros de búsqueda instantáneos.
3. /feria/galeria-proyectos: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/alumnos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 96. TUTORÍAS UNIVERSITARIAS & ASESORÍA DE TESIS
  {
    id: 'tutorias_tesis',
    category: 'educacion',
    categoryLabel: 'Asesoría Universitaria',
    label: 'Tutorías Universitarias & Asesoría de Tesis',
    icon: '📑',
    tag: 'Asesorías de Tesis, Metodología de Investigación & Tutorías',
    description: 'Control de capítulos de tesis por hitos, revisión con control de plagio/Turnitin y reuniones con asesor.',
    planData: {
      softwareName: 'Sistema de Gestión para Tutorías Universitarias & Asesoría de Tesis',
      whatToCreate: 'Plataforma web integral especializada para tutorías universitarias & asesoría de tesis con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: tesistas, asesores_tesis, capitulos_entregas, citas_asesoria_virtual.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Tutorías Universitarias & Asesoría de Tesis (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/tesis/[id]/capitulos-avance","/asesoria/agenda-reuniones","/revision/observaciones-pdf","/admin/contratos"]
    },
    supabase: {
      tables: ["tesistas","asesores_tesis","capitulos_entregas","citas_asesoria_virtual"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TUTORÍAS UNIVERSITARIAS & ASESORÍA DE TESIS
create table if not exists tesistas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists asesores_tesis (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists capitulos_entregas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists citas_asesoria_virtual (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table tesistas enable row level security;
alter table asesores_tesis enable row level security;
alter table capitulos_entregas enable row level security;
alter table citas_asesoria_virtual enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Tutorías Universitarias & Asesoría de Tesis',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Tutorías Universitarias & Asesoría de Tesis
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para tutorías universitarias & asesoría de tesis:
1. /tesis/[id]/capitulos-avance: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /asesoria/agenda-reuniones: Gestión interactiva con filtros de búsqueda instantáneos.
3. /revision/observaciones-pdf: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/contratos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 97. ESCUELAS DE MAQUILLAJE PROFESIONAL
  {
    id: 'escuela_maquillaje',
    category: 'educacion',
    categoryLabel: 'Belleza & Maquillaje',
    label: 'Escuelas de Maquillaje Profesional',
    icon: '💄',
    tag: 'Academias de Maquillaje, Peinado Social & Microblading',
    description: 'Portafolio de prácticas en modelos reales con calificación de técnicas (ojos, labios, piel) y diploma.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Maquillaje Profesional',
      whatToCreate: 'Plataforma web integral especializada para escuelas de maquillaje profesional con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnas_maquillaje, practicas_modelos_fotos, tecnicas_calificadas, diplomas_graduacion.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Maquillaje Profesional (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/evaluacion/rubrica-maquillaje","/portafolio/fotos-modelos","/agenda/practicas-estudio","/admin/alumnas"]
    },
    supabase: {
      tables: ["alumnas_maquillaje","practicas_modelos_fotos","tecnicas_calificadas","diplomas_graduacion"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE MAQUILLAJE PROFESIONAL
create table if not exists alumnas_maquillaje (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists practicas_modelos_fotos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists tecnicas_calificadas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists diplomas_graduacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnas_maquillaje enable row level security;
alter table practicas_modelos_fotos enable row level security;
alter table tecnicas_calificadas enable row level security;
alter table diplomas_graduacion enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Maquillaje Profesional',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Maquillaje Profesional
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de maquillaje profesional:
1. /evaluacion/rubrica-maquillaje: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /portafolio/fotos-modelos: Gestión interactiva con filtros de búsqueda instantáneos.
3. /agenda/practicas-estudio: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/alumnas: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 98. TALLERES DE CERÁMICA, PINTURA & ARTE
  {
    id: 'talleres_arte',
    category: 'educacion',
    categoryLabel: 'Artes Plásticas',
    label: 'Talleres de Cerámica, Pintura & Arte',
    icon: '🏺',
    tag: 'Talleres de Cerámica, Pintura al Óleo, Escultura & Acuarela',
    description: 'Seguimiento de piezas de cerámica en proceso (torno -> secado -> primer horneado -> esmaltado -> listo).',
    planData: {
      softwareName: 'Sistema de Gestión para Talleres de Cerámica, Pintura & Arte',
      whatToCreate: 'Plataforma web integral especializada para talleres de cerámica, pintura & arte con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: artistas_alumnos, piezas_ceramica_estados, hornos_quemas_fechas, talleres_abonos.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Talleres de Cerámica, Pintura & Arte (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/ceramica/seguimiento-horneado","/talleres/reserva-torno","/galeria/piezas-terminadas","/admin/alumnos"]
    },
    supabase: {
      tables: ["artistas_alumnos","piezas_ceramica_estados","hornos_quemas_fechas","talleres_abonos"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: TALLERES DE CERÁMICA, PINTURA & ARTE
create table if not exists artistas_alumnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists piezas_ceramica_estados (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists hornos_quemas_fechas (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists talleres_abonos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table artistas_alumnos enable row level security;
alter table piezas_ceramica_estados enable row level security;
alter table hornos_quemas_fechas enable row level security;
alter table talleres_abonos enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Talleres de Cerámica, Pintura & Arte',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Talleres de Cerámica, Pintura & Arte
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para talleres de cerámica, pintura & arte:
1. /ceramica/seguimiento-horneado: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /talleres/reserva-torno: Gestión interactiva con filtros de búsqueda instantáneos.
3. /galeria/piezas-terminadas: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/alumnos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 99. ESCUELAS DE FOTOGRAFÍA & CINE DIGITAL
  {
    id: 'escuela_audiovisual',
    category: 'educacion',
    categoryLabel: 'Cine & Fotografía',
    label: 'Escuelas de Fotografía & Cine Digital',
    icon: '🎬',
    tag: 'Escuelas de Cine, Fotografía, Iluminación & Edición de Video',
    description: 'Préstamo de cámaras réflex, lentes y luces para prácticas de rodaje, festivales de cortometrajes escolares.',
    planData: {
      softwareName: 'Sistema de Gestión para Escuelas de Fotografía & Cine Digital',
      whatToCreate: 'Plataforma web integral especializada para escuelas de fotografía & cine digital con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: alumnos_audiovisual, equipos_camaras_prestamos, proyectos_cortometrajes, talleres_rodaje.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Escuelas de Fotografía & Cine Digital (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/almacen/prestamo-camaras-luces","/rodaje/plan-de-grabacion","/cortos/festival-evaluacion","/admin/cursos"]
    },
    supabase: {
      tables: ["alumnos_audiovisual","equipos_camaras_prestamos","proyectos_cortometrajes","talleres_rodaje"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: ESCUELAS DE FOTOGRAFÍA & CINE DIGITAL
create table if not exists alumnos_audiovisual (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists equipos_camaras_prestamos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists proyectos_cortometrajes (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists talleres_rodaje (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table alumnos_audiovisual enable row level security;
alter table equipos_camaras_prestamos enable row level security;
alter table proyectos_cortometrajes enable row level security;
alter table talleres_rodaje enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Escuelas de Fotografía & Cine Digital',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Escuelas de Fotografía & Cine Digital
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para escuelas de fotografía & cine digital:
1. /almacen/prestamo-camaras-luces: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /rodaje/plan-de-grabacion: Gestión interactiva con filtros de búsqueda instantáneos.
3. /cortos/festival-evaluacion: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/cursos: Panel de administración con métricas clave y cierre diario.`
    }
  },

  // 100. CENTROS DE ADIESTRAMIENTO CANINO
  {
    id: 'adiestramiento_canino',
    category: 'educacion',
    categoryLabel: 'Educación Canina',
    label: 'Centros de Adiestramiento Canino',
    icon: '🦮',
    tag: 'Escuelas de Adiestramiento Canino, Obediencia & Conducta',
    description: 'Evaluación de conducta del perro (agresividad, ansiedad, obediencia básica) y videos de tareas para el dueño.',
    planData: {
      softwareName: 'Sistema de Gestión para Centros de Adiestramiento Canino',
      whatToCreate: 'Plataforma web integral especializada para centros de adiestramiento canino con arquitectura moderna, base de datos en tiempo real y paneles optimizados para cada rol del negocio.',
      problemSolved: 'Pérdida de información por registros manuales en papel o Excel, demoras operativas en la atención al cliente y falta de métricas clave para la toma de decisiones.',
      targetUser: 'Dueños del negocio, administradores, personal operativo/técnico y clientes finales.',
      keyFeatures: '1. Módulo principal de gestión operativa y control de flujos diarios\n2. Panel de administración con métricas y reportería en tiempo real\n3. Portal interactivo adaptado para dispositivos móviles\n4. Notificaciones automáticas y exportación de comprobantes en PDF',
      currentSolution: 'Uso de hojas de cálculo aisladas, cuadernos físicos y mensajes desordenados por aplicaciones de mensajería.',
      desiredImprovements: 'Automatizar el 100% de la gestión diaria, brindar acceso móvil instantáneo y mejorar la experiencia del cliente.',
      databaseNeeds: 'Supabase PostgreSQL: perros_alumnos, conductas_evaluacion, comandos_aprendidos, videos_tareas_dueno.',
      mvpScope: 'Módulo operativo principal + Base de datos Supabase con RLS + Portal interactivo.'
    },
    architecture: {
      title: 'Arquitectura para Centros de Adiestramiento Canino (Fase 1)',
      problem: 'Desorden operativo y falta de sincronización en tiempo real.',
      users: '1. Administrador | 2. Operador / Especialista | 3. Cliente',
      mvpScope: 'Panel de control + Gestión de registros + Módulo de clientes.',
      screens: ["/evaluacion/test-conductual","/progreso/comandos-logrados","/videos/tareas-semanales","/admin/paquetes"]
    },
    supabase: {
      tables: ["perros_alumnos","conductas_evaluacion","comandos_aprendidos","videos_tareas_dueno"],
      sqlSnippet: `-- ESQUEMA SUPABASE POSTGRESQL: CENTROS DE ADIESTRAMIENTO CANINO
create table if not exists perros_alumnos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists conductas_evaluacion (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists comandos_aprendidos (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

create table if not exists videos_tareas_dueno (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  estado text default 'activo',
  created_at timestamptz default now()
);

alter table perros_alumnos enable row level security;
alter table conductas_evaluacion enable row level security;
alter table comandos_aprendidos enable row level security;
alter table videos_tareas_dueno enable row level security;`,
      rlsPolicies: 'Políticas de seguridad por fila (RLS) para proteger los datos de clientes y permitir administración total al equipo del negocio.'
    },
    prompt: {
      headline: 'Prompt Maestro para Antigravity IDE: Centros de Adiestramiento Canino',
      stack: 'Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Auth) + Iconos Lucide',
      instructions: [
        'Construye la interfaz principal de gestión con diseño premium y soporte para dispositivos móviles.',
        'Implementa las tablas en Supabase con sus políticas de seguridad RLS activadas.',
        'Diseña el panel de administración con estadísticas y filtros de búsqueda en vivo.'
      ],
      fullText: `### 🚀 PROMPT MAESTRO PARA ANTIGRAVITY IDE: Centros de Adiestramiento Canino
Tecnologías: Next.js 14 + Tailwind CSS + Supabase (PostgreSQL + Autenticación) + Iconos Lucide.
Objetivo: Construir la plataforma para centros de adiestramiento canino:
1. /evaluacion/test-conductual: Vista operativa principal con datos en tiempo real y acciones rápidas.
2. /progreso/comandos-logrados: Gestión interactiva con filtros de búsqueda instantáneos.
3. /videos/tareas-semanales: Módulo de seguimiento y actualización de estados con alertas.
4. /admin/paquetes: Panel de administración con métricas clave y cierre diario.`
    }
  }
];
