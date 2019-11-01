import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="/" className="brand-logo">
                MySQL Todo App
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
