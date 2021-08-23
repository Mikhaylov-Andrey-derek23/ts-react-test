import React, { FC } from 'react';

import {Switch, BrowserRouter, Route} from 'react-router-dom';

import { Navbar } from './components';

import Todo from './pages/Todo';
import About from './pages/About';


import './App.css';


const App: FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Todo} path="/" exact/>
        <Route component={About} path="/about"/>          
      </Switch>
    </BrowserRouter>
  )
}

export default App;
