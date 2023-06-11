import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <header>
    <nav className="navbar navbar-expand flex-row navbar-light bg-light fixed-top">
      <ul class="navbar-nav flex-row me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
