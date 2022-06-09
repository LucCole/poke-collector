
const express = require('express');
const usersRouter = express.Router();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;


// can go into DB I think
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

// Remove when DB added
const fs = require('fs');


// GET - api/users/ping
usersRouter.get('/ping', (req, res, next) => {
  try{
    res.status(200).send({success: true});
  }catch(error){
    next(error);
  }
});

// GET - api/getall
usersRouter.get('/getall', async (req, res, next) => {
  try{  

    const {users} = require('../data/users.json');
    res.status(200).send(users);

  }catch(error){
    next(error);
  }
});

// GET /api/users/login
usersRouter.post('/login', async (req, res, next) => {
  try {

    const { username, password } = req.body;

    if (!username || !password) {
      next({
        name: 'MissingCredentialsError',
        message: 'Please supply both a username and password'
      });
    }

    const data = require('../data/users.json');
    let user = false;
    let hashedPassword;

    for(let i = 0; i < data.users.length; i++){
      if(data.users[i].username === username){
        user = true;
        hashedPassword = data.users[i].password;
      }
    }

    if(!user) {
      res.status(404).send({error: 'Username or password is incorrect'});
    } else {

      const passwordsMatch = await bcrypt.compare(password, hashedPassword);

      if(!passwordsMatch) {
        res.status(404).send({error: 'Username or password is incorrect'});
      }else{
        const token = jwt.sign({id: user.id, username: user.username}, JWT_SECRET, { expiresIn: '1w' });
        res.send({ user, username, message: "you're logged in!", token });
      }
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/users/register
usersRouter.post('/register', async (req, res, next) => {
  try {

    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    // Create user
    const data = require('../data/users.json');

    data.users.push({
      id: data.users.length + 1,
      username,
      email,
      password: hashedPassword
    });

    fs.writeFileSync("data/users.json", JSON.stringify(data));

    const token = jwt.sign({id: data.users.length + 1, username: username}, JWT_SECRET, { expiresIn: '1w' });
    res.status(201).send({ username, message: "you're signed up!", token });

  } catch (error) {
    next(error)
  }
});

module.exports = usersRouter;
