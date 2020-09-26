import React from "react";
import "./Header.scss";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <ul>
        <li>Products</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </div>
  );
}

export default Header;
