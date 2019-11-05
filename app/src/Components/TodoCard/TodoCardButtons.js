import React from "react";

const TodoCardButtons = ({
  todoItem,
  deleteTodoFromList,
  updateTodoStatusFromList,
  editTodoFromList
}) => {
  const deleteTodo = () => {
    deleteTodoFromList(todoItem);
  };
  const updateTodoStatus = () => {
    updateTodoStatusFromList(todoItem);
  };
  const editTodoItem = () => {
    editTodoFromList(todoItem);
  };
  return (
    <footer className="card-footer">
      {todoItem.status === 0 ? (
        <>
          <p className="card-footer-item">
            <button onClick={editTodoItem} className="button is-primary">
              Edit
            </button>
          </p>
          <p className="card-footer-item">
            <button onClick={deleteTodo} className="button is-danger">
              Delete
            </button>
          </p>
          <p className="card-footer-item">
            <button onClick={updateTodoStatus} className="button is-success">
              Complete
            </button>
          </p>
        </>
      ) : (
        <>
          <p className="card-footer-item">
            <button
              className="button is-primary"
              title="Action is Disabled"
              disabled
            >
              Edit
            </button>
          </p>
          <p className="card-footer-item">
            <button onClick={deleteTodo} className="button is-danger">
              Delete
            </button>
          </p>
          <p className="card-footer-item">
            <button
              className="button is-success"
              title="Action is Disabled"
              disabled
            >
              Complete
            </button>
          </p>
        </>
      )}
    </footer>
  );
};

export default TodoCardButtons;
