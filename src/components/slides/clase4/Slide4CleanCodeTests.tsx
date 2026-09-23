import React, { useState } from 'react';
import { 
  CheckCircle2, Play, Terminal, 
  FileCode2, BookOpen, RefreshCw, Check, ShieldCheck, Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TestCase {
  id: string;
  name: string;
  target: string;
  description: string;
  passed: boolean;
  durationMs: number;
}

const INITIAL_TESTS: TestCase[] = [
  {
    id: 'test-1',
    name: 'Navbar: Renderizado y botón de escape',
    target: '<Navbar />',
    description: 'Verifica que el logo exista, los enlaces respondan y el CTA a WhatsApp sea clickeable.',
    passed: true,
    durationMs: 42
  },
  {
    id: 'test-2',
    name: 'Hero: Titular con fórmula de conversión',
    target: '<HeroSection />',
    description: 'Comprueba que el H1 esté presente con fórmula PAS y el botón enlace a WhatsApp.',
    passed: true,
    durationMs: 38
  },
  {
    id: 'test-3',
    name: 'Contacto: Validación de email con Hook Form',
    target: '<ContactForm />',
    description: 'Prueba que un correo inválido como "juan@" no pase y muestre alerta amigable sin recargar.',
    passed: true,
    durationMs: 65
  },
  {
    id: 'test-4',
    name: 'FAQs: Despliegue accesible de Radix Accordion',
    target: '<FAQAccordion />',
    description: 'Valida que al pulsar Enter o hacer clic, la respuesta se revele suavemente.',
    passed: true,
    durationMs: 29
  },
  {
    id: 'test-5',
    name: 'WhatsApp: Formato internacional del teléfono',
    target: '<WhatsAppButton />',
    description: 'Comprueba que el enlace contenga `https://wa.me/` y código de país válido.',
    passed: true,
    durationMs: 18
  }
];

export const Slide4CleanCodeTests: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestCase[]>(INITIAL_TESTS);

  const runAllTests = () => {
    setIsRunning(true);
    setTestResults([]);
    
    // Simulate step by step running
    INITIAL_TESTS.forEach((test, idx) => {
      setTimeout(() => {
        setTestResults((prev) => [...prev, test]);
        if (idx === INITIAL_TESTS.length - 1) {
          setIsRunning(false);
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.7 }
          });
        }
      }, (idx + 1) * 350);
    });
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Blindaje de Calidad
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Clean Code, Unit Tests & Documentación
          </h2>
        </div>

        <button
          onClick={runAllTests}
          disabled={isRunning}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs font-mono transition-all shadow-md ${
            isRunning
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 !text-white shadow-emerald-500/20 active:scale-95 hover:scale-105'
          }`}
        >
          {isRunning ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current text-white" />
          )}
          <span className="text-white">{isRunning ? 'Ejecutando Pruebas...' : 'Ejecutar Unit Tests en Vivo'}</span>
        </button>
      </div>

      {/* Main Grid: Left Quality Triad, Right Terminal Test Runner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-center">
        {/* Left: The 3 Pillars of Code Quality for Directors */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold font-mono text-xs">
                <FileCode2 className="w-4 h-4" /> 1. Clean Code (Código Limpio)
              </div>
              <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-800/40 font-semibold">
                Modular
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Cada componente vive en su propio archivo pequeño (<code className="text-cyan-700 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-950/60 px-1 py-0.5 rounded font-mono font-bold">Navbar.tsx</code>, <code className="text-cyan-700 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-950/60 px-1 py-0.5 rounded font-mono font-bold">Hero.tsx</code>). Si quieres cambiar algo, tú o tu agente no tienen que revisar 2,000 líneas de código revuelto.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-mono text-xs">
                <CheckCircle2 className="w-4 h-4" /> 2. Unit Tests (Pruebas Unitarias)
              </div>
              <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40 font-semibold">
                Vitest 0.2s
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Robots automáticos que simulan clics y envíos en milisegundos. Garantizan que si mañana actualizas un texto o foto, el formulario o WhatsApp no dejen de funcionar.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold font-mono text-xs">
                <BookOpen className="w-4 h-4" /> 3. Documentación (README.md)
              </div>
              <span className="text-[10px] font-mono text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/40 font-semibold">
                Guía No-Code
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Un manual con instrucciones exactas sobre cómo cambiar el número de WhatsApp, conectar el correo o desplegar en Vercel sin depender de programadores.
            </p>
          </div>
        </div>

        {/* Right: Live Terminal Unit Tests Runner Simulation */}
        <div className="lg:col-span-7 glass-panel p-4 rounded-2xl flex flex-col justify-between shadow-xl space-y-3">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-slate-900 dark:text-white font-bold font-mono">vitest run --reporter=verbose</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
              {testResults.length} / {INITIAL_TESTS.length} suites pasadas
            </span>
          </div>

          {/* Test Items Stream */}
          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            {testResults.map((t) => (
              <div 
                key={t.id}
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 text-xs shadow-sm transition-all animate-fadeIn"
              >
                <div className="flex items-start gap-2.5">
                  <span className="p-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <div className="text-slate-900 dark:text-white font-semibold flex items-center gap-2">
                      <span>{t.name}</span>
                      <code className="text-[10px] text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40 font-mono font-bold">
                        {t.target}
                      </code>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {t.description}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono font-bold shrink-0 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/30">
                  {t.durationMs}ms
                </span>
              </div>
            ))}

            {isRunning && (
              <div className="text-xs text-amber-700 dark:text-amber-400 flex items-center gap-2 py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 font-mono animate-pulse">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulando interacciones de usuarios en tiempo real...</span>
              </div>
            )}
          </div>

          {/* Terminal Summary Footer */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Tests Pasados con Éxito</span>
            </span>
            <span className="text-[11px]">
              Comando: <code className="text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono font-bold border border-slate-300 dark:border-slate-700">npm run test</code>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span>🛡️ Las webs profesionales se prueban solas; no confíes en la suerte antes de lanzar.</span>
        <span className="hidden sm:inline text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Presiona "Ejecutar Unit Tests en Vivo" para probar el runner</span>
        </span>
      </div>
    </div>
  );
};
