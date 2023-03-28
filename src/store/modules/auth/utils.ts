import { LocalStorage } from '@/utils'

const localStorage = new LocalStorage()

export const getToken = () => {
  return localStorage.get('token') || ''
}

export const getUserInfo = () => {
  const emptyInfo: Auth.UserInfo = {}
  return localStorage.get('userInfo') || emptyInfo
}

/** 清除用户相关缓存 */
export const clearAuthStorage = () => {
  localStorage.remove('token')
  localStorage.remove('userInfo')
}
