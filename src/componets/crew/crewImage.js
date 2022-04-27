import styles from '../../styles/crew.module.css';
import p4 from '../../assets/crew/image-anousheh-ansari.webp';
import p1 from '../../assets/crew/image-douglas-hurley.webp';
import p2 from '../../assets/crew/image-mark-shuttleworth.webp';
import p3 from '../../assets/crew/image-victor-glover.webp';

const CrewImage = (props) => {

   const renderSwitch = (val = props.crewMember) => {
      switch (val) {
         case 'Douglas Hurley':
            return <img src={p1} alt='crew member' />;
         case 'Mark Shuttleworth':
            return<img src={p2} alt='crew member' />;
         case 'Victor Glover':
            return <img src={p3} alt='crew member' />;
         case 'Anousheh Ansari':
            return <img src={p4} alt='crew member' />;
      
         default:
            return <img src={p1} alt='crew member' />;
      }
   };

   return (
      <div className={styles.crewImage}>
         {renderSwitch()}
      </div>
   );
};

export default CrewImage;