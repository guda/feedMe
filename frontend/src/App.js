import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRecipe from "./components/create-recipe.component";
import EditRecipe from "./components/edit-recipe.component";
import RecipesList from "./components/recipes-list.component";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">Feed-Me-Mom!</Link>
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
                    <br/>
                    <Route path="/" exact component={RecipesList}/>
                    <Route path="/edit/:id" component={EditRecipe}/>
                    <Route path="/create" component={CreateRecipe}/>
                </div>
            </Router>
        );
    }
}

export default App;