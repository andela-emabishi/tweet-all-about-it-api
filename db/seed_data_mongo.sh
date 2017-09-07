use tweet-all-about-it
db.books.drop()
db.books.insertMany([
  {
    name: 'Lord of the Rings' ,
    author: 'J.R.R.Tolkien',
    publisher: 'DKK',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRsG6OXoC5Rw3Lk8KnErhsXNqiqjwOOusPWtL7IOw1f02_xSr',
    borrowed: false,
    blurb: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.'
  },
  {
    name: 'The Hobbit' ,
    author: 'J.R.R.Tolkien',
    publisher: 'DKK',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41aQPTCmeVL._SY344_BO1,204,203,200_.jpg',
    borrowed: false,
    blurb: 'The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson. They are based on the 1937 novel The Hobbit by J. R. R.Tolkien'
  },
  {
    name: 'Half of a Yellow Sun' ,
    author: 'Chimamanda Adichie',
    publisher: 'Oxford',
    image: 'https://images.gr-assets.com/books/1389264642l/11062402.jpg',
    borrowed: false,
    blurb: 'A novel by Chimamanda'
  },
  {
    name: 'Mastery' ,
    author: 'Robert Greene',
    publisher: 'DKK',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41FnF8UYX0L._SX349_BO1,204,203,200_.jpg',
    borrowed: false,
    blurb: 'A novel by Robert Greene'
  },
  {
    name: 'Utopia For Realists' ,
    author: 'Rutger Bregman',
    publisher: 'The Correspondent',
    image: 'https://images.gr-assets.com/books/1458278585l/29544996.jpg',
    borrowed: false,
    blurb: 'A novel by Rutger Bregman'
  }
])
exit