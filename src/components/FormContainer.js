import React, { Component } from 'react';
import Form from './Form';
import _common from './common.js';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      nameValid: false,
      phoneValid: false,
      emailValid: false,
      checked: false
    }
    this.defaultState = _common.copy(this.state);
  }

  componentDidMount() {
    this.props.mode === 'upd' &&
    this.setState({
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      nameValid: true,
      phoneValid: true,
      emailValid: true
    })
  }

  cleanState() {
    this.setState(this.defaultState);
  }

  formValid() {
      return this.state.nameValid && this.state.phoneValid && this.state.emailValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    const mode = this.props.mode;

    if (this.formValid()) {
      switch(mode) {
        case 'upd':
          this.props.updateUser(this.props.id, {
            name: _common.capitalize(this.state.name),
            email: this.state.email,
            phone: this.state.phone
          });
          this.props.toggleCorrection();
          break;

        default:
          this.props.createUser({
            id: this.props.getNextId(),
            name: _common.capitalize(this.state.name),
            email: this.state.email,
            phone: this.state.phone
          });
          this.cleanState();
          break;
      }
    }
  }

  handleChange(event) {
    const target = event.target;
    if (target.tagName !== 'INPUT') return null;
    this.setState({[target.name]: target.value});
    this.checkValue(target.name, target.value);
  }

  checkValue (field, value) {
    switch(field) {
      case 'name':
        this.setValidation(field, value.match(/^\S+[a-z ,.'-]/i));
        break;

      case 'email':
        this.setValidation(field, value.match(/\S+@\S+[.][0-9a-z]{2,}/));
        break;

      case 'phone':
        this.setValidation(field, value.match(/^[0-9]+$/) && value.length === 10);
        break;

      default:
        break;
    }
  }

  setValidation(field, bool) {
    this.setState({[field+'Valid']: !!bool});
  }

  setCheckedTrue() {
    // if (true) show accept || error fields
    this.setState({checked: true});
  }

  getClassName(field){
    return this.state[field+'Valid'] ? 'accept' : 'error';
  }

  render() {
    return (
      <Form
        theme={this.props.theme}
        mode={this.props.mode}
        checked={this.state.checked}
        handleSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        getClassName={this.getClassName.bind(this)}
        setCheckedTrue={this.setCheckedTrue.bind(this)}
        toggleCorrection={this.props.toggleCorrection}
      />
    )
  }
}
