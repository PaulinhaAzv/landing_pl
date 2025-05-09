import { render, screen } from '@testing-library/react';
import PlanosSection from './PlanosSection';

describe('PlanosSection', () => {
  it('deve renderizar os dois planos', () => {
    render(<PlanosSection />);
    expect(screen.getByText('Plano Básico')).toBeInTheDocument();
    expect(screen.getByText('Plano VIP')).toBeInTheDocument();
  });

  it('deve ter os preços corretos', () => {
    render(<PlanosSection />);
    expect(screen.getByText('R$29,90')).toBeInTheDocument();
    expect(screen.getByText('R$59,90')).toBeInTheDocument();
  });

  it('deve ter os links de pagamento corretos', () => {
    render(<PlanosSection />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://openpix.com.br/pay/dca7fd01-bd6e-4a2d-bb7c-16f3ad07e8b2');
    expect(links[1]).toHaveAttribute('href', 'https://openpix.com.br/pay/19b39aee-9a21-4568-bc59-2432a0b1912e');
  });
}); 