import React from 'react'
import Tag from './tag'

const TagList = (props) => {

  const searchTag = props.searchTag

  return(

    <ul>
      {props.tags.map( tag => <Tag key={tag} eachTag={tag}/>)}
    </ul>

  )

}

export default TagList
