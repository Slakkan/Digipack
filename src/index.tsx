import React from 'react'
import ReactDOM from 'react-dom'

import Router from './router/Router';

const app = document.querySelector("#app")

const fakeData = {
    B02117: {
      medidas: "49x38x24",
      contenido: "ropa",
      cliente:"Doña Pepa",
      precio: 355.50
    },
    B00190: {
      medidas: "21x21x21",
      contenido: "regalo",
      cliente:"Nicolas Claus",
      precio: 100
    }
  }

ReactDOM.render(<Router data={fakeData} />, app)