import React, { useState } from "react";

const AddTodoFrom = ({
  createTodoList,
  todoItem = { name: "" },
  isEdit,
  doneEditing,
  editTodoListItem
}) => {
  const [todo, setTodo] = useState(todoItem);

  const onChange = event => {
    event.preventDefault();
    setTodo({ ...todo, name: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (isEdit) {
      editTodoListItem(todo);
      doneEditing();
    } else {
      createTodoList(todo);
      setTodo({ ...todo, name: "" });
    }
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
