import {
  DARK_THEME_COLOR,
  LOGO_COLOR,
  HEADER_HEIGHT,
  SIDER_WIDTH,
  FOOTER_HEIGHT
} from './constants'

export const appSettings: App.State = {
  theme: {
    mode: 'dark',
    themeColor: DARK_THEME_COLOR,
    logoColor: LOGO_COLOR
  },
  header: {
    show: true,
    border: true,
    height: HEADER_HEIGHT,
    logo: '',
    title: ''
  },
  sider: {
    show: true,
    border: true,
    width: SIDER_WIDTH
  },
  footer: {
    show: true,
    border: true,
    height: FOOTER_HEIGHT,
    copyright: 'Copyright © 2023 xclss99'
  },
  device: 'desktop'
}
