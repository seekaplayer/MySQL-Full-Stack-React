import React from "react";
import Header from "../Components/Header/Header";
import "./App.css";
import AddTodoForm from "../Components/AddTodoForm/AddTodoForm";
import TodosList from "../Components/TodosList/TodosList";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="spacing-top"></div>
      <div className="container">
        <AddTodoForm />
        <TodosList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
