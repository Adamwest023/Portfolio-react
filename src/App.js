import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'


import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <CssBaseline />
    <Home />
    </>
    // <Router>
    //   <div>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path='/' component={Home}/>
    //   </Switch>
    //   <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
