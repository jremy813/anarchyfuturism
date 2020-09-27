import React from "react";
import "./Header.scss";
import Logo from "../assets/Logo.png";
import wLogo from "../assets/logo-whiiite.png";

function Header() {
  return (
    <div className="header">
      <img className="header__bLogo" src={Logo} alt="logo" />
      <img className="header__wLogo" src={wLogo} alt="logo" />
      <ul className="header__desktopLinks">
        <li>Products</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </div>
  );
}

export default Header;
