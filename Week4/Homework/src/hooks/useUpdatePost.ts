import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updatePost } from '../apis/post'
import type { UpdatePostRequest } from '../types/post'

export const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: UpdatePostRequest) => updatePost(postId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['post', postId] })
    },
  })
}
