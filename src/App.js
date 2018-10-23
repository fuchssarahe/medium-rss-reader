import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetchStuff() {
    return fetch('https://medium.com/feed/@Medium').then(response => response.body());
  }

  render() {
    this.fetchStuff();

    return (
      <div className="App">
        Apple
      </div>
    );
  }
}

export default App;
