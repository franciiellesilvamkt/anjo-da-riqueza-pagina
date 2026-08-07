import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Shield, AlertCircle, RefreshCw, Zap, Lock } from 'lucide-react';

interface QuizDiagnosticProps {
  onOpenCheckout: () => void;
}

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    blockType: string;
    description: string;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: '1. Quando você pensa nas suas finanças e na chegada do fim do mês, qual é o sentimento predominante?',
    options: [
      {
        label: 'Aperto no peito, ansiedade e receio constante de o dinheiro faltar.',
        blockType: 'Trava do Medo da Escassez',
        description: 'Seu subconsciente opera em modo de sobrevivência, gerando tensão física toda vez que pensa em dinheiro.'
      },
      {
        label: 'Sensação de que trabalho duro, mas o dinheiro parece "sumir" com imprevistos.',
        blockType: 'Vazamento Vibracional',
        description: 'Você atrai o dinheiro, mas seu cérebro cria mecanismos invisíveis para repeli-lo rapidamente.'
      },
      {
        label: 'Culpa ou desconforto ao gastar dinheiro com você ou com lazer da família.',
        blockType: 'Crença de Não Merecimento',
        description: 'Existe um programa oculto de que enriquecer é "ganância" ou que você não merece conforto.'
      },
      {
        label: 'Frustração por estar estagnado(a) no mesmo patamar há meses ou anos.',
        blockType: 'Teto Subconsciente de Renda',
        description: 'Sua mente estabeleceu um limite invisível e bloqueia qualquer ganho acima desse patamar.'
      }
    ]
  },
  {
    id: 2,
    question: '2. Qual frase sobre dinheiro era mais repetida na sua infância ou ambiente familiar?',
    options: [
      {
        label: '"Dinheiro é difícil, não dá em árvore e exige sacrifício extremo."',
        blockType: 'Padrão da Luta Extrema',
        description: 'Instalou a crença de que ganhar dinheiro precisa ser doloroso e exaustivo.'
      },
      {
        label: '"Dinheiro muda as pessoas para pior / Ricos são gananciosos."',
        blockType: 'Conflito Moral Oculto',
        description: 'Seu subconsciente evita o sucesso para não se sentir uma "pessoa má".'
      },
      {
        label: '"A gente guarda cada centavo porque o futuro é incerto e perigoso."',
        blockType: 'Apego pela Escassez',
        description: 'Foco na falta em vez da abundância, criando uma energia de retração.'
      },
      {
        label: '"Dinheiro entra por um lado e sai pelo outro."',
        blockType: 'Padrão da Rotatividade Negativa',
        description: 'Cria uma ilusão de que a estabilidade financeira é impossível para você.'
      }
    ]
  },
  {
    id: 3,
    question: '3. Qual é o seu objetivo financeiro mais urgente para os próximos 21 dias?',
    options: [
      {
        label: 'Criar uma nova fonte de renda ou entradas imprevisíveis de R$ 1.000 por semana.',
        blockType: 'Sintonia de Abundância',
        description: 'Pronto(a) para instalar o padrão dos R$ 1.000/semana na mente diária.'
      },
      {
        label: 'Eliminar o medo e a ansiedade ao abrir o aplicativo do banco ou pagar boletos.',
        blockType: 'Pacificação Emocional',
        description: 'Necessidade urgente de reescrever a associação neurológica com pagamentos.'
      },
      {
        label: 'Quitar dívidas acumuladas e ter paz para dormir todas as noites.',
        blockType: 'Desbloqueio de Linha de Crédito',
        description: 'Rompimento da corrente de cobranças e juros.'
      },
      {
        label: 'Poder proporcionar mais conforto, viagens e alegrias para minha família.',
        blockType: 'Expansão de Qualidade de Vida',
        description: 'Reivindicação do direito natural de viver com abundância.'
      }
    ]
  }
];

