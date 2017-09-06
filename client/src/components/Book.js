import React from 'react';
import './card.css';

const Book = ({ books }) => {
  return (
    <div>
    <div class="ui cards">
        {
        books.map(book => {
            <div class="card">
              <div class="content">
                <img class="right floated mini ui image" src={props.image} />
                <div class="header">
                  {props.name}
                </div>
                <div class="meta">
                  {props.author}
                </div>
                <div class="description">
                  {props.blurb}
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button">Borrow</div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};


export default Book;