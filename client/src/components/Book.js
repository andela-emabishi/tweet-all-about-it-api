import React from 'react';
import './card.css';
import './button.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleBorrowClick = this.handleBorrowClick.bind(this)
  }

  handleBorrowClick(event) {
    console.log(this.props)
    this.props.handleBorrowClick(this.props.name, event)
  }

  render() {
    return (
      <div className="ui cards">
          <div className="ui centered card">
              <div className="content">
                <img className="right floated" style={{ height: 35, width: 35 }} src={this.props.image} alt={""} />
                <div className="header font">{this.props.name}</div>
                <div className="meta font">{this.props.author}</div>
                <div className="meta font">{this.props.publisher}</div>
                <div className="description">
                  {this.props.blurb}
                </div>
              </div>
              <div className="extra content">
                <div className="ui basic green button" onClick={this.handleBorrowClick}>Borrow</div>
              </div>
            </div>
      </div>
    );
  }
};


export default Book;