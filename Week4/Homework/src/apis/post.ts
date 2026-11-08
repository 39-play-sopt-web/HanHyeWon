import type { ApiResponse } from '../types/api'
import type { PostListResponse } from '../types/post'
import instance from './instance'

export const getPosts = async (keyword: string) => {
  const { data } = await instance.get<ApiResponse<PostListResponse>>('/posts', {
    params: { keyword: keyword || undefined },
  })
  return data.data
}
