import React from 'react'

const style = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#87D37C',
    padding: '30px'
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Bangers, cursive',
    fontSize: '35px'
  }
}

const Header = () =>
<div style={style.headerContainer}>
  <h1 style={style.headline}>Super Heroes Annonymous</h1>
</div>

export default Header
