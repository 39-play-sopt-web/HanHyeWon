import { useState } from 'react'     
import './App.css'
import Header from './components/Header/Header'
import Game from './components/Game/Game'
import Ranking from './components/Ranking/Ranking' 

function App() {

  const [tab, setTab] = useState('game')   
  const [level, setLevel] = useState(1)  
const [time, setTime] = useState(0) 

  return (
    <div>
      <Header
      tab={tab}
      onTabChange={setTab}
      level={level}
      onLevelChange={setLevel}
      time={time}
/>


      {tab === 'game' ? <Game /> : <Ranking />}  
    </div>
  )
}
export default App
