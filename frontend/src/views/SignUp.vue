<template>
  <div>
    <br />
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
    <el-alert
      v-if="signupFailed"
      :closable="false"
      title="Username or password is empty!"
      type="error"
    >
    </el-alert>
    <el-alert
      v-if="passwordUnmatched"
      :closable="false"
      title="Password does not match!"
      type="error"
    >
    </el-alert>
    <el-alert
      v-if="signUpSuccessed"
      :closable="false"
      title="Sign up success! Returning to login page..."
      type="success"
    >
    </el-alert>
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
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
ref: username = ''
ref: password = ''
ref: passwordConfirm = ''
ref: signupFailed = false
ref: passwordUnmatched = false
ref: signUpSuccessed = false
const handleSignUp = () => {
  if (username === '' || password === '') {
    signupFailed = true
    return
  }
  signupFailed = false

  if (password !== passwordConfirm) {
    passwordUnmatched = true
    return
  }
  passwordUnmatched = false

  axios
    .post('http://localhost:3000/api/signup', {
      username: username,
      password: password
    })
    .then(() => {
      signUpSuccessed = true
      setTimeout(() => {
        router.push('./login')
      }, 1000)
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
