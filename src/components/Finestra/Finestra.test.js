// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from '@testing-library/react';
// Importa il componente Finestra che vuoi testare
import Finestra from './Finestra';

describe('Test del componente Finestra', () => {
  // Definisce un test per verificare se la finestra visualizza il contenuto correttamente
  test('verifica se la finestra visualizza il contenuto', () => {
    const contenuto = "Contenuto della finestra";
    render(<Finestra isOpen={true} title="Titolo Finestra">{contenuto}</Finestra>);

    expect(screen.getByText(contenuto)).toBeInTheDocument();
  });

  // Definisce un test per verificare se la finestra si chiude correttamente
  test('verifica se la finestra si chiude', () => {
    const handleClose = jest.fn();
    render(<Finestra isOpen={true} onClose={handleClose} title="Titolo Finestra">Contenuto</Finestra>);

    // Simula un click sul bottone di chiusura
    const closeButton = screen.getByText('Chiudi'); // Assicurati che il testo corrisponda al testo del tuo bottone di chiusura
    fireEvent.click(closeButton);

    // Verifica che la funzione handleClose sia stata chiamata
    expect(handleClose).toHaveBeenCalled();
  });
});
