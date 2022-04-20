import React from "react";
import styles from '../../styles/layout.module.css';
import Nav from "./nav";

const Layout = ({children}) => {
   return(
      <div className={styles.layout}>
         <Nav />
         {children}
      </div>
   );
}

export default Layout;
