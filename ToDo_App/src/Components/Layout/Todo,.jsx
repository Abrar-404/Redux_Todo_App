import Header from '../../Pages/Header/Header';
import Navbar from '../../Pages/Navbar/Navbar';
import TodoList from '../../Pages/TodoList/TodoList';
import Footer from '../Footer/Footer';
import { Provider } from 'react-redux';
import Store from '../../Redux/Store';

const Todo = () => {
  return (
    <div>
      <Provider store={Store}>
        <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
          {/* Navbar */}
          <Navbar></Navbar>

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            {/* Header */}
            <Header></Header>

            <hr className="mt-4" />

            {/* Todo List */}
            <TodoList></TodoList>

            {/* Footer */}
            <Footer></Footer>
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default Todo;
