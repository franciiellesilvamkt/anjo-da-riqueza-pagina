import React, { useState } from 'react';
import { INITIAL_21_DAYS } from '../../data/contentData';
import { DayProgram } from '../../types';
import { CheckCircle2, Lock, Sparkles, Trophy, ArrowRight, Calendar as CalendarIcon, Check } from 'lucide-react';

interface TwentyOneDayTrackerProps {
  completedDays: number[];
  onToggleDay: (dayNumber: number) => void;
}

export const TwentyOneDayTracker: React.FC<TwentyOneDayTrackerProps> = ({
  completedDays,
  onToggleDay
}) => {
  const [selectedDay, setSelectedDay] = useState<DayProgram>(INITIAL_21_DAYS[0]);

  const isCompleted = (day: number) => completedDays.includes(day);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            <span>Guia de 21 Dias de Reprogramação Subconsciente</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            Jornada de Instalação Diária
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Siga 1 dia de cada vez. Repita a afirmação e complete o pequeno exercício diário para fixar o hábito de manifestar R$ 1.000 por semana.
          </p>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/30 text-center shrink-0 min-w-[180px]">
          <span className="text-3xl font-extrabold text-amber-300 font-serif block">
            {completedDays.length} / 21
          </span>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block mt-1">
            Dias Concluídos
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Day Grid Selector */}
        <div className="lg:col-span-6 space-y-3">
          <h3 className="font-serif text-lg font-bold text-slate-100 flex items-center justify-between">
            <span>Calendário dos 21 Dias</span>
            <span className="text-xs text-amber-400 font-sans">Clique para ver o exercício</span>
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-7 gap-2.5">
            {INITIAL_21_DAYS.map((day) => {
              const completed = isCompleted(day.day);
              const isSelected = selectedDay.day === day.day;

              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day)}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/30 scale-105'
                      : completed
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/40'
                  }`}
                  id={`tracker-day-btn-${day.day}`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">
                    DIA
                  </span>
                  <span className="text-xl font-serif font-extrabold leading-none mt-1">
                    {day.day}
                  </span>
                  {completed && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Details Panel */}
        <div className="lg:col-span-6 bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                Dia {selectedDay.day} de 21
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-100 mt-2">
                {selectedDay.title}
              </h3>
            </div>

            <button
              onClick={() => onToggleDay(selectedDay.day)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                isCompleted(selectedDay.day)
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md shadow-amber-500/20'
              }`}
              id="day-toggle-completed-btn"
            >
              <Check className="w-4 h-4" />
              <span>
                {isCompleted(selectedDay.day) ? 'Dia Concluído ✓' : 'Marcar Concluído'}
              </span>
            </button>
          </div>

          {/* Foco do Dia */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
              Foco do Dia:
            </span>
            <p className="text-sm text-slate-200 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              {selectedDay.focus}
            </p>
          </div>

          {/* Afirmação do Dia */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Afirmação do Dia:
            </span>
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-950 to-amber-500/15 border border-amber-500/30">
              <p className="font-serif text-base sm:text-lg text-amber-100 font-semibold italic text-center">
                "{selectedDay.affirmation}"
              </p>
            </div>
          </div>

          {/* Exercício Prático */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
              Exercício Prático de 3 Minutos:
            </span>
            <p className="text-sm text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800 leading-relaxed">
              {selectedDay.exercise}
            </p>
          </div>

          {/* Milestone Badges */}
          {selectedDay.day === 7 && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Marco do 7º Dia:</strong> Você concluiu a 1ª Semana! Celebre a limpeza inicial das travas financeiras.
              </span>
            </div>
          )}

          {selectedDay.day === 21 && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Marco de Formatura:</strong> Mente 100% Reconfigurada! Continue praticando os áudios e afirmações sempre que desejar.
              </span>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
