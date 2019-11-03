import React from "react";
import TodoCardStatus from "./TodoStatus";
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
            <footer className="card-footer">
              <p className="card-footer-item">
                <button className="button is-info">Edit</button>
              </p>
              <p className="card-footer-item">
                <button className="button is-danger">Delete</button>
              </p>
              <p className="card-footer-item">
                <button className="button is-success">Complete</button>
              </p>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
