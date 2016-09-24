import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
} from '../constants/TasksConstants.js';

const initState = {
  tasks: [],
  fetching: true,
};

export default function task(state = initState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { ...state, tasks: action.response.tasks, fetching: true };

    case GET_TASKS_SUCCESS:
      console.info('action', action, { ...state, tasks: action.response.tasks, fetching: false });
      return { ...state, tasks: action.response.tasks, fetching: false };
 
    default:
      return state;
  }
}
