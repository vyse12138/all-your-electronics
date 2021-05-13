<template>
  <div>
    <br />

    <el-input v-model="username" placeholder="Username"></el-input>
    <br />
    <br />
    <el-input
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-alert
      v-if="loginFailed"
      :closable="false"
      title="Username or password is invalid!"
      type="error"
    >
    </el-alert>
    <el-alert
      v-if="loginSuccessed"
      :closable="false"
      title="Login success! Going to the home page..."
      type="success"
    >
    </el-alert>
    <br />
    <el-button type="primary" @click="handleLogin"> Log In </el-button>
    <br />
    <br />
    <router-link to="/signup">
      <el-button plain type="success"> or Sign Up </el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router/index'
import axios from 'axios'
const username = ref('')
const password = ref('')
const loginFailed = ref(false)
const loginSuccessed = ref(false)
const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login', {
      username: username.value,
      password: password.value
    })
    .then((res) => {
      console.log(res.data)
      loginFailed.value = !res.data
      if (!loginFailed.value) {
        loginSuccessed.value = true
        setTimeout(() => {
          router.push('./')
        }, 2000)
      }
    })
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
.el-alert {
  width: 300px;
  margin: 0 auto;
}
</style>
