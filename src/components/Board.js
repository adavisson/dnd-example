import React from 'react';
import Knight from './Knight'
import Square from './Square'

const Board = ({ knightPosition }) => {

  const renderSquare = (x, y, [knightX, knightY]) => {
    const black = (x + y) % 2 === 1
    const isKnightHere = knightX === x && knightY === y
    const piece = isKnightHere ? <Knight /> : null

    return <Square black={black}>{piece}</Square>
  }

  return (
    <div style={{width: '100%', height: '100%'}}>
      {renderSquare(0, 0, knightPosition)}
      {renderSquare(1, 0, knightPosition)}
      {renderSquare(2, 0, knightPosition)}
    </div>
  );
}
 
export default Board;