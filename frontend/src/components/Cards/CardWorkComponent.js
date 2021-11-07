import React from 'react';

export const CardWorkComponent = () => {
    const imageAnime = 'img/anime-app-image.png';
    const imageNasa = 'img/nasa-image.png';
    const imagePanawood = 'img/panawood-image.png'
    return (
        <div>
            <div className="container-work">

                <div>
                    <h1>Works</h1>
                    <p>All proyects create for my portfolio</p>
                </div>

                <div className="card-container">
                    <img src={imageAnime} alt="" className="image" style={{width: "100%"}}/>
                        <div className="content-intern">
                            <div className="content-hover">
                                <h5>Anime App</h5>
                                <a href="https://leandro-xavier.github.io/anime-app-v/">ver proyecto</a>
                            </div>
                        </div>
                </div>

                <div className="card-container">
                    <img src={imagePanawood} alt="" className="image" style={{width: "100%"}}/>
                        <div className="content-intern">
                            <div className="content-hover">
                                <h5>Panawood</h5>
                                <a href="https://leandro-xavier.github.io/PanaWood/">ver proyecto</a>
                            </div>
                        </div>
                </div>

                <div className="card-container">
                    <img src={imageNasa} alt="" className="image" style={{width: "100%"}}/>
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
