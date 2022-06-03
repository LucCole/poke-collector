
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const path = require('path');
server.use(express.static(path.join(__dirname, 'public')));

server.use('/api', require('./api'));

const PORT = process.env.PORT || 3001;
server.listen(PORT, async () => {
  console.log(`Server is running on ${ PORT }!`);
});
