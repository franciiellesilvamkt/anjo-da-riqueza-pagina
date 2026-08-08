import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainIdentification } from './components/PainIdentification';
import { QuizDiagnostic } from './components/QuizDiagnostic';
import { DecreeGenerator } from './components/DecreeGenerator';
import { MechanismSection } from './components/MechanismSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { WhoIsItFor } from './components/WhoIsItFor';
import { ObjectionBreaker } from './components/ObjectionBreaker';
import { MainTakeaways } from './components/MainTakeaways';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const handleOpenCheckout = () => {
    window.location.href = 'https://pay.lowify.com.br/checkout.php?product_id=m3kTCM';
  };

  const handleSuccessPayment = () => {
    // Payment approved simulation
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* NAVBAR */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* SALES LANDING PAGE */}
      <main>
        <HeroSection onOpenCheckout={handleOpenCheckout} />
        
        <PainIdentification />

        {/* INTERACTIVE QUIZ & DIAGNOSTIC SECTION */}
        <QuizDiagnostic onOpenCheckout={handleOpenCheckout} />

        {/* GERADOR DE DECRETO PERSONALIZADO */}
        <DecreeGenerator onOpenCheckout={handleOpenCheckout} />

        <MechanismSection />
        
        <WhatYouGetSection onOpenCheckout={handleOpenCheckout} />
        
        <WhoIsItFor onOpenCheckout={handleOpenCheckout} />
        
        <ObjectionBreaker />
        
        <MainTakeaways />
        
        <OfferSection onOpenCheckout={handleOpenCheckout} />
        
        <GuaranteeSection />
        
        <FAQSection />
      </main>

      {/* FOOTER */}
      <Footer onOpenCheckout={handleOpenCheckout} />

      {/* CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccessPayment={handleSuccessPayment}
      />

    </div>
  );
}
