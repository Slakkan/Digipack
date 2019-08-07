import * as React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export interface PackagingProps {
    data: object
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
                <SearchBar data={this.props.data} filters={["Medida Aproximada", "Para Envasar", "Cliente"]} />
                <button onClick={()=> console.log(this.props)}>TESTING</button>
            </div>
         );
    }
}
 
export default Packaging;