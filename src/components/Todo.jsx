import React from "react";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li className={`${todo.completed ? "completed" : ""}`}>
        <div className="view">
          <input onClick={completeHandler} className="toggle" type="checkbox" />
          <label>{todo.text}</label>
          <button onClick={deleteHandler} className="destroy"></button>
        </div>
      </li>
    </div>
  );
};

export default Todo;