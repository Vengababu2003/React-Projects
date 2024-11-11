import React from 'react'
import {Link} from 'react-router-dom'
function Nav_Bar() {
  return (
    <div>
      <Link to = "/" className='data_space'>Home_Page</Link>
      <Link to = "/index" className='data_space'>Index_Page</Link>
      <Link to = "/content" className='data_space'>Content_Page</Link>
      <Link to = "/contact" className='data_space'>Content_Page</Link>
    </div>
  )
}

export default Nav_Bar
