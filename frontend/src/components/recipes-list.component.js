import React, {Component} from 'react';
import axios from 'axios';
import RecipeRow from './RecipeRow';

export default class RecipesList extends Component {

    constructor(props) {
        super(props);
        this.state = {recipes: []};
    }

    componentDidMount() {
        this.getListOfRecipes();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.getListOfRecipes();
    }

    getListOfRecipes() {
        axios.get('http://localhost:4000/recipe/list')
            .then(response => {
                this.setState({recipes: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    recipeList() {
        return this.state.recipes.map(function (currentRecipe, i) {
            return <RecipeRow obj={currentRecipe} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Recipe List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
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