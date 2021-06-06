import React from 'react';
import { hot } from 'react-hot-loader';
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router> 
    </>
  );
}

export default hot(module)(App);
