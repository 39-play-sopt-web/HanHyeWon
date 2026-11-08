import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../apis/post'

export const usePosts = (keyword: string) => {
  return useQuery({
    queryKey: ['posts', keyword],
    queryFn: () => getPosts(keyword),
  })
}
