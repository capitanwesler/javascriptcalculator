import React from 'react';
import './square.css';


function Square(props) {
    //This hook only return the square what we need to 
    // each button
    return(
        <button 
            className={props.classButton} 
            onClick={props.onClick}
            id={`number-${props.buttonValue}`}
            value={props.buttonValue}
        >
            {props.buttonValue}
        </button>
    );
}

export default Square;