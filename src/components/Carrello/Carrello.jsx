import { useState } from "react";
import Bottone from "../Bottone/Bottone";

export default function Carrello({
  carteCarrello,
  calcolaCarrello,
  paginaCorrente,
  cambiaPagina,
  numeroTotalePagine,
  apriFinestraCarrello,
  apriFinestraPreferiti,
  apriFinestraOpzioni,
}) {
  return (
    <div className="carrello-container">
      <div className="carrello-info">
        <Bottone onClick={apriFinestraCarrello}>Il tuo carrello 🛒</Bottone>
        <p>Il totale attuale del tuo carrello è di €{calcolaCarrello()}</p>
      </div>
      <div className="bottone-container">
        <Bottone onClick={apriFinestraOpzioni}>
          Aggiungi, modifica o rimuovi una carta ⚛️
        </Bottone>
      </div>
      <div className="bottone-container">
        <Bottone onClick={apriFinestraPreferiti}>Preferiti 💟</Bottone>
      </div>
      <div className="pagination">
        <button
          onClick={() => cambiaPagina(paginaCorrente - 1)}
          disabled={paginaCorrente === 1}
        >
          &laquo; Precedente
        </button>
        {Array.from({ length: numeroTotalePagine }, (_, i) => (
          <button key={i + 1} onClick={() => cambiaPagina(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => cambiaPagina(paginaCorrente + 1)}
          disabled={paginaCorrente === numeroTotalePagine}
        >
          Successiva &raquo;
        </button>
      </div>
    </div>
  );
}
