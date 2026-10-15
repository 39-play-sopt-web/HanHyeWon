function Header({ tab, onTabChange, level, onLevelChange, time }) {
  return (
    <header>
      <h1>🔢 숫자 클릭 게임</h1>
      <button onClick={() => onTabChange('game')}>게임</button>
      <button onClick={() => onTabChange('ranking')}>랭킹</button>

      {tab === 'game' && (
        <div>
          <select
            value={level}
            onChange={(e) => onLevelChange(Number(e.target.value))}
          >
            <option value={1}>Level 1</option>
            <option value={2}>Level 2</option>
            <option value={3}>Level 3</option>
          </select>
          <span>{time.toFixed(2)}</span>
        </div>
      )}
    </header>
  )
}
export default Header

