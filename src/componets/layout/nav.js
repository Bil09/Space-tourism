import React, { useState } from 'react';
import styles from '../../styles/nav.module.css';
import logo from '../../assets/shared/logo.svg';
import i_close from '../../assets/shared/icon-close.svg';
import i_hamburger from '../../assets/shared/icon-hamburger.svg';
import { NavLink } from 'react-router-dom';
import NavLinks from './navLinks';

const Nav = () => {
   const [isShowing, setIsShowing] = useState(false);
   const clickHandler = () => {
      setIsShowing(!isShowing);
   };

   return(
      <nav className={styles.nav}>
         <div className={styles.logo_container}>
            <img src={logo} alt='' className={styles.logo} />
            <hr />   
         </div>
         <div className={isShowing ? styles.nav_expanded : styles.nav_button} onClick={clickHandler}>
            <img src={!isShowing ? i_hamburger : i_close} className={styles.icon_img} />
            {isShowing &&  <NavLink className={styles.nav_link} to='/'><strong>00</strong> HOME</NavLink>}
            {isShowing &&  <NavLink className={styles.nav_link} to='/destination'><strong>01</strong> DESTINATION</NavLink>}
            {isShowing &&  <NavLink className={styles.nav_link} to='/crew'><strong>02</strong> CREW</NavLink>}
            {isShowing &&  <NavLink className={styles.nav_link} to='/technology'><strong>03</strong> TECHNOLOGY</NavLink>}
         </div>
         <NavLinks style={styles.nav_link}/>
      </nav>
   );
}

export default Nav;