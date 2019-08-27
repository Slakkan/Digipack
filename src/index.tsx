import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";

import Router from "./router/Router";

const app = document.querySelector("#app");

const fakeData = [
  {
    codigo: "D.000012",
    categoria: "Comida",
    medidas: "26,5x16x4",
    contenido: ["Sushi"],
    cliente: "Ricardo Rivet",
    model: "COMIDA_SUSHI_RICARDO_RIVET",
    precio: 49
  },
  {
    codigo: "D.000013",
    categoria: "Exhibidora",
    medidas: "30x40x200",
    contenido: ["Mercadería"],
    cliente: "Pepito",
    model: "ESTANTERIA",
    precio: 780
  }
];

ReactDOM.render(<Router data={fakeData} />, app);
