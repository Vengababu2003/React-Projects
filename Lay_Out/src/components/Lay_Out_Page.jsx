import React from 'react'
import Home_Page from './Home_Page'
import Index_Page from './Index_Page'
import Content_Page from './Content_Page'
import Contact_Page from './Contact_Page'
import Nav_Bar from './Nav_Bar'
import { Route, Routes } from 'react-router-dom'

function Lay_Out_Page() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_Page/>}/>
        <Route path="/index" element={<Index_Page/>}/>
        <Route path="/content" element={<Content_Page/>}/>
        <Route path="/contact" element={<Contact_Page/>}/>
      </Routes>
      <Nav_Bar/>
    </div>
  )
}

export default Lay_Out_Page
