import * as React from 'react';

import '../../styles/components/sub-components/Box.css'

export interface BoxProps {
    userID: string | undefined,
    codigo: string,
    medidas: string,
    contenido: string,
    cliente: string
}
 
const Box: React.SFC<BoxProps> = (props:BoxProps) => {
    return ( 
        <div className="box-container" >
            <div className="box" > {props.codigo} </div>
            <div className="box" > {props.medidas} </div>
            <div className="box" > {props.contenido} </div>
            <div className="box" > {props.cliente} </div>
        </div>
     );
}
 
export default Box;