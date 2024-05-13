const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    username:{type: String,required: true},
    strMeal: {type: String,required: true},
    strMealThumb:{type: String,required: true} ,
    youtubeLink:{type: String,required: true},
    ingredient:{type: String,required: true}
},
{
    timestamps: true
})

module.exports = mongoose.model('Recipe', RecipeSchema);