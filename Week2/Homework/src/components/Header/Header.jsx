import * as S from './Header.styles'
import { TAB } from '../../constants/tab'

function Header({ tab, onTabChange, level, onLevelChange, time }) {
  return (
    <S.Container>
      <S.Title>🔢 숫자 클릭 게임</S.Title>
      <S.Nav>
        <S.TabButton isActive={tab === TAB.GAME} onClick={() => onTabChange(TAB.GAME)}>
          게임
        </S.TabButton>
        <S.TabButton isActive={tab === TAB.RANKING} onClick={() => onTabChange(TAB.RANKING)}>
          랭킹
        </S.TabButton>
      </S.Nav>

      <S.Controls>
        {tab === TAB.GAME && (
          <>
            <S.Select
              value={level}
              onChange={(e) => onLevelChange(Number(e.target.value))}
            >
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
            </S.Select>
            <S.Timer>{time.toFixed(2)}</S.Timer>
          </>
        )}
      </S.Controls>
    </S.Container>
  )
}

export default Header

