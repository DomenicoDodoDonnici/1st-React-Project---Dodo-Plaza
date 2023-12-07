import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form Component', () => {
  test('renders Form component', () => {
    render(<Form />);
    expect(screen.getByLabelText(/Nome Pokémon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome Set/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Lingua Carta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Prezzo Carta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Condizioni Carta/i)).toBeInTheDocument();
  });

  test('submits form with correct data', () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText(/Nome Pokémon/i), { target: { value: 'Pikachu' } });
    fireEvent.change(screen.getByLabelText(/Nome Set/i), { target: { value: 'Base Set' } });
    fireEvent.change(screen.getByLabelText(/Lingua Carta/i), { target: { value: 'Italiano' } });
    fireEvent.click(screen.getByText(/Cerca 🔍/i));

    // Aggiungi qui asserzioni per verificare il comportamento atteso dopo il submit
  });

  // Altri test possono essere aggiunti qui in base ai requisiti del tuo componente Form.
});
