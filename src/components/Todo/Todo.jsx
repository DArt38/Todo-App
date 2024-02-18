const Todo = ({ todo, handleSetCompleted, handleDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="flex items-center justify justify-between p-4 bg-gray-700 border-b border-solid border-gray-500">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetCompleted(id)}
            className="bg-green-700 p-1 rounded-full cursor-pointer"
          >
            <img className="h-4 w-4" src="/check-icon.svg" alt="Check Icon" />
          </div>
        ) : (
          <span
            onClick={() => handleSetCompleted(id)}
            className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"
          ></span>
        )}
        <p className={"pl-3" + (completed && "line-through")}>{title}</p>
      </div>
      <img
        onClick={() => handleDelete(id)}
        className="h-8 w-8 cursor-pointer transition-all "
        src="/close-icon.svg"
        alt="Close Icon"
      />
    </div>
  );
};

export { Todo };
