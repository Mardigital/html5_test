import React from 'react';
import HeadContainer from './HeadContainer';
import Body from './Body';
import './Table.css';

const Table = props =>
  <table className={`table table_theme__${props.theme}`}>
    <HeadContainer
      sortField={props.sortField}
      arrowDown={props.arrowDown}/>
    <Body
      database={props.database}
      deleteUser={props.deleteUser}
      updateUser={props.updateUser}
      theme={props.theme}/>
  </table>

export default Table;
