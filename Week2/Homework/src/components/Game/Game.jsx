import { useState } from 'react'
import { LEVELS } from '../../constants/level'
import { shuffle } from '../../utils/shuffle'
import * as S from './Game.styles' 

// start부터 end까지 배열
function createNumbers(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function Game({ level, onStart,onFinish }) {
  const { size, maxNumber } = LEVELS[level]
  const half = maxNumber / 2

  const [board, setBoard] = useState(() => shuffle(createNumbers(1, half)))
  const [queue, setQueue] = useState(() => shuffle(createNumbers(half + 1, maxNumber)))
  const [nextNumber, setNextNumber] = useState(1)

  function handleClick(number, index) {
    if (number !== nextNumber) return
    if (number === 1) onStart()  
    if (number === maxNumber) onFinish()

    const newBoard = [...board]
    newBoard[index] = queue[0] ?? null
    setBoard(newBoard)
    setQueue(queue.slice(1))
    setNextNumber(nextNumber + 1)
  }

  return (
  <S.Container>
    <S.NextNumber>
      다음 숫자 <strong>{nextNumber}</strong> ({nextNumber} / {maxNumber})
    </S.NextNumber>
    <S.Board boardSize={size}>
      {board.map((number, index) => (
        <S.Cell
          key={index}
          onClick={() => handleClick(number, index)}
          disabled={number === null}
        >
          {number}
        </S.Cell>
      ))}
    </S.Board>
  </S.Container>
)
}



export default Game
