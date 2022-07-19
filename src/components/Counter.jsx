import React, { Component, useState } from 'react';

function LmdSaveField(){
   const [lmdValue, lmdSetValue] = useState('');
    const lmdHandleSubmit = (event) =>{
        event.preventDefault();
        
    }
    const LmdShowValue = () =>{
        <p>{lmdValue}</p>
    }
    return(
        <React.Fragment>
            <form onSubmit={lmdHandleSubmit}>
                <label>Add Text Here</label>
                <input type="text" value={lmdValue} onChange={(e) => lmdSetValue(e.target.value)}/>
                <input type="submit" />
            </form>
        </React.Fragment>
    )
}

export default LmdSaveField;