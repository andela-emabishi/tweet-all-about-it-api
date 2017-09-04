const express = require('express');
const mongoose = require('mongoose');

const Books = require('./db/models/books');

const app = express();
const database = 'mongodb://localhost/tweet-all-about-it';

app.set('port', process.env.PORT || 3001); // Whatever PORT is or 3000

app.get('/api/books', (req, res) => {
  const param = req.query.name;
  if (!param) {
    res.json({
      error: 'Missing parameter `name` in query.',
    });
  } else {
    mongoose.connect(database, {useMongoClient: true}, err => {
      if (err) {
        console.log(`Error establishing mongoose connection with db ${err}`);  // eslint-disable-line
      } else {
        // mongoose.connection.on('connected', () => {
          Books.find((err, books) => {
            if (err) {
              console.log(`Error finding books from model ${err}`); // eslint-disable-line
            } else {
              res.json({ status: 200, books });
            }
          });
        // });
      }
    });
  }
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening at http://localhost:${app.get("port")}/`); // eslint-disable-line
});
