import React from 'react';

const PlanosSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 mt-16" id="planos">
      {/* Plano Básico */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-[#E91E63]/30 group hover:border-[#E91E63]/70 transition rounded-2xl p-6 shadow-lg shadow-[#E91E63]/10 hover:shadow-[#E91E63]/40 hover:scale-105 duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:shadow-[0_0_32px_8px_#E91E63]">
        <h3 className="text-xl font-bold text-white mb-3">Plano Básico</h3>
        <p className="text-[#E91E63] font-medium mb-4">R$29,90</p>
        <ul className="text-white/80 space-y-2 mb-6">
          <li>✓ Acesso a 6 fotos sensuais</li>
          <li>✓ Atualizações semanais</li>
        </ul>
        <a
          href="https://openpix.com.br/pay/dca7fd01-bd6e-4a2d-bb7c-16f3ad07e8b2"
          className="block text-center bg-[#E91E63] text-white py-2 rounded-full font-semibold hover:bg-[#E91E63]/90 transition shadow-md shadow-[#E91E63]/30 hover:shadow-[#E91E63]/60"
        >
          Escolher Plano
        </a>
      </div>

      {/* Plano VIP */}
      <div className="relative bg-black/70 backdrop-blur border-2 border-[#E91E63] rounded-2xl p-6 shadow-lg shadow-[#E91E63]/20 hover:shadow-[#E91E63]/60 hover:scale-105 transition duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:shadow-[0_0_48px_12px_#E91E63]">
        <h3 className="text-xl font-bold text-white mb-3">Plano VIP</h3>
        <p className="text-[#E91E63] font-medium mb-4">R$59,90</p>
        <ul className="text-white/80 space-y-2 mb-6">
          <li>✓ 10 fotos + vídeos exclusivos</li>
          <li>✓ Acesso prioritário</li>
          <li>✓ Recompensas surpresa no Telegram</li>
        </ul>
        <a
          href="https://openpix.com.br/pay/19b39aee-9a21-4568-bc59-2432a0b1912e"
          className="block text-center bg-[#E91E63] text-white py-2 rounded-full font-semibold hover:bg-[#E91E63]/90 transition shadow-md shadow-[#E91E63]/40 hover:shadow-[#E91E63]/80"
        >
          Quero tudo 🔥
        </a>
      </div>
    </div>
  );
};

export default PlanosSection; 