import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Shield, Plane, PiggyBank, Heart } from 'lucide-react';

export const FinancialImpactCalculator: React.FC = () => {
  const [weeklyTarget, setWeeklyTarget] = useState(1000);

  const monthlyTarget = weeklyTarget * 4;
  const annualTarget = weeklyTarget * 52;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
          <Calculator className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Ferramenta de Projeção Próspera
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100">
          Simulador de Impacto do Anjo da Riqueza
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          Ajuste o valor que você deseja manifestar por semana e veja como sua vida financeira se transforma em 12 meses.
        </p>
      </div>

      {/* Interactive Slider Box */}
      <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-bold text-slate-300">
              Meta de Manifestação Semanal:
            </span>
            <span className="font-serif text-2xl font-extrabold text-amber-300">
              R$ {weeklyTarget.toLocaleString('pt-BR')},00 / semana
            </span>
          </div>

          <input
            type="range"
            min={500}
            max={5000}
            step={250}
            value={weeklyTarget}
            onChange={(e) => setWeeklyTarget(Number(e.target.value))}
            className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500 border border-amber-500/30"
            id="calculator-slider"
          />

          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>R$ 500/sem</span>
            <span className="text-amber-400 font-bold">R$ 1.000/sem (Padrão)</span>
            <span>R$ 5.000/sem</span>
          </div>
        </div>

        {/* Big Numbers Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/30 text-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              Impacto Mensal Adicional
            </span>
            <span className="font-serif text-3xl font-extrabold text-amber-300">
              R$ {monthlyTarget.toLocaleString('pt-BR')},00
            </span>
            <span className="text-[11px] text-slate-400 block mt-1">
              (4 semanas de abundância)
            </span>
          </div>

          <div className="bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 p-5 rounded-2xl border border-amber-500/40 text-center">
            <span className="text-xs text-amber-300 uppercase tracking-wider font-bold block mb-1">
              Impacto Anual em Seu Patrimônio
            </span>
            <span className="font-serif text-3xl font-extrabold text-amber-200">
              R$ {annualTarget.toLocaleString('pt-BR')},00
            </span>
            <span className="text-[11px] text-amber-400/80 block mt-1">
              (52 semanas reconfiguradas)
            </span>
          </div>
        </div>

        {/* Unlocked Milestones Grid */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <span className="text-xs uppercase font-bold text-slate-300 block">
            O Que Esse Valor Proporciona Na Prática:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-100 block mb-0.5">
                  Quitação Definitiva de Dívidas
                </span>
                <span className="text-slate-300">
                  Com R$ {monthlyTarget.toLocaleString('pt-BR')}/mês livre, os cartões, empréstimos e boletos em atraso são encerrados em poucos meses.
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <PiggyBank className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-100 block mb-0.5">
                  Reserva de Segurança da Família
                </span>
                <span className="text-slate-300">
                  Em 6 meses você acumula R$ {(monthlyTarget * 6).toLocaleString('pt-BR')} em caixa para imprevistos e tranquilidade.
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Plane className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-100 block mb-0.5">
                  Viagens & Conforto Merecido
                </span>
                <span className="text-slate-300">
                  Possibilidade de passeios, restaurantes e momentos inesquecíveis sem calcular cada centavo com dor no peito.
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-100 block mb-0.5">
                  Paz de Espírito & Leveza
                </span>
                <span className="text-slate-300">
                  Acordar todos os dias sem o aperto na garganta do medo de faltar. A mente vive na abundância natural.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
