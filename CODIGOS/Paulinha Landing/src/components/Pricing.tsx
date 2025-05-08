import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="acesso" className="py-20 bg-white/5 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Qual Paulinha você quer hoje?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        <a 
          href="https://openpix.com.br/pay/dca7fd01-bd6e-4a2d-bb7c-16f3ad07e8b2" 
          className="bg-[#E91E63] hover:bg-[#E91E63]/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(233,30,99,0.3)] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
        >
          Plano Básico — R$29,90
        </a>
        <a 
          href="https://openpix.com.br/pay/19b39aee-9a21-4568-bc59-2432a0b1912e" 
          className="bg-white/10 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(233,30,99,0.3)] text-white px-8 py-4 rounded-xl border border-[#E91E63] shadow-lg transition-all duration-300"
        >
          Plano VIP — R$59,90
        </a>
      </div>
      <p className="text-sm text-white/40 mt-6">
        Após o pagamento, seu conteúdo será liberado direto no Telegram.
      </p>
      <p className="text-lg text-white/70 italic mt-12 max-w-2xl mx-auto px-4">
        "Não sou só provocação… sou o que você sente quando fecha os olhos."
      </p>
    </section>
  );
};

export default Pricing;