import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeDateAdded = this.onChangeRecipeDateAdded.bind(this);
        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeCategory = this.onChangeRecipeCategory.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeImages = this.onChangeRecipeImages.bind(this);
        this.onChangeRecipeVideoLink = this.onChangeRecipeVideoLink.bind(this);
        this.onChangeRecipeRole = this.onChangeRecipeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

        console.log(`Form submitted:`);
        console.log(`Recipe Date Added: ${this.state.recipe_dateAdded}`);
        console.log(`recipe_name: ${this.state.recipe_name}`);
        console.log(`recipe_description : ${this.state.recipe_description}`);
        console.log(`recipe_category : ${this.state.recipe_category}`);
        console.log(`recipe_ingredients : ${this.state.recipe_ingredients}`);
        console.log(`recipe_images : ${this.state.recipe_images}`);
        console.log(`recipe_videoLink : ${this.state.recipe_videoLink}`);
        console.log(`recipe_role : ${this.state.recipe_role}`);

        const newRecipe = {
            recipe_dateAdded: this.state.recipe_dateAdded,
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_category: this.state.recipe_category,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_images: this.state.recipe_images,
            recipe_videoLink: this.state.recipe_videoLink,
            recipe_role: this.state.recipe_role
        };

        axios.post('http://localhost:4000/recipes/add', newRecipe)
            .then(res => console.log(res.data));

        this.setState({
            recipe_dateAdded: '',
            recipe_name: '',
            recipe_description: '',
            recipe_category: '',
            recipe_ingredients: '',
            recipe_images: '',
            recipe_videoLink: '',
            recipe_role: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Recipe</h3>
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