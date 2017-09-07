import React  from 'react';

import Book from './Book';
import stockBook from '../defaultBook';
import Borrowed from './Borrowed';
import { checkStatus, parseJSON } from '../client';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [stockBook], borrowed: "" };
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

  handleBorrowClick(name, event) {
    console.log('Borrowed', name);
    this.setState({
      borrowed: name,
    })
    // TODO: Call function that changes borrowed to true in the db and then calls twitter api
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
        handleBorrowClick={this.handleBorrowClick}
      />
      )
    )
    return (
      <div>
      {books}
      <Borrowed name={this.state.borrowed.length !== 0 ? this.state.borrowed : ''} />
      </div>
    );
  }
}

export default Shelf;
