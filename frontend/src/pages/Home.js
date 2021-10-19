import React from 'react';
import Navigation from '../components/Navigation';
import { PrincipalImage } from '../components/PrincipalImage';
//import './home.css'

const Home = () => {
    return (
        <div>
            <Navigation/>
                <div className="principal-home">
                    <PrincipalImage/>
                </div>
        </div>
    );
}

export default Home;
