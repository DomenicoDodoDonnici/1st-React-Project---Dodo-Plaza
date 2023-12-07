import Bottone from "../Bottone/Bottone";

export default function Carrello({ carteCarrello, calcolaCarrello }) {
  /*
  function carteCarrello (carta) {
    return carteCarrello.find((cartaCarrello) => cartaCarrello.id === carta.id);
  }
  */

  return (
    <div className="carrello-container">
      <div className="carrello-info">
        <Bottone title="Clicca per visualizzare il contenuto del tuo carrello">
          Il tuo carrello 🛒
        </Bottone>
        <p>Il totale attuale del tuo carrello è di €{calcolaCarrello}</p>
      </div>
      <div className="bottone-container">
        <Bottone>Aggiungi, modifica o rimuovi una carta ⚛️</Bottone>
      </div>
      <div className="bottone-container">
        <Bottone>Preferiti 💟</Bottone>
      </div>
      <div className="pagination">
        <a href="#" aria-label="Previous">
          &laquo;
        </a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#" aria-label="Next">
          &raquo;
        </a>
      </div>
    </div>
  );
}