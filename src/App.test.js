import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders App component and its child components', () => {
    render(<App />);
    
    // Testa la presenza di elementi specifici dei componenti figlio
    // Assicurati che i testi usati qui sotto corrispondano a quelli presenti nei tuoi componenti
    expect(screen.getByText('Dodo Plaza')).toBeInTheDocument(); // Da Header
    expect(screen.getByLabelText(/Nome Pokémon/i)).toBeInTheDocument(); // Da Form
    expect(screen.getByText('Il tuo carrello 🛒')).toBeInTheDocument(); // Da Carrello
    expect(screen.getByText('Ho-Oh Crystal Holo')).toBeInTheDocument(); // Da ListaCarte
    expect(screen.getByText(/Sito fatto con 💜 da Dodo/)).toBeInTheDocument(); // Da Footer

    // Puoi aggiungere altri test per controllare la renderizzazione di altri componenti o elementi specifici
  });

  // Qui puoi aggiungere altri test per funzionalità specifiche della tua App
});
