import React from 'react'
import {
  Link
 } from 'react-router-dom'

 const style = {
   navBox: {
     padding: '40px',
     borderTop: '2px dashed red'
   },
   linkItem: {
     
   }
 }

const Navigation = () =>
  <nav style={style.navBox}>
    <Link to='/'>Home</Link>
    <Link to='/heroes'>Heroes</Link>
    <Link to='/create-hero'>Create Hero</Link>
  </nav>

export default Navigation
