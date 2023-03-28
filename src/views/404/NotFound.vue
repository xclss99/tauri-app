<template>
  <n-result
    status="404"
    title="404 Not Found"
    description="Life is always a little absurd"
    style="margin-top: 50px"
  >
    <template #footer>
      <n-button @click="backHome">Back to Home</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const backHome = () => {
  router.push({ name: 'Home' })
}
</script>
