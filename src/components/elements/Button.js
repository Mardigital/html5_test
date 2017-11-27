import React from 'react';
import './Button.css';

const Button = props =>
  props.reset ?
    <button className={`btn btn__theme_${props.theme}_secondary btn__margin_right`} type={props.type} onClick={props.reset}>{props.name}</button> :
  props.edit ?
    <button className={`btn btn__theme_${props.theme}_primary`} type={props.type} onClick={props.edit}>{props.name}</button> :
    <button className={`btn btn__theme_${props.theme}`} type={props.type} onClick={props.create}>{props.name}</button>

export default Button;
