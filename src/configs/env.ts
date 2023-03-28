export const { VITE_NODE_ENV, VITE_BASE_URL, VITE_APP_TITLE, VITE_APP_DESC } = import.meta.env

console.log(VITE_NODE_ENV, VITE_BASE_URL, VITE_APP_TITLE, VITE_APP_DESC)
export const service: Http.Service = {
  env: VITE_NODE_ENV || 'development',
  baseURL: VITE_BASE_URL || 'http://localhost:3000'
}
