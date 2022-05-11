import "./inputScreens.css";
import React from 'react';

const InputScreens = (props) => {
  const tipInfo = props.tipInfo;
  const labelText = props.labelText;
  const callBack = props.callBack;
  const value = props.value;

  return (
      
      <div className="inputScreens"> 
        <label>  {props.labelText}</label>
        <div className="myInput">
          <img src={props.icon}/>
          <input  type="number" 
                    placeholder="0"
                    value = {value} // will change/re-render if bill changes
                    // name = "myMoney"
                    // onChange= {myFunction(labelText, tipInfo, e)}
                    // {(e) => infoTip.setBill(e.target.value)}
                    onChange = {(e) => callBack(e.target.value)}
          />
        </div>
      </div>  
    );
  }
  
  // function myFunction(labelText, tipInfo, e){
  //   if(labelText == "Bill"){
  //     tipInfo.setBill(e.target.value);
  //   }
  //   else{
  //     tipInfo.setPeople(e.target.value);
  //   }
  // }


  export default InputScreens; // name that it is exported as