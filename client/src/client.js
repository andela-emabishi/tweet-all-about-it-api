// import express from 'express';
// import mongoose from 'mongoose';

// const database = 'mongodb://localhost/tweet-all-about-it';
// const app = express();

// const Books = require('../../db/models/books');

export const fetchBooks = (cb) => {
// Get books from API - Make call to /api/books
  return fetch('/api/books', { accept: 'application/json' })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
};

// export const updateBook = (name) => {
//   // TODO: Appending query to the url will take care of hadling the call
//   // Update borrowed status of book. Make request to /api/books?name=name
//   app.get('/api/books?name=' + name, (req, res) => {
//     mongoose.connect(database, { useMongoClient: true }, (err) => {
//       if (err) {
//         console.log('Error connecting to mongoose');
//       } else {
//         Books.findOne({ name: name }, (err, book) => {
//           if (err) {
//             res.json({
//               status: 404,
//               error: err,
//               message: `Cannot find book of ${name}`
//             });
//           } else if (name === book.name) {
//             const status = JSON.parse(book.borrowed);
//             book.borrowed = !status;
//             book.save((err, book) => {
//               if (err) {
//                 res.json({
//                   status: 500,
//                   error: err,
//                   message: `Error saving book of ${name}`
//                 });
//               } else {
//                 res.json({ status: 200, data: book });
//               }
//             });
//           } else {
//             res.json({
//               status: 500,
//               message: `Book of name ${name} not found.`
//             });
//           }
//         });
//       }
//     });
//   });
// };

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = `Error fetching books ${response.status} ${response.statusText}`;
    console.log(error); // eslint-disable-line
    throw new Error(error);
  }
}

function parseJSON(response) {
  return response.json();
}