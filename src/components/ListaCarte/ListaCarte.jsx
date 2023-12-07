import Carta from "../Carta/Carta";

export default function ListaCarte({
  carte,
  carteCarrello,
  aggiungiCarrello,
  rimuoviCarrello,
  cartePreferite,
  aggiungiPreferiti,
  rimuoviPreferiti,
}) {
  return (
    <ul className="card-list">
      {carte.map((carta) => (
        <Carta
          key={carta.id}
          carta={carta}
          aggiungiCarrello={aggiungiCarrello}
          rimuoviCarrello={rimuoviCarrello}
          aggiungiPreferiti={aggiungiPreferiti}
          rimuoviPreferiti={rimuoviPreferiti}
          carteCarrello={carteCarrello}
          cartePreferite={cartePreferite}
        />
      ))}
    </ul>
  );
}