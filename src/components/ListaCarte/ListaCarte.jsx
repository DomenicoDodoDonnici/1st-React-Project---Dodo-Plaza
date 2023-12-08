import Carta from "../Carta/Carta";

export default function ListaCarte({
  carte,
  carteCarrello,
  aggiungiCarrello,
  rimuoviCarrello,
  cartePreferite,
  aggiungiPreferiti,
  rimuoviPreferiti,
  paginaCorrente,
  cartePerPagina,
  cambiaPagina,
  resettaParametriRicerca,
}) {
  const indiceInizio = (paginaCorrente - 1) * cartePerPagina;
  const indiceFine = indiceInizio + cartePerPagina;
  const carteDaVisualizzare = carte.slice(indiceInizio, indiceFine);

  const indiceUltimaCartaTotale = carte.length - 1;
  const indiceUltimaCartaVisualizzata =
    indiceInizio + carteDaVisualizzare.length - 1;
  const eUltimaCarta = indiceUltimaCartaVisualizzata >= indiceUltimaCartaTotale;

  return (
    <div>
      <ul className="card-list">
        {carteDaVisualizzare.map((carta) => (
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

      {eUltimaCarta && (
        <div className="fine-lista-messaggio">
          <p>
            Non ci sono più carte da vedere.{" "}
            <button onClick={() => cambiaPagina(1)}>
              Torna alla prima pagina
            </button>{" "}
            <button
              onClick={() => cambiaPagina(paginaCorrente - 1)}
              disabled={paginaCorrente === 1}
            >
              Pagina precedente
            </button>
          </p>
        </div>
      )}

      {!carteDaVisualizzare.length && (
        <div className="fine-lista-messaggio">
          <p>
            Nessuna carta trovata con i parametri specificati.
            <button onClick={resettaParametriRicerca}>
              Resetta parametri ricerca
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
