import './tip.css';
import React from 'react';

const Tip = (props) => {
  const tipInfo = props.tipInfo;

  return (
    <button className="tip" onClick={() => {
      tipInfo.setTip(props.amount);
      tipInfo.setCustom("");
      }}> 
      {props.amount}%
      
    </button>  
  );
}
  
  export default Tip; // name that it is exported as