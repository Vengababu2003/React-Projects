import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import Elements from './Elements'
import { Routes,Route} from 'react-router-dom'
function AddItem() {
  return (
    <div>
      <Link to='/Elements' >AddItem</Link> 
      <Routes>
        <Route path = "/Elements" element={<Elements/>}></Route>
      </Routes>

    </div>
  )
}

export default AddItem
