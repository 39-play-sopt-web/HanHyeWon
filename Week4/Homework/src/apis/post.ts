import type { ApiResponse } from '../types/api'
import type {
  CreatePostRequest,
  Post,
  PostListResponse,
  UpdatePostRequest,
} from '../types/post'
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

export const createPost = async (payload: CreatePostRequest) => {
  const { data } = await instance.post<ApiResponse<Post>>('/posts', payload)
  return data.data
}

export const updatePost = async (
  postId: number,
  payload: UpdatePostRequest,
) => {
  const { data } = await instance.put<ApiResponse<Post>>(
    `/posts/${postId}`,
    payload,
  )
  return data.data
}

export const deletePost = async (postId: number) => {
  await instance.delete(`/posts/${postId}`)
}
