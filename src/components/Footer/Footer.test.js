import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Sito fatto con 💜 da Dodo')).toBeInTheDocument();
    expect(screen.getByText("Tokyo's PokeCards (Preordini dal Giappone)")).toBeInTheDocument();
    expect(screen.getByText('PokeCards')).toBeInTheDocument();
    expect(screen.getByText('PokeTrade')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Dodop1kwah')).toBeInTheDocument();
  });

  // Altri test possono essere aggiunti qui in base alle funzionalità specifiche del tuo componente Footer.
});
