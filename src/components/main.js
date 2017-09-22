import React, { Component } from 'react';
import ClosetContainer from '../containers/closetContainer'
import { Menu } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'

export default class Main extends Component{
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <div>
        <div className='menu'>
          <Menu secondary>
            <Menu.Item
              name='home'
              as={Link}
              to='/closet'
              className='home-link'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              <b>#home</b>
              </Menu.Item>

            <Menu.Item
              name='collections'
              as={Link}
              to='/closet/my_collections'
              className='home-link'
              active={activeItem === 'collections'}
              onClick={this.handleItemClick}>
              <b>#collections</b>
              </Menu.Item>

            <Menu.Item
              name='add to wardrobe'
              as={Link}
              to='/closet/upload'
              className='home-link'
              active={activeItem === 'upload to wardrobe'}
              onClick={this.handleItemClick}>
              <b>#upload to wardrobe</b>
              </Menu.Item>
          </Menu>
        </div>
          <div className="App-header2">
            <h1 className='title'><i>#YourWardrobeFinder</i></h1>
            <span><h3 className='main-sub-text'>Find what's in your closet here without going through the abyss</h3></span>
          </div>
          <div className="App-Body">
            <Route path='/closet' component={ClosetContainer} />
          </div>
      </div>
    )
  }

}
