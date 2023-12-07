import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carrello from './Carrello';

describe('Carrello Component', () => {
  const mockCarrello = [
    { id: 1, nome: 'Carta1', prezzo: '100' },
    { id: 2, nome: 'Carta2', prezzo: '200' }
  ];

  test('renders Carrello component with items', () => {
    render(<Carrello carteCarrello={mockCarrello} calcolaCarrello={() => 300} />);
    expect(screen.getByText(/Il tuo carrello 🛒/i)).toBeInTheDocument();
    expect(screen.getByText('Il totale attuale del tuo carrello è di €300')).toBeInTheDocument();
  });

  test('renders empty Carrello when no items', () => {
    render(<Carrello carteCarrello={[]} calcolaCarrello={() => 0} />);
    expect(screen.getByText('Il totale attuale del tuo carrello è di €0')).toBeInTheDocument();
  });

  // Altri test possono essere aggiunti qui in base alle funzionalità specifiche del tuo componente Carrello.
});
