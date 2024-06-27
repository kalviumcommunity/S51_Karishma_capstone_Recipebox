const express =  require('express');
const Recipe  = require('../models/recipe.model');
const RecipeRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
  username:Joi.string().required(),
  strMeal: Joi.string().required(),
  strMealThumb:Joi.string().required() ,
  youtubeLink:Joi.string().required(),
  ingredient:Joi.string().required()
  });
  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
      req.user=user
      next()
    })
  }
RecipeRouter.post('/api/addrecipe',async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{

        if (!error) {
        let{ username,strMeal,strMealThumb,youtubeLink,ingredient} = req.body;
        const recipeData = await Recipe.create({username,strMeal,strMealThumb,youtubeLink,ingredient});
        res.status(201).json(recipeData);}
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

RecipeRouter.get('/api/getrecipe',async (req, res) => {
    try {
      const recipe = await Recipe.find();
      res.json(recipe);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching recipes' });
    }
  });

  RecipeRouter.delete('/api/deleterecipe/:id',async (req, res) => {
    try {
      const deletedrecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedrecipe) {
        return res.status(404).json({ message: 'recipe not found' });
      }
      res.json({ message: 'recipe deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting recipe' });
    }
  });
module.exports=RecipeRouter;