import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12">
              &copy; {new Date().getFullYear()} MySQL Todo App
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
