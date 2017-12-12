import React from 'react'

const Heroes = ({heroes}) => 
  <div>
    <h4>All Super Heroes</h4>
    {
      heroes.map(item => {
        return(
          <div>
            <h2>{item.name}</h2>
            <h3>{item.superPower}</h3>
          </div>
        )
      })
    }
  </div>



export default Heroes 
