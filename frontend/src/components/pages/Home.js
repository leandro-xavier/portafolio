import React from 'react';
import Navigation from '../Navbar/Navigation';
import { CardHomeOne } from '../Cards/CardHomeOne';
import { CardWorkComponent } from '../Cards/CardWorkComponent';
import { CardAboutComponent } from '../Cards/CardAboutComponent';
import { Controller, Scene } from 'react-scrollmagic';

const Home = () => {
    return (
        <div className="nav__cardhome">
            <Navigation/>
                <div className="principal-home">
                    <CardHomeOne/>
                </div>

                <div className="work-component">
                    <Controller>
                        <Scene duration={300} pin=".animado">
                            
                        <CardWorkComponent/>
                        </Scene>
                    </Controller>
                   
                </div>

                <div className="about-component">
                    <CardAboutComponent/>
                </div>
        </div>
    );
}

export default Home;
