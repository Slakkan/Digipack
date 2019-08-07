import * as React from 'react';

import '../styles/components/NotFound.css'
import Header from '../components/Header';

export interface NotFoundProps {
    
}
 
const NotFound: React.SFC<NotFoundProps> = () => {
    return ( 
        <div>
            <Header />
            <h1 className='error'>Page not found</h1>
        </div>
     );
}
 
export default NotFound;