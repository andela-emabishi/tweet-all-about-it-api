use tweet-all-about-it
db.books.drop()
db.books.insertMany([
  {
    name: 'Lord of the Rings' ,
    author: 'J.R.R.Tolkien',
    publisher: 'DKK',
    image: 'http://cdn.collider.com/wp-content/uploads/2016/07/the-lord-of-the-rings-book-cover.jpg',
    borrowed: false,
  },
  {
    name: 'The Hobbit' ,
    author: 'J.R.R.Tolkien',
    publisher: 'DKK',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41aQPTCmeVL._SY344_BO1,204,203,200_.jpg',
    borrowed: false,
  },
  {
    name: 'Half of a Yellow Sun' ,
    author: 'Chimamanda Adichie',
    publisher: 'Oxford',
    image: 'https://images.gr-assets.com/books/1389264642l/11062402.jpg',
    borrowed: false,
  },
  {
    name: 'Mastery' ,
    author: 'Robert Greene',
    publisher: 'DKK',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41FnF8UYX0L._SX349_BO1,204,203,200_.jpg',
    borrowed: false,
  },
  {
    name: 'Utopia For Realists' ,
    author: 'Rutger Bregman',
    publisher: 'The Correspondent',
    image: 'https://images.gr-assets.com/books/1458278585l/29544996.jpg',
    borrowed: false,
  }
])
exit