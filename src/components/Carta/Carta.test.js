// Importa le funzioni necessarie da testing-library/react
import { render, screen, fireEvent } from "@testing-library/react";
// Importa il componente Carta che vuoi testare
import Carta from "./Carta";

// Crea un oggetto fittizio per rappresentare una carta
const cartaMock = {
  id: 1,
  nome: "Pikachu",
  lingua: "Inglese",
  prezzo: "100.00",
  set: "Base Set",
  primaEdizione: true,
  condizioni: "Mint",
  foto: "url_immagine_pikachu",
};

// Descrive un gruppo di test per il componente Carta
describe("Test del componente Carta", () => {
  // Definisce i mock (funzioni fittizie) per i callback passati al componente
  const mockAggiungiCarrello = jest.fn();
  const mockRimuoviCarrello = jest.fn();
  const mockAggiungiPreferiti = jest.fn();
  const mockRimuoviPreferiti = jest.fn();

  // Definisce un test per verificare la presenza e la funzionalità dei bottoni
  test("verifica se i bottoni funzionano correttamente", () => {
    // Renderizza il componente Carta con i props necessari
    render(
      <Carta
        carta={cartaMock}
        carteCarrello={[]}
        aggiungiCarrello={mockAggiungiCarrello}
        rimuoviCarrello={mockRimuoviCarrello}
        cartePreferite={[]}
        aggiungiPreferiti={mockAggiungiPreferiti}
        rimuoviPreferiti={mockRimuoviPreferiti}
      />
    );

    // Trova e simula un click sul bottone per aggiungere al carrello
    const bottoneAggiungiCarrello = screen.getByText("Aggiungi al carrello 🛒");
    fireEvent.click(bottoneAggiungiCarrello);
    expect(mockAggiungiCarrello).toHaveBeenCalledWith(cartaMock);

    // Trova e simula un click sul bottone per aggiungere ai preferiti
    const bottoneAggiungiPreferiti = screen.getByText(
      "Aggiungi ai preferiti 💟"
    );
    fireEvent.click(bottoneAggiungiPreferiti);
    expect(mockAggiungiPreferiti).toHaveBeenCalledWith(cartaMock);

    // Aggiorna i props per simulare una carta già nel carrello e nei preferiti
    render(
      <Carta
        carta={cartaMock}
        carteCarrello={[cartaMock]}
        aggiungiCarrello={mockAggiungiCarrello}
        rimuoviCarrello={mockRimuoviCarrello}
        cartePreferite={[cartaMock]}
        aggiungiPreferiti={mockAggiungiPreferiti}
        rimuoviPreferiti={mockRimuoviPreferiti}
      />
    );

    // Trova e simula un click sul bottone per rimuovere dal carrello
    const bottoneRimuoviCarrello = screen.getByText("Rimuovi dal carrello");
    fireEvent.click(bottoneRimuoviCarrello);
    expect(mockRimuoviCarrello).toHaveBeenCalledWith(cartaMock);

    // Trova e simula un click sul bottone per rimuovere dai preferiti
    const bottoneRimuoviPreferiti = screen.getByText("Rimuovi dai preferiti");
    fireEvent.click(bottoneRimuoviPreferiti);
    expect(mockRimuoviPreferiti).toHaveBeenCalledWith(cartaMock);
  });
});
