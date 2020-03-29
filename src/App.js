import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Search from './components/posts/Search'
import Posts from './components/posts/Posts'
import Post from './components/posts/Post'
// import Footer from './components/layout/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  const [reddit, setReddit] = useState([])
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState([])

  // useEffect(async () => {
  //   setLoading
  // })

  const getUsers = async (subreddit, number) => {
    if (subreddit) {
      setLoading(true)
      let redditResponse

      try {
        redditResponse = await fetch(
          `https://www.reddit.com/r/${subreddit}/hot/.json?limit=${number}`
        )
      } catch (err) {
        console.log(err)
      }
      let redditObj = await redditResponse.json()
      setLoading(false)

      //   return redditObj.data.children[5].data.url
      setReddit(redditObj.data.children)
    } else {
      console.log('fart')
    }
  }

  const getPost = async (subreddit, id, title) => {
    setLoading(true)
    let postResponse

    try {
      postResponse = await fetch(
        `https://www.reddit.com/r/${subreddit}/comments/${id}/${title}.json`
      )
    } catch (err) {
      console.log(err)
    }
    let postObj = await postResponse.json()
    setLoading(false)

    setPost(postObj)
  }

  const clearUsers = () => {
    setReddit([])
  }

  return (
    <div>
      <Router>
        <Navbar title='Reddit Scroller' icon='fab fa-reddit-alien' />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Search getUsers={getUsers} clearUsers={clearUsers} />
              <Posts reddit={reddit} loading={loading} />
            </Route>
            <Route
              exact
              path='/r/:subreddit/comments/:id/:title'
              render={props => (
                <Post
                  {...props}
                  getPost={getPost}
                  post={post}
                  loading={loading}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
