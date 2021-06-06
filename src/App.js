import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'; 
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/testimonial' exact component={Testimonial} />
        </Switch>
        <Footer />
      </Router> 
    </>
  );
}

export default App;
