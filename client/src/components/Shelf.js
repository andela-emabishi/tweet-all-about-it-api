import React from 'react';
import axios from 'axios';

import Book from './Book';
import stockBook from '../defaultBook';
import Borrowed from './Borrowed';
import { checkStatus, parseJSON } from '../client';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [stockBook], borrowed: "", book: {} };
    this.handleBorrowClick = this.handleBorrowClick.bind(this)
  }
    
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

  tweet() {
    
  }

  handleBorrowClick(book, event) {
    const name = book.name
    axios.get(`/api/books?name=${name}`)
    .then((response) => {
      if (!response.error) {
        this.setState({ borrowed: name, book: book });
      } else {
        this.setState({ borrowed: `Error borrowing ${name}`})
      }
    })
    .catch(error => {
      this.setState({
        borrowed: `Error borrowing ${name}`
      });
      throw new Error(error);
    });
    this.tweet()
  }

  render() {
    console.log(this.state.book)
    const books = this.state.books.map(book => (
      <Book 
        key={book._id}
        name={book.name}
        author={book.author}
        publisher={book.publisher}
        image={book.image}
        borrowed={book.borrowed}
        blurb={book.blurb}
        handleBorrowClick={this.handleBorrowClick}
        borrowedBook = {this.state.book}
      />
      )
    )
    return (
      <div>
      {books}
      <Borrowed name={this.state.borrowed.length !== 0 ? this.state.borrowed : ''} message={''} />
      </div>
    );
  }
}

export default Shelf;
