import { useState, useEffect } from 'react'     
import Header from './components/Header/Header'
import Game from './components/Game/Game'
import Ranking from './components/Ranking/Ranking' 
import { saveRecord } from './utils/storage'  
import Modal from './components/Modal/Modal' 

function App() {

  const [tab, setTab] = useState('game')   
  const [level, setLevel] = useState(1)  
  const [time, setTime] = useState(0) 
  const [startTime, setStartTime] = useState(null)
  const [round, setRound] = useState(0) 
  const [result, setResult] = useState(null) 

  //타이머 
  useEffect(() => {
    if (startTime === null) return

    const timerId = setInterval(() => {
      setTime((Date.now() - startTime) / 1000)
    }, 10)

    return () => clearInterval(timerId)
  }, [startTime])

  function handleStart() {
    setStartTime(Date.now())
  }

  function handleLevelChange(newLevel) {
    setLevel(newLevel)
    setStartTime(null)
    setTime(0)
  }

  function handleFinish() {
  const playTime = (Date.now() - startTime) / 1000
  setStartTime(null)   
  setTime(playTime)

  saveRecord({
    playedAt: new Date().toLocaleString(), 
    level,                                 
    time: playTime,                      
  })

  setResult(playTime) 
}
function handleCloseModal() { 
  setResult(null)
  setTime(0)
  setRound(round + 1)
}

  return (
    <div>
      <Header
      tab={tab}
      onTabChange={setTab}
      level={level}
      onLevelChange={handleLevelChange}
      time={time}
/>


    {tab === 'game' ? <Game key={`${level}-${round}`} level={level} onStart={handleStart} onFinish={handleFinish} /> : <Ranking />}

    {result !== null && (
      <Modal time={result} onClose={handleCloseModal} />
    )}
  </div>)
}
export default App
