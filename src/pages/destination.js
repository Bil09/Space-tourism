import DestinationImage from '../componets/destination/destinationImage';
import DestinationInfo from '../componets/destination/destinationInfo';
import styles from '../styles/destination.module.css'
const Destination = () => {
   return(
      <div className={styles.destination}>
         <DestinationImage />
         <DestinationInfo />
      </div>
   );
};

export default Destination;