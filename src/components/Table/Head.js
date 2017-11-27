import React from 'react';
import './Head.css';

const Head = props =>
  props.image ? <th data-table={props.field}>{props.field} <img src={props.image} alt='Arrow icon'/></th> :
                <th data-table={props.field}>{props.field}</th>

export default Head;
