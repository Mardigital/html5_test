import React from 'react';
import FormContainer from '../FormContainer';
import icon_edit from '../../img/icon-edit.svg';
import icon_delete from '../../img/icon-delete.svg';

const Row = props => {
  if (!props.correction) {
    return (
      <tr className='row__border_top'>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td className='td__icons'>
          <img
          className='icon__edit'
          src={icon_edit}
          onClick={props.toggleCorrection}
          alt='Edit icon'/>
          <img
          src={icon_delete}
          onClick={props.deleteUser}
          alt='Delete icon'/>
        </td>
      </tr>
    )};

  if (props.correction) {
    return (
      <tr>
        <td colSpan='4' className='td__edit_on'>
          <FormContainer
            mode='upd'
            theme={props.theme}
            id={props.id}
            name={props.name}
            email={props.email}
            phone={props.phone}
            updateUser={props.updateUser}
            toggleCorrection={props.toggleCorrection}/>
        </td>
      </tr>
    )};
}

export default Row;
