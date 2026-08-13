import React from 'react';
import { KeyRound, RefreshCw, Volume2, Sparkles, Zap } from 'lucide-react';

export const MechanismSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <KeyRound className="w-4 h-4 text-amber-400" />
            <span>A Virada & O Mecanismo Secreto</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Como a voz da escassez paralisa sua prosperidade (e como desativá-la)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Box: The Invisible Anchor */}
          <div className="bg-slate-900/90 border border-red-500/20 p-6 sm:p-8 rounded-2xl relative space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-red-200">
              A Âncora da Escassez
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Existe uma crença de escassez plantada na sua mente — muitas vezes desde a infância — que sabota, sem você perceber, toda tentativa de prosperar.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ela te faz gastar no momento errado, recusar ou nem enxergar boas oportunidades, e sentir culpa toda vez que o dinheiro chega.
            </p>
            <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg text-xs text-red-300 italic">
              "Força de vontade sozinha não destrava isso. Você precisa mudar o padrão do subconsciente."
            </div>
          </div>

          {/* Right Box: The Solution - Código 3-21 */}
          <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-amber-900/20 border border-amber-500/40 p-6 sm:p-8 rounded-2xl relative space-y-4 shadow-2xl shadow-amber-500/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              O Código 3-21 do Anjo da Riqueza
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              O <strong>Código 3-21</strong> ataca a crença de escassez em <strong>3 janelas estratégicas do dia</strong> por <strong>21 dias seguidos</strong>, sem precisar de disciplina nem de força de vontade.
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              A virada de mentalidade já começa a se sentir na primeira semana, substituindo a voz da dúvida e do medo pela certeza da prosperidade e foco nos R$ 1.000 por semana.
            </p>
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-300 font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                3 janelas diárias x 21 dias seguidos = Virada de chave mental sem esforço.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
