import React, { useState } from 'react';
import { BOOSTER_CODES } from '../../data/contentData';
import { Zap, Copy, Check, Sparkles, Lock, ArrowUpRight } from 'lucide-react';

interface BoosterCodesViewProps {
  unlocked: boolean;
  onUnlock: () => void;
}

export const BoosterCodesView: React.FC<BoosterCodesViewProps> = ({ unlocked, onUnlock }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 flex items-center justify-center mx-auto shadow-lg shadow-yellow-500/10">
          <Zap className="w-6 h-6 animate-bounce" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-300 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
          Códigos de Reforço Intensificados
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100">
          Aceleração Vibracional de Emergência
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          Afirmações de alta potência projetadas para momentos estratégicos e aceleração de resultados.
        </p>
      </div>

      {!unlocked && (
        <div className="bg-slate-900 border-2 border-dashed border-amber-500/40 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <Lock className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-amber-200">
            Códigos de Reforço Bloqueados
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Você pode liberar o módulo de Códigos de Reforço com a oferta especial de Order Bump por apenas R$ 9,90.
          </p>
          <button
            onClick={onUnlock}
            className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            id="booster-unlock-btn"
          >
            Ativar Códigos de Reforço (+R$ 9,90)
          </button>
        </div>
      )}

      {/* Booster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOOSTER_CODES.map((booster) => (
          <div
            key={booster.id}
            className={`bg-slate-900 border rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden ${
              unlocked ? 'border-amber-500/30' : 'border-slate-800 opacity-60 filter blur-[1px]'
            }`}
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 block mb-2 w-fit">
                {booster.code}
              </span>
              <p className="text-xs text-slate-400 mb-3">
                {booster.description}
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/20 font-serif text-sm italic text-amber-100">
                "{booster.affirmation}"
              </div>
            </div>

            {unlocked ? (
              <button
                onClick={() => copyCode(booster.affirmation, booster.id)}
                className="w-full py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/20 transition-all"
                id={`copy-booster-btn-${booster.id}`}
              >
                {copiedId === booster.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Código Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Código</span>
                  </>
                )}
              </button>
            ) : (
              <div className="text-center text-xs text-slate-500 font-medium py-1">
                🔒 Bloqueado no plano padrão
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
