import React, { useState, useEffect } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";
const TodosList = () => {
  const [todoList, setTodoList] = useState([]);
  const serverConnectionURL = "http://localhost:3001";

  const createTodoList = async todo => {
    const response = await fetch(`${serverConnectionURL}/insertTodosIntoDb`, {
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
      `${serverConnectionURL}/deleteTodoFromDb/${todoItem.id}`,
      {
        method: "DELETE"
      }
    );
    const json = await response.json();
    setTodoList(json.row);
  };

  const updateTodoStatusFromList = async todoItem => {
    const response = await fetch(
      `${serverConnectionURL}/updateTodoStatus/${todoItem.id}`,
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

  const editTodoListItem = async todoItem => {
    const response = await fetch(
      `${serverConnectionURL}/updateTodoItem/${todoItem.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ name: todoItem.name })
      }
    );
    const json = await response.json();
    setTodoList(
      todoList.map(todo => (todo.id === todoItem.id ? json[0] : todo))
    );
  };

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`${serverConnectionURL}/getTodosFromDb`);
      const json = await response.json();
      setTodoList(json.result);
    };
    getTodos();
  }, []);

  return (
    <div>
      <AddTodoForm createTodoList={createTodoList} />
      <div className="columns is-multiline todoListTopSpacing">
        {todoList.map((todoItem, key) => (
          <div
            key={key}
            className="column is-4-desktop is-6-tablet is-12-mobile"
          >
            <TodoCard
              todoList={todoList}
              deleteTodoFromList={deleteTodoFromList}
              updateTodoStatusFromList={updateTodoStatusFromList}
              todoItem={todoItem}
              editTodoListItem={editTodoListItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodosList;
