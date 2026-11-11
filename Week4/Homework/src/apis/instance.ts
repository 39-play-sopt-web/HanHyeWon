import axios from 'axios'
import { getAuthorizationCode } from '../utils/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

instance.interceptors.request.use((config) => {
  const authorizationCode = getAuthorizationCode()
  if (authorizationCode) {
    config.headers.Authorization = authorizationCode
  }
  return config
})

export default instance
