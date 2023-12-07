import Bottone from "../Bottone/Bottone";

const condizioniClassi = {
  Mint: "mint",
  "Near Mint": "near-mint",
  Excellent: "excellent",
  Good: "good",
  "Light Played": "light-played",
  Played: "played",
  Poor: "poor",
};

export default function Carta({
  carta,
  carteCarrello,
  aggiungiCarrello,
  rimuoviCarrello,
  cartePreferite,
  aggiungiPreferiti,
  rimuoviPreferiti,
}) {
  // Controlla se la carta è nel carrello
  const inCarrello = carteCarrello.some((item) => item.id === carta.id);
  // Controlla se la carta è nei preferiti
  const inPreferiti = cartePreferite.some((item) => item.id === carta.id);

  return (
    <li className="card-list-item">
      <div className="card-image">
        <img src={carta.foto} alt={carta.nome} />
      </div>
      <div className="card-content">
        <h2>{carta.nome}</h2>
        <p>
          <span className="info-req">Set</span>{" "}
          <span className="info-res">{carta.set}</span>{" "}
          <span className="info-req">Prima Edizione</span>{" "}
          <span className="info-res">{carta.primaEdizione ? "✔️" : "✖️"}</span>
        </p>
        <p>
          <span className="info-req">Lingua</span>{" "}
          <span className="info-res">{carta.lingua}</span>
        </p>

        <span className="info-req">Condizioni </span>
        <span className={condizioniClassi[carta.condizioni] || ""}>
          {carta.condizioni}
        </span>

        <p>
          <span className="info-req">Prezzo</span>{" "}
          <span className="info-res">€{carta.prezzo}</span>
        </p>

        <Bottone
          onClick={() =>
            inCarrello ? rimuoviCarrello(carta) : aggiungiCarrello(carta)
          }
        >
          {inCarrello ? "Rimuovi dal carrello" : "Aggiungi al carrello"} 🛒
        </Bottone>
        <Bottone
          onClick={() =>
            inPreferiti ? rimuoviPreferiti(carta) : aggiungiPreferiti(carta)
          }
        >
          {inPreferiti ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"} 💟
        </Bottone>
      </div>
    </li>
  );
}