import React from 'react';
import RowContainer from './RowContainer';

const Body = props =>
  <tbody>
    {props.database.map(item =>
      <RowContainer
      id={item.id}
      key={item.id}
      name={item.name}
      email={item.email}
      phone={item.phone}
      deleteUser={props.deleteUser}
      updateUser={props.updateUser}
      theme={props.theme}/>
    )}
  </tbody>

export default Body;
