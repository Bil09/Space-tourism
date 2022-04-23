import styles from '../../styles/destination.module.css';

const DestinationInfo = () => {
   return(
      <div className={styles.destinationInfo}>
         <nav className={styles.subNav}>
            <ul>
               <li>PLANET</li>
               <li>PLANET</li>
               <li>PLANET</li>
               <li>PLANET</li>
            </ul>
         </nav>
         <h5>Moon</h5>
         <p className={styles.desc}>See our planet as you’ve never seen it before. 
            A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and
            Apollo 11 landing sites.
         </p>
         <hr />
         <div className={styles.extraInfo}>
            <p>AVG. DISTANCE</p>
            <h6>354,277KM</h6>
            <p>AVG. DISTANCE</p>
            <h6>354,277KM</h6>
         </div>
      
      </div>
   );
}

export default DestinationInfo;