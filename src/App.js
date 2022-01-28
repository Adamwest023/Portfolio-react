import React from 'react';
import { Route,} from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'


import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Success from './pages/Success'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
      <Route path='/success' component={Success} />
    </>
  );
}

export default App;
