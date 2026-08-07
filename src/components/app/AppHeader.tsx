import React from 'react';
import { Sparkles, Flame, Calendar, Headphones, Bot, Sparkle, Calculator, Zap, ArrowLeft } from 'lucide-react';

interface AppHeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  completedCount: number;
  onReturnLanding: () => void;
  unlockedBoosters: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentTab,
  setCurrentTab,
  completedCount,
  onReturnLanding,
  unlockedBoosters
}) => {
  const tabs = [
    { id: 'player', label: 'Áudios & Afirmações', icon: <Headphones className="w-4 h-4" /> },
    { id: 'tracker', label: 'Jornada 21 Dias', icon: <Calendar className="w-4 h-4" /> },
    { id: 'ai', label: 'IA do Anjo (Reprogramador)', icon: <Bot className="w-4 h-4 text-amber-400" /> },
    { id: 'ritual', label: 'Ritual de Ativação', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'boosters', label: 'Códigos de Reforço', icon: <Zap className="w-4 h-4 text-yellow-400" /> },
    { id: 'calculator', label: 'Calculadora R$ 1.000/sem', icon: <Calculator className="w-4 h-4" /> },
  ];

  const progressPercent = Math.round((completedCount / 21) * 100);

  return (
    <div className="bg-slate-950 border-b border-amber-500/20 text-slate-100">
      
      {/* Top bar with return button & progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-500/10">
        
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnLanding}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/20 text-amber-300 text-xs hover:bg-slate-800 transition-colors"
            id="app-return-landing-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Página do Método</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-serif text-sm font-bold text-amber-200">
              Plataforma do Anjo da Riqueza
            </span>
          </div>
        </div>

        {/* Progress Bar & Streak */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-300 font-bold">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span>{completedCount} Dias Concluídos</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-slate-400">Progresso:</span>
            <div className="w-24 h-2 bg-slate-900 rounded-full overflow-hidden border border-amber-500/20">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-bold text-amber-300">{progressPercent}%</span>
          </div>
        </div>

      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none py-2.5">
        <div className="flex items-center gap-2 min-w-max">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 border border-amber-500/10 hover:border-amber-500/30 hover:text-amber-200'
                }`}
                id={`app-tab-${tab.id}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
