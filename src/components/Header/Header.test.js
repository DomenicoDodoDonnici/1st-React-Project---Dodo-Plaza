import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders Header component', () => {
    render(<Header />);
    expect(screen.getByText(/Dodo Plaza/i)).toBeInTheDocument();
  });

  // Test per verificare la presenza di classi CSS specifiche, se necessario
  test('has the correct class', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Dodo Plaza/i);
    expect(headerElement).toHaveClass('header');
  });

  // Altri test possono essere aggiunti qui, come verificare la corretta renderizzazione 
  // di eventuali sottocomponenti o la corretta risposta a eventi utente.
});
