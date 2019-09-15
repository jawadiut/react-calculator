import React from 'react';
import Button from './Button';
import './App.css';

const clearButton = (props) => (
    <Button className="clear-div"
            value="clear"
            bgColor="white"
            color="black"
            fontSize="20px"
            height="70px"/>
);

export default clearButton;