import * as React from 'react';

import Header from '../components/Header';

export interface NotFoundProps {
    userID: string | undefined
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