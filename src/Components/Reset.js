import './reset.css';
import React from 'react';


const Reset = (props) => {
  return (
    // <div className="reset">
        <button className="resetButt" type="button"
          onClick = {() =>{props.tipInfo.setReset(); } }
        >
          RESET
        </button>
    // {/* </div> */}
    
   
  );
}

export default Reset;