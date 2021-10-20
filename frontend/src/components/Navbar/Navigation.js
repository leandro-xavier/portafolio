
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import {DarkModeToggle} from '../darkmode/DarkModeToggle';

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
          Leandro-xavier
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">Leandro Mariscal</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">Curriculum</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a className="a" href="/">BLOG</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="/">Redes</a>
          </li>
       
        </ul>
      </div>
      <ul className="signin-up">
        <DarkModeToggle/>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
         <FontAwesomeIcon icon={faXRay} />
        ) : (
            <FontAwesomeIcon icon={faXRay} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
