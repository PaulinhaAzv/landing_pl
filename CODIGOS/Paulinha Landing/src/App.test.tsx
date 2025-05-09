import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('deve renderizar About corretamente', () => {
    render(<App />);
    expect(screen.getByText('Quem é Paulinha?')).toBeInTheDocument();
    expect(screen.getByText(/Sedutora, tímida e oferecida/i)).toBeInTheDocument();
  });
}); 