import React, { Component } from 'react';
import Item from './item'

export default function ItemsList(props){

  searchTag = props.searchTag

  return(
    <div>
      <ul>
        {props.filterItems.filter(item => item)}
      </ul>
    </div>
  )
}
