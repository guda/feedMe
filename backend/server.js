const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const recipeRoutes = require('./routes/recipe.routes');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipes', { useNewUrlParser: true, useFindAndModify: false });
const connection = mongoose.connection;

connection.once('open', function () {
   console.log('Database connected!')
});

app.use('/', recipeRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});