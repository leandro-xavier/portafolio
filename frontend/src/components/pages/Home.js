import React from 'react';
import Navigation from '../Navbar/Navigation';
import { CardHomeOne } from '../Cards/CardHomeOne';


const Home = () => {
    return (
        <div className="nav__cardhome">
            <Navigation/>
                <div className="principal-home">
                    <CardHomeOne/>
                </div>
        </div>
    );
}

export default Home;
