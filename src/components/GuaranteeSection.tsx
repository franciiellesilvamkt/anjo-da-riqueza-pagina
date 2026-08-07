import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 border-y border-amber-500/20 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center gap-6 text-left">
          
          <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10">
            <ShieldCheck className="w-10 h-10 text-amber-400" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Risco Zero Para Você
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Acesse a plataforma, ouça os áudios, teste o Guia de 21 dias e utilize o assistente de afirmações. Se você sentir que o método não é para você, basta solicitar dentro do prazo de 7 dias que devolveremos <strong className="text-amber-300">100% do seu dinheiro</strong>. Sem letras miúdas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
