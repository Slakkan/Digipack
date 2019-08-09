import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Packaging from "../pages/Packaging";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PublicRoute from "./Public Route";

export interface RouterProps {
  data: any[]
}

const Router: React.SFC<RouterProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute Component={Home} path="/" exact={true} {...props} />
        <PublicRoute Component={Packaging} path="/packaging" exact={false} {...props} />
        <PublicRoute Component={Contact} path="/contact" exact={false} {...props} />
        <PublicRoute Component={NotFound} path={undefined} exact={false} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
