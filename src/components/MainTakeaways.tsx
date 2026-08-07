import React from 'react';
import { MAIN_TAKEAWAYS } from '../data/contentData';
import { Sparkles, Check, ArrowUpRight } from 'lucide-react';

export const MainTakeaways: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Pilares de Aprendizado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Principais Conclusões: Eis o Que Você Levará Consigo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MAIN_TAKEAWAYS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-6 sm:p-8 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    {item.number}
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-400/60" />
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-100 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs text-amber-300 font-medium">
                <span>Aplicação Imediata</span>
                <Check className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
