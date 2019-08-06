import * as React from 'react';

import '../styles/header.css'

export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {
    return ( 
        <div className='header'>Digipack</div>
     );
}
 
export default Header;