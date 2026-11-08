import type { Part } from '../constants/part'
import type { ApiResponse } from '../types/api'
import type { AuthorizationCodeResponse } from '../types/member'
import instance from './instance'

export const postAuthorizationCode = async (part: Part) => {
  const { data } = await instance.post<ApiResponse<AuthorizationCodeResponse>>(
    '/members/authorization-code',
    { part },
  )
  return data.data.authorizationCode
}
