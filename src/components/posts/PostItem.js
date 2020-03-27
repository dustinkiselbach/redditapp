import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = props => {
  return (
    <div className='pic-area'>
      <div className='content-area'>
        <h3>
          <Link to={props.post.data.permalink}>{props.post.data.title}</Link>
        </h3>
        <img src={props.post.data.thumbnail} alt='noImg' />
        <small>posted by {props.post.data.author}</small>
        <div>
          <i className='far fa-arrow-alt-circle-up'></i> {props.post.data.ups}
        </div>
      </div>
    </div>
  )
}

export default PostItem
