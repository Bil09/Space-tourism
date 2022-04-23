import React from "react";
import styles from '../../styles/layout.module.css';
import Nav from "./nav";

const Layout = ({children, bgClass}) => {
   return(
      <div className={`${styles.layout} ${styles[bgClass]}`} >
         <Nav />
         {children}
      </div>
   );
}

export default Layout;
