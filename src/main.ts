import { createApp } from 'vue'
import App from './App.vue'

import pinia from './store'
import router from './router'
import { setupNaiveUI } from './plugins'

import './assets/styles/main.css'

const setupApp = async () => {
  const app = createApp(App)

  // tree shaking NaiveUI
  setupNaiveUI(app)

  app.use(pinia)
  app.use(router)

  app.mount('#app')

  console.log('tauri-vite-app running at port 1420')
}

setupApp()
