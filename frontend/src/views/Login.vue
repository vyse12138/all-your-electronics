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
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()
ref: username = ''
ref: password = ''
ref: loginFailed = false
ref: loginSuccessed = false
const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login', {
      username: username,
      password: password
    })
    .then((res) => {
      console.log(res.data)
      loginFailed = !res.data
      if (!loginFailed) {
        loginSuccessed = true
        store.commit('login')
        setTimeout(() => {
          router.push('./')
        }, 1000)
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
