import { useMutation } from '@tanstack/react-query'
import { postAuthorizationCode } from '../apis/member'

export const useIssueAuthorizationCode = () => {
  return useMutation({
    mutationFn: postAuthorizationCode,
  })
}
