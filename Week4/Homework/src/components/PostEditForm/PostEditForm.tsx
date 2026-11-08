import { useState, type FormEvent } from 'react'
import { useUpdatePost } from '../../hooks/useUpdatePost'
import type { Post } from '../../types/post'
import * as styles from './PostEditForm.css'

interface PostEditFormProps {
  post: Post
  onSuccess: () => void
}

function PostEditForm({ post, onSuccess }: PostEditFormProps) {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const { mutate } = useUpdatePost(post.id)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate(
      { title, content },
      {
        onSuccess: () => {
          alert('게시글이 수정되었어요.')
          onSuccess()
        },
        onError: () => {
          alert('게시글 수정에 실패했어요.')
        },
      },
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className={styles.saveButton}>
        저장
      </button>
    </form>
  )
}

export default PostEditForm
