import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

import * as tasksActions from '../../actions/TaskActions';

import Task from '../../components/Task/Task.jsx';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm.jsx';
import WaitBar from '../../components/WaitBar/WaitBar.jsx';

import {} from './ToDoList.less';

@connect(
  state => ({
    tasks: state.task.tasks,
    fetching: state.task.fetching,
  }),
  dispatch => ({
    tasksActions: bindActionCreators(tasksActions, dispatch),
  }),
)
export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.showAddTaskForm = this.toggleAddTaskForm.bind(this, true);
    this.hideAddTaskForm = this.toggleAddTaskForm.bind(this, false);
    this.state = {
      showAddTaskForm: false,
    }
  }

  toggleAddTaskForm(state) {
    this.setState({ showAddTaskForm: state });
  }

  componentWillMount() {
    this.props.tasksActions.getTasks();
  }

  render() {
    const { fetching, tasks, tasksActions: { createTask } } = this.props;

    let content = [];
    content = tasks.map(function(item, i) {
      return (
        <li key={_.uniqueId(`task-`)} className="task">
          <Task {...item} />
        </li>
      )
    });
    return (
      <div className="todo-list-component-root">
        <h3 className="list-title">ToDo List:</h3>
        <ul className="tasks-list">
          {content}
        </ul>
        { fetching && <WaitBar text="Loading..." /> }
        <div className="controls">
          <Button className="add-task" onClick={this.showAddTaskForm}>New task</Button>
        </div>
        <AddTaskForm
          show={this.state.showAddTaskForm}
          onClose={this.hideAddTaskForm}
          createTask={createTask}
        />
      </div>
    );
  }
}
