declare namespace Auth {
  interface UserInfo {
    id?: number
    mobile?: string
    username?: string
    password?: string
    sex?: import('@/configs').Sex
    avatar?: string
    profile?: string
    signUpTime?: Date
  }
  interface State {
    userInfo: UserInfo
    token: string
    loginLoading: boolean
  }
}
