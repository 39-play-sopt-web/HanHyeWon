import { useState } from 'react'
import { LEVELS } from '../../constants/level'
import { shuffle } from '../../utils/shuffle'

// start부터 end까지 배열
function createNumbers(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function Game({ level, onStart }) {
  const { maxNumber } = LEVELS[level]
  const half = maxNumber / 2

  const [board, setBoard] = useState(() => shuffle(createNumbers(1, half)))
  const [queue, setQueue] = useState(() => shuffle(createNumbers(half + 1, maxNumber)))
  const [nextNumber, setNextNumber] = useState(1)

  function handleClick(number, index) {
    if (number !== nextNumber) return
    if (number === 1) onStart()  

    const newBoard = [...board]
    newBoard[index] = queue[0] ?? null
    setBoard(newBoard)
    setQueue(queue.slice(1))
    setNextNumber(nextNumber + 1)
  }

  return (
    <div>
      <p>다음 숫자 {nextNumber} ({nextNumber} / {maxNumber})</p>
      {board.map((number, index) => (
        <button
          key={index}
          onClick={() => handleClick(number, index)}
          disabled={number === null}
        >
          {number}
        </button>
      ))}
    </div>
  )
}



export default Game
