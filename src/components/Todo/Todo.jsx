const Todo = () => {
  return (
    <div className="flex items-center justify justify-between p-4 bg-gray-700 border-b border-solid border-gray-500">
      <div className="flex items-center">
        <span className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
        <p className="pl-3">Todo item</p>
      </div>
      <img className="h-8 w-8 cursor-pointer transition-all " src="/close-icon.svg" alt="Close Icon"/>
    </div>
  );
};

export { Todo };
