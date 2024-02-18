import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
      </div>
      <input
        type="text"
        className="focus:shadow-lg font-inter focus:shadow-gray-600 pl-12 w-full py-4 bg-slate-800 rounded-xl outline-none"
        placeholder="What's new "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleTodo(e)}
      />
    </div>
  );
};

export { TodoInput };
