import { useNavigate, useParams } from 'react-router'
import { usePost } from '../../hooks/usePost'
import { formatDate } from '../../utils/formatDate'
import * as styles from './PostDetailPage.css'

function PostDetailPage() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const { data: post, isPending, isError } = usePost(Number(postId))

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
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.info}>
            <span className={styles.author}>{post.author}</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <p className={styles.content}>{post.content}</p>
        </article>
      )}
    </>
  )
}

export default PostDetailPage
