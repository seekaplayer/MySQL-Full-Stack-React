import React, { useState, useEffect } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";
const TodosList = () => {
  const [todoList, setTodoList] = useState([]);
  const createTodoList = todo => {
    setTodoList([...todoList, { id: 0, name: todo, status: 0 }]);
  };
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
      <TodoCard todoList={todoList} />
    </div>
  );
};
export default TodosList;
