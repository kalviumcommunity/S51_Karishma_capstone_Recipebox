const express =  require('express');
const  Favorite  = require('../models/favorite.model');
const FavoriteRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    idMeal:Joi.number().integer().required(),
    strMeal:Joi.string().required(),
    strMealThumb: Joi.string().required()
  });
FavoriteRouter.post('/api/addfavorite', async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{idMeal,strMeal,strMealThumb} = req.body;
        const favoriteData = await Favorite.create({idMeal,strMeal,strMealThumb});
        res.status(201).json(favoriteData);}
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

FavoriteRouter.get('/api/getfavorite', async (req, res) => {
    try {
      const favorite = await Favorite.find();
      res.json(favorite);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching favorites' });
    }
  });

  FavoriteRouter.delete('/api/getfavorite/:id', async (req, res) => {
    try {
      const deletedfavorite = await Blog.findByIdAndDelete(req.params.id);
      if (!deletedfavorite) {
        return res.status(404).json({ message: 'favorites not found' });
      }
      res.json({ message: 'favorites deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting favorite' });
    }
  });
module.exports=FavoriteRouter;