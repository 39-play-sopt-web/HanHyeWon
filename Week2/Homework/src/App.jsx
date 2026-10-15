import { useState, useEffect } from 'react'     
import './App.css'
import Header from './components/Header/Header'
import Game from './components/Game/Game'
import Ranking from './components/Ranking/Ranking' 

function App() {

  const [tab, setTab] = useState('game')   
  const [level, setLevel] = useState(1)  
  const [time, setTime] = useState(0) 
  const [startTime, setStartTime] = useState(null)

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

  return (
    <div>
      <Header
      tab={tab}
      onTabChange={setTab}
      level={level}
      onLevelChange={handleLevelChange}
      time={time}
/>


    {tab === 'game' ? <Game key={level} level={level} onStart={handleStart} /> : <Ranking />}

    </div>
  )
}
export default App
