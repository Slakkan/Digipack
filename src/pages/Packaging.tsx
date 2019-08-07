import * as React from 'react';

import Header from '../components/Header';

export interface PackagingProps {
    
}
 
export interface PackagingState {
    userID: string | undefined
}
 
class Packaging extends React.Component<PackagingProps, PackagingState> {
    state = { userID: undefined }
    render() { 
        return ( 
            <div>
                <Header />
            </div>
         );
    }
}
 
export default Packaging;