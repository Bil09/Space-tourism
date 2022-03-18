import React from "react";
import logo from '../img/home/logo.svg';
import '../styles/header.css';

const Header = () => {
   return (
      <header>
         <nav>
            <img src={`${logo}`} />
            <ul>
               <li><em>00</em>HOME</li>
               <li><em>01</em>DESTINATION</li>
               <li><em>02</em>CREW</li>
               <li><em>03</em>TECHNOLOGY</li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;