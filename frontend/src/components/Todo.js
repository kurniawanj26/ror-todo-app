import { RiDeleteBack2Line } from "react-icons/ri";

const Todo = ({ todo_name, id, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <input type="checkbox" />
        <h3>{todo_name}</h3>
        <RiDeleteBack2Line size="20px" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
