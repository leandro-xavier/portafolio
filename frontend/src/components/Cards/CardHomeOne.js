import React from 'react';
import './cardhome.css';

export  const CardHomeOne = () => {

//const image = 'img/galaxia_uno.jpg'

    return (
        <div className="card-list contenedor" >
            {/*<img className="card-image" src={image} alt="card-imagen" />*/}
          {/* <h1 className="h1">Hola, Mi nombre es Leandro Mariscal, te invito a que veas todos mis proyectos que estan aqui, desliza<span>&#160;</span> </h1>*/ }  
          <img className="img" src="img/profile.jfif" alt="" data-aos="flip-left"  data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"  data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"/>
            <p className='p'>hola, soy leandro.</p>
        </div>
    );
}
