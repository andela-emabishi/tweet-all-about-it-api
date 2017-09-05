import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Book = ({ books }) => {
  return (
    <div>
      {
        books.map(book => {
          <Card style={{ width: '350px' }}>
            <CardTitle avatar='https://placeimg.com/80/80/animals' title={book.name} subtitle={book.author} />
            <CardMedia aspectRatio='wide' image={book.url} />
            <CardTitle title={book.name} subtitle={book.author} />
            <CardText>{'dummyText'}</CardText>
            <CardActions>
              <FlatButton label='Borrow' />
            </CardActions>
          </Card>;
        })
      }
    </div>
  );
};


export default Book;