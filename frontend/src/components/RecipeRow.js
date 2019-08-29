import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class RecipeRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:4000/recipe/delete/' + this.props.obj._id)
            .then(console.log('Deleted recipe!'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.recipe_name}</td>
                <td>{this.props.obj.recipe_description}</td>
                <td>{this.props.obj.recipe_category}</td>
                <td>{this.props.obj.recipe_ingredients}</td>
                <td>{this.props.obj.recipe_images}</td>
                <td>{this.props.obj.recipe_videos}</td>
                <td>{this.props.obj.recipe_role}</td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );

    }
}

export default RecipeRow;