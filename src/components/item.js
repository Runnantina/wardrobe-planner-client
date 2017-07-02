import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="solo-image" >
        <p><img src={this.props.image} width="500"/></p>

      </div>
    )
  }
}
