import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <div className='nav-area'>
      <h2>
        <Link to='/'>
          <span className={props.icon}></span> {props.title}
        </Link>
      </h2>
    </div>
  )
}

export default Navbar
