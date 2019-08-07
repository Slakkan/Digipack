import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Packaging from "./pages/Packaging";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export interface RouterProps {}

const Router: React.SFC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/packaging" component={Packaging} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
