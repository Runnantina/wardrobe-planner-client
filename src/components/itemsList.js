import React, { Component } from 'react'
import Item from './item'
import { Label } from 'semantic-ui-react'


export default function ItemsList(props){


  return(
    <div>
      <ul>
        {!props.itemTags ? <Label content='Image not found!' icon='warning' /> : props.itemTags.map(item => <Item eachItemImage={item.image}/>)}
      </ul>
    </div>
  )
}
