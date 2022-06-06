
const express = require('express');
const cardsRouter = express.Router();

// Remove when DB added
const fs = require('fs');

// GET - api/sets/ping
cardsRouter.get('/ping', async (req, res, next) => {
  try{  
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});



module.exports = cardsRouter
