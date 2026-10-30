import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import * as S from './Layout.styles'

function Layout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}

export default Layout
