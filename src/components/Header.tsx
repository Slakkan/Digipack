import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Header";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <div className="header">
      <div className="title-container">Digipack</div>
      <div className="link-container">
        <button
          className="link-button"
          onFocus={e => {
            e.target.blur();
          }}
        >
          <Link className="link" to="/">
            Inicio
          </Link>
        </button>
        <button
          className="link-button"
          onFocus={e => {
            e.target.blur();
          }}
        >
          <Link className="link" to="/packaging">
            Envases
          </Link>
        </button>
        <button
          className="link-button"
          onFocus={e => {
            e.target.blur();
          }}
        >
          <Link className="link" to="/contact">
            Contacto
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
