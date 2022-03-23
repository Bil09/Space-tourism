import React from 'react';
import '../../styles/nav.css';

const Nav = () => {
   return(
      <nav className='nav'>
         <div className='nav-logo'>
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
               <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
            </g>
         </svg>
         </div>
         <div className='nav-menu'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
               <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
               </g>
            </svg>
         </div>
      </nav>
   );
}

export default Nav;