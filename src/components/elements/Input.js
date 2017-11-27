import React from 'react';
import './Input.css';

export const Input = props =>
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    placeholder={props.placeholder}
    autoComplete='off'
    maxLength={props.maxlength}
    className={props.className}/>

export default Input;
