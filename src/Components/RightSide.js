import './rightSide.css';
import React from 'react';
import OutputScreens from './OutputScreens';
import Reset from './Reset';

const RightSide = (props) => {
  const tipInfo = props.tipInfo;
  const myTip = (tipInfo.bill * (tipInfo.tip / 100)) / tipInfo.people;
  const myBill = (tipInfo.bill / tipInfo.people) + myTip;


  return (
    <div className="RightSide">   
        {console.log(myTip)}
        {console.log(myBill)}
        <OutputScreens labelText="Tip Amount" amount={myTip}/>
        <OutputScreens labelText="Total" amount={myBill}/>
        <Reset tipInfo={tipInfo}/>
    </div>  
  );
}

export default RightSide;