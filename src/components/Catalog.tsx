import * as React from "react";

import "../styles/components/Catalog.css";
import Box from "./sub-components/Box";

export interface CatalogProps {
  userID: string | undefined;
  filters: string[];
  data: any[];
}

export interface CatalogState {}

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = { userID: undefined };
  render() {
    return (
      <div className="catalog-container">
        <div className="filter-container">
          {this.props.filters.map((filter, index) => (
            <div className="filter" key={`filter${index}`}>
              {filter}
            </div>
          ))}
        </div>
        {this.props.data.map((object, index) => (
          <Box
            key={`Box${index}`}
            userID={this.props.userID}
            codigo={object.codigo}
            medidas={object.medidas}
            contenido={object.contenido}
            model={object.model}
          />
        ))}
      </div>
    );
  }
}

export default Catalog;
