import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useState } from "react";
import { update_todo } from "../api/endpoints";
import FullDateTime from "./FullDateTime";

const Todo = ({ todo_name, id, deleteTodo, completed, created_at }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleDelete = async () => {
    await deleteTodo(id);
  };

  const handleIsComplete = async () => {
    update_todo(id, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <div onClick={handleIsComplete}>
          {isChecked ? (
            <ImCheckboxChecked size="20px" color="#16C47F" />
          ) : (
            <ImCheckboxUnchecked size="20px" color="#808080" />
          )}
        </div>
        <div className="todo-content">
          <FullDateTime created_at={created_at} />
          <h3>{todo_name}</h3>
        </div>
        <MdDelete size="30px" color="#F7374F" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
