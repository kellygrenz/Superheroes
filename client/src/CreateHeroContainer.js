import React, {Component} from 'react'
import $ from 'jquery'
import {
  withRouter 
} from 'react-router-dom'

class CreateHeroContainer extends Component {
  state = {
    name: undefined, 
    superpower: undefined, 
    img: undefined, 
    universe: undefined, 
    nemesis: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value})
  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value})
  onImageChange = (e) => this.setState({ img: e.target.value})
  onUniverseChange = (e) => this.setState({ universe: e.target.value})
  onNemesisChange = (e) => this.setState({ nemesis: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    console.log(hero)
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      console.log('inside response')
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render() {
    return (
      <div>
        <h2>Create Hero Component now</h2>
        <form>
          <div>
            <label>name of superhero:</label>
            <input type='text' onChange={this.onNameChange}/>
          </div>

          <div>
            <label>superpower:</label>
            <input type='text' onChange={this.onSuperPowerChange}/>
          </div>

          <div>
            <label>Image:</label>
            <input type='text' onChange={this.onImageChange}/>
          </div>

          <div>
            <label>Universe</label>
            <input type='text' onChange={this.onUniverseChange}/>
          </div>

          <div>
            <label>Nemesis:</label>
            <input type='text' onChange={this.onNemesisChange}/>
          </div>
          <button onClick={this.handleSubmit}> Submit Hero </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)
