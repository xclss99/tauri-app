<template>
  <n-el tag="div" class="container">
    <n-card hoverable content-style="padding: 24px 48px 48px" style="width: 400px">
      <n-space vertical :size="15">
        <h1>欢迎使用{{ VITE_APP_TITLE }}</h1>
        <n-tabs
          type="line"
          size="large"
          justify-content="space-evenly"
          pane-style="padding: 20px 0"
        >
          <n-tab-pane name="手机号">
            <n-space vertical :size="15">
              <n-input-group>
                <n-select
                  v-model:value="region"
                  :options="regionOptions"
                  size="large"
                  style="width: 33%"
                />
                <n-input
                  v-model:value="mobile"
                  placeholder="手机号"
                  clearable
                  size="large"
                  @change="handleMobileChange"
                ></n-input>
              </n-input-group>
              <n-input
                v-model:value="password"
                placeholder="密码"
                clearable
                size="large"
                @change="handlePasswordChange"
              ></n-input>
            </n-space>
          </n-tab-pane>
          <n-tab-pane name="用户名">
            <n-space vertical :size="15">
              <n-input
                v-model:value="username"
                placeholder="用户名"
                clearable
                size="large"
                @change="handleUsernameChange"
              ></n-input>
              <n-input
                v-model:value="password"
                placeholder="密码"
                clearable
                size="large"
                @change="handlePasswordChange"
              ></n-input>
            </n-space>
          </n-tab-pane>
        </n-tabs>
        <n-button type="primary" size="large" style="width: 100%" @click="handleLogin">
          登 录
        </n-button>
        <n-space justify="space-between">
          <n-button text type="success" size="middle" @click="handleVerifyCodeLogin">
            验证码登录/注册
          </n-button>
          <n-button text type="success" size="middle" @click="handleForgetPassword">
            忘记密码
          </n-button>
        </n-space>
        <n-divider />
        <n-button size="large" style="width: 100%" @click="handleLogin"> 微信扫码登录 </n-button>
      </n-space>
    </n-card>
    <n-space :size="15" class="bottom-bar">
      <n-button text type="success" size="middle" @click="handleVerifyCodeLogin">
        语言设置
      </n-button>
      <n-button text type="success" size="middle" @click="handleAppearanceSetting">
        外观设置
      </n-button>
    </n-space>
    <n-modal
      v-model:show="showModal"
      preset="card"
      title="设置"
      size="huge"
      style="width: calc(100% - 40px)"
    >
      内容
    </n-modal>
  </n-el>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectOption } from 'naive-ui'
import { VITE_APP_TITLE } from '@/configs'
// import Setting from '@/components/setting/Setting.vue'

const region = ref('+86')
const mobile = ref('')
const username = ref('')
const password = ref('')
const regionOptions: SelectOption[] = [
  {
    label: '+86',
    value: '+86'
  }
]
const handleMobileChange = (value: string) => {
  console.log(value)
}
const handleUsernameChange = (value: string) => {
  console.log(value)
}
const handlePasswordChange = (value: string) => {
  console.log(value)
}

const handleLogin = () => {}
const handleVerifyCodeLogin = () => {}
const handleForgetPassword = () => {}

const showModal = ref(false)
const handleAppearanceSetting = () => {
  showModal.value = !showModal.value
}
</script>

<style scoped>
.container {
  background: var(--modal-color);
  justify-content: center;
  user-select: none;
}
.n-divider:not(.n-divider--vertical) {
  margin: 0 0 5px;
}
.bottom-bar {
  margin-top: 15px;
}
</style>
