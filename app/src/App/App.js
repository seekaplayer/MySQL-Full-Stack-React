import React from "react";
import "bulma/css/bulma.min.css";
import Header from "../Components/Header/Header";
import "./App.css";
import TodoList from "../Components/TodoList/TodoList";
import Footer from "../Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <TodoList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
