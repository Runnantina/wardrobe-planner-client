import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react'

export default class Item extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="solo-image" >
      <Image src={this.props.eachItemImage} size='medium' centered/>
      </div>
    )
  }
}
