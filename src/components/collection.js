import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

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
