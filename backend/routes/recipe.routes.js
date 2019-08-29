const express = require('express');
const recipeRoutes = express.Router();

// Require Recipe model in our routes module
let Recipe = require('../models/recipe.model');

recipeRoutes.route('/recipe/list').get(function (req, res) {
    Recipe.find(function (err, recipes) {
        if (err) res.json({'error': err});
        else res.json(recipes);
    })
});

recipeRoutes.route('/recipe/:id').get(function (req, res) {
    let id = req.params.id;

    Recipe.findById(id, function (err, recipe) {
        if (err) res.status(404).json({'error': err});
        else res.status(200).json(recipe);
    })
});

recipeRoutes.route('/recipe/add').post(function (req, res) {
    let recipe = new Recipe(req.body);

    recipe.save()
        .then(recipe => {
            res.status(200).json({'recipe': recipe});
        })
        .catch(err => {
            res.status(400).json({'status': 'Error adding new recipe.', 'error': err});
        })
});

recipeRoutes.route('/recipe/update/:id').post(function (req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        if (!recipe) res.statusCode(404).json({'error': err});
        else {
            recipe.recipe_name = req.body.recipe_name;
            recipe.recipe_description = req.body.recipe_description;
            recipe.recipe_category = req.body.recipe_category;
            recipe.recipe_ingredients = req.body.recipe_ingredients;
            recipe.recipe_images = req.body.recipe_images;
            recipe.recipe_videos = req.body.recipe_videos;
            recipe.recipe_role = req.body.recipe_role;

            recipe.save()
                .then(recipe => {
                    res.status(200).json({'status': 'Recipe updated!', 'recipe': recipe});
                })
                .catch(err => {
                    res.status(400).json({'status': 'Error updating recipe.', 'error': err});
                })
        }
    });
});

// Define delete | remove | destroy route
recipeRoutes.route('/recipe/delete/:id').get(function (req, res) {
    Recipe.findByIdAndRemove({_id: req.params.id}, function (err, recipe) {
        if (err) res.json({'error': err});
        else res.json({'info': 'Successfully removed!'});
    })
});

module.exports = recipeRoutes;