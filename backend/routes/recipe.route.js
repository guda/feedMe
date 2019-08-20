const express = require('express');
const recipeRoutes = express.Router();

// Require Recipe model in our routes module
let Recipe = require('../models/recipe.model');

// Defined store route
recipeRoutes.route('/add').post(function (req, res) {
    let recipe = new Recipe(req.body);
    recipe.save()
        .then(recipe => {
            res.status(200).json({ 'recipe': 'recipe added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
recipeRoutes.route('/').get(function (req, res) {
    Recipe.find(function (err, recipes) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(recipes);
        }
    });
});

// Defined edit route
recipeRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Recipe.findById(id, function (err, recipe) {
        res.json(recipe);
    });
});

//  Defined update route
recipeRoutes.route('/update/:id').post(function (req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        if (!recipe)
            res.status(404).send("recipe is not found");
        else {
            recipe.recipe_dateAdded = req.body.recipe_dateAdded;
            recipe.recipe_name = req.body.recipe_name;
            recipe.recipe_description = req.body.recipe_description;
            recipe.recipe_category = req.body.recipe_category;
            recipe.recipe_ingredients = req.body.recipe_ingredients;
            recipe.recipe_images = req.body.recipe_images;
            recipe.recipe_videoLink = req.body.recipe_videoLink;
            recipe.recipe_role = req.body.recipe_role;
            recipe.save().then(recipe => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
recipeRoutes.route('/delete/:id').get(function (req, res) {
    Recipe.findByIdAndRemove({ _id: req.params.id }, function (err, recipe) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = recipeRoutes;