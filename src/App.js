import { Title } from "./components/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center"> 
      <div className="container flex flex-col max-w-xl">
          <Title/>
          <TodoInput/>
          <TodoList>
            <h2>Todos List</h2>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </TodoList>
      </div>
    </div>
   
  );
}

export default App;