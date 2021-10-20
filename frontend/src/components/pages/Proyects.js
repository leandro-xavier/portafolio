import React from 'react';
import Navigation from '../Navbar/Navigation';
import {CardList} from '../Cards/CardList'


const Proyects = () => {
    return (
        <div>
            <div>
            <Navigation/>
            </div>
            <div>
                <h1>Proyectos</h1>
            </div>
            <CardList/>
        </div>
    );
}

export default Proyects;
