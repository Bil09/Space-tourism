import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../componets/home/content';
import ExploreBtn from '../componets/home/exploreBtn';
import styles from '../styles/home.module.css';
const Home = () => {
   return(
         <div className={styles.home}>
               <Content />
               <Link to='/destination'>
                  <ExploreBtn />  
               </Link>
               
         </div>
   );
};

export default Home;