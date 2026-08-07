import React from 'react';
import { ShieldAlert, Compass, Lightbulb, Sparkles } from 'lucide-react';

export const ObjectionBreaker: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 border-y border-amber-500/20 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center gap-3 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <Compass className="w-5 h-5 text-amber-400 animate-spin" />
            <span>A Verdade Sobre a Manifestação</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 mb-4">
            Isso NÃO é mágica e NÃO é sobre esperar o dinheiro cair do céu.
          </h3>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6">
            É sobre mudar o <strong className="text-amber-300 font-semibold underline decoration-amber-500">diálogo interno profundo</strong> que te trava. A partir do momento em que seu subconsciente para de sabotar suas finanças, você começa a agir, tomar decisões e enxergar oportunidades de um jeito totalmente novo e próspero.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-4 border-t border-amber-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Sem teorias complicadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Prática rápida de 5 min/dia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Mudança real nas suas atitudes</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
