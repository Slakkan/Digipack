import * as React from "react";

import Model from "./Model";

export interface BoxProps {
  userID: string | undefined;
  codigo: string;
  medidas: string;
  contenido: string;
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
      <div className="box"> <p>{props.codigo}</p>  </div>
      <div className="box">
        <p>{`Largo:${props.medidas.split("x")[0]}cm`}</p>
        <p>{`Ancho:${props.medidas.split("x")[1]}cm`} </p>
        <p>{`Alto:${props.medidas.split("x")[2]}cm`}</p>
      </div>
      <div className="box"> <p>{props.contenido}</p> </div>
    </div>
  );
};

export default Box;
