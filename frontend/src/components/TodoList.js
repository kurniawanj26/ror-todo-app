import Todo from "./Todo.js";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo_name={todo.todo_name} />;
      })}
    </div>
  );
};

export default TodoList;
