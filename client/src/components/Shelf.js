import React, { Component } from 'react';

import Book from './Book';
import { fetchBooks } from '../client';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  
  componentWillMount() {
    fetchBooks(this.getBooks);
  }

  getBooks(books) {
    this.setState({ books: books });
  }

  render() {
    return (
      <div>
        <Book books={this.state.books}/>
      </div>
    );
  }
}

export default Shelf;
