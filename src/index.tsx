import React from "react";
import ReactDOM from "react-dom";

import Router from "./router/Router";

const app = document.querySelector("#app");

const fakeData = [
  {
    codigo: "B.02117",
    medidas: "49x38x24",
    contenido: "ropa",
    cliente: "Doña Pepa",
    precio: 355.5
  },
  {
    codigo: "B.00190",
    medidas: "21x21x21",
    contenido: "regalo",
    cliente: "Nicolas Claus",
    precio: 100
  },
  {
    codigo: "B.01777",
    medidas: "34x27x12",
    contenido: "botas",
    cliente: "El Gato con Botas",
    precio: 100
  }
];

ReactDOM.render(<Router data={fakeData} />, app);
