import * as React from "react";
import { Route } from "react-router-dom";

export interface PublicRouteProps {
  Component: React.ComponentType<any>;
  path: string | undefined;
  exact: boolean;
  props?: object;
}

const PublicRoute: React.SFC<PublicRouteProps> = props => {
  const { Component, path, exact, children, ...rest } = props;
  return (
    <Route
      render={() => <Component path={path} exact={exact} {...rest} />}
    />
  );
};

export default PublicRoute;
