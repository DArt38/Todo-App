import { useState } from "react";
import { Title } from "./components/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "The Avengers", completed: false },
    { id: 2, title: "Captain America", completed: false },
    { id: 3, title: "The Incredible Hulk", completed: false },
    { id: 4, title: "Spiderman", completed: false },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetCompleted = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
