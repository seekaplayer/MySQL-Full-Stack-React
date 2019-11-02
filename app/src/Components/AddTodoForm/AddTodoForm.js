import React, { useState } from "react";

const AddTodoFrom = ({ createTodoList }) => {
  const [todo, setTodo] = useState("");
  const createTodo = event => {
    setTodo(event.target.value);
    createTodoList(todo);
  };
  return (
    <form>
      <div className="field">
        <div className="control">
          <input className="input is-large" type="text" onChange={createTodo} />
        </div>
      </div>
    </form>
  );
};

export default AddTodoFrom;
