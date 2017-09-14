import React from 'react';
import ClosetContainer from './closetContainer'
import { Menu } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'

function Main(){


return (
  <div>
    <div className='menu'>
      <Menu text vertical ><i>
        <Menu.Item name='#home' as={Link} to='/closet' className='home-link'/>
        <Menu.Item name='#collections' as={Link} to='/closet/my_collections' className='home-link'/>
        <Menu.Item name='#upload' as={Link} to='/closet/upload' className='home-link'/>
        <Menu.Item name='#log out' as={Link} to='/login' className='home-link'/>
      </i></Menu>
    </div>
      <div className="App-header2">
        <h1 className='title'><i>#YourWardrobeFilter</i></h1>
      </div>
      <div className="App-Body">
        <Route path='/closet' component={ClosetContainer} />
      </div>
  </div>
)
}

export default Main
