import React  from 'react';

import Book from './Book';
import { fetchBooks, checkStatus, parseJSON } from '../client';

class Shelf extends React.Component {
    state = { 
      books: [] 
    };
  
  componentWillMount() {
    return fetch("/api/books", { accept: "application/json" })
      .then(checkStatus)
      .then(parseJSON)
      .then((books) => this.getBooks(books));
  }

  getBooks(books) {
    this.setState({
       books,
      });
  }

  render() {
    console.log('books', this.state.books);
    return (
      <div>
        <Book books={this.state.books} />
      </div>
    );
  }
}

export default Shelf;
