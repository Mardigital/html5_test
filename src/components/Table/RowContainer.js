import React, { Component } from 'react';
import Row from './Row';

export default class RowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correction: false
    };
  }

  toggleCorrection() {
    const correction = this.state.correction;
    this.setState({
      correction: !correction
    });
  }

  handleDelete() {
    this.props.deleteUser(this.props.id);
  }

  render() {
    return (
      <Row
      id={this.props.id}
      name={this.props.name}
      email={this.props.email}
      phone={this.props.phone}
      correction={this.state.correction}
      toggleCorrection={this.toggleCorrection.bind(this)}
      deleteUser={this.handleDelete.bind(this)}
      updateUser={this.props.updateUser}
      theme={this.props.theme}/>
    )}
}
