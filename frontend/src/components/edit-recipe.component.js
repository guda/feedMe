import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td className={props.recipe.recipe_completed ? 'completed' : ''}>{props.recipe.recipe_dateAdded}</td>
        <td className={props.recipe.recipe_completed ? 'completed' : ''}>{props.recipe.recipe_name}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_description}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_category}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_ingredients}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_images}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_videoLink}</td>
        <td className={props.recipe.todo_completed ? 'completed' : ''}>{props.recipe.recipe_role}</td>
        <td>
            <Link to={"/edit/" + props.recipe._id}>Edit</Link>
        </td>
    </tr>
)

export default class EditRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_dateAdded: '',
            recipe_name: '',
            recipe_description: '',
            recipe_category: '',
            recipe_ingredients: '',
            recipe_images: '',
            recipe_videoLink: '',
            recipe_role: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_dateAdded: response.data.recipe_dateAdded,
                    recipe_name: response.data.recipe_name,
                    recipe_description: response.data.recipe_description,
                    recipe_category: response.data.recipe_category,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_images: response.data.recipe_images,
                    recipe_videoLink: response.data.recipe_videoLink,
                    recipe_role: response.data.recipe_role
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeRecipeDateAdded(e) {
        this.setState({
            recipe_dateAdded: e.target.value
        });
    }

    onChangeRecipeName(e) {
        this.setState({
            recipe_name: e.target.value
        });
    }

    onChangeRecipeDescription(e) {
        this.setState({
            recipe_description: e.target.value
        });
    }

    onChangeRecipeCategory(e) {
        this.setState({
            recipe_category: e.target.value
        });
    }

    onChangeRecipeIngredients(e) {
        this.setState({
            recipe_ingredients: e.target.value
        });
    }

    onChangeRecipeImages(e) {
        this.setState({
            recipe_images: e.target.value
        });
    }

    onChangeRecipeVideoLink(e) {
        this.setState({
            recipe_videoLink: e.target.value
        });
    }

    onChangeRecipeRole(e) {
        this.setState({
            recipe_role: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            recipe_dateAdded: this.state.recipe_dateAdded,
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_category: this.state.recipe_category,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_images: this.state.recipe_images,
            recipe_videoLink: this.state.recipe_videoLink,
            recipe_role: this.state.recipe_role
        };

        console.log(obj);

        axios.post('http://localhost:4000/recipes/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Date Added: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.recipe_dateAdded}
                            onChange={this.onChangeRecipeDateAdded}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_name}
                            onChange={this.onChangeRecipeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_description}
                            onChange={this.onChangeRecipeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_category}
                            onChange={this.onChangeRecipeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingridients: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <label>Images: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_images}
                            onChange={this.onChangeRecipeImages}
                        />
                    </div>
                    <div className="form-group">
                        <label>Videos: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_videoLink}
                            onChange={this.onChangeRecipeVideoLink}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="roleAdmin"
                                value="Admin"
                                checked={this.state.recipe_role === 'Admin'}
                                onChange={this.onChangeRecipeRole}
                            />
                            <label className="form-check-label">Admin</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="rolePaid"
                                value="Paid"
                                checked={this.state.recipe_role === 'Paid'}
                                onChange={this.onChangeRecipeRole}
                            />
                            <label className="form-check-label">Paid</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="roleFree"
                                value="Free"
                                checked={this.state.recipe_role === 'Free'}
                                onChange={this.onChangeRecipeRole}
                            />
                            <label className="form-check-label">Free</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}