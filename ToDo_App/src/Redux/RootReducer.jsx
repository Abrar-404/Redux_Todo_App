import todoReducer from './Todos/Reducers';
import filterReducer from './Filters/Reducers';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default RootReducer;
