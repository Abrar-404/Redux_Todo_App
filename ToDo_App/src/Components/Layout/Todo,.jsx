import Header from '../../Pages/Header/Header';
import Navbar from '../../Pages/Navbar/Navbar';
import TodoList from '../../Pages/TodoList/TodoList';
import Footer from '../Footer/Footer';

const Todo = () => {
  return (
    <div>
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
    </div>
  );
};

export default Todo;
