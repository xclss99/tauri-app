import { STORAGE_EXPIRE } from '@/configs'

export class LocalStorage<T extends Storage.Local> {
  set<K extends keyof T>(key: K, value: T[K], expire: number = STORAGE_EXPIRE) {
    const storageData: Storage.Data<T[K]> = {
      value,
      expire
    }
    const json = JSON.stringify(storageData)
    window.localStorage.setItem(key as string, json)
  }

  get<K extends keyof T>(key: K) {
    const json = window.localStorage.getItem(key as string)
    if (json) {
      let storageData: Storage.Data<T[K]> | null = null
      storageData = JSON.parse(json)
      if (storageData) {
        const { value, expire } = storageData
        // 在有效期内直接返回
        if (expire >= Date.now()) {
          return value as T[K]
        }
      }
      this.remove(key)
      return null
    }
    return null
  }

  remove(key: keyof T) {
    window.localStorage.removeItem(key as string)
  }

  clear() {
    window.localStorage.clear()
  }
}
