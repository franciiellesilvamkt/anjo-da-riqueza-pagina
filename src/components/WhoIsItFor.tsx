import React from 'react';
import { Target, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface WhoIsItForProps {
  onOpenCheckout: () => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ onOpenCheckout }) => {
  const points = [
    'Para quem sente que trabalha muito e o dinheiro nunca sobra no fim do mês',
    'Para quem já tentou "pensar positivo" sozinho(a) e não conseguiu manter o hábito',
    'Para quem quer romper o ciclo de escassez familiar sem depender de sorte',
    'Para quem se identifica com a espiritualidade, física quântica e lei da atração'
  ];

  const profileBoxes = [
    'Sente-se estagnado(a) quando se trata de manifestar riqueza e abundância.',
    'Deseja finalmente se libertar de crenças limitantes que a têm impedido de progredir.',
    'Está pronto(a) para reprogramar sua mente para atrair dinheiro e oportunidades de forma fluida.',
    'Precisa de um plano concreto, passo a passo, para manifestar uma riqueza que mude sua vida, começando agora mesmo.'
  ];

  return (
    <section className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Público Ideal
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mt-3">
            Para Quem É O Código 3-21?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Identifique-se com o perfil certo e saiba se o Código 3-21 do Anjo da Riqueza foi feito para você.
          </p>
        </div>

        {/* 4 Main Bullet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-5 flex items-start gap-3 hover:border-amber-500/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {pt}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner: "É Você?" */}
        <div className="bg-gradient-to-b from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 text-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-200 mb-2">
              É você?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Este treinamento avançado foi desenvolvido para qualquer pessoa que…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileBoxes.map((text, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-5 relative">
                <div className="text-amber-400/30 font-serif text-3xl font-bold absolute top-2 right-4">
                  0{idx + 1}
                </div>
                <p className="text-sm text-slate-200 relative z-10 font-normal leading-relaxed pr-6">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
              id="who-is-it-cta-btn"
            >
              <span>Sim, quero começar minha reprogramação agora por R$ 17</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
