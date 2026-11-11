import type { CreatePostRequest } from '../types/post'

interface WriteStep {
  key: keyof CreatePostRequest
  label: string
  maxLength: number
}

export const WRITE_STEPS: WriteStep[] = [
  { key: 'title', label: '제목', maxLength: 50 },
  { key: 'content', label: '본문', maxLength: 1000 },
  { key: 'author', label: '작성자', maxLength: 20 },
]
