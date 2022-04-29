import styles from '../../styles/technology.module.css';
import t1 from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import t2 from '../../assets/technology/image-spaceport-portrait.jpg';
import t3 from '../../assets/technology/image-space-capsule-portrait.jpg';


const TechImage = (props) => {
   const renderSwitch = (val = props.tech) => {
      switch (val) {
         case 'Launch vehicle':
            return <img src={t1} alt='space tech' />;
         case 'Spaceport':
            return<img src={t2} alt='space tech' />;
         case 'Space capsule':
            return <img src={t3} alt='space tech' />;
      
         default:
            return <img src={t1} alt='space tech' />;
      }
   };

   return (
      <div className={styles.techImage}>
         {renderSwitch()}
      </div>
   );
};

export default TechImage;