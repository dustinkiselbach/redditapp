import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const Post = props => {
  useEffect(() => {
    props.getPost(
      props.match.params.subreddit,
      props.match.params.id,
      props.match.params.title
    )
  }, [])
  if (props.post[0] !== undefined) {
    // console.log(props.post[0].data.children[0].data.url.slice(8, 10))
    console.log(props.post[0].data.children[0].data)
  }
  //   useEffect(() => {
  //     async function fetchData() {
  //       // You can await here
  //       const response = await MyAPI.getData(someId);
  //       // ...
  //     }
  //     fetchData();
  //   }, [someId]); // Or [] if effect doesn't need props or state

  if (props.loading) {
    return <Spinner />
  } else if (props.post[0] !== undefined) {
    return (
      <div className='post-detail'>
        <h1 className='item-1'>
          r/{props.post[0].data.children[0].data.subreddit}
        </h1>
        <h2 className='item-2'>{props.post[0].data.children[0].data.title}</h2>
        <h3 className='item-3'>
          u/{props.post[0].data.children[0].data.author}
        </h3>
        <Link to='/'>
          <input type='submit' value='Back to Search' className='btn item-4' />
        </Link>
        {(() => {
          switch (props.post[0].data.children[0].data.url.slice(8, 10)) {
            case 'i.':
              return (
                <img
                  className='pic-area'
                  src={props.post[0].data.children[0].data.url}
                  alt=''
                />
              )
            case 'gf':
              return (
                <iframe
                  className='gif-area'
                  src={
                    props.post[0].data.children[0].data.url.slice(0, 18) +
                    '/ifr/' +
                    props.post[0].data.children[0].data.url.slice(19)
                  }
                  frameBorder='0'
                  scrolling='no'
                  width='640'
                  height='346'
                  allowFullScreen
                  title='gif-frame'
                ></iframe>
              )
            case 'ww':
              const strArray = props.post[0].data.children[0].data.selftext.match(
                /[^\r\n]+/g
              )
              return (
                <div className='story-area'>
                  {strArray.map(str => (
                    <div>
                      <p>{str}</p>
                    </div>
                  ))}
                </div>
              )
            default:
              return <div></div>
          }
        })()}
      </div>
    )
  }
  return <div></div>
}

export default Post
