import React, { useState } from 'react'

const Search = props => {
  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    props.getUsers(text)
    setText('')
  }

  const onChange = e => setText(e.target.value)

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
        <input type='submit' value='Search' className='btn' />
      </form>
    </div>
  )
}

export default Search
