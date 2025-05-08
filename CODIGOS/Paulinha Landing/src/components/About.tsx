import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2 relative">
          <img 
            src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743376990/PAULA/ucp0ckwei35porpa00a9.png" 
            alt="Rosto Paulinha" 
            className="rounded-2xl shadow-2xl border border-[#E91E63]/30" 
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#E91E63] mb-4">Quem é Paulinha?</h2>
          <p className="text-white/80 mb-4">
            Sedutora, tímida e oferecida. Paulinha provoca com classe, entrega com desejo e guarda segredos pra quem ousa tocar.
          </p>
          <p className="text-white/60 italic">
            "Se você chegou até aqui... talvez seja o momento de eu te mostrar mais."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;