import * as React from "react";

import Model from "./Model";

export interface BoxProps {
  userID: string | undefined;
  codigo: string;
  medidas: string;
  categoria: string;
  contenido: string;
  obj: string;
  mtl: string;
}

const Box: React.SFC<BoxProps> = (props: BoxProps) => {
  return (
    <div>
      <div className="box-container">
        <Model className="model" obj={props.obj} mtl={props.mtl} medidas={props.medidas} />
        <div className="box">
          <div>
            <h3 className="sub-title">Categoría</h3>
            {props.categoria}
          </div>
          <div>
            <h3 className="sub-title">Medidas</h3>
            {`Largo:${props.medidas.split("x")[0]}cm`} <br />
            {`Ancho:${props.medidas.split("x")[1]}cm`} <br />
            {`Alto:${props.medidas.split("x")[2]}cm`}
          </div>
          <div>
            <h3 className="sub-title">Contenido</h3>
            {props.contenido}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
