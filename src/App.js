import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
    </React.Fragment>
  );
}

export default App;
