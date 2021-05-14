<template>
  <div>
    <h2>Sign Up</h2>

    <el-input
      type="text"
      v-model="username"
      placeholder="Username"
      clearable
    ></el-input>
    <br />
    <br />
    <el-input
      type="text"
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-input
      type="text"
      v-model="passwordConfirm"
      placeholder="Confirm your password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-button type="success" @click="handleSignUp">Sign Up </el-button>
    <br />
    <br />
    <router-link to="/login">
      <el-button plain type="primary"> or Back to Log In </el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
ref: username = ''
ref: password = ''
ref: passwordConfirm = ''
ref: signUpSuccessed = false
const handleSignUp = () => {
  if (username === '' || password === '' || passwordConfirm === '') {
    ElMessage({
      duration: 1200,
      type: 'error',
      message: `Username or password is empty!`
    })
    return
  }

  if (password !== passwordConfirm) {
    ElMessage({
      duration: 1200,
      type: 'error',
      message: `Password does not match!`
    })
    return
  }

  axios
    .post('http://localhost:3000/api/signup', {
      username: username,
      password: password
    })
    .then(() => {
      ElMessage({
        duration: 1200,
        type: 'success',
        message: `Sign up success! Going back to login page...`
      })
      setTimeout(() => {
        router.push('./login')
      }, 1200)
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
