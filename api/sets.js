
const express = require('express');
const setsRouter = express.Router();

// Remove when DB added
const fs = require('fs');

// GET - api/sets/ping
setsRouter.get('/ping', async (req, res, next) => {
  try{  
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

// GET - api/sets
setsRouter.get('/', async (req, res, next) => {
  try{  

    const {sets} = require('../data/sets.json');
    res.status(200).send(sets);

  }catch(error){
    next(error);
  }
});

module.exports = setsRouter
