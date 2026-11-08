import { useState } from 'react'
import { useNavigate } from 'react-router'
import { PARTS, type Part } from '../../constants/part'
import { useIssueAuthorizationCode } from '../../hooks/useIssueAuthorizationCode'
import { saveAuth } from '../../utils/auth'
import * as styles from './AuthPage.css'

function AuthPage() {
  const navigate = useNavigate()
  const [part, setPart] = useState<Part | ''>('')
  const { mutate } = useIssueAuthorizationCode()

  const handleIssue = () => {
    if (!part) return

    mutate(part, {
      onSuccess: (authorizationCode) => {
        saveAuth(authorizationCode, part)
        navigate('/posts')
      },
      onError: () => {
        alert('코드 발급에 실패했어요. 다시 시도해 주세요.')
      },
    })
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>PLAY SOPT 게시판</h1>
      <p className={styles.description}>파트를 선택하면 코드가 발급됩니다.</p>
      <div className={styles.form}>
        <select
          className={styles.select}
          value={part}
          onChange={(e) => setPart(e.target.value as Part)}
        >
          <option value="" disabled>
            파트를 선택하세요
          </option>
          {PARTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="button"
          className={styles.issueButton}
          disabled={!part}
          onClick={handleIssue}
        >
          코드 발급받기
        </button>
      </div>
      <button
        type="button"
        className={styles.listButton}
        onClick={() => navigate('/posts')}
      >
        게시판 목록 보기
      </button>
    </main>
  )
}

export default AuthPage
