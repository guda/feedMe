import React, {Component} from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeCategory = this.onChangeRecipeCategory.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeImages = this.onChangeRecipeImages.bind(this);
        this.onChangeRecipeVideos = this.onChangeRecipeVideos.bind(this);
        this.onChangeRecipeRole = this.onChangeRecipeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipe_name: '',
            recipe_description: '',
            recipe_category: '',
            recipe_ingredients: '',
            recipe_images: '',
            recipe_videos: '',
            recipe_role: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipe/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_name: response.data.recipe_name,
                    recipe_description: response.data.recipe_description,
                    recipe_category: response.data.recipe_category,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_images: response.data.recipe_images,
                    recipe_videos: response.data.recipe_videos,
                    recipe_role: response.data.recipe_role
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            recipe_name: this.state.recipe_name,
            recipe_description: this.state.recipe_description,
            recipe_category: this.state.recipe_category,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_images: this.state.recipe_images,
            recipe_videos: this.state.recipe_videos,
            recipe_role: this.state.recipe_role
        };
        console.log(obj);
        axios.post('http://localhost:4000/recipe/update/' + this.props.match.params.id, obj)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/');
            });

    }

    render() {
        return (
            <div>
                <h3 align="center">Update Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
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
                        <label>Category: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_category}
                               onChange={this.onChangeRecipeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_ingredients}
                               onChange={this.onChangeRecipeIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <label>Images: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_images}
                               onChange={this.onChangeRecipeImages}
                        />
                    </div>
                    <div className="form-group">
                        <label>Videos: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_videos}
                               onChange={this.onChangeRecipeVideos}
                        />
                    </div>
                    <div className="form-group">
                        <label>Role: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.recipe_role}
                               onChange={this.onChangeRecipeRole}
                        />
                    </div>

                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Update Recipe" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}