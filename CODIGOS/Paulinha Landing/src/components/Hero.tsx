import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743376994/PAULA/s6otfqus8lez0uz1acmg.png" 
        alt="Paula no espelho" 
        className="absolute w-full h-full object-cover object-center opacity-30 blur-sm" 
      />
      <div className="relative z-10 text-center px-4">
        <span className="inline-block bg-[#E91E63] text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Conteúdo +18
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Conteúdo íntimo e provocante</h1>
        <p className="text-white/80 mt-4 text-lg">Acesso exclusivo para quem sabe desejar.</p>
        <a 
          href="#acesso" 
          className="mt-8 inline-block bg-[#E91E63] hover:bg-[#e91e63cc] hover:scale-105 hover:shadow-[0_0_15px_rgba(233,30,99,0.5)] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          Tô curioso...
        </a>
      </div>
    </section>
  );
};

export default Hero;