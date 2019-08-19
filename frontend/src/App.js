import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRecipe from "./components/create-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import ListRecipes from "./components/list-recipes.component";

import logo from "./logo.svg";

class App extends Component {
  componentDidMount() {
    document.title = "Feed Me Mom!";
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} width="30" height="30" alt="Logo" />
            <Link to="/" className="navbar-brand">FeedMe Admin Panel</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Recipes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={ListRecipes} />
          <Route path="/edit/:id" component={EditRecipe} />
          <Route path="/create" component={CreateRecipe} />
        </div>
      </Router>
    );
  }
}

export default App;