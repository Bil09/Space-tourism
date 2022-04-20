import styles from '../../styles/nav.module.css';
import { NavLink } from 'react-router-dom';
const NavLinks = ({style}) => {
   return(
      <div className={styles.nav_links}>
         <NavLink className={style} to='/'><strong>00</strong> HOME</NavLink>
         <NavLink className={style} to='/destination'><strong>01</strong> DESTINATION</NavLink>
         <NavLink className={style} to='/crew'><strong>02</strong> CREW</NavLink>
         <NavLink className={style} to='/technology'><strong>03</strong> TECHNOLOGY</NavLink>
      </div>
   );
}
export default NavLinks;