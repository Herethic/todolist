import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
} from '../constants/TasksConstants'

export function getTasks() {
  return (dispatch) => {
    dispatch({
      type: 'GET_TASKS_REQUEST',
      response: {tasks: []},
    });

    setTimeout(timeoutHandler, 3000);

    function timeoutHandler() {
      dispatch({
        type: 'GET_TASKS_SUCCESS',
        response: {
          tasks: [
            {
              title: 'Lorem Ipsum',
              description: 'Lorem Ipsum dolor sit amet',
              status: 'new',
            },
          ],
        },
      });
    }
  }
}

export function createTask(task) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TASK_REQUEST',
      response: {task: {}},
    });

    setTimeout(timeoutHandler, 3000);

    function timeoutHandler() {
      dispatch({
        type: 'ADD_TASK_SUCCESS',
        response: {
          task: {...task},
        },
      });
    }
  }
}
