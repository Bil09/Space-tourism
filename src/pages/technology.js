import React, { useState, useEffect } from "react";
import styles from '../styles/technology.module.css';
import TechImage from "../componets/technology/techImage";
import TechInfo from "../componets/technology/techInfo";
import data from '../data.json';
const Technology = () => {
      
 //useState
 const [tech, setTech] = useState('');
 const [techInfo, setTechInfo] = useState({});

//useEffect
 useEffect(()=>{
    setTechInfo(getData(tech));
 }, [tech]);

//func
 const techHandler = (technology) => {
    setTech(technology);
 };

 const getData = (val) => {
    switch (val) {
       case 'Launch vehicle':  
          return data.technology[0];
       case 'Spaceport':  
          return data.technology[1];
       case 'Space capsule':  
          return data.technology[2];
       default:
          return data.technology[0];
    }
 };
   return (
      <div className={styles.technology}>
         <TechImage tech={tech} />
         <TechInfo techHandler={techHandler} techObj={techInfo} />
      </div>
   );
}

export default Technology;