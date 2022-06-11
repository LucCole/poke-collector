const express = require('express');
const apiRouter = express();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

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

    // users
    const users = require('../data/users-default.json');
    fs.writeFileSync("data/users.json", JSON.stringify(users));

    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

apiRouter.use(async (req, res, next) => {

  const prefix = 'Bearer ';
  const auth = req.header('Authorization');

  if (!auth) {
    // console.log('No Auth');
      next();
  } else if (auth.startsWith(prefix)) {

    // console.log('Auth');


    const token = auth.slice(prefix.length);

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        if (id) {


          // console.log('id:', id);


          const data = require('../data/users.json');
          let user;
      
          for(let i = 0; i < data.users.length; i++){
            if(data.users[i].id === id){
              user = data.users[i];
            }
          }

            req.user = user
            // console.log(req.user);
            next();
        }  
    } catch (error) {
        next(error);
    }
  } else {
      next({
          name: 'AuthorizationHeaderError',
          message: `Authorization token must start with ${ prefix }`
      });
  }

});





const setsRouter = require('./sets');
apiRouter.use('/sets', setsRouter);

const cardsRouter = require('./cards');
apiRouter.use('/cards', cardsRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter
