import React, { useEffect, useState } from 'react'
import Board from './Components/Board'
import GameState from './Components/GameState'
import Winner from './Components/Winner'
import Button from './Components/Button'

let count = 0
let bgcolor=[]
let selectedTileIndexes = []
const winningCombinations=[
  //row
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //columns
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //diagonals
  [0,4,8],
  [2,4,6]
]
const leagalMoves = {
  0: [1, 3, 4],
  1: [0, 4, 2],
  2: [1, 4, 5],
  3: [0, 4, 6],
  4: [0, 1, 2, 3, 5, 6, 7, 8],
  5: [2, 4, 8],
  6: [3, 4, 7],
  7: [4, 6, 8],
  8: [4, 5, 7]
}

function TicTacToe() {
  const [tileValues, setTileValues] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState('X')
  const [gameState,setGameState]=useState(GameState.inProgress)
  const [bgColor,setBgColor]=useState(Array(9).fill(''))

  function handleSlideTile(selectedTileIndexes) {
    const tiles = [...tileValues]
    bgcolor=[...bgColor]
    bgcolor[selectedTileIndexes[0]]='bg-light'
    if (tiles[selectedTileIndexes[1]] ==playerTurn) {
      return [selectedTileIndexes[1]]
    }

    if (tiles[selectedTileIndexes[0]] === null) return []
    if (tiles[selectedTileIndexes[0]] !== playerTurn) return []


    if (tiles[selectedTileIndexes[1]] == null &&
      leagalMoves[selectedTileIndexes[0]]
        .some(legalMove => legalMove == selectedTileIndexes[1])) {
      tiles[selectedTileIndexes[1]] = playerTurn
      tiles[selectedTileIndexes[0]] = null
      bgcolor[selectedTileIndexes[1]]='bg'
      setBgColor(bgcolor)
      setTileValues(tiles)
      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
    }

    return []
  }

  function handleBgColor(bgcolor,selectedTileIndexes){
    bgcolor=[...bgColor]
    bgcolor=Array(9).fill('')
    bgcolor[selectedTileIndexes[0]]=(playerTurn==tileValues[selectedTileIndexes[0]])?'bg':''
    setBgColor(bgcolor)
    if(selectedTileIndexes[1]==undefined) return
    bgcolor=Array(9).fill('')
    bgcolor[selectedTileIndexes[1]]=(playerTurn==tileValues[selectedTileIndexes[1]])?'bg':''
    setBgColor(bgcolor)
  }

  function handleTileClick(id) {
    if(gameState!=GameState.inProgress) return

    if (count >= 6) {
      selectedTileIndexes.push(id)
      handleBgColor(bgcolor,selectedTileIndexes)
      if (selectedTileIndexes.length == 2)
        selectedTileIndexes = handleSlideTile(selectedTileIndexes)
      return
    }

    const tiles = [...tileValues]
    bgcolor=[...bgColor]
    bgcolor=Array(9).fill('')

    if (tiles[id] != null) {
      return
    }

    tiles[id] = playerTurn
    bgcolor[id]='bg'
    count++;
    setTileValues(tiles)
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
    setBgColor(bgcolor)
  }

  function checkWinner(tileValues,winningCombinations){
    for(const winningCombination of winningCombinations){
      let tileValue1=tileValues[winningCombination[0]]
      let tileValue2=tileValues[winningCombination[1]]
      let tileValue3=tileValues[winningCombination[2]]

      if(tileValue1!=null && tileValue1==tileValue2 && tileValue1==tileValue3){
        tileValue1=='X'?setGameState(GameState.XWins):setGameState(GameState.Owins)
      }
    }
  }

  function onclick(){
    setTileValues(Array(9).fill(null))
    setPlayerTurn('X')
    setGameState(GameState.inProgress)
    count=0
    setBgColor(Array(9).fill(''))
  }

  useEffect(()=>{
    checkWinner(tileValues,winningCombinations)
  },[tileValues])

  return (
    <div className='tic-tac-toe'>
      <p>Sliding Tic Tac Toe</p>
      <Board tileValues={tileValues}
        handleTileClick={handleTileClick}
        bgColor={bgColor}
      />
      <Winner gameState={gameState} />
      <Button onclick={onclick} gameState={gameState} />
    </div>
  )
}

export default TicTacToe
