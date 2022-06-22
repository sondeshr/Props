import React from 'react'

function Image(props) {
  return (
    <div><h1>{props.Image}</h1>
    
    {props.children}
   
   </div>
  )
}

export default Image