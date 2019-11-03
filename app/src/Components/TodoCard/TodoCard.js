import React from "react";
import TodoCardStatus from "./TodoStatus";
import TodoCardButtons from "./TodoCardButtons";
const TodoCard = ({ todoList }) => {
  return (
    <div className="columns is-multiline todoListTopSpacing">
      {todoList.map((todoItem, key) => (
        <div key={key} className="column is-4-desktop is-6-tablet is-12-mobile">
          <div className="card">
            <div className="card-content">
              <p className="subtitle">{todoItem.name}</p>
              <TodoCardStatus todoItem={todoItem} />
            </div>
            <TodoCardButtons todoItem={todoItem} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
