import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import "./TodoList.css";
const TodosList = () => {
  const [todoList, setTodoList] = useState([]);
  const createTodoList = todo => {
    setTodoList([...todoList, { id: 1, todo: todo, completed: false }]);
    console.log(todoList);
  };
  return (
    <div>
      <AddTodoForm createTodoList={createTodoList} />
      <div className="columns is-multiline todoListTopSpacing">
        <div className="column is-4-desktop is-6-tablet is-12-mobile">
          <div className="card">
            <div className="card-content">
              <p className="subtitle">Learn how to code something in React</p>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag">Status</span>
                  <span className="tag is-danger">Not Completed</span>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default TodosList;
