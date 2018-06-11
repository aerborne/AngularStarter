const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('./routes/api.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/AngularStarter0')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/AngularStarter0/index.html'));
});

module.exports = app;
