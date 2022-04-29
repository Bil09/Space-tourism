import React, { useEffect, useState } from "react";
import styles from '../styles/crew.module.css';
import CrewImage from "../componets/crew/crewImage";
import CrewInfo from "../componets/crew/crewInfo";
import data from '../data.json';

const Crew = () => {
   
 //useState
   const [member, setMember] = useState("");
   const [crewInfo, setCrewInfo] = useState({});

 //useEffect
   useEffect(()=>{
      setCrewInfo(getData(member));
   }, [member]);

 //func
   const crewHandler = (person) => {
      setMember(person);
   };

   const getData = (val) => {
      switch (val) {
         case 'Douglas Hurley':  
            return data.crew[0];
         case 'Mark Shuttleworth':  
            return data.crew[1];
         case 'Victor Glover':  
            return data.crew[2];
         case 'Anousheh Ansari':  
            return data.crew[3];
      
         default:
            return data.crew[0];
      }
   };

   return (
      <div className={styles.crew}>
         <CrewImage crewMember={member} />
         <CrewInfo crewHandler={crewHandler} crewObj={crewInfo} />
      </div>
   );
}

export default Crew;