import React from 'react';
import Navigation from '../Navbar/Navigation';
import { CardHomeOne } from '../Cards/CardHomeOne';
import { CardWorkComponent } from '../Cards/CardWorkComponent';


const Home = () => {
    return (
        <div className="nav__cardhome">
            <Navigation/>
                <div className="principal-home">
                    <CardHomeOne/>
                </div>

                <div className="work-component">
                    <CardWorkComponent/>
                </div>
        </div>
    );
}

export default Home;
