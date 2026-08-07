import React, { useState, useEffect } from 'react';
import { Flame, Wind, Sparkles, Check, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

export const ActivationRitualModal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [candleLit, setCandleLit] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'ready'>('ready');
  const [breathTimer, setBreathTimer] = useState(4);
  const [isBreathActive, setIsBreathActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isBreathActive) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'ready' || breathPhase === 'exhale') {
              setBreathPhase('inhale');
              return 4;
            } else if (breathPhase === 'inhale') {
              setBreathPhase('hold');
              return 7;
            } else if (breathPhase === 'hold') {
              setBreathPhase('exhale');
              return 8;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isBreathActive, breathPhase]);

  const toggleBreath = () => {
    if (!isBreathActive) {
      setBreathPhase('inhale');
      setBreathTimer(4);
      setIsBreathActive(true);
    } else {
      setIsBreathActive(false);
      setBreathPhase('ready');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
          <Flame className="w-6 h-6 animate-pulse" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Bônus Exclusivo
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100">
          Ritual de Ativação do Anjo da Riqueza
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          Um pequeno ritual guiado para "ligar" sua sessão diária de afirmações com intenção máxima e presença corporal.
        </p>

        {/* Step Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[1, 2, 3, 4].map((stepNum) => (
            <button
              key={stepNum}
              onClick={() => setCurrentStep(stepNum)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentStep === stepNum
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
              id={`ritual-step-btn-${stepNum}`}
            >
              Passo {stepNum}
            </button>
          ))}
        </div>
      </div>

      {/* STEP 1: SPACE CLEARING */}
      {currentStep === 1 && (
        <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 text-center animate-fade-in shadow-2xl">
          <span className="text-xs font-bold uppercase text-amber-400">PASSO 01 DE 04</span>
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Limpeza do Espaço & Silêncio Interno
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Sente-se confortavelmente, mantenha a coluna reta e coloque as mãos sobre o peito ou sobre as pernas voltadas para cima.
          </p>

          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl max-w-md mx-auto text-xs text-slate-300 space-y-2">
            <p className="font-semibold text-amber-200 text-sm">Afirmação de Entrada do Espaço:</p>
            <p className="italic">
              "Eu limpo aqui e agora qualquer ansiedade, pressa ou preocupação financeira. Este minuto é dedicado ao meu crescimento."
            </p>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
            id="ritual-next-1"
          >
            Avançar para Passo 2 (Respiração 4-7-8)
          </button>
        </div>
      )}

      {/* STEP 2: BREATHWORK TIMER */}
      {currentStep === 2 && (
        <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 text-center animate-fade-in shadow-2xl">
          <span className="text-xs font-bold uppercase text-amber-400">PASSO 02 DE 04</span>
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Respiração 4-7-8 para Baixar Frequência Cardíaca
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            A técnica de respiração 4-7-8 desacelera a mente analítica e abre a porta do subconsciente para aceitar novas sugestões de riqueza.
          </p>

          {/* Interactive Breathing Sphere */}
          <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-6">
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-300/30 border-2 border-amber-400/50 transition-transform duration-1000 ${
                breathPhase === 'inhale' ? 'scale-125' : breathPhase === 'hold' ? 'scale-125 brightness-125' : 'scale-90'
              }`}
            />
            <div className="relative z-10 text-center">
              <span className="text-3xl font-extrabold font-serif text-amber-300 block">
                {breathTimer}s
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-200 block mt-1">
                {breathPhase === 'ready' && 'Pronto'}
                {breathPhase === 'inhale' && 'Inspirar (4s)'}
                {breathPhase === 'hold' && 'Segurar (7s)'}
                {breathPhase === 'exhale' && 'Exalar (8s)'}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={toggleBreath}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
              id="ritual-breath-toggle-btn"
            >
              {isBreathActive ? 'Pausar Respiração' : 'Iniciar Ciclo de Respiração'}
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="px-5 py-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all"
              id="ritual-next-2"
            >
              Passar para Chama Interna
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CANDLE INTENTION */}
      {currentStep === 3 && (
        <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 text-center animate-fade-in shadow-2xl">
          <span className="text-xs font-bold uppercase text-amber-400">PASSO 03 DE 04</span>
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Acendimento da Chama da Prosperidade
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Toque na vela abaixo para acender simbolicamente a intenção de atrair R$ 1.000 por semana em sua vida.
          </p>

          <div className="my-6">
            <button
              onClick={() => setCandleLit(!candleLit)}
              className="relative p-8 rounded-3xl bg-slate-950 border-2 border-amber-500/40 hover:border-amber-400 transition-all group shadow-xl"
              id="ritual-candle-btn"
            >
              <div className="relative flex flex-col items-center">
                {candleLit ? (
                  <div className="w-8 h-12 bg-amber-400 rounded-full blur-sm animate-pulse shadow-2xl shadow-amber-400 mb-2" />
                ) : (
                  <div className="w-2 h-6 bg-slate-700 rounded-full mb-2" />
                )}
                <div className="w-12 h-20 bg-slate-800 border border-slate-700 rounded-lg" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mt-4">
                {candleLit ? 'Chama da Abundância Acesa ✨' : 'Toque para Acender a Chama'}
              </span>
            </button>
          </div>

          <button
            onClick={() => setCurrentStep(4)}
            className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
            id="ritual-next-3"
          >
            Ir para Pronúncia do Código Final
          </button>
        </div>
      )}

      {/* STEP 4: FINAL INVOCATION */}
      {currentStep === 4 && (
        <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 text-center animate-fade-in shadow-2xl">
          <span className="text-xs font-bold uppercase text-amber-400">PASSO 04 DE 04</span>
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Pronúncia do Código de Ativação do Anjo
          </h3>

          <div className="p-6 bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border-2 border-amber-500/40 rounded-2xl max-w-xl mx-auto space-y-3">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
            <p className="font-serif text-lg sm:text-xl text-amber-100 font-bold italic leading-relaxed">
              "Em nome da abundância do universo, eu abro meus caminhos agora para a prosperidade de R$ 1.000 por semana. O Anjo da Riqueza habita minha mente, minhas decisões e meu destino. Está feito, está selado."
            </p>
          </div>

          <p className="text-xs text-amber-300 font-medium">
            ✨ Ritual Concluído com Sucesso! Agora você está pronto(a) para repetir suas afirmações do dia.
          </p>

          <button
            onClick={() => {
              setCurrentStep(1);
              setCandleLit(false);
            }}
            className="px-6 py-3 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all"
            id="ritual-reset-btn"
          >
            Reiniciar Ritual
          </button>
        </div>
      )}

    </div>
  );
};
