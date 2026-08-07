import React, { useState } from 'react';
import { X, Lock, QrCode, CreditCard, CheckCircle, Copy, Sparkles, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessPayment: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSuccessPayment
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'form' | 'pix_generated' | 'success'>('form');
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const total = 17.0;

  const handleGenerateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail.');
      return;
    }

    if (paymentMethod === 'pix') {
      setStep('pix_generated');
    } else {
      setStep('success');
      setTimeout(() => {
        onSuccessPayment();
      }, 1500);
    }
  };

  const handleConfirmPixPayment = () => {
    setStep('success');
    setTimeout(() => {
      onSuccessPayment();
    }, 1200);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014BR.GOV.BCB.PIX0136anjo-da-riqueza-ativacao-1700-pix-520400005303986540517.005802BR5925ANJO DA RIQUEZA METODO6009SAO PAULO620705031236304C1C2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-colors"
          id="checkout-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Checkout Seguro 128-bit SSL</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Ativar Código da Riqueza
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Preencha seus dados para receber o acesso instantâneo ao método.
          </p>
        </div>

        {step === 'form' && (
          <form onSubmit={handleGenerateOrder} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/30 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                id="checkout-name-input"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                E-mail (onde receberá o acesso) *
              </label>
              <input
                type="email"
                required
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/30 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                id="checkout-email-input"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp / Celular
              </label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/30 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                id="checkout-phone-input"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-medium text-slate-300">
                Forma de Pagamento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                  id="pay-method-pix"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Pix (Acesso Imediato)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                  id="pay-method-card"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/20 space-y-2 text-xs">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-slate-100"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-slate-100"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-slate-100"
                  />
                </div>
              </div>
            )}

            {/* Total summary */}
            <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-sm font-bold">
              <span className="text-slate-300">Total a Pagar:</span>
              <span className="text-amber-300 text-xl font-serif">
                R$ 17,00
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              id="checkout-submit-btn"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Concluir Pedido - R$ 17,00</span>
            </button>
          </form>
        )}

        {/* PIX CODE STEP */}
        {step === 'pix_generated' && (
          <div className="text-center space-y-4">
            <div className="p-4 bg-slate-950 border border-amber-500/30 rounded-2xl flex flex-col items-center">
              <div className="w-36 h-36 bg-white p-2 rounded-xl mb-3 flex items-center justify-center">
                <QrCode className="w-32 h-32 text-slate-900" />
              </div>

              <p className="text-xs text-amber-300 font-medium mb-1">
                Aprovação automática em segundos via Pix!
              </p>

              <button
                onClick={copyPixCode}
                className="w-full py-2.5 px-4 bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 rounded-xl text-amber-200 text-xs font-bold flex items-center justify-center gap-2 transition-all mb-2"
                id="copy-pix-btn"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedPix ? 'Código Pix Copiado!' : 'Copiar Código Pix (Copia e Cola)'}</span>
              </button>
            </div>

            <button
              onClick={handleConfirmPixPayment}
              className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              id="confirm-pix-btn"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Confirmar Pagamento Realizado</span>
            </button>
          </div>
        )}

        {/* SUCCESS STEP */}
        {step === 'success' && (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-amber-200">
              Pagamento Aprovado com Sucesso!
            </h4>
            <p className="text-sm text-slate-300">
              Sua compra do <strong>Método das Afirmações do Anjo da Riqueza</strong> foi concluída. Enviamos os dados de acesso diretamente para seu e-mail e WhatsApp.
            </p>
          </div>
        )}

        {/* Security footer */}
        <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Garantia de 7 Dias
          </span>
          <span>Acesso Imediato</span>
        </div>

      </div>
    </div>
  );
};
