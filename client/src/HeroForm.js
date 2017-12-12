import React from 'react'
import PropTypes from 'prop-types'

const HeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, handleSubmit}) =>
  <form>
    <div>
      <label>Superhero:</label>
      <input type='text' onChange={this.onNameChange}/>
    </div>

    <div>
      <label>Superpower:</label>
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

    
    <button onClick={this.handleSubmit}> Submit Hero </button>
  </form>

HeroForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired
 
}

export default HeroForm
