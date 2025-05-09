import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743376995/PAULA/rzu2viooxgvml8ze8r1y.png"
                alt="Paula Azevedo"
                className="w-full h-auto transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Sobre Mim
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Olá, eu sou Paula Azevedo. Criei este espaço para compartilhar meu conteúdo artístico e sensual, 
              onde cada foto e vídeo é cuidadosamente produzido para despertar sensações únicas.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Aqui você encontrará um universo de imagens provocantes, vídeos exclusivos e momentos íntimos 
              que vão além do comum. Cada conteúdo é uma expressão de arte e desejo.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Venha fazer parte deste mundo exclusivo e descubra um novo jeito de se conectar com o sensual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 