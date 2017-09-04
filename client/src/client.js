
export const fetchBooks = (cb) => {
// TODO get books from API - Make call to /api/books
  return fetch('/api/books', { accept: 'application/json' })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);

};

export const updateBook = (name) => {
  // TODO: Update borrowed status of book. Make request to /api/books?name=name
};

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