import React from 'react';

export const CardAboutComponent = () => {
    return (
        <div className="container-about">
            <div className='text'>
            <h1  data-aos="zoom-out-down">Acerca de mi </h1>
            <p  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Soy un ingeniero mecatrónico que le gusta las tecnologias web, programar y desarrollar nuevos proyectos </p>
            </div>
            <div>
                <div className="technologies">
                <h2 className="h2">developers tools</h2>
                    <ul className="ul">
                        <li><img src="/img/react-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li><img src="/img/bootstrap-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li><img src="/img/sass-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li><img src="/img/html5-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li><img src="/img/js-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li><img src="/img/css3-brands.svg" alt="" style={{width:"50px"}}/></li>
                 
                    </ul>
                </div>

                <div className="social">
                <h2 className="h2">social networks</h2>
                    <ul className="ul">
                        <li className="li"><img src="/img/linkedin-brands.svg" alt="" style={{width:"50px"}}/></li>
                        <li className="li"><a href="https://github.com/leandro-xavier"><img src="/img/github-brands.svg" alt="" style={{width:"50px"}}/></a></li> 
                                    
                    </ul>
                </div>
            </div>
        </div>
    )
}
