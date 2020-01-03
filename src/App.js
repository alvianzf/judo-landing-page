import React from 'react';
import logo from './img/pjsi.gif';
import './App.css';

// import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import IntroCard from './components/IntroCard'

function App() {
  return (
    <div className="apps">
      {/* <Navbar /> */}
      <Jumbotron logo={ logo }/>

      <div className="container-fluid body">
        <IntroCard />
      </div>
    </div>
  );
}

export default App;
