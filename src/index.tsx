import React from "react";
import ReactDOM from "react-dom";

import Router from "./router/Router";

const app = document.querySelector("#app");

const fakeData = [
  {
    codigo: "D.000012",
    medidas: "30x40x200",
    contenido: "Permite acomodar cosas en varios estantes.",
    cliente: "Pepito",
    model: "./3D/Exhibidora.gltf",
    precio: 355.5
  }
];

ReactDOM.render(<Router data={fakeData} />, app);
