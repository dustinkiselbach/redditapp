import React, { useState } from 'react'
import Clear from './Clear'

const Search = props => {
  const [text, setText] = useState('')
  const [menu, setMenu] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    props.getUsers(text, menu)
    setText('')
    setMenu('')
  }

  const onChange = e => setText(e.target.value)
  const onMenuChange = e => setMenu(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit} action='' className='form-area'>
        <input
          className='reddit-input'
          type='text'
          name='text'
          placeholder='Search Subreddits..'
          value={text}
          onChange={onChange}
        />
        <div className='select-wrapper'>
          <select id='dropdown' onChange={onMenuChange}>
            <option value='N/A'>Number of Posts</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
        <div className='search-btn'>
          <input type='submit' value='Search' className='btn' />
          <Clear clearUsers={props.clearUsers} />
        </div>
      </form>
    </div>
  )
}

export default Search
