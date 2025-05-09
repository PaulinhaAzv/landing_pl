import React from 'react';

const Telegram: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-[#E91E63] mb-4">Quer conversar direto comigo?</h2>
        <p className="text-lg text-white/80 mb-6">Me chama no Telegram. Às vezes, eu apareço só pra quem merece atenção... 💋</p>
        <a
          href="https://t.me/+qkAQiKkFPUY0MTUx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E91E63] hover:bg-[#E91E63]/90 text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-[#E91E63]/30"
        >
          Ir para o Telegram
        </a>
      </div>
    </section>
  );
};

export default Telegram;