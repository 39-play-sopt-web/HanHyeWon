import { useQuery } from '@tanstack/react-query'
import { getPost } from '../apis/post'

export const usePost = (postId: number) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
  })
}
