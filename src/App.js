import React from 'react';
import './styles/app.css';
import { Fragment } from "react";
import Nav from './componets/nav/nav';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import Destination from './pages/destination';

function App() {
  return (
    <Fragment> 
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/destination" >
        <Destination />
      </Route>
    </Fragment>
  );
}

export default App;
