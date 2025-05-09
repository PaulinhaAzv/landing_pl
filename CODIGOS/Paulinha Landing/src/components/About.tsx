import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        <motion.div 
          className="md:w-1/2 relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743376995/PAULA/rzu2viooxgvml8ze8r1y.png" 
              alt="Rosto Paulinha" 
              className="w-full h-auto transition-all duration-500 group-hover:blur-sm group-hover:scale-110 border border-[#E91E63]/30" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
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