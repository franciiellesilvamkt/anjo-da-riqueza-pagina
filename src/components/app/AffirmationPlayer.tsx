import React, { useState, useEffect, useRef } from 'react';
import { AFFIRMATIONS_DATA } from '../../data/contentData';
import { Affirmation, TimePeriod } from '../../types';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sun, Sunset, Moon, Sparkles, Copy, Check, Repeat } from 'lucide-react';
import squareImg from '../../assets/images/anjo_da_riqueza_square_1786115784270.jpg';

export const AffirmationPlayer: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod | 'all'>('all');
  const [activeAffirmation, setActiveAffirmation] = useState<Affirmation>(AFFIRMATIONS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ambientSound, setAmbientSound] = useState(true);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Web Audio Context reference for 528Hz / Solfeggio sound generator
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<any>(null);

  const filtered = selectedPeriod === 'all'
    ? AFFIRMATIONS_DATA
    : AFFIRMATIONS_DATA.filter((a) => a.period === selectedPeriod);

  // Sound generator toggle
  useEffect(() => {
    if (isPlaying) {
      startAmbientSound();
      startProgressTimer();
      speakText(activeAffirmation.text);
    } else {
      stopAmbientSound();
      stopProgressTimer();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    }

    return () => {
      stopAmbientSound();
      stopProgressTimer();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [isPlaying, activeAffirmation]);

  const startAmbientSound = () => {
    if (!ambientSound) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Frequency map based on audio
      let freq = 528; // default Solfeggio miracle tone
      if (activeAffirmation.period === 'day') freq = 432;
      if (activeAffirmation.period === 'night') freq = 639;

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtxRef.current.currentTime); // Gentle ambient background

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch (err) {
      console.log('Web Audio setup:', err);
    }
  };

  const stopAmbientSound = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (e) {}
      oscillatorRef.current = null;
    }
  };

  const startProgressTimer = () => {
    stopProgressTimer();
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 300);
  };

  const stopProgressTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = speechRate;

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectAffirmation = (aff: Affirmation) => {
    setActiveAffirmation(aff);
    setProgress(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const copyAffirmation = (aff: Affirmation) => {
    navigator.clipboard.writeText(aff.text);
    setCopiedId(aff.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-amber-500/20 rounded-2xl p-4">
        <div>
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Player de Afirmações & Frequências
          </h2>
          <p className="text-xs text-slate-400">
            Selecione o momento do dia e ouça a reprogramação guiada em áudio.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setSelectedPeriod('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedPeriod === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
            id="filter-all"
          >
            Todas
          </button>
          <button
            onClick={() => setSelectedPeriod('morning')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
              selectedPeriod === 'morning'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
            id="filter-morning"
          >
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Manhã (528Hz)</span>
          </button>
          <button
            onClick={() => setSelectedPeriod('day')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
              selectedPeriod === 'day'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
            id="filter-day"
          >
            <Sunset className="w-3.5 h-3.5 text-yellow-400" />
            <span>Dia (432Hz)</span>
          </button>
          <button
            onClick={() => setSelectedPeriod('night')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
              selectedPeriod === 'night'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 text-slate-300 border border-slate-800'
            }`}
            id="filter-night"
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Noite (639Hz)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Audio Player Card */}
        <div className="lg:col-span-7 bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex items-center gap-4">
            <img
              src={squareImg}
              alt="Anjo da Riqueza Emblem"
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border border-amber-500/40 shadow-lg shrink-0"
            />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                {activeAffirmation.period === 'morning' && 'Manhã • 528Hz'}
                {activeAffirmation.period === 'day' && 'Durante o Dia • 432Hz'}
                {activeAffirmation.period === 'night' && 'Antes de Dormir • 639Hz'}
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-100 mt-1">
                {activeAffirmation.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Foco: {activeAffirmation.focus}
              </p>
            </div>
          </div>

          {/* Lyrics / Affirmation Text Container */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/20 relative space-y-3">
            <p className="font-serif text-lg sm:text-xl text-amber-100 leading-relaxed italic text-center">
              "{activeAffirmation.text}"
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
              <span>{activeAffirmation.freq}</span>
              <button
                onClick={() => copyAffirmation(activeAffirmation)}
                className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
                id="copy-player-text-btn"
              >
                {copiedId === activeAffirmation.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Afirmação</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress Slider Bar */}
          <div className="space-y-1">
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-amber-500/20">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>0:00</span>
              <span>{activeAffirmation.audioDuration}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pt-2">
            
            <button
              onClick={() => setAmbientSound(!ambientSound)}
              className={`p-2.5 rounded-xl border text-xs flex items-center gap-1.5 transition-colors ${
                ambientSound
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}
              id="ambient-sound-toggle-btn"
            >
              {ambientSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">Som de Fundo (Frequência)</span>
            </button>

            {/* Main Play Button */}
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all"
              id="player-play-pause-btn"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-slate-950" />
              ) : (
                <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
              )}
            </button>

            <button
              onClick={() => {
                setProgress(0);
                setIsPlaying(true);
              }}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-300 transition-colors"
              id="player-restart-btn"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* Affirmations Playlist List */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="font-serif text-lg font-bold text-slate-100 flex items-center justify-between">
            <span>Coletânea em Áudio</span>
            <span className="text-xs text-amber-400 font-sans">{filtered.length} Faixas</span>
          </h3>

          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {filtered.map((aff) => {
              const isSelected = activeAffirmation.id === aff.id;
              return (
                <div
                  key={aff.id}
                  onClick={() => handleSelectAffirmation(aff)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-md'
                      : 'bg-slate-900 border-slate-800 hover:border-amber-500/30'
                  }`}
                  id={`playlist-item-${aff.id}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase text-amber-400">
                      {aff.period === 'morning' && 'Manhã'}
                      {aff.period === 'day' && 'Durante o Dia'}
                      {aff.period === 'night' && 'Noite'}
                    </span>
                    <span className="text-[10px] text-slate-400">{aff.audioDuration}</span>
                  </div>

                  <h4 className="font-serif text-sm font-bold text-slate-100">
                    {aff.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    "{aff.text}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
