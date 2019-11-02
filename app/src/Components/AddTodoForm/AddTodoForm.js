import React, { useState } from "react";

const AddTodoFrom = ({ createTodoList }) => {
  const [todo, setTodo] = useState();

  const onChange = event => {
    setTodo({ name: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    createTodoList(todo);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <div className="control">
          <input className="input is-large" type="text" onChange={onChange} />
        </div>
      </div>
    </form>
  );
};

export default AddTodoFrom;
