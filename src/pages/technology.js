import React from "react";
import styles from '../styles/technology.module.css';
import TechImage from "../componets/technology/techImage";
import TechInfo from "../componets/technology/techInfo";

const Technology = () => {
   return (
      <div className={styles.technology}>
         <TechImage />
         <TechInfo />
      </div>
   );
}

export default Technology;