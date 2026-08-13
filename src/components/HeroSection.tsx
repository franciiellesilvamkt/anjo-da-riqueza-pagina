import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ShieldCheck, Play, Pause, Volume2, CheckCircle2, ArrowRight, Zap, VolumeX } from 'lucide-react';
import heroImage from '../assets/images/male_wealth_angel_hero_1786578860585.jpg';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (isPlayingAudio) {
      startSoundAndSpeech();
    } else {
      stopSoundAndSpeech();
    }

    return () => {
      stopSoundAndSpeech();
    };
  }, [isPlayingAudio]);

  const startSoundAndSpeech = () => {
    try {
      // 1. Play ambient 528Hz Solfeggio Tone via Web Audio API
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, audioCtxRef.current.currentTime); // 528Hz Solfeggio Miracle Frequency
      gain.gain.setValueAtTime(0.06, audioCtxRef.current.currentTime); // Soft volume

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscRef.current = osc;
      gainRef.current = gain;

      // 2. Play Speech Synthesis Affirmation Sample
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const affirmationText = "Eu sou um ímã constante para oportunidades de mil reais por semana. A prosperidade e a paz fluem na minha vida a cada novo dia.";
        const utterance = new SpeechSynthesisUtterance(affirmationText);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.88;

        utterance.onend = () => {
          setIsPlayingAudio(false);
        };

        window.speechSynthesis.speak(utterance);
      }
    } catch (err) {
      console.log('Audio error:', err);
    }
  };

  const stopSoundAndSpeech = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch (e) {}
      oscRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const toggleSampleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-slate-950 text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Urgency / Trust Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-inner shadow-amber-500/10 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Código 3-21 • Ativação em 21 Dias</span>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              R$ 17,00
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            Reconfigure sua mente para manifestar de{' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy">
              1000 reais por semana
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            O <strong className="text-amber-300 font-semibold">Código 3-21 do Anjo da Riqueza</strong> ataca a crença de escassez em 3 janelas do dia por 21 dias seguidos, sem precisar de disciplina nem de força de vontade. A virada de mentalidade já começa a se sentir na primeira semana para você destravar de <span className="underline decoration-amber-400 font-bold text-amber-200">R$ 1.000 por semana</span>.
          </p>
        </div>

        {/* Hero Visual Box + Interactive Audio Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10 mb-12">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10 group">
              <img
                src={heroImage}
                alt="Anjo da Riqueza e Ativação de Abundância"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                    Amostra de Áudio de Ativação
                  </p>
                  <p className="text-sm font-bold text-slate-100">
                    Frequência 528Hz + Voz do Anjo
                  </p>
                </div>
                <button
                  onClick={toggleSampleAudio}
                  className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-md shadow-amber-500/20"
                  id="hero-sample-audio-btn"
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-4 h-4 fill-slate-950" />
                      <span>Pausar Áudio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-slate-950" />
                      <span>Escutar Áudio</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Audio Wave Simulator */}
            {isPlayingAudio && (
              <div className="mt-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center text-xs text-amber-200 animate-fade-in flex items-center justify-center gap-3">
                <div className="flex gap-1 items-end h-4">
                  <span className="w-1 bg-amber-400 h-2 animate-pulse" />
                  <span className="w-1 bg-amber-400 h-4 animate-pulse delay-75" />
                  <span className="w-1 bg-amber-400 h-3 animate-pulse delay-150" />
                  <span className="w-1 bg-amber-400 h-1 animate-pulse delay-100" />
                </div>
                <span>
                  🔊 Tocando: "Eu sou um ímã constante para oportunidades de R$ 1.000 por semana..."
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Key Benefits & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div className="bg-slate-900/80 border border-amber-500/20 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
              <h3 className="font-serif text-xl font-bold text-amber-200 border-b border-amber-500/20 pb-2">
                O que você sentirá em 21 dias:
              </h3>

              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fim da ansiedade financeira:</strong> Durma em paz sabendo que o dinheiro flui.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Foco no valor de R$ 1.000/sem:</strong> Padrão mental ajustado para novas entradas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Destrava da sabotagem:</strong> Elimine a culpa de enriquecer e o medo de faltar.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Código 3-21 sem Esforço:</strong> 3 janelas do dia por 21 dias sem precisar de força de vontade.
                  </span>
                </li>
              </ul>

              {/* Price Banner */}
              <div className="pt-2 border-t border-amber-500/20 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-2">De R$ 47,00</span>
                  <span className="text-2xl font-extrabold text-amber-300">Por R$ 17,00</span>
                </div>
                <span className="text-[11px] text-amber-400/80 bg-amber-400/10 px-2 py-1 rounded">
                  Acesso Imediato
                </span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 group"
                id="hero-main-cta-btn"
              >
                <Zap className="w-5 h-5 fill-slate-950" />
                <span>[QUERO ATIVAR O CÓDIGO 3-21 - R$ 17,00]</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> 7 Dias de Garantia
                </span>
                <span>•</span>
                <span>Pagamento Seguro por Pix ou Cartão</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
