import React from "react";

function TodosList() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">This is a todo example</span>
            </div>
            <div className="card-action">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
              <a href="#">Complete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosList;
