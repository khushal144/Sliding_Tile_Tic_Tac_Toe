import React from 'react'
import Tile from './Tile'

function Board({tileValues,handleTileClick,bgColor}) {
  return (
    <div className='board'>
      <Tile
       className='border-right border-bottom'
       value={tileValues[0]}
       onclick={()=>handleTileClick(0)}
       classcolor={bgColor[0]} />
      <Tile
       className='border-right border-bottom'
       value={tileValues[1]}
       onclick={()=>handleTileClick(1)}
       classcolor={bgColor[1]} />
      <Tile 
       className='border-bottom' 
       value={tileValues[2]}
       onclick={()=>handleTileClick(2)}
       classcolor={bgColor[2]} />
      <Tile 
       className='border-right border-bottom' 
       value={tileValues[3]}
       onclick={()=>handleTileClick(3)}
       classcolor={bgColor[3]} />
      <Tile 
       className='border-right border-bottom' 
       value={tileValues[4]}
       onclick={()=>handleTileClick(4)}
       classcolor={bgColor[4]} />
      <Tile 
       className='border-bottom'
       value={tileValues[5]}
       onclick={()=>handleTileClick(5)}
       classcolor={bgColor[5]} />
      <Tile 
       className='border-right'
       value={tileValues[6]}
       onclick={()=>handleTileClick(6)}
       classcolor={bgColor[6]} />
      <Tile 
       className='border-right'
       value={tileValues[7]}
       onclick={()=>handleTileClick(7)}
       classcolor={bgColor[7]} />
      <Tile 
      className=''
      value={tileValues[8]}
      onclick={()=>handleTileClick(8)}
      classcolor={bgColor[8]} />
    </div>
  )
}

export default Board
