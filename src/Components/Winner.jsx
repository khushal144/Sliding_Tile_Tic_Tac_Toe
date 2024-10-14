import React from 'react'
import GameState from './GameState'

function Winner({gameState}) {
  switch(gameState){
    case GameState.inProgress:{
        return <div></div>
    }
    case GameState.XWins:{
        return <div className='winner'>X Wins!</div>
    }
    case GameState.Owins:{
        return <div className='winner'>O Wins!</div>
    }
    case GameState.Draw:{
      return <div className='winner'>Draw!</div>
    }
    default:return <></>
  }
}

export default Winner
