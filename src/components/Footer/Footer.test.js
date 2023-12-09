// Importa le funzioni necessarie da testing-library/react
import { render, screen } from "@testing-library/react";
// Importa il componente Footer che vuoi testare
import Footer from "./Footer";

describe("Test del componente Footer", () => {
  // Definisce un test per verificare se il footer contiene il testo atteso
  test("verifica se il footer contiene il testo specifico", () => {
    render(<Footer />);

    // Verifica che il footer contenga un certo testo
    const testoAtteso = "© 2023 Il Mio Progetto React";
    expect(screen.getByText(testoAtteso)).toBeInTheDocument();
  });

  // Definisce un test per verificare la presenza di link o altri elementi
  test("verifica la presenza di link o elementi specifici", () => {
    render(<Footer />);

    // Verifica che il footer contenga un certo link o elemento
    const linkAtteso = "Termini di Servizio";
    expect(screen.getByText(linkAtteso)).toBeInTheDocument();
  });
});
