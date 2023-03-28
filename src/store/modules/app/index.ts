import { defineStore } from 'pinia'
import { appSettings, LIGHT_THEME_COLOR, DARK_THEME_COLOR, SIDER_WIDTH } from '@/configs'

export default defineStore('app', {
  state: (): App.State => ({ ...appSettings }),
  getters: {
    appCurrentSetting(state: App.State): App.State {
      return { ...state }
    },
    appDevice(state: App.State) {
      return state.device
    }
  },
  actions: {
    /** Change theme mode */
    setThemeMode(mode: App.ThemeMode) {
      this.theme.mode = mode
      switch (mode) {
        case 'dark':
          this.theme.themeColor = DARK_THEME_COLOR
          break
        case 'light':
          this.theme.themeColor = LIGHT_THEME_COLOR
          break
      }
    },
    /** Set current device (App.Device: desktop, tablet, mobile) */
    setDevice(device: App.Device) {
      this.device = device
    },
    /** Render or do not render sider, non-collapse */
    renderSider(flag: boolean) {
      this.sider.show = flag
    },
    /** expand sider */
    showSider() {
      this.sider.width = SIDER_WIDTH
    },
    /** collapse sider */
    hideSider() {
      this.sider.width = 0
    }
  }
})
