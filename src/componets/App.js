import React from 'react';
import '../styles/app.css';
import Content from './home/content';
import ExploreBtn from './home/exploreBtn';
import Nav from './nav/nav';

function App() {
  return (
    <div className='home'>
      
     <Nav />
      <Content />
      <ExploreBtn />
    </div>
  );
}

export default App;
