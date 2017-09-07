const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Twitter = require('twitter')


const Books = require('./db/models/books');

const app = express();

const database = 'mongodb://localhost/tweet-all-about-it';

require('dotenv').config();

app.set('port', process.env.PORT || 3001); // Whatever PORT is or 3001
app.use(cors());

app.get('/api/books', (req, res) => {
  mongoose.connect(database, {
    useMongoClient: true
  }, err => {
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
            res.json({
              status: 200,
              data: books
            });
          }
        });
      } else if (param) {
        try {
          Books.findOne({
            name: param
          }, (err, book) => {
            // If the query isn't successful, the 2nd param passed to the callback will be null
            if (err || book === null) {
              res.json({
                error: err,
                status: 404,
                message: `Book of name ${param} not found.`
              });
            } else {
              if (param === book.name) {
                const status = JSON.parse(book.borrowed);
                book.borrowed = !status;
                book.save(err => {
                  if (err) {
                    res.json({
                      error: err,
                      status: 500,
                      message: `Failed to save book of ${param}.`
                    });
                  } else {
                    const client = new Twitter({
                      consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
                      consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
                      access_token_key: process.env.REACT_APP_ACCESS_TOKEN_KEY,
                      access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET,
                    });

                    client.post('statuses/update', {
                      status: `Mabishi has borrowed ${book.name}`
                    })
                    .then(function (tweet) {
                      console.log(tweet);
                    })
                    .catch(function (error) {
                      throw error;
                    });
                    res.json({
                      status: 200,
                      data: book
                    });
                  }
                });
              } else {
                res.json({
                  status: 500,
                  message: `Book of name ${param} not found.`
                });
              }
            }
          });
        } catch (error) {
          res.json({
            status: 500,
            message: `Book of name ${param} not found.`,
            error,
          });
        }
      }
    }
  });
});



app.listen(app.get('port'), () => {
  console.log(`Server is listening at http://localhost:${app.get("port")}/`); // eslint-disable-line
});