import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import '../App.css';
import ClosetContainer from '../components/closetContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"http://bergdorfgoodman.scene7.com/is/image/bergdorfgoodman/BGB3RPA_01_m?&wid=400&height=500"} className="App-logo" alt="logo" />
          <h2>Wardrobe Organizer</h2>
        </div>
        <p className="App-intro">
          .........
        </p>
        <ClosetContainer />
      </div>
    );
  }
}

export default App;
