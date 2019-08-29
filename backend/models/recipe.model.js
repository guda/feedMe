const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    recipe_name: {
        type: String
    },
    recipe_description: {
        type: String
    },
    recipe_category: {
        type: String
    },
    recipe_ingredients: {
        type: String
    },
    recipe_images: {
        type: String
    },
    recipe_videos: {
        type: String
    },
    recipe_role: {
        type: String
    }
}, {
    collection: 'recipes'
});

module.exports = mongoose.model('Recipe', Recipe);