import * as React from 'react';

import Header from '../components/Header'

export interface HomeProps {
    
}
 
export interface HomeState {
    userID: string | undefined
}
 
class Home extends React.Component<HomeProps, HomeState> {
    state = { 
        userID: undefined
     }
    render() { 
        return ( 
            <div>
                <Header />
            </div>
         );
    }
}
 
export default Home;