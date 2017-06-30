import React, { Component } from 'react';

export default class Item extends Component {
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <h2> {this.props.place.name} </h2>
        <p> Location: {this.props.place.location} </p>
        <img src={this.props.place.image} width="500"/>
      </div>
    )
  }
}
