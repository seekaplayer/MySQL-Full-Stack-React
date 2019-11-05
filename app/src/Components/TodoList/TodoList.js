import React, { useState, useEffect } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";
const TodosList = () => {
  const [todoList, setTodoList] = useState([]);

  const createTodoList = async todo => {
    const response = await fetch("http://localhost:3001/insertTodosIntoDb", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name: todo.name, status: 0 })
    });
    const json = await response.json();
    setTodoList([...todoList, ...json]);
  };

  const deleteTodoFromList = async todoItem => {
    const response = await fetch(
      `http://localhost:3001/deleteTodoFromDb/${todoItem.id}`,
      {
        method: "DELETE"
      }
    );
    const json = await response.json();
    setTodoList(json.row);
  };

  const updateTodoStatusFromList = async todoItem => {
    const response = await fetch(
      `http://localhost:3001/updateTodoStatus/${todoItem.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        }
      }
    );
    const json = await response.json();
    setTodoList(
      todoList.map(todo => (todo.id === todoItem.id ? json[0] : todo))
    );
  };

  const editTodoFromList = async todoItem => {};

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:3001/getTodosFromDb");
      const json = await response.json();
      setTodoList(json.result);
    };
    getTodos();
  }, []);

  return (
    <div>
      <AddTodoForm createTodoList={createTodoList} />
      <TodoCard
        todoList={todoList}
        deleteTodoFromList={deleteTodoFromList}
        updateTodoStatusFromList={updateTodoStatusFromList}
        editTodoFromList={editTodoFromList}
      />
    </div>
  );
};
export default TodosList;
