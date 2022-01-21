import React from 'react';
import {Animated} from "react-animated-css";

export const CardWorkComponent = () => {
    const imageAnime = 'img/anime-app-image.png';
    const imageNasa = 'img/nasa-image.png';
    const imagePanawood = 'img/panawood-image.png'

const evento = () => {
    console.log(evento)
}
    return (
        <div>
            <div className="container-work">

                <div>
                <Animated animationIn="flash" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 style={{textAlign:"center"}}>Proyectos</h1>
                    <p style={{textAlign:"center"}}>Algunos de los proyectos </p>
                </Animated>
                </div>

                    <div onMouseEnter={evento} className="card-container">
                            <img src={imageAnime} alt="" className="image animado encima" style={{width: "100%"}}/>
                                <div className="content-intern">
                                    <div className="content-hover">
                                        <h5 className='animate__animated animate__bounce animate__repeat-2'>Anime App</h5>
                                        <a href="https://leandro-xavier.github.io/anime-app-v/">ver proyecto</a>
                                    </div>
                                </div>
                        </div>
                 

                <div className="card-container">
                <Animated animationIn="bounce" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <img src={imagePanawood} alt="" className="image animado" style={{width: "100%"}}/>
                        <div className="content-intern">
                            <div className="content-hover">
                                <h5>Panawood</h5>
                                <a href="https://leandro-xavier.github.io/PanaWood/">ver proyecto</a>
                            </div>
                        </div>
</Animated>
            
                </div>

                <div className="card-container">
                    <img src={imageNasa} alt="" className="image animado" style={{width: "100%"}}/>
                        <div className="content-intern">
                            <div className="content-hover">
                                <h5>Nasa App</h5>
                                <a href="https://leandro-xavier.github.io/app-de-la-nasa/">ver proyecto</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
