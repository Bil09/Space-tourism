import styles from '../../styles/destination.module.css';

const DestinationInfo = (props) => {

   const data = props.dataObj;
   //func

   return(
      <div className={styles.destinationInfo}>
         <nav className={styles.subNav}>
            <ul>
               <li onClick={()=>{props.planetChanger('Moon')}} data-val='Moon'>MOON</li>
               <li onClick={()=>{props.planetChanger('Mars')}}>MARS</li>
               <li onClick={()=>{props.planetChanger('Europa')}}>EUROPA</li>
               <li onClick={()=>{props.planetChanger('Titan')}}>TITAN</li>
            </ul>
         </nav>
         <h5>{data.name}</h5>
         <p className={styles.desc}>{data.description}</p>
         <hr />
         <div className={styles.extraInfo}>
            <div className={styles.extraInfo_div}>
               <p>AVG. DISTANCE</p>
               <h6>{data.distance}</h6>
            </div>
            <div className={styles.extraInfo_div}>
               <p>EST. TRAVEL TIME</p>
               <h6>{data.travel}</h6>
            </div>
         </div>
      
      </div>
   );
}

export default DestinationInfo;