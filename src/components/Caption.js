import React from 'react';
import './Caption.css';

const Caption = props =>
  <h1 className={`caption caption__theme_${props.theme}`}>List of participants</h1>

export default Caption;
