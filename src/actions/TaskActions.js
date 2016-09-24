import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
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
              title: 'Test',
              description: 'Test',
              status: 'new',
            },
          ],
        },
      });
    }
  }
}
