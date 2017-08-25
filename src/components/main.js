import React from 'react';
import ClosetContainer from './closetContainer'
import { Menu } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'

function Main(){


return (
  <div>
    <div className='menu'>
      <Menu text vertical >
        <Menu.Item name='Home' as={Link} to='/closet' className='home-link'/>
        <Menu.Item name='Collections' as={Link} to='/closet/my_collections' className='home-link'/>
        <Menu.Item name='Upload' as={Link} to='/closet/upload' className='home-link'/>
        <Menu.Item name='Log Out' as={Link} to='/login' className='home-link'/>
      </Menu>
    </div>
      <div className="App-header2">
        <h1 className='title'>Your</h1>
      </div>
      <div className="App-Body">
        <Route path='/closet' component={ClosetContainer} />
      </div>
  </div>
)
}

export default Main
