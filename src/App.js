import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Wallets from "./components/Wallets.js";
import GoTo from "./components/GoTo.js";
import Card from "./components/Card.js";
import More from "./components/More.js";

function App() {
  return (
    <div className="container-fluid">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wallets" component={Wallets} />
          <Route path="/goTo" component={GoTo} />
          <Route path="/card" component={Card} />
          <Route path="/more" component={More} />
        </Switch>
      </main>

      <nav class="navbar navbar-expand bg-dark fixed-bottom  text-center">
        <div className="row d-flex justify-content-between fixed-bottom navbar navbar-expand bg-dark">
          <div className="col">
            <button type="button" class="btn btn-dark icono-nav p-0">
              <Link to="/">
                <i class="fa fa-home text-white" aria-hidden="true"></i>
              </Link>
            </button>
          </div>

          <div className="col">
            <button type="button" class="btn btn-dark icono-nav p-0">
              <Link to="/wallets">
                <i class="bi bi-wallet-fill text-white" aria-hidden="true"></i>
              </Link>
            </button>
          </div>

          <div className="col">
            <button type="button" class="btn btn-dark icono-nav p-0">
              <Link to="/goTo">
                <i class="fa fa-lemon-o text-white" aria-hidden="true"></i>
              </Link>
            </button>
          </div>

          <div className="col">
            <button type="button" class="btn btn-dark icono-nav p-0">
              <Link to="/card">
                <i
                  class="fa fa-credit-card-alt text-white"
                  aria-hidden="true"
                ></i>
              </Link>
            </button>
          </div>

          <div className="col">
            <button type="button" class="btn btn-dark icono-nav ml-4 p-0">
              <Link to="/more">
                <i class="fa fa-th-large text-white" aria-hidden="true"></i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
