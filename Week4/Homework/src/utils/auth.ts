import type { Part } from '../constants/part'

const AUTHORIZATION_CODE_KEY = 'authorizationCode'
const PART_KEY = 'part'

export const saveAuth = (authorizationCode: string, part: Part) => {
  localStorage.setItem(AUTHORIZATION_CODE_KEY, authorizationCode)
  localStorage.setItem(PART_KEY, part)
}
