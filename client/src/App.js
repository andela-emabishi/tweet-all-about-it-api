import React, { Component } from 'react';
import './App.css';

import Shelf from  './components/Shelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shelf />
      </div>
    );
  }
}

export default App;
