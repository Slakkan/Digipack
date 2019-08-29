import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Packaging from "../pages/Packaging";
import Contact from "../pages/Contact";
import ControlPanel from "../pages/ControlPanel";
import NotFound from "../pages/NotFound";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Header from "../components/Header";

export interface RouterProps {
  data: any[];
  adminList: string[];
}

export interface RouterState {
  userData?: firebase.auth.UserCredential;
  isAdmin: boolean;
}

class Router extends React.Component<RouterProps, RouterState> {
  state = { isAdmin: false };
  authenticate(userData: firebase.auth.UserCredential) {
    const isAdmin = this.props.adminList.find(email => userData.user.email === email) !== undefined
    this.setState({ userData, isAdmin });
  }
  render() {
    return (
      <BrowserRouter>
        <Header
          isAdmin={this.state.isAdmin}
          authenticate={(userData: firebase.auth.UserCredential) =>
            this.authenticate(userData)
          }
        />
        <Switch>
          <PublicRoute Component={Home} path="/" exact={true} {...this.props} />
          <PublicRoute
            Component={Packaging}
            path="/packaging"
            exact={false}
            {...this.props}
          />
          <PublicRoute
            Component={Contact}
            path="/contact"
            exact={false}
            {...this.props}
          />
          <PrivateRoute
            isAdmin={this.state.isAdmin}
            Component={ControlPanel}
            path={"/control"}
            exact={true}
          />
          <PublicRoute Component={NotFound} path={undefined} exact={false} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
