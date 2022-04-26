import styles from '../../styles/destination.module.css';
import moon from '../../assets/destination/image-moon.webp';
import mars from '../../assets/destination/image-mars.webp';
import europa from '../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';

const DestinationImage = (props) => {

   const renderSwitch = (val = props.planet) => {
      switch (val) {
         case 'Moon':
            return <img src={moon} alt='destination planet' />;
         case 'Mars':
            return <img src={mars} alt='destination planet' />;
         case 'Europa':
            return<img src={europa} alt='destination planet' />;
         case 'Titan':
            return <img src={titan} alt='destination planet' />;
      
         default:
            return <img src={moon} alt='default planet' />;
      }
   };

   return(
      <div className={styles.destinationImage}>
         {renderSwitch()}
      </div>
   );
}

export default DestinationImage;