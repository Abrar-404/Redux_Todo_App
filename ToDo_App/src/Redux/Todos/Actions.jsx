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
