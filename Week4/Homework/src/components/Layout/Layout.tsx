import { Outlet } from 'react-router'
import Header from '../Header/Header'
import * as styles from './Layout.css'

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
