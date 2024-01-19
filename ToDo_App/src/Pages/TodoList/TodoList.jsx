import TodoApp from '../../Components/TodoApp/TodoApp';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos?.map(todo => (
          <TodoApp todo={todo} key={todo.id}></TodoApp>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
