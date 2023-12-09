// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from "@testing-library/react";
// Importa il componente ListaCarte che vuoi testare
import ListaCarte from "./ListaCarte";

describe("Test del componente ListaCarte", () => {
  // Definisce un test per verificare se il componente renderizza le carte
  test("verifica se il componente renderizza le carte", () => {
    const carteMock = [
      {
        id: 1,
        nome: "Carta 1",
        prezzo: "100",
        condizioni: "Mint",
        foto: "url1",
      },
      {
        id: 2,
        nome: "Carta 2",
        prezzo: "200",
        condizioni: "Near Mint",
        foto: "url2",
      },
      // Aggiungi qui altre carte mock se necessario
    ];

    render(<ListaCarte carte={carteMock} />);

    // Verifica che le carte siano renderizzate
    expect(screen.getByText("Carta 1")).toBeInTheDocument();
    expect(screen.getByText("Carta 2")).toBeInTheDocument();
    // Aggiungi qui altri controlli se necessario
  });

  // Definisce un test per verificare la paginazione
  test("verifica la funzionalità di paginazione", () => {
    // Assumi che il componente ListaCarte abbia una prop per la paginazione
    const cambiaPaginaMock = jest.fn();
    const carteMock = [
      /* ... */
    ]; // Usa lo stesso array di carte mock

    render(<ListaCarte carte={carteMock} cambiaPagina={cambiaPaginaMock} />);

    // Simula l'interazione con il controllo di paginazione
    const buttonPaginaSuccessiva = screen.getByText(/pagina successiva/i);
    fireEvent.click(buttonPaginaSuccessiva);

    // Verifica che la funzione cambiaPaginaMock sia stata chiamata
    expect(cambiaPaginaMock).toHaveBeenCalled();
  });
});
