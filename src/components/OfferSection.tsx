import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, Lock, Clock } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden" id="oferta">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-amber-500/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Oportunidade de Lançamento
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mt-3">
            Ative Seu Acesso Imediato
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Comece ainda hoje a repetir seu primeiro ciclo de afirmações e reprogramar sua mente.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-amber-500/20 relative">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg">
            Oferta Especial por Tempo Limitado
          </div>

          <div className="text-center mt-4 mb-8">
            <span className="text-sm text-slate-400 line-through block mb-1">De R$ 47,00</span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-amber-300">Por apenas</span>
              <span className="text-4xl sm:text-6xl font-extrabold text-amber-300 font-serif">
                R$ 17,00
              </span>
            </div>
            <p className="text-xs text-amber-400/90 mt-2 font-medium">
              Pagamento único • Sem mensalidades • Acesso Vitalício
            </p>
          </div>

          {/* Bullet List */}
          <div className="space-y-3 mb-8 bg-slate-950/60 p-5 rounded-2xl border border-amber-500/20 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Coletânea Completa de Afirmações do Anjo da Riqueza (Manhã, Dia, Noite)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Guia Passo a Passo de 21 Dias de Instalação no Subconsciente</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Áudios Guiados em Frequência Solfeggio 528Hz para ouvir no celular</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>BÔNUS EXCLUSIVO: Ritual de Ativação de Abundância</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-base sm:text-xl uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 group"
            id="offer-cta-btn"
          >
            <Lock className="w-5 h-5 text-slate-950" />
            <span>[QUERO ATIVAR MEU CÓDIGO DA RIQUEZA - R$ 17,00]</span>
          </button>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-400" /> Acesso Imediato por E-mail
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Garantia Incondicional de 7 Dias
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
