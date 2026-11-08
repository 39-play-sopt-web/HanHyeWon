import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { WRITE_STEPS } from '../../constants/writeSteps'
import { useCreatePost } from '../../hooks/useCreatePost'
import type { CreatePostRequest } from '../../types/post'
import * as styles from './PostWritePage.css'

function PostWritePage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<CreatePostRequest>({
    title: '',
    content: '',
    author: '',
  })
  const { mutate } = useCreatePost()

  const { key, label, maxLength } = WRITE_STEPS[step]
  const value = form[key]
  const isOverLength = value.length > maxLength
  const isLastStep = step === WRITE_STEPS.length - 1

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [key]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isLastStep) {
      setStep(step + 1)
      return
    }

    mutate(form, {
      onSuccess: () => {
        alert(`${form.author}님의 게시글이 작성되었어요.`)
        navigate('/posts')
      },
      onError: () => {
        alert('게시글 작성에 실패했어요.')
      },
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>글쓰기</h1>

      <label className={styles.field}>
        {label}
        {key === 'content' ? (
          <textarea
            className={styles.textarea}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <input className={styles.input} value={value} onChange={handleChange} />
        )}
      </label>

      <div className={styles.helper}>
        {isOverLength && (
          <p className={styles.error}>{maxLength}자 이내로 입력해 주세요.</p>
        )}
        <span className={styles.counter}>
          {value.length} / {maxLength}
        </span>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.listButton}
          onClick={() => navigate('/posts')}
        >
          목록으로
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!value.trim() || isOverLength}
        >
          {isLastStep ? '작성' : '다음'}
        </button>
      </div>
    </form>
  )
}

export default PostWritePage
