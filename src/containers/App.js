import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import '../App.css'
import ClosetContainer from '../components/closetContainer'
import CollectionList from '../components/collectionList'

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
            best way to hop on that sustainability, browse through your own wardrobe....
          </p>
          <br></br>
        </div>
        <div className="App-Body">
        <Route path ="/" component={ClosetContainer} />
        <Route path ="/collections" component={CollectionList} />
        <Switch>
          <Route path='/collections' />
          <Route render={() => <Link to="/collections">See Your Collections</Link> } />
        </Switch>
        <Route exact path="/about" render={() => {
          return <p>Wardobe Planner</p>
        }} />
        </div>
      </div>
    );
  }
}

export default App;
