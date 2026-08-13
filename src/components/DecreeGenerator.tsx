import React, { useState, useRef } from 'react';
import { Sparkles, Scroll, Volume2, Pause, Copy, Check, Lock, ArrowRight, Zap, RefreshCw, Star, HeartHandshake } from 'lucide-react';

interface DecreeGeneratorProps {
  onOpenCheckout: () => void;
}

interface DecreeResult {
  title: string;
  decreeText: string;
  keyAffirmation: string;
  angelBlessing: string;
}

const PRESET_GOALS = [
  'R$ 1.000 por semana',
  'R$ 5.000 por mês',
  'Quitar dívidas e ter paz',
  'Novas oportunidades de renda',
  'Prosperidade e conforto familiar'
];

const PRESET_FOCUS = [
  'Destravar Medo e Escassez',
  'Atrair Clientes e Oportunidades',
  'Paz Emocional ao Pagar Boletos',
  'Aumentar Minha Autoestima Financeira'
];

export const DecreeGenerator: React.FC<DecreeGeneratorProps> = ({ onOpenCheckout }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('R$ 1.000 por semana');
  const [focusArea, setFocusArea] = useState('Destravar Medo e Escassez');
  const [isCustomGoal, setIsCustomGoal] = useState(false);
  const [customGoal, setCustomGoal] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [decree, setDecree] = useState<DecreeResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Audio Controls
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const handleGenerateDecree = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor, digite seu nome.');
      return;
    }

    stopAudio();
    setIsLoading(true);
    setDecree(null);

    const finalGoal = isCustomGoal ? customGoal : goal;

    try {
      const response = await fetch('/api/gemini/generate-decree', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          goal: finalGoal,
          focusArea
        })
      });

      const resData = await response.json();

      if (resData.success && resData.data) {
        setDecree(resData.data);
      } else {
        throw new Error(resData.error || 'Erro na resposta');
      }
    } catch (err) {
      console.warn('Fallback decree local generation used:', err);
      // Fallback robust local decree if server is offline
      const formattedGoal = finalGoal || 'R$ 1.000 por semana';
      setDecree({
        title: `Decreto Sagrado de Prosperidade para ${name.trim()}`,
        decreeText: `Eu, ${name.trim()}, sob a presença de sabedoria e luz do Anjo da Riqueza, declaro e decreto neste instante o encerramento de qualquer ciclo de limitação, medo e escassez financeira.\n\nA partir deste momento, abro totalmente a minha mente subconsciente para receber, gerir e multiplicar a quantia de ${formattedGoal}. O universo é abundante e traz até mim caminhos práticos, ideias inspiradas e oportunidades reais de prosperidade.\n\nSinto no meu peito a paz absoluta, a confiança renovada e a gratidão profunda. O dinheiro é abençoado na minha vida e traz alegria e tranquilidade para mim e para quem eu amo. Está decretado, selado e ativado!`,
        keyAffirmation: `EU, ${name.trim().toUpperCase()}, SOU UM MÃ VIVO E CONSTANTE PARA A PROSPERIDADE DE ${formattedGoal.toUpperCase()}!`,
        angelBlessing: `Que a luz da abundância ilumine cada passo seu, ${name.trim()}. Seu novo ciclo de riqueza começa hoje.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleAudio = () => {
    if (!decree) return;

    if (isPlayingAudio) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    try {
      // 1. Play 528Hz Solfeggio sound
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
      osc.frequency.setValueAtTime(528, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtxRef.current.currentTime);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscRef.current = osc;

      // 2. Speech synthesis
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToSpeak = `${decree?.title}. ${decree?.decreeText.replace(/\n\n/g, ' ')} ${decree?.keyAffirmation}. ${decree?.angelBlessing}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.88;

        utterance.onend = () => {
          stopAudio();
        };

        window.speechSynthesis.speak(utterance);
      }

      setIsPlayingAudio(true);
    } catch (e) {
      console.log('Audio player error:', e);
    }
  };

  const stopAudio = () => {
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
    setIsPlayingAudio(false);
  };

  const handleCopy = () => {
    if (!decree) return;
    const fullText = `${decree.title}\n\n${decree.decreeText}\n\nAfirmação de Poder:\n${decree.keyAffirmation}\n\n${decree.angelBlessing}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 bg-slate-950 border-y border-amber-500/20 text-slate-100 relative overflow-hidden" id="gerador-decreto">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Scroll className="w-4 h-4 text-amber-400" />
            <span>Ferramenta Interativa • Canalização Pessoal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Gerador do Seu Decreto Personalizado
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Informe seu nome e seu maior desejo financeiro para criar um Decreto Sagrado de Abundância único para a sua vida.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative space-y-8">
          
          {/* FORM */}
          <form onSubmit={handleGenerateDecree} className="space-y-6">
            
            {/* Input Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-200 mb-2">
                1. Seu Nome Completo ou Primeiro Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Maria Clara, Roberto Santos..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/30 rounded-xl px-4 py-3 text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                id="decree-name-input"
              />
            </div>

            {/* Input Goal */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-200 mb-2">
                2. Qual Meta Financeira Você Deseja Decretar?
              </label>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {PRESET_GOALS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsCustomGoal(false);
                      setGoal(preset);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      !isCustomGoal && goal === preset
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setIsCustomGoal(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isCustomGoal
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  + Outra meta personalizada
                </button>
              </div>

              {isCustomGoal && (
                <input
                  type="text"
                  placeholder="Escreva sua meta personalizada..."
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  className="w-full bg-slate-950 border border-amber-500/30 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 animate-fade-in"
                  id="decree-custom-goal-input"
                />
              )}
            </div>

            {/* Focus Area */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-200 mb-2">
                3. Área Principal de Foco para Desbloqueio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRESET_FOCUS.map((focus, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFocusArea(focus)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      focusArea === focus
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{focus}</span>
                    {focusArea === focus && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 disabled:opacity-50"
              id="decree-generate-btn"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 text-slate-950 animate-spin" />
                  <span>Canalizando Seu Decreto Sagrado...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 fill-slate-950" />
                  <span>[GERAR MEU DECRETO SAGRADO AGORA]</span>
                </>
              )}
            </button>

          </form>

          {/* DECREE DISPLAY RESULT */}
          {decree && (
            <div className="pt-6 border-t border-amber-500/30 animate-fade-in space-y-6">
              
              {/* Scroll Container */}
              <div className="bg-gradient-to-b from-amber-950/30 via-slate-950 to-amber-950/20 border-2 border-amber-500/50 p-6 sm:p-8 rounded-2xl relative shadow-2xl space-y-5">
                
                {/* Decorative Header Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-500/20 pb-4">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                      <Scroll className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                        Decreto Sagrado Ativado
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100">
                        {decree.title}
                      </h3>
                    </div>
                  </div>

                  {/* Audio Play Button */}
                  <button
                    onClick={handleToggleAudio}
                    className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2 transition-all shrink-0"
                    id="decree-audio-btn"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span>Pausar Leitura em Frequência</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-amber-300" />
                        <span>Escutar em 528Hz</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Main Decree Text */}
                <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif whitespace-pre-line space-y-4 pt-2">
                  {decree.decreeText}
                </div>

                {/* Key Affirmation Banner */}
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Frase Síntese de Poder Subconsciente:
                  </span>
                  <p className="font-extrabold text-amber-300 text-xs sm:text-sm font-sans tracking-wide">
                    "{decree.keyAffirmation}"
                  </p>
                </div>

                {/* Angel Blessing */}
                <div className="flex items-start gap-3 pt-2 text-xs text-slate-300 italic">
                  <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Bênção do Anjo da Riqueza:</strong> "{decree.angelBlessing}"
                  </p>
                </div>

                {/* Action Bar inside Result */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-500/20 text-xs">
                  <button
                    onClick={handleCopy}
                    className="px-3.5 py-2 rounded-lg bg-slate-900 border border-amber-500/30 hover:border-amber-400 text-slate-300 hover:text-amber-300 font-medium flex items-center gap-2 transition-all"
                    id="copy-decree-btn"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Decreto Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Texto do Decreto</span>
                      </>
                    )}
                  </button>

                  <span className="text-slate-400 text-[11px]">
                    ✓ Repita este decreto ao menos 1x por dia ao acordar
                  </span>
                </div>

              </div>

              {/* Conversion Offer Box */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/40 text-center space-y-4">
                <h4 className="font-serif text-lg font-bold text-amber-200">
                  Quer reprogramar sua mente todos os 21 dias com o pacote completo?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  Este decreto é apenas a primeira fagulha. No <strong>Código 3-21 do Anjo da Riqueza</strong>, você recebe a coletânea completa em áudio de 528Hz, guia passo a passo e o ritual de ativação de R$ 1.000/semana.
                </p>

                <button
                  onClick={onOpenCheckout}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group"
                  id="decree-cta-unlock-btn"
                >
                  <Lock className="w-4 h-4 text-slate-950" />
                  <span>[ATIVAR O CÓDIGO 3-21 DOS 21 DIAS - R$ 17,00]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
