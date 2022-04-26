import React from "react";
import styles from '../styles/crew.module.css';
import CrewImage from "../componets/crew/crewImage";
import CrewInfo from "../componets/crew/crewInfo";

const Crew = () => {
   return (
      <div className={styles.crew}>
         <CrewImage />
         <CrewInfo />
      </div>
   );
}

export default Crew;