import type { ApiResponse } from '../types/api'
import type { Post, PostListResponse } from '../types/post'
import instance from './instance'

export const getPosts = async (keyword: string) => {
  const { data } = await instance.get<ApiResponse<PostListResponse>>('/posts', {
    params: { keyword: keyword || undefined },
  })
  return data.data
}

export const getPost = async (postId: number) => {
  const { data } = await instance.get<ApiResponse<Post>>(`/posts/${postId}`)
  return data.data
}
