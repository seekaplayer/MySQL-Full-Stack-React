import React from "react";
import Header from "../Components/Header/Header";
import "./App.css";
import AddTodoForm from "../Components/AddTodoForm/AddTodoForm";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="spacing-top"></div>
      <div className="container">
        <AddTodoForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
