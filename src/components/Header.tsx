import * as React from "react";

import "../styles/header.css";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <div className="header">
      <div className="title-container">Digipack</div>
      <div className="link-container">
        <button
          className="link"
          onFocus={e => {
            e.target.blur();
          }}
        >
          Inicio
        </button>
        <button
          className="link"
          onFocus={e => {
            e.target.blur();
          }}
        >
          Envases
        </button>
        <button
          className="link"
          onFocus={e => {
            e.target.blur();
          }}
        >
          Contacto
        </button>
      </div>
    </div>
  );
};

export default Header;
