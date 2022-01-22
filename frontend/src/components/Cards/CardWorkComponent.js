import React from 'react';
import Card from 'react-animated-3d-card'
import {Animated} from "react-animated-css";
import { Button } from '../button/Button';

export const CardWorkComponent = () => {
    const imageAnime = 'img/anime-app-image.png';
    const imageNasa = 'img/nasa-image.png';
    const imagePanawood = 'img/panawood-image.png'

    const redireccionarPagina = () => {
        window.setTimeout( abrirURL, 1 ); // 3 segundos
    };
    
    function abrirURL(){
      //Abrir URL que necesites
      window.open("https://leandro-xavier.github.io/anime-app-v/")
      console.log("Han pasado 3 segundos");
    };
    return (
        <div>
            <div className="container-work">

                <div>
                    <h1 style={{textAlign:"center"}}>Proyectos</h1>
                    <p style={{textAlign:"center"}}>Algunos de los proyectos </p>
                </div>

                    <div className="card-container" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                        <Card       
                            style={{
                                backgroundImage: `url(${imageAnime})`,
                                width: '350px',
                                 height: '500px',
                                cursor: 'pointer'
                            }}
                            onClick={redireccionarPagina}
                        />
                        <Animated animationIn="flash" animationOut="fadeOut" isVisible={true} animationInDuration={Infinity}>
                            <div className='boton'>
                                <Button/>
                            </div>
                        </Animated>
                    </div>
                
                    <div className="card-container" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                        <Card

                                style={{
                                    backgroundImage: `url(${imagePanawood})`,
                                    width: '350px',
                                    height: '500px',
                                    cursor: 'pointer',
                                }}
                                onClick={redireccionarPagina}
                        />
                         <Animated animationIn="flash" animationOut="fadeOut" isVisible={true} animationInDuration={Infinity}>
                            <div className='boton'>
                                <Button/>
                            </div>
                        </Animated>
                    
                    </div>

                    <div className="card-container">
                   
                    </div>

                <div className="card-container">
                    
                </div>
            </div>

            
        </div>
    )
}
