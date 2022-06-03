
const express = require('express');
const server = express();

const path = require('path');
server.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
server.listen(PORT, async () => {
  console.log(`Server is running on ${ PORT }!`);
});
