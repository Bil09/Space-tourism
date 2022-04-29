import React from "react";
import styles from '../../styles/layout.module.css';
import Nav from "./nav";

const Layout = ({children, bgClass, pageNum, pageTitle, active}) => {
   return(
      <div className={`${styles.layout} ${styles[bgClass]}`} >
         <Nav linkActive={active} />
         {pageTitle && <h5 className={styles.title}><strong>{pageNum}</strong> {pageTitle}</h5>}
         {children}
      </div>
   );
}

export default Layout;
