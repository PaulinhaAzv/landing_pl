import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('deve renderizar o título principal', () => {
    render(<HeroSection />);
    expect(screen.getByText('Conteúdo íntimo e provocante')).toBeInTheDocument();
  });

  it('deve renderizar o botão de planos', () => {
    render(<HeroSection />);
    expect(screen.getByText('Ver planos agora')).toBeInTheDocument();
  });

  it('deve renderizar a logo', () => {
    render(<HeroSection />);
    const logo = screen.getByAltText('Logo Paulinha');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'https://res.cloudinary.com/dt9m3pkjv/image/upload/v1743393385/PAULA_AZEVEDO_500_x_200_px_gd5l0v.png');
  });
}); 