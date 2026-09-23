import React, { useState } from 'react';
import { 
  Shield, Users, MessageSquareQuote, HelpCircle, 
  Mail, MessageCircle, ChevronDown, Check, Send, Sparkles, Terminal, Copy,
  Star, CheckCircle2
} from 'lucide-react';

export const Slide4TrustBlocks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sobre-nosotros' | 'testimonios' | 'faqs' | 'contacto' | 'whatsapp'>('faqs');
  
  // Interactive FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Copy state
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const FAQS = [
    {
      q: '¿Cuánto tiempo toma tener mi web lista?',
      a: 'Con nuestra metodología de agentes de IA y Antigravity, la primera versión funcional queda lista en menos de 48 horas.'
    },
    {
      q: '¿Necesito saber programar para cambiar un texto o foto después?',
      a: 'Para nada. La web queda estructurada con Clean Code y documentada para que tú o tu agente puedan actualizar cualquier dato en segundos.'
    },
    {
      q: '¿Cómo funciona la conexión con WhatsApp?',
      a: 'El botón incluye un mensaje predeterminado que abre WhatsApp directamente en la app del cliente con el texto del servicio que le interesa.'
    }
  ];

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setFormName('');
      setFormEmail('');
    }, 3000);
  };

  const PROMPTS: Record<string, string> = {
    'sobre-nosotros': 'Crea la sección AboutSection resaltando la historia del fundador, años de experiencia, foto profesional y valores de marca que generan confianza.',
    'testimonios': 'Diseña TestimonialsSection con 3 tarjetas de clientes reales: foto, nombre, empresa, calificación de 5 estrellas y resultado medible.',
    'faqs': 'Implementa FAQSection con acordeón accesible usando Radix UI Accordion para que las respuestas se desplieguen suavemente con microanimación.',
    'contacto': 'Construye ContactSection con formulario interactivo usando React Hook Form, validación de email y teléfono, y retroalimentación de envío exitoso.',
    'whatsapp': 'Agrega un botón flotante de WhatsApp permanente en la esquina inferior derecha con badge animado que incite al clic inmediato.'
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-700 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Shield className="w-3.5 h-3.5" /> Construcción Fase 2
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Confianza, Validación y Cierre
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full shadow-inner">
          {[
            { id: 'sobre-nosotros', label: 'Sobre Nosotros', icon: Users },
            { id: 'testimonios', label: 'Testimonios', icon: MessageSquareQuote },
            { id: 'faqs', label: 'FAQs (Radix)', icon: HelpCircle },
            { id: 'contacto', label: 'Contacto (Hook Form)', icon: Mail },
            { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
          ].map((t) => {
            const isTab = activeTab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shrink-0 ${
                  isTab
                    ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Demo Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-center">
        {/* Left: Dynamic Live Simulation of the Selected Component */}
        <div className="lg:col-span-6 glass-panel p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-sm min-h-[360px]">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-violet-700 dark:text-violet-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Componente en Acción en Tiempo Real
              </span>
              <span className="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                Interactúa con los elementos
              </span>
            </div>

            {/* TAB 1: SOBRE NOSOTROS */}
            {activeTab === 'sobre-nosotros' && (
              <div className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-md">
                  👨‍💼
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-700 dark:text-cyan-400 text-[11px] font-mono font-bold">
                    Fundador & Estratega
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Carlos Mendoza</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "Ayudamos a emprendedores a digitalizar su oferta sin la pesadilla técnica tradicional."
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40 font-bold">
                      ⭐ +8 Años Exp
                    </span>
                    <span className="px-2 py-0.5 rounded bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/40 font-bold">
                      🚀 150+ Webs Lanzadas
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TESTIMONIOS */}
            {activeTab === 'testimonios' && (
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Mariana Ruiz</span>
                      <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">E-commerce</span>
                    </div>
                    <div className="flex items-center text-amber-500 text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "En los primeros 10 días de lanzar la nueva web, cerramos 14 ventas directas por WhatsApp. Impresionante."
                  </p>
                  <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Venta verificada por WhatsApp</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Dr. Fernando Gómez</span>
                      <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">Clínica Dental</span>
                    </div>
                    <div className="flex items-center text-amber-500 text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "Los pacientes ahora reservan citas desde el móvil sin rodeos. El diseño transmite total confianza."
                  </p>
                  <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Citas directas agendadas</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: FAQS (RADIX ACCORDION) */}
            {activeTab === 'faqs' && (
              <div className="space-y-2">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="rounded-xl glass-card border border-slate-200 dark:border-slate-800 overflow-hidden transition-all shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3 text-left flex items-center justify-between gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{faq.q}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-violet-600 dark:text-violet-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-3 pt-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/40 bg-violet-50/40 dark:bg-slate-950/40 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 4: CONTACTO (REACT HOOK FORM) */}
            {activeTab === 'contacto' && (
              <form onSubmit={handleFakeSubmit} className="space-y-3 p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] font-mono text-slate-600 dark:text-slate-400 block mb-1 font-semibold">Nombre Completo</label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-600 dark:text-slate-400 block mb-1 font-semibold">Correo Electrónico</label>
                    <input
                      type="email"
                      placeholder="juan@correo.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-md shadow-violet-500/25"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span className="text-white font-bold">{formSuccess ? '¡Solicitud Enviada con Éxito!' : 'Enviar Consulta (Validado por Hook Form)'}</span>
                </button>

                {formSuccess && (
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-[11px] text-center font-mono font-semibold animate-fadeIn">
                    ✓ Validación exitosa sin recargar la pantalla
                  </div>
                )}
              </form>
            )}

            {/* TAB 5: WHATSAPP */}
            {activeTab === 'whatsapp' && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-950 border border-emerald-300/80 dark:border-emerald-500/40 text-center space-y-3 shadow-sm">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/30 animate-bounce">
                  <MessageCircle className="w-7 h-7 text-white stroke-[2.5]" style={{ color: '#ffffff' }} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-emerald-950 dark:text-white">Botón de WhatsApp Inteligente</h4>
                  <p className="text-xs text-emerald-900/80 dark:text-slate-300">
                    Abre el chat con el mensaje: <em className="text-emerald-800 dark:text-emerald-400 font-bold">"Hola, vi tu web y quiero cotizar el servicio X"</em>
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  ✓ Tasa de conversión 3x superior a formularios tradicionales
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Tecnología: <strong className="text-violet-700 dark:text-violet-400 font-semibold">Radix UI + Hook Form + Eventos</strong></span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ Experiencia Fluida</span>
          </div>
        </div>

        {/* Right: Architectural Explanation & Agent Prompt */}
        <div className="lg:col-span-6 glass-panel p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-sm min-h-[360px]">
          <div className="space-y-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 font-bold border border-violet-200 dark:border-violet-800/40">
              Psicología de Cierre de Venta
            </span>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
              Por qué estos bloques cierran contratos
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Un cliente interesado necesita resolver 3 dudas antes de pagar: 
              <strong className="text-slate-900 dark:text-white"> ¿Quiénes son?</strong> (Sobre Nosotros), 
              <strong className="text-slate-900 dark:text-white"> ¿A quién más han ayudado?</strong> (Testimonios), y 
              <strong className="text-slate-900 dark:text-white"> ¿Qué pasa con mis dudas técnicas?</strong> (FAQs).
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-violet-50/70 dark:bg-slate-900 border border-violet-100 dark:border-slate-800 text-violet-800 dark:text-violet-300 font-medium">
                <Check className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>Radix Accordion para FAQs accesibles sin JavaScript pesado</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-pink-50/70 dark:bg-slate-900 border border-pink-100 dark:border-slate-800 text-pink-800 dark:text-pink-300 font-medium">
                <Check className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400 shrink-0" />
                <span>React Hook Form para cero recargas de página en contactos</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-50/70 dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 text-emerald-800 dark:text-emerald-300 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>WhatsApp directo como vía preferente de cierre rápido</span>
              </div>
            </div>
          </div>

          {/* Copyable Prompt with Mac Editor Frame */}
          <div className="pt-2 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold">
                <Terminal className="w-3.5 h-3.5" /> Prompt para esta sección:
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(PROMPTS[activeTab]);
                  setCopiedPrompt(true);
                  setTimeout(() => setCopiedPrompt(false), 2000);
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] transition-all shadow-sm active:scale-95"
              >
                {copiedPrompt ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3 text-white" />}
                <span className="text-white font-bold">{copiedPrompt ? '¡Copiado!' : 'Copiar Prompt'}</span>
              </button>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
              <div className="px-3 py-1.5 bg-slate-200 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 dark:bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 dark:bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 dark:bg-emerald-500" />
                </div>
                <span className="font-semibold text-slate-500 dark:text-slate-400">prompt-{activeTab}.md</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-emerald-700 dark:text-emerald-400 select-all leading-relaxed border-t border-white/50 dark:border-transparent">
                "{PROMPTS[activeTab]}"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span>🤝 La confianza no se pide; se demuestra con testimonios, FAQs y canales directos.</span>
        <span className="hidden sm:inline text-violet-700 dark:text-violet-400 font-semibold">Prueba los acordeones y el formulario arriba</span>
      </div>
    </div>
  );
};
