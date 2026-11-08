import { useState, type ChangeEvent, type FormEvent } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import { usePosts } from '../../hooks/usePosts'
import * as styles from './PostListPage.css'

function PostListPage() {
  const [input, setInput] = useState('')
  const [keyword, setKeyword] = useState('')
  const { data, isPending, isError } = usePosts(keyword)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (!e.target.value.trim()) setKeyword('')
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setKeyword(input.trim())
  }

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          value={input}
          onChange={handleChange}
          placeholder="제목으로 검색"
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={!input.trim()}
        >
          검색
        </button>
      </form>

      {isPending && <p>불러오는 중...</p>}
      {isError && <p>게시글을 불러오지 못했어요.</p>}
      {data && (
        <ul className={styles.list}>
          {data.posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default PostListPage
