// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleInput() {
        console.log("Entering password...");
    }
    return (
        <div onChange={handleInput}>
            <input 
            name="password"
            type="password" 
            placeholder="Enter your Password"            
            />
        </div>
    )
}

export default Keypad;