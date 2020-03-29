import React from 'react'

const Clear = props => {
  return (
    <div>
      <input
        className='btn btnyellow'
        type='button'
        value='Clear'
        onClick={props.clearUsers}
      />
    </div>
  )
}

export default Clear
