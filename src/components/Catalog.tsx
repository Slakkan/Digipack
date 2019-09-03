import * as React from "react";

import { cloud, database } from "../database/firebase";
import Box from "./sub-components/Box";

export interface CatalogProps {
  userID: string | undefined;
  filters: string[];
}

export interface CatalogState {
  data: any[];
}

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
    data: []
  };
  componentDidMount() {
    this.downloadInfo();
    this.download3DModels();
  }
  async downloadInfo() {
    const modelosInfo: any[] = [];
    await database
      .ref("productos")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(producto => {
          const codigo = producto.key.replace("@", ".");
          const { categoria, medidas, contenido, cliente, precio } = producto.val();
          const envase = { codigo, categoria, medidas, contenido, cliente, precio };
          modelosInfo.push(envase);
        });
      });

    console.log(modelosInfo);

    return modelosInfo;
  }

  async download3DModels() {
    const modelos3D: any[] = [];
    await cloud
      .ref()
      .child("3D")
      .listAll()
      .then(res => {
        res.items.forEach(item => {
          const [codigoLetra, codigoNumero, extension] = item.name.split(".");
          const codigo = `${codigoLetra}.${codigoNumero}`;
          const index = modelos3D.findIndex(envase => (envase.codigo = codigo));
          if (index === -1) {
            const index = modelos3D.push({ codigo }) - 1
            item.getDownloadURL().then(url => modelos3D[index][extension] = url)
          } else {
            item.getDownloadURL().then(url => modelos3D[index][extension] = url)
          }
        });
      })
      .catch(error => console.log("Something went wrong:", error));

    console.log(modelos3D);

    return modelos3D;
  }
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
            categoria={object.categoria}
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
