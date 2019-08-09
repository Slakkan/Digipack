import * as React from "react";

import '../styles/components/Catalog.css'
import Box from "./sub-components/Box"

export interface CatalogProps {
  userID: string | undefined;
}

export interface CatalogState {
}

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = { userID: undefined };
  render() {
    return (
      <div className="catalog-container" >
        <Box userID={this.props.userID} />
        <Box userID={this.props.userID} />
        <Box userID={this.props.userID} />
      </div>
    );
  }
}

export default Catalog;
