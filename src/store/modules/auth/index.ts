import { defineStore } from 'pinia'
import { getToken, getUserInfo, clearAuthStorage } from './utils'

export default defineStore('auth', {
  state: (): Auth.State => ({
    userInfo: getUserInfo(),
    token: getToken(),
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token)
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      clearAuthStorage()
      this.$reset()
    }
  }
})
