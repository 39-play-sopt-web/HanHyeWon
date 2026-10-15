import * as S from './Header.styles'

function Header({ tab, onTabChange, level, onLevelChange, time }) {
  return (
    <S.Container>
      <S.Title>🔢 숫자 클릭 게임</S.Title>
      <S.Nav>
        <S.TabButton isActive={tab === 'game'} onClick={() => onTabChange('game')}>
          게임
        </S.TabButton>
        <S.TabButton isActive={tab === 'ranking'} onClick={() => onTabChange('ranking')}>
          랭킹
        </S.TabButton>
      </S.Nav>

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
    </S.Container>
  )
}
export default Header

