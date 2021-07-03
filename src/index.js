'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Static files
app.use(express.static(path.join(__dirname)));

// API
app.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Hola intermediario!!!!'
  };
  res.send(JSON.stringify(data, null, 2));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
