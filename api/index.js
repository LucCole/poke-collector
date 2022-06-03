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

module.exports = apiRouter
