import { createAlova } from 'alova'
import { service } from '@/configs'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'

export const alovaInstance = createAlova({
  baseURL: service.baseURL,

  statesHook: VueHook,

  requestAdapter: GlobalFetch(),

  // 请求拦截器
  beforeRequest(config) {
    //
  },

  // 响应拦截器，也与axios类似
  async responsed(response, config) {
    const json = await response.json()
    if (json.code !== 200) {
      // 这边抛出错误时，将会进入请求失败拦截器内
      throw new Error(json.message)
    }
    return json.data
  }
})