export const QuizDiagnostic: React.FC<QuizDiagnosticProps> = ({ onOpenCheckout }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionIdx: number) => {
    const updated = [...answers, optionIdx];
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setIsCompleted(true);
      }, 1800);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCalculating(false);
    setIsCompleted(false);
  };

  const selectedPrimaryBlock = answers.length > 0
    ? QUIZ_QUESTIONS[0].options[answers[0]]
    : QUIZ_QUESTIONS[0].options[0];

  const selectedFamilyBlock = answers.length > 1
    ? QUIZ_QUESTIONS[1].options[answers[1]]
    : QUIZ_QUESTIONS[1].options[0];

  return (
    <section className="py-20 bg-slate-950 border-y border-amber-500/20 text-slate-100 relative overflow-hidden" id="diagnostico">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ferramenta Interativa de Diagnóstico Subconsciente</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Descubra Qual Trava Impede Seus R$ 1.000/Semana
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Responda a 3 perguntas rápidas para receber uma análise instantânea do seu padrão financeiro atual.
          </p>
        </div>

        {/* QUIZ CONTAINER */}
        <div className="bg-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative min-h-[380px] flex flex-col justify-center">
          
          {/* STEP 1, 2, 3: QUESTIONS */}
          {!isCalculating && !isCompleted && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-amber-500/15 pb-4">
                <span className="text-amber-400">Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <div className="flex gap-1.5">
                  {QUIZ_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? 'w-8 bg-amber-400'
                          : idx < currentStep
                          ? 'w-3 bg-amber-500/60'
                          : 'w-3 bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Title */}
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-amber-100 leading-snug">
                {QUIZ_QUESTIONS[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, optionIdx) => (
                  <button
                    key={optionIdx}
                    onClick={() => handleSelectOption(optionIdx)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-slate-950 border border-amber-500/20 hover:border-amber-400 hover:bg-slate-900/90 text-slate-200 text-xs sm:text-sm transition-all flex items-start gap-3 group shadow-md"
                    id={`quiz-option-${currentStep}-${optionIdx}`}
                  >
                    <div className="w-5 h-5 rounded-full border border-amber-500/40 group-hover:border-amber-400 group-hover:bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-medium group-hover:text-amber-200 transition-colors">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* CALCULATING STATE */}
          {isCalculating && (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="relative w-16 h-16 mx-auto">
                <RefreshCw className="w-16 h-16 text-amber-400 animate-spin" />
                <Sparkles className="w-6 h-6 text-yellow-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-amber-200">
                Processando Seu Padrão Subconsciente...
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Analisando causas raízes de bloqueio e calculando o índice de reprogramação necessária para manifestar R$ 1.000 por semana.
              </p>
            </div>
          )}

          {/* COMPLETED RESULT / DIAGNOSTIC */}
          {isCompleted && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Header result banner */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      Resultado do Diagnóstico Personalizado
                    </span>
                    <h4 className="font-serif text-lg font-bold text-slate-100">
                      Nível de Trava de Escassez: <span className="text-amber-300">88% (Elevado)</span>
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-amber-300 underline font-medium"
                  id="quiz-refazer-btn"
                >
                  Refazer Teste
                </button>
              </div>

              {/* Detailed Findings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/20 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-amber-400 tracking-wider block">
                    1. Bloqueio Emocional Principal:
                  </span>
                  <h5 className="font-serif text-base font-bold text-slate-100">
                    {selectedPrimaryBlock.blockType}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedPrimaryBlock.description}
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/20 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-amber-400 tracking-wider block">
                    2. Herança Vibracional Familiar:
                  </span>
                  <h5 className="font-serif text-base font-bold text-slate-100">
                    {selectedFamilyBlock.blockType}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedFamilyBlock.description}
                  </p>
                </div>

              </div>

              {/* Angel's Solution Box */}
              <div className="bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border border-amber-500/40 p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>A Solução Direta Para o Seu Diagnóstico:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Para romper este padrão exato, sua mente precisa de <strong>21 dias contínuos de afirmações diárias auditivas e escritas</strong>. Isso substitui os caminhos neurais de ansiedade por novas associações de abundância de <strong>R$ 1.000 por semana</strong>.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group"
                  id="quiz-cta-btn"
                >
                  <Lock className="w-5 h-5 text-slate-950" />
                  <span>[ATIVAR REPROGRAMAÇÃO RECOMENDADA POR R$ 17,00]</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] text-slate-400 text-center block mt-2">
                  ✓ Acesso Imediato • Garantia de 7 Dias • Satisfação 100%
                </span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
