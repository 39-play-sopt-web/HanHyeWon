import { Link } from 'react-router'
import type { Post } from '../../types/post'
import { formatDate } from '../../utils/formatDate'
import * as styles from './PostCard.css'

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/posts/${post.id}`} className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.content}>{post.content}</p>
      <div className={styles.info}>
        <span className={styles.author}>{post.author}</span>
        <span>{formatDate(post.createdAt)}</span>
      </div>
    </Link>
  )
}

export default PostCard
