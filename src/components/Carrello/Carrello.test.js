// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from '@testing-library/react';
// Importa il componente Carrello che vuoi testare
import Carrello from './Carrello';

// Descrive un gruppo di test per il componente Carrello
describe('Test del componente Carrello', () => {
  // Definisce i mock (funzioni fittizie) per i callback passati al componente
  const mockCalcolaCarrello = jest.fn();
  const mockCambiaPagina = jest.fn();
  const mockApriFinestraCarrello = jest.fn();
  const mockApriFinestraPreferiti = jest.fn();
  const mockApriFinestraOpzioni = jest.fn();

  // Definisce un test per verificare la presenza e la funzionalità del bottone del carrello
  test('verifica se il bottone del carrello è presente e funzionante', () => {
    // Renderizza il componente Carrello con i props necessari
    render(
      <Carrello
        carteCarrello={[]}
        calcolaCarrello={mockCalcolaCarrello}
        paginaCorrente={1}
        cambiaPagina={mockCambiaPagina}
        numeroTotalePagine={5}
        apriFinestraCarrello={mockApriFinestraCarrello}
        apriFinestraPreferiti={mockApriFinestraPreferiti}
        apriFinestraOpzioni={mockApriFinestraOpzioni}
      />
    );
    // Trova il bottone del carrello e simula un click su di esso
    const bottoneCarrello = screen.getByText('Il tuo carrello 🛒');
    fireEvent.click(bottoneCarrello);
    // Verifica che la funzione mock sia stata chiamata
    expect(mockApriFinestraCarrello).toHaveBeenCalled();
  });

  // Test simile per il bottone dei preferiti
  test('verifica se il bottone dei preferiti è presente e funzionante', () => {
    render(
      <Carrello
        carteCarrello={[]}
        calcolaCarrello={mockCalcolaCarrello}
        paginaCorrente={1}
        cambiaPagina={mockCambiaPagina}
        numeroTotalePagine={5}
        apriFinestraCarrello={mockApriFinestraCarrello}
        apriFinestraPreferiti={mockApriFinestraPreferiti}
        apriFinestraOpzioni={mockApriFinestraOpzioni}
      />
    );
    const bottonePreferiti = screen.getByText('Preferiti 💟');
    fireEvent.click(bottonePreferiti);
    expect(mockApriFinestraPreferiti).toHaveBeenCalled();
  });

  // Test simile per il bottone delle opzioni
  test('verifica se il bottone per aggiungere, modificare o rimuovere una carta è presente e funzionante', () => {
    render(
      <Carrello
        carteCarrello={[]}
        calcolaCarrello={mockCalcolaCarrello}
        paginaCorrente={1}
        cambiaPagina={mockCambiaPagina}
        numeroTotalePagine={5}
        apriFinestraCarrello={mockApriFinestraCarrello}
        apriFinestraPreferiti={mockApriFinestraPreferiti}
        apriFinestraOpzioni={mockApriFinestraOpzioni}
      />
    );
    const bottoneOpzioni = screen.getByText('Aggiungi, modifica o rimuovi una carta ⚛️');
    fireEvent.click(bottoneOpzioni);
    expect(mockApriFinestraOpzioni).toHaveBeenCalled();
  });
});
