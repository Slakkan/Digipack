import * as React from "react";
import { Route } from "react-router-dom";

export interface PrivateRouteProps {
  Component: React.ComponentType<any>,
  path: string | undefined,
  exact: boolean,
  isAdmin: boolean;
  props?: object
}

const PrivateRoute: React.SFC<PrivateRouteProps> = props => {
  const { Component, path, exact, children, isAdmin, ...rest } = props;
  return (
    <div>
      {isAdmin && (
        <Route
          render={() => <Component path={path} exact={exact} {...rest} />}
        />
      )}
    </div>
  );
};

export default PrivateRoute;
