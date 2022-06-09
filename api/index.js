const express = require('express');
const apiRouter = express();

// Remove when DB added
const fs = require('fs');

// GET api/ping
apiRouter.get('/ping', (req, res, next) => {
  try{
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

// GET api/reset
apiRouter.get('/reset', (req, res, next) => {
  try{

    // sets
    const sets = require('../data/sets-default.json');
    fs.writeFileSync("data/sets.json", JSON.stringify(sets));

    // cards
    const cards = require('../data/cards-default.json');
    fs.writeFileSync("data/cards.json", JSON.stringify(cards));

    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});


const setsRouter = require('./sets');
apiRouter.use('/sets', setsRouter);

const cardsRouter = require('./cards');
apiRouter.use('/cards', cardsRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter
