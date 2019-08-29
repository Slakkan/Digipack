import * as React from 'react';

export interface NotFoundProps {
    userID: string | undefined
}
 
const NotFound: React.SFC<NotFoundProps> = () => {
    return ( 
        <div>
            <h1 className='error'>Page not found</h1>
        </div>
     );
}
 
export default NotFound;