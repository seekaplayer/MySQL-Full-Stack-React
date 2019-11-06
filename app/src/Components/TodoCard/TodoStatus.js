import React from "react";

const TodoStatus = ({ todoItem }, status) => {
  if (todoItem.status === 0) {
    status = "Not Completed";
  } else {
    status = "Completed";
  }
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag">Status</span>
        {todoItem.status === 0 ? (
          <span className="tag is-danger">{status}</span>
        ) : (
          <span className="tag is-success">{status}</span>
        )}
      </div>
    </div>
  );
};

export default TodoStatus;
