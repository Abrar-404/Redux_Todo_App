import {
  ADDED,
  ALLCOMPLETED,
  DELETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  TOGGLED,
} from './ActionTypes';

export const added = todoText => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = todoId => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = todoId => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
