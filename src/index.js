import React from "react";
import ReactDOM from "react-dom/client"; // Importa client da react-dom
import "./index.css";
import App from "./App";

// Crea una root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Utilizza il metodo render sulla root creata
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
