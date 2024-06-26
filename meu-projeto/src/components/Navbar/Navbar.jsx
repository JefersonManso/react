import React from "react";

import logoImg from "../../assets/imagens/logo-restaurante.png";  

import "./styles.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="" />            
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Cardápio</a>
            </li>
            <li>
              <a href="/">Sobre nós</a>
            </li>
            <li>
              <a href="/">Notícias</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}


