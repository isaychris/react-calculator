import React from 'react';

// This is a class component which shows the users input
const Display = (props) => {
    return (
        <div className="display">
            <input type="text" value={props.action}/>
        </div>
    );
  }

export default Display;