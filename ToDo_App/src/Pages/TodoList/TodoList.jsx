import TodoApp from '../../Components/TodoApp/TodoApp';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filters = useSelector(state => state.filters);
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          ?.filter(todo => {
            const { status } = filters;
            switch (status) {
              case 'Complete':
                return todo.completed;

              case 'Incomplete':
                return !todo.completed;

              default:
                return true;
            }
          })
          ?.filter(todo => {
            const { colors } = filters;
            if (colors.length > 0) {
              return colors.includes(todo?.color);
            }
            return true;
          })
          .map(todo => (
            <TodoApp todo={todo} key={todo.id}></TodoApp>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
