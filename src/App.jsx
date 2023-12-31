import { useState, useEffect } from "react";
import hoOhImage from "./img/Ho-Oh_Crystal_Holo.png";
import charizardImage from "./img/Dark_Charizard_Holo.png";
import mewtwoImage from "./img/Shining_Mewtwo.png";
import mewImage from "./img/Mew_Goldstar.png";
import gyaradosImage from "./img/Gyarados_Holo.png";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Carrello from "./components/Carrello/Carrello";
import ListaCarte from "./components/ListaCarte/ListaCarte";
import Footer from "./components/Footer/Footer";
import Finestra from "./components/Finestra/Finestra";

const carteIniziali = [
  {
    id: 118836,
    nome: "Ho-Oh Crystal Holo",
    lingua: "Inglese",
    prezzo: "500.00",
    set: "Skyridge",
    primaEdizione: false,
    condizioni: "Poor",
    foto: hoOhImage,
  },
  {
    id: 933372,
    nome: "Dark Charizard Holo",
    lingua: "Inglese",
    prezzo: "50.00",
    set: "Team Rocket",
    primaEdizione: true,
    condizioni: "Good",
    foto: charizardImage,
  },
  {
    id: 499476,
    nome: "Shining Mewtwo",
    lingua: "Giapponese",
    prezzo: "600.00",
    set: "Neo Destiny",
    primaEdizione: false,
    condizioni: "Mint",
    foto: mewtwoImage,
  },
  {
    id: 673712,
    nome: "Mew Goldstar",
    lingua: "Giapponese",
    prezzo: "600.00",
    set: "EX Dragon Frontiers",
    primaEdizione: false,
    condizioni: "Excellent",
    foto: mewImage,
  },
  {
    id: 172832,
    nome: "Gyarados Holo",
    lingua: "Giapponese",
    prezzo: "300.00",
    set: "Skyridge",
    primaEdizione: true,
    condizioni: "Light Played",
    foto: gyaradosImage,
  },
  {
    id: 371822,
    nome: "Gyarados Holo",
    lingua: "Giapponese",
    prezzo: "10000.00",
    set: "Skyridge",
    primaEdizione: false,
    condizioni: "Mint",
    foto: gyaradosImage,
  },
];

