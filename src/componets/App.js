import React from 'react';
import '../styles/app.css';
import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Layout from './layout/layout';
import Home from '../pages/home';
import Destination from '../pages/destination';
import Crew from '../pages/crew';
import Technology from '../pages/technology';

function App() {


  return (
    <Fragment> 
      <Route exact path="/">
        <Layout bgClass='homeBg'>
          <Home />
        </Layout>
      </Route>
      <Route exact path="/destination" >
        <Layout bgClass='destinationBg'>
          <Destination />
        </Layout>
      </Route>
      <Route exact path="/crew" >
        <Layout bgClass='crewBg'>
          <Crew />
        </Layout>
      </Route>
      <Route exact path="/technology" >
      <Layout bgClass='technologyBg'>
        <Technology />
      </Layout>  
      </Route>
    </Fragment>
  );
}

export default App;
