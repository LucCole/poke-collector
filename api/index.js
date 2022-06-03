const express = require('express');
const apiRouter = express();

// GET api/ping
apiRouter.get('/ping', (req, res, next) => {
  try{
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

const setsRouter = require('./sets');
apiRouter.use('/sets', setsRouter);

module.exports = apiRouter
