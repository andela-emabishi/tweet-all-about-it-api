import React from 'react';
import './card.css';

const Book = ({ books }) => {
  console.log('books, book', books)
  return (
    <div className="ui cards">
      { 
        books.data ?
        books.data.map(book => {
          <div className="card">
            <div className="content">
              <img className="right floated mini ui image" src={books.data.image} />
              <div className="header">
                {books.data.name}
              </div>
              <div className="meta">
                {books.data.author}
                {books.data.publisher}
              </div>
              <div className="description">
                {books.data.blurb}
              </div>
            </div>
            <div className="extra content">
              <div className="ui basic green button">Borrow</div>
            </div>
          </div>
        })
      : 'No books yet'
    }
    </div>
  );
};


export default Book;