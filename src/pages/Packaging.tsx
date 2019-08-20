import * as React from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Catalog from "../components/Catalog";

export interface PackagingProps {
  userID: undefined;
  data: [];
}

export interface PackagingState {
  userID: string | undefined;
}

class Packaging extends React.Component<PackagingProps, PackagingState> {
  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <SearchBar
            data={this.props.data}
            filters={["Medidas", "Contenido", "Cliente", "Tipo"]}
          />
          <Catalog
            data={this.props.data}
            userID={this.props.userID}
            filters={["Modelo", "Descripción"]}
          />
        </div>
      </div>
    );
  }
}

export default Packaging;
