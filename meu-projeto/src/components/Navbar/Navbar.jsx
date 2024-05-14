import React from "react";

import logoImg from "../../assets/imagens/logo.png";

import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="" />
            <h1>Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
