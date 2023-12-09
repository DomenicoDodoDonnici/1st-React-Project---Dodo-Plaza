// Importa le funzioni necessarie da testing-library/react
import { render, screen } from "@testing-library/react";
// Importa il componente App che vuoi testare
import App from "./App";

describe("Test del componente App", () => {
  // Definisce un test per verificare se l'app renderizza il componente Header
  test("verifica se l'app renderizza il componente Header", () => {
    render(<App />);

    // Verifica la presenza di un elemento specifico del Header
    const elementoHeader = screen.getByText(/nome del tuo sito o logo/i);
    expect(elementoHeader).toBeInTheDocument();
  });

  // Definisce un test per verificare se l'app renderizza il componente Footer
  test("verifica se l'app renderizza il componente Footer", () => {
    render(<App />);

    // Verifica la presenza di un elemento specifico del Footer
    const elementoFooter = screen.getByText(/diritti riservati/i);
    expect(elementoFooter).toBeInTheDocument();
  });

  // Definisce un test per verificare se l'app renderizza il componente principale
  test("verifica se l'app renderizza il componente principale", () => {
    render(<App />);

    // Verifica la presenza di un elemento specifico del componente principale
    const elementoPrincipale = screen.getByText(/contenuto principale/i);
    expect(elementoPrincipale).toBeInTheDocument();
  });
});
