import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carta from './Carta';

describe('Carta Component', () => {
  const mockCarta = {
    id: 1,
    nome: 'Carta Test',
    lingua: 'Italiano',
    prezzo: '100,00',
    set: 'Test Set',
    primaEdizione: true,
    condizioni: 'Mint',
    foto: 'url-to-image'
  };

  const mockFunzioni = {
    aggiungiCarrello: jest.fn(),
    rimuoviCarrello: jest.fn(),
    aggiungiPreferiti: jest.fn(),
    rimuoviPreferiti: jest.fn(),
  };

  test('renders Carta component', () => {
    render(
      <Carta
        carta={mockCarta}
        carteCarrello={[]}
        cartePreferite={[]}
        {...mockFunzioni}
      />
    );
    expect(screen.getByText('Carta Test')).toBeInTheDocument();
    expect(screen.getByText('100,00')).toBeInTheDocument();
  });

  test('aggiungi al carrello button click calls function', () => {
    render(
      <Carta
        carta={mockCarta}
        carteCarrello={[]}
        cartePreferite={[]}
        {...mockFunzioni}
      />
    );
    fireEvent.click(screen.getByText(/Aggiungi al carrello/i));
    expect(mockFunzioni.aggiungiCarrello).toHaveBeenCalledWith(mockCarta);
  });

  test('aggiungi ai preferiti button click calls function', () => {
    render(
      <Carta
        carta={mockCarta}
        carteCarrello={[]}
        cartePreferite={[]}
        {...mockFunzioni}
      />
    );
    fireEvent.click(screen.getByText(/Aggiungi ai preferiti/i));
    expect(mockFunzioni.aggiungiPreferiti).toHaveBeenCalledWith(mockCarta);
  });

  // Altri test possono essere aggiunti qui in base alle funzionalità specifiche del tuo componente Carta.
});
