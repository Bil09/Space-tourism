import styles from '../../styles/technology.module.css';
import t1_s from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import t1_m from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import t2_s from '../../assets/technology/image-space-capsule-landscape.jpg';
import t2_m from '../../assets/technology/image-space-capsule-portrait.jpg';
import t3_s from '../../assets/technology/image-spaceport-landscape.jpg';
import t3_m from '../../assets/technology/image-spaceport-portrait.jpg';


const TechImage = (props) => {
   const renderSwitch = (val = props.tech) => {
      switch (val) {
         case 'Launch vehicle':
            return (
               <picture>
                  <source media="screen and (max-width: 1018px)" srcSet={t1_s} />
                  <img src={t1_m} alt='space technology' className={styles.img_res} />
               </picture>
            );
         case 'Spaceport':
            return (
               <picture>
                  <source media="screen and (max-width: 1018px)" srcSet={t2_s} />
                  <img src={t2_m} alt='space technology' className={styles.img_res} />
               </picture>
            );
         case 'Space capsule':
            return (
               <picture>
                  <source media="screen and (max-width: 1018px)" srcSet={t3_s} />
                  <img src={t3_m} alt='space technology' className={styles.img_res} />
               </picture>
            );
      
         default:
            return (
               <picture>
                  <source media="screen and (max-width: 1018px)" srcSet={t1_s} />
                  <img src={t1_m} alt='space technology' className={styles.img_res} />
               </picture>
            );
      }
   };

   return (
      <div className={styles.techImage}>
         {renderSwitch()}
      </div>
   );
};

export default TechImage;