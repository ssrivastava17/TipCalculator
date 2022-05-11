//import logo from '../images/logo.svg';
import './wrapper.css';
import React, { useState } from 'react';
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

const Wrapper = () => {
  const [bill, setBill] = useState(0);
  const updateBill = (x) => {setBill(x); }
  const [tip, setTip] = useState(0);
  const updateTip = (x) => { setTip(x); }
  const [people, setPeople] = useState(1);
  const updatePeople= (x) => { setPeople(x) };
  const [custom, setCustom] = useState("");
  const updateCustom = ( x) => { setCustom(x)}
  

  const tipInfo ={
    bill: bill,
    setBill: updateBill,
    tip: tip,
    setTip: updateTip,
    people: people,
    setPeople: updatePeople,
    custom: custom,
    setCustom: updateCustom,
    setReset: function () {
        setBill(0);
        setTip(0);
        setPeople(1);
        setCustom("");
    }
  }

  return (
    <div className="wrapper">   
       
       <LeftSide className="half" tipInfo={tipInfo}/>
       <RightSide className="half" tipInfo={tipInfo}/>

        
    </div>  
  );
}

export default Wrapper; // name that it is exported as
