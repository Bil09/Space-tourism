import styles from '../../styles/destination.module.css';
import moon from '../../assets/destination/image-moon.webp';
const DestinationImage = () => {
   return(
      <div className={styles.destinationImage}>
         <img src={moon} alt='moon'></img>
      </div>
   );
}

export default DestinationImage;