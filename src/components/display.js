import React from 'react';

// testing functional component
const Display = (props) => {
    return (
        <div className="display">
            <input type="text" value={props.action}/>
        </div>
    );
  }

export default Display;