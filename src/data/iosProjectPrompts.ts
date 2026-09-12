import type { AppBlueprintData } from '../types';

export type IosAppCategory = 
  | 'finanzas' 
  | 'salud' 
  | 'servicios' 
  | 'productividad' 
  | 'gastronomia' 
  | 'educacion' 
  | 'negocios' 
  | 'lifestyle'
  | 'nicho';

export interface IosAppPreset {
  id: string;
  name: string;
  category: IosAppCategory;
  categoryLabel: string;
  monetization: string;
  tagline: string;
  icon: string;
  blueprint: AppBlueprintData;
}

export const IOS_APP_PRESETS: IosAppPreset[] = [
  // 1. FINANZAS
  {
    id: 'gastos-personales',
    name: 'Fintrack — Control de Gastos & Presupuestos',
    category: 'finanzas',
    categoryLabel: 'Finanzas & Dinero',
    monetization: 'Suscripción Freemium ($4.99/mes) para sincronización bancaria y reportes IA',
    tagline: 'Controla tus gastos diarios, visualiza estadísticas y no pierdas el control de tu dinero.',
    icon: '💰',
    blueprint: {
      appName: 'Fintrack — Control de Gastos',
      problemSolved: 'La mayoría de personas no sabe en qué se le va el dinero cada mes, pierde el control de sus gastos diarios y no tiene un hábito de ahorro consistente.',
      targetUser: 'Jóvenes profesionales, estudiantes y freelancers que buscan tener control claro de sus finanzas personales sin complejidades bancarias.',
      valueProposition: 'Registra cualquier gasto en menos de 3 segundos con categorización automática y gráficos visuales de balance mensual en tiempo real.',
      keyFeatures: `• Registro ultra rápido de ingresos y egresos con categoría e importe
• Dashboard interactivo con balance mensual, gasto promedio y gráfico de distribución
• Historial completo con búsqueda y filtros por fecha, método de pago y categoría
• Gestión y personalización de categorías con iconos y colores
• Resumen estadístico mensual y metas de ahorro
• Autenticación segura con Supabase (Email, Google y Apple Sign In)`,
      requiredScreens: `1. Inicio / Onboarding: Bienvenida, propuesta de valor y acceso rápido.
2. Iniciar Sesión: Acceso seguro por correo, Google o Apple Sign In.
3. Registro: Creación de cuenta y selección de divisa principal (USD, PEN, EUR, MXN).
4. Dashboard: Balance mensual, widgets de resumen y botón flotante de nuevo gasto (+).
5. Registrar Gasto: Teclado numérico ágil, selector de categoría, notas y fecha.
6. Historial: Lista cronológica de movimientos agrupados por día con filtros.
7. Categorías: Catálogo de categorías (Comida, Transporte, Vivienda, Ocio, Servicios).
8. Estadísticas: Gráficos de barras y dona con porcentajes de gastos por categoría.
9. Perfil: Configuración de moneda, exportación en CSV, modo oscuro y cierre de sesión.`,
      userFlow: `1. El usuario abre la app en su iPhone o Android → Onboarding de 2 pantallas → Crea cuenta o login.
2. Ingresa directamente al Dashboard donde ve su balance actual.
3. Presiona el botón (+) → Digita el monto (ej. $15.50) → Elige categoría (Comida) → Guarda en 1 tap.
4. El Dashboard y las Estadísticas se actualizan en tiempo real con Supabase.
5. Puede consultar el Historial o filtrar por mes en cualquier momento.`,
      mvpScope: `• Autenticación completa con Supabase Auth.
• CRUD completo de transacciones (ingresos/gastos).
• Dashboard con balance del mes actual.
• Pantalla de Historial y Categorías básicas.
• Diseño nativo iOS & Android con Expo Router, Safe Area y Haptic Feedback.`,
      futureScope: `• Escaneo OCR inteligente de boletas/tickets físicos con cámara.
• Presupuestos compartidos para parejas o grupos.
• Sincronización automática con cuentas bancarias.
• Notificaciones push de recordatorio diario de registro.`,
      supabaseNeeds: `Tablas requeridas en PostgreSQL:
- profiles (id UUID PRIMARY KEY, full_name TEXT, currency TEXT DEFAULT 'USD', created_at TIMESTAMPTZ)
- categories (id UUID PRIMARY KEY, user_id UUID REFERENCES profiles, name TEXT, icon TEXT, color TEXT, is_expense BOOLEAN DEFAULT true)
- transactions (id UUID PRIMARY KEY, user_id UUID REFERENCES profiles, category_id UUID REFERENCES categories, amount NUMERIC(12,2) NOT NULL, type TEXT CHECK (type IN ('income', 'expense')), note TEXT, date DATE NOT NULL, created_at TIMESTAMPTZ DEFAULT now())
- RLS Habilitado: Los usuarios solo pueden ver y modificar sus propias transacciones y categorías.`,
      similarApps: 'Wallet, Monefy, Spendee, Toshl Finance'
    }
  },

  // 2. SERVICIOS & CITAS
  {
    id: 'citas-servicios',
    name: 'CitasPro — Turnos para Barberías & Salones',
    category: 'servicios',
    categoryLabel: 'Servicios & Citas',
    monetization: 'SaaS B2B ($29/mes por negocio) o 5% de comisión por turno reservado',
    tagline: 'Agenda turnos en barberías, salones o consultorios en segundos sin mensajes manuales.',
    icon: '📅',
    blueprint: {
      appName: 'CitasPro — Agenda Móvil',
      problemSolved: 'Pérdida de tiempo coordinando turnos por WhatsApp, citas duplicadas y clientes que no asisten por olvido.',
      targetUser: 'Clientes de salones de belleza, barberías, fisioterapeutas y centros de estética.',
      valueProposition: 'Elige a tu profesional favorito, selecciona fecha y hora disponible, y confirma tu turno en 30 segundos.',
      keyFeatures: `• Catálogo de servicios con precio y duración
• Selección de especialista o barbero
• Selector de fecha y slots de horarios en tiempo real
• Recordatorios automáticos vía push / SMS
• Historial de citas pasadas y opción de cancelar/reprogramar`,
      requiredScreens: `1. Inicio: Servicios destacados y profesionales disponibles.
2. Detalle de Servicio: Descripción, precio, duración estimada.
3. Selección de Horario: Calendario interactivo con horas libres.
4. Confirmación: Resumen del turno y datos de contacto.
5. Mis Citas: Pestaña de citas activas y pasadas con estado (Confirmada, En proceso, Completada).
6. Perfil: Datos personales y preferencias.`,
      userFlow: 'Selecciona servicio → Escoge profesional y hora → Confirma turno → Se guarda en Supabase y bloquea el horario para otros clientes.',
      mvpScope: 'Catálogo de servicios, reserva de turnos en tiempo real con Supabase Realtime y vista de "Mis Citas".',
      futureScope: 'Pagos anticipados con Stripe/Apple Pay/Google Pay, programa de puntos de fidelidad.',
      supabaseNeeds: 'Tablas: profiles, services, staff, appointments (id, client_id, staff_id, service_id, scheduled_at, status).',
      similarApps: 'Fresha, Booksy, Treatwell'
    }
  },

  // 3. SALUD & HÁBITOS
  {
    id: 'habitos-fitness',
    name: 'HabitFlow — Tracker de Hábitos & Rachas',
    category: 'salud',
    categoryLabel: 'Salud & Bienestar',
    monetization: 'Suscripción Pro ($2.99/mes o $24.99/año) para hábitos ilimitados y widgets',
    tagline: 'Construye rachas de hábitos saludables, recordatorios diarios y seguimiento visual.',
    icon: '⚡',
    blueprint: {
      appName: 'HabitFlow — Racha & Hábitos',
      problemSolved: 'Falta de constancia para crear rutinas de ejercicio, lectura o meditación; las personas olvidan sus metas a los pocos días.',
      targetUser: 'Personas interesadas en crecimiento personal, deportistas y profesionales que desean formar disciplina diaria.',
      valueProposition: 'Visualiza tus rachas de días cumplidos con retroalimentación háptica satisfactoria y recordatorios inteligentes.',
      keyFeatures: `• Creación de hábitos personalizados con meta diaria (ej. Beber 2L de agua, Leer 20 min)
• Marcado de hábito completado en 1 toque con sonido y vibración háptica
• Cálculo de rachas consecutivas (streaks) y récord personal
• Calendario de consistencia mensual (heatmap de hábitos)
• Notificaciones locales en horarios configurados`,
      requiredScreens: `1. Onboarding: Guía rápida para definir los primeros 3 hábitos.
2. Iniciar Sesión / Registro: Supabase Auth con sincronización en la nube.
3. Dashboard Principal: Lista de hábitos de hoy con casillas de verificación animadas.
4. Crear / Editar Hábito: Nombre, icono, frecuencia (días de semana) y horario de recordatorio.
5. Detalle de Hábito: Calendario histórico de cumplimiento y estadísticas de racha.
6. Perfil & Logros: Medallas desbloqueadas por constancia y ajustes generales.`,
      userFlow: 'Abre la app por la mañana → Ve sus hábitos del día → Marca los completados → Ve crecer su racha → Recibe notificación al caer la tarde.',
      mvpScope: 'Lista de hábitos diarios, marcado con racha, persistencia en Supabase y notificaciones locales.',
      futureScope: 'Comunidad y retos grupales con amigos, widgets para la pantalla de inicio.',
      supabaseNeeds: 'Tablas: profiles, habits (id, user_id, title, icon, frequency, reminder_time), habit_logs (id, habit_id, user_id, completed_at, date).',
      similarApps: 'Streaks, Habitica, Everyday'
    }
  },

  // 4. GASTRONOMÍA & DELIVERY
  {
    id: 'delivery-local',
    name: 'QuickBite — Delivery de Comida Local',
    category: 'gastronomia',
    categoryLabel: 'Gastronomía & Delivery',
    monetization: 'Comisión del 8% por pedido o plan mensual de $35/mes por restaurante',
    tagline: 'Pide comida de restaurantes locales con tracking de pedido en tiempo real.',
    icon: '🍔',
    blueprint: {
      appName: 'QuickBite — Comida en tu Puerta',
      problemSolved: 'Complicación para pedir a restaurantes de barrio que no están en grandes apps o cobran comisiones abusivas.',
      targetUser: 'Comensales urbanos que desean comida rápida y pedidos directos a sus negocios favoritos.',
      valueProposition: 'Menú digital fluido, carrito de compras rápido y seguimiento del estado del pedido en vivo.',
      keyFeatures: `• Menú interactivo por categorías (Hamburguesas, Bebidas, Postres)
• Carrito de compras con notas especiales (ej. "Sin cebolla")
• Estado del pedido en tiempo real (Recibido → En Cocina → En Camino → Entregado)
• Botón de contacto directo con el restaurante vía WhatsApp`,
      requiredScreens: `1. Inicio: Menú y promociones del día.
2. Detalle del Plato: Fotos, opciones de aderezos y cantidad.
3. Carrito: Resumen de productos, subtotal, costo de envío y dirección.
4. Seguimiento de Pedido: Barra de progreso de estado en vivo con Supabase Realtime.
5. Historial de Pedidos: Reordenar pedidos anteriores en 1 clic.`,
      userFlow: 'Elige comida → Agrega al carrito → Ingresa dirección → Confirma pedido → Ve en pantalla cómo avanza la preparación en vivo.',
      mvpScope: 'Menú interactivo, carrito local, guardado de orden en Supabase y vista de tracking.',
      futureScope: 'Geolocalización del repartidor en mapa con GPS en vivo, pagos con Apple Pay / Google Pay.',
      supabaseNeeds: 'Tablas: profiles, menu_items, orders (id, user_id, items_json, total, address, status, created_at).',
      similarApps: 'Rappi, Uber Eats, DoorDash'
    }
  },

  // 5. SALUD & FITNESS
  {
    id: 'gym-forge',
    name: 'GymForge AI — Rutinas & Tracker de Cargas',
    category: 'salud',
    categoryLabel: 'Salud & Fitness',
    monetization: 'Suscripción Pro ($9.99/mes) para algoritmos de sobrecarga progresiva y planes de nutrición',
    tagline: 'Registra tus series, repeticiones y pesos con cálculo automático de sobrecarga progresiva.',
    icon: '🏋️‍♂️',
    blueprint: {
      appName: 'GymForge AI — Entrenador de Fuerza',
      problemSolved: 'Gente que va al gimnasio sin rumbo, olvida los pesos que levantó la semana anterior y se estanca en su progreso físico.',
      targetUser: 'Aficionados al fitness, practicantes de musculación y crossfit que buscan maximizar ganancias de fuerza.',
      valueProposition: 'Tu bitácora de entrenamiento en 1 tap con cálculo de 1RM y sugerencias de peso para tu siguiente serie.',
      keyFeatures: '• Registro de series (peso, reps, RPE)\n• Temporizador de descanso automático con sonido\n• Gráfico de sobrecarga progresiva por ejercicio\n• Biblioteca de más de 200 ejercicios con animaciones',
      requiredScreens: '1. Dashboard (Próximo entreno y racha), 2. Rutinas (Push/Pull/Legs), 3. Sesión Activa (Cronómetro y series), 4. Historial & PRs, 5. Perfil.',
      userFlow: 'Inicia rutina → Registra peso de cada serie → Termina entreno → Ve nuevo récord personal y estadísticas de volumen.',
      mvpScope: 'Creación de rutinas, registro de series en vivo, temporizador de descanso y guardado en Supabase.',
      futureScope: 'Generador de rutinas personalizadas con IA y sincronización con Apple Health / Google Fit.',
      supabaseNeeds: 'Tablas: profiles, workouts, exercises, workout_logs, set_logs.',
      similarApps: 'Hevy, Strong, Fitbod'
    }
  },

  // 6. BIENES RAÍCES & ALQUILERES
  {
    id: 'rent-spot',
    name: 'RentSpot — Alquiler de Espacios & Co-working',
    category: 'negocios',
    categoryLabel: 'Negocios & Inmuebles',
    monetization: 'Comisión del 10% sobre el monto de alquiler por hora o día reservado',
    tagline: 'Reserva salas de reuniones, escritorios de co-working o estudios de grabación por horas.',
    icon: '🏢',
    blueprint: {
      appName: 'RentSpot — Espacios Flexibles',
      problemSolved: 'Freelancers y equipos remotos que necesitan espacios profesionales por pocas horas sin contratos anuales costosos.',
      targetUser: 'Nómadas digitales, fotógrafos, podcasters y empresas con trabajo híbrido.',
      valueProposition: 'Encuentra y reserva salas con Wi-Fi veloz, café y pantallas cerca de ti en 2 clics.',
      keyFeatures: '• Búsqueda por mapa y geolocalización\n• Filtros por equipamiento (Proyector, Café, Aislamiento acústico)\n• Calendario de disponibilidad en tiempo real\n• Acceso digital por código QR',
      requiredScreens: '1. Explorar (Mapa y listado), 2. Detalle del Espacio (Fotos, comodidades, reglas), 3. Selector de Horas, 4. Pago & Ticket QR, 5. Mis Reservas.',
      userFlow: 'Busca en el mapa → Elige horario → Paga reserva → Muestra el código QR al llegar al local.',
      mvpScope: 'Listado de espacios, filtro básico, reserva por franja horaria y confirmación.',
      futureScope: 'Cerraduras inteligentes automáticas y facturación corporativa masiva.',
      supabaseNeeds: 'Tablas: profiles, venues, spaces, availability_slots, bookings.',
      similarApps: 'Peerspace, LiquidSpace, WeWork'
    }
  },

  // 7. SERVICIOS DEL HOGAR
  {
    id: 'clean-home',
    name: 'CleanHome — Limpieza & Mantenimiento Express',
    category: 'servicios',
    categoryLabel: 'Servicios del Hogar',
    monetization: 'Comisión del 15% por servicio completado',
    tagline: 'Contrata personal verificado de limpieza, plomería o electricidad en tu hogar.',
    icon: '🧹',
    blueprint: {
      appName: 'CleanHome Express',
      problemSolved: 'Dificultad y desconfianza para encontrar profesionales confiables para reparaciones y limpieza del hogar.',
      targetUser: 'Familias, profesionales ocupados y dueños de departamentos turísticos (Airbnb).',
      valueProposition: 'Profesionales con antecedentes verificados, garantía de satisfacción y precio fijo sin sorpresas.',
      keyFeatures: '• Cotización instantánea por número de habitaciones\n• Profesionales calificados con reseñas reales\n• Tracking de llegada del especialista\n• Pago seguro retenido hasta la conformidad del cliente',
      requiredScreens: '1. Inicio (Servicios: Limpieza, Plomería, Pintura), 2. Configurar Servicio (Dirección, Fecha), 3. Resumen y Cotización, 4. Tracking en Vivo, 5. Calificar.',
      userFlow: 'Selecciona tipo de limpieza → Ingresa fecha y dirección → Confirma pedido → Profesional asiste y se califica.',
      mvpScope: 'Formulario de cotización, asignación de profesional verificado y seguimiento de estado.',
      futureScope: 'Suscripciones periódicas de limpieza semanal recurrente con débito automático.',
      supabaseNeeds: 'Tablas: profiles, service_types, professionals, bookings, reviews.',
      similarApps: 'TaskRabbit, Handy, Aliada'
    }
  },

  // 8. VEHÍCULOS & MANTENIMIENTO
  {
    id: 'auto-fix',
    name: 'AutoFix Pro — Bitácora & Gastos de tu Auto',
    category: 'negocios',
    categoryLabel: 'Autos & Transporte',
    monetization: 'Suscripción Pro ($3.99/mes) + comisiones de talleres mecánicos afiliados',
    tagline: 'Controla el consumo de combustible, mantenimientos preventivos y seguro de tu auto.',
    icon: '🚗',
    blueprint: {
      appName: 'AutoFix Pro — Gestión Vehicular',
      problemSolved: 'Dueños de autos olvidan cambios de aceite, pagan multas por vencimiento de SOAT/seguro y no calculan su consumo real de combustible.',
      targetUser: 'Conductores particulares, choferes de Uber/Didi y dueños de flotas pequeñas.',
      valueProposition: 'Alertas automáticas por kilometraje y cálculo exacto de costo por kilómetro recorrido.',
      keyFeatures: '• Registro de cargas de gasolina y cálculo de rendimiento (km/galón)\n• Recordatorios de cambio de aceite, frenos y neumáticos\n• Alerta de vencimiento de documentos y seguro\n• Directorio de talleres mecánicos recomendados',
      requiredScreens: '1. Garaje (Mis vehículos y kilometraje), 2. Carga de Combustible, 3. Historial de Mantenimientos, 4. Documentos & Alertas, 5. Estadísticas de Gasto.',
      userFlow: 'Carga gasolina → Ingresa monto y odómetro → La app calcula el rendimiento y avisa si se acerca un mantenimiento.',
      mvpScope: 'Gestión de 1 vehículo, registro de gasolina y mantenimientos básicos con recordatorio local.',
      futureScope: 'Conector OBD2 por Bluetooth para diagnóstico de fallas mecánicas en vivo.',
      supabaseNeeds: 'Tablas: profiles, vehicles, fuel_logs, maintenance_logs, reminders.',
      similarApps: 'Drivvo, Fuelio, Simply Auto'
    }
  },

  // 9. MASCOTAS & VETERINARIA
  {
    id: 'pet-care',
    name: 'PetCare Pass — Paseadores & Salud de Mascotas',
    category: 'lifestyle',
    categoryLabel: 'Mascotas & Estilo de Vida',
    monetization: 'Comisión del 15% por paseo contratado y plan premium de historial médico ($2.99/mes)',
    tagline: 'Paseadores de perros en tiempo real y carnet digital de vacunas para tu mascota.',
    icon: '🐶',
    blueprint: {
      appName: 'PetCare Pass',
      problemSolved: 'Dueños que trabajan fuera de casa y no tienen tiempo de pasear a sus perros ni recuerdan las fechas de vacunas.',
      targetUser: 'Pet parents que consideran a su mascota parte de la familia y buscan máxima seguridad.',
      valueProposition: 'Paseos con seguimiento GPS en vivo, fotos de la ruta y carnet veterinario siempre en tu celular.',
      keyFeatures: '• Contratación de paseadores certificados\n• Mapa con tracking GPS durante el paseo\n• Carnet digital de vacunas y desparasitación con alarmas\n• Chat directo con el paseador',
      requiredScreens: '1. Perfil de Mascotas (Perro/Gato, raza, edad), 2. Solicitar Paseo, 3. Mapa en Vivo, 4. Carnet de Vacunas, 5. Historial y Facturas.',
      userFlow: 'Pide paseo de 45 min → Paseador llega y activa GPS → Sigues el paseo en el mapa → Recibes fotos al terminar.',
      mvpScope: 'Perfil de mascota, solicitud de paseo con tracking simple y recordatorios de vacunas.',
      futureScope: 'Consultas veterinarias por videollamada 24/7 y delivery de alimento.',
      supabaseNeeds: 'Tablas: profiles, pets, walkers, walks, medical_records.',
      similarApps: 'Rover, Wag!, PetBacker'
    }
  },

  // 10. EDUCACIÓN & TUTORÍAS
  {
    id: 'tutor-match',
    name: 'TutorMatch — Clases Particulares 1 a 1',
    category: 'educacion',
    categoryLabel: 'Educación & Cursos',
    monetization: '15% de comisión por cada clase de 1 hora reservada y pagada',
    tagline: 'Conecta con profesores expertos en matemáticas, idiomas o programación al instante.',
    icon: '🎓',
    blueprint: {
      appName: 'TutorMatch — Aprende sin Límites',
      problemSolved: 'Estudiantes y padres que buscan profesores particulares de confianza para nivelación académica urgente.',
      targetUser: 'Estudiantes escolares, universitarios y personas aprendiendo nuevos idiomas.',
      valueProposition: 'Profesores verificados con video de presentación, tarifas por hora transparentes y aula virtual integrada.',
      keyFeatures: '• Filtro por materia, nivel y rango de precio\n• Perfil de tutor con video y calificaciones de alumnos\n• Reserva de horario en calendario sincronizado\n• Sala de videollamada integrada',
      requiredScreens: '1. Explorar Tutores, 2. Perfil del Profesor, 3. Agendar Clase (Fecha/Hora), 4. Aula Virtual / Mis Clases, 5. Calificaciones.',
      userFlow: 'Busca "Cálculo 1" → Ve perfiles y reseñas → Elige horario → Confirma y entra a la clase por videollamada.',
      mvpScope: 'Búsqueda por materias, perfil de profesor, agendamiento de turnos y link de clase.',
      futureScope: 'Pizarra virtual compartida y resúmenes de clase generados automáticamente por IA.',
      supabaseNeeds: 'Tablas: profiles, subjects, tutors, tutor_subjects, lessons, reviews.',
      similarApps: 'Preply, Superprof, Cambly'
    }
  },

  // 11. PRODUCTIVIDAD & IA
  {
    id: 'docu-scan',
    name: 'DocuScan AI — Escáner, OCR & Firma Digital',
    category: 'productividad',
    categoryLabel: 'Productividad & IA',
    monetization: 'Suscripción Pro ($6.99/mes) para OCR ilimitado, firma digital y resúmenes con IA',
    tagline: 'Escanea documentos físicos, extrae texto con OCR y fírmalos en PDF en segundos.',
    icon: '📄',
    blueprint: {
      appName: 'DocuScan AI — Escáner Inteligente',
      problemSolved: 'Tener que buscar un escáner de oficina o impresora para firmar y enviar un contrato o documento urgente.',
      targetUser: 'Abogados, contadores, vendedores y freelancers que manejan contratos y facturas en papel.',
      valueProposition: 'Convierte la cámara de tu celular en un escáner de alta definición con eliminación de sombras y firma táctil.',
      keyFeatures: '• Detección automática de bordes y recorte inteligente\n• OCR de alta precisión para extraer texto editable\n• Herramienta de firma digital con el dedo o Apple Pencil\n• Resumen automático del documento con IA en 3 puntos',
      requiredScreens: '1. Bóveda de Documentos, 2. Cámara de Escaneo, 3. Editor & Filtros (B/N, Color), 4. Firmar Documento, 5. Exportar / Compartir PDF.',
      userFlow: 'Apunta la cámara al papel → La app detecta bordes y optimiza la luz → Agregas tu firma digital → Envías por WhatsApp/Email.',
      mvpScope: 'Cámara con captura, filtros de contraste, generación de PDF multipágina y compartir.',
      futureScope: 'Reconocimiento de tablas a Excel y traducción instantánea de contratos a otros idiomas.',
      supabaseNeeds: 'Tablas: profiles, documents, folders, signatures.',
      similarApps: 'CamScanner, Adobe Scan, Genius Scan'
    }
  },

  // 12. GASTRONOMÍA & BARES
  {
    id: 'menu-qr',
    name: 'MenuQR — Pedidos desde la Mesa para Bares',
    category: 'gastronomia',
    categoryLabel: 'Gastronomía & Bares',
    monetization: 'SaaS B2B ($24.99/mes por local gastronómico)',
    tagline: 'Los comensales escanean el QR de su mesa, piden platos y pagan sin esperar al mozo.',
    icon: '🍽️',
    blueprint: {
      appName: 'MenuQR — Autopedidos en Mesa',
      problemSolved: 'Mesas que esperan 15 minutos para ser atendidas en horas pico, mozos desbordados y pérdida de ventas por lentitud.',
      targetUser: 'Restaurantes con alto volumen, bares, cervecerías y cafeterías.',
      valueProposition: 'Aumenta el ticket promedio un 20% permitiendo que los clientes agreguen rondas de bebidas al instante.',
      keyFeatures: '• Menú digital dinámico con fotos y alérgenos\n• Carrito asignado automáticamente al número de mesa\n• Impresión o pantalla directa en cocina\n• División de cuenta entre amigos en la misma mesa',
      requiredScreens: '1. Escanear QR de Mesa, 2. Menú por Categorías, 3. Mi Cuenta de Mesa, 4. Pedir Ronda / Cuenta, 5. Calificar Servicio.',
      userFlow: 'El cliente escanea el QR en la mesa → Agrega 2 cervezas al carrito → Presiona "Pedir a Cocina" → El pedido llega a barra al instante.',
      mvpScope: 'Menú web/móvil por QR, carrito vinculado a mesa y recepción de orden en tiempo real con Supabase.',
      futureScope: 'Pago con propina incluida desde el celular con Apple Pay y tarjetas de crédito.',
      supabaseNeeds: 'Tablas: restaurants, tables, menu_categories, menu_items, table_orders.',
      similarApps: 'Sunday, Toast Tab, MrYum'
    }
  },

  // 13. FINANZAS & SUSCRIPCIONES
  {
    id: 'sub-track',
    name: 'SubTrack — Gestor de Suscripciones & Ahorro',
    category: 'finanzas',
    categoryLabel: 'Finanzas & Dinero',
    monetization: 'Freemium ($2.99/mes) para alertas de cobro ilimitadas y análisis de gastos invisibles',
    tagline: 'Detecta suscripciones olvidadas, recibe avisos antes de que te cobren y ahorra cientos de dólares.',
    icon: '💳',
    blueprint: {
      appName: 'SubTrack — Cazador de Suscripciones',
      problemSolved: 'Personas que pagan meses enteros de servicios que ya no usan (gimnasio, streaming, apps) por olvidar cancelarlos a tiempo.',
      targetUser: 'Consumidores digitales con múltiples servicios contratados.',
      valueProposition: 'Calendario unificado de cobros recurrentes con alertas 48 horas antes de cada débito automático.',
      keyFeatures: '• Catálogo con más de 100 suscripciones populares (Netflix, Spotify, iCloud)\n• Alertas de renovación y pruebas gratuitas por vencer\n• Cálculo de gasto total anualizado\n• Guía paso a paso en 1 clic para cancelar cada servicio',
      requiredScreens: '1. Dashboard (Gasto mensual en suscripciones), 2. Calendario de Cobros, 3. Agregar Suscripción, 4. Análisis de Gastos Fantasma, 5. Ajustes.',
      userFlow: 'Elige tus servicios activos → Define fecha de cobro → La app te avisa 2 días antes de cada débito.',
      mvpScope: 'Listado de suscripciones, suma total mensual/anual y notificaciones locales de cobro.',
      futureScope: 'Conexión bancaria abierta para detectar cobros recurrentes de forma 100% automática.',
      supabaseNeeds: 'Tablas: profiles, subscriptions_catalog, user_subscriptions, notifications.',
      similarApps: 'Rocket Money, Bobby, Subby'
    }
  },

  // 14. NEGOCIOS & FREELANCERS
  {
    id: 'invoicer-pro',
    name: 'Invoicer — Facturación & Cobros Rápidos',
    category: 'negocios',
    categoryLabel: 'Negocios & Facturación',
    monetization: 'Plan gratuito de 5 facturas/mes; plan ilimitado por $7.99/mes',
    tagline: 'Crea presupuestos y facturas en PDF profesionales en 30 segundos desde tu celular.',
    icon: '📑',
    blueprint: {
      appName: 'Invoicer — Facturación Móvil',
      problemSolved: 'Freelancers y profesionales independientes que pierden horas armando facturas en Word o Excel desde la computadora.',
      targetUser: 'Diseñadores, fotógrafos, consultores, albañiles y técnicos independientes.',
      valueProposition: 'Genera cotizaciones elegantes con tu logo y envíalas directamente por WhatsApp con botón de cobro.',
      keyFeatures: '• Plantillas de factura modernas con logo personalizado\n• Cálculo automático de impuestos (IVA/IGV) y descuentos\n• Control de estado: Cotización → Enviada → Pagada → Vencida\n• Generación de PDF instantánea para compartir',
      requiredScreens: '1. Facturas (Pendientes y Cobradas), 2. Crear Factura / Cotización, 3. Lista de Clientes, 4. Catálogo de Servicios / Productos, 5. Reporte de Ingresos.',
      userFlow: 'Elige cliente → Agrega 2 ítems → Se genera PDF con logo → Compartes por WhatsApp al cliente.',
      mvpScope: 'Creador de facturas, lista de clientes, cálculo de totales y exportación a PDF.',
      futureScope: 'Links de cobro integrados con Stripe/Mercado Pago para recibir pagos con tarjeta.',
      supabaseNeeds: 'Tablas: profiles, clients, items, invoices, invoice_items.',
      similarApps: 'Invoice Simple, Moon Invoice, Invoice2go'
    }
  },

  // 15. EVENTOS & TICKETS
  {
    id: 'event-pass',
    name: 'EventPass — Venta de Tickets & Control QR',
    category: 'lifestyle',
    categoryLabel: 'Eventos & Entretenimiento',
    monetization: '5% de comisión + $0.50 por ticket vendido',
    tagline: 'Crea eventos, vende entradas y valida los códigos QR en la puerta con tu celular.',
    icon: '🎟️',
    blueprint: {
      appName: 'EventPass — Boletos Digitales',
      problemSolved: 'Organizadores de eventos pequeños y medianos que pagan comisiones abusivas en grandes ticketeras o tienen filas lentas.',
      targetUser: 'Productores de fiestas, conferencias, torneos de videojuegos y talleres presenciales.',
      valueProposition: 'Tu propia ticketera móvil en 5 minutos con escáner de entradas ultra rápido sin hardware especial.',
      keyFeatures: '• Creación de evento con tipos de ticket (General, VIP, Early Bird)\n• Generación de boletos con código QR dinámico antifraude\n• Modo Escáner para staff en puerta con sonido de validación\n• Métricas de asistencia y ventas en tiempo real',
      requiredScreens: '1. Explorar Eventos, 2. Detalle del Evento & Compra, 3. Mis Boletos QR, 4. Panel de Organizador (Ventas), 5. Escáner de Puerta.',
      userFlow: 'Comprador adquiere ticket → Recibe QR en su app → Staff en puerta escanea con su cámara → Se valida entrada en 0.5 seg.',
      mvpScope: 'Publicación de eventos, compra simulada con guardado de QR y escáner de validación con cámara.',
      futureScope: 'Transferencia segura de boletos entre amigos para evitar reventa ilegal.',
      supabaseNeeds: 'Tablas: profiles, events, ticket_types, tickets, checkins.',
      similarApps: 'Eventbrite, Dice, Passline'
    }
  },

  // 16. SALUD & NUTRICIÓN
  {
    id: 'fit-meal',
    name: 'FitMeal — Planificador de Comidas & Lista de Super',
    category: 'salud',
    categoryLabel: 'Salud & Nutrición',
    monetization: 'Suscripción Premium ($4.99/mes) para menús de calorías personalizadas y recetas ilimitadas',
    tagline: 'Planifica tus almuerzos de la semana y genera tu lista de compras automáticamente.',
    icon: '🥗',
    blueprint: {
      appName: 'FitMeal — Nutrición Semanal',
      problemSolved: 'Desperdicio de comida en el refrigerador, estrés diario por no saber qué cocinar y comer comida chatarra por falta de plan.',
      targetUser: 'Personas que hacen meal-prep, familias ocupadas y personas en déficit calórico.',
      valueProposition: 'Arma tu menú de lunes a domingo en 5 minutos y obtén la lista exacta de ingredientes para el supermercado.',
      keyFeatures: '• Calendario semanal de comidas (Desayuno, Almuerzo, Cena)\n• Base de datos de recetas saludables con macronutrientes\n• Generador automático de lista de compras agrupada por pasillo\n• Contador de calorías y proteínas del día',
      requiredScreens: '1. Calendario de la Semana, 2. Recetario Saludable, 3. Lista de Compras Interactiva, 4. Resumen de Macros, 5. Perfil.',
      userFlow: 'Elige recetas para los 7 días → La app compila la lista del super → Marcas en el supermercado los ítems comprados.',
      mvpScope: 'Calendario semanal, catálogo de recetas y lista de compras con casillas de verificación.',
      futureScope: 'Generación de planes nutricionales automáticos con IA adaptados a tu peso y objetivo.',
      supabaseNeeds: 'Tablas: profiles, recipes, meal_plans, shopping_items.',
      similarApps: 'Mealime, Eat This Much, Yummly'
    }
  },

  // 17. TRANSPORTE & PARQUEO
  {
    id: 'parking-pay',
    name: 'ParkingPay — Encuentra & Reserva Estacionamiento',
    category: 'servicios',
    categoryLabel: 'Transporte & Ciudad',
    monetization: '10% de comisión por hora de parqueo pagada a través de la app',
    tagline: 'Encuentra cocheras libres cerca de tu destino y paga desde tu celular sin efectivo.',
    icon: '🅿️',
    blueprint: {
      appName: 'ParkingPay — Cocheras Inteligentes',
      problemSolved: 'Dar vueltas durante 20 minutos buscando estacionamiento en zonas céntricas, gastando gasolina y llegando tarde.',
      targetUser: 'Conductores en ciudades congestionadas y asistentes a eventos masivos.',
      valueProposition: 'Visualiza cocheras disponibles en tiempo real en el mapa y reserva tu lugar antes de salir de casa.',
      keyFeatures: '• Mapa interactivo con tarifa por hora y espacios libres\n• Reserva anticipada de espacio por rango de tiempo\n• Navegación GPS directa al portón del estacionamiento\n• Pago automático por tiempo exacto de permanencia',
      requiredScreens: '1. Mapa de Estacionamientos, 2. Detalle de Cochera (Tarifa, Horario, Fotos), 3. Reservar Espacio, 4. Ticket Activo (Cronómetro), 5. Historial.',
      userFlow: 'Busca en el mapa → Selecciona estacionamiento → Reserva lugar → Ingresa y paga automáticamente al salir.',
      mvpScope: 'Mapa con pines de cocheras, información de tarifas y simulación de reserva.',
      futureScope: 'Reconocimiento automático de placa vehicular por cámara (LPR).',
      supabaseNeeds: 'Tablas: profiles, parking_lots, parking_spots, reservations, payments.',
      similarApps: 'Parkopedia, SpotHero, EasyPark'
    }
  },

  // 18. SERVICIOS TÉCNICOS & OFICIOS
  {
    id: 'freelance-work',
    name: 'OficiosApp — Electricistas, Plomeros & Pintores',
    category: 'servicios',
    categoryLabel: 'Servicios & Oficios',
    monetization: 'Cobro por contacto de cliente ($2.00 por lead) o suscripción de $19/mes para trabajadores',
    tagline: 'Encuentra técnicos calificados en tu barrio para emergencias del hogar en minutos.',
    icon: '🔧',
    blueprint: {
      appName: 'OficiosApp — Técnicos en tu Barrio',
      problemSolved: 'Cuando se rompe un tubo o hay un cortocircuito un domingo, es casi imposible conseguir un técnico confiable y honesto.',
      targetUser: 'Dueños de casa e inquilinos con emergencias domésticas.',
      valueProposition: 'Técnicos calificados cerca de tu ubicación listos para responder por WhatsApp o llamada en menos de 10 minutos.',
      keyFeatures: '• Búsqueda por oficio (Gasfitería, Cerrajería, Electricidad, Aire Acondicionado)\n• Perfiles con fotos de trabajos anteriores y opiniones de vecinos\n• Botón de llamada directa o chat inmediato\n• Distancia exacta y tiempo estimado de llegada',
      requiredScreens: '1. Inicio por Categorías de Oficio, 2. Lista de Técnicos Cercanos, 3. Perfil del Profesional (Fotos y Calificaciones), 4. Solicitar Presupuesto, 5. Mis Consultas.',
      userFlow: 'Elige "Cerrajería" → Ve técnicos a menos de 3 km → Toca "Llamar" o pide cotización → El cerrajero acude.',
      mvpScope: 'Directorio de profesionales categorizados por ciudad/distrito con teléfono y valoraciones.',
      futureScope: 'Botón de pánico de emergencia 24/7 con asignación automática del técnico más cercano.',
      supabaseNeeds: 'Tablas: profiles, trades, workers, worker_portfolio, client_requests.',
      similarApps: 'TaskRabbit, Habitissimo, Zaask'
    }
  },

  // 19. EDUCACIÓN & AUDIOLIBROS
  {
    id: 'audio-bite',
    name: 'AudioBite — Resúmenes de Libros en 15 Minutos',
    category: 'educacion',
    categoryLabel: 'Educación & Libros',
    monetization: 'Suscripción Anual ($59.99/año) o Mensual ($7.99/mes) para catálogo completo',
    tagline: 'Aprende las ideas clave de los mejores libros de negocios, finanzas y psicología en audio.',
    icon: '🎧',
    blueprint: {
      appName: 'AudioBite — Microaprendizaje',
      problemSolved: 'Falta de tiempo para leer libros completos de 300 páginas y dificultad para retener los aprendizajes clave.',
      targetUser: 'Emprendedores, ejecutivos y personas con ganas de aprender mientras conducen o hacen ejercicio.',
      valueProposition: 'Los 5 conceptos más valiosos de cada bestseller condensados en un audio profesional de 15 minutos.',
      keyFeatures: '• Reproductor de audio con control de velocidad (1.2x, 1.5x)\n• Modo lectura con texto sincronizado y resaltador de citas\n• Descarga offline para escuchar en el avión o transporte\n• Cuestionarios rápidos para comprobar lo aprendido',
      requiredScreens: '1. Biblioteca & Recomendados, 2. Detalle del Libro (Capítulos), 3. Reproductor de Audio / Lector, 4. Mis Favoritos & Notas, 5. Perfil.',
      userFlow: 'Explora por categoría (Ej. Negocios) → Selecciona "Padre Rico Padre Pobre" → Escucha el resumen en audio de 12 min.',
      mvpScope: 'Catálogo de resúmenes en texto y audio con reproductor funcional y biblioteca de favoritos.',
      futureScope: 'Generación de resúmenes de cualquier PDF subido por el usuario mediante IA.',
      supabaseNeeds: 'Tablas: profiles, categories, books, book_chapters, user_progress.',
      similarApps: 'Blinkist, Headway, Shortform'
    }
  },

  // 20. CRIPTO & INVERSIONES
  {
    id: 'crypto-alert',
    name: 'CryptoAlert AI — Portafolio & Señales de Mercado',
    category: 'finanzas',
    categoryLabel: 'Finanzas & Cripto',
    monetization: 'Suscripción VIP ($14.99/mes) para señales de trading y análisis de ballenas on-chain',
    tagline: 'Monitorea tus inversiones en criptomonedas y recibe alertas de cambios bruscos de precio.',
    icon: '📈',
    blueprint: {
      appName: 'CryptoAlert AI — Tracker Financiero',
      problemSolved: 'La volatilidad extrema del mercado cripto hace que los inversores pierdan oportunidades o dinero mientras duermen.',
      targetUser: 'Inversionistas cripto, traders y entusiastas de Web3.',
      valueProposition: 'Alertas personalizadas en tu celular por variación de precio, volumen anormal o movimientos de grandes billeteras.',
      keyFeatures: '• Precios en tiempo real de más de 1,000 monedas\n• Registro de portafolio y cálculo de ganancias/pérdidas (PnL)\n• Notificaciones push cuando una moneda sube o baja más del X%\n• Gráficos interactivos de velas y líneas (TradingView)',
      requiredScreens: '1. Mercado (Top Ganadoras/Perdedoras), 2. Mi Portafolio (Balance total y desglose), 3. Configurar Alerta de Precio, 4. Detalle de Moneda, 5. Noticias Cripto.',
      userFlow: 'Crea alerta "Avisar si Bitcoin toca $70k" → La app envía push instantáneo cuando el precio se alcanza.',
      mvpScope: 'Consumo de API de CoinGecko, visualización de precios, portafolio manual y alertas locales.',
      futureScope: 'Sincronización automática de billeteras mediante API keys de Binance, Coinbase, etc.',
      supabaseNeeds: 'Tablas: profiles, crypto_assets, user_portfolios, user_alerts.',
      similarApps: 'CoinMarketCap, CoinGecko, Delta, Blockfolio'
    }
  },

  // 21. VEHÍCULOS & LAVADO
  {
    id: 'car-wash',
    name: 'CarWash Express — Lavado de Autos a Domicilio',
    category: 'servicios',
    categoryLabel: 'Servicios & Autos',
    monetization: 'Comisión del 20% sobre cada lavado contratado',
    tagline: 'Pide el lavado de tu auto en tu cochera o trabajo sin moverte ni esperar en colas.',
    icon: '🧼',
    blueprint: {
      appName: 'CarWash Express',
      problemSolved: 'Perder 2 horas de un sábado esperando turno en un autolavado tradicional.',
      targetUser: 'Personas con poco tiempo libre que quieren su auto impecable en su propio estacionamiento.',
      valueProposition: 'Lavado ecológico sin agua que deja tu auto reluciente mientras estás en la oficina o en tu casa.',
      keyFeatures: '• Selección de paquete (Básico, Completo, Encerado, Limpieza de Tapices)\n• Geolocalización del vehículo estacionado\n• Fotos del antes y después del lavado enviadas a la app\n• Pago digital seguro',
      requiredScreens: '1. Inicio (Elegir Paquete), 2. Ubicación del Auto & Horario, 3. Confirmación & Pago, 4. Estado del Lavador en Camino, 5. Calificar & Galería de Fotos.',
      userFlow: 'Indica dónde está tu auto → Selecciona paquete → El lavador llega con sus insumos → Recibes foto del auto terminado.',
      mvpScope: 'Catálogo de paquetes de lavado, agenda de horarios y seguimiento de estado de la orden.',
      futureScope: 'Suscripción mensual de 2 lavados al mes con renovación automática.',
      supabaseNeeds: 'Tablas: profiles, wash_packages, washers, wash_orders, order_photos.',
      similarApps: 'MobileWash, Spiffy, Washos'
    }
  },

  // 22. BIENESTAR & MEDITACIÓN
  {
    id: 'mind-pause',
    name: 'MindPause — Meditación Guiada & Sonidos para Dormir',
    category: 'lifestyle',
    categoryLabel: 'Salud & Bienestar',
    monetization: 'Suscripción Anual ($39.99/año) con prueba gratuita de 7 días',
    tagline: 'Reduce el estrés, concilia el sueño profundo y mejora tu concentración diaria.',
    icon: '🧘‍♀️',
    blueprint: {
      appName: 'MindPause — Calma & Sueño',
      problemSolved: 'Insomnio, ansiedad laboral y dificultad para desconectarse de las pantallas antes de dormir.',
      targetUser: 'Profesionales con estrés, estudiantes y personas con problemas para dormir.',
      valueProposition: 'Sesiones de meditación guiada de 5 a 20 minutos con paisajes sonoros binaurales y cuentos para dormir.',
      keyFeatures: '• Biblioteca de meditaciones organizadas por objetivo (Ansiedad, Dormir, Foco, Gratitud)\n• Mezclador de sonidos relajantes (Lluvia, Fuego, Viento, Olas de mar)\n• Temporizador de apagado automático para dormir\n• Registro de estado de ánimo diario',
      requiredScreens: '1. Inicio (Meditación del día), 2. Sueño & Historias, 3. Mezclador de Sonidos, 4. Mi Progreso & Racha, 5. Perfil.',
      userFlow: 'Elige "Sonido de Lluvia + Truenos" → Activa temporizador de 30 min → El audio se apaga suavemente al dormir.',
      mvpScope: 'Reproductor de audio con meditaciones y sonidos relajantes, racha de días y modo nocturno.',
      futureScope: 'Detección de patrones de respiración con micrófono y biofeedback.',
      supabaseNeeds: 'Tablas: profiles, meditation_tracks, sleep_stories, mood_logs.',
      similarApps: 'Calm, Headspace, Meditopia, Insight Timer'
    }
  },

  // 23. INVENTARIOS & PYMES
  {
    id: 'stock-inventory',
    name: 'StockPro — Control de Inventario con Código de Barras',
    category: 'negocios',
    categoryLabel: 'Negocios & Retail',
    monetization: 'SaaS B2B ($14.99/mes por tienda o $99/año)',
    tagline: 'Escanea códigos de barra con la cámara de tu celular y controla el stock de tu negocio.',
    icon: '📦',
    blueprint: {
      appName: 'StockPro — Inventario Móvil',
      problemSolved: 'Pequeñas tiendas y bodegas que pierden mercadería o compran stock de más porque llevan el inventario en cuadernos.',
      targetUser: 'Dueños de minimarkets, ferreterías, farmacias de barrio y tiendas de ropa.',
      valueProposition: 'Convierte cualquier smartphone en una pistola de código de barras profesional con alertas de bajo stock.',
      keyFeatures: '• Escaneo ultra rápido de códigos de barras (EAN/UPC) con la cámara\n• Registro de entradas y salidas de mercadería en 1 tap\n• Alerta automática cuando un producto tiene menos de X unidades\n• Exportación de inventario valorizado a Excel/CSV',
      requiredScreens: '1. Almacén (Lista de productos y stock actual), 2. Escáner de Entrada/Salida, 3. Crear Producto, 4. Alertas de Stock Bajo, 5. Reportes.',
      userFlow: 'Escanea código de barras del producto → Digita "+10 unidades" → El stock se actualiza en la nube de Supabase.',
      mvpScope: 'Lector de códigos con cámara, base de datos de productos, CRUD de stock y filtro por categorías.',
      futureScope: 'Sincronización multi-dispositivo para que varios empleados escaneen al mismo tiempo.',
      supabaseNeeds: 'Tablas: profiles, businesses, products, stock_movements, suppliers.',
      similarApps: 'Sortly, Inventory Now, Stock Controller'
    }
  },

  // 24. DEPORTES & CANCHAS
  {
    id: 'court-booker',
    name: 'CanchasYa — Alquiler de Canchas de Pádel & Fútbol',
    category: 'servicios',
    categoryLabel: 'Deportes & Canchas',
    monetization: 'Cobro de $39/mes a clubes deportivos o 6% por reserva procesada',
    tagline: 'Reserva canchas de pádel, fútbol 7 o tenis en tu ciudad con división de pago entre amigos.',
    icon: '⚽',
    blueprint: {
      appName: 'CanchasYa — Reserva Deportiva',
      problemSolved: 'Llamar a 5 clubes deportivos para ver si tienen cancha disponible a las 8 PM y tener que transferir y enviar capturas de pantalla.',
      targetUser: 'Jugadores de pádel, grupos de amigos de fútbol semanal y tenistas.',
      valueProposition: 'Ve todos los horarios libres de tu zona en una sola pantalla y reserva tu cancha en 15 segundos.',
      keyFeatures: '• Filtro por deporte (Pádel, Fútbol, Tenis, Vóley) y superficie (Césped, Sintético)\n• Grilla de horarios disponibles en tiempo real\n• Opción de "Dividir Pago" con links para el grupo de WhatsApp\n• Cancelación flexible según las reglas del club',
      requiredScreens: '1. Explorar Complejos Deportivos, 2. Detalle del Club & Fotos, 3. Matriz de Horarios y Precios, 4. Confirmación & Pago, 5. Mis Partidos.',
      userFlow: 'Elige Pádel a las 7 PM → Selecciona club → Paga tu parte o el total → Tus amigos reciben invitación.',
      mvpScope: 'Listado de complejos, visualización de slots de horarios y reserva vinculada a Supabase.',
      futureScope: 'Buscador de jugadores rivales y creación de torneos locales.',
      supabaseNeeds: 'Tablas: profiles, clubs, courts, time_slots, court_bookings.',
      similarApps: 'Playtomic, Matchi, EasyCancha'
    }
  },

  // 25. SEGURIDAD & PRIVACIDAD
  {
    id: 'photo-vault',
    name: 'VaultSafe — Bóveda Secreta de Fotos & Documentos',
    category: 'productividad',
    categoryLabel: 'Seguridad & Privacidad',
    monetization: 'Suscripción ($3.49/mes o $19.99/año) para almacenamiento cifrado ilimitado en la nube',
    tagline: 'Oculta fotos privadas, contraseñas y notas confidenciales detrás de un PIN y Face ID.',
    icon: '🔒',
    blueprint: {
      appName: 'VaultSafe — Bóveda Privada',
      problemSolved: 'Miedo a que amigos o familiares revisen tu galería de fotos o notas personales al prestarles el celular.',
      targetUser: 'Cualquier usuario que valore su privacidad personal y financiera.',
      valueProposition: 'Cifrado de grado militar con señuelo de PIN falso y detección de intrusos por foto.',
      keyFeatures: '• Bloqueo con Face ID / Touch ID y PIN numérico\n• Modo "Calculadora Secreta" (icono falso en la pantalla de inicio)\n• Foto automática con cámara frontal si alguien ingresa un PIN incorrecto\n• Bóveda señuelo con fotos genéricas si te obligan a abrir la app',
      requiredScreens: '1. Pantalla de PIN / Calculadora, 2. Galería Secreta, 3. Álbumes Privados, 4. Registro de Intentos de Intrusos, 5. Ajustes de Seguridad.',
      userFlow: 'Abre la app que parece una calculadora → Digita "1234=" → Se abre la galería secreta con todas tus fotos protegidas.',
      mvpScope: 'Protección con PIN, galería local cifrada, importación desde cámara y visor de fotos seguro.',
      futureScope: 'Copia de seguridad en la nube con cifrado de clave privada de extremo a extremo.',
      supabaseNeeds: 'Tablas: profiles, vaults, encrypted_files, break_in_logs.',
      similarApps: 'Calculator Vault, Keepsafe, Private Photo Vault'
    }
  },

  // 26. COCINA & RECETAS IA
  {
    id: 'cook-master',
    name: 'CookMaster AI — Recetas con lo que tienes en Casa',
    category: 'gastronomia',
    categoryLabel: 'Gastronomía & IA',
    monetization: 'Freemium ($3.99/mes) para menús nutricionales personalizados y maridajes de vino',
    tagline: 'Toma una foto a tu refrigerador o escribe tus ingredientes y la IA creará una receta deliciosa.',
    icon: '🍳',
    blueprint: {
      appName: 'CookMaster AI — Chef en tu Celular',
      problemSolved: 'Tener ingredientes sueltos en la cocina (huevos, tomate, arroz) y terminar pidiendo comida rápida por no saber qué preparar.',
      targetUser: 'Estudiantes, solteros y familias que quieren cocinar rico con lo que ya tienen comprado.',
      valueProposition: 'Cero desperdicio de comida: recetas paso a paso generadas en 3 segundos con tus ingredientes exactos.',
      keyFeatures: '• Selector de ingredientes disponibles en casa\n• Generación de recetas adaptadas al tiempo disponible (15, 30 o 45 min)\n• Modo cocina con instrucciones en voz alta para no ensuciar el celular\n• Guardado de recetas favoritas en tu recetario personal',
      requiredScreens: '1. Mi Refrigerador (Seleccionar ingredientes), 2. Recetas Sugeridas por IA, 3. Paso a Paso de Cocina (Modo Manos Libres), 4. Mi Recetario, 5. Perfil.',
      userFlow: 'Selecciona "Pollo + Papa + Cebolla" → Toca "Crear Receta" → La IA te da 3 opciones con fotos y tiempos.',
      mvpScope: 'Selector de ingredientes, integración con API de Google AI para generar la receta y guardado en favoritos.',
      futureScope: 'Escaneo visual del interior del refrigerador con la cámara para auto-detectar ingredientes.',
      supabaseNeeds: 'Tablas: profiles, ingredients, generated_recipes, favorite_recipes.',
      similarApps: 'SuperCook, Plant Jammer, Cooklist'
    }
  },

  // 27. E-COMMERCE & BOUTIQUES
  {
    id: 'local-boutique',
    name: 'BoutiqueApp — Tienda Móvil en 5 Minutos para Instagramers',
    category: 'negocios',
    categoryLabel: 'E-commerce & Tiendas',
    monetization: 'SaaS de $19.99/mes por tienda o 3% de comisión por venta procesada',
    tagline: 'Crea tu catálogo móvil profesional para vender ropa, accesorios o calzado sin programar.',
    icon: '👗',
    blueprint: {
      appName: 'BoutiqueApp — Catálogo Móvil',
      problemSolved: 'Emprendedores de Instagram que pierden ventas contestando "¿Precio?" y enviando números de cuenta manualmente por DM.',
      targetUser: 'Tiendas de moda, joyería artesanal y cosméticos que venden por redes sociales.',
      valueProposition: 'Una app y web de compras ultra rápida donde los clientes eligen talla, color y pagan en 1 clic.',
      keyFeatures: '• Catálogo con fotos en carrusel y selector de tallas/colores\n• Carrito de compras con cálculo de costo de envío según ciudad\n• Checkout directo por WhatsApp o pasarela de pago online\n• Panel para el dueño para subir fotos y actualizar stock desde el celular',
      requiredScreens: '1. Catálogo Principal (Novedades y Ofertas), 2. Detalle de Prenda (Tallas, Colores, Guía de Medidas), 3. Carrito de Compras, 4. Checkout / Envío, 5. Panel de Administración.',
      userFlow: 'El cliente ve una casaca → Selecciona talla M → Agrega al carrito → Envía pedido directo con comprobante de pago.',
      mvpScope: 'Catálogo de productos con categorías, selector de variantes, carrito y checkout por WhatsApp.',
      futureScope: 'Probador virtual de ropa con realidad aumentada (AR) en la cámara.',
      supabaseNeeds: 'Tablas: stores, categories, products, product_variants, orders.',
      similarApps: 'Shopify Mobile, Tiendanube, Kyte'
    }
  },

  // 28. MÚSICA & VOZ
  {
    id: 'vocal-coach',
    name: 'VocalCoach AI — Entrenador de Canto & Afinación',
    category: 'educacion',
    categoryLabel: 'Música & Canto',
    monetization: 'Suscripción Pro ($7.99/mes) para feedback de afinación en tiempo real y rutinas vocales',
    tagline: 'Canta al micrófono de tu celular y recibe retroalimentación instantánea de afinación y rango vocal.',
    icon: '🎤',
    blueprint: {
      appName: 'VocalCoach AI — Afinador & Clases de Canto',
      problemSolved: 'Las clases de canto particulares son costosas ($30/hora) y la gente no sabe si está desafinando cuando practica sola.',
      targetUser: 'Cantantes aficionados, miembros de coros, actores de teatro musical y oradores.',
      valueProposition: 'Visualizador de tono en tiempo real que te muestra exactamente en qué nota estás cantando.',
      keyFeatures: '• Detección de frecuencia y tono en tiempo real con micrófono\n• Ejercicios guiados de calentamiento vocal y escalas de piano\n• Prueba para medir tu rango vocal (Soprano, Tenor, Barítono, etc.)\n• Puntuación de precisión al cantar fragmentos de canciones',
      requiredScreens: '1. Ejercicio Diario (Calentamiento), 2. Afinador Visual en Vivo, 3. Rutinas de Canto por Nivel, 4. Mi Rango Vocal & Progreso, 5. Perfil.',
      userFlow: 'Elige ejercicio de afinación → Cantas la escala → La pantalla te muestra en verde si acertaste la nota exacta.',
      mvpScope: 'Captura de audio con micrófono, algoritmo de detección de pitch (nota) y ejercicios básicos de escalas.',
      futureScope: 'Análisis de resonancia y vibrato con IA y pistas instrumentales de canciones populares.',
      supabaseNeeds: 'Tablas: profiles, vocal_exercises, vocal_ranges, user_sessions.',
      similarApps: 'Vanido, Sing Sharp, Riyaz, Smule'
    }
  },

  // 29. IDIOMAS & MEMORIZACIÓN
  {
    id: 'language-flash',
    name: 'FlashLearn AI — Tarjetas de Repetición Espaciada',
    category: 'educacion',
    categoryLabel: 'Educación & Memorización',
    monetization: 'Freemium ($4.99/mes) para generación ilimitada de mazos con IA y pronunciación nativa',
    tagline: 'Aprende vocabulario en inglés, medicina o leyes usando el algoritmo científico de repetición espaciada.',
    icon: '🎴',
    blueprint: {
      appName: 'FlashLearn AI — Tarjetas Inteligentes',
      problemSolved: 'Estudiar durante horas para un examen y olvidar el 80% de la información a los 3 días (la curva del olvido).',
      targetUser: 'Estudiantes de idiomas (TOEFL/IELTS), medicina, derecho y oposiciones.',
      valueProposition: 'El algoritmo te muestra cada tarjeta en el momento exacto antes de que tu cerebro la olvide, multiplicando tu retención.',
      keyFeatures: '• Creación de mazos de flashcards con texto, audio e imágenes\n• Generador automático de tarjetas a partir de fotos de apuntes con IA\n• Algoritmo de repetición espaciada (SRS / SuperMemo 2)\n• Estadísticas de retención y memoria a largo plazo',
      requiredScreens: '1. Mis Mazos de Estudio, 2. Sesión de Repaso (Voltear tarjeta: Fácil / Bien / Difícil), 3. Crear Mazo con IA, 4. Gráfico de Retención, 5. Perfil.',
      userFlow: 'Crea mazo "Inglés de Negocios" con IA → Repasa 20 tarjetas en 5 minutos en el metro → La app programa el siguiente repaso.',
      mvpScope: 'Sistema de flashcards con volteo táctil, algoritmo de intervalos y sincronización con Supabase.',
      futureScope: 'Audio nativo generado por IA con acentos británico, americano y australiano.',
      supabaseNeeds: 'Tablas: profiles, decks, cards, card_reviews, study_sessions.',
      similarApps: 'Anki, Quizlet, RemNote'
    }
  },

  // 30. FAMILIA & MATERNIDAD
  {
    id: 'baby-tracker',
    name: 'BabyCare Pro — Registro de Lactancia, Sueño & Crecimiento',
    category: 'lifestyle',
    categoryLabel: 'Familia & Maternidad',
    monetization: 'Suscripción Familiar ($4.99/mes o $29.99 pago único) para sincronización entre ambos padres',
    tagline: 'Registra tomas de leche, cambios de pañal y horas de sueño de tu bebé con sincronización para ambos padres.',
    icon: '👶',
    blueprint: {
      appName: 'BabyCare Pro — Cuidado del Bebé',
      problemSolved: 'El agotamiento de los padres primerizos les hace olvidar a qué hora comió el bebé, de qué pecho tomó o cuándo fue su última siesta.',
      targetUser: 'Madres y padres primerizos, niñeras y pediatras.',
      valueProposition: 'Un botón para cada evento (Lactancia, Biberón, Pañal, Sueño) sincronizado al segundo entre los celulares de mamá y papá.',
      keyFeatures: '• Temporizador de lactancia (Pecho izquierdo / derecho)\n• Registro de pañales (Pipí / Popó) y biberones con mililitros\n• Gráfico de percentiles de crecimiento (Peso, Altura, Perímetro cefálico)\n• Sincronización multi-usuario en tiempo real para ambos padres',
      requiredScreens: '1. Dashboard (Última toma, último pañal, última siesta), 2. Cronómetro de Lactancia, 3. Registro de Eventos, 4. Gráficos de Crecimiento OMS, 5. Compartir con Pareja.',
      userFlow: 'Papá cambia el pañal y registra en su celular → A mamá le aparece la actualización en su pantalla al instante.',
      mvpScope: 'Registro rápido de lactancia/sueño/pañal, cronómetro y guardado en Supabase en tiempo real.',
      futureScope: 'Exportación de informe clínico en PDF para llevar a la consulta con el pediatra.',
      supabaseNeeds: 'Tablas: profiles, babies, baby_events, growth_records, parent_shares.',
      similarApps: 'Huckleberry, Baby Tracker, Sprout Baby'
    }
  },
  // ==========================================
  // IDEAS POCO COMUNES / MICRO-NICHOS RENTABLES (31 - 60)
  // ==========================================

  // 31. HIDROPONÍA & AGROTECH
  {
    id: 'agro-sensor',
    name: 'AgroSensor AI — Diagnóstico y Riego para Hidroponía',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Agrotech',
    monetization: 'Suscripción Pro ($14.99/mes) para cálculo de nutrientes y alertas IoT + Afiliación de sensores',
    tagline: 'Diagnóstico de carencias minerales en hojas por cámara y dosificación de soluciones hidropónicas.',
    icon: '🌱',
    blueprint: {
      appName: 'AgroSensor AI — Control Hidropónico',
      problemSolved: 'Los cultivadores urbanos e hidropónicos pierden cosechas enteras por desbalances de pH, electroconductividad (EC) o plagas no detectadas a tiempo.',
      targetUser: 'Productores hidropónicos, viveros boutique y entusiastas de huertos urbanos.',
      valueProposition: 'Toma una foto a la hoja o ingresa pH/EC y la IA te indica exactamente qué sales minerales agregar al tanque en gramos.',
      keyFeatures: '• Diagnóstico visual por IA de deficiencias (Nitrógeno, Hierro, Calcio, Magnesio)\n• Calculadora de ppm y nutrientes N-P-K según fase vegetativa o floración\n• Registro de mediciones diarias de pH, EC, temperatura y recambio de agua\n• Alertas push cuando los parámetros salen del rango seguro',
      requiredScreens: '1. Dashboard del Cultivo (pH/EC actual, días de ciclo), 2. Escáner de Hojas con IA, 3. Calculadora de Nutrientes, 4. Historial de Lotes, 5. Tienda/Insumos recomendados.',
      userFlow: 'El cultivador detecta hojas amarillas → Abre la app y toma foto → La IA detecta deficiencia de Hierro → Sugiere dosis exacta de quelato.',
      mvpScope: 'Registro manual de parámetros, calculadora básica NPK y diagnóstico con Google Gemini Vision API.',
      futureScope: 'Conexión Bluetooth con sensores IoT de pH y nivel de agua automatizado.',
      supabaseNeeds: 'Tablas: profiles, crops, batches, sensor_logs, nutrient_recipes.',
      similarApps: 'GrowDoc, Jane, Flora'
    }
  },

  // 32. ORTODONCIA & ALINEADORES INVISIBLES
  {
    id: 'dentist-sync',
    name: 'DentistSync — Seguimiento de Alineadores Invisibles',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Dental',
    monetization: 'Pago único de $19.99 del paciente o suscripción SaaS para ortodoncistas ($49/mes) para monitorizar a sus pacientes',
    tagline: 'Control fotográfico semanal del avance de alineadores invisibles con verificación de encaje por IA.',
    icon: '🦷',
    blueprint: {
      appName: 'DentistSync — Sonrisa Perfecta',
      problemSolved: 'Los pacientes de alineadores invisibles (Invisalign) olvidan cambiar de placa a tiempo o las placas no encajan bien, alargando el tratamiento meses y encareciéndolo.',
      targetUser: 'Pacientes de ortodoncia invisible y ortodoncistas independientes.',
      valueProposition: 'Escaneo guiado con la cámara frontal para confirmar que el alineador encaja al 100% antes de autorizar el paso a la siguiente placa.',
      keyFeatures: '• Cronómetro de uso diario (Meta: 22 horas al día)\n• Calendario inteligente de cambio de placa con notificaciones estrictas\n• Escáner fotográfico con rejilla de alineación dental y comparador antes/después\n• Portal de supervisión remota para el ortodoncista tratante',
      requiredScreens: '1. Dashboard (Placa actual 14/30, horas de uso hoy), 2. Temporizador de Comidas/Uso, 3. Escaneo Semanal, 4. Time-lapse de Evolución, 5. Chat con mi Odontólogo.',
      userFlow: 'El usuario se quita los alineadores para comer → Pulsa pausa → Al terminar vuelve a activar → La app le avisa si supera los 45 min.',
      mvpScope: 'Temporizador diario de 22h, registro fotográfico con rejilla y cálculo de cambio de placa.',
      futureScope: 'IA de visión para detectar "air gaps" o desajustes entre el diente y el plástico.',
      supabaseNeeds: 'Tablas: profiles, treatment_plans, daily_usage_logs, smile_scans, clinic_connections.',
      similarApps: 'TrayMinder, DentalMonitoring'
    }
  },

  // 33. ACÚSTICA & INQUILINOS
  {
    id: 'noise-audit',
    name: 'NoiseAudit Pro — Certificación y Registro Legal Anti-Ruido',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Legal / Inmobiliario',
    monetization: 'Venta de Reporte Certificado en PDF ($4.99 por reporte para reclamos/juicios) o Suscripción ($9.99/mes)',
    tagline: 'Mide decibeles continuos durante la noche y genera reportes periciales con validez pericial ante vecinos ruidosos.',
    icon: '🔊',
    blueprint: {
      appName: 'NoiseAudit Pro — Evidencia de Ruido',
      problemSolved: 'Inquilinos y propietarios sufren ruidos molestos (obras, vecinos, bares) pero la policía o el juzgado exige pruebas cronológicas con decibelios certificados.',
      targetUser: 'Inquilinos, huéspedes de Airbnb, comunidades de vecinos, administradores de fincas y abogados.',
      valueProposition: 'Convierte el micrófono del smartphone en un sonómetro calibrado que graba picos sonoros con geolocalización y sello de tiempo inmutable.',
      keyFeatures: '• Monitoreo continuo en segundo plano de decibeles (dBA / dBC)\n• Detección automática de picos que superan la normativa local (ej. > 45 dB de noche)\n• Grabación de clips de audio testigo con timestamp criptográfico\n• Generación de reporte pericial en PDF listo para imprimir o enviar a la fiscalía/policía',
      requiredScreens: '1. Sonómetro en Vivo (Aguja y gráfico de decibeles), 2. Modo Vigilancia Nocturna, 3. Historial de Infracciones, 4. Generador de Informe PDF Legal, 5. Configuración de Calibración.',
      userFlow: 'El usuario activa el modo nocturno al irse a dormir → Ocurre una fiesta al lado → La app registra 72 dB durante 3 horas y genera el PDF probatorio.',
      mvpScope: 'Lectura continua de nivel de audio (dBA), registro de picos sobre umbral y exportación a PDF con gráficos.',
      futureScope: 'Clasificación por IA del tipo de ruido (música baja, ladridos, martillazos, motores).',
      supabaseNeeds: 'Tablas: profiles, noise_sessions, peak_events, generated_reports.',
      similarApps: 'Decibel X, NIOSH Sound Level Meter'
    }
  },

  // 34. PILOTOS DE DRONES
  {
    id: 'drone-flight-log',
    name: 'DroneFlight Logbook — Bitácora y Cumplimiento de Drones',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Aviación & Drones',
    monetization: 'Suscripción Pro ($12.99/mes por piloto comercial) o Plan para Empresas de Drones ($89/mes)',
    tagline: 'Bitácora oficial de horas de vuelo, mapas de espacio aéreo no permitido (No-Fly Zones) y checklists de despegue.',
    icon: '🚁',
    blueprint: {
      appName: 'DroneFlight — Bitácora Profesional',
      problemSolved: 'Los pilotos de drones comerciales deben llevar un registro legal de horas de vuelo y ciclos de baterías para mantener su licencia y pólizas de seguro.',
      targetUser: 'Pilotos de drones profesionales (filmación, topografía, inspección industrial, bodas).',
      valueProposition: 'Lleva el control de cada batería (ciclos y voltaje), registra vuelos con GPS y exporta la bitácora compatible con la autoridad de aviación civil.',
      keyFeatures: '• Mapa interactivo con zonas de exclusión aérea (aeropuertos, cárceles, reservas)\n• Checklist pre-vuelo interactivo (clima, viento a 50m, índice KP solar)\n• Gestión de flota: registro de drones, helices y ciclos de recarga de baterías LiPo\n• Exportación oficial de logbook en PDF y CSV para auditorías aeronáuticas',
      requiredScreens: '1. Mapa de Espacio Aéreo y Clima de Vuelo, 2. Iniciar Registro de Vuelo (GPS), 3. Checklist Pre-Despegue, 4. Gestión de Baterías y Drones, 5. Historial y Horas Totales.',
      userFlow: 'El piloto llega a locación → Consulta el mapa y viento → Completa checklist en 1 min → Registra el vuelo → Al aterrizar anota batería usada.',
      mvpScope: 'Registro de vuelos con duración y coordenadas, gestión de drones/baterías y checklist interactivo.',
      futureScope: 'Importación automática de archivos .DAT y .TXT de telemetría DJI.',
      supabaseNeeds: 'Tablas: profiles, drones, batteries, flight_logs, maintenance_alerts.',
      similarApps: 'AirMap, UAV Forecast, DroneLogbook'
    }
  },

  // 35. ANTIGÜEDADES & SUBASTAS
  {
    id: 'antique-lens',
    name: 'AntiqueLens AI — Valuador de Sellos y Antigüedades',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Coleccionismo',
    monetization: '3 identificaciones gratuitas, luego Suscripción ($9.99/mes) o Pase Ilimitado Vitalicio ($39.99)',
    tagline: 'Identifica marcas de plata, porcelana, sellos de alfarería y cotizaciones estimadas en casas de subastas.',
    icon: '🏺',
    blueprint: {
      appName: 'AntiqueLens AI — Tasador de Antigüedades',
      problemSolved: 'Compradores en bazares, herederos y coleccionistas encuentran piezas valiosas pero no saben descifrar los diminutos sellos ni estimar su valor de reventa.',
      targetUser: 'Compradores en mercadillos/rastros, anticuarios, tasadores y vendedores de eBay.',
      valueProposition: 'Fotografía el sello o la marca en la base del objeto y la IA identifica la fábrica, año de producción y rango de precio en subastas.',
      keyFeatures: '• Reconocimiento óptico de sellos de porcelana (Meissen, Limoges, Capodimonte), sellos de plata y relojes\n• Rango de precios estimados basados en ventas reales en casas de subastas\n• Catálogo visual de épocas (Art Deco, Victoriano, Bauhaus, Mid-Century)\n• Catálogo privado "Mi Colección" con valor total estimado',
      requiredScreens: '1. Escáner de Sellos y Piezas, 2. Ficha de Resultado (Fábrica, Año, Valor $), 3. Mi Colección Privada, 4. Guía de Marcas por País, 5. Perfil.',
      userFlow: 'El usuario encuentra una tetera en un mercado → Toma foto al sello inferior → La app identifica "Plata esterlina inglesa Birmingham 1912 - Valor $250".',
      mvpScope: 'Escáner con visión IA, base de datos de sellos comunes y guardado de inventario personal.',
      futureScope: 'Búsqueda por similitud inversa en lotes históricos de Christie’s y Sotheby’s.',
      supabaseNeeds: 'Tablas: profiles, collections, antique_items, stamp_signatures, valuation_cache.',
      similarApps: 'WorthPoint, PicClick, Google Lens'
    }
  },

  // 36. MANTENIMIENTO NÁUTICO
  {
    id: 'boat-care-hub',
    name: 'BoatCare Hub — Mantenimiento de Embarcaciones y Lanchas',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Náutica',
    monetization: 'Suscripción Premium ($19.99/mes por lancha / $49/mes para flotas de chárter)',
    tagline: 'Bitácora marina, control de horas de motor, ánodos de sacrificio y alertas de seguridad marítima.',
    icon: '🛥️',
    blueprint: {
      appName: 'BoatCare Hub — Bitácora Marina',
      problemSolved: 'El mantenimiento náutico es crítico para la vida humana en el mar y muy costoso; una bomba de achique rota o un ánodo gastado causan miles de dólares en daños.',
      targetUser: 'Dueños de lanchas, yates, veleros y empresas de chárter turístico.',
      valueProposition: 'Todo el mantenimiento de tu barco en una sola app: horas de motor, cambio de turbinas de refrigeración, baterías marinas e inventario de salvamento.',
      keyFeatures: '• Registro de horas de motor y alertas automáticas de cambio de aceite y filtros\n• Calendario de varada (antifouling, pulido y sustitución de ánodos de zinc)\n• Checklist de seguridad antes de zarpar (bengalas, chalecos, radio VHF, combustible)\n• Registro de combustible, consumo por milla náutica y cuaderno de bitácora GPS',
      requiredScreens: '1. Panel del Barco (Horas de motor, días para varada), 2. Checklist de Zarpe, 3. Registro de Mantenimientos y Gastos, 4. Cuaderno de Bitácora, 5. Documentos y Pólizas.',
      userFlow: 'El armador sube a su embarcación → Hace el checklist de 2 min → Revisa que el motor esté al día → Inicia navegación.',
      mvpScope: 'Gestión de ficha técnica del barco, registro de horas de motor, alertas preventivas y checklist de seguridad.',
      futureScope: 'Integración NMEA 2000 por Wi-Fi para telemetría directa del motor en tiempo real.',
      supabaseNeeds: 'Tablas: profiles, vessels, engine_hours, maintenance_logs, trip_logs.',
      similarApps: 'BoatLogger, Sea-Tech, Helm'
    }
  },

  // 37. ENERGÍA SOLAR & INSTALADORES
  {
    id: 'solar-roi-tracker',
    name: 'SolarROI Tracker — Orientación AR y Retorno Solar',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Energías Renovables',
    monetization: 'Venta de Presupuesto Técnico ($19.99 por estudio para instaladores) o Suscripción ($7.99/mes para propietarios)',
    tagline: 'Calcula la inclinación y sombras en Realidad Aumentada y simula los años de retorno de inversión fotovoltaica.',
    icon: '☀️',
    blueprint: {
      appName: 'SolarROI Tracker — Energía Solar',
      problemSolved: 'Instaladores solares y clientes pierden horas calculando sombras y dudan si vale la pena la inversión sin una proyección financiera exacta.',
      targetUser: 'Instaladores de paneles solares, arquitectos sustentables y dueños de viviendas.',
      valueProposition: 'Apunta tu cámara al techo y mira la trayectoria del sol en Realidad Aumentada para calcular la inclinación óptima y el ahorro en la factura.',
      keyFeatures: '• Brújula y trayectoria solar en Realidad Aumentada (AR) para detectar sombras de árboles y edificios\n• Calculadora de potencia requerida según recibo de luz (kWh/mes)\n• Simulación financiera de ROI (Retorno de inversión, ahorro acumulado en 25 años)\n• Generador de propuesta comercial en PDF con marca personalizada para el instalador',
      requiredScreens: '1. Simulador de Consumo Eléctrico, 2. Cámara AR de Trayectoria Solar, 3. Cálculo de Paneles e Inversor, 4. Gráfico de Retorno Financiero, 5. Generar Propuesta PDF.',
      userFlow: 'El instalador visita el techo del cliente → Apunta con AR para ver solsticio de invierno → Genera la cotización en PDF en 3 minutos.',
      mvpScope: 'Calculadora de paneles según kWh, proyección de ROI y visor básico de azimut/inclinación con giroscopio.',
      futureScope: 'Detección de área de techo y obstáculos mediante modelos de visión por computadora.',
      supabaseNeeds: 'Tablas: profiles, solar_projects, energy_bills, system_designs, proposals.',
      similarApps: 'Sun Surveyor, Solmetric, Helioscope'
    }
  },

  // 38. CUIDADO DE TATUAJES
  {
    id: 'tattoo-heal',
    name: 'TattooHeal AI — Asistente de Curación de Tatuajes',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Arte Corporal',
    monetization: 'Pago de $3.99 por tatuaje o Plan para Estudios de Tatuaje ($29/mes) para seguimiento a sus clientes con branding propio',
    tagline: 'Guía día a día de curación de tatuajes con análisis de fotos por IA para prevenir infecciones y pérdida de tinta.',
    icon: '🖋️',
    blueprint: {
      appName: 'TattooHeal AI — Cuidado de Tatuajes',
      problemSolved: 'El 40% de las personas arruina su tatuaje en los primeros 15 días por lavarlo mal, sobrehidratarlo con crema o arrancar las costras.',
      targetUser: 'Personas recién tatuadas y tatuadores que quieren garantizar que su arte no se infecte.',
      valueProposition: 'Un cronograma personalizado día a día (curación en seco vs apósito plástico) con recordatorios de lavado y escáner de enrojecimiento.',
      keyFeatures: '• Cronograma inteligente según técnica (Línea fina, Blackout, Color, Realismo)\n• Alarmas de lavado con jabón neutro e hidratación justa sin asfixiar el poro\n• Análisis fotográfico diario con IA para alertar si hay erupción, sobrecremado o infección\n• Botón SOS para contactar directo al estudio con las fotos de la evolución',
      requiredScreens: '1. Mi Tatuaje (Día 4 de 21 - Estado actual), 2. Bitácora Fotográfica Diaria, 3. Recordatorios de Cuidado, 4. Guía de Qué Hacer y Qué Evitar, 5. Mi Tatuador.',
      userFlow: 'El cliente se tatúa → Elige tipo de tatuaje → Recibe notificaciones exactas ("Hora de lavar con agua tibia") → Sube foto diaria de control.',
      mvpScope: 'Cronograma día a día de 21 días, notificaciones locales de hidratación y galería privada de fotos diarias.',
      futureScope: 'Modelo de visión para detectar dermatitis por contacto vs rechazo de pigmento rojo.',
      supabaseNeeds: 'Tablas: profiles, tattoos, healing_logs, daily_photos, studio_profiles.',
      similarApps: 'Tattoo Log, Inkaholic, AfterInked'
    }
  },

  // 39. CAVAS PRIVADAS & VINOS
  {
    id: 'wine-cellar-pro',
    name: 'WineCellar Pro — Gestión de Cavas y Ventana de Maduración',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Vinos & Gastronomía',
    monetization: 'Suscripción ($8.99/mes o $69.99/año) — nicho de alto poder adquisitivo',
    tagline: 'Mapa visual de tu cava por estantes con alerta de "ventana óptima de consumo" para no dejar vencer tus botellas.',
    icon: '🍷',
    blueprint: {
      appName: 'WineCellar Pro — Mi Cava Inteligente',
      problemSolved: 'Coleccionistas de vino acumulan cientos de botellas en su cava y muchas se "pasan" de su punto óptimo de maduración sin que se enteren.',
      targetUser: 'Coleccionistas de vino, sommeliers, dueños de restaurantes y aficionados a la enología.',
      valueProposition: 'Organiza tu cava física en una cuadrícula interactiva estante por estante, y la app te dice: "Abre este Cabernet antes de diciembre 2026".',
      keyFeatures: '• Diseñador visual de estanterías y compartimentos de cava (Filas x Columnas)\n• Registro de botellas por escaneo de etiqueta frontal o código de barras\n• Curva de maduración estimada (Listo para beber / Envejecer / Urgente consumir)\n• Notas de cata privadas, maridaje recomendado y valor actual de reposición',
      requiredScreens: '1. Mapa Visual de la Cava (Botellas por estante), 2. Escáner de Etiquetas, 3. Alertas "Beber Ahora", 4. Ficha de Cata y Puntaje, 5. Estadísticas de Inventario.',
      userFlow: 'Compras 3 botellas → Escaneas etiqueta → Seleccionas estante A-3 → En 2 años la app te avisa que alcanzó su máxima expresión en copa.',
      mvpScope: 'Diseñador de estantes en grilla interactiva, catálogo de botellas con estado y notas de cata.',
      futureScope: 'Sincronización con precios de mercado en Vivino y Wine-Searcher.',
      supabaseNeeds: 'Tablas: profiles, cellars, shelves, bottles, tasting_notes, vintage_guides.',
      similarApps: 'CellarTracker, InVintory, Plaisir'
    }
  },

  // 40. LUTHERÍA & INSTRUMENTOS
  {
    id: 'luthier-log',
    name: 'LuthierLog — Taller de Calibración de Guitarras e Instrumentos',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Música & Artesanía',
    monetization: 'SaaS para talleres ($19.99/mes por taller hasta 3 técnicos)',
    tagline: 'Fichas técnicas de calibración (altura de cuerdas, curvatura de mástil) y presupuestos enviados por WhatsApp.',
    icon: '🎸',
    blueprint: {
      appName: 'LuthierLog — Gestión de Taller Luthier',
      problemSolved: 'Los reparadores de instrumentos usan cuadernos de papel desordenados, olvidan la calibración favorita de cada cliente y tardan en cotizar reparaciones.',
      targetUser: 'Luthiers, técnicos de guitarras, bajos, violines y tiendas de música.',
      valueProposition: 'Ficha digital de recepción del instrumento: fotos de rayones previos, medidas de acción en milímetros y envío del reporte al cliente por WhatsApp.',
      keyFeatures: '• Ficha de calibración milimétrica (Acción en traste 12, curvatura del mástil, radio de diapasón, entonación)\n• Checklist de recepción con fotos de marcas y daños estéticos para evitar reclamos\n• Generador de presupuesto en PDF con enlace de aprobación directa del cliente\n• Base de datos de clientes con su calibre de cuerdas y afinación preferida',
      requiredScreens: '1. Tablero de Trabajos en Taller (Pendiente, En Proceso, Listo), 2. Nueva Ficha de Instrumento, 3. Medición y Calibración, 4. Generar Presupuesto, 5. Clientes.',
      userFlow: 'Llega un cliente con una Fender Stratocaster → El luthier anota medidas actuales y trabajo solicitado → El cliente recibe link con la orden en WhatsApp.',
      mvpScope: 'Gestión de órdenes de trabajo, ficha de calibración de cuerdas y fotos de entrada/salida.',
      futureScope: 'Afinador estroboscópico de alta precisión integrado para octavación en la misma app.',
      supabaseNeeds: 'Tablas: profiles, workshops, instruments, repair_orders, calibration_specs.',
      similarApps: 'Luthier Tool, RepairDesk, Jobber'
    }
  },

  // 41. CRIADEROS ECUESTRES
  {
    id: 'stallion-track',
    name: 'StallionTrack — Genealogía y Rendimiento Ecuestre',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Hípico / Ganadero',
    monetization: 'Suscripción Premium ($29.99/mes por haras/establo) — nicho de alto presupuesto',
    tagline: 'Árbol genealógico, control de montas, calendario de herraje y rendimiento de caballos de paso y salto.',
    icon: '🐎',
    blueprint: {
      appName: 'StallionTrack — Gestión Ecuestre',
      problemSolved: 'Criadores y dueños de caballos manejan inversiones de miles de dólares con registros fragmentados de vacunas, herrajes cada 45 días y pedigrí.',
      targetUser: 'Haras, criaderos de caballos de paso, centros de equitación y veterinarios equinos.',
      valueProposition: 'Control total de la salud y linaje del caballo: avisos de herraje, desparasitación, ecografías de preñez y tiempos en pista.',
      keyFeatures: '• Árbol genealógico interactivo (Padre, Madre, Abuelos con fotos y títulos)\n• Calendario estricto de herraje, odontología equina y vacunación\n• Registro de montas, inseminación y control de gestación de yeguas\n• Ficha médica compartible con el veterinario y compradores internacionales',
      requiredScreens: '1. Mis Caballos / Establos, 2. Ficha de Ejemplar (Pedigrí & Datos), 3. Calendario Veterinario & Herrador, 4. Registro de Montas & Crías, 5. Exportar Ficha.',
      userFlow: 'El herrador llega al establo → Registra el herraje de 8 caballos → La app agenda la próxima cita automática a las 6 semanas.',
      mvpScope: 'Ficha del caballo con foto y microchip, calendario de vacunas/herraje y notas de entrenamiento.',
      futureScope: 'Análisis de video del galope y salto mediante computer vision.',
      supabaseNeeds: 'Tablas: profiles, stables, horses, pedigrees, medical_events, breeding_logs.',
      similarApps: 'Equisense, The Equestrian App, HorseSafe'
    }
  },

  // 42. BONSÁIS & PLANTAS RARAS
  {
    id: 'bonsai-care-ai',
    name: 'BonsaiCare AI — Calendario de Poda, Alambrado y Trasplante',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Botánica Especializada',
    monetization: 'Suscripción ($4.99/mes o $34.99/año) con biblioteca experta de especies',
    tagline: 'Cronograma estacional exacto de pinzado, alambrado, abonado y trasplante para bonsáis y plantas de colección.',
    icon: '🪴',
    blueprint: {
      appName: 'BonsaiCare AI — Guía de Bonsái',
      problemSolved: 'Un bonsái requiere podas y trasplantes en semanas exactas del año según la especie; podar a destiempo mata un árbol de 30 años de trabajo.',
      targetUser: 'Coleccionistas de bonsáis, dueños de Monsteras variegadas y orquideófilos.',
      valueProposition: 'Ajusta el calendario de cuidados según el hemisferio y clima exacto del usuario para cada especie (Junípero, Ficus, Arce Japonés, Olmo).',
      keyFeatures: '• Identificación de especie y estilo de bonsái (Chokkan, Moyogi, Kengai)\n• Calendario estacional inteligente adaptado a la temperatura de tu ciudad\n• Alerta para retirar el alambre antes de que marque la corteza\n• Galería de evolución fotográfica anual para comparar el engrosamiento del tronco',
      requiredScreens: '1. Mi Colección de Bonsáis, 2. Tareas de Esta Semana (Poda/Abono), 3. Ficha Técnica de la Especie, 4. Registro Fotográfico Anual, 5. Consejos del Maestro.',
      userFlow: 'El usuario registra un Arce Japonés → La app le avisa: "Entrando en otoño: suspender abono rico en nitrógeno y preparar defoliado".',
      mvpScope: 'Catálogo de 50 especies de bonsái, calendario de tareas por estación y galería de fotos por árbol.',
      futureScope: 'Reconocimiento de plagas en hojas de bonsái con IA.',
      supabaseNeeds: 'Tablas: profiles, bonsai_trees, species_guide, care_events, photo_timeline.',
      similarApps: 'Bonsai Album, PictureThis, Planta'
    }
  },

  // 43. CONTROL DE SUBARRIENDOS
  {
    id: 'sublease-scanner',
    name: 'SubLease Scanner — Detección de Alquileres no Autorizados',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho PropTech / Legal',
    monetization: 'Suscripción por edificio ($49/mes hasta 20 departamentos / $149/mes condominios grandes)',
    tagline: 'Monitorea si los inquilinos de tu edificio están subarrendando su vivienda en Airbnb sin autorización.',
    icon: '🏢',
    blueprint: {
      appName: 'SubLease Scanner — Detección de Subarriendos',
      problemSolved: 'Inquilinos que firman contratos de vivienda a largo plazo y subarriendan el departamento ilegalmente en plataformas turísticas causando problemas y desgastes.',
      targetUser: 'Juntas de propietarios, administradores de edificios y dueños de inmuebles en alquiler.',
      valueProposition: 'Rastrea anuncios en plataformas de alquiler temporal en el radio del edificio con fotos coincidentes y genera informes de infracción de contrato.',
      keyFeatures: '• Escaneo de anuncios en portales turísticos en la manzana o edificio específico\n• Comparación de fotos del departamento original vs fotos del anuncio publicado\n• Alerta inmediata cuando un piso del edificio aparece listado para turistas\n• Generación de carta notarial de cese de actividad y evidencia con capturas certificadas',
      requiredScreens: '1. Panel de Edificios Monitoreados, 2. Alertas de Anuncios Sospechosos, 3. Comparador de Evidencias, 4. Generar Reporte Legal, 5. Configuración de Inmuebles.',
      userFlow: 'El administrador registra la dirección → El sistema detecta un anuncio nuevo en el piso 8 → Se genera la notificación legal en 1 clic.',
      mvpScope: 'Registro de inmuebles, búsqueda por coordenadas y generación de informe de infracción en PDF.',
      futureScope: 'Bot de verificación con scraping ético y geolocalización de fotografías.',
      supabaseNeeds: 'Tablas: profiles, properties, units, detected_listings, legal_notices.',
      similarApps: 'SubletAlert, StrataLock, Hostify'
    }
  },

  // 44. APICULTURA & COLMENAS
  {
    id: 'beekeepr',
    name: 'BeeKeepr — Bitácora de Colmenas y Salud de Abejas',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Apicultura',
    monetization: 'Suscripción ($8.99/mes o $69.99/año por apiario)',
    tagline: 'Inspección de colmenas por voz, conteo de ácaro Varroa y estimación de cosecha de miel.',
    icon: '🐝',
    blueprint: {
      appName: 'BeeKeepr — Control de Apiarios',
      problemSolved: 'Los apicultores trabajan con guantes y trajes protectores, lo que les impide escribir en cuadernos durante la inspección de las colmenas.',
      targetUser: 'Apicultores artesanales, productores de miel y criadores de reinas.',
      valueProposition: 'Registro 100% por comandos de voz: dile al celular "Colmena 4: Reina vista, 6 cuadros de cría, postura excelente" sin tocar la pantalla.',
      keyFeatures: '• Modo Manos Libres con dictado por voz optimizado para campo y ruido ambiente\n• Conteo de ácaros Varroa mediante foto del fondo sanitario con IA\n• Historial de postura de reina, agresividad, reservas de miel y alimentación suplementaria\n• Alertas de floración local y calendario de tratamientos sanitarios',
      requiredScreens: '1. Mis Apiarios (Mapa de Colmenas), 2. Modo Inspección por Voz, 3. Calculadora de Varroa por Cámara, 4. Registro de Cosecha de Miel (Kilos), 5. Reportes.',
      userFlow: 'El apicultor abre la colmena con ahumador → Habla a la app → La app procesa el audio y guarda la ficha técnica de la colmena.',
      mvpScope: 'Gestión de colmenas en cuadrícula, registro guiado de inspección y contador de kilos de miel.',
      futureScope: 'Detección acústica del sonido del zumbido para alertar riesgo inminente de enjambrazón.',
      supabaseNeeds: 'Tablas: profiles, apiaries, hives, inspections, harvest_logs.',
      similarApps: 'Apiary Book, HiveTracks, Beekeep'
    }
  },

  // 45. COSPLAY & PROPS
  {
    id: 'cosplay-craft',
    name: 'CosplayCraft — Calculadora de Materiales y Patrones',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Cosplay & Fandom',
    monetization: 'Suscripción ($5.99/mes) + Marketplace de venta de patrones y archivos 3D con 15% de comisión',
    tagline: 'Calcula planchas de Goma EVA, filamento 3D, telas y gestiona el deadline antes de la próxima convención.',
    icon: '🎭',
    blueprint: {
      appName: 'CosplayCraft — Taller de Cosplay',
      problemSolved: 'Los cosplayers gastan de más en materiales, se quedan sin tiempo antes de la convención ("con crunch") y pierden los planos de sus armaduras.',
      targetUser: 'Cosplayers, creadores de props, artesanos de ferias de anime y Halloween.',
      valueProposition: 'Divide tu traje en piezas (Casco, Pechera, Espada), calcula los metros de tela y filamento necesarios y programa tu cuenta regresiva.',
      keyFeatures: '• Calculadora de optimización de cortes en planchas de EVA foam y tela\n• Estimador de costos de filamento 3D, pegamento de contacto, imprimación y pinturas\n• Cronograma regresivo a la convención con checklist de progreso por pieza\n• Biblioteca privada de referencias visuales con zoom de alta resolución',
      requiredScreens: '1. Mis Proyectos (Días restantes para Comic-Con), 2. Desglose de Traje por Partes, 3. Calculadora de Materiales y Presupuesto, 4. Visor de Patrones, 5. Galería.',
      userFlow: 'Creas el proyecto "Armadura Mandalorian" → Añades 6 piezas → Calculas 4 planchas de foam → Sigues el progreso semana a semana.',
      mvpScope: 'Gestor de proyectos con checklist por piezas, cronómetro de evento y calculadora de gastos de materiales.',
      futureScope: 'Visor de modelos 3D (.STL) con desglose de cortes para ensamblaje.',
      supabaseNeeds: 'Tablas: profiles, cosplay_projects, costume_parts, materials_list, convention_events.',
      similarApps: 'Cosplanner, PropMaster, FoamBuddy'
    }
  },

  // 46. CERVECERÍA ARTESANAL
  {
    id: 'brew-master-pro',
    name: 'BrewMaster Pro — Densidad, IBU y Fermentación Cervecera',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Bebidas Artesanales',
    monetization: 'Suscripción ($6.99/mes) o Compra Vitalicia ($44.99)',
    tagline: 'Calcula la corrección de densímetro por temperatura, amargor IBU, carbonatación y perfiles de agua.',
    icon: '🍺',
    blueprint: {
      appName: 'BrewMaster Pro — Cerveza Artesanal',
      problemSolved: 'Los cerveceros artesanales cometen errores de cálculo en la densidad original y corrección de temperatura, arruinando lotes completos de 100 litros.',
      targetUser: 'Homebrewers, cervecerías artesanales y sommeliers cerveceros.',
      valueProposition: 'Suite completa de fórmulas cerveceras en tu bolsillo: calcula la eficiencia de macerado, corrección de sales en agua y alcohol en volumen (ABV).',
      keyFeatures: '• Corrección de densímetro y refractómetro según temperatura del mosto\n• Calculadora de IBU (Tinseth / Rager) según adiciones de lúpulo y tiempo de hervido\n• Calculadora de azúcar o dextrosa para carbonatación natural en botella\n• Bitácora de lotes con curva de fermentación día por día',
      requiredScreens: '1. Calculadoras Rápidas (Densidad, ABV, IBU), 2. Mis Recetas (IPA, Stout, Lager), 3. Lote en Fermentación Actual, 4. Ajuste de Sales de Agua, 5. Perfil.',
      userFlow: 'Durante el hervido agregas lúpulo cascade → La app calcula 42 IBU → Durante fermentación registras densidad → Calcula 6.2% ABV.',
      mvpScope: 'Calculadoras de densidad/ABV/IBU y gestión de recetas cerveceras guardadas.',
      futureScope: 'Conexión Bluetooth con densímetros digitales sumergibles (Tilt Hydrometer / iSpindel).',
      supabaseNeeds: 'Tablas: profiles, recipes, batches, fermentation_logs, ingredients_inventory.',
      similarApps: 'Brewfather, BeerSmith, Brewkeeper'
    }
  },

  // 47. MANTENIMIENTO DE PISCINAS
  {
    id: 'pool-care-ai',
    name: 'PoolCare AI — Dosificación Química y Claridad de Piscinas',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Mantenimiento del Hogar',
    monetization: 'Plan Particular ($6.99/mes) o Plan para Profesionales de Piscinas ($29.99/mes con clientes ilimitados)',
    tagline: 'Escanea la tira reactiva o toma foto al agua y obtén los gramos exactos de cloro, pH y alguicida a aplicar.',
    icon: '🏊‍♂️',
    blueprint: {
      appName: 'PoolCare AI — Agua Cristalina',
      problemSolved: 'Dueños de albercas compran químicos a ciegas, el agua se pone verde o irrita los ojos de los niños por mal balance químico.',
      targetUser: 'Dueños de casas con piscina, administradores de clubes y técnicos de mantenimiento de piscinas.',
      valueProposition: 'Ingresa los metros cúbicos de tu piscina, fotografía la tira reactiva y la app calcula los gramos exactos de cada producto químico.',
      keyFeatures: '• Lector de colores de tiras reactivas por cámara (Cloro libre, pH, Alcalinidad total, Ácido cianúrico)\n• Cálculo en gramos de cloro granulado, reductor de pH, clarificante o sulfato de cobre\n• Guía paso a paso para recuperar agua verde o turbia en 48 horas\n• Historial de tratamientos y costo acumulado en químicos',
      requiredScreens: '1. Estado de la Piscina (pH actual, Cloro), 2. Escáner de Tiras Reactivas, 3. Dosis Recomendada en Gramos/Litros, 4. Guía Anti-Agua Verde, 5. Mis Piscinas.',
      userFlow: 'El usuario sumerge la tira → Toma foto con la app → La app lee pH 7.8 → "Agrega 350g de reductor de pH y enciende el filtro por 4 horas".',
      mvpScope: 'Calculadora de químicos según m3 de piscina, lector de tira reactiva y checklist de mantenimiento.',
      futureScope: 'Alertas climáticas: predecir proliferación de algas antes de una tormenta de verano.',
      supabaseNeeds: 'Tablas: profiles, pools, test_strips, chemical_treatments, maintenance_routes.',
      similarApps: 'Pool Math, Sutro, Clorox Pool'
    }
  },

  // 48. ACÚSTICA DE HOME STUDIOS
  {
    id: 'acoustic-room',
    name: 'AcousticRoom — Medición RT60 y Tratamiento Acústico',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Audio & Streaming',
    monetization: 'Compra única ($14.99) o Reporte Pericial de Sala ($4.99) para streamers y músicos',
    tagline: 'Mide la reverberación de tu habitación con un barrido acústico y descubre dónde colocar paneles y trampas de graves.',
    icon: '🎛️',
    blueprint: {
      appName: 'AcousticRoom — Acústica de Estudio',
      problemSolved: 'Podcasters, locutores y productores graban audio con eco y reflexiones molestas porque no saben cómo acondicionar su cuarto correctamente.',
      targetUser: 'Streamers de Twitch, locutores de doblaje, podcasters y músicos caseros.',
      valueProposition: 'Emite un tono sinusoidal de prueba, el micrófono mide el tiempo de decaimiento (RT60) y te indica los puntos de primera reflexión en tus paredes.',
      keyFeatures: '• Generador de sweep de frecuencias y análisis del tiempo de reverberación (RT60)\n• Calculadora de modos resonantes de la sala (modos propios) ingresando Alto x Ancho x Largo\n• Guía de colocación en Realidad Aumentada de paneles acústicos y trampas de graves en esquinas\n• Test de inteligibilidad vocal antes y después de colocar mantas o espuma',
      requiredScreens: '1. Medidor RT60 en Vivo, 2. Dimensiones de la Sala & Modos Resonantes, 3. Mapa de Primeras Reflexiones (Espejo Virtual), 4. Guía de Paneles DIY, 5. Guardar Estudio.',
      userFlow: 'El podcaster pone su celular en su escritorio → Ejecuta el test de audio → La app indica 0.8s (demasiado eco) → Recomienda 4 paneles en paredes laterales.',
      mvpScope: 'Cálculo de modos axiales por dimensiones y generador de sweep con medición básica de decaimiento en dB.',
      futureScope: 'Simulación 3D de absorción con diferentes materiales (lana de roca vs espuma acústica).',
      supabaseNeeds: 'Tablas: profiles, studio_rooms, acoustic_tests, treatment_blueprints.',
      similarApps: 'Room EQ Wizard (REW), Sonarworks, Decibel Ultra'
    }
  },

  // 49. RELOJES MECÁNICOS
  {
    id: 'watch-collector-vault',
    name: 'WatchCollector Vault — Precisión y Valor de Relojes Mecánicos',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Lujo & Relojería',
    monetization: 'Suscripción ($9.99/mes o $79.99 vitalicio) — mercado de coleccionistas de alto poder adquisitivo',
    tagline: 'Mide la desviación diaria (+/- seg/día) escuchando el tic-tac con el micrófono y sigue el valor de tu colección.',
    icon: '⌚',
    blueprint: {
      appName: 'WatchCollector Vault — Alta Relojería',
      problemSolved: 'Dueños de relojes mecánicos de lujo (Rolex, Omega, Seiko, Patek) no saben si su reloj necesita service de lubricación o magnetización.',
      targetUser: 'Coleccionistas de relojes mecánicos, automáticos y vintage.',
      valueProposition: 'Usa el micrófono para escuchar la frecuencia de oscilación (21,600 bph / 28,800 bph) y mide la precisión en segundos diarios sin comprar un cronocomparador de $400.',
      keyFeatures: '• Cronocomparador acústico: mide beat error (ms), amplitud y desviación diaria (segundos/día)\n• Alerta de magnetización o necesidad de servicio en taller oficial\n• Bóveda de colección: número de serie, factura, certificado de autenticidad y fotos en alta resolución\n• Gráfico de cotización histórica del modelo en el mercado secundario (Chrono24)',
      requiredScreens: '1. Cronocomparador en Vivo (Micrófono escuchando el escape), 2. Mi Colección Privada, 3. Ficha Técnica del Reloj, 4. Registro de Precisión en el Tiempo, 5. Perfil.',
      userFlow: 'El coleccionista acerca el auricular al reloj en silencio → La app mide +4 seg/día (dentro de norma COSC) → Guarda el registro en la ficha del reloj.',
      mvpScope: 'Medición acústica básica de bph/desviación y catálogo de relojes con fotos y especificaciones.',
      futureScope: 'Detección de ángulo de levantamiento (lift angle) para cálculo de amplitud de volante.',
      supabaseNeeds: 'Tablas: profiles, watch_collections, accuracy_tests, service_history, valuation_logs.',
      similarApps: 'Watch Accuracy Meter, Toolwatch, Chrono24'
    }
  },

  // 50. BARISTAS & CAFÉ DE ESPECIALIDAD
  {
    id: 'coffee-dial-ai',
    name: 'CoffeeDial AI — Calibración de Espresso y Molienda',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Café de Especialidad',
    monetization: 'Suscripción ($4.99/mes o $29.99 compra única)',
    tagline: 'Calibra el espresso perfecto: relaciona molienda, gramos de café, tiempo de extracción y perfil de sabor.',
    icon: '☕',
    blueprint: {
      appName: 'CoffeeDial AI — Dial-in de Barista',
      problemSolved: 'Los baristas y amantes del café tiran gramos de café caro cada mañana intentando calibrar el molino ("dial-in") para que el espresso no salga ni ácido ni amargo.',
      targetUser: 'Baristas profesionales, cafeterías de especialidad y entusiastas de máquinas espresso domésticas.',
      valueProposition: 'Dile a la app los gramos de entrada, gramos en taza y segundos de extracción; la IA te indica exactamente cuántos clics afinar o engrosar la molienda.',
      keyFeatures: '• Asistente de calibración: "Salió agrio en 18s" → Sugiere afinar molienda 2 pasos y aumentar 0.5g de dosis\n• Cronómetro de extracción con gráfico de flujo (Flow rate en g/s)\n• Rueda de sabores SCA interactiva para registrar notas de cata (Frutal, Floral, Chocolate, Frutos secos)\n• Base de datos de recetas por origen de grano (Etiopía, Colombia, Geisha, Kenia)',
      requiredScreens: '1. Asistente de Calibración Rápida, 2. Cronómetro y Báscula de Extracción, 3. Rueda de Sabores y Calificación, 4. Mis Bolsas de Café, 5. Historial de Recetas.',
      userFlow: 'El barista extrae un doble: 18g in / 36g out en 20 seg → La app indica sub-extracción → Sugiere afinar molienda → Siguiente taza perfecta en 28s.',
      mvpScope: 'Cronómetro con ratio de extracción, asistente lógico de corrección de molienda y guardado de recetas de café.',
      futureScope: 'Conexión Bluetooth con balanzas inteligentes (Acaia Lunar, Felicita Arc, Timemore).',
      supabaseNeeds: 'Tablas: profiles, coffee_beans, extraction_logs, grinder_profiles, recipe_favorites.',
      similarApps: 'Beanconqueror, Filtru, Acaia Coffee'
    }
  },

  // 51. INVENTARIO DE ALQUILERES
  {
    id: 'rental-inventory',
    name: 'RentalInventory — Acta Digital de Entrega de Inmuebles',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Inmobiliario / Legal',
    monetization: 'Venta por Acta Emitida ($7.99 por acta de entrega con firma) o Plan Inmobiliarias ($39/mes)',
    tagline: 'Acta fotográfica y en video del estado de entrega del departamento para proteger la fianza y evitar disputas.',
    icon: '📝',
    blueprint: {
      appName: 'RentalInventory — Acta de Entrega',
      problemSolved: 'Al finalizar un contrato de alquiler, propietarios e inquilinos discuten por la devolución de la garantía/depósito debido a la falta de pruebas del estado original.',
      targetUser: 'Inquilinos que quieren asegurar su depósito, propietarios particulares y agentes inmobiliarios.',
      valueProposition: 'Checklist habitación por habitación con fotos de alta resolución, lectura de contadores de luz/agua y firma digital de ambas partes en el mismo celular.',
      keyFeatures: '• Recorrido guiado habitación por habitación (Paredes, llaves, electrodomésticos, cerraduras)\n• Registro fotográfico con marca de agua de fecha, hora y coordenadas GPS inmutables\n• Lectura y foto de medidores de luz, gas y agua para cortes exactos de facturas\n• Firma táctil simultánea de arrendador y arrendatario y exportación inmediata en PDF blindado',
      requiredScreens: '1. Mis Inmuebles, 2. Nueva Acta de Entrada / Salida, 3. Checklist por Ambientes con Fotos, 4. Lectura de Medidores, 5. Firma y Generación de PDF.',
      userFlow: 'El día de entrega de llaves, recorren el piso en 10 minutos → Toman fotos a detalles → Firman en pantalla → Ambos reciben el PDF por correo.',
      mvpScope: 'Checklist de ambientes, captura de fotos con timestamp, firma en pantalla y generación de PDF descargable.',
      futureScope: 'Comparador de imágenes de entrada vs salida con IA para detectar roturas nuevas de forma automática.',
      supabaseNeeds: 'Tablas: profiles, properties, inventory_reports, room_items, report_signatures.',
      similarApps: 'Inventory Hive, Imfuna, Checklist Property'
    }
  },

  // 52. ACUARIOS MARINOS & DE ARRECIFE
  {
    id: 'fish-tank-master',
    name: 'FishTank Master — Parámetros de Acuarios de Arrecife',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Acuariofilia',
    monetization: 'Suscripción ($5.99/mes o $39.99/año)',
    tagline: 'Control estricto de salinidad, calcio, magnesio y nitratos para corales SPS/LPS y peces de agua salada.',
    icon: '🐠',
    blueprint: {
      appName: 'FishTank Master — Acuarios Marinos',
      problemSolved: 'Los corales de arrecife mueren en horas si el magnesio, calcio o alcalinidad fluctúan levemente, causando pérdidas de cientos de dólares en fauna marina.',
      targetUser: 'Acuaristas marinos (reefers), tiendas de peces exóticos y aficionados a los acuarios plantados de aquascaping.',
      valueProposition: 'Gráficos de tendencia de parámetros químicos del agua con calculadora de dosificación de aditivos (Balling / Calcio / Bicarbonato) para estabilidad total.',
      keyFeatures: '• Registro de parámetros: Salinidad (SG/PPT), Alcalinidad (dKH), Calcio (ppm), Magnesio, Nitratos (NO3) y Fosfatos (PO4)\n• Calculadora de dosificación exacta según volumen neto de agua para subir dKH o Calcio de forma segura\n• Verificador de compatibilidad entre especies de peces y corales antes de comprar\n• Recordatorios de cambio de agua, reemplazo de resinas DI y limpieza del skimmer',
      requiredScreens: '1. Dashboard del Acuario (Parámetros con semáforo verde/rojo), 2. Registrar Test de Agua, 3. Calculadora de Aditivos, 4. Habitantes del Tanque, 5. Gráficos Históricos.',
      userFlow: 'Mides dKH con test de gotas (da 7.0) → La app recomienda subir a 8.5 agregando 12 ml de aditivo durante 3 días para no estresar los corales.',
      mvpScope: 'Registro de 10 parámetros químicos, semáforos de advertencia y calculadora básica de dosificación.',
      futureScope: 'Integración con controladores de acuario Neptune Apex y Reef Factory por API.',
      supabaseNeeds: 'Tablas: profiles, aquariums, water_tests, dosing_events, livestock_inventory.',
      similarApps: 'Aquarimate, Pocket Marine, Reef-Doctor'
    }
  },

  // 53. MÁQUINAS EXPENDEDORAS (VENDING)
  {
    id: 'vending-pro',
    name: 'VendingPro — Rutas de Reposición y Margen de Vending',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Operaciones / Logística',
    monetization: 'Suscripción SaaS ($15/mes por cada 10 máquinas expendedoras administradas)',
    tagline: 'Optimiza tu ruta de recarga de snacks y bebidas, previene caducidades y calcula la ganancia neta por espiral.',
    icon: '🍫',
    blueprint: {
      appName: 'VendingPro — Gestión de Máquinas Expendedoras',
      problemSolved: 'Pequeños operadores de máquinas expendedoras viajan a cargar productos que no hacen falta y dejan vacíos los que más se venden, perdiendo rentabilidad.',
      targetUser: 'Operadores independientes de máquinas vending (snacks, café, refrescos, juguetes).',
      valueProposition: 'Prepara tu mochila de mercadería exacta antes de salir de casa, optimiza tu ruta en mapa y sabe qué máquina te da más ganancias al mes.',
      keyFeatures: '• Mapa de ruta con la secuencia óptima de visita a locaciones (hospitales, oficinas, gimnasios)\n• Planograma visual de cada máquina (Espiral A1 a E6 con capacidad y precio)\n• Alertas de productos próximos a vencer para aplicar ofertas o rotación\n• Reporte de recaudación en efectivo y tarjeta con cálculo automático de margen de ganancia',
      requiredScreens: '1. Mis Máquinas (Estado de stock y ventas), 2. Planograma Visual de Espirales, 3. Lista de Carga para el Día, 4. Recaudación y Gastos, 5. Ruta en Mapa.',
      userFlow: 'Por la mañana revisas la app → Te indica: "Llevar 12 chocolates y 20 aguas para la máquina del Gym" → Llegas y recargas en 3 minutos.',
      mvpScope: 'Registro de máquinas con planograma básico, lista de reposición y control de ingresos por visita.',
      futureScope: 'Integración con telemetría MDB / Nayax para stock en tiempo real por tarjeta SIM.',
      supabaseNeeds: 'Tablas: profiles, vending_machines, spirals_layout, restock_logs, revenue_collections.',
      similarApps: 'Vendsoft, Parlevel, Vendmanager'
    }
  },

  // 54. ARBITRAJE DE SNEAKERS
  {
    id: 'sneaker-flip-ai',
    name: 'SneakerFlip AI — Escáner de Autenticidad y Arbitraje',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Streetwear / Reselling',
    monetization: 'Suscripción Pro ($11.99/mes) para alertas de margen y verificación por IA',
    tagline: 'Verifica costuras y etiquetas para detectar réplicas y calcula el margen de reventa comparando StockX y GOAT.',
    icon: '👟',
    blueprint: {
      appName: 'SneakerFlip AI — Reseller de Zapatillas',
      problemSolved: 'Revendedores de zapatillas de colección compran réplicas por error o compran modelos que no tienen demanda, perdiendo su capital.',
      targetUser: 'Resellers de sneakers (Nike Dunk, Jordan, Yeezy, Travis Scott) y coleccionistas.',
      valueProposition: 'Toma fotos a la etiqueta interior, costuras de la plantilla y suela para recibir un veredicto de autenticidad y el precio promedio de reventa.',
      keyFeatures: '• Verificación de autenticidad asistida por IA (análisis de tipografía de etiqueta y patrón de costura)\n• Comparador de precios de venta en vivo entre StockX, GOAT y eBay\n• Calculadora de ganancia neta restando comisiones de plataforma y costo de envío\n• Registro de inventario con fecha de compra, costo y ganancia realizada',
      requiredScreens: '1. Escáner de Zapatilla & Etiqueta, 2. Resultado de Autenticidad & Cotización, 3. Calculadora de Flip (Margen Neto), 4. Mi Inventario en Venta, 5. Tendencias de Mercado.',
      userFlow: 'Ves una oferta en tienda de $80 → Escaneas la zapatilla → La app confirma autenticidad y precio de mercado en $160 → Compras con ganancia segura.',
      mvpScope: 'Calculadora de comisiones de reventa, inventario de pares y catálogo de búsqueda de precios.',
      futureScope: 'Algoritmo de visión entrenado con miles de réplicas "UA" (Unauthorized Authentic).',
      supabaseNeeds: 'Tablas: profiles, sneaker_inventory, price_history, legit_checks, sales_logs.',
      similarApps: 'CheckCheck, Legit App, StockX, Alias'
    }
  },

  // 55. PATRONES DE COSTURA AR
  {
    id: 'sewing-fit-ar',
    name: 'SewingFit AR — Medición Corporal y Patrones de Costura',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Moda & Confección',
    monetization: 'Venta de patrones PDF a medida ($3.99 por patrón) o Suscripción ($14.99/mes para modistas)',
    tagline: 'Escaneo de medidas con la cámara y generación de patrones de costura listos para imprimir en hojas A4.',
    icon: '🪡',
    blueprint: {
      appName: 'SewingFit AR — Patrones a Medida',
      problemSolved: 'Coser ropa que quede perfecta requiere horas de ajuste de patrones estándar de tallas genéricas (S/M/L) que nunca coinciden con cuerpos reales.',
      targetUser: 'Modistas, sastres, estudiantes de diseño de moda y personas que cosen su propia ropa.',
      valueProposition: 'Escanea el cuerpo de la persona con la cámara para obtener contorno de busto, cintura, cadera y tiro, adaptando el patrón automáticamente a sus medidas exactas.',
      keyFeatures: '• Medición corporal asistida por visión artificial (Busto, Cintura, Cadera, Largo de talle, Hombros)\n• Generador paramétrico de patrones de costura (Vestidos, faldas, pantalones, camisas)\n• Exportación de patrones en hojas A4 numeradas para imprimir en casa y ensamblar con cinta\n• Calculadora de metraje de tela según ancho del rollo (1.40m / 1.50m) y margen de costura',
      requiredScreens: '1. Escáner de Medidas del Cliente, 2. Catálogo de Diseños y Prendas, 3. Ajuste de Holgura y Pinzas, 4. Vista Previa del Patrón A4, 5. Mis Clientes.',
      userFlow: 'La clienta se para frente al celular → La app calcula sus medidas → Elige "Vestido evasé" → Descarga el PDF con el patrón exacto para su cuerpo.',
      mvpScope: 'Entrada manual y asistida de medidas, generador de 3 patrones básicos y exportación a PDF para imprimir.',
      futureScope: 'Simulación 3D de caída de la tela (algodón, seda, lino) sobre el avatar del cliente.',
      supabaseNeeds: 'Tablas: profiles, clients_measurements, sewing_patterns, pdf_exports, fabric_calculator.',
      similarApps: 'Sewing Pattern Maker, Tailornova, Lekala'
    }
  },

  // 56. TERRARIOS & REPTILES EXÓTICOS
  {
    id: 'terrarium-life',
    name: 'TerrariumLife — Monitoreo de Reptiles e Insectos Exóticos',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Mascotas Exóticas',
    monetization: 'Suscripción ($4.99/mes o $34.99/año)',
    tagline: 'Registro de mudas de piel, ciclo de calor día/noche, presas vivas y suplemento de calcio D3.',
    icon: '🦎',
    blueprint: {
      appName: 'TerrariumLife — Cuidado de Reptiles',
      problemSolved: 'Reptiles (geckos leopardo, dragones barbudos, pitones) e insectos exóticos requieren parámetros ambientales estrictos y dietas que los cuidadores olvidan registrar.',
      targetUser: 'Dueños de reptiles, anfibios, tarántulas y tiendas de animales exóticos.',
      valueProposition: 'Curva de temperatura del punto caliente vs zona fría, cronograma de suplementación de calcio/vitaminas y registro de mudas exitosas o retenidas.',
      keyFeatures: '• Registro de alimentación: tipo de presa (grillos, cucarachas dubia, ratones), tamaño y cantidad consumida\n• Calendario de suplementación (Calcio puro vs Calcio con Vitamina D3 vs Multivitamínico)\n• Registro de mudas de piel con fotos de cola y dedos para prevenir necrosis por muda retenida\n• Curvas de peso en gramos con balanza digital para detección temprana de parásitos',
      requiredScreens: '1. Mis Terrarios (Temperatura / Humedad actual), 2. Registrar Alimentación, 3. Historial de Mudas y Peso, 4. Ficha de la Especie y Cuidados, 5. Recordatorios.',
      userFlow: 'Alimentas a tu dragón barbudo → Anotas 8 grillos con calcio D3 → La app programa la próxima toma con calcio sin D3 para el jueves.',
      mvpScope: 'Ficha de mascota exótica, registro de comidas, control de peso con gráfico y registro de mudas.',
      futureScope: 'Integración Bluetooth con termohigrómetros tipo Govee / Inkbird.',
      supabaseNeeds: 'Tablas: profiles, terrariums, exotic_pets, feeding_logs, shedding_records, weight_logs.',
      similarApps: 'Reptile Scan, Husbandry.pro, ExoticsKeeper'
    }
  },

  // 57. JUEGOS DE MESA
  {
    id: 'boardgame-buddy',
    name: 'BoardGameBuddy — Árbitro de Reglas con IA y Marcador',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Juegos & Ocio',
    monetization: 'Suscripción ($3.99/mes o $19.99 compra única) — comunidad gamer fiel y activa',
    tagline: 'Pregúntale en lenguaje natural dudas de reglas durante la partida y calcula la puntuación final sin discutir.',
    icon: '🎲',
    blueprint: {
      appName: 'BoardGameBuddy — Reglas al Instante',
      problemSolved: 'En noches de juegos de mesa, las partidas se congelan 20 minutos mientras los jugadores hojean manuales de 40 páginas discutiendo la interpretación de una regla.',
      targetUser: 'Jugadores de juegos de mesa modernos (Catan, Terraforming Mars, Scythe, Arkham Horror, Wingspan, Dune).',
      valueProposition: 'Habla en lenguaje natural: "¿Qué pasa si me roban el ladrón en el turno 3?" y la IA entrenada con las FAQs y reglamentos oficiales te responde al instante con la página exacta.',
      keyFeatures: '• Asistente de reglas por IA con índice oficial de más de 500 juegos de mesa modernos\n• Marcador de puntos inteligente con desempate automático según reglas oficiales de cada juego\n• Asignador aleatorio de jugador inicial y selector de roles o facciones\n• Registro histórico de victorias, estadísticas de grupo y ranking ELO de amigos',
      requiredScreens: '1. Mesa de Juego Actual (Preguntas de reglas por voz), 2. Marcador de Puntos por Rondas, 3. Selector de Jugador Inicial y Facciones, 4. Estadísticas del Grupo, 5. Mi Ludoteca.',
      userFlow: 'Surge una duda en la mitad de la partida → Dices la duda al micrófono → La app responde la regla en 3 segundos → La partida continúa sin frenar.',
      mvpScope: 'Buscador de reglas con IA sobre 20 juegos populares, marcador de puntos universal y selector de jugador inicial.',
      futureScope: 'Escáner de cartas por cámara para traducir o explicar efectos complejos al momento.',
      supabaseNeeds: 'Tablas: profiles, game_groups, boardgames_library, match_sessions, player_scores.',
      similarApps: 'Board Game Stats (BG Stats), Dized, RulesBot'
    }
  },

  // 58. FOOD TRUCKS & CARTELES
  {
    id: 'foodtruck-spot',
    name: 'FoodTruckSpot — Zonas de Venta, Eventos y Permisos',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Gastronomía Móvil',
    monetization: 'Suscripción para Food Trucks ($29.99/mes por camión de comida)',
    tagline: 'Encuentra eventos privados, ferias con cupos libres, normativas municipales y avisa a tus seguidores dónde estás estacionado.',
    icon: '🚚',
    blueprint: {
      appName: 'FoodTruckSpot — Gastronomía Móvil',
      problemSolved: 'Los dueños de food trucks pierden dinero estacionándose en zonas con poca afluencia o sufren multas por normativas municipales cambiantes.',
      targetUser: 'Dueños de food trucks, carritos de café/crepas y organizadores de festivales.',
      valueProposition: 'Mapa colaborativo de zonas permitidas con tomas de luz y agua, cartelera de eventos con solicitud de espacio y notificación push a tus comensales de tu ubicación en vivo.',
      keyFeatures: '• Transmisión de ubicación en tiempo real: "Hoy estamos en Parque Central de 6pm a 11pm"\n• Bolsa de eventos: organizadores de bodas y ferias publican vacantes para food trucks con pago directo\n• Mapa de puntos de recarga de agua potable, electricidad y depósitos de grasa autorizados\n• Menú digital rápido con código QR para cobrar sin datáfono físico',
      requiredScreens: '1. Mi Ubicación Hoy (Activar transmisión GPS), 2. Mapa de Eventos y Vacantes Disponibles, 3. Registro de Facturación del Día, 4. Menú QR Rápido, 5. Perfil del Food Truck.',
      userFlow: 'El food truck llega a la plaza → Activa "Abierto aquí" → Sus clientes locales reciben notificación → Escanean el menú QR y compran.',
      mvpScope: 'Mapa con ubicación en vivo del camión, menú móvil y listado de eventos locales.',
      futureScope: 'Integración con pedidos anticipados para recoger al llegar al camión.',
      supabaseNeeds: 'Tablas: profiles, food_trucks, live_locations, festival_events, truck_menus.',
      similarApps: 'Roaming Hunger, Best Food Trucks, StreetFoodFinder'
    }
  },

  // 59. CHOCOLATERÍA ARTESANAL
  {
    id: 'choc-master-pro',
    name: 'ChocMaster Pro — Curvas de Templado y Ganaches',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Repostería Fina',
    monetization: 'Suscripción ($8.99/mes o $59.99 compra única)',
    tagline: 'Control de curvas de cristalización de manteca de cacao (Forma V), balance de ganaches y vida útil por actividad de agua.',
    icon: '🍫',
    blueprint: {
      appName: 'ChocMaster Pro — Alta Chocolatería',
      problemSolved: 'El chocolate templado incorrectamente queda opaco, con manchas blancas (fat bloom) y se derrite al tacto, arruinando producciones enteras de bombones.',
      targetUser: 'Chocolateros artesanales, pasteleros de alta gama y bomboneros.',
      valueProposition: 'Curvas de temperatura exactas de fundido, descenso y remontado para chocolate negro, con leche, blanco y ruby, junto a calculadora de balance de agua para ganaches.',
      keyFeatures: '• Guía interactiva de templado por método (Sembrado, Mármol, Baño María o Microondas)\n• Calculadora de balance de ganaches (Porcentaje de grasa, extracto seco y azúcares)\n• Estimador de vida útil (Shelf Life) y actividad de agua (Aw) para evitar mohos en bombones sin conservantes\n• Calculadora de costos por bombón y por molde de policarbonato',
      requiredScreens: '1. Asistente de Templado en Vivo (Termómetro en mano), 2. Balanceador de Ganaches, 3. Calculadora de Costos por Molde, 4. Mis Fórmulas y Rellenos, 5. Perfil.',
      userFlow: 'El chocolatero derrite chocolate negro a 45°C → La app le guía a enfriar a 28°C y remontar a 31°C → El bombón sale brillante y con chasquido crujiente.',
      mvpScope: 'Guía de temperaturas para 4 tipos de chocolate, calculadora básica de ganache y costos por molde.',
      futureScope: 'Conexión con termómetros Bluetooth para registro automático de curvas térmicas.',
      supabaseNeeds: 'Tablas: profiles, chocolate_recipes, tempering_curves, ganache_formulas, costing_sheets.',
      similarApps: 'Choculator, GanacheApp, PastryHub'
    }
  },

  // 60. BANDAS & MÚSICOS EN VIVO
  {
    id: 'stage-crew-live',
    name: 'StageCrew Live — Rider Técnico, Stage Plot y Setlists',
    category: 'nicho',
    categoryLabel: 'Micro-Nicho Música en Vivo',
    monetization: 'Suscripción ($9.99/mes por banda o $49/año)',
    tagline: 'Diseñador visual de escenario (Stage Plot), lista de canales (Input List) y setlist sincronizado en vivo entre celulares.',
    icon: '🎤',
    blueprint: {
      appName: 'StageCrew Live — Conciertos & Bandas',
      problemSolved: 'Las bandas llegan a tocar a los locales y los sonidistas no saben qué micrófonos necesitan, o los músicos tocan canciones diferentes porque no tienen el setlist sincronizado.',
      targetUser: 'Bandas independientes, sonidistas de eventos, cantantes y directores musicales.',
      valueProposition: 'Crea tu Stage Plot e Input List en 3 minutos arrastrando amplificadores y micrófonos, y comparte el setlist que cambia de canción automáticamente en todos los celulares del grupo.',
      keyFeatures: '• Diseñador visual drag-and-drop de escenario (Batería, amplificadores, monitores de piso, micrófonos)\n• Input list profesional (Canal, Instrumento, Micrófono preferido, Phantom Power 48V)\n• Setlist sincronizado en tiempo real: cuando el cantante pasa a la canción 4, cambia en la pantalla del baterista\n• Reparto de honorarios del concierto (cálculo de ganancia neta restando furgoneta y porcentaje por músico)',
      requiredScreens: '1. Diseñador de Stage Plot (Escenario), 2. Input List para el Sonidista, 3. Modo Concierto (Setlist en Vivo Sincronizado), 4. Calendario de Ensayos y Fechas, 5. Reparto de Dinero.',
      userFlow: 'La banda envía el link del Stage Plot al técnico de sonido antes del concierto → En tarima abren la app → Tocan las canciones sincronizados sin papel.',
      mvpScope: 'Generador de Input List y Stage Plot exportable en PDF y setlist con acordes sincronizados.',
      futureScope: 'Sincronización MIDI con pedaleras y sintetizadores para cambio de pistas y efectos en vivo.',
      supabaseNeeds: 'Tablas: profiles, bands, band_members, stage_plots, input_channels, setlists, gig_finances.',
      similarApps: 'StagePlot Pro, Setlist Helper, BandHelper'
    }
  }

];

