
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

    for(let set of sets){
      console.log('set: ', set);
      if(set.id === id){
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

//  POST - api/sets
setsRouter.post('/', async (req, res, next) => {
  try{

    const data = require('../data/sets.json');
    const responce = {};

    data.sets.push({
      id: data.sets.length + 1,
      name: req.body.name, 
      logo:req.body.logo,
      icon: req.body.icon,
      releaseDate: req.body.releaseDate,
      cards: req.body.cards,
      normalCards: req.body.normalCards,
      secretCards: req.body.secretCards
    });

    fs.writeFileSync("data/sets.json", JSON.stringify(data));

    res.status(201).send({id: data.sets.length + 1});

  }catch(error){
    next(error);
  }
});









//  DELETE - api/sets/:id
setsRouter.delete('/:id', async (req, res, next) => {
  try{

    const data = require('../data/sets.json');
    const responce = {};


    for(let i = 0; i < data.sets.length; i++){
      if(data.sets[i].id === Number(req.params.id)){
        data.sets.splice(i, 1);
        responce.id = req.params.id;
      }
    }

    console.log('req.params.id: ', req.params.id);

    if('id' in responce){
      fs.writeFileSync("data/sets.json", JSON.stringify(data));
      res.status(201).send(responce);
    }else{
      // change status ??
      res.status(201).send({error: 'No set with that id'});
    }

  }catch(error){
    next(error);
  }
});

module.exports = setsRouter
