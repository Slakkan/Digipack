import * as React from "react";
import { Link } from "react-router-dom";

import { firebase, googleAuthProvider } from "../database/firebase";

export interface HeaderProps {
  authenticate: (userData: firebase.auth.UserCredential) => void;
  isAdmin: boolean;
}

export interface HeaderState {
  isAuthenticated: boolean;
  ID?: string | null;
  userName?: string | null;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    isAuthenticated: false
  };
  login() {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(userData => {
        this.setState({
          isAuthenticated: true,
          ID: userData.user.email,
          userName: userData.user.displayName
        });
        this.props.authenticate(userData);
      });
  }
  renderLogin() {
    return this.state.isAuthenticated ? (
      <div className="login-welcome">
        {" "}
        Bienvenido, <br /> {this.state.userName}
      </div>
    ) : (
      <button className="link-login" onClick={() => this.login()}>
        Ingresar
      </button>
    );
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-content-container">
          <div className="title-container">
            Digipack
            {this.renderLogin()}
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
            {this.props.isAdmin && (
              <button
                className="link-button"
                onFocus={e => {
                  e.target.blur();
                }}
              >
                <Link className="navigation-link" to="/control">
                  Control
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
