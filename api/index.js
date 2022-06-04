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
    const data = require('../data/sets-default.json');
    fs.writeFileSync("data/sets.json", JSON.stringify(data));

    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});


const setsRouter = require('./sets');
apiRouter.use('/sets', setsRouter);

module.exports = apiRouter
