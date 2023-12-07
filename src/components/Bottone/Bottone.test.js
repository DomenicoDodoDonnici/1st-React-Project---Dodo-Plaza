import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bottone from './Bottone';

describe('Bottone Component', () => {
  test('renders Bottone component with text', () => {
    render(<Bottone>Clicca Qui</Bottone>);
    expect(screen.getByText('Clicca Qui')).toBeInTheDocument();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Bottone onClick={handleClick}>Clicca Qui</Bottone>);
    fireEvent.click(screen.getByText('Clicca Qui'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Altri test possono essere aggiunti qui in base alle funzionalità specifiche del tuo componente Bottone.
});
