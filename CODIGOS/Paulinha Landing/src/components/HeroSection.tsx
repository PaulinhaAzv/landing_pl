import React from 'react';
import PlanosSection from "./PlanosSection";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center text-center bg-black overflow-hidden">
        {/* Imagem de fundo sensual com blur e opacidade */}
        <img
          src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743376994/PAULA/s6otfqus8lez0uz1acmg.png"
          alt="Paula no espelho"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
        />
        {/* Overlay degradê escuro para sensualidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>
        {/* Conteúdo principal centralizado */}
        <div className="relative z-10 max-w-xl px-4">
          <img
            src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743393385/PAULA_AZEVEDO_500_x_200_px_gd5l0v.png"
            alt="Logo Paulinha"
            className="mx-auto w-48 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Conteúdo íntimo e provocante
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Acesso exclusivo para quem sabe apreciar o desejo com elegância.
          </p>
          <a
            href="#planos"
            className="inline-block px-8 py-3 bg-[#E91E63] text-white rounded-full text-lg font-semibold hover:bg-[#E91E63]/90 transition"
          >
            Ver planos agora
          </a>
        </div>
      </section>
      <PlanosSection />
    </>
  );
};

export default HeroSection; 