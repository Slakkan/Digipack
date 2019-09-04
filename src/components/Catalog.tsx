import * as React from "react";

import { cloud, database } from "../database/firebase";
import Box from "./sub-components/Box";

interface modelosInfo {
  codigo: string;
  categoria: string;
  medidas: string;
  contenido: string;
  cliente: string;
  precio: string;
  obj?: string;
  mtl?: string;
}

interface modelos3D {
  codigo: string;
  obj?: any;
  mtl?: any;
  [key: string]: any;
}

export interface CatalogProps {
  userID: string | undefined;
  filters: string[];
}

export interface CatalogState {
  modelosInfo: modelosInfo[];
  modelos3D: modelos3D[];
}

class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
    modelosInfo: [],
    modelos3D: []
  };
  componentDidMount() {
    this.downloadInfo();
    this.download3DModels();
  }

  async downloadInfo() {
    let modelosInfo: modelosInfo[] = [];
    await database
      .ref("productos")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(producto => {
          const codigo = producto.key.replace("@", ".");
          const { categoria, medidas, contenido, cliente, precio } = producto.val();
          const envase: modelosInfo = { codigo, categoria, medidas, contenido, cliente, precio };
          modelosInfo.push(envase);
        });
      });

    this.setState({ ...this.state, modelosInfo });
  }

  async download3DModels() {
    let modelos3D: modelos3D[] = [];
    await cloud
      .ref()
      .child("3D")
      .listAll()
      .then(res => {
        for (const item of res.items) {
          const [codigoLetra, codigoNumero, extension] = item.name.split(".");
          const codigo = `${codigoLetra}.${codigoNumero}`;
          item.getDownloadURL().then(url => {
            const modelo = modelos3D.find(elemento => elemento.codigo === codigo);
            if (modelo) {
              modelo[extension] = url;
            } else {
              modelos3D.push({
                codigo,
                [extension]: url
              });
            }
          });
        }
      })
      .catch(error => console.log("Something went wrong:", error));

    this.setState({ ...this.state, modelos3D });
  }
  generateBoxes() {
    const { modelosInfo, modelos3D }: { modelosInfo: modelosInfo[]; modelos3D: modelos3D[] } = this.state;

    const data = modelos3D.map(envase => {
      const info = modelosInfo.find(modelo => modelo.codigo === envase.codigo);

      return {
        codigo: envase.codigo,
        obj: envase.obj,
        mtl: envase.mtl,
        categoria: info ? info.categoria : "",
        medidas: info ? info.medidas : "",
        contenido: info ? info.contenido : "",
        cliente: info ? info.cliente : "",
        precio: info ? info.precio : ""
      };
    });

    return data.map((modelo, index) => {
      if (!modelo.obj || !modelo.mtl) {
        return;
      }
      return (
        <Box
          key={`Box${index}`}
          userID={this.props.userID}
          codigo={modelo.codigo}
          categoria={modelo.categoria}
          medidas={modelo.medidas}
          contenido={modelo.contenido}
          obj={modelo.obj}
          mtl={modelo.mtl}
        />
      );
    });
  }
  render() {
    const { modelosInfo, modelos3D } = this.state;
    return (
      <div className="catalog-container">
        <div className="filter-container">
          {this.props.filters.map((filter, index) => (
            <div className="filter" key={`filter${index}`}>
              {filter}
            </div>
          ))}
        </div>
        { modelosInfo && modelos3D ? this.generateBoxes() : null }
      </div>
    );
  }
}

export default Catalog;
