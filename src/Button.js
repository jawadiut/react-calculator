import React from 'react';
import './App.css';

const button = (props) => {
    const style = {
        color: props.color,
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height,
        textAlign: 'center',
        fontSize: props.fontSize,
        border: '1px solid #999',
    };

    return (
        <button className={props.className} style={style} onClick={() => props.clicked(props.value)}>
            {props.value}
        </button>
    );
};

export default button;