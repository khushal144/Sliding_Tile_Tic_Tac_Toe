import React from 'react'

function Tile({className,value,onclick,classcolor}) {
  return (
    <div onClick={onclick} className={`tile ${className} ${classcolor}`}>
      {value}
    </div>
  )
}

export default Tile
