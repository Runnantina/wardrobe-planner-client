import React, { Component } from 'react'
import Item from './item'

export default class itemList extends Component {
  constructor(){
    super()
    this.state = {
      message: false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.itemTags !== nextProps.itemTags) {
      !nextProps.itemTags[0] ? this.setState({ message: true }) : this.setState({ message: false })
    }
  }

  render() {
    return(
      <div>
        <ul>
        {this.state.message ?  <p className="no-item"> No items match your search!</p> : this.props.itemTags.map(item => <Item eachItem={item} deleteItemTag={this.props.deleteItemTag}/>)}
        </ul>
      </div>
    )
  }

}
