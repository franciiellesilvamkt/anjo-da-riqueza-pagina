import React from 'react';
import { HelpCircle, AlertTriangle, Lock, Sparkles } from 'lucide-react';

export const PainIdentification: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 border-y border-amber-500/10 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            A Causa Oculta
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100 mt-4">
            Você já sentiu que, por mais que se esforce, o dinheiro nunca "gruda" na sua vida?
          </h2>
        </div>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-300">
          <div className="bg-slate-950/60 p-6 rounded-2xl border border-amber-500/15 flex items-start gap-4 shadow-lg">
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl shrink-0 text-red-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-slate-100 mb-2">
                O Ciclo do Esforço Infinito e Sem Sobra:
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                Você paga uma conta e já surge outra inesperada. Trabalha, trabalha, e no fim do mês parece que nada sobrou. Vê outras pessoas prosperando e se pergunta com frustração: <em className="text-amber-300 font-serif">"Por que não eu?"</em>
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 text-center">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-amber-200 mb-2">
              Isso não é falta de sorte. E também não é só sobre trabalhar mais.
            </p>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              É sobre o que está <strong className="text-amber-400 underline decoration-amber-500">bloqueado dentro de você</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
