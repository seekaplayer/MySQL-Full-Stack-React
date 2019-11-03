import React, { useState } from "react";

const AddTodoFrom = ({ createTodoList }) => {
  const [todo, setTodo] = useState({ name: "" });

  const onChange = event => {
    event.preventDefault();
    setTodo({ name: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    createTodoList(todo);
    setTodo({ name: "" });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <div className="control">
          <input
            className="input is-large"
            value={todo.name}
            placeholder="What would you like to do?"
            type="text"
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodoFrom;
