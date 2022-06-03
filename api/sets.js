
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

// GET - api/sets/:id
setsRouter.get('/:id', async (req, res, next) => {
  try{  

    const {sets} = require('../data/sets.json');
    const responce = {};
    const id = Number(req.params.id);

    console.log('req.params.id: ', req.params.id);

    for(let set of sets){
      console.log('set: ', set);
      if(set.id === id){
        console.log('id has been found');
        responce.set = set;
      }
    }

    if('set' in responce){

      res.status(200).send(responce.set);
    }else{
      // this would end up being a 404??
      res.status(200).send({error: "No set with that id"});
    }

  }catch(error){
    next(error);
  }
});

module.exports = setsRouter
