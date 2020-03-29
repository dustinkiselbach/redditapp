import React from 'react'
import PostItem from './PostItem'
import Spinner from '../layout/Spinner'

const Posts = props => {
  //   console.log(props)
  if (props.loading) {
    return <Spinner />
  } else {
    return (
      <div className='all-posts'>
        {props.reddit.map(post => (
          <PostItem key={post.data.id} post={post} className='post-item' />
        ))}
      </div>
    )
  }
}

export default Posts
