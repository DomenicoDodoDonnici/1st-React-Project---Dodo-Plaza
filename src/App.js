import { useState } from "react";
import hoOhImage from "./img/Ho-Oh_Crystal_Holo.png";
import charizardImage from "./img/Dark_Charizard_Holo.png";
import mewtwoImage from "./img/Shining_Mewtwo.png";
import mewImage from "./img/Mew_Goldstar.png";
import gyaradosImage from "./img/Gyarados_Holo.png";

const carteIniziali = [
  {
    id: 118836,
    nome: "Ho-Oh Crystal Holo",
    lingua: "Inglese",
    prezzo: "500,00",
    set: "Skyridge",
    primaEdizione: false,
    condizioni: "Poor",
    foto: hoOhImage,
  },
  {
    id: 933372,
    nome: "Dark Charizard Holo",
    lingua: "Inglese",
    prezzo: "50,00",
    set: "Team Rocket",
    primaEdizione: true,
    condizioni: "Good",
    foto: charizardImage,
  },
  {
    id: 499476,
    nome: "Shining Mewtwo",
    lingua: "Giapponese",
    prezzo: "1000,00",
    set: "Neo Destiny",
    primaEdizione: false,
    condizioni: "Mint",
    foto: mewtwoImage,
  },
  {
    id: 673712,
    nome: "Mew Goldstar",
    lingua: "Giapponese",
    prezzo: "600,00",
    set: "EX Dragon Frontiers",
    primaEdizione: false,
    condizioni: "Excellent",
    foto: mewImage,
  },
  {
    id: 172832,
    nome: "Gyarados Holo",
    lingua: "Giapponese",
    prezzo: "300,00",
    set: "Skyridge",
    primaEdizione: true,
    condizioni: "Light Played",
    foto: gyaradosImage,
  },
];

export default function App() {
  const [carteCarrello, setCarteCarrello] = useState([]);
  const [cartePreferite, setCartePreferite] = useState([]);

  function aggiungiCartaAlCarrello(cartaDaAggiungere) {
    setCarteCarrello([...carteCarrello, cartaDaAggiungere]);
  }

  function rimuoviCartaDalCarrello(cartaDaRimuovere) {
    setCarteCarrello(
      carteCarrello.filter((carta) => carta.id !== cartaDaRimuovere.id)
    );
  }

  function calcolaTotaleCarrello() {
    return carteCarrello.reduce(
      (totale, carta) => totale + Number(carta.prezzo),
      0
    );
  }

  function aggiungiCartaAiPreferiti(cartaDaAggiungere) {
    setCartePreferite([...cartePreferite, cartaDaAggiungere]);
  }

  function rimuoviCartaDaiPreferiti(cartaDaRimuovere) {
    setCartePreferite(
      cartePreferite.filter((carta) => carta.id !== cartaDaRimuovere.id)
    );
  }

  return (
    <div>
      <Header />
      <Form />
      <Carrello
        carteCarrello={carteCarrello}
        calcolaCarrello={calcolaTotaleCarrello}
      />
      <ListaCarte
        carte={carteIniziali}
        carteCarrello={carteCarrello}
        aggiungiCarrello={aggiungiCartaAlCarrello}
        rimuoviCarrello={rimuoviCartaDalCarrello}
        cartePreferite={cartePreferite}
        aggiungiPreferiti={aggiungiCartaAiPreferiti}
        rimuoviPreferiti={rimuoviCartaDaiPreferiti}
      />
      <Footer />
    </div>
  );
}

function Bottone({ children }) {
  return <button className="bottone">{children}</button>;
}

function Header() {
  return (
    <header className="header">
      <h1>Dodo Plaza</h1>
    </header>
  );
}

function Form() {
  return (
    <form className="form">
      <div className="form-group">
        <label>🟣 Nome Pokémon</label>
        <input type="text" placeholder="Pokémon..." />
      </div>

      <div className="form-group">
        <label>🟣 Nome Set</label>
        <input type="text" placeholder="Set..." />
      </div>

      <div className="form-group">
        <label>🟣 Lingua Carta</label>
        <input type="text" placeholder="Lingua..." />
      </div>

      <div className="form-group">
        <label>🟣 Prezzo Carta</label>
        <select>
          <option value="prezziCrescenti">Prezzi crescenti</option>
          <option value="prezziDecrescenti">Prezzi decrescenti</option>
        </select>
      </div>

      <div className="form-group">
        <label>🟣 Condizioni Carta</label>
        <select>
          <option value="condizioniCrescenti">Condizioni crescenti</option>
          <option value="condizioniDecrescenti">Condizioni decrescenti</option>
        </select>
      </div>

      <Bottone>Cerca 🔍</Bottone>
    </form>
  );
}

function Carrello({ carteCarrello, calcolaCarrello }) {
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

function ListaCarte({
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

const condizioniClassi = {
  Mint: "mint",
  "Near Mint": "near-mint",
  Excellent: "excellent",
  Good: "good",
  "Light Played": "light-played",
  Played: "played",
  Poor: "poor",
};

function Carta({
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

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a className="telegram" href="https://t.me/tokyopokecards">
            Tokyo's PokeCards (Preordini dal Giappone)
          </a>
        </li>
        <li>
          <a className="telegram" href="https://t.me/pokemoncompravenditacarte">
            PokeCards
          </a>{" "}
          <span>
            <a className="github" href="https://github.com/DomenicoDodoDonnici">
              GitHub
            </a>
          </span>
        </li>
        <li>
          <a className="telegram" href="https://t.me/compravenditapokemon">
            PokeTrade
          </a>
          <span>
            <a
              className="vinted"
              href="https://www.vinted.it/member/104393874-dodop1kwah"
            >
              Dodop1kwah
            </a>
          </span>
        </li>
      </ul>
      <div className="info-square">
        <p>Sito fatto con 💜 da Dodo</p>
      </div>
    </footer>
  );
}