export default function App() {
  const [carteCarrello, setCarteCarrello] = useState([]);
  const [cartePreferite, setCartePreferite] = useState([]);
  const [paginaCorrente, setPaginaCorrente] = useState(1);
  const [parametriRicerca, setParametriRicerca] = useState({
    nomePokemon: "",
    nomeSet: "",
    linguaCarta: "",
    prezzoCarta: "prezziCrescenti",
    condizioniCarta: "Poor",
  });
  const [mostraFinestra, setMostraFinestra] = useState(false);
  const [contenutoFinestra, setContenutoFinestra] = useState(null);
  const [titoloFinestra, setTitoloFinestra] = useState("");

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
      (totale, carta) => totale + parseFloat(carta.prezzo),
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

  const cambiaPagina = (numeroPagina) => {
    setPaginaCorrente(numeroPagina);
  };

  function resettaParametriRicerca() {
    setParametriRicerca({
      nomePokemon: "",
      nomeSet: "",
      linguaCarta: "",
      prezzoCarta: "prezziCrescenti",
      condizioniCarta: "Poor",
    });
  }

  function filtraCarte() {
    const condizioniMappa = {
      Mint: 7,
      "Near Mint": 6,
      Excellent: 5,
      Good: 4,
      "Light Played": 3,
      Played: 2,
      Poor: 1,
    };

    let carteFiltrate = carteIniziali.filter((carta) => {
      const filtroNome =
        parametriRicerca.nomePokemon === "" ||
        carta.nome
          .toLowerCase()
          .includes(parametriRicerca.nomePokemon.toLowerCase());
      const filtroSet =
        parametriRicerca.nomeSet === "" ||
        carta.set
          .toLowerCase()
          .includes(parametriRicerca.nomeSet.toLowerCase());
      const filtroLingua =
        parametriRicerca.linguaCarta === "" ||
        carta.lingua
          .toLowerCase()
          .includes(parametriRicerca.linguaCarta.toLowerCase());

      const filtroCondizione =
        condizioniMappa[carta.condizioni] >=
        condizioniMappa[parametriRicerca.condizioniCarta];

      return filtroNome && filtroSet && filtroLingua && filtroCondizione;
    });

    carteFiltrate.sort((a, b) => {
      let differenzaPrezzo = parseFloat(a.prezzo) - parseFloat(b.prezzo);

      if (parametriRicerca.prezzoCarta === "prezziCrescenti") {
        return differenzaPrezzo;
      } else if (parametriRicerca.prezzoCarta === "prezziDecrescenti") {
        return -differenzaPrezzo;
      }

      return 0;
    });

    return carteFiltrate;
  }

  const carteFiltrate = filtraCarte();
  const cartePerPagina = 5;
  const numeroTotalePagine = Math.ceil(carteFiltrate.length / cartePerPagina);

  useEffect(() => {
    switch (titoloFinestra) {
      case "Carrello":
        setContenutoFinestra(
          <div>
            <div className="finestra-header">
              <h2>Carrello</h2>
            </div>
            {carteCarrello.length > 0 ? (
              carteCarrello.map((carta) => (
                <div key={carta.id} className="carta-nel-carrello">
                  <img
                    src={carta.foto}
                    alt={carta.nome}
                    style={{ width: "80px" }}
                  />
                  <div className="carta-info">
                    <div className="carta-titolo">{carta.nome}</div>
                    <div className="carta-prezzo">
                      €{carta.prezzo}
                      <button
                        className="rimuovi-carta"
                        onClick={() => rimuoviCartaDalCarrello(carta)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Il carrello è vuoto.</p>
            )}
            <div className="finestra-footer">
              <h3>Totale Carrello: €{calcolaTotaleCarrello()}</h3>
            </div>
          </div>
        );
        break;
      case "Preferiti":
        setContenutoFinestra(
          <div>
            <div className="finestra-header">
              <h2>Preferiti</h2>
            </div>
            {cartePreferite.length > 0 ? (
              cartePreferite.map((carta) => (
                <div key={carta.id} className="carta-nel-carrello">
                  <img
                    src={carta.foto}
                    alt={carta.nome}
                    style={{ width: "80px" }}
                  />
                  <div className="carta-info">
                    <div className="carta-titolo">{carta.nome}</div>
                    <div className="carta-condizioni">{carta.condizioni}</div>
                    <button
                      className="rimuovi-carta"
                      onClick={() => rimuoviCartaDaiPreferiti(carta)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Non ci sono preferiti.</p>
            )}
            <div className="finestra-footer">
              {/* Qui puoi inserire il grafico delle condizioni */}
            </div>
          </div>
        );
        break;
      case "Opzioni":
        setContenutoFinestra(
          <div className="opzioni-finestra">
            <button>Aggiungi Carta</button>
            <button>Modifica Carta</button>
            <button>Rimuovi Carta</button>
            <p>Non implementato.</p>
          </div>
        );
        break;
      default:
        setContenutoFinestra(null);
    }
  }, [
    titoloFinestra,
    carteCarrello,
    cartePreferite,
    calcolaTotaleCarrello,
    rimuoviCartaDalCarrello,
    rimuoviCartaDaiPreferiti,
  ]);

  const apriFinestraCarrello = () => {
    setTitoloFinestra("Carrello");
    setMostraFinestra(true);
  };

  const apriFinestraPreferiti = () => {
    setTitoloFinestra("Preferiti");
    setMostraFinestra(true);
  };

  const apriFinestraOpzioni = () => {
    setTitoloFinestra("Opzioni");
    setMostraFinestra(true);
  };

  return (
    <div>
      <Header />
      <Form setParametriRicerca={setParametriRicerca} />
      <Carrello
        calcolaCarrello={calcolaTotaleCarrello}
        paginaCorrente={paginaCorrente}
        cambiaPagina={cambiaPagina}
        numeroTotalePagine={numeroTotalePagine}
        apriFinestraCarrello={apriFinestraCarrello}
        apriFinestraPreferiti={apriFinestraPreferiti}
        apriFinestraOpzioni={apriFinestraOpzioni}
      />
      <ListaCarte
        carte={carteFiltrate}
        carteCarrello={carteCarrello}
        aggiungiCarrello={aggiungiCartaAlCarrello}
        rimuoviCarrello={rimuoviCartaDalCarrello}
        cartePreferite={cartePreferite}
        aggiungiPreferiti={aggiungiCartaAiPreferiti}
        rimuoviPreferiti={rimuoviCartaDaiPreferiti}
        paginaCorrente={paginaCorrente}
        cartePerPagina={cartePerPagina}
        cambiaPagina={cambiaPagina}
        resettaParametriRicerca={resettaParametriRicerca}
      />
      {mostraFinestra && (
        <Finestra
          isOpen={mostraFinestra}
          onClose={() => setMostraFinestra(false)}
          title={titoloFinestra}
        >
          {contenutoFinestra}
        </Finestra>
      )}
      <Footer />
    </div>
  );
}
