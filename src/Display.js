import React from 'react';
import './App.css'

const Display = (props) => (
    <div className="calc-display">
        {props.value}
    </div>
);

export default Display;