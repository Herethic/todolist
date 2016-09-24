import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as tasksActions from '../actions/TaskActions';

import Task from '../components/Task.jsx';

@connect(
  (state) => ({
    tasks: state.task.tasks,
    fetching: state.task.fetching,
  }),
  (dispatch) => ({
    tasksActions: bindActionCreators(tasksActions, dispatch),
  }),
)
export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    //this.props.tasksActions.getTasks();
  }

  componentWillMount() {
    this.props.tasksActions.getTasks();
  }

  render() {
    const { fetching, tasks} = this.props;

    let content = '';
    if (fetching) {
      content = <div className="wait">Loading...</div>;
    }
    else {
      content = tasks.map(function(item, i) {
        return (
          <li key={`task-${i}`}>{item.title}</li>
        )
      });
    }
    return (
      <div>
        <h3>ToDo List:</h3>
        <ul className="tasks">
          {content}
        </ul> 
      </div>
    );
  }
}
