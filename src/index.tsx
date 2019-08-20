import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss"

import Router from "./router/Router";

const app = document.querySelector("#app");

const fakeData = [
  {
    codigo: "D.000012",
    categoria: "Exhibidora",
    medidas: "30x40x200",
    contenido: ["Mercadería"],
    cliente: "Pepito",
    model: "./3D/Exhibidora.gltf",
    precio: 355.5
  },
  {
    codigo: "D.000012",
    categoria: "Exhibidora",
    medidas: "30x40x200",
    contenido: ["Mercadería"],
    cliente: "Pepito",
    model: "./3D/Exhibidora.gltf",
    precio: 355.5
  }
];

ReactDOM.render(<Router data={fakeData} />, app);
