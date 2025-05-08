import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
      <div className="text-white/50 text-sm">
        Conteúdo artístico +18. Respeito é obrigatório. © Paulinha Az. 2025
      </div>
      <div className="mt-2 space-x-4">
        <Link to="/termos" className="text-sm text-[#E91E63]/70 hover:text-[#E91E63] transition-colors">
          Termos de Uso
        </Link>
        <Link to="/privacidade" className="text-sm text-[#E91E63]/70 hover:text-[#E91E63] transition-colors">
          Privacidade
        </Link>
      </div>
    </footer>
  );
};

export default Footer;