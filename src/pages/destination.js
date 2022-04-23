import DestinationImage from '../componets/destination/destinationImage';
import DestinationInfo from '../componets/destination/destinationInfo';
import styles from '../styles/destination.module.css'
const Destination = () => {
   return(
      <div className={styles.destination}>
         <h4><strong>01</strong> PICK YOUR DESTINATION</h4>
         <DestinationImage />
         <DestinationInfo />
      </div>
   );
};

export default Destination;