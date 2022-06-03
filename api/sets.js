
const express = require('express');
const setsRouter = express.Router();

setsRouter.get('/ping', async (req, res, next) => {
  try{  
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

module.exports = setsRouter;
