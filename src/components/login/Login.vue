<template>
  <div class="container">
    <div class="login-box">
      <div class="top-bar"> Welcome </div>
      <div class="input-box">
        <input placeholder="手机号/用户名" />
        <input placeholder="密码" />
        <div class="bottom-bar">
          <div class="row">
            <input type="checkbox" />
            记住密码
          </div>
          <div class="text-button">忘记密码</div>
        </div>
      </div>
      <button class="login-button">登录</button>
      <button class="signup-button">注册</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  align-items: center;
  background: linear-gradient(45deg, rgb(255, 126, 126), rgb(106, 106, 255));
}
.login-box {
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  font-family: '微软雅黑';
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-box:hover {
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.08),
    0 5px 12px 4px rgba(0, 0, 0, 0.08);
}
.top-bar {
  padding: 32px 0 0;
  color: rgb(31, 31, 31);
  font-weight: bold;
  font-size: 32px;
  font-family: 'Courier New', Courier, monospace;
}
.input-box {
  padding: 25px 0 10px;
}
.input-box input {
  margin: 10px 0;
}
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 3.6em;
}
.text-button:hover {
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  user-select: none;
}
.login-button,
.signup-button {
  margin: 8px 0;
  background: #d2568c9c;
  color: white;
  letter-spacing: 10px;
  width: 218px;
}
.login-button:active {
  background-color: #c2306f9c;
}
.signup-button {
  background: #6f5fff9c;
}
.signup-button:active {
  background-color: #4431ee9c;
}
</style>
