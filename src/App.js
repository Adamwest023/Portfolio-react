import React from 'react';
import { Route,} from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'


import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
    </>
  );
}

export default App;
