import React from "react";
import "./Components/Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Company Logo" className="logo" />
        <div className="company-info">
          <span className="company-name">Paradise Nursery</span>
          <span className="tagline">Your tagline goes here</span>
        </div>
      </div>

      {/* Center Navigation */}
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart</a>
      </nav>

      {/* Right Section */}
      <div className="header-right">
        <button className="cart" aria-label="Shopping Cart">
          🛒
        </button>
      </div>
    </header>
  );
}