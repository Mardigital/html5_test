import React from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import './Form.css';


const Form = props =>
  <form
  className={`form form__theme_${props.theme} ${props.mode === 'upd' ? 'row__border_top' : ''}`}
  onSubmit={props.handleSubmit}
  onChange={props.handleChange}>
    <Input
      type='text'
      name='name'
      placeholder='Full name'
      maxlength='50'
      value={props.name}
      className={`input input__theme_${props.theme} ` + (props.checked ? props.getClassName('name') : '')}/>
    <Input
      type='text'
      name='email'
      placeholder='E-mail address'
      maxlength='50'
      value={props.email}
      className={`input input__theme_${props.theme} ` + (props.checked ? props.getClassName('email') : '')}/>
    <Input
      type='text'
      name='phone'
      placeholder='Phone number'
      maxlength='10'
      value={props.phone}
      className={`input input__theme_{props.theme} ` + (props.checked ? props.getClassName('phone') : '')}/>

    {props.mode === 'reg' &&
      <Button
        type='submit'
        name='Add new'
        theme={props.theme}
        create={props.setCheckedTrue}/>}

    {props.mode === 'upd' &&
      <span className='btn_container'>
        <Button
          type='reset'
          name='Cancel'
          theme={props.theme}
          reset={props.toggleCorrection}/>
        <Button
          type='submit'
          name='Save'
          theme={props.theme}
          edit={props.setCheckedTrue}/>
      </span>}
  </form>

export default Form;
