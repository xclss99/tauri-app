declare namespace App {
  type ThemeMode = 'light' | 'dark'
  type Device = 'desktop' | 'tablet' | 'mobile'
  interface Theme {
    mode: ThemeMode
    themeColor: string
    logoColor: string
  }
  interface Header {
    show: boolean
    border: boolean
    height: number
    logo: string
    title: string
  }
  interface Sider {
    show: boolean
    border: boolean
    width: number
  }
  interface Footer {
    show: boolean
    border: boolean
    height: number
    copyright: string
  }
  interface State {
    theme: Theme
    header: Header
    sider: Sider
    footer: Footer
    device: Device
  }
}
