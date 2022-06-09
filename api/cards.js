
const express = require('express');
const cardsRouter = express.Router();

// Remove when DB added
const fs = require('fs');

// GET - api/cards/ping
cardsRouter.get('/ping', async (req, res, next) => {
  try{  
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});




// GET - api/cards
cardsRouter.get('/', async (req, res, next) => {
  try{  

    const {cards} = require('../data/cards.json');
    res.status(200).send(cards);

  }catch(error){
    next(error);
  }
});

// GET - api/cards/set:id
cardsRouter.get('/set/:id', async (req, res, next) => {
  try{  

    const {cards} = require('../data/cards.json');
    const responce = {cards:[]};
    const id = Number(req.params.id);

    for(let card of cards){
      if(card.set === id){
        responce.cards.push(card);
      }
    }

    if(responce.cards.length !== 0){
      res.status(200).send(responce.cards);
    }else{
      // this would end up being a 404??
      res.status(404).send({error: "No cards by that set id"});
    }

  }catch(error){
    next(error);
  }
});

// GET - api/cards/:id
cardsRouter.get('/:id', async (req, res, next) => {
  try{  

    const {cards} = require('../data/cards.json');
    const responce = {};
    const id = Number(req.params.id);

    for(let card of cards){
      if(card.id === id){
        responce.card = card;
      }
    }

    if('card' in responce){

      res.status(200).send(responce.card);
    }else{
      // this would end up being a 404??
      res.status(404).send({error: "No card with that id"});
    }

  }catch(error){
    next(error);
  }
});


















//  POST - api/cards
cardsRouter.post('/', async (req, res, next) => {
  try{

    const data = require('../data/cards.json');
    const responce = {};

    data.cards.push({
      id: data.cards.length + 1,
      name: req.body.name,
      image: req.body.image,
      set: req.body.set,
      number: req.body.number,
      rarity: req.body.rarity,
      artist: req.body.artist
    });

    fs.writeFileSync("data/cards.json", JSON.stringify(data));

    res.status(404).send({id: data.cards.length + 1});

  }catch(error){
    next(error);
  }
});

//  EDIT - api/cards/:id
cardsRouter.patch('/:id', async (req, res, next) => {
  try{

    const data = require('../data/cards.json');
    const responce = {};

    for(let i = 0; i < data.cards.length; i++){

      if(data.cards[i].id === Number(req.params.id)){

        const {
          name = data.cards[i].name,
          image = data.cards[i].image,
          set = data.cards[i].set,
          number = data.cards[i].number,
          rarity = data.cards[i].rarity,
          artist = data.cards[i].artist
        } = req.body;

        data.cards[i] = {
          id: data.cards[i].id,
          name,
          image,
          set,
          number,
          rarity,
          artist
        };

        responce.id = req.params.id;
      }
    }

    if('id' in responce){
      fs.writeFileSync("data/cards.json", JSON.stringify(data));
      res.status(201).send(responce);
    }else{
      // change status ??
      res.status(404).send({error: 'No set with that id'});
    }

  }catch(error){
    next(error);
  }
});

//  DELETE - api/cards/:id
cardsRouter.delete('/:id', async (req, res, next) => {
  try{

    const data = require('../data/cards.json');
    const responce = {};

    for(let i = 0; i < data.cards.length; i++){
      if(data.cards[i].id === Number(req.params.id)){
        data.cards.splice(i, 1);
        responce.id = req.params.id;
      }
    }

    if('id' in responce){
      fs.writeFileSync("data/cards.json", JSON.stringify(data));
      res.status(201).send(responce);
    }else{
      // change status ??
      res.status(404).send({error: 'No set with that id'});
    }

  }catch(error){
    next(error);
  }
});








module.exports = cardsRouter
