import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList.jsx';

import Sidebar from '../components/blocks/Sidebar/Sidebar.jsx';
import Header from '../components/blocks/Header/Header.jsx';

import {} from './App.less';

export default class App extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div className="app">
        <Header title="Redux application" />
        <div className="content-wrapper">
          <Sidebar />
          <div className="content">
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}
