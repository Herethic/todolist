import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
} from '../constants/TasksConstants.js';

const initState = {
  tasks: [],
  fetching: true,
  creating: false,
};

export default function task(state = initState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { ...state, tasks: action.response.tasks, fetching: true };

    case GET_TASKS_SUCCESS:
      return { ...state, tasks: action.response.tasks, fetching: false };

    case ADD_TASK_REQUEST:
      return { ...state, fetching: true };

    case ADD_TASK_SUCCESS:
      const newTask = action.response.task;
      let tasks = [...state.tasks, newTask];
      return { ...state, fetching: false, tasks };

    default:
      return state;
  }
}
