import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
