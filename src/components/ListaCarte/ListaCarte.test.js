import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListaCarte from './ListaCarte';

describe('ListaCarte Component', () => {
  const mockCarte = [
    { id: 1, nome: 'Carta1', set: 'Set1', lingua: 'Italiano', prezzo: '100', primaEdizione: true, condizioni: 'Mint' },
    { id: 2, nome: 'Carta2', set: 'Set2', lingua: 'Inglese', prezzo: '200', primaEdizione: false, condizioni: 'Near Mint' }
  ];

  test('renders ListaCarte component with cards', () => {
    render(
      <ListaCarte 
        carte={mockCarte} 
        carteCarrello={[]} 
        aggiungiCarrello={() => {}} 
        rimuoviCarrello={() => {}} 
        cartePreferite={[]} 
        aggiungiPreferiti={() => {}} 
        rimuoviPreferiti={() => {}}
      />
    );
    expect(screen.getByText('Carta1')).toBeInTheDocument();
    expect(screen.getByText('Carta2')).toBeInTheDocument();
  });

  test('renders empty list when no cards', () => {
    render(
      <ListaCarte 
        carte={[]} 
        carteCarrello={[]} 
        aggiungiCarrello={() => {}} 
        rimuoviCarrello={() => {}} 
        cartePreferite={[]} 
        aggiungiPreferiti={() => {}} 
        rimuoviPreferiti={() => {}}
      />
    );
    expect(screen.queryByText('Carta1')).toBeNull();
    expect(screen.queryByText('Carta2')).toBeNull();
  });

  // Altri test possono essere aggiunti qui in base alle funzionalità specifiche del tuo componente ListaCarte.
});
