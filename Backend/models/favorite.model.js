const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    username:{type: String,required: true},
    idMeal: {type: Number,required: true},
    strMeal: {type: String,required: true},
    strMealThumb:{type: String,required: true} 
},
{
    timestamps: true
})

module.exports = mongoose.model('Favorite', FavoriteSchema);