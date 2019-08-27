import * as React from "react";
import { Link } from "react-router-dom";

import { firebase, googleAuthProvider } from '../database/firebase'

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <div className="header-container">
      <div className="header-content-container">
        <div className="title-container">
          Digipack
          <button className="link-login" onClick={() => {firebase.auth().signInWithPopup(googleAuthProvider)}}>Ingresar</button>
        </div>
        <div className="link-container">
          <button
            className="link-button"
            onFocus={e => {
              e.target.blur();
            }}
          >
            <Link className="navigation-link" to="/">
              Inicio
            </Link>
          </button>
          <button
            className="link-button"
            onFocus={e => {
              e.target.blur();
            }}
          >
            <Link className="navigation-link" to="/packaging">
              Envases
            </Link>
          </button>
          <button
            className="link-button"
            onFocus={e => {
              e.target.blur();
            }}
          >
            <Link className="navigation-link" to="/contact">
              Contacto
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
