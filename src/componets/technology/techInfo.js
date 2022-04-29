import styles from '../../styles/technology.module.css';

const TechInfo = (props) => {
   console.log(props.techObj.name);
   return (
      <div className={styles.techInfo}>
         <div className={styles.subNav}>
            <span onClick={()=>{ props.techHandler('Launch vehicle') }}>1</span>
            <span onClick={()=>{ props.techHandler('Spaceport') }}>2</span>
            <span onClick={()=>{ props.techHandler('Space capsule') }}>3</span>
         </div>
         <div className={styles.info}>
            <p>THE TERMINOLOGY...</p>
            <h3>{props.techObj.name}</h3>
            <p>{props.techObj.description}</p>
         </div>
      </div>
   );
};

export default TechInfo;