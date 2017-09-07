import React from 'react';

import './message.css'

const Borrowed = (props) => {
  return (
    <div className="ui floating positive message">
      <div className="header">
          { props.name ? `You have borrowed ${props.name}`: null}
      </div>
    </div>
  )
}

export default Borrowed;