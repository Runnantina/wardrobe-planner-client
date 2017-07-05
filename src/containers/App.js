import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../App.css';
import ClosetContainer from '../components/closetContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={"https://www.kaleidoscopephotoart.com/images/D/Petals%20of%20Poise%202%20tile%20watermark-03.jpg"} className="App-logo" alt="logo" />
          <h1>Wardrobe Planner</h1>
        </div>

        <div className="App-intro">
          <br></br>
          <p>
            best way to hop on that sustainability, browse your own wardrobe....
          </p>
          <br></br>
        </div>
        <ClosetContainer />
      </div>
    );
  }
}

export default App;
