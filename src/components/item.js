import React, { Component } from 'react';
import { Segment, Image, Button, Icon } from 'semantic-ui-react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  handleClick =(e, object) => { //or "object"'s shorthand: {value}
    this.props.deleteItemTag(object.value)
  }

  render(){
    return(
      <div className="solo-image">
        <Image src={this.props.eachItem.image} size='small' centered/>
        <Button animated onClick={this.handleClick} value={this.props.eachItem.id}>
          <Button.Content visible type='click' >Delete Item</Button.Content>
          <Button.Content hidden>
            <Icon name='trash' />
          </Button.Content>
        </Button>
      </div>
      )
    }
}
