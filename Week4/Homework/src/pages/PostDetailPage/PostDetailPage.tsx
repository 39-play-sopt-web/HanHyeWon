import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import PostEditForm from '../../components/PostEditForm/PostEditForm'
import { useDeletePost } from '../../hooks/useDeletePost'
import { usePost } from '../../hooks/usePost'
import { checkAuth } from '../../utils/auth'
import { formatDate } from '../../utils/formatDate'
import * as styles from './PostDetailPage.css'

function PostDetailPage() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { data: post, isPending, isError } = usePost(Number(postId))
  const [isEditing, setIsEditing] = useState(false)
  const { mutate: deletePost } = useDeletePost()

  const handleEdit = () => {
    if (!checkAuth()) return
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    if (!checkAuth()) return

    deletePost(id, {
      onSuccess: () => navigate('/posts'),
    })
  }

  return (
    <>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate('/posts')}
      >
        ← 목록으로
      </button>

      {isPending && <p>불러오는 중...</p>}
      {isError && <p>게시글을 불러오지 못했어요.</p>}
      {post && (
        <article className={styles.card}>
          {isEditing ? (
            <PostEditForm post={post} onSuccess={() => setIsEditing(false)} />
          ) : (
            <>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.info}>
                <span className={styles.author}>{post.author}</span>
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <p className={styles.content}>{post.content}</p>
              <div className={styles.buttons}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={handleEdit}
                >
                  수정
                </button>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => handleDelete(post.id)}
                >
                  삭제
                </button>
              </div>
            </>
          )}
        </article>
      )}
    </>
  )
}

export default PostDetailPage
