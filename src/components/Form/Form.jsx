import { useState } from "react";
import Bottone from "../Bottone/Bottone";

export default function Form({ setParametriRicerca }) {
  const [nomePokemon, setNomePokemon] = useState("");
  const [nomeSet, setNomeSet] = useState("");
  const [linguaCarta, setLinguaCarta] = useState("");
  const [prezzoCarta, setPrezzoCarta] = useState("prezziCrescenti");
  const [condizioniCarta, setCondizioniCarta] = useState("condizioniCrescenti");

  const handleSubmit = (e) => {
    e.preventDefault();
    setParametriRicerca({
      nomePokemon,
      nomeSet,
      linguaCarta,
      prezzoCarta,
      condizioniCarta,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome-pokemon">🟣 Nome Pokémon</label>
        <input
          id="nome-pokemon"
          type="text"
          placeholder="Pokémon..."
          value={nomePokemon}
          onChange={(e) => setNomePokemon(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="nome-set">🟣 Nome Set</label>
        <input
          id="nome-set"
          type="text"
          placeholder="Set..."
          value={nomeSet}
          onChange={(e) => setNomeSet(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lingua-carta">🟣 Lingua Carta</label>
        <input
          id="lingua-carta"
          type="text"
          placeholder="Lingua..."
          value={linguaCarta}
          onChange={(e) => setLinguaCarta(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prezzo-carta">🟣 Prezzo Carta</label>
        <select
          id="prezzo-carta"
          value={prezzoCarta}
          onChange={(e) => setPrezzoCarta(e.target.value)}
        >
          <option value="prezziCrescenti">Prezzi crescenti</option>
          <option value="prezziDecrescenti">Prezzi decrescenti</option>
        </select>
      </div>

      <div className="form-group">
        <label
          htmlFor="condizioni-carta"
          value={condizioniCarta}
          onChange={(e) => setCondizioniCarta(e.target.value)}
        >
          🟣 Condizioni Carta
        </label>
        <select id="condizioni-carta">
          <option value="condizioniCrescenti">Condizioni crescenti</option>
          <option value="condizioniDecrescenti">Condizioni decrescenti</option>
        </select>
      </div>

      <Bottone type="submit">Cerca 🔍</Bottone>
    </form>
  );
}
