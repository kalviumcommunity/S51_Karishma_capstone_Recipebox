const express = require('express');
const Favorite = require('../models/favorite.model');
const FavoriteRouter = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const schema = Joi.object({
  idMeal: Joi.number().integer().required(),
  strMeal: Joi.string().required(),
  strMealThumb: Joi.string().required(),
  username: Joi.string().required()
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// In your FavoriteRouter.js
FavoriteRouter.post('/api/addfavorite', authenticateToken, async (req, res) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: `Bad request, error:${error}` });
  }

  try {
    const { idMeal, strMeal, strMealThumb, username } = req.body;
    // Ensure the username from the token matches the one in the request
    if (req.user.username !== username) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const favoriteData = await Favorite.create({ username, idMeal, strMeal, strMealThumb });
    res.status(201).json(favoriteData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

FavoriteRouter.get('/api/favorites', authenticateToken, async (req, res) => {
  try {
    const favorites = await Favorite.find({ username: req.user.username });
    res.json(favorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});