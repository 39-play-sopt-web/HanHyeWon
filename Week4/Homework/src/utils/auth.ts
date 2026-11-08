import type { Part } from '../constants/part'

const AUTHORIZATION_CODE_KEY = 'authorizationCode'
const PART_KEY = 'part'

export const saveAuth = (authorizationCode: string, part: Part) => {
  localStorage.setItem(AUTHORIZATION_CODE_KEY, authorizationCode)
  localStorage.setItem(PART_KEY, part)
}

export const getPart = () => {
  return localStorage.getItem(PART_KEY)
}

export const clearAuth = () => {
  localStorage.removeItem(AUTHORIZATION_CODE_KEY)
  localStorage.removeItem(PART_KEY)
}
