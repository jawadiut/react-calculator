import React from 'react';
import Button from './Button';
import './App.css';

const numbers = (props) => {
    const numbersArray = [...Array(9).keys()].map(x => ++x);

    return (
        <div className="calc-numbers">
            {numbersArray.map((val, idx) => (
                <Button key={idx}
                        value={val}
                        bgColor="white"
                        color="black"
                        fontSize="25px"
                        height="70px"
                        clicked={props.clicked}/>
            ))}
        </div>
    );
}

export default numbers;