import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css'
import ClosetContainer from '../components/closetContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='menu'>
          <Menu text vertical>
            <Menu.Item name='Collections' as={Link} to='/my_collections' />
            <Menu.Item name='Upload' as={Link} to='/upload' />
          </Menu>
        </div>
        <div className="App-header2">
        <h1 className='title'>Wardrobe Planner</h1>
        </div>
        <div className="App-Body">
          <ClosetContainer/>
        </div>
      </div>
    );
  }
}

export default App;



// <img src={"https://www.kaleidoscopephotoart.com/images/D/Petals%20of%20Poise%202%20tile%20watermark-03.jpg"} className="App-logo" alt="logo" />
