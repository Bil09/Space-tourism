import React from 'react';
import '../styles/App.css';
import Header from './header';
import SectionOne from './section-one';
import SectionTwo from './section-two';
import bg_d from '../img/home/bg-desktop.jpg';

function App() {
  return (
    <div className='home'
      style={{ backgroundImage: `url(${bg_d})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
      }}>
      <Header />
      <div className='split'>
        <SectionOne />
        <SectionTwo />
      </div>
      
    </div>
  );
}

export default App;
