// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from "@testing-library/react";
// Importa il componente Form che vuoi testare
import Form from "./Form";

describe("Test del componente Form", () => {
  // Definisce un test per verificare se il form renderizza i campi input correttamente
  test("verifica se il form renderizza i campi input", () => {
    render(<Form />);

    // Verifica la presenza dei campi input
    expect(screen.getByLabelText(/Nome Pokémon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome Set/i)).toBeInTheDocument();
    // Aggiungi qui altri campi input se presenti nel tuo form
  });

  // Definisce un test per verificare la funzionalità di submit del form
  test("verifica la funzionalità di submit del form", () => {
    const mockSubmit = jest.fn();
    render(<Form onSubmit={mockSubmit} />);

    // Simula l'input dell'utente
    fireEvent.change(screen.getByLabelText(/Nome Pokémon/i), {
      target: { value: "Pikachu" },
    });
    fireEvent.change(screen.getByLabelText(/Nome Set/i), {
      target: { value: "Base Set" },
    });
    // Aggiungi qui altri eventi di input se necessario

    // Simula il submit del form
    fireEvent.submit(screen.getByRole("button", { name: /cerca/i }));

    // Verifica che la funzione mockSubmit sia stata chiamata
    expect(mockSubmit).toHaveBeenCalled();
  });
});
