import React, { useState } from 'react';
import { ReprogrammedBelief } from '../../types';
import { Bot, Sparkles, Send, RefreshCw, Zap, Check, Copy, HeartHandshake, KeyRound } from 'lucide-react';

export const AIReprogrammer: React.FC = () => {
  const [inputBelief, setInputBelief] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReprogrammedBelief | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const sampleBeliefs = [
    'Tenho medo constante do dinheiro faltar no fim do mês',
    'Sinto culpa quando gasto dinheiro comigo ou com minha família',
    'Trabalho muito mas parece que o dinheiro vai embora rápido em imprevistos',
    'Acho difícil cobrar o valor justo pelo meu trabalho e talento'
  ];

  const handleReprogram = async (beliefToUse?: string) => {
    const query = beliefToUse || inputBelief;
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/gemini/reprogram-belief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ belief: query })
      });

      const data = await res.json();
      if (data.success && data.data) {
        setResult(data.data);
      } else {
        alert(data.error || 'Não foi possível reprogramar no momento.');
      }
    } catch (e) {
      console.error(e);
      alert('Erro de conexão com o servidor de inteligência.');
    } finally {
      setLoading(false);
    }
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
          <Bot className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Tecnologia de Reprogramação Subconsciente
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100">
          IA do Anjo da Riqueza
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
          Digite qualquer medo, culpa ou trauma financeiro que você sente. A nossa inteligência analisará a causa raiz e gerará 3 afirmações inéditas sob medida para o seu momento.
        </p>
      </div>

      {/* Input Box */}
      <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 space-y-4 shadow-lg">
        
        <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
          Descreva qual crença ou medo financeiro está te travando hoje:
        </label>

        <textarea
          rows={3}
          value={inputBelief}
          onChange={(e) => setInputBelief(e.target.value)}
          placeholder="Ex: 'Sinto ansiedade sempre que penso em contas acumuladas' ou 'Sinto que nunca ganho o suficiente...'"
          className="w-full bg-slate-950 border border-amber-500/30 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
          id="ai-belief-input"
        />

        {/* Quick Sample Chips */}
        <div className="space-y-2">
          <span className="text-[11px] text-slate-400">Exemplos comuns para testar:</span>
          <div className="flex flex-wrap gap-2">
            {sampleBeliefs.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputBelief(sample);
                  handleReprogram(sample);
                }}
                className="text-xs bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-200 px-3 py-1.5 rounded-xl transition-all text-left"
                id={`ai-sample-chip-${idx}`}
              >
                "{sample}"
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => handleReprogram()}
          disabled={loading || !inputBelief.trim()}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          id="ai-reprogram-btn"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin text-slate-950" />
              <span>Canalizando Reprogramação do Anjo...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>[REPROGRAMAR ESTA CRENÇA AGORA]</span>
            </>
          )}
        </button>

      </div>

      {/* Output Display */}
      {result && (
        <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-amber-400" />
              <h3 className="font-serif text-xl font-bold text-amber-200">
                Resultado da Reprogramação
              </h3>
            </div>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              Personalizado pela IA
            </span>
          </div>

          {/* Causa Raiz */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
              1. Análise da Causa Raiz Subconsciente:
            </span>
            <p className="text-sm text-slate-200 bg-slate-950 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {result.rootCause}
            </p>
          </div>

          {/* 3 Custom Affirmations */}
          <div className="space-y-3">
            <span className="text-xs uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              2. Suas 3 Afirmações de Libertação Criadas:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Morning */}
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    🌅 MATINAL
                  </span>
                  <p className="font-serif text-sm italic text-amber-100">
                    "{result.affirmations.morning}"
                  </p>
                </div>
                <button
                  onClick={() => copyText(result.affirmations.morning, 'm')}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-slate-900"
                  id="copy-ai-morning-btn"
                >
                  {copiedKey === 'm' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'm' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              {/* Day */}
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block mb-1">
                    ☀️ DURANTE O DIA
                  </span>
                  <p className="font-serif text-sm italic text-amber-100">
                    "{result.affirmations.day}"
                  </p>
                </div>
                <button
                  onClick={() => copyText(result.affirmations.day, 'd')}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-slate-900"
                  id="copy-ai-day-btn"
                >
                  {copiedKey === 'd' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'd' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              {/* Night */}
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                    🌙 ANTES DE DORMIR
                  </span>
                  <p className="font-serif text-sm italic text-amber-100">
                    "{result.affirmations.night}"
                  </p>
                </div>
                <button
                  onClick={() => copyText(result.affirmations.night, 'n')}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-slate-900"
                  id="copy-ai-night-btn"
                >
                  {copiedKey === 'n' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'n' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Action 24h */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-amber-300 font-bold tracking-wider flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-400" />
              3. Sua Ação Concreta para as Próximas 24 Horas:
            </span>
            <p className="text-sm text-slate-200 bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl leading-relaxed">
              {result.action24h}
            </p>
          </div>

          {/* Angel Message */}
          <div className="p-4 bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border border-amber-500/30 rounded-2xl text-center">
            <HeartHandshake className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="font-serif text-sm text-amber-200 italic">
              "{result.angelMessage}"
            </p>
            <span className="text-[10px] text-amber-400/80 uppercase tracking-widest font-sans mt-2 block">
              — Anjo da Riqueza
            </span>
          </div>

        </div>
      )}

    </div>
  );
};
