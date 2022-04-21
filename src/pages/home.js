import React from 'react';
import Content from '../componets/home/content';
import ExploreBtn from '../componets/home/exploreBtn';
import styles from '../styles/home.module.css';
const Home = () => {
   return(
         <div className={styles.home}>
               <Content />
               <ExploreBtn />
         </div>
   );
};

export default Home;