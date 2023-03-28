declare namespace Storage {
  interface Session {}
  interface Local {
    token: string
    theme: App.Theme
    userInfo: Auth.UserInfo
  }
  interface Data<T> {
    value: T
    expire: number
  }
}
