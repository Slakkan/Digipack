import * as React from "react";

import Model from "./Model";

export interface BoxProps {
  userID: string | undefined;
  medidas: string;
  categoria: string;
  contenido: string[];
  model: string;
}

const Box: React.SFC<BoxProps> = (props: BoxProps) => {
  return (
    <div className="box-container">
      <Model
        className="model"
        object="EXHIBIDORA.obj"
        material="EXHIBIDORA.mtl"
      />
      <div className="box">
        <p>
          <h3 className="sub-title">Categoría</h3>
          {props.categoria}
        </p>
        <p>
          <h3 className="sub-title">Medidas</h3>
          {`Largo:${props.medidas.split("x")[0]}cm`} <br />
          {`Ancho:${props.medidas.split("x")[1]}cm`} <br />
          {`Alto:${props.medidas.split("x")[2]}cm`}
        </p>
        <p>
          <h3 className="sub-title">Contenido</h3>
          {props.contenido}
        </p>
      </div>
    </div>
  );
};

export default Box;
