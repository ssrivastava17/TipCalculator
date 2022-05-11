import "./outputScreens.css";
import React from 'react';

const OutputScreens = (props) => {
  // const tipInfo = props.tipInfo;
  // const totalBill = tipInfo.bill + tipInfo.bill * tipInfo.tip / 100;
  // const myBill = tipInfo.totalBill / tipInfo.people;
  // let myText = "0.00";
  const myAmount = parseFloat(props.amount).toFixed(2);

    return (
      
      <div className="outputScreens"> 
        
            <div className="title">
                <label>{props.labelText}</label>
                / person
            </div>
            <div className="myOutput">
                <output name="calculation" >${myAmount}</output>
            </div>
      </div>
      
    );
  }
  
  export default OutputScreens; // name that it is exported as