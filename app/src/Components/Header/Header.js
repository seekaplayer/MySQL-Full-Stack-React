import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <section className="hero is-medium is-danger is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">MySQL React Todo App</h1>
            <h2 className="subtitle">Full Stack Todo App</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
