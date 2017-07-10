import React, { Component } from 'react'
import { Segment, Image, Button, Icon } from 'semantic-ui-react'

export default class Collection extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
        <ul>
        <Image src={this.props.eachImage} size='small' centered/>
        </ul>

      </div>
    )
  }
}

// <p>{this.props.eachCollection.name}</p>
// <p>{this.props.items}</p>
