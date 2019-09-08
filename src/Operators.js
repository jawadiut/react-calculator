import React, {Fragment} from 'react';
import Button from './Button';
import './App.css';

const operators = (props) => (
    <Fragment>
        <Button className="calc-operator" value="÷" bgColor="red" color="white" fontSize="25px" height="70px" clicked={props.clicked}/>
        <Button className="calc-operator" value="-" bgColor="red" color="white" fontSize="25px" height="70px" clicked={props.clicked}/>
        <Button className="calc-operator" value="+" bgColor="red" color="white" fontSize="25px" height="70px" clicked={props.clicked}/>
        <Button className="calc-operator" value="=" bgColor="red" color="white" fontSize="25px" height="70px" clicked={props.clicked}/>
    </Fragment>
);

export default operators;