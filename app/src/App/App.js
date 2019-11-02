import React from "react";
import "bulma/css/bulma.min.css";
import Header from "../Components/Header/Header";
import "./App.css";
import AddTodoForm from "../Components/AddTodoForm/AddTodoForm";
import TodosList from "../Components/TodosList/TodosList";
import Footer from "../Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header />

      <div className="container">
        test
        <AddTodoForm />
        <TodosList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
