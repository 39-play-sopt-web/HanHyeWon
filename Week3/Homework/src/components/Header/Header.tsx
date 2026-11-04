import * as S from './Header.styles'

function Header() {
  return (
    <S.Container>
      <S.Logo to="/">
        PLAY SOPT <S.Point>MOVIE</S.Point>
      </S.Logo>
    </S.Container>
  )
}

export default Header
