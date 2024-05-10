const express =  require('express');
const  Favorite  = require('../models/favorite.model');
const FavoriteRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    idMeal:Joi.number().integer().required(),
    strMeal:Joi.string().required(),
    strMealThumb: Joi.string().required(),
    username:Joi.string().required()
  });
  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
      req.user=user;
      next()
    })
  }
FavoriteRouter.post('/api/addfavorite', authenticateToken,async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{username,idMeal,strMeal,strMealThumb} = req.body;
        const favoriteData = await Favorite.create({username,idMeal,strMeal,strMealThumb});
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

FavoriteRouter.get('/api/getfavorite', authenticateToken,async (req, res) => {
    try {
      const favorite = await Favorite.find();
      res.json(favorite.filter(favorite => favorite.username === req.user.name));
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching favorites' });
    }
  });

  FavoriteRouter.delete('/api/getfavorite/:id', authenticateToken,async (req, res) => {
    try {
      const deletedfavorite = await Favorite.findByIdAndDelete(req.params.id);
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