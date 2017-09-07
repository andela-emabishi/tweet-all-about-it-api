import React from 'react';
import './card.css';
import './button.css';

const Book = (props) => {
  return <div className="ui cards">
      {<div className="ui centered card">
          <div className="content">
            <img className="right floated" style={{ height: 35, width: 35 }} src={props.image} alt={""} />
            <div className="header font">{props.name}</div>
            <div className="meta font">{props.author}</div>
            <div className="meta font">{props.publisher}</div>
            <div className="description">
              {props.blurb}
            </div>
          </div>
          <div className="extra content">
            <div className="ui basic green button">Borrow</div>
          </div>
        </div>}
    </div>;
};


export default Book;