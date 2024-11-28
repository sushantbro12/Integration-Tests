import { useState } from "react";

const AddTodo = ({ todos, addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      completed: false,
    };
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="add-todo__container">
      <input
        type="text"
        className="add-todo__input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="add-todo__button" onClick={handleSubmit}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
