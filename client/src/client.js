export function fetchBooks(cb) {
  return fetch('/api/books', { accept: 'application/json' })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
};

export function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = `Error fetching books ${response.status} ${response.statusText}`;
    console.log(error); // eslint-disable-line
    throw new Error(error);
  }
}

export function parseJSON(response) {
  return response.json();
}
