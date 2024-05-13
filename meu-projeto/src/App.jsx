import React from "react";

// Componente em classe é uma classe que herda a classe componente do React, e retorna HTML dentro do método render.

class App extends React.Component {
  // Método respnsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src="" alt="" />
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

export default App;
