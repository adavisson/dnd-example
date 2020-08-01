import React, { useState, useEffect } from 'react'
import Knight from './Knight'
import Square from './Square'
import { canMoveKnight, moveKnight } from './Game'

const Board = ({ knightPosition }) => {
  const [squares, setSquares] = useState([])

  useEffect(() => {
    const spaces = []
    for (let i = 0; i < 64; i++) {
      spaces.push(renderSquare(i, knightPosition))
    }
    setSquares(spaces)
  }, [knightPosition])

  const handleSquareClick = (toX, toY) => {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = knightX === x && knightY === y
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
        onClick={() => handleSquareClick(x, y)}
      >
        <Square black={black}>{piece}</Square>
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

export default Board
