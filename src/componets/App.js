import React from 'react';
import '../styles/app.css';
import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import Destination from '../pages/destination';
import Crew from '../pages/crew';
import Technology from '../pages/technology';

function App() {
  return (
    <Fragment> 
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/destination" >
        <Destination />
      </Route>
      <Route exact path="/crew" >
        <Crew />
      </Route>
      <Route exact path="/technology" >
        <Technology />
      </Route>
    </Fragment>
  );
}

export default App;
