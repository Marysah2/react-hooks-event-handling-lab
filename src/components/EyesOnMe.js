// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    return ( <button onBlur={handleBlur} onFocus={handleFocus} >Eyes on me</button>)
  function handleFocus() {
    console.log("Good!");
  }

  function handleBlur() {
    console.log("Hey! Eyes on me!");
  }
}


export default EyesOnMe;