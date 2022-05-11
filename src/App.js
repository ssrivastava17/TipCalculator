import logo from './images/logo.svg';
import './App.css';
import React from 'react';
import Wrapper from './Components/Wrapper';
import InputScreens from './Components/InputScreens';
import Tip from './Components/Tip';


const App = () => {
  return (
    <div className="App" > 
    
      <img src={logo} className="App-logo" alt="logo" />
      <Wrapper/>
    </div>  
  );
}

export default App;
