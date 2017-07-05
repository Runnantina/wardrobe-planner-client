import React, { Component } from 'react';
import Item from './item'

export default function ItemsList(props){


  return(
    <div>
      <ul>
        {!props.tagItems ? <div>itemsList</div> : props.tagItems.map(item => <Item eachItemImage={item.image}/>)}
      </ul>
    </div>
  )
}
