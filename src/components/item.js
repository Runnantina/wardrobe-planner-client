import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render(){
    return(
      <div className="solo-image" >
      <Image src={this.props.eachItemImage} size='small' centered/>
      </div>
    )
  }
}
