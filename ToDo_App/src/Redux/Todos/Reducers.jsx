import { InitialState } from './InitialState';
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  TOGGLED,
  DELETED,
  COLORSELECTED,
} from './ActionTypes';

const nextTodoId = todos => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];

    case TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          // eslint-disable-next-line no-undef
          completed: !completed,
        };
      });

    case COLORSELECTED:
      // eslint-disable-next-line no-case-declarations
      const { todoId, color } = action.payload;
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter(todo => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map(todo => {
        return {
          ...todo,
          completed: true,
        };
      });

    default:
      break;
  }
};
