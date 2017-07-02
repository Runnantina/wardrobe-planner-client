import React, { Component } from 'react';
import Item from './item'
export default function ItemsList(props){


  return(
    <div>
      <ul>
        <li>{props.searchItemImage.map(item => <Item image={item.image} key={item.id}/>)}</li>
      </ul>
    </div>
  )
}
