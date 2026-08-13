import React from 'react';
import { Sparkles, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 text-slate-400 py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-amber-500/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="font-serif text-base font-bold text-amber-200 block">
                Anjo da Riqueza
              </span>
              <span className="text-[10px] text-slate-500">
                Código 3-21 de Reprogramação Financeira em 21 Dias
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-slate-300">
            <button onClick={onOpenCheckout} className="hover:text-amber-300 transition-colors font-medium">
              Garantir Acesso ao Código 3-21 (R$ 17,00)
            </button>
          </div>
        </div>

        <div className="text-center space-y-3 max-w-3xl mx-auto text-slate-500 leading-relaxed text-[11px]">
          <p>
            Este produto não garante a obtenção de resultados sem dedicação pessoal e prática diária. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
          <p>
            © {new Date().getFullYear()} Anjo da Riqueza — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
