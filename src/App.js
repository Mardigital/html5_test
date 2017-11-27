import React, { Component } from 'react';
import Header from './components/Header';
import Caption from './components/Caption';
import FormContainer from './components/FormContainer';
import Table from './components/Table/Table';
import Footer from './components/Footer';
import _common from './components/common.js';
import { database } from './api/db';
import './App.css';
import './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: database,
      theme: 'Personal'
    };

    this.lastId = database.length-1;
    this.arrowDown = true;
    this.reverse = null;
    this.lastUsedField = null;
  }

  componentWillMount() {
    this.sortField('name', false);
  }

  getNextId () {
    const database = this.state.database;
    return !database.length ? this.lastId=0 : ++this.lastId;
  }

  createUser(newUser) {
    const stateCopy = _common.copy(this.state.database);
    stateCopy.push(newUser);
    this.setState({database: stateCopy});
    // Invoke only after setState to save list order
    setTimeout(()=>{this.sortField(this.lastUsedField,this.reverse)},0)
  }

  deleteUser(id) {
    const stateCopy = _common.copy(this.state.database);
    stateCopy.splice(_common.currentId(id,stateCopy),1);
    this.setState({database: stateCopy})
  }

  updateUser(id, corrections) {
    const stateCopy = _common.copy(this.state.database);
    const currentUser = stateCopy[_common.currentId(id,stateCopy)];
    // Merge corrections with chosen user
    const trueUser = {...currentUser,...corrections};
    stateCopy[_common.currentId(id,stateCopy)] = trueUser;
    this.setState({database: stateCopy})
  }

  sortField(field, reverse) {
    const stateCopy = _common.copy(this.state.database);
    this.reverse = reverse;
    this.lastUsedField = field;

    if (reverse)  {
      this.arrowDown = false;
      _common.order(stateCopy, field, reverse);
      return this.setState({database: stateCopy});
    }

    _common.order(stateCopy, field, reverse);
    this.setState({database: stateCopy});
    this.arrowDown = true;
  }

  render() {
    return (
      <div>
        <div className={`container_fullwidth header__theme_${this.state.theme}`}>
          <div className='container_912px'>
            <Header theme={this.state.theme}/>
          </div>
        </div>
        <div className='container_912px'>
          <Caption theme={this.state.theme}/>
          <FormContainer
            createUser={this.createUser.bind(this)}
            getNextId={this.getNextId.bind(this)}
            theme={this.state.theme}
            mode='reg'/>
          <Table
            database={this.state.database}
            deleteUser={this.deleteUser.bind(this)}
            sortField={this.sortField.bind(this)}
            updateUser={this.updateUser.bind(this)}
            arrowDown={this.arrowDown}
            theme={this.state.theme}/>
        </div>
          <Footer />
      </div>
    );
  }
}
