import './leftSide.css';
import React from 'react';
import InputScreens from './InputScreens';
import Tip from './Tip';
import TipCustom from './TipCustom';
import person from '../images/icon-person.svg';
import dollar from '../images/icon-dollar.svg';

const LeftSide = (props) => {
  const tipInfo = props.tipInfo;
  const setBill = props.tipInfo.setBill;
  const setPeople = props.tipInfo.setPeople;
  const setTip = props.tipInfo.setTip;

  return (
    <div className="LeftSide">   
       
       <InputScreens icon={dollar} labelText="Bill" callBack={setBill} value={tipInfo.bill} />
        <br/>
       Select Tip %
       <div className="row">
        <Tip amount={5} tipInfo={tipInfo}/>  {/* Passing down tipInfo to elements to change */}
        <Tip amount={10} tipInfo={tipInfo}/>
        <Tip amount={15} tipInfo={tipInfo}/>   
       </div>
       
       <div className="row">
        <Tip amount={25} tipInfo={tipInfo}/>
        <Tip amount={50} tipInfo={tipInfo}/>
        <TipCustom tipInfo={tipInfo} callBack={setTip} />   
       </div>
       <br/>
       <InputScreens icon={person} labelText="Number of People" callBack={setPeople} value={tipInfo.people} required/>
    </div>  
  );
}

export default LeftSide; 