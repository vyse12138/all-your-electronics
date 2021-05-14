<template>
  <div>
    <h2>Log In</h2>
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
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

const store = useStore()
ref: username = ''
ref: password = ''
ref: loginFailed = false
const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login', {
      username: username,
      password: password
    })
    .then((res) => {
      loginFailed = !res.data
      if (!loginFailed) {
        store.commit('login', username)
        ElMessage({
          duration: 1200,
          type: 'success',
          message: `Login success! Going to the home page...`
        })
        setTimeout(() => {
          router.push('./')
        }, 1200)
      } else {
        ElMessage({
          duration: 1200,
          type: 'error',
          message: `Username or password is invalid!`
        })
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
