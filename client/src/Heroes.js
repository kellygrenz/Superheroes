import React from 'react'

const Heroes = ({heroes}) => 
  <div>
    <h4>Heroes Component</h4>
    {
      heroes.map(item => {
        return(
          <h2>{item.name}</h2>
        )
      })
    }
  </div>



export default Heroes 
