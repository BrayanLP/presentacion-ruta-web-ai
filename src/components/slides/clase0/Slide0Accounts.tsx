import React from 'react';
import { GitBranch, CloudUpload, Mail, Globe2, ExternalLink } from 'lucide-react';

export const Slide0Accounts: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-violet-400 font-semibold tracking-wider uppercase">
          Ecosistema Digital #03
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          👨‍💻 Cuentas Esenciales en la Nube
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          El trío tecnológico que usaremos para alojar, desplegar y conectar tu proyecto de forma 100% gratuita y profesional.
        </p>
      </div>

      {/* Grid of 4 accounts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-auto">
        {/* Account 1: GitHub */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-500 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <GitBranch className="w-6 h-6 text-slate-200" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Repositorio</div>
              <h3 className="text-lg font-bold text-white mt-1">GitHub</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                El hogar seguro de tu código. Guarda versiones históricas y se sincroniza automáticamente con el hosting.
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-brand-400 font-mono hover:underline"
          >
            <span>github.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Account 2: Vercel */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-white/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <CloudUpload className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Hosting & CDN</div>
              <h3 className="text-lg font-bold text-white mt-1">Vercel</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Publica tu web en milisegundos con certificados SSL automáticos, dominio gratuito y velocidad mundial.
              </p>
            </div>
          </div>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-mono hover:underline"
          >
            <span>vercel.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Account 3: Google Account */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">Identidad Central</div>
              <h3 className="text-lg font-bold text-white mt-1">Cuenta Google</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Para el login seguro en Antigravity IDE, Google AI Pro y futuros servicios como Google Search Console y Analytics.
              </p>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-blue-400 font-mono">
            <span>google.com</span>
          </div>
        </div>

        {/* Account 4: Active Email */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Comunicación</div>
              <h3 className="text-lg font-bold text-white mt-1">Correo Activo</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Tener la bandeja accesible en la misma sesión para validar tokens, autorizaciones y recibir consultas de prueba.
              </p>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-mono">
            <span>Bandeja lista</span>
          </div>
        </div>
      </div>

      {/* Tip */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-violet-500">
        <span className="text-xs md:text-sm text-slate-300">
          🔑 <strong>Flujo recomendado:</strong> Regístrate en Vercel utilizando el botón directo "Continue with GitHub". Así quedarán vinculados de inmediato.
        </span>
      </div>
    </div>
  );
};
