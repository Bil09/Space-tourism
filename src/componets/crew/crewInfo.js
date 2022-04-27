import styles from '../../styles/crew.module.css';

const CrewInfo = (props) => {
   const data = props.crewObj;
   const name = data.name;

   return (
      <div className={styles.crewInfo}>
         <h4>{data.role}</h4>
         <h3>{data.name}</h3>
         <p>{data.bio}</p>
         <nav className={styles.subNav}>
            <span className={name === 'Douglas Hurley' ? styles.dot_active : styles.dot} onClick={()=>{props.crewHandler('Douglas Hurley')}} ></span>
            <span className={name === 'Mark Shuttleworth' ? styles.dot_active : styles.dot} onClick={()=>{props.crewHandler('Mark Shuttleworth')}} ></span>
            <span className={name === 'Victor Glover' ? styles.dot_active : styles.dot} onClick={()=>{props.crewHandler('Victor Glover')}} ></span>
            <span className={name === 'Anousheh Ansari' ? styles.dot_active : styles.dot} onClick={()=>{props.crewHandler('Anousheh Ansari')}} ></span>
         </nav>
      </div>
   );
};

export default CrewInfo;