import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import Heroes from './Heroes'
import Navigation from './Navigation'
import Header from './Header'
import $ from 'jquery'
import CreateHeroContainer from './CreateHeroContainer'

class App extends Component {
  state = {
    heroes: undefined
  }

componentDidMount() {
  this.loadHeroesFromServer()
}

loadHeroesFromServer = () => {
  $.ajax({
    url: '/api/heroes',
    method: 'GET'
  }).done((response) => {
    console.log(response)
    this.setState({heroes: response.heroes})
  })
}

  render () {
      return (
        <Router>
          <div>
            <Header />
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer}/>} />
            
            {
              this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
              : 'No Heroes'
            }
           </div>
        </Router>
      )
    }
  }

export default App
