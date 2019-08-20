import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_dateAdded}</td>
        <td>{props.recipe.recipe_name}</td>
        <td>{props.recipe.recipe_description}</td>
        <td>{props.recipe.recipe_category}</td>
        <td>{props.recipe.recipe_ingredients}</td>
        <td>{props.recipe.recipe_images}</td>
        <td>{props.recipe.recipe_videoLink}</td>
        <td>{props.recipe.recipe_role}</td>
        <td>
            <Link to={"/edit/" + props.recipe._id}>Edit</Link>
        </td>
    </tr>
)

export default class ListRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                this.setState({ recipes: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    recipeList() {
        return this.state.recipes.map(function (currentRecipe, i) {
            return <Recipe recipe={currentRecipe} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Recipes List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Date Created</th>
                            <th>Recipe</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Ingredients</th>
                            <th>Images</th>
                            <th>Videos</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.recipeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}