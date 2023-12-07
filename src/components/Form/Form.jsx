import Bottone from "../Bottone/Bottone";

export default function Form() {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="nome-pokemon">🟣 Nome Pokémon</label>
        <input id="nome-pokemon" type="text" placeholder="Pokémon..." />
      </div>

      <div className="form-group">
        <label htmlFor="nome-set">🟣 Nome Set</label>
        <input id="nome-set" type="text" placeholder="Set..." />
      </div>

      <div className="form-group">
        <label htmlFor="lingua-carta">🟣 Lingua Carta</label>
        <input id="lingua-carta" type="text" placeholder="Lingua..." />
      </div>

      <div className="form-group">
        <label htmlFor="prezzo-carta">🟣 Prezzo Carta</label>
        <select id="prezzo-carta">
          <option value="prezziCrescenti">Prezzi crescenti</option>
          <option value="prezziDecrescenti">Prezzi decrescenti</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="condizioni-carta">🟣 Condizioni Carta</label>
        <select id="condizioni-carta">
          <option value="condizioniCrescenti">Condizioni crescenti</option>
          <option value="condizioniDecrescenti">Condizioni decrescenti</option>
        </select>
      </div>

      <Bottone>Cerca 🔍</Bottone>
    </form>
  );
}
