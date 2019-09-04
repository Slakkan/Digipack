import * as React from "react";

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
        <div className="content-container">
          <SearchBar
            filters={["Medidas", "Contenido", "Cliente", "Categoría"]}
          />
          <Catalog
            userID={this.props.userID}
            filters={["Modelo", "Descripción"]}
          />
        </div>
      </div>
    );
  }
}

export default Packaging;
