import React, {useContext} from 'react';
import './App.css';
import AppContext from './AppContext';

const Button = (props) => {
    const clickHandler = useContext(AppContext);

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
        <button className={props.className} style={style} onClick={() => clickHandler(props.value)}>
            {props.value}
        </button>
    );
};

export default Button;