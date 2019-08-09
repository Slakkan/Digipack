import * as React from 'react';

import '../../styles/components/sub-components/Box.css'

export interface BoxProps {
    userID: string | undefined
}
 
const Box: React.SFC<BoxProps> = () => {
    return ( 
        <div className="box-container" >
            <div className="box" >B.02117</div>
            <div className="box" >49x38x24</div>
            <div className="box" >ropa</div>
            <div className="box" >Doña pepa</div>
        </div>
     );
}
 
export default Box;