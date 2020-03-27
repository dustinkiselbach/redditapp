import React, { Fragment } from 'react'
import gif from './spinner.gif'

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={gif}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  )
}

export default Spinner
