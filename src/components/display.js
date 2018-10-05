import React from 'react';

// This is a class component which shows the users input
const Display = (props) => {
    return (
        <div className="display">
            <input type="text" value={props.input} onChange={(e) => props.handleChange(e) }/>
        </div>
    );
  }

export default Display;