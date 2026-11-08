import { Link, useNavigate } from 'react-router'
import { clearAuth, getPart } from '../../utils/auth'
import * as styles from './Header.css'

function Header() {
  const navigate = useNavigate()
  const part = getPart()

  const handleLogout = () => {
    clearAuth()
    navigate('/')
  }

  return (
    <header className={styles.header}>
      {part && <span className={styles.part}>{part} 파트</span>}
      <nav className={styles.nav}>
        <Link to="/posts">게시글 목록</Link>
        <Link to="/posts/write">글쓰기</Link>
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </nav>
    </header>
  )
}

export default Header
