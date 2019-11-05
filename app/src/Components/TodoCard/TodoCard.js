import React, { useState } from "react";
import TodoCardStatus from "./TodoStatus";
import TodoCardButtons from "./TodoCardButtons";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
const TodoCard = ({
  todoItem,
  deleteTodoFromList,
  updateTodoStatusFromList,
  editTodoListItem
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const editTodoButton = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="subtitle">
          {isEdit ? (
            <AddTodoForm
              isEdit={isEdit}
              todoItem={todoItem}
              editTodoListItem={editTodoListItem}
            />
          ) : (
            todoItem.name
          )}
        </p>
        <TodoCardStatus todoItem={todoItem} />
      </div>
      <TodoCardButtons
        todoItem={todoItem}
        deleteTodoFromList={deleteTodoFromList}
        updateTodoStatusFromList={updateTodoStatusFromList}
        editTodoButton={editTodoButton}
      />
    </div>
  );
};

export default TodoCard;
