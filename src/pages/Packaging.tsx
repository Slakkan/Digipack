import * as React from "react";

import "../styles/pages/Packaging.css";
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
        <div className="main-container">
          <SearchBar
            data={this.props.data}
            filters={["Medidas", "Contenido", "Cliente"]}
          />
          <Catalog
            data={this.props.data}
            userID={this.props.userID}
            filters={["Modelo", "Código", "Medidas", "Contenido"]}
          />
        </div>
      </div>
    );
  }
}

export default Packaging;
