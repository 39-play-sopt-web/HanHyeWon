import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { useCreatePost } from '../../hooks/useCreatePost'
import * as styles from './PostWritePage.css'

function PostWritePage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const { mutate } = useCreatePost()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate(
      { title, content, author },
      {
        onSuccess: () => {
          alert('게시글이 작성되었어요.')
          navigate('/posts')
        },
        onError: () => {
          alert('게시글 작성에 실패했어요.')
        },
      },
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>글쓰기</h1>

      <label className={styles.field}>
        제목
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </label>

      <label className={styles.field}>
        본문
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="본문을 입력하세요"
        />
      </label>

      <label className={styles.field}>
        작성자
        <input
          className={styles.input}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="작성자를 입력하세요"
        />
      </label>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.listButton}
          onClick={() => navigate('/posts')}
        >
          목록으로
        </button>
        <button type="submit" className={styles.submitButton}>
          작성
        </button>
      </div>
    </form>
  )
}

export default PostWritePage
