export const MOBILE_DEVICE_WIDTH = 610
export const TABLET_DEVICE_WIDTH = 902
export const HEADER_HEIGHT = 100
export const SIDER_WIDTH = 220
export const FOOTER_HEIGHT = 100
export const BREAK_POINTS = { xs: 0, s: 730, m: 881, l: 1160, xl: 1536, xxl: 1920 }
export const LIGHT_THEME_COLOR = '#2bb7b3'
export const DARK_THEME_COLOR = '#066a70'
export const LOGO_COLOR = '#ed6c00'
/** 默认Local缓存期限为3天 */
export const STORAGE_EXPIRE = 3600 * 24 * 7

/** 账号类型 (mobile: 0, username: 1) */
export enum AccountType {
  mobile,
  username
}

/** 用户性别 (man: 0, woman: 1, secret: 2) */
export enum Sex {
  man,
  woman,
  secret
}
