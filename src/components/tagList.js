import React from 'react'
import Tag from './tag'

const TagList = (props) => {

  const searchTag = props.searchTag

  return(

    <ul>
      {props.tags.map( tag => tag.keyword.includes(props.searchTag) ? <Tag id={tag.id} key={tag.id} eachTag={tag.keyword}/> : null)}
    </ul>

  )

}

export default TagList
