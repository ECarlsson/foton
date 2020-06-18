const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./express/routes.js');

const port = process.env.PORT || 3002;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use('/files', express.static(path.join(__dirname, 'files')));

app.use('/albums', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(port, 'localhost', () => {
  console.log(`Express listening on port ${port}...`);
});
