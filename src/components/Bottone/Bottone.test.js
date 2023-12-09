// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from "@testing-library/react";
// Importa il componente Bottone che vuoi testare
import Bottone from "./Bottone";

// Descrive un gruppo di test per il componente Bottone
describe("Test del componente Bottone", () => {
  // Definisce un test per verificare la presenza e la funzionalità del bottone
  test("verifica se il bottone è presente e funzionante", () => {
    // Crea una funzione mock per simulare un click event
    const mockOnClick = jest.fn();

    // Renderizza il componente Bottone con il testo e il click event
    render(<Bottone onClick={mockOnClick}>Test Bottone</Bottone>);

    // Trova il bottone e simula un click su di esso
    const bottone = screen.getByText("Test Bottone");
    fireEvent.click(bottone);

    // Verifica che la funzione mock sia stata chiamata
    expect(mockOnClick).toHaveBeenCalled();
  });
});
