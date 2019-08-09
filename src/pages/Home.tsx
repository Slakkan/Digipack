import * as React from 'react';

import Header from '../components/Header'

export interface HomeProps {
    userID: string | undefined
}
 
export interface HomeState {
}
 
class Home extends React.Component<HomeProps, HomeState> {
    render() { 
        return ( 
            <div>
                <Header />
            </div>
         );
    }
}
 
export default Home;