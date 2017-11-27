import React, { Component } from 'react';
import Head from './Head';
import arrow_down from '../../img/icon-arrow-down.svg';
import arrow_up from '../../img/icon-arrow-up.svg';
import _common from '../common.js';

export default class HeadContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: true,
      email: false,
      phone: false
    }
    // Init sort state
    this.lastField = 'name';
    this.reverse = true;
  }

  handleSort(event) {
    const target = event.target;
    const lastField = this.lastField;
    let field = '';

    switch(target.tagName) {
      case 'TH':
        field = target.getAttribute('data-table').toLowerCase();
        break;
      case 'IMG':
        field = target.parentNode.getAttribute('data-table').toLowerCase();
        break;
      default:
        return null;
    }

    if (field !== lastField) {
      this.reverse = false;
      this.setState({[lastField]: false})
    };

    this.setState({
      [field]: true
    });

    this.props.sortField(field, this.reverse);
    this.reverse = !this.reverse;
    this.lastField = field;
  }

  render() {
    return (
      <thead className='table_head'>
        <tr onClick={this.handleSort.bind(this)}>
          {Object.keys(this.state).map(key => {
            if(this.state[key]) {
              return <Head field={_common.capitalize(key)} key={key} image={this.props.arrowDown ? arrow_down : arrow_up}/>
            }
            return <Head field={_common.capitalize(key)} key={key}/>
          })}
        <th></th>
        </tr>
      </thead>
    )
  }
}
