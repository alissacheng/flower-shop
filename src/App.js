import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Bouquet from './components/Bouquet';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <h1>Alissa's Flower Shop</h1>
        </header>
        <Bouquet/>
      </div>
    </Router>
  );
}

export default App;
