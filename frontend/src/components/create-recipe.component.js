import React, {Component} from 'react';
import axios from 'axios';

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: '',
            recipe_description: '',
            recipe_category: '',
            recipe_ingredients: '',
            recipe_images: '',
            recipe_videos: '',
            recipe_role: ''
        };

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeCategory = this.onChangeRecipeCategory.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeImages = this.onChangeRecipeImages.bind(this);
        this.onChangeRecipeVideos = this.onChangeRecipeVideos.bind(this);
        this.onChangeRecipeRole = this.onChangeRecipeRole.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
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

    onChangeRecipeVideos(e) {
        this.setState({
            recipe_videos: e.target.value
        });
    }

    onChangeRecipeRole(e) {
        this.setState({
            recipe_role: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newRecipe = {
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_category: this.state.recipe_category,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_images: this.state.recipe_images,
            recipe_videos: this.state.recipe_videos,
            recipe_role: this.state.recipe_role
        };

        axios.post('http://localhost:4000/recipe/add', newRecipe)
            .then(res => console.log(res.data));

        console.log('Form submitted:');
        console.log(`Recipe Name: ${this.state.recipe_name}`);
        console.log(`Recipe Description: ${this.state.recipe_description}`);
        console.log(`Recipe Category: ${this.state.recipe_category}`);
        console.log(`Recipe Ingredients: ${this.state.recipe_ingredients}`);
        console.log(`Recipe Images: ${this.state.recipe_images}`);
        console.log(`Recipe Videos: ${this.state.recipe_videos}`);
        console.log(`Recipe Role: ${this.state.recipe_role}`);

        this.setState({
            recipe_name: '',
            recipe_description: '',
            recipe_category: '',
            recipe_ingredients: '',
            recipe_images: '',
            recipe_videos: '',
            recipe_role: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Recipe</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_description}
                               onChange={this.onChangeRecipeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_category}
                            onChange={this.onChangeRecipeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_images}
                            onChange={this.onChangeRecipeImages}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_videos}
                            onChange={this.onChangeRecipeVideos}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.recipe_role}
                            onChange={this.onChangeRecipeRole}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}