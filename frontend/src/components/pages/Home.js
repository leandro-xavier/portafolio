import React from 'react';
//import Navigation from '../Navbar/Navigation';
import { CardHomeOne } from '../Cards/CardHomeOne';
import { CardWorkComponent } from '../Cards/CardWorkComponent';
import { CardAboutComponent } from '../Cards/CardAboutComponent';
import { Navbar } from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className="nav__cardhome">
            <Navbar/>
           {/* <Navigation/>*/}
                <div className="principal-home">
                    <CardHomeOne/>
                </div>

                <div className="work-component">
                        <CardWorkComponent/>
                </div>

                <div className="about-component">
                    <CardAboutComponent/>
                </div>
        </div>
    );
}

export default Home;
