<template>
  <n-config-provider :theme="theme" :breakpoints="BREAK_POINTS">
    <Layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Layout from './layout/Layout.vue'
import { useAppStore, useAuthStore } from './store'
import { lightTheme, darkTheme } from 'naive-ui'
import { BREAK_POINTS } from './configs'
import router from './router'
import { isEmpty } from 'class-validator'

const appStore = useAppStore()

const theme = ref()

type ThemeMode = 'light' | 'dark'
const setTheme = (mode: ThemeMode) => {
  switch (mode) {
    case 'dark':
      theme.value = darkTheme
      break
    case 'light':
      theme.value = lightTheme
      break
  }
}

onMounted(() => {
  setTheme(appStore.theme.mode)
})

watch(
  appStore.theme,
  (newVal) => {
    setTheme(newVal.mode)
  },
  { immediate: true }
)

const authStore = useAuthStore()
const checkToken = () => {
  if (isEmpty(authStore.token)) {
    router.push({ name: 'Login' })
  }
}

onMounted(() => {
  checkToken()
})

watch(
  () => router.currentRoute.value.name,
  () => {
    checkToken()
  }
)
</script>
