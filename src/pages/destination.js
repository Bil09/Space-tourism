import DestinationImage from '../componets/destination/destinationImage';
import DestinationInfo from '../componets/destination/destinationInfo';
import styles from '../styles/destination.module.css'
import data from '../data.json';
import { useEffect, useState } from 'react';

const Destination = () => {

 //useState
   const [planet, setPlanet] = useState('Moon');
   const [planetInfo, setPlanetInfo] = useState({});

 //useEffect
 useEffect(()=>{
    setPlanetInfo(getData(planet));
 }, [planet])

 //function
   const planetHandler = (currentPlanet) => {
      console.log(currentPlanet);
      setPlanet(currentPlanet);
   };
 
   const getData = (val) => {
      switch (val) {
         case 'Moon':  
            return data.destinations[0];
         case 'Mars':  
            return data.destinations[1];
         case 'Europa':  
            return data.destinations[2];
         case 'Titan':  
            return data.destinations[3];
      
         default:
            return data.destinations[0];
      }
   };

  //render 
   return(
      <div className={styles.destination}>
         <DestinationImage planet={planet} />
         <DestinationInfo  planetChanger={planetHandler}  dataObj={planetInfo} />
      </div>
   );
};

export default Destination;