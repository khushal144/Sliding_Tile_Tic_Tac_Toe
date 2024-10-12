import React from 'react'
import GameState from './GameState'

function Button({onclick,gameState}) {
  if(gameState==GameState.inProgress) return <></>
  return (
    <button onClick={onclick}>replay</button>
  )
}

export default Button
