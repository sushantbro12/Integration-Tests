import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <div className="todo__container" data-testid="todo">
        <div className="todo__checkbox" onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <MdRadioButtonChecked className="icon checked" />
          ) : (
            <MdRadioButtonUnchecked className="icon" />
          )}
        </div>
        <div className={todo.completed ? "todo__text complete" : "todo__text"}>
          <p>{todo.text}</p>
        </div>
        <div
          data-testid="delete"
          className="todo__delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <AiOutlineDelete className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
