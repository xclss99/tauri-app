import { createPinia } from 'pinia'
import useAppStore from './modules/app'
import useAuthStore from './modules/auth'

const pinia = createPinia()

export { useAppStore, useAuthStore }
export default pinia
