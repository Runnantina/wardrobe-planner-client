import React from 'react'
import Tag from './tag'

const TagList = (props) => {

  const searchTag = props.searchTag

  return(

    <ul>
      {props.tags.map( tag => <li>{tag.keyword}</li> )}
    </ul>

  )

}

export default TagList
