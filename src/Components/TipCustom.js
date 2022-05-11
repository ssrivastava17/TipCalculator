import './tipCustom.css';
import React from 'react';

const TipCustom = (props) => {
    const tipInfo = props.tipInfo;
    // const value = props.tipInfo.tip;
    // const callBack = props.callBack;

    return (
        <input  type="text" 
                placeholder="Custom" 
                value = {tipInfo.custom}
                onChange={(e) => {
                    tipInfo.setTip(e.target.value);
                    tipInfo.setCustom(e.target.value);
                }}
          />

    );
  }
  
  export default TipCustom; // name that it is exported as