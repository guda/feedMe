const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    recipe_dateAdded: {
        type: String
    },
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
    recipe_videoLink: {
        type: String
    },
    recipe_role: {
        type: String
    }

});

module.exports = mongoose.model('Recipe', Recipe);