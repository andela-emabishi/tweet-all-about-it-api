const express = require('express');
const mongoose = require('mongoose');

const Books = require('./db/models/books');

const app = express();
const database = 'mongodb://localhost/tweet-all-about-it';

app.set('port', process.env.PORT || 3001); // Whatever PORT is or 3001

app.get('/api/books', (req, res) => {
  mongoose.connect(database, { useMongoClient: true }, err => {
    if (err) {
      console.log(`Error establishing mongoose connection with db ${err}`); // eslint-disable-line
    } else {
      const param = req.query.name;
      if (!param) {
        Books.find((err, books) => {
          if (err) {
            res.json({
              error: err,
              status: 404,
              message: 'Error finding books from model.'
            });
          } else {
            res.json({ status: 200, data: books });
          }
        });
      } else {
        Books.find({ name: param }, (err, book) => {
          if (err) {
            res.json({
              error: err,
              status: 404,
              message: `Book of name ${param} not found.`
            });
          } else {
            res.json({ status: 200, data: book });
          }
        });
      }
    }
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening at http://localhost:${app.get("port")}/`); // eslint-disable-line
});
