// Importa le funzioni necessarie da testing-library/react
import { render, screen } from '@testing-library/react';
// Importa il componente Header che vuoi testare
import Header from './Header';

describe('Test del componente Header', () => {
  // Definisce un test per verificare se il header contiene il logo
  test('verifica se il header contiene il logo', () => {
    render(<Header />);

    // Verifica la presenza del logo (ad esempio, tramite testo alternativo dell'immagine)
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  // Definisce un test per verificare la presenza di link di navigazione
  test('verifica la presenza di link di navigazione', () => {
    render(<Header />);

    // Verifica che il header contenga determinati link di navigazione
    const linkHome = screen.getByText(/home/i);
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByText(/about/i);
    expect(linkAbout).toBeInTheDocument();
  });
});
