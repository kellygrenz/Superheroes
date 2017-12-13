import React from 'react'

const style = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#19B5FE',
    padding: '30px',
    width: '100vw'
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Fredericka the Great, cursive',
    textTransform: 'uppercase',
    fontSize: '35px'
  },
  h2: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Shrikhand, cursive',
    fontSize: '25px',
    color: '#fff'
  }
}

const Header = () =>
<div style={style.headerContainer}>
  <h1 style={style.headline}>Super Heroes of the West</h1>
  <img src="images/pow.png" alt="test"/>
  <h2 style={style.h2}>And Villains Too...</h2>
</div>

export default Header
