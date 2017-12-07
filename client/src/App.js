import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Heroes from './Heroes'
import Navigation from './Navigation'
import Header from './Header'

const App = () => 
  <Router>
    <div>
      <Header />
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/heroes' component={Heroes} />
    </div>
  </Router>

export default App
