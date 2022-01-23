import React from 'react';
import { AnimationWrapper } from 'react-hover-animation'
import './NavbarStyles.css';

export const Navbar = () => {


  return (
      <>
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className='checkbtn'><i className="fas fa-bars"></i></label>
            
            <a href="#" className='enlace'> DEVELOPER</a>

            <ul className='menu'>
                <li>
                    <AnimationWrapper>
                        <a href="#">Inicio</a>
                    </AnimationWrapper>
                </li>
                <li>
                    <AnimationWrapper>
                        <a href="#">Proyectos</a>
                    </AnimationWrapper>
                </li>
                <li>
                    <AnimationWrapper>
                        <a href="#">Habilidades</a>
                    </AnimationWrapper>
                </li>
               <li>
                   <AnimationWrapper>
                        <a href="#">Curriculum</a>
                   </AnimationWrapper>
               </li>
               <li>
                   <AnimationWrapper>
                        <a href="#">Contacto</a>
                   </AnimationWrapper>
               </li>
               
            </ul>
        </nav>
        </>
  )
};
