import React  from 'react';

import Book from './Book';
import stockBook from '../defaultBook';
import { checkStatus, parseJSON } from '../client';

class Shelf extends React.Component {
    state = { 
      books: [stockBook],
    };
  
  componentWillMount() {
    return fetch("/api/books", { accept: "application/json" })
      .then(checkStatus)
      .then(parseJSON)
      .then((books) => this.getBooks(books));
  }

  getBooks(books) {
    this.setState({
       books: books.data,
      });
  }

  render() {
    const books = this.state.books.map(book => (
      <Book 
        key={book._id}
        name={book.name}
        author={book.author}
        publisher={book.publisher}
        image={book.image}
        borrowed={book.borrowed}
        blurb={book.blurb}
      />
      )
    )
    return (
      <div>
      {books}
      </div>
    );
  }
}

export default Shelf;
