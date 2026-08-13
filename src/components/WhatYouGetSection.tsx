import React from 'react';
import { BookOpen, Headphones, Flame, CheckCircle2, Sparkles, Smartphone, Check } from 'lucide-react';
import squareImage from '../assets/images/male_wealth_angel_square_1786578872859.jpg';

interface WhatYouGetProps {
  onOpenCheckout: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetProps> = ({ onOpenCheckout }) => {
  const items = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: 'Coletânea Completa de Afirmações do Código 3-21',
      badge: '3 Janelas Diárias',
      description: 'Afirmações de prosperidade estruturadas para Manhã (Despertar), Durante o Dia (Foco & Ação) e Antes de Dormir (Subconsciente Delta).'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: 'Guia Prático do Código 3-21 de Instalação',
      badge: 'Passo a Passo de 21 Dias',
      description: 'O roteiro dia a dia para criar o hábito inabalável e sentir a virada de mentalidade já na primeira semana, sem precisar de disciplina nem força de vontade.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-400" />,
      title: 'Áudio Guiado em Frequência Solfeggio 528Hz',
      badge: 'Para Ouvir em Qualquer Lugar',
      description: 'Áudios produzidos para você ouvir e repetir junto enquanto caminha, trabalha ou descansa, nos momentos em que ler não for prático.'
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      title: 'BÔNUS EXCLUSIVO: Ritual de Ativação',
      badge: 'Presente Especial',
      description: 'Um pequeno e poderoso ritual de intenção para "ligar" e potencializar sua sessão diária de afirmações com máxima energia de atração.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-amber-500/20 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Conteúdo Completo do Código 3-21
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mt-3">
            O Que Você Recebe Imediatamente
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Tudo o que você precisa para reprogramar sua mente e manifestar de R$ 1.000 por semana.
          </p>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Incluso no Pacote Completo por R$ 17,00</span>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Guarantee Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={squareImage}
              alt="Anjo da Riqueza Método"
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border border-amber-500/40 shadow-lg shrink-0"
            />
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5" />
                Acesso Imediato & Digital
              </span>
              <h4 className="font-serif text-lg font-bold text-slate-100">
                Receba no seu e-mail e WhatsApp em menos de 2 minutos
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Assim que seu pagamento de R$ 17 for confirmado, você receberá o link direto de acesso com áudios, guia dos 21 dias e bônus.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
            id="what-you-get-cta-btn"
          >
            Garantir por R$ 17,00
          </button>
        </div>

      </div>
    </section>
  );
};
