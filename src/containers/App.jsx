import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

export default class App extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div className="app">
        <h1>Redux application</h1>
        <ToDoList />
      </div>
    );
  }
}
