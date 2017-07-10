import React, { Component } from 'react'
import Item from './item'
import { Label, Header } from 'semantic-ui-react'



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
        {this.state.message ?  <Header as='h4'>No items match your search!</Header> : this.props.itemTags.map(item => <Item eachItem={item} deleteItemTag={this.props.deleteItemTag}/>)}
        </ul>
      </div>
    )
  }

}
