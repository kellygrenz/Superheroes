import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  navBox: {
    background: '#be1f24',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw'
  },
  linkItem: {
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    fontFamily: 'Shrikhand, cursive',
  }
}

const Navigation = () =>
  <nav style={styles.navBox}>
    <Link to='/' style={styles.linkItem} >Home</Link>
    <Link to='/heroes' style={styles.linkItem} >Heroes</Link>
    <Link to='/create-hero' style={styles.linkItem} >Create a New Hero</Link>
  </nav>

export default Navigation