export function generateIosAppPrompt(data: AppBlueprintData): string {
  return `### 📱 ESPECIFICACIÓN TÉCNICA DE APP MÓVIL (iOS & ANDROID): ${data.appName || 'Mi Aplicación Móvil'}

Actúa como un **Agente Desarrollador Mobile Senior especializado en React Native, Expo y Supabase (Multiplataforma iOS & Android)**.
Vamos a construir una aplicación móvil universal de alto rendimiento utilizando el siguiente stack:
- **Framework Móvil**: React Native con **Expo (SDK actual)** y **Expo Router** (File-based navigation para iOS y Android).
- **Estilos & UI**: Tailwind CSS (NativeWind) / StyleSheet optimizado con soporte para Dark Mode, Safe Area Context y Haptics/Vibration.
- **Backend & Base de Datos**: **Supabase** (PostgreSQL, Row Level Security, Auth con Email / Google / Apple Sign In, Storage y Realtime).
- **Entorno de Pruebas**: **Expo Go** en dispositivo físico (iPhone o Android) y emuladores.

---

#### 1. IDENTIDAD & PROPUESTA DE VALOR
- **Nombre de la App**: ${data.appName || 'Pendiente'}
- **Propuesta de Valor**: ${data.valueProposition || 'No especificada'}
- **Público Objetivo / Usuarios**: ${data.targetUser || 'Usuarios de iOS y Android'}
${data.similarApps ? `- **Apps de Referencia**: ${data.similarApps}` : ''}

#### 2. PROBLEMA QUE RESUELVE
${data.problemSolved || 'No especificado'}

#### 3. FUNCIONALIDADES ESENCIALES (MVP)
${data.keyFeatures || 'No especificado'}

#### 4. MAPA DE PANTALLAS (EXPO ROUTER MULTIPLATAFORMA)
${data.requiredScreens || '1. Inicio, 2. Auth, 3. Dashboard, 4. Detalle, 5. Perfil'}

#### 5. FLUJO DE USUARIO
${data.userFlow || 'Flujo estándar móvil'}

#### 6. ALCANCE DEL MVP vs FASE FUTURA
- **Alcance MVP**: ${data.mvpScope || 'Funcionalidades esenciales para lanzamiento'}
- **Para Versión 2 (Post-MVP)**: ${data.futureScope || 'Mejoras avanzadas e integraciones'}

${data.supabaseNeeds ? `#### 7. ESTRUCTURA DE BASE DE DATOS EN SUPABASE (SQL)\n${data.supabaseNeeds}\n` : ''}
---

### 🛠️ INSTRUCCIONES DE IMPLEMENTACIÓN PARA EL AGENTE:
1. Configura la estructura de carpetas usando **Expo Router** (\`app/(tabs)/...\`, \`app/(auth)/...\`).
2. Implementa componentes limpios, modulares y con soporte de área segura multiplataforma (\`react-native-safe-area-context\`).
3. Conecta el cliente de Supabase (\`@supabase/supabase-js\`) con variables de entorno \`EXPO_PUBLIC_SUPABASE_URL\` y \`EXPO_PUBLIC_SUPABASE_ANON_KEY\`.
4. Añade retroalimentación táctil (\`expo-haptics\`) y soporte para botón de retroceso físico en Android (\`BackHandler\`).
5. Asegura que la app pueda ser probada inmediatamente escaneando el código QR con **Expo Go** en cualquier celular (iPhone o Android).
`;
}